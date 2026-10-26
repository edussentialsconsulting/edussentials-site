import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { authors, type Author } from "../content/authors";
import { BLOG_LEVELS, BLOG_STAGES, BLOG_TOPICS, RESERVED_BLOG_SLUGS } from "./blog-taxonomy";
import type { Article } from "./content";

/** Reserve named routes automatically, including routes inside route groups. */
export function getReservedBlogSlugs(directory: string): Set<string> {
  const reserved = new Set<string>(RESERVED_BLOG_SLUGS);
  if (!existsSync(directory)) return reserved;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_") || entry.name.startsWith("[")) continue;
    if (entry.name.startsWith("(") || entry.name.startsWith("@")) {
      for (const slug of getReservedBlogSlugs(join(directory, entry.name))) reserved.add(slug);
    } else {
      reserved.add(entry.name);
    }
  }
  return reserved;
}

function requireText(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Blog: ${field} must contain text`);
}

function requireDate(value: string, field: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value)) ||
      new Date(value).toISOString().slice(0, 10) !== value) {
    throw new Error(`Blog: ${field} must be a valid YYYY-MM-DD date`);
  }
}

function requireUrl(value: string, field: string, local = false) {
  if (local && /^\/(?!\/)/.test(value)) return;
  try {
    if (["https:", "http:"].includes(new URL(value).protocol)) return;
  } catch { /* Report invalid URLs with the field name below. */ }
  throw new Error(`Blog: ${field} must be a valid ${local ? "local or " : ""}HTTP URL`);
}

export function validateArticles(posts: readonly Article[], reserved: ReadonlySet<string> = new Set(RESERVED_BLOG_SLUGS)) {
  const slugs = new Set<string>();
  for (const [key, entry] of Object.entries(authors) as [string, Author][]) {
    if (entry.slug !== key || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) throw new Error(`Blog: invalid author slug ${key}`);
    for (const field of ["name", "role", "bio"] as const) requireText(entry[field], `author ${key} ${field}`);
    const words = entry.bio.replace("[FOUNDER DRAFT]", "").trim().split(/\s+/).length;
    if (words < 40 || words > 80) throw new Error(`Blog: author ${key} bio must have 40 to 80 words`);
    if (!["founder", "guest"].includes(entry.type)) throw new Error(`Blog: invalid author type for ${key}`);
    if (entry.photo) requireUrl(entry.photo, `author ${key} photo`, true);
    if (entry.linkedIn) requireUrl(entry.linkedIn, `author ${key} LinkedIn`);
  }
  for (const post of posts) {
    const name = post.slug;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || reserved.has(name)) throw new Error(`Blog: invalid or reserved post slug ${name}`);
    if (slugs.has(name)) throw new Error(`Blog: duplicate post slug ${name}`);
    slugs.add(name);
    if (!BLOG_TOPICS.some(topic => topic.label === post.topic)) throw new Error(`Blog: invalid topic for ${name}`);
    for (const [field, options] of [
      ["levels", BLOG_LEVELS.map(level => level.slug)],
      ["stage", BLOG_STAGES.map(stage => stage.slug)],
    ] as const) {
      const values = post[field];
      if (!Array.isArray(values) || !values.length || new Set(values).size !== values.length ||
          values.some(value => !(options as readonly string[]).includes(value))) throw new Error(`Blog: invalid ${field} for ${name}`);
    }
    if (!Object.hasOwn(authors, post.author)) throw new Error(`Blog: unknown author for ${name}`);
    for (const field of ["title", "shortTitle", "metaTitle", "metaDescription", "standfirst", "shortAnswer"] as const) {
      requireText(post[field], `${name} ${field}`);
    }
    if (post.summary !== undefined) requireText(post.summary, `${name} summary`);
    const sentences = [...new Intl.Segmenter("en", { granularity: "sentence" }).segment(post.shortAnswer)].length;
    if (sentences < 2 || sentences > 4) throw new Error(`Blog: shortAnswer for ${name} must have two to four sentences`);
    requireDate(post.publishedAt, `${name} publishedAt`);
    requireDate(post.updatedAt, `${name} updatedAt`);
    if (post.updatedAt < post.publishedAt) throw new Error(`Blog: updatedAt precedes publishedAt for ${name}`);
    if (post.destinations && (new Set(post.destinations).size !== post.destinations.length ||
        post.destinations.some(value => !/^[a-z]+(?:-[a-z]+)*$/.test(value)))) throw new Error(`Blog: invalid destinations for ${name}`);
    if (!post.sections.length) throw new Error(`Blog: missing body for ${name}`);
    for (const section of post.sections) {
      if (!section.paragraphs.length) throw new Error(`Blog: empty section for ${name}`);
      for (const paragraph of section.paragraphs) requireText(paragraph.text, `${name} paragraph`);
    }
    for (const faq of post.faqs ?? []) {
      requireText(faq.question, `${name} FAQ question`);
      requireText(faq.answer, `${name} FAQ answer`);
    }
    for (const source of post.sources ?? []) {
      requireText(source.title, `${name} source title`);
      if (/\[(?:FOUNDER|VERIFY)/.test(source.title)) throw new Error(`Blog: placeholder source for ${name}`);
      requireUrl(source.url, `${name} source URL`);
      requireDate(source.accessedAt, `${name} source access date`);
    }
    if (post.image) {
      requireUrl(post.image.url, `${name} image`, true);
      requireText(post.image.alt, `${name} image alt`);
    }
    if (typeof post.cta === "string") {
      if (!post.stage.includes(post.cta)) throw new Error(`Blog: CTA stage must belong to ${name}`);
    } else if (post.cta !== undefined) {
      for (const field of ["heading", "body", "label", "href"] as const) requireText(post.cta[field], `${name} CTA ${field}`);
      requireUrl(post.cta.href, `${name} CTA URL`, true);
    }
  }
  for (const post of posts) {
    for (const related of post.related ?? []) {
      requireText(related.label, `${post.slug} related label`);
      const slug = related.href.replace(/^\/blog\//, "");
      if (!related.href.startsWith("/blog/") || slug === post.slug || !slugs.has(slug)) throw new Error(`Blog: invalid related post for ${post.slug}`);
    }
  }
}


export function validateTopicIntros(posts: readonly Article[], topics: readonly { label: string; intro?: string; metaTitle?: string; metaDescription?: string }[] = BLOG_TOPICS) {
  for (const topic of topics) {
    if (posts.filter(post => post.topic === topic.label).length >= 2 && !topic.intro?.trim()) {
      throw new Error(`Blog: write an intro for ${topic.label} before publishing its second post`);
    }
    if (posts.filter(post => post.topic === topic.label).length >= 2) {
      requireText(topic.metaTitle, `${topic.label} hub metaTitle`);
      requireText(topic.metaDescription, `${topic.label} hub metaDescription`);
    }
  }
}

export function validateProductionDrafts(content: unknown, environment: string | undefined, path = "blog") {
  if (environment !== "production") return;
  if (typeof content === "string" && /\[FOUNDER DRAFT\]|\[FOUNDER INPUT|\[VERIFY/.test(content)) {
    throw new Error(`Blog: unresolved draft in ${path}; approve and replace draft text before production`);
  }
  if (content && typeof content === "object") {
    for (const [key, value] of Object.entries(content)) validateProductionDrafts(value, environment, `${path}.${key}`);
  }
}
