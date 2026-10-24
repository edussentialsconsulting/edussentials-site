import { type AuthorSlug } from "../content/authors";
import {
  BLOG_STAGES, CTA_STAGE_PRECEDENCE,
  type ArticleLevel, type ArticleStage, type ArticleTopic,
} from "./blog-taxonomy";

export type ArticleSection = {
  heading?: string;
  paragraphs: { lead?: string; quote?: boolean; text: string; links?: { text: string; href: string }[] }[];
  table?: { headers: string[]; rows: string[][] };
};

export type ArticleFaq = { question: string; answer: string };

export type Article = {
  slug: string;
  topic: ArticleTopic;
  levels: [ArticleLevel, ...ArticleLevel[]];
  stage: [ArticleStage, ...ArticleStage[]];
  destinations?: string[];
  author: AuthorSlug;
  summary?: string;
  shortAnswer: string;
  sources?: { title: string; url: string; accessedAt: string }[];
  image?: { url: string; alt: string };
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  standfirst: string;
  publishedAt: string;
  /** Content changes only, never layout or metadata changes. */
  updatedAt: string;
  sections: ArticleSection[];
  faqs?: ArticleFaq[];
  related?: { href: string; label: string }[];
  cta?: ArticleStage | { heading: string; body: string; label: string; href: string };
};

import { ivyLeaguePersonalStatement } from "../content/ivy-league-personal-statement";
import { ivyLeagueFromIndia } from "../content/ivy-league-from-india";
import { supplementalEssays } from "../content/supplemental-essays";
import { commonAppEssaysAnalysis } from "../content/common-app-essays-that-worked-analysis";
import { studyAbroadAfter12th } from "../content/study-abroad-after-12th";
import { ucasForIndianStudents } from "../content/ucas-for-indian-students";
import { strongLetterOfRecommendation } from "../content/how-to-ask-for-a-strong-letter-of-recommendation";

// Every registry entry is a published post.
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
  return articles.find(article => article.slug === slug);
}

export function getArticleCtaStage(article: Article): ArticleStage | undefined {
  if (typeof article.cta === "object") return undefined;
  return article.cta ?? CTA_STAGE_PRECEDENCE.find(stage => article.stage.includes(stage));
}

export function getArticleCta(article: Article) {
  if (typeof article.cta === "object") return article.cta;
  const stage = BLOG_STAGES.find(entry => entry.slug === getArticleCtaStage(article));
  if (!stage) throw new Error(`Blog: no CTA stage for ${article.slug}`);
  return stage.cta;
}
