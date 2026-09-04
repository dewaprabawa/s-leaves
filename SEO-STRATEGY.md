# Strategic SEO Plan: Sekar Bali Activity

## 1. Executive Summary
Sekar Bali Activity is a local tourism operator offering Pejeng/Ubud adventures (ATV at All New Bali Adventure, rafting, canyon tubing, ricefield cycling, Balinese cooking class). The goal is high-intent WhatsApp bookings plus **citation in AI answers** (GEO/AEO), not only classic rankings.

## 2. Target Audience
* Couples, families, and small friend groups staying in/near Ubud.
* Search intents: commercial (“ATV Ubud price”, “cycling tour Ubud booking”) and comparison (“rafting vs tubing near Ubud”).
* AI-assistant intents: “best beginner ATV near Ubud”, “does this include hotel pickup?”, transparent IDR packaging.

## 3. Core Strategy (Local + GEO)
1. **Local Service SEO:** GBP NAP consistency, tour landing pages, review velocity.
2. **Niche positioning:** Pejeng village + All New Bali Adventure arena clarity + WhatsApp / no-upfront-payment trust.
3. **GEO (owned site):** Extractable answer blocks, `llms.txt` / `llms-full.txt`, **`/pricing.md`**, speakable selectors, category-diverse homepage Q&As.
4. **GEO (presence):** Diversify third-party mentions over time (reviews, YouTube text layer, directories) — do not bet on a single forum.
5. **Earn citations honestly:** Never buy or manipulate AI Overview / AI Mode citations (official spam as of 2026).

## 4. Google 2026 Policy Guardrails (Mandatory)
Apply these on every content/SEO change:

| Policy signal | What we do |
|---------------|------------|
| **Mar/May 2026 cores** — originality, first-hand expertise, information gain | Publish operator-real itineraries, arena photos, IDR tiers, pickup rules — not generic “best tours in Bali” clones |
| **Spam updates (Mar/Jun 2026)** — scaled AI / low-effort pages | No mass AI blog farms; human-edit every article; one strong page > ten thin ones |
| **Feb 2026 Discover core** — Discover ≠ Search | Treat Discover traffic separately; freshness/engagement for Discover; do not “fix rankings” with Discover-only tactics |
| **FAQ rich results gone (May 2026)** | Keep visible FAQs for users/GEO; **never** add `FAQPage` schema (commercial); use `Question`/`Answer` only when matching on-page content |
| **AI Performance in Search Console** | Track AI Overviews / AI Mode visibility separately from classic organic when the report is available |
| **Agentic AI Mode (I/O 2026)** | Keep `/pricing.md`, policies, and package facts machine-readable and consistent with the site |

## 5. KPIs
* Primary: WhatsApp inquiries / month.
* Secondary: Map Pack + tour-page organic sessions.
* GEO: Monthly DIY check of top 20 queries in ChatGPT / Perplexity / Google AI Overviews (cited? which URL?).
* Agent readiness: `/pricing.md` and `/llms.txt` return 200; no IDR conflicts across blog vs tiers.
* When available: Search Console AI Performance (impressions/citations in AI surfaces) vs classic Search.

## 6. Technical & Schema Foundation
* `TravelAgency` / `LocalBusiness` + tour detail schema; commercial-safe `Question`/`Answer` (no FAQPage).
* AI crawlers explicitly allowed in `robots.txt` (including `anthropic-ai` alias).
* Machine-readable discovery: `llms.txt`, `llms-full.txt`, `pricing.md`, HTTP `Link` alternates.
* Single source of truth: `src/data/geoContent.ts` + `src/lib/pricing.ts` tiers.

See **GEO-ANALYSIS.md** for scored readiness and the executable GEO backlog.
