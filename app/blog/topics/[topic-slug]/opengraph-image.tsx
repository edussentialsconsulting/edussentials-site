import { getTopicHubs } from "@/app/lib/content";
import { blogShareImage, shareSize } from "@/app/lib/blog-share-image";
export const runtime = "nodejs";
export const alt = "Edussentials Consulting topic";
export const size = shareSize;
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ "topic-slug": string }> }) {
  const slug = (await params)["topic-slug"];
  const topic = getTopicHubs().find(topic => topic.slug === slug);
  if (!topic) return new Response(null, { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  return blogShareImage({ title: topic.label, topic: "Blog topic" });
}
