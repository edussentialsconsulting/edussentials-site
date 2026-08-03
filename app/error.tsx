"use client";

import { useEffect } from "react";
import Link from "next/link";
import { displayFont, bodyFont } from "./lib/fonts";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={`${bodyFont.className} flex min-h-[70vh] items-center bg-[#f6f0e8] text-[#2A2420]`}>
      <div className="mx-auto w-full max-w-2xl px-6 py-24 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
          Something went wrong
        </p>
        <h1
          className={`${displayFont.className} mt-4 text-4xl font-semibold leading-tight text-[#002147] sm:text-5xl`}
        >
          That didn&apos;t load properly.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#6B6258]">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-[#002147] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:text-[#C65D3A]"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
