# SEO + GEO Audit — Cycling & Combo Tours

**Audit date:** 2026-09-07  
**Scope:** Single-cluster / multi-URL — ricefield cycling money page, cooking class money page, cycling↔cooking combo content, adventure combo UX on `/book`, and supporting spokes  
**Primary URLs:**
- https://www.sekarbaliactivity.com/tours/ubud-ricefield-cycling-tour
- https://www.sekarbaliactivity.com/tours/balinese-cooking-class
- https://www.sekarbaliactivity.com/blog/cycling-cooking-class-ubud-full-day-itinerary
- https://www.sekarbaliactivity.com/book (`#combos`)
**Business type:** Local adventure / culture tour operator (Pejeng · Ubud)  
**Product context:** `.agents/product-marketing.md`  
**Evidence:** Live HTML fetch/parse, GSC export `gsc-export-2026-08-02_2026-09-02.json`, robots/llms/social/broken-links/redirects/citation/eeat/readability scripts  
**Score confidence:** Medium (GSC Confirmed; PageSpeed rate-limited — CWV Unknown)

---

## A) Audit Summary

| Metric | Value |
|--------|-------|
| Overall rating (cluster) | **Needs Improvement (58/100)** |
| On-page / technical for cycling money page | Strong |
| Commercial Search visibility | Critical weakness |
| GEO / AI discovery artifacts | Strong |
| Combo product discoverability (book + SERP) | Weak vs competitors |

### Category scores (cycling + combo cluster)

| Category | Weight | Score | Notes |
|----------|-------:|------:|-------|
| Technical SEO | 25% | 86 | Indexable, canonical, 308 legacy slug, 0 broken links, AI bots allowed |
| Content Quality | 20% | 48 | Money pages OK; spokes thin (402–436w); Pejeng vs Tegallalang has **no H2s** |
| On-Page SEO | 15% | 72 | Titles/metas/H1 aligned on hubs; book page under-represents cooking + culture combo |
| Schema / Structured Data | 15% | 84 | `TouristTrip`+`Offer`, `BlogPosting`, LocalBusiness; Question/Answer (not FAQPage) |
| Performance (CWV) | 10% | — | **Unknown** (PSI rate-limited) — excluded |
| Image Optimization | 10% | 92 | 0 missing alt on audited pages |
| AI Search Readiness (GEO) | 5% | 88 | llms.txt 100; combo FAQs + pricing.md; mid citability (60–63) |
| **Weighted overall** | | **58** | Commercial GSC + thin spokes + combo UX gap dominate |

### Top 3 issues
1. **Cycling / cooking / combo earn almost no Search clicks** — cycling tour 2 imp / 0 clk / pos **19.5**; cooking 1/0; Pejeng vs Tegallalang 9/0; legacy `/tours/pejeng-cycling-tour` still 7 imp at pos **7.86** (better than canonical).
2. **Culture combo is content-only, not a bookable featured product** — `/book` featured combos are ATV/tubing/rafting only; cooking class is not a primary book section; cycling is excluded from mixable discount logic.
3. **Thin / weakly structured spokes** — guide 436w, worth-it 424w, Pejeng vs Tegallalang 402w with **zero H2s** (hurts SEO depth + AI passage extraction).

