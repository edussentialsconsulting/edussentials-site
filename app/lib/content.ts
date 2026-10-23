// Content registry for blog posts and opinion pieces.
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
  paragraphs: { lead?: string; quote?: boolean; text: string; links?: { text: string; href: string }[] }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  /** URL segment under /blog/ */
  slug: string;
  category: ArticleCategory;
  title: string;
  /** Short display title for index cards and breadcrumbs */
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
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
import { ivyLeagueFromIndia } from "../content/ivy-league-from-india";
import { supplementalEssays } from "../content/supplemental-essays";
import { commonAppEssaysAnalysis } from "../content/common-app-essays-that-worked-analysis";
import { studyAbroadAfter12th } from "../content/study-abroad-after-12th";
import { ucasForIndianStudents } from "../content/ucas-for-indian-students";
import { strongLetterOfRecommendation } from "../content/how-to-ask-for-a-strong-letter-of-recommendation";

export const articles: Article[] = [
  studyAbroadAfter12th,
  ucasForIndianStudents,
  strongLetterOfRecommendation,
  ivyLeaguePersonalStatement,
  ivyLeagueFromIndia,
  supplementalEssays,
  commonAppEssaysAnalysis,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
