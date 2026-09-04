# Implementation Roadmap: Sekar Bali Activity

Status key: ✅ done in codebase · 🔄 in progress · ☐ remaining (ops / off-site)

## Phase 1 — Foundation ✅
* [x] Keyword-aware titles/descriptions within SERP limits
* [x] Canonical + Open Graph / Twitter metadata
* [x] `TravelAgency` / `LocalBusiness` JSON-LD + NAP roles
* [x] Dynamic `sitemap.ts` + AI discovery URLs
* [ ] Claim/optimize GBP photos & categories (ops)

## Phase 2 — Expansion ✅ (core)
* [x] Dedicated tour pages (ATV, rafting, tubing, cycling, cooking)
* [x] Unique tour copy + TouristTrip-style detail schema on tour pages
* [x] `/about`, `/contact`, policies
* [x] Blog section with citability-focused guides

## Phase 3 — GEO scale (2026-09) ✅ / 🔄
* [x] Homepage SSR GEO answer block + speakable CSS selectors
* [x] `/llms.txt` + `/llms-full.txt` (+ well-known mirror)
* [x] `/pricing.md` agent-readable pricing
* [x] HTTP `Link` headers + HTML `rel=alternate` for AI files
* [x] Cooking class included in GEO corpus (tours, prices, comparisons, FAQ)
* [x] Align blog IDR claims with live tier pricing (Single ATV from IDR 600,000)
* [x] Category-diverse homepage GEO FAQ subset
* [ ] Monthly AI citation monitoring spreadsheet (ops)
* [ ] Add verified review / Maps URLs to Organization `sameAs` when confirmed

## Phase 4 — Authority ☐
* [ ] Travel blogger / directory outreach for third-party mentions
* [ ] YouTube text-layer (titles, chapters, descriptions) for key how-tos
* [ ] Review-generation loop via WhatsApp after tours
* [ ] Optional Markdown content negotiation on key URLs (Accept: text/markdown)

## GEO execution checklist (reuse each refresh)
1. Update `GEO_UPDATED` + facts in `geoContent.ts` only (do not fork prices).
2. Confirm `pricing.ts` tiers match GEO pricing + homepage + blog snippets.
3. Re-fetch `/llms.txt`, `/pricing.md`, `robots.txt` after deploy.
4. Spot-check 10 money queries in ChatGPT / Perplexity / AI Overviews.
5. Log results in GEO-ANALYSIS.md (date, cited?, URL, competitor).
