import { BLOG_TOPICS } from "../lib/blog-taxonomy";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../lib/content";
import { displayFont, bodyFont } from "../lib/fonts";
import { BASE_URL, CAL_LINK } from "../lib/site";

export const metadata: Metadata = {

  title: "Blog | Edussentials Consulting",
  description:
    "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.",
  openGraph: { title: "Blog | Edussentials Consulting", description: "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.", url: `${BASE_URL}/blog`, type: "website" },
  twitter: { card: "summary_large_image", title: "Blog | Edussentials Consulting", description: "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.", images: [{ url: `${BASE_URL}/blog/opengraph-image`, alt: "Edussentials Consulting Blog" }] },
  alternates: { canonical: `${BASE_URL}/blog` },
};

export default function BlogIndexPage() {
  const posts = articles;
  const categories = [...new Set(posts.map((a) => a.topic))];

  return (
    <main data-blog-context data-booking-url={CAL_LINK} className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>

      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
            Blog
          </p>
          <h1
            className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl`}
          >
            Analysis, not advice-shaped noise.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            In-depth pieces on essays, applications, profiles and admissions strategy, written the
            way we practise them. Specific, current, and free of the advice that sounds good but
            does nothing.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        {categories.map((category) => (
          <div key={category} id={BLOG_TOPICS.find(topic => topic.label === category)!.slug} className="mb-14">
            <h2
              className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}
            >
              {category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts
                .filter((a) => a.topic === category)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group rounded-[1.5rem] border border-[#002147]/10 bg-white/60 p-7 transition hover:border-[#002147]/30 hover:bg-white"
                  >
                    <h3
                      className={`${displayFont.className} text-2xl font-semibold leading-tight text-[#002147]`}
                    >
                      {a.shortTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#2A2420]/75">
                      {a.summary ?? a.metaDescription}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d2b48c] group-hover:text-[#002147]">
                      Read the post
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
