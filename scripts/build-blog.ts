import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { articles } from "../app/lib/content";
import { authors } from "../app/content/authors";
import { BLOG_TOPICS, BLOG_LEVELS, BLOG_STAGES } from "../app/lib/blog-taxonomy";
import { getReservedBlogSlugs, validateArticles, validateTopicIntros, validateProductionDrafts } from "../app/lib/blog-validation";

if (!process.argv.includes("--images-only")) {
  const reserved = getReservedBlogSlugs(join(process.cwd(), "app", "blog"));
  for (const slug of getReservedBlogSlugs(join(process.cwd(), "app", "(site)", "blog"))) reserved.add(slug);
  validateArticles(articles, reserved);
  validateTopicIntros(articles);
  for (const stage of BLOG_STAGES) {
    for (const slug of stage.featured) {
      if (!articles.some(post => post.slug === slug && post.stage.includes(stage.slug))) throw new Error(`Blog: invalid featured post ${slug} for ${stage.slug}`);
    }
  }
  validateProductionDrafts({ posts: articles, authors, topics: BLOG_TOPICS, levels: BLOG_LEVELS, stages: BLOG_STAGES }, process.env.VERCEL_ENV);
  console.log("Blog build validation passed");
}

// Image routes receive only this build output, never the content registry.
function imageSource(url: string): string {
  if (!url.startsWith("/")) return url;
  const extension = url.split(".").pop()?.toLowerCase();
  const mime = ({ png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", svg: "image/svg+xml" } as Record<string, string>)[extension ?? ""];
  if (!mime || url.includes("..")) throw new Error(`Blog: unsupported local share image ${url}`);
  return `data:${mime};base64,${readFileSync(join(process.cwd(), "public", url)).toString("base64")}`;
}
const share = {
  logo: imageSource("/Edulogo-Seal-Light.png"),
  posts: articles.map(post => ({ slug: post.slug, title: post.title, topic: post.topic, author: authors[post.author].name, image: post.image ? { url: imageSource(post.image.url), alt: post.image.alt } : null })),
  authors: Object.values(authors).filter(author => articles.some(post => post.author === author.slug)).map(author => ({ slug: author.slug, name: author.name, role: author.role })),
};
mkdirSync(".blog-build", { recursive: true });
writeFileSync(".blog-build/share.json", JSON.stringify(share));
