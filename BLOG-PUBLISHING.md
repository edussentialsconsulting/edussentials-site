# Blog publication standards

These rules apply to every new or revised article. Preserve approved prose and historical publication dates when making presentation-only changes.

- Use editorial Title Case for article titles, listing titles and SEO titles. Capitalise principal words; leave internal articles, conjunctions and prepositions lower case. Preserve acronyms such as UCAS, MBA and AI. Section headings remain sentence case. Review casing manually rather than applying an automatic transformation.
- Keep the listing title concise and consistent with the full title. Use a unique, descriptive SEO title ending in ` | Edussentials` and an accurate, unique description. Do not change a live slug solely to change title casing.
- Use the shared `ARTICLE_AUTHOR` identity for Aniruddha Sapru, linked to `/about`. If a genuine guest author is approved, supply that person's real identity and update the author validation deliberately; never attribute their work to Aniruddha.
- Record publication and modification dates as real YYYY-MM-DD dates. Preserve original publication dates. Change the modification date for a substantive article revision, not a template, metadata or title-casing adjustment. The shared layout displays dates consistently and shows Updated only when the dates differ.
- Use `buildArticleMetadata` and `buildArticleSchema` through the existing article page and layout. Canonical URL, author, dates, headline and description must agree across visible content, metadata and structured data. Include Open Graph and Twitter previews. The shared logo is a brand fallback, not a claimed illustration of the article.
- Only include FAQ schema for FAQs actually present on the page. Do not invent ratings, credentials or image claims. Keep the registered article in the blog index and sitemap and check related links.
- Companion articles normally contain 1,000–1,200 words, concrete examples, connected prose and a consistent student-facing perspective that includes parents. Use accessible clickable contents when helpful. Follow the current Brain writing rules and exact founder brief.
- Review both the blog and standalone LinkedIn post in the single morning session. Publish only explicitly approved versions. Publish and verify the website first, then the approved LinkedIn body plus approved CTA. Submit the full canonical website URL; LinkedIn may shorten its display automatically. Do not rewrite the approved body to work around that behaviour.
- Before release run tests, lint and production build. Check desktop and mobile layout, listing, live canonical URL, visible author/dates, metadata, structured data, contents links and sitemap. A successful deployment is not proof of search indexing or AI citations.

The article contract is checked in `tests/article-presentation.test.ts`. New articles must pass it along with the existing content and sitemap tests.
