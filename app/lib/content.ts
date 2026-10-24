import { authors, type Author, type AuthorSlug } from "../content/authors";
import {
  BLOG_STAGES, BLOG_LEVELS, BLOG_TOPICS, CTA_STAGE_PRECEDENCE,
  type ArticleLevel, type ArticleStage, type ArticleTopic,
} from "./blog-taxonomy";

type ArticleSection = {
  heading?: string;
  paragraphs: { lead?: string; quote?: boolean; text: string; links?: { text: string; href: string }[] }[];
  table?: { headers: string[]; rows: string[][] };
};

type ArticleFaq = { question: string; answer: string };

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

export function getPublishedAuthors(): Author[] {
  return Object.values(authors).filter(author => articles.some(post => post.author === author.slug));
}

export function getRelatedArticles(article: Article): Article[] {
  const candidates = [
    ...(article.related ?? []).map(link => getArticle(link.href.replace("/blog/", ""))),
    ...articles.filter(post => post.topic === article.topic),
    ...articles.filter(post => post.stage.some(stage => article.stage.includes(stage))),
  ];
  const seen = new Set([article.slug]);
  return candidates.filter((post): post is Article => {
    if (!post || seen.has(post.slug)) return false;
    seen.add(post.slug);
    return true;
  }).slice(0, 2);
}

export function newestPosts(posts: readonly Article[]) {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}

export function getStagePosts(stage: ArticleStage, posts: readonly Article[] = articles) {
  const matching = newestPosts(posts.filter(post => post.stage.includes(stage)));
  const featured = BLOG_STAGES.find(entry => entry.slug === stage)!.featured as readonly string[];
  return [...featured.flatMap(slug => matching.filter(post => post.slug === slug)),
    ...matching.filter(post => !featured.includes(post.slug))].slice(0, 3);
}

type TopicHub = (typeof BLOG_TOPICS)[number] & { intro: string; metaTitle: string; metaDescription: string };
export function getTopicHubs(posts: readonly Article[] = articles): TopicHub[] {
  return BLOG_TOPICS.filter((topic): topic is TopicHub => posts.filter(post => post.topic === topic.label).length >= 2);
}

export function getTopicHref(label: ArticleTopic) {
  const topic = BLOG_TOPICS.find(topic => topic.label === label)!;
  return getTopicHubs().some(hub => hub.slug === topic.slug) ? `/blog/topics/${topic.slug}` : `/blog#${topic.slug}`;
}

export function getPostsCtaStage(posts: readonly Article[]) {
  const slug = CTA_STAGE_PRECEDENCE.find(stage => posts.some(post => post.stage.includes(stage)));
  return BLOG_STAGES.find(stage => stage.slug === slug);
}

export function getFilterControls(posts: readonly Article[] = articles) {
  const levels = BLOG_LEVELS.filter(level => posts.some(post => post.levels.includes(level.slug)));
  const destinations = [...new Set(posts.flatMap(post => post.destinations ?? []))].sort();
  return {
    levels: levels.every(level => posts.filter(post => post.levels.includes(level.slug)).length >= 3) ? levels : [],
    destinations: destinations.length > 0 && destinations.every(destination => posts.filter(post => post.destinations?.includes(destination)).length >= 3) ? destinations : [],
  };
}

export function filterBlogPosts(query: Record<string, string | string[] | undefined>, posts: readonly Article[] = articles) {
  const stage = BLOG_STAGES.find(stage => stage.slug === query.stage)?.slug;
  const level = BLOG_LEVELS.find(level => level.slug === query.level)?.slug;
  const destination = typeof query.destination === "string" && posts.some(post => post.destinations?.includes(query.destination as string)) ? query.destination : undefined;
  const invalid = (query.stage && !stage) || (query.level && !level) || (query.destination && !destination);
  const filters = invalid ? {} : { stage, level, destination };
  return {
    filters,
    active: Boolean(filters.stage || filters.level || filters.destination),
    posts: newestPosts(posts.filter(post => (!filters.stage || post.stage.includes(filters.stage)) &&
      (!filters.level || post.levels.includes(filters.level)) && (!filters.destination || post.destinations?.includes(filters.destination)))),
  };
}
