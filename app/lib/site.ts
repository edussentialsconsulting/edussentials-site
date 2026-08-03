// Shared brand constants: base URL, contact details, nav links, and
// schema.org identifiers reused across pages, layout, and structured data.

export const BASE_URL = "https://www.edussentialsconsulting.com";

export const CONTACT = {
  email: "founder@edussentialsconsulting.com",
  phoneDisplay: "+91 7990082246",
  phoneSchema: "+91-7990082246",
  phoneHref: "tel:+917990082246",
  whatsappHref: "https://wa.me/917990082246",
} as const;

export const CAL_LINK = "https://cal.com/aniruddha-sapru-6kmawu/initial-call-with-founder";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/career-labs", label: "Career Labs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const FOUNDER_ID = `${BASE_URL}/#founder`;

export const SERVICE_AREAS = [
  "United States",
  "United Kingdom",
  "Canada",
  "Europe",
  "Singapore",
  "Australia",
  "Ireland",
  "New Zealand",
  "India",
] as const;

/** Home > ...pages breadcrumb JSON-LD, e.g. buildBreadcrumbSchema([{ name: "About", path: "/about" }]) */
export function buildBreadcrumbSchema(pages: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      ...pages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: page.name,
        item: `${BASE_URL}${page.path}`,
      })),
    ],
  };
}
