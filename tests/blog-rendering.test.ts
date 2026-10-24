import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { articles, getPublishedAuthors, getRelatedArticles } from "../app/lib/content.ts";

for (const post of articles) {
  test(`${post.slug} has two distinct related posts, honouring manual choices first`, () => {
    const related = getRelatedArticles(post);
    assert.equal(related.length, 2);
    assert.equal(new Set(related.map(item => item.slug)).size, 2);
    assert.ok(related.every(item => item.slug !== post.slug));
    if (post.related?.length) assert.equal(`/blog/${related[0].slug}`, post.related[0].href);
  });
}

test("author pages are limited to authors with published posts", () => {
  assert.ok(getPublishedAuthors().length > 0);
  for (const author of getPublishedAuthors()) assert.ok(articles.some(post => post.author === author.slug));
});

function sources(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sources(path) : /\.tsx?$/.test(path) ? [path] : [];
  });
}

function importsFrom(path: string, visited = new Set<string>()): Set<string> {
  path = resolve(path);
  if (visited.has(path)) return visited;
  visited.add(path);
  const source = readFileSync(path, "utf8");
  for (const match of source.matchAll(/(?:from\s+|import\s*)["']((?:\.|@\/)[^"']+)["']/g)) {
    const base = match[1].startsWith("@/") ? resolve(match[1].slice(2)) : resolve(dirname(path), match[1]);
    const dependency = [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts")].find(candidate => existsSync(candidate) && /\.tsx?$/.test(candidate));
    if (dependency) importsFrom(dependency, visited);
  }
  return visited;
}

test("client graphs never import the content registry or build validator", () => {
  const entries = sources("app").filter(path => /^["']use client["']/.test(readFileSync(path, "utf8")));
  for (const entry of entries) {
    const graph = importsFrom(entry);
    assert.ok(!graph.has(resolve("app/lib/content.ts")), entry);
    assert.ok(!graph.has(resolve("app/lib/blog-validation.ts")), entry);
    for (const path of graph) assert.doesNotMatch(readFileSync(path, "utf8"), /["'](?:node:)?fs(?:\/promises)?["']/, path);
  }
});

test("page content has no filesystem or validation import at request time", () => {
  for (const path of importsFrom("app/lib/content.ts")) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /["'](?:node:)?fs(?:\/promises)?["']|blog-validation/, path);
  }
});

test("share-image routes explicitly use Node and the common noindex template", () => {
  for (const file of sources("app/blog").filter(path => /opengraph-image/.test(path))) {
    assert.match(readFileSync(file, "utf8"), /runtime = "nodejs"/);
    assert.ok(importsFrom(file).has(resolve("app/lib/blog-share-image.tsx")));
    assert.ok(!importsFrom(file).has(resolve("app/lib/blog-validation.ts")));
  }
  assert.match(readFileSync("app/lib/blog-share-image.tsx", "utf8"), /"X-Robots-Tag": "noindex, nofollow"/);
});
