import { getArticle } from "@/app/lib/content";
import { authors } from "@/app/content/authors";
import { blogShareImage, shareSize } from "@/app/lib/blog-share-image";
export const runtime = "nodejs";
export const alt = "Edussentials Consulting article";
export const size = shareSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) return new Response(null, { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  return blogShareImage({ title: post.title, topic: post.topic, author: authors[post.author].name, image: post.image });
}