### Top 3 opportunities
1. **Promote cycling + cooking as a featured culture combo** on `/book` + homepage (parity with ATV+tubing), with transparent IDR sum and WhatsApp prefill.
2. **Deepen 3 spokes only** (combo itinerary, Pejeng vs Tegallalang with H2s, worth-it) with operator-first facts — do not mass-publish more Bali blogs.
3. **Consolidate legacy equity** — keep 308; request GSC inspection on canonical; ensure no remaining internal links to `/tours/pejeng-cycling-tour`.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GSC / Commercial | 🔴 Critical | Confirmed | Cycling money page nearly invisible | GSC Pages: `/tours/ubud-ricefield-cycling-tour` **2 imp / 0 clk / pos 19.5** | Route equity from spokes + GBP; strengthen unique Pejeng SERP title/CTR; build mid-tail (“rice paddy cycling Ubud”, “free hotel pickup cycling”) |
| GSC / Commercial | 🔴 Critical | Confirmed | Cooking + combo cluster also ~0 clicks | Cooking tour **1/0**; Pejeng vs **9/0**; combo blog not in top-37 pages | Treat combo blog as commercial hub: expand + internal links from high-imp blogs; feature on `/book` |
| Architecture | ⚠️ Warning | Confirmed | Legacy slug still impresses more than canonical | `/tours/pejeng-cycling-tour` **7 imp / pos 7.86** → **308** → ricefield URL (`redirect_checker`, `next.config.ts`) | Keep permanent redirect; GSC URL inspection on canonical; remove any leftover refs |
| Conversion IA | ⚠️ Warning | Confirmed | Featured combos omit cycling + cooking | `/book` H2 “Popular activity combos” lists ATV+tubing/rafting only; copy: “Mix ATV, canyon tubing, and rafting”; `FEATURED_COMBOS` + `Exclude<ActivityId,'cycling'>` in `combos.ts` | Add “Cycling + Cooking Class” featured card; allow culture-day WhatsApp prefill (even if discount rules stay adventure-only) |
| Conversion IA | ⚠️ Warning | Confirmed | Cooking class under-represented on `/book` | Book H2s: ATV×2, rafting, tubing, cycling — **no cooking H2**; only footer/blog links | Add cooking as bookable activity section with price IDR 400K |
| Content | ⚠️ Warning | Confirmed | Comparison spoke has no H2 hierarchy | `/blog/pejeng-rice-terrace-cycling-vs-tegallalang`: **h2_count=0**, 402 words | Add H2s matching queries (Pejeng vs Tegallalang, who should choose which, pickup/lunch); expand to ~900–1,200 words with first-hand Pejeng detail |
| Content | ⚠️ Warning | Confirmed | Cycling spokes below depth gate | Guide **436w**; worth-it **424w**; combo itinerary **677w** | Expand with itinerary specificity, seasonal Subak notes, real pickup rules — no keyword stuffing |
| GEO / Citability | ⚠️ Warning | Confirmed | Mid citation readiness on hubs | `citation_readiness`: cycling **63**, combo blog **60**; E-E-A-T tour **43** (no credentials/reviews) | Add review quotes / guest outcomes; keep dated IDR facts; avoid FAQPage schema |
| On-Page | ✅ Pass | Confirmed | Cycling money page title/meta/H1/canonical solid | Title 54 chars; meta 131; H1 “Ubud Ricefield & Village Cycling Tour”; self-canonical; index,follow | Maintain; optional CTR test: lead with “Pejeng” or “lunch + free pickup” |
| On-Page | ✅ Pass | Confirmed | Combo blog targets competitor query pattern | Title/H1 “Cycling + Cooking Class Day in Ubud”; H2s for itinerary, inclusions, prices, WhatsApp; 4 tables | Keep; align title toward “Cycling & Cooking Class in Ubud” if CTR stays weak |
| Schema | ✅ Pass | Confirmed | TouristTrip + Offer + itinerary present | Live JSON-LD Offer price **475000 IDR**, inclusions string, 8-step itinerary | Optional: add `sku`; do **not** add FAQPage/HowTo |
| GEO | ✅ Pass | Confirmed | AI crawler + llms corpus cover cycling/combo | robots: GPTBot/ClaudeBot/PerplexityBot/Google-Extended allowed; llms.txt quality **100**; GEO FAQs include combo Qs; `/pricing.md` lists cycling + cooking | Keep prices synced with `tours.ts` / `pricing.ts` |
| Images / links | ✅ Pass | Confirmed | Alts complete; no broken links | cycling `missing_alt=0`; broken_links 0/30 and 0/35 | Maintain |
| Social | ℹ️ Info | Confirmed | OG/Twitter present; optional tags missing | social_meta **69/100** (no og:site_name / image dimensions) | Add width/height 1200×630 if assets allow |
| Code hygiene | ⚠️ Warning | Confirmed | Placeholder YouTube IDs in tour data | `tours.ts`: `youtubeVideoId: "dQw4w9WgXcQ"` on cycling, luwak, cooking | Remove placeholders or replace with real embeds — never ship rickroll IDs |
| CWV | ℹ️ Info | Hypothesis | Mobile CWV unmeasured this run | `pagespeed.py` rate-limited twice | Re-run with `PAGESPEED_API_KEY` |

---

## C) Detailed Analysis

### 1) Cycling money page (`/tours/ubud-ricefield-cycling-tour`)

**What works**
- Keyword-aligned `seoTitle` / `seoDescription` (rice paddy, Pejeng, lunch, free pickup, IDR 475K, WhatsApp).
- Clear H1 + H3s for rice paddy, village culture, lunch; 8 visible FAQs including cooking-combo question.
- `TouristTrip` + `Offer` with itinerary ListItems; LocalBusiness entity graph.
- Internal links to cooking tour, combo blog, `/book`, WhatsApp.
- Gallery alts descriptive (Pejeng / rice paddy / lunch).

