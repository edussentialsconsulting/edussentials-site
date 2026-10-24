import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getPublishedAuthors } from "@/app/lib/content";
import { BASE_URL, CAL_LINK } from "@/app/lib/site";
import { displayFont, bodyFont } from "@/app/lib/fonts";
import StructuredData from "@/app/components/StructuredData";

type Props = { params: Promise<{ "author-slug": string }> };

export function generateStaticParams() {
  return getPublishedAuthors().map(author => ({ "author-slug": author.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)["author-slug"];
  const author = getPublishedAuthors().find(author => author.slug === slug);
  if (!author) return {};
  const title = `${author.name} | Edussentials Consulting Blog`;
  return {

    title,
    description: author.bio,
    alternates: { canonical: `${BASE_URL}/blog/authors/${slug}` },
    openGraph: { title, description: author.bio, type: "profile", url: `${BASE_URL}/blog/authors/${slug}` },
    twitter: { card: "summary_large_image", title, description: author.bio, images: [{ url: `${BASE_URL}/blog/authors/${slug}/opengraph-image`, alt: author.name }] },
  };
}

export default async function AuthorPage({ params }: Props) {
  const slug = (await params)["author-slug"];
  const author = getPublishedAuthors().find(author => author.slug === slug);
  if (!author) notFound();
  const posts = articles.filter(post => post.author === slug);
  return <>

    <StructuredData data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", name: author.name, url: `${BASE_URL}/blog/authors/${slug}`, description: author.bio, ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}) } }} />
    <main data-blog-context data-author={author.slug} data-booking-url={CAL_LINK} className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4`}>
      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
          <Link href="/blog" className="text-sm underline underline-offset-4">Blog</Link>
          {author.photo ? <Image src={author.photo} alt={author.name} width={128} height={128} className="mt-8 rounded-full" /> : null}
          <h1 className={`${displayFont.className} mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl`}>{author.name}</h1>
          <p className="mt-5 text-lg text-[#d2b48c]">{author.role}{author.type === "guest" ? " · Guest contributor" : ""}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8">{author.bio}</p>
          {author.linkedIn ? <a href={author.linkedIn} className="mt-5 inline-block underline underline-offset-4">LinkedIn</a> : null}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
        <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>Articles by {author.name}</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {posts.map(post => <li key={post.slug} className="rounded-2xl border border-[#002147]/20 bg-white p-7">
            <h3 className={`${displayFont.className} text-2xl font-semibold leading-tight text-[#002147]`}><Link href={`/blog/${post.slug}`} className="underline decoration-[#d2b48c] underline-offset-4">{post.title}</Link></h3>
            <p className="mt-4 text-base leading-7">{post.summary ?? post.metaDescription}</p>
          </li>)}
        </ul>
        <p className="mt-10"><Link href="/blog" className="font-semibold text-[#002147] underline underline-offset-4">Back to Blog</Link></p>
      </section>
    </main>
  </>;
}
