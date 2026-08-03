import Link from "next/link";
import type { Metadata } from "next";
import { displayFont, bodyFont } from "./lib/fonts";
import { CAL_LINK } from "./lib/site";

export const metadata: Metadata = {
  title: "Page not found | Edussentials Consulting",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className={`${bodyFont.className} flex min-h-[70vh] items-center bg-[#f6f0e8] text-[#2A2420]`}>
      <div className="mx-auto w-full max-w-2xl px-6 py-24 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
          404
        </p>
        <h1
          className={`${displayFont.className} mt-4 text-4xl font-semibold leading-tight text-[#002147] sm:text-5xl`}
        >
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#6B6258]">
          The page you&apos;re looking for may have moved or no longer exists. Try the
          links below, or head back to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
          >
            Back to homepage
          </Link>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-[#002147] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:text-[#C65D3A]"
          >
            Book a call
          </a>
        </div>
      </div>
    </main>
  );
}
