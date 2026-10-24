import { test } from "node:test";
import assert from "node:assert/strict";
import { articles, filterBlogPosts, getFilterControls, getStagePosts, getTopicHubs, getTopicHref, getPostsCtaStage, newestPosts, type Article } from "../app/lib/content.ts";
import { validateTopicIntros } from "../app/lib/blog-validation.ts";

const slugs = (posts: readonly Article[]) => posts.map(post => post.slug);

test("stage and level filters intersect without changing the source registry", () => {
  const before = slugs(articles);
  const result = filterBlogPosts({ stage: "postgraduate", level: "undergraduate" });
  assert.equal(result.active, true);
  assert.deepEqual(slugs(result.posts), ["how-to-ask-for-a-strong-letter-of-recommendation"]);
  assert.equal(filterBlogPosts({ stage: "planning-early", level: "postgraduate" }).posts.length, 0);
  assert.deepEqual(slugs(articles), before);
});

for (const query of [{ stage: "unknown" }, { level: "phd" }, { stage: ["applying-now", "postgraduate"] }, { stage: "postgraduate", level: "unknown" }, { destination: "unknown" }]) {
  test(`invalid filter values return the unfiltered registry ${JSON.stringify(query)}`, () => {
    const result = filterBlogPosts(query);
    assert.equal(result.active, false);
    assert.deepEqual(slugs(result.posts), slugs(newestPosts(articles)));
  });
}

test("destination filtering works without exposing a below-threshold control", () => {
  const result = filterBlogPosts({ destination: "uk" });
  assert.deepEqual(slugs(result.posts), ["ucas-for-indian-students"]);
  assert.deepEqual(getFilterControls(), { levels: false, destinations: [] });
});

test("each filter control appears only when every option has at least three posts", () => {
  const posts = articles.slice(0, 3).map(post => ({ ...post, levels: ["undergraduate", "postgraduate"], destinations: ["uk", "us"] } as Article));
  assert.deepEqual(getFilterControls(posts.slice(0, 2)), { levels: false, destinations: [] });
  assert.deepEqual(getFilterControls(posts), { levels: true, destinations: ["uk", "us"] });
  assert.deepEqual(getFilterControls([...posts, { ...posts[0], destinations: ["ca"] }]), { levels: true, destinations: [] });
  assert.deepEqual(getFilterControls([]), { levels: false, destinations: [] });
});

test("featured panel posts come first and newest matching posts fill remaining slots", () => {
  const base = articles[0];
  const posts: Article[] = [base, { ...base, slug: "older", publishedAt: "2026-01-01" }, { ...base, slug: "newer", publishedAt: "2026-10-24" }, { ...base, slug: "middle", publishedAt: "2026-09-01" }];
  assert.deepEqual(slugs(getStagePosts("planning-early", posts)), [base.slug, "newer", "middle"]);
  assert.deepEqual(getStagePosts("postgraduate", posts), []);
  assert.equal(new Set(slugs(getStagePosts("applying-now"))).size, 3);
});

test("only the two eligible hubs exist and single-post topics point to landing ids", () => {
  assert.deepEqual(getTopicHubs().map(topic => topic.slug), ["essays-applications", "admissions-process"]);
  assert.equal(getTopicHubs(articles.filter(post => post.slug === "ucas-for-indian-students")).length, 0);
  assert.equal(getTopicHref("Courses & Careers"), "/blog#courses-careers");
  assert.equal(getTopicHref("Essays & Applications"), "/blog/topics/essays-applications");
});

test("hub CTA precedence uses all post stages rather than a per-post override", () => {
  const lor = articles.find(post => post.slug.startsWith("how-to-ask"))!;
  assert.equal(getPostsCtaStage([lor])?.slug, "applying-now");
  assert.equal(getPostsCtaStage([{ ...lor, stage: ["planning-early", "postgraduate"] }])?.slug, "postgraduate");
  assert.equal(getPostsCtaStage([]), undefined);
});

test("hubs require metadata as well as an intro before publication", () => {
  assert.throws(() => validateTopicIntros(articles, [{ label: "Essays & Applications", intro: "Draft introduction" }]), /hub metaTitle/);
  assert.doesNotThrow(() => validateTopicIntros(articles));
});


test("empty form options preserve other selected filters", () => {
  const result = filterBlogPosts({ stage: "postgraduate", level: "", destination: "" });
  assert.equal(result.active, true);
  assert.deepEqual(slugs(result.posts), ["how-to-ask-for-a-strong-letter-of-recommendation"]);
  assert.equal(filterBlogPosts({ stage: "", level: "", destination: "" }).active, false);
});
