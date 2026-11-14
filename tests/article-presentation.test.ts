import { test } from "node:test";
import assert from "node:assert/strict";
import { articles } from "../app/lib/content.ts";
import { ARTICLE_AUTHOR, BASE_URL } from "../app/lib/site.ts";
import { buildArticleMetadata, buildArticleSchema, formatArticleDate } from "../app/lib/article-presentation.ts";

const minorWords = new Set("a an the and but or nor for as at by from in into of on onto per to up via with".split(" "));

test("article SEO descriptions and titles are unique", () => {
  for (const field of ["metaTitle", "metaDescription"] as const) {
    assert.equal(new Set(articles.map(a => a[field])).size, articles.length, `duplicate ${field}`);
  }
});

test("article dates have a stable reader-facing format", () => {
  assert.equal(formatArticleDate("2026-08-02"), "2 August 2026");
  assert.equal(formatArticleDate("2026-11-14"), "14 November 2026");
});

for (const article of articles) {
  test(`${article.slug} follows the publication contract`, () => {
    assert.deepEqual(article.author, ARTICLE_AUTHOR);
    assert.ok(article.metaTitle.endsWith(" | Edussentials"));
    for (const title of [article.title, article.shortTitle, article.metaTitle]) {
      const words = title.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g) ?? [];
      words.forEach((word, index) => {
        if (/^\d/.test(word) || (index > 0 && minorWords.has(word.toLowerCase()))) return;
        assert.match(word, /^[A-Z]/, `principal word must be capitalised: ${word} in ${title}`);
      });
    }
    for (const date of [article.datePublished, article.dateModified]) {
      assert.equal(new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10), date);
    }
    const url = `${BASE_URL}/blog/${article.slug}`;
    const meta = buildArticleMetadata(article);
    assert.equal(meta.alternates?.canonical, url);
    assert.deepEqual(meta.authors, [article.author]);
    const og = meta.openGraph;
    assert.ok(og && "type" in og && og.type === "article");
    assert.equal(og.publishedTime, article.datePublished);
    assert.equal(og.modifiedTime, article.dateModified);
    assert.deepEqual(og.authors, [article.author.url]);
    assert.ok(og.images && meta.twitter?.images);
    assert.equal(meta.description, article.metaDescription);
    const graph = buildArticleSchema(article)["@graph"];
    const schema = graph.find(node => node["@type"] === "Article");
    assert.ok(schema && "headline" in schema);
    assert.equal(schema.headline, article.title);
    assert.equal(schema.mainEntityOfPage, url);
    assert.equal(schema.datePublished, article.datePublished);
    assert.equal(schema.dateModified, article.dateModified);
    assert.equal(schema.author?.name, article.author.name);
    assert.equal(graph.filter(node => node["@type"] === "FAQPage").length, article.faqs.length ? 1 : 0);
  });
}
