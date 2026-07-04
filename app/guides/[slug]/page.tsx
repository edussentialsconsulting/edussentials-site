import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../components/ArticleLayout";
import { articles, getArticle } from "../../lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.filter((a) => a.basePath === "guides").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("guides", slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.edussentialsconsulting.com/guides/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url: `https://www.edussentialsconsulting.com/guides/${article.slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("guides", slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
