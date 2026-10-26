import BlogCta from "./BlogCta";
import { authors, type Author } from "../content/authors";
import { BLOG_LEVELS } from "../lib/blog-taxonomy";
import Link from "next/link";
import StructuredData from "./StructuredData";
import { getArticleCta, getArticleCtaStage, getRelatedArticles, getTopicHref, type Article } from "../lib/content";
import { displayFont, bodyFont } from "../lib/fonts";
import { BASE_URL, CAL_LINK } from "../lib/site";

function buildSchema(article: Article) {
  const faqs = article.faqs ?? [];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${BASE_URL}/blog/${article.slug}#article`,
        headline: article.title,
        description: article.metaDescription,
        author: { "@type": "Person", name: authors[article.author].name, url: `${BASE_URL}/blog/authors/${article.author}` },
        publisher: { "@type": "Organization", name: "Edussentials Consulting", url: BASE_URL },
        datePublished: article.publishedAt,
        ...(article.updatedAt > article.publishedAt ? { dateModified: article.updatedAt } : {}),
        mainEntityOfPage: `${BASE_URL}/blog/${article.slug}`,
        articleSection: article.topic,
        inLanguage: "en",
      },
      ...(faqs.length > 0
        ? [{
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blog", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 2, name: article.topic, item: `${BASE_URL}${getTopicHref(article.topic)}` },
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
  const faqs = article.faqs ?? [];
  const related = getRelatedArticles(article);
  const author: Author = authors[article.author];
  const levelLabel = article.levels.map(slug => BLOG_LEVELS.find(level => level.slug === slug)!.label).join(" and ");
  const formatDate = (date: string) => new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const cta = getArticleCta(article);
  return (
    <>
      <StructuredData data={buildSchema(article)} />

      <main data-blog-context data-post-slug={article.slug} data-topic={article.topic} data-stage={getArticleCtaStage(article) ?? "not_applicable"} data-author={author.slug} data-booking-url={CAL_LINK} className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4`}>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
          <div className="relative mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
            <nav aria-label="Breadcrumb" data-article-section="breadcrumb" className="mb-7 text-sm leading-6 text-[#f6f0e8]">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li><Link href="/blog" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Blog</Link></li>
                <li><span aria-hidden="true" className="mr-2">/</span><Link href={getTopicHref(article.topic)} className="underline underline-offset-4">{article.topic}</Link></li>
                <li aria-current="page"><span aria-hidden="true" className="mr-2">/</span>{article.shortTitle}</li>
              </ol>
            </nav>
            <h1
              className={`${displayFont.className} text-4xl font-semibold leading-[1.05] text-[#f6f0e8] sm:text-5xl lg:text-6xl`}
            >
              {article.title}
            </h1>
            <div data-article-section="meta" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6 text-[#f6f0e8]">
              <span>{article.topic}</span><span>{levelLabel}</span>
              <span>By <Link href={`/blog/authors/${author.slug}`} className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">{author.name}</Link>{author.type === "guest" ? " · Guest contributor" : ""}</span>
              <span>Published <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></span>
              {article.updatedAt > article.publishedAt ? <span>Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></span> : null}
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-10 lg:py-20">
          <section data-article-section="short-answer" aria-labelledby="short-answer-heading" className="mb-12 rounded-2xl border border-[#002147]/20 bg-white p-6 sm:p-8">
            <h2 id="short-answer-heading" className={`${displayFont.className} text-2xl font-semibold text-[#002147]`}>Short answer</h2>
            <p className="mt-4 text-base leading-8">{article.shortAnswer}</p>
          </section>
          <div data-article-section="body">
          <p className="mb-10 text-lg leading-8">{article.standfirst}</p>
          {article.sections.map((section, si) => (
            <section key={si} className={si > 0 ? "mt-12" : undefined}>
              {section.heading ? (
                <h2
                  className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}
                >
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((p, pi) => p.quote ? (
                <div key={pi} className="mt-7">
                  {p.lead ? <p className="font-semibold text-[#2A2420]">{p.lead}</p> : null}
                  <blockquote className="mt-3 border-l-2 border-[#d2b48c] pl-5 text-base leading-8 text-[#2A2420]/85">
                    <p>{renderLinkedText(p.text, p.links)}</p>
                  </blockquote>
                </div>
              ) : (
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

          </div>

          {/* FAQ */}
          {faqs.length > 0 ? (
          <section data-article-section="faq" className="mt-16 border-t border-[#002147]/10 pt-12">
            <h2 className={`${displayFont.className} text-3xl font-semibold leading-tight text-[#002147]`}>
              Common questions
            </h2>
            <div className="mt-6 space-y-8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-[#2A2420]">{faq.question}</h3>
                  <p className="mt-2 text-base leading-8 text-[#2A2420]/85">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          ) : null}

          {article.sources?.length ? (
            <section data-article-section="sources" className="mt-14">
              <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>Sources</h2>
              <ul className="mt-5 space-y-4 text-base leading-7">
                {article.sources.map(source => <li key={source.url}><a href={source.url} className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">{source.title}</a><span className="block text-sm">Accessed <time dateTime={source.accessedAt}>{formatDate(source.accessedAt)}</time></span></li>)}
              </ul>
            </section>
          ) : null}
          <BlogCta cta={cta} stage={getArticleCtaStage(article)} placement="article_end" />
          {/* Related */}
          {related.length > 0 ? (
            <section data-article-section="related" className="mt-14">
              <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>
                Related reading
              </h2>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={`/blog/${r.slug}`}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="text-base font-semibold text-[#002147] underline decoration-[#d2b48c] decoration-2 underline-offset-4 hover:decoration-[#002147]"
                    >
                      {r.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <p data-article-section="back" className="mt-12"><Link href={getTopicHref(article.topic)} className="font-semibold text-[#002147] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Back to {article.topic}</Link></p>
        </article>
      </main>
    </>
  );
}
