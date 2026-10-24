import { getReservedBlogSlugs, validateArticles, validateTopicIntros, validateProductionDrafts } from "../app/lib/blog-validation.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
import { articles, getArticle, getArticleCta, getArticleCtaStage, type Article } from "../app/lib/content.ts";

import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { authors, DEFAULT_AUTHOR } from "../app/content/authors.ts";
import { BLOG_STAGES, BLOG_TOPICS, RESERVED_BLOG_SLUGS } from "../app/lib/blog-taxonomy.ts";
import { CAL_LINK } from "../app/lib/site.ts";

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function assertNonEmpty(value: string, message: string) {
  assert.ok(value.trim().length > 0, message);
}

test("article registry has at least one article", () => {
  assert.ok(articles.length > 0);
});

test("article slugs are unique", () => {
  const slugs = articles.map((a) => a.slug);
  assert.equal(new Set(slugs).size, slugs.length, "duplicate slug found in registry");
});

for (const article of articles) {
  test(`article "${article.slug}" has required fields`, () => {
    assertNonEmpty(article.slug, "slug is empty");
    assertNonEmpty(article.title, "title is empty");
    assertNonEmpty(article.shortTitle, "shortTitle is empty");
    assertNonEmpty(article.metaTitle, "metaTitle is empty");
    assertNonEmpty(article.metaDescription, "metaDescription is empty");
    assertNonEmpty(article.standfirst, "standfirst is empty");
    assert.ok(article.sections.length > 0, "article has no sections");
    assert.ok(article.faqs === undefined || Array.isArray(article.faqs), "article FAQs must be an array when supplied");
  });

  test(`article "${article.slug}" has valid ISO dates in order`, () => {
    assert.match(article.publishedAt, ISO_DATE_RE, "datePublished is not YYYY-MM-DD");
    assert.match(article.updatedAt, ISO_DATE_RE, "dateModified is not YYYY-MM-DD");
    assert.ok(
      new Date(article.updatedAt).getTime() >= new Date(article.publishedAt).getTime(),
      "dateModified is before datePublished",
    );
  });

  test(`article "${article.slug}" FAQs have non-empty question and answer`, () => {
    for (const faq of article.faqs ?? []) {
      assertNonEmpty(faq.question, `empty FAQ question in ${article.slug}`);
      assertNonEmpty(faq.answer, `empty FAQ answer in ${article.slug}`);
    }
  });

  test(`article "${article.slug}" sections have at least one paragraph each`, () => {
    for (const section of article.sections) {
      assert.ok(section.paragraphs.length > 0, `section with no paragraphs in ${article.slug}`);
      for (const paragraph of section.paragraphs) {
        assertNonEmpty(paragraph.text, `empty paragraph text in ${article.slug}`);
      }
    }
  });

  test(`article "${article.slug}" related links point somewhere real`, () => {
    for (const related of article.related ?? []) {
      assertNonEmpty(related.href, `empty related href in ${article.slug}`);
      assertNonEmpty(related.label, `empty related label in ${article.slug}`);
      if (related.href.startsWith("/blog/")) {
        const targetSlug = related.href.replace("/blog/", "");
        assert.ok(
          articles.some((a) => a.slug === targetSlug),
          `related link in ${article.slug} points to unknown article slug "${targetSlug}"`,
        );
      }
    }
  });
}

test("getArticle finds a registered article by slug", () => {
  const first: Article = articles[0];
  assert.equal(getArticle(first.slug)?.slug, first.slug);
});

test("getArticle returns undefined for an unknown slug", () => {
  assert.equal(getArticle("this-slug-does-not-exist"), undefined);
});

