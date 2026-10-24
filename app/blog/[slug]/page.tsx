import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/app/components/ArticleLayout";
import { articles, getArticle } from "@/app/lib/content";
import { BASE_URL } from "@/app/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    twitter: { card: "summary_large_image", title: article.metaTitle, description: article.metaDescription, images: [{ url: `${BASE_URL}/blog/${article.slug}/opengraph-image`, alt: article.image?.alt ?? article.title }] },
    alternates: {
      canonical: `${BASE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url: `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
