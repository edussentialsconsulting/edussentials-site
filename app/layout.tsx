import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const headerLogoPath = "/Edulogo-Wordmark-Alt.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/career-labs", label: "Career Labs" },
  { href: "/contact", label: "Contact" },
];

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
        <StructuredData />
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
                {navLinks.map((link) => (
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
                    <a href="mailto:founder@edussentialsconsulting.com" className="hover:text-[#C65D3A] transition-colors">
                      founder@edussentialsconsulting.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+917990082246" className="hover:text-[#C65D3A] transition-colors">
                      +91 7990082246
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/917990082246"
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
                  {navLinks.map((link) => (
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
    </html>
  );
}