// Schema failures must be caught by the same validator used during the build.
for (const [name, change, message] of [
  ["missing topic", { topic: undefined }, /invalid topic/],
  ["misspelt topic", { topic: "Admissions & Proces" }, /invalid topic/],
  ["removed topic", { topic: "Opinions" }, /invalid topic/],
  ["empty levels", { levels: [] }, /invalid levels/],
  ["PhD level", { levels: ["phd"] }, /invalid levels/],
  ["empty stages", { stage: [] }, /invalid stage/],
  ["unknown stage", { stage: ["applying-later"] }, /invalid stage/],
  ["unknown author", { author: "missing-author" }, /unknown author/],
  ["impossible date", { publishedAt: "2026-02-30" }, /valid YYYY-MM-DD/],
  ["earlier update", { updatedAt: "2000-01-01" }, /precedes/],
  ["empty short answer", { shortAnswer: "" }, /must contain text/],
  ["one-sentence answer", { shortAnswer: "One sentence." }, /two to four sentences/],
  ["placeholder source", { sources: [{ title: "[VERIFY]", url: "https://example.com", accessedAt: "2026-10-24" }] }, /placeholder source/],
  ["unsafe source URL", { sources: [{ title: "Example", url: "javascript:alert(1)", accessedAt: "2026-10-24" }] }, /HTTP URL/],
  ["invalid access date", { sources: [{ title: "Example", url: "https://example.com", accessedAt: "yesterday" }] }, /valid YYYY-MM-DD/],
  ["self related link", { related: [{ href: `/blog/${articles[0].slug}`, label: "Self" }] }, /invalid related/],
  ["unknown related link", { related: [{ href: "/blog/missing", label: "Missing" }] }, /invalid related/],
] as const) {
  test(`build validator rejects ${name}`, () => {
    const posts = structuredClone(articles);
    Object.assign(posts[0], change);
    assert.throws(() => validateArticles(posts), message);
  });
}

for (const slug of RESERVED_BLOG_SLUGS) {
  test(`build validator rejects reserved slug ${slug}`, () => {
    const posts = structuredClone(articles);
    posts[0].slug = slug;
    assert.throws(() => validateArticles(posts), /reserved post slug/);
  });
}

test("build validator rejects duplicate slugs", () => {
  assert.throws(() => validateArticles([...articles, articles[0]]), /duplicate post slug/);
});

test("sources, FAQs, related reading and CTA overrides may be omitted", () => {
  const posts = structuredClone(articles);
  for (const post of posts) {
    delete post.sources;
    delete post.faqs;
    delete post.related;
    delete post.cta;
  }
  assert.doesNotThrow(() => validateArticles(posts));
});

test("a future named route and a route inside a group reserve their post slugs", () => {
  const prefix = join(tmpdir(), "edussentials-blog-routes-");
  const directory = mkdtempSync(prefix);
  try {
    mkdirSync(join(directory, "archive"));
    mkdirSync(join(directory, "(public)", "feed"), { recursive: true });
    mkdirSync(join(directory, "[slug]"));
    mkdirSync(join(directory, "_components"));
    const reserved = getReservedBlogSlugs(directory);
    assert.ok(reserved.has("archive"));
    assert.ok(reserved.has("feed"));
    assert.ok(!reserved.has("[slug]"));
    assert.ok(!reserved.has("_components"));
    const posts = structuredClone(articles);
    posts[0].slug = "archive";
    assert.throws(() => validateArticles(posts, reserved), /reserved post slug/);
  } finally {
    if (!resolve(directory).startsWith(resolve(prefix))) throw new Error("Unexpected temporary test path");
    rmSync(directory, { recursive: true, force: true });
  }
});

test("CTA precedence is independent of the post's stage order", () => {
  const post = { ...articles[0], cta: undefined };
  assert.equal(getArticleCta({ ...post, stage: ["planning-early", "postgraduate", "applying-now"] }).href, CAL_LINK);
  assert.equal(getArticleCta({ ...post, stage: ["planning-early", "postgraduate", "applying-now"] }).heading, BLOG_STAGES[0].cta.heading);
  assert.equal(getArticleCta({ ...post, stage: ["planning-early", "postgraduate"] }).heading, BLOG_STAGES.find(stage => stage.slug === "postgraduate")!.cta.heading);
  assert.equal(getArticleCta({ ...post, stage: ["planning-early"] }).href, "/career-labs");
});

