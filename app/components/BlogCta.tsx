import Link from "next/link";
import { displayFont } from "../lib/fonts";
import type { ArticleStage } from "../lib/blog-taxonomy";

export default function BlogCta({ cta, stage, placement }: {
  cta: { heading: string; body: string; label: string; href: string };
  stage?: ArticleStage;
  placement: "article_end" | "hub";
}) {
  return (
    <section data-article-section={placement === "article_end" ? "cta" : undefined} data-cta-placement={placement} data-cta-stage={stage} className="mt-16 rounded-[2rem] bg-[#002147] p-6 sm:p-10 text-[#f6f0e8]">
      <h2 className={`${displayFont.className} text-3xl font-semibold leading-tight`}>
        {cta.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{cta.body}</p>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <a
          data-blog-cta
          href={cta.href}
          className="inline-block rounded-full bg-[#d2b48c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#002147] transition hover:bg-[#f6f0e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {cta.label}
        </a>
        <Link
          href="/services"
          className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f6f0e8] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#f6f0e8]"
        >
          Explore services
        </Link>
      </div>
    </section>
  );
}
