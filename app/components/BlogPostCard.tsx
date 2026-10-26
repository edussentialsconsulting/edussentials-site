import Link from "next/link";
import type { Article } from "../lib/content";
import { BLOG_LEVELS } from "../lib/blog-taxonomy";
import { displayFont } from "../lib/fonts";

export default function BlogPostCard({ post }: { post: Article }) {
  const levels = post.levels.map(slug => BLOG_LEVELS.find(level => level.slug === slug)!.label).join(" and ");
  return <li data-post-card={post.slug} className="rounded-3xl border border-[#002147]/20 bg-white p-7">
    <p className="text-sm font-semibold leading-6 text-[#002147]">{levels}</p>
    <h3 className={`${displayFont.className} mt-4 text-2xl font-semibold leading-tight text-[#002147]`}>
      <Link href={`/blog/${post.slug}`} className="underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#002147] focus-visible:outline-2 focus-visible:outline-offset-4">{post.shortTitle}</Link>
    </h3>
    <p className="mt-4 text-sm leading-7 text-[#2A2420]">{post.summary ?? post.metaDescription}</p>
  </li>;
}