**What fails commercially**
- GSC: **2 impressions, 0 clicks, average position ~19.5** in the Aug 2–Sep 2 window — page is optimized but not yet winning retrieval/CTR.
- Legacy `/tours/pejeng-cycling-tour` still surfaces in GSC with better position while 308ing — equity not fully consolidated.
- Tour `reviews: []` and E-E-A-T checker score **43** — weak trust vs aggregators.

**Readability:** ~601–898 words (script vs main extract); Flesch ~54 — acceptable for travel commercial pages.

### 2) Combo tour (cycling + cooking)

**Product truth (from marketing context + site)**  
Day = Ricefield Cycling (IDR 475K, free Ubud pickup, lunch). Evening = Dinner Cooking Class (IDR 400K, 17:30–20:30). Booked via WhatsApp — not a single SKU in `FEATURED_COMBOS`.

**Combo blog** (`/blog/cycling-cooking-class-ubud-full-day-itinerary`)
- Strong GEO structure: answer-first open, Key Takeaways, **4 tables**, query-matched H2s, links to both money URLs (5 each).
- Meta ≤160; social OG type `article`.
- Gaps: ~677 words (competitors often ship full package pages); no dedicated `/tours/...` combo URL; “Same-day combo (both) · Ask via WhatsApp” without a fixed package price can lose agent/buyer comparison clarity vs USD 90–130 competitor packages.

**Book / mix logic gap**
- Adventure combos (ATV + tubing/rafting) get homepage/book cards + 10–12% mix discount.
- Cycling is **explicitly excluded** from mixable activities (`Exclude<ActivityId, 'cycling'>`).
- Cooking is not in the adventure mix engine at all.
- Result: the highest-intent culture query competitors rank for (“cycling and cooking class Ubud”) has a blog, not a first-class bookable combo surface.

### 3) Supporting spokes

| URL | Words | Structure | GSC (window) | Role |
|-----|------:|-----------|--------------|------|
| `/blog/cycling-cooking-class-ubud-full-day-itinerary` | 677 | Strong H2 + tables | Not in top pages | Commercial combo hub |
| `/blog/ubud-ricefield-cycling-tour-guide-2026` | 436 | H2s OK | — | Thin guide |
| `/blog/is-ubud-cycling-tour-worth-it` | 424 | — | — | Thin decision page |
| `/blog/pejeng-rice-terrace-cycling-vs-tegallalang` | 402 | **No H2s** | 9 imp / 0 clk / pos 9.6 | Best organic foothold — under-built |
| `/blog/inside-balinese-cooking-class-pejeng` | — | — | 6 imp / 0 clk | Cooking spoke |

Homepage links cycling tour (4) and combo blog (4) but **0** links to the 2026 cycling guide — missed hub→spoke reinforcement.

### 4) GEO / AI search readiness

| Check | Status |
|-------|--------|
| AI bots (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, …) | Explicitly allowed |
| `llms.txt` / `llms-full.txt` | 200; quality 100; cycling + cooking + combo FAQs present |
| `/pricing.md` | Present; lists cycling + cooking |
| Extractable FAQ / comparison blocks | Homepage GEO + combo blog tables |
| FAQPage schema | Not used (correct for commercial — rich results gone / restricted) |
| Brand third-party (`sameAs`) | Instagram + Facebook only — weak vs TripAdvisor/YouTube |
| Live AI citation share | **Not measured** this run (readiness ≠ observed citations) |

**GEO score (cluster): ~82/100 readiness** — discovery files excellent; citability limited by thin spokes, missing reviews, and no featured culture-combo entity for buying agents.

### 5) Adventure combos (ATV + water) — adjacent note

Featured ATV/tubing/rafting combos on `/book` are clearer for conversion than the culture combo, and ATV pages historically out-impress cycling. For this audit’s scope, treat adventure combos as **already productized**; the gap is the **cycling + cooking** culture day competitors sell as a named package.

---

## D) Scoring notes & environment limitations

- Weighted **58/100** excludes CWV (PSI rate limit).
- GSC window ends 2026-09-02 — some internal-link shipping after that may not be reflected.
- No live ChatGPT/Perplexity citation checks — platform GEO scores are readiness only.
- `article_seo.py` crashed on multi-type `@type` lists — manual/schema parse used instead.

---

## E) Unknowns / follow-ups

1. Re-measure GSC for cycling + combo URLs after 14–28 days.
2. PageSpeed mobile CWV for cycling tour + combo blog.
3. Manual AI citation check for: “cycling and cooking class Ubud”, “rice paddy cycling Ubud”, “Pejeng cycling tour”.
4. Confirm whether `youtubeVideoId` is rendered anywhere in UI before shipping real video.
5. GBP insights for cycling-related photos/reviews (ops — outside HTML audit).
