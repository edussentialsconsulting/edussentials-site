import { displayFont } from "../lib/fonts";
import { CAL_LINK } from "../lib/site";

export default function CTABand({
  eyebrow,
  heading,
  body,
  ctaLabel = "Book a 45-minute call",
  ctaHref = CAL_LINK,
}: {
  eyebrow?: string;
  heading?: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-[#002147] text-[#f6f0e8]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 sm:p-10">
          <div className="max-w-4xl">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2
                className={`${displayFont.className} ${eyebrow ? "mt-4" : ""} text-4xl font-medium leading-tight sm:text-5xl`}
              >
                {heading}
              </h2>
            ) : null}
            <p className={`${heading || eyebrow ? "mt-6" : ""} text-lg leading-8 text-[#f6f0e8]`}>
              {body}
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
