import type { Metadata } from "next";
import type { Article } from "./content";
import { BASE_URL, FOUNDER_ID, ORGANIZATION_ID } from "./site";

// Brand fallback for sharing only; do not describe it as an article illustration.
const shareImage = `${BASE_URL}/Edulogo-Seal-Light.png`;

export function formatArticleDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}

export function buildArticleMetadata(article: Article): Metadata {
  const url = `${BASE_URL}/blog/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [article.author],
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url,
      siteName: "Edussentials Consulting",
      authors: [article.author.url],
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [{ url: shareImage, alt: "Edussentials Consulting" }],
    },
    twitter: {
      card: "summary",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [shareImage],
    },
  };
}

export function buildArticleSchema(article: Article) {
  const url = `${BASE_URL}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`,
        headline: article.title, description: article.metaDescription,
        author: { "@type": "Person", "@id": FOUNDER_ID, ...article.author },
        publisher: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Edussentials Consulting", url: BASE_URL },
        datePublished: article.datePublished, dateModified: article.dateModified,
        mainEntityOfPage: url, articleSection: article.category, inLanguage: "en",
      },
      ...(article.faqs.length > 0 ? [{
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question", name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: article.shortTitle, item: url },
        ],
      },
    ],
  };
}
