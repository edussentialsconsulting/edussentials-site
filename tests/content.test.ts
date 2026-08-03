import { test } from "node:test";
import assert from "node:assert/strict";
import { articles, getArticle, type Article } from "../app/lib/content.ts";

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
    assert.ok(article.faqs.length > 0, "article has no FAQs");
  });

  test(`article "${article.slug}" has valid ISO dates in order`, () => {
    assert.match(article.datePublished, ISO_DATE_RE, "datePublished is not YYYY-MM-DD");
    assert.match(article.dateModified, ISO_DATE_RE, "dateModified is not YYYY-MM-DD");
    assert.ok(
      new Date(article.dateModified).getTime() >= new Date(article.datePublished).getTime(),
      "dateModified is before datePublished",
    );
  });

  test(`article "${article.slug}" FAQs have non-empty question and answer`, () => {
    for (const faq of article.faqs) {
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
    for (const related of article.related) {
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
