import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { displayFont, bodyFont } from "./lib/fonts";
import { CONTACT, NAV_LINKS } from "./lib/site";
import "./globals.css";

const headerLogoPath = "/Edulogo-Wordmark-Alt.png";

export const metadata: Metadata = {
  title: "Edussentials Consulting",
  description: "Boutique admissions consultancy for premium academic guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f6f0e8] text-[#2A2420]">
        <header className="border-b border-[#002147]/10 bg-[#f6f0e8]/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-3 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-4">
            <Link href="/" className="inline-flex w-fit items-center">
              <Image
                src={headerLogoPath}
                alt="Edussentials Consulting logo"
                width={500}
                height={500}
                unoptimized
                priority
                className="h-16 w-48 object-contain sm:h-[4.5rem] sm:w-56"
              />
            </Link>

            <nav>
              <ul className="flex flex-wrap justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#002147] lg:justify-end lg:gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-[#C65D3A]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#002147]/10 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                  Edussentials Consulting
                </p>
                <p className={`${displayFont.className} mt-2 text-base italic text-[#002147]`}>
                  Boutique admissions advisory
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#6B6258]">
                  Founder-led admissions advisory for students applying across the US, UK, Canada, Europe, Singapore, Australia, Ireland, New Zealand, and India.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
                  Reach us
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[#002147]">
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#C65D3A] transition-colors">
                      {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.phoneHref} className="hover:text-[#C65D3A] transition-colors">
                      {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C65D3A] transition-colors"
                    >
                      Reach us on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
                  Explore
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#002147]">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 hover:text-[#C65D3A]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-[#002147]/10 pt-6 text-xs text-[#6B6258]">
              © {new Date().getFullYear()} Edussentials Consulting. All rights reserved.
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-YV7T51BJWY" />
    </html>
  );
}
