import { test } from "node:test";
import assert from "node:assert/strict";
import * as sitemapModule from "../app/sitemap.ts";
import { articles } from "../app/lib/content.ts";
import { BASE_URL, NAV_LINKS } from "../app/lib/site.ts";

// tsx's CJS/ESM interop occasionally double-wraps the default export; unwrap defensively.
type SitemapFn = () => ReturnType<typeof import("../app/sitemap.ts").default>;
function unwrapDefault(mod: unknown): SitemapFn {
  let current = (mod as { default: unknown }).default;
  while (typeof current !== "function" && current && typeof current === "object" && "default" in current) {
    current = (current as { default: unknown }).default;
  }
  return current as SitemapFn;
}

const sitemap = unwrapDefault(sitemapModule);
const entries = sitemap();
const urls = entries.map((e) => e.url);

test("sitemap includes every static nav route", () => {
  for (const link of NAV_LINKS) {
    const expected = link.href === "/" ? BASE_URL : `${BASE_URL}${link.href}`;
    assert.ok(urls.includes(expected), `sitemap is missing ${expected}`);
  }
});

test("sitemap includes every published article", () => {
  for (const article of articles) {
    const expected = `${BASE_URL}/blog/${article.slug}`;
    assert.ok(urls.includes(expected), `sitemap is missing ${expected}`);
  }
});

test("sitemap has no duplicate URLs", () => {
  assert.equal(new Set(urls).size, urls.length, "sitemap contains duplicate URLs");
});

test("every sitemap entry is a well-formed absolute URL under the base domain", () => {
  for (const url of urls) {
    assert.ok(url.startsWith(BASE_URL), `${url} is not under ${BASE_URL}`);
    assert.doesNotThrow(() => new URL(url), `${url} is not a valid URL`);
  }
});
