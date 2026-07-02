import type { MetadataRoute } from "next";
import { articles } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.edussentialsconsulting.com";
  const lastModified = new Date();

  const articleEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...articles.map((a) => ({
      url: `${baseUrl}/guides/${a.slug}`,
      lastModified: new Date(a.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...articleEntries,
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,