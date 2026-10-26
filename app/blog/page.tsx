import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_TOPICS, BLOG_STAGES, BLOG_LEVELS } from "@/app/lib/blog-taxonomy";
import { articles, filterBlogPosts, getFilterControls, getStagePosts, getTopicHubs, getPostsCtaStage } from "@/app/lib/content";
import BlogPostCard from "@/app/components/BlogPostCard";
import { displayFont, bodyFont } from "@/app/lib/fonts";
import { BASE_URL, CAL_LINK } from "@/app/lib/site";

export const metadata: Metadata = {

  title: "Blog | Edussentials Consulting",
  description:
    "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.",
  openGraph: { title: "Blog | Edussentials Consulting", description: "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.", url: `${BASE_URL}/blog`, type: "website" },
  twitter: { card: "summary_large_image", title: "Blog | Edussentials Consulting", description: "In-depth pieces and honest commentary on essays, applications, profiles and admissions strategy from a founder-led boutique advisory.", images: [{ url: `${BASE_URL}/blog/opengraph-image`, alt: "Edussentials Consulting Blog" }] },
  alternates: { canonical: `${BASE_URL}/blog` },
};


type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function BlogIndexPage({ searchParams }: Props) {
  const { posts, filters, active } = filterBlogPosts(await searchParams);
  const controls = getFilterControls();
  const hubs = getTopicHubs();
  const selectedStage = BLOG_STAGES.find(stage => stage.slug === filters.stage) ?? getPostsCtaStage(posts);
  const filterLabels = [
    BLOG_STAGES.find(stage => stage.slug === filters.stage)?.label,
    BLOG_LEVELS.find(level => level.slug === filters.level)?.label,
    filters.destination?.toUpperCase(),
  ].filter(Boolean);

  return (
    <main data-blog-context data-booking-url={CAL_LINK} className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
            Blog
          </p>
          <h1
            className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl`}
          >
            Analysis, not advice-shaped noise.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            In-depth pieces on essays, applications, profiles and admissions strategy, written the
            way we practise them. Specific, current, and free of the advice that sounds good but
            does nothing.
          </p>
        </div>
      </section>

      {!active ? <section aria-label="Reader entry points" className="mx-auto grid max-w-7xl gap-6 px-6 pt-14 sm:px-10 lg:grid-cols-3 lg:px-12">
        {BLOG_STAGES.map(stage => {
          const featured = getStagePosts(stage.slug);
          const count = articles.filter(post => post.stage.includes(stage.slug)).length;
          if (!featured.length) return null;
          return <div key={stage.slug} data-reader-panel={stage.slug} className="flex flex-col rounded-3xl border border-[#002147]/20 bg-white p-7">
            <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>{stage.label}</h2>
            <p className="mt-4 text-sm leading-7">{stage.description}</p>
            <ul className="mt-5 space-y-4 text-base font-semibold leading-6 text-[#002147]">
              {featured.map(post => <li key={post.slug}><Link href={`/blog/${post.slug}`} className="underline decoration-[#d2b48c] underline-offset-4">{post.shortTitle}</Link></li>)}
            </ul>
            <div className="mt-auto flex flex-col items-start gap-4 pt-7 text-sm leading-6">
              {count > featured.length ? <Link href={`/blog?stage=${stage.slug}`} className="font-semibold text-[#002147] underline underline-offset-4">See all {count} articles</Link> : null}
              <a data-blog-cta data-cta-placement="landing_panel" data-cta-stage={stage.slug} href={stage.cta.href} className="inline-block rounded-full bg-[#d2b48c] px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#002147] transition hover:bg-[#f6f0e8] focus-visible:outline-2 focus-visible:outline-offset-4">{stage.cta.label}</a>
            </div>
          </div>;
        })}
      </section> : null}

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        {controls.levels.length > 0 || controls.destinations.length > 0 ? <form action="/blog" method="get" aria-label="Filter articles" className="mb-10 flex flex-wrap items-end gap-5 rounded-2xl border border-[#002147]/20 bg-white p-6">
          {filters.stage ? <input type="hidden" name="stage" value={filters.stage} /> : null}
          {controls.levels.length > 0 ? <label className="text-sm font-semibold">Study level<select name="level" defaultValue={filters.level ?? ""} className="mt-2 block rounded border border-[#002147]/40 bg-white p-3 focus-visible:outline-2 focus-visible:outline-offset-4"><option value="">All levels</option>{controls.levels.map(level => <option key={level.slug} value={level.slug}>{level.label}</option>)}</select></label> : filters.level ? <input type="hidden" name="level" value={filters.level} /> : null}
          {controls.destinations.length ? <label className="text-sm font-semibold">Destination<select name="destination" defaultValue={filters.destination ?? ""} className="mt-2 block rounded border border-[#002147]/40 bg-white p-3 focus-visible:outline-2 focus-visible:outline-offset-4"><option value="">All destinations</option>{controls.destinations.map(destination => <option key={destination} value={destination}>{destination.toUpperCase()}</option>)}</select></label> : filters.destination ? <input type="hidden" name="destination" value={filters.destination} /> : null}
          <button type="submit" className="rounded-full bg-[#002147] px-6 py-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4">Apply filters</button>
        </form> : null}

        {active ? <section aria-label="Selected filters" className="mb-12 rounded-2xl border border-[#002147]/20 bg-white p-6 sm:p-8">
          <h2 className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>{filterLabels.join(" · ")}</h2>
          <Link href="/blog" className="mt-4 inline-block font-semibold text-[#002147] underline underline-offset-4">Reset filters</Link>
          {selectedStage ? <a data-blog-cta data-cta-placement="landing_panel" data-cta-stage={selectedStage.slug} href={selectedStage.cta.href} className="mt-5 block font-semibold text-[#002147] underline underline-offset-4">{selectedStage.cta.label}</a> : null}
          {!posts.length ? <p className="mt-5 leading-7">No articles match these filters.</p> : null}
        </section> : null}

        {BLOG_TOPICS.map(topic => {
          const matching = posts.filter(post => post.topic === topic.label);
          if (!matching.length) return null;
          const hub = hubs.find(hub => hub.slug === topic.slug);
          const count = articles.filter(post => post.topic === topic.label).length;
          return <section key={topic.slug} id={topic.slug} className="mb-14 scroll-mt-8" aria-labelledby={`${topic.slug}-heading`}>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id={`${topic.slug}-heading`} className={`${displayFont.className} text-3xl font-semibold text-[#002147]`}>{topic.label}</h2>
              {hub ? <Link href={`/blog/topics/${hub.slug}`} aria-label={`See all ${count} articles in ${topic.label}`} className="text-sm font-semibold text-[#002147] underline underline-offset-4">See all {count} articles</Link> : null}
            </div>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{matching.map(post => <BlogPostCard key={post.slug} post={post} />)}</ul>
          </section>;
        })}
      </div>
    </main>
  );
}
