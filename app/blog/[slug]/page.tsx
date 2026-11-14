import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../components/ArticleLayout";
import { articles, getArticle } from "../../lib/content";
import { buildArticleMetadata } from "../../lib/article-presentation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildArticleMetadata(article);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
