import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getTopicHubs, getPostsCtaStage, newestPosts } from "@/app/lib/content";
import BlogPostCard from "@/app/components/BlogPostCard";
import BlogCta from "@/app/components/BlogCta";
import StructuredData from "@/app/components/StructuredData";
import { BASE_URL, CAL_LINK } from "@/app/lib/site";
import { bodyFont, displayFont } from "@/app/lib/fonts";

type Props = { params: Promise<{ "topic-slug": string }> };

export function generateStaticParams() {
  return getTopicHubs().map(topic => ({ "topic-slug": topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)["topic-slug"];
  const topic = getTopicHubs().find(topic => topic.slug === slug);
  if (!topic) return {};
  const url = `${BASE_URL}/blog/topics/${slug}`;
  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: topic.metaTitle, description: topic.metaDescription, type: "website", url },
    twitter: { card: "summary_large_image", title: topic.metaTitle, description: topic.metaDescription, images: [{ url: `${url}/opengraph-image`, alt: topic.label }] },
  };
}

export default async function TopicPage({ params }: Props) {
  const slug = (await params)["topic-slug"];
  const hubs = getTopicHubs();
  const topic = hubs.find(topic => topic.slug === slug);
  if (!topic) notFound();
  const posts = newestPosts(articles.filter(post => post.topic === topic.label));
  const stage = getPostsCtaStage(posts)!;
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 2, name: topic.label, item: `${BASE_URL}/blog/topics/${topic.slug}` },
    ] }} />
    <main data-blog-context data-topic={topic.label} data-stage={stage.slug} data-booking-url={CAL_LINK} className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4`}>
      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm leading-6"><Link href="/blog" className="underline underline-offset-4">Blog</Link><span aria-hidden="true" className="mx-2">/</span><span aria-current="page">{topic.label}</span></nav>
          <h1 className={`${displayFont.className} mt-7 text-4xl font-semibold sm:text-5xl lg:text-6xl`}>{topic.label}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8">{topic.intro}</p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 lg:py-20">
        <section aria-labelledby="topic-articles">
          <h2 id="topic-articles" className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>Articles</h2>
          <ul className="mt-7 grid gap-6 sm:grid-cols-2">{posts.map(post => <BlogPostCard key={post.slug} post={post} />)}</ul>
        </section>
        {hubs.length > 1 ? <nav aria-label="Other topics" className="mt-12">
          <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>Other topics</h2>
          <ul className="mt-5 space-y-3">{hubs.filter(hub => hub.slug !== topic.slug).map(hub => <li key={hub.slug}><Link href={`/blog/topics/${hub.slug}`} className="font-semibold text-[#002147] underline underline-offset-4">{hub.label}</Link></li>)}</ul>
        </nav> : null}
        <BlogCta cta={stage.cta} stage={stage.slug} placement="hub" />
      </div>
    </main>
  </>;
}
