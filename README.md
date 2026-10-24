# Edussentials Consulting — Website

Marketing site and blog for Edussentials Consulting, a boutique admissions
advisory. Built with Next.js (App Router), TypeScript, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Purpose                                                        |
| ---------------- | --------------------------------------------------------------- |
| `npm run dev`     | Start the local dev server                                     |
| `npm run build`   | Production build (also prerenders all static/blog routes)      |
| `npm run start`   | Serve the production build                                     |
| `npm run lint`    | ESLint (Next core-web-vitals config)                            |
| `npm test`        | Smoke tests via Node's built-in test runner (see below)         |

## Project structure

```
app/
  layout.tsx, page.tsx        Root layout and homepage
  about/, services/,
  how-we-work/, career-labs/,
  contact/                    Marketing pages (one folder per route)
  blog/                       Blog index + [slug] article route
  career-explorer/            Multi-step career assessment form (client component)
  components/                 Shared UI: ArticleLayout, CTABand, StructuredData
  lib/
    content.ts                 Blog article registry (see below)
    site.ts                    Shared brand constants (URLs, contact, nav, schema IDs)
    fonts.ts                   Shared next/font instances (Cormorant Garamond, Libre Franklin)
  content/                    One file per blog article, registered in lib/content.ts
  sitemap.ts, robots.txt      SEO plumbing
tests/                        Node test runner smoke tests
```

## Shared brand constants

`app/lib/site.ts` is the single source of truth for the production URL,
contact details (email/phone/WhatsApp), the Cal.com booking link, nav links,
and the schema.org `@id`s used across JSON-LD blocks. `app/lib/fonts.ts` holds
the one shared instance of each `next/font/google` font. Import from these
instead of re-declaring fonts or hardcoding brand details in a page.

## Adding a blog post

Create `app/content/<slug>.ts` exporting an `Article`, then import it into the `articles` array in `app/lib/content.ts`.

Supply `slug`, `title`, `shortTitle`, `metaTitle`, `metaDescription`, `standfirst`, `publishedAt`, `updatedAt`, `author`, `topic`, `levels`, `stage`, `shortAnswer` and body `sections`. Choose one topic label and at least one level and stage slug from `app/lib/blog-taxonomy.ts`. Use a unique, unreserved slug and ISO dates. Keep `updatedAt` equal to `publishedAt` until a genuine content edit. Optional `summary` falls back to `metaDescription`.

Write a two-to-four-sentence short answer from the article. Optional FAQs must answer questions covered in it. Optional sources need a title, cited URL and honest `accessedAt` date. Omit sources when none exist. Mark unapproved copy `[FOUNDER DRAFT]`.

For a guest author, add an entry in `app/content/authors.ts` with name, slug, role, a 40–80-word bio and `type: "guest"`, then use its slug as the post’s author. Photo and LinkedIn URL are optional.

Hubs appear automatically at two posts once the taxonomy intro, title and meta description exist. Filters appear when every populated option reaches three posts.

Run `npm test` and `npm run build`. Production builds reject draft/input/verification markers.

## Career Explorer form

`app/career-explorer/form.tsx` is a multi-step assessment that posts to
Formspree client-side. It validates email format and required fields before
advancing/submitting, and includes a hidden honeypot field for basic spam
filtering (bot submissions are silently accepted client-side but never sent
to Formspree).

## Environment variables

| Variable                          | Purpose                                      |
| ----------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT`    | Formspree endpoint the Career Explorer form posts to |

Set these in `.env.local` for local development (not committed).

## Tests

`npm test` runs `tests/*.test.ts` with Node's built-in test runner (via
`tsx` for TypeScript). These are smoke tests, not a full suite — they check
that:

- every article in the content registry has required fields, valid dates,
  and related links that resolve to real slugs (`tests/content.test.ts`)
- the sitemap includes every static route and every published article, with
  no duplicates (`tests/sitemap.test.ts`)
- shared site constants and the breadcrumb schema builder behave as expected
  (`tests/site.test.ts`)

## Deployment

Deploys as a standard Next.js app (SSR/ISR, not a static export) — see the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
`next.config.ts` defines a couple of legacy `/guides` → `/blog` redirects.
