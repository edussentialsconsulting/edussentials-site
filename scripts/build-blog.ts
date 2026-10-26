import { join } from "node:path";
import { articles } from "../app/lib/content";
import { authors } from "../app/content/authors";
import { BLOG_TOPICS, BLOG_LEVELS, BLOG_STAGES } from "../app/lib/blog-taxonomy";
import { getReservedBlogSlugs, validateArticles, validateTopicIntros, validateProductionDrafts } from "../app/lib/blog-validation";

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
