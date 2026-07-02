// Content registry for guides, blog posts and opinion pieces.
// Agent 3 publishing contract: each article is one file in app/content/,
// registered here. The template, schema, sitemap and index pages all
// derive from this registry. Nothing else needs to change per article.

export type ArticleCategory =
  | "Essays & Applications"
  | "Admissions Data & Process"
  | "Profile & Planning"
  | "Courses & Careers"
  | "Scholarships & Aid"
  | "Choosing an Advisor"
  | "Opinions";

export type ArticleSection = {
  /** Optional H2 for the section */
  heading?: string;
  /** Paragraphs. `lead` renders as a bold run-in at the start of the paragraph. */
  paragraphs: { lead?: string; text: string }[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  /** URL segment under /guides/ */
  slug: string;
  category: ArticleCategory;
  title: string;
  /** Short display title for index cards and breadcrumbs */
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero standfirst under the H1 */
  standfirst: string;
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  related: { href: string; label: string }[];
  cta: { heading: string; body: string };
};

// ---- Registry ----
import { ivyLeaguePersonalStatement } from "../content/ivy-league-personal-statement";

export const articles: Article[] = [ivyLeaguePersonalStatement];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
