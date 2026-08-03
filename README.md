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

## Publishing a blog article

Articles are typed data, not MDX/markdown files. The template, JSON-LD,
sitemap entry, and index-page listing all derive from the registry, so
publishing a new article only touches two files:

1. Add `app/content/<slug>.ts` exporting an `Article` object (see
   `app/lib/content.ts` for the type).
2. Import it and add it to the `articles` array in `app/lib/content.ts`.

Nothing else needs to change — `app/blog/[slug]/page.tsx`, `app/blog/page.tsx`,
and `app/sitemap.ts` all read from that array.

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
