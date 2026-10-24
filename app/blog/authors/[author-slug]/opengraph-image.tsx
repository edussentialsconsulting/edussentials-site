import { getPublishedAuthors } from "@/app/lib/content";
import { blogShareImage, shareSize } from "@/app/lib/blog-share-image";
export const runtime = "nodejs";
export const alt = "Edussentials Consulting author";
export const size = shareSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ "author-slug": string }> }) {
  const slug = (await params)["author-slug"];
  const author = getPublishedAuthors().find(author => author.slug === slug);
  if (!author) return new Response(null, { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  return blogShareImage({ title: author.name, topic: "Blog author", author: author.role });
}
