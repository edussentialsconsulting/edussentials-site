import share from "../../../.blog-build/share.json";
import { blogShareImage, shareSize } from "../../lib/blog-share-image";
export const runtime = "nodejs";
export const alt = "Edussentials Consulting article";
export const size = shareSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = share.posts.find(post => post.slug === slug);
  if (!post) return new Response(null, { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  return blogShareImage(post);
}
