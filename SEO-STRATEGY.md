# Strategic SEO Plan: Sekar Bali Activity

## 1. Executive Summary
Sekar Bali Activity is a local tourism operator offering Pejeng/Ubud adventures (ATV at All New Bali Adventure, rafting, canyon tubing, ricefield cycling, Balinese cooking class). **Primary SEO bet for cycling (2026):** classic Google Search rankings + Map Pack → WhatsApp bookings. GEO/AEO is a supporting layer after Google on-page and local fundamentals are solid.

## 2. Target Audience
* Couples, families, and small friend groups staying in/near Ubud.
* Search intents: commercial (“ATV Ubud price”, “rice paddy cycling Ubud”, “cycling tour Ubud booking”) and comparison (“rafting vs tubing near Ubud”).
* Secondary AI-assistant intents: transparent IDR packaging, pickup rules — keep facts consistent so Google AI surfaces don’t conflict with the site.

## 3. Core Strategy (Google Search first, then GEO)
1. **Google on-page (cycling focus):** SERP title/meta ≤60/≤160, P0 keywords (`rice paddy cycling Ubud`, `countryside cycling`, `Pejeng village bike tour`), accurate lunch + free pickup, `TouristTrip`/`Offer` schema — see **CYCLING-GOOGLE-SEO-2026.md**.
2. **Local Service SEO:** GBP NAP consistency, tour landing pages, review velocity with Pejeng/rice-paddy photo proof.
3. **Niche positioning:** Pejeng village authenticity + WhatsApp / no-upfront-payment trust — not Tegallalang mass routes or false Kintamani downhill claims.
4. **Content for Search:** Hub = cycling tour URL; spokes = worth-it / guide / Pejeng vs Tegallalang / cooking combo — human-edited, information-gain first (Mar/May 2026 cores).
5. **GEO (supporting):** `llms.txt` / `pricing.md` stay consistent with Google-visible facts; do not chase AI citations as the main cycling KPI.
6. **Earn citations honestly:** Never buy or manipulate AI Overview / AI Mode citations (spam as of 2026).

## 4. Google 2026 Policy Guardrails (Mandatory)
Apply these on every content/SEO change:

| Policy signal | What we do |
|---------------|------------|
| **Mar/May 2026 cores** — originality, first-hand expertise, information gain | Publish operator-real itineraries, arena photos, IDR tiers, pickup rules — not generic “best tours in Bali” clones |
| **Spam updates (Mar/Jun 2026)** — scaled AI / low-effort pages | No mass AI blog farms; human-edit every article; one strong page > ten thin ones |
| **Feb 2026 Discover core** — Discover ≠ Search | Treat Discover traffic separately; freshness/engagement for Discover; do not “fix rankings” with Discover-only tactics |
| **FAQ rich results gone (May 2026)** | Keep visible FAQs for users; **never** add `FAQPage` schema (commercial); use `Question`/`Answer` only when matching on-page content |
| **AI Performance in Search Console** | Track AI Overviews / AI Mode visibility separately from classic organic when the report is available |
| **Agentic AI Mode (I/O 2026)** | Keep `/pricing.md`, policies, and package facts machine-readable and consistent with the site |

## 5. KPIs
* Primary: WhatsApp inquiries / month (cycling + ATV).
* Secondary: **Google** — organic sessions + GSC queries/CTR on `/tours/ubud-ricefield-cycling-tour`; Map Pack where eligible.
* Tertiary (GEO): Monthly DIY check of top 20 queries in ChatGPT / Perplexity / Google AI Overviews — only after Google money-page CTR is stable.
* Agent readiness: `/pricing.md` and `/llms.txt` return 200; no IDR or meal-inclusion conflicts vs live tour page.
* When available: Search Console AI Performance vs classic Search (separate reporting).

## 6. Technical & Schema Foundation
* `TravelAgency` / `LocalBusiness` + per-tour `TouristTrip` / `Offer`; commercial-safe `Question`/`Answer` (no FAQPage).
* Tour pages may set `seoTitle` / `seoDescription` for Google SERP limits without bloating on-page H1 copy.
* AI crawlers allowed in `robots.txt`; machine-readable discovery stays aligned with Google-visible inclusions (cycling = **lunch only**).
* Single source of truth: `src/data/tours.ts` + `src/lib/pricing.ts` + `src/data/geoContent.ts`.

See **CYCLING-GOOGLE-SEO-2026.md** for the cycling Search execution plan. See **GEO-ANALYSIS.md** for AI-readiness scoring.
