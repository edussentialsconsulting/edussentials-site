import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../components/ArticleLayout";
import { articles, getArticle } from "../../lib/content";
import { BASE_URL } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

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
    ...(article.author ? { authors: [article.author] } : {}),
    alternates: {
      canonical: `${BASE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url: `${BASE_URL}/blog/${article.slug}`,
      ...(article.author ? {
        authors: [article.author.url],
        publishedTime: article.datePublished,
        modifiedTime: article.dateModified,
        images: [{ url: `${BASE_URL}/Edulogo-Seal-Light.png`, alt: "Edussentials Consulting" }],
      } : {}),
    },
    ...(article.author ? {
      twitter: {
        card: "summary" as const,
        title: article.metaTitle,
        description: article.metaDescription,
        images: [`${BASE_URL}/Edulogo-Seal-Light.png`],
      },
    } : {}),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
