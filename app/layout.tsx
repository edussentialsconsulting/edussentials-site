import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
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

const lightLogoPath = "/Edulogo-Light.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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
        <header className="border-b border-[#002147]/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d2b48c]/25 bg-[#f6f0e8]/10 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <Image
                  src={lightLogoPath}
                  alt="Edussentials Consulting logo"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                  Edussentials Consulting
                </p>
                <p className={`${displayFont.className} text-base font-medium italic text-[#002147]`}>
                  Premium academic guidance
                </p>
              </div>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#002147] lg:justify-end">
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
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <p className="text-sm text-[#6B6258]">
              Edussentials Consulting · Premium academic guidance
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#002147] lg:justify-end">
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
        </footer>
      </body>
    </html>
  );
}
