import type { MetadataRoute } from "next";
import { articles } from "./lib/content";
import { BASE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;
  const siteLastModified = new Date("2026-08-02");
  const latestArticleModified = articles.reduce(
    (latest, article) =>
      new Date(article.updatedAt) > latest ? new Date(article.updatedAt) : latest,
    siteLastModified,
  );

  const articleEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: latestArticleModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...articleEntries,
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career-labs`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
