import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import { articles, type ArticleCategory } from "../lib/content";

export const metadata: Metadata = {
  title: "Guides | Edussentials Consulting",
  description:
    "Honest, specific guides to essays, applications, profiles and admissions strategy, written by the founder. No templates, no volume-agency advice.",
  alternates: { canonical: "https://www.edussentialsconsulting.com/guides" },
};

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function GuidesIndexPage() {
  const guides = articles.filter((a) => a.basePath === "guides");
  const categories = [...new Set(guides.map((a) => a.category))] as ArticleCategory[];

  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
            Guides
          </p>
          <h1
            className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl`}
          >
            The work, explained honestly.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Guides to essays, applications, profiles and admissions strategy, written the way we
            practise them. Specific, current, and free of the advice that sounds good but does
            nothing.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        {categories.map((category) => (
          <div key={category} className="mb-14">
            <h2
              className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}
            >
              {category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guides
                .filter((a) => a.category === category)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/guides/${a.slug}`}
                    className="group rounded-[1.5rem] border border-[#002147]/10 bg-white/60 p-7 transition hover:border-[#002147]/30 hover:bg-white"
                  >
                    <h3
                      className={`${displayFont.className} text-2xl font-semibold leading-tight text-[#002147]`}
                    >
                      {a.shortTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#2A2420]/75">
                      {a.metaDescription}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d2b48c] group-hover:text-[#002147]">
                      Read the guide
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
