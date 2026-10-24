import { blogShareImage, shareSize } from "../lib/blog-share-image";
export const runtime = "nodejs";
export const alt = "Edussentials Consulting Blog";
export const size = shareSize;
export const contentType = "image/png";
export default function Image() {
  return blogShareImage({ title: "Analysis, not advice-shaped noise.", topic: "Blog" });
}