test("an explicit CTA overrides its stage defaults", () => {
  const cta = { heading: "Existing heading", body: "Existing body", href: "/contact", label: "Contact" };
  assert.deepEqual(getArticleCta({ ...articles[0], cta }), cta);
});

test("original posts reference the default founder and retain their card summaries", () => {
  for (const slug of ["study-abroad-after-12th", "ucas-for-indian-students", "ivy-league-from-india", "how-to-ask-for-a-strong-letter-of-recommendation", "ivy-league-personal-statement", "supplemental-essays", "common-app-essays-that-worked-analysis"]) {
    const post = getArticle(slug)!;
    assert.equal(post.author, DEFAULT_AUTHOR);
    assert.equal(post.summary ?? post.metaDescription, post.metaDescription);
  }
});

test("new metadata copy follows the requested writing constraints", () => {
  const drafts = [
    ...articles.map(post => post.shortAnswer),
    ...Object.values(authors).map(author => author.bio),
    ...BLOG_TOPICS.flatMap(topic => "intro" in topic ? [topic.intro] : []),
    ...BLOG_STAGES.flatMap(stage => [stage.description, stage.cta.heading, stage.cta.body]),
  ];
  for (const draft of drafts) {
    assert.doesNotMatch(draft, /[—;:]|not just\b|with the right\b|unlock your potential|dream university|\bjourney\b|\bdelve\b|\bfoster\b|\bleverage\b|\bholistic\b|world-class|\bseamless\b|\p{Extended_Pictographic}/iu);
  }
  for (const topic of BLOG_TOPICS) {
    if (!("intro" in topic)) continue;
    const words = topic.intro.replace("[FOUNDER DRAFT]", "").trim().split(/\s+/).length;
    assert.ok(words >= 80 && words <= 150, `${topic.label}: ${words} words`);
  }
});

test("CTA stage overrides select the complete box and must belong to the post", () => {
  const lor = articles.find(post => post.slug.startsWith("how-to-ask"))!;
  assert.equal(getArticleCtaStage(lor), "postgraduate");
  assert.deepEqual(getArticleCta(lor), BLOG_STAGES.find(stage => stage.slug === "postgraduate")!.cta);
  const posts = structuredClone(articles);
  posts[0].cta = "postgraduate";
  assert.throws(() => validateArticles(posts), /CTA stage must belong/);
});

test("a custom CTA requires all four fields without stage defaults", () => {
  const cta = { heading: "Talk", body: "Talk about applications.", label: "Contact", href: "/contact" };
  assert.equal(getArticleCtaStage({ ...articles[0], cta }), undefined);
  for (const field of Object.keys(cta)) {
    const posts = structuredClone(articles);
    posts[0].cta = { ...cta };
    delete (posts[0].cta as unknown as Record<string, string>)[field];
    assert.throws(() => validateArticles(posts), /CTA .* must contain text/);
  }
});

test("a second post requires a hub intro but a single post does not", () => {
  assert.doesNotThrow(() => validateTopicIntros(articles));
  assert.throws(() => validateTopicIntros(articles, [{ label: "Essays & Applications" }]), /write an intro.*second post/);
  assert.doesNotThrow(() => validateTopicIntros(articles, [{ label: "Courses & Careers" }]));
});

for (const marker of ["[FOUNDER DRAFT]", "[FOUNDER INPUT: details]", "[VERIFY: official source]"]) {
  test(`draft gate blocks production and allows preview and local for ${marker}`, () => {
    for (const field of ["posts", "authors", "topics", "stages"]) {
      const content = { [field]: [{ text: marker }] };
      assert.throws(() => validateProductionDrafts(content, "production"), /unresolved draft/);
      assert.doesNotThrow(() => validateProductionDrafts(content, "preview"));
      assert.doesNotThrow(() => validateProductionDrafts(content, undefined));
    }
    assert.doesNotThrow(() => validateProductionDrafts({ text: "Approved copy" }, "production"));
  });
}
