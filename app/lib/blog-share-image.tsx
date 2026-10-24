import { ImageResponse } from "next/og";
import share from "../../.blog-build/share.json";

export const shareSize = { width: 1200, height: 630 };

export function blogShareImage({ title, topic, author, image }: {
  title: string;
  topic: string;
  author?: string;
  image?: { url: string; alt: string } | null;
}) {
  return new ImageResponse(
    image ? (
      // ImageResponse needs a native image element.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image.url} alt={image.alt} width={1200} height={630} style={{ objectFit: "cover" }} />
    ) : (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#002147", color: "#f6f0e8", padding: "48px 64px", borderBottom: "12px solid #d2b48c" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={share.logo} alt="" width={86} height={86} />
          <span style={{ fontSize: 28 }}>Edussentials Consulting</span>
        </div>
        <div style={{ display: "flex", color: "#d2b48c", fontSize: 25, marginTop: 32 }}>{topic}</div>
        <div style={{ display: "flex", fontSize: title.length > 85 ? 48 : 56, lineHeight: 1.12, marginTop: 20 }}>{title}</div>
        {author ? <div style={{ display: "flex", fontSize: 26, marginTop: "auto" }}>{author}</div> : null}
      </div>
    ),
    { ...shareSize, headers: { "X-Robots-Tag": "noindex, nofollow" } },
  );
}
