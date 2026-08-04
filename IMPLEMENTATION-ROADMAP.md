# Implementation Roadmap: Sekar Bali Activity

## Phase 1 — Foundation (Weeks 1-4)
**Goal: Fix critical technical SEO issues on the existing single-page site.**
* [ ] Fix the `<h1>` tag to include primary keywords (e.g., "Authentic Bali Tours & Village Cycling in Pejeng").
* [ ] Add a `<link rel="canonical">` to the homepage.
* [ ] Implement Open Graph (`og:`) and Twitter card meta tags for social sharing.
* [ ] Claim and optimize the Google Business Profile (ensure NAP consistency: Name, Address, Phone).
* [ ] Add `LocalBusiness` JSON-LD schema to the homepage.

## Phase 2 — Expansion (Weeks 5-12)
**Goal: Break out the single page into a proper site architecture to capture specific search intents.**
* [ ] Create dedicated landing pages for each tour (`/tours/pejeng-cycling`, `/tours/luwak-coffee`, `/tours/cooking-class`).
* [ ] Write 600+ words of unique, highly descriptive content for each tour page.
* [ ] Implement `Tour` schema on these individual pages.
* [ ] Create an `/about` page detailing the local hosts, the village's story, and the business's community impact to build E-E-A-T.
* [ ] Set up a dynamic `sitemap.ts` in the Next.js app and submit it to Google Search Console.

## Phase 3 — Scale (Weeks 13-24)
**Goal: Launch content marketing to build topical authority.**
* [ ] Build a `/blog` section in the Next.js app (using MDX or a lightweight CMS).
* [ ] Execute the first 3 months of the Content Calendar (focusing on Subak, Pejeng history, and Balinese spices).
* [ ] Implement the Hub-and-Spoke internal linking strategy (linking blog posts back to the core tour pages).
* [ ] Implement a review-generation campaign via WhatsApp (sending a link to past guests asking for Google Maps reviews with photos).

## Phase 4 — Authority (Months 7-12)
**Goal: Off-page SEO and digital PR.**
* [ ] Reach out to Bali travel bloggers and offer a complimentary tour in exchange for an honest review and backlink.
* [ ] Get listed on curated "Best things to do in Ubud" local directories and niche travel sites.
* [ ] Monitor AI Search visibility (ChatGPT, Perplexity) by ensuring the brand is mentioned in high-authority local travel forums.
