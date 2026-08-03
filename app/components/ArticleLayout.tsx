import Link from "next/link";
import StructuredData from "./StructuredData";
import type { Article } from "../lib/content";
import { displayFont, bodyFont } from "../lib/fonts";
import { BASE_URL, CAL_LINK, FOUNDER_ID, ORGANIZATION_ID } from "../lib/site";

function buildSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${BASE_URL}/blog/${article.slug}#article`,
        headline: article.title,
        description: article.metaDescription,
        author: { "@id": FOUNDER_ID },
        publisher: { "@id": ORGANIZATION_ID },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
        articleSection: article.category,
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: article.shortTitle,
            item: `${BASE_URL}/blog/${article.slug}`,
          },
        ],
      },
    ],
  };
}

function renderLinkedText(text: string, links?: { text: string; href: string }[]) {
  if (!links?.length) return text;

  const remainingLinks = [...links];
  const parts: React.ReactNode[] = [];
  let remainingText = text;

  while (remainingLinks.length > 0) {
    const link = remainingLinks.shift();
    if (!link) break;

    const index = remainingText.indexOf(link.text);
    if (index === -1) continue;

    const before = remainingText.slice(0, index);
    if (before) parts.push(before);
    parts.push(
      <Link
        key={`${link.href}-${parts.length}`}
        href={link.href}
        className="font-semibold text-[#002147] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#002147]"
      >
        {link.text}
      </Link>,
    );
    remainingText = remainingText.slice(index + link.text.length);
  }

  if (remainingText) parts.push(remainingText);
  return parts.length > 0 ? parts : text;
}

export default function ArticleLayout({ article }: { article: Article }) {
  return (
    <>
      <StructuredData data={buildSchema(article)} />
      <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
          <div className="relative mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              {article.category}
            </p>
            <h1
              className={`${displayFont.className} text-4xl font-semibold leading-[1.05] text-[#f6f0e8] sm:text-5xl lg:text-6xl`}
            >
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{article.standfirst}</p>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10 lg:py-20">
          {article.sections.map((section, si) => (
            <section key={si} className={si > 0 ? "mt-12" : undefined}>
              {section.heading ? (
                <h2
                  className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}
                >
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="mt-5 text-base leading-8 text-[#2A2420]/85">
                  {p.lead ? <strong className="font-semibold text-[#2A2420]">{p.lead} </strong> : null}
                  {renderLinkedText(p.text, p.links)}
                </p>
              ))}
              {section.table ? (
                <div className="mt-7 overflow-x-auto border-y border-[#002147]/15">
                  <table className="w-full min-w-[42rem] border-collapse text-left text-sm text-[#2A2420]/85">
                    <thead>
                      <tr className="bg-[#002147]/5 text-[#002147]">
                        {section.table.headers.map((header) => (
                          <th key={header} className="px-4 py-3 font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-t border-[#002147]/10">
                          {row.map((cell, ci) => (
                            <td key={`${ri}-${ci}`} className="px-4 py-3 align-top leading-6">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}

          {/* FAQ */}
          <section className="mt-16 border-t border-[#002147]/10 pt-12">
            <h2 className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}>
              Common questions
            </h2>
            <div className="mt-6 space-y-8">
              {article.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-[#2A2420]">{faq.question}</h3>
                  <p className="mt-2 text-base leading-8 text-[#2A2420]/85">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          {article.related.length > 0 ? (
            <section className="mt-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#002147]/60">
                Related
              </p>
              <ul className="mt-3 space-y-2">
                {article.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="text-base font-semibold text-[#002147] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#002147]"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* CTA */}
          <section className="mt-16 rounded-[2rem] bg-[#002147] p-10 text-[#f6f0e8]">
            <h2 className={`${displayFont.className} text-3xl font-semibold leading-tight`}>
              {article.cta.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{article.cta.body}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={CAL_LINK}
                className="inline-block rounded-full bg-[#d2b48c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#002147] transition hover:bg-[#f6f0e8]"
              >
                Book a 45-minute call
              </a>
              <Link
                href="/services"
                className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f6f0e8] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#f6f0e8]"
              >
                Explore services
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
