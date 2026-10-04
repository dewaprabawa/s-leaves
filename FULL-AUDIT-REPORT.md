# FULL AUDIT REPORT

**URL:** https://www.sekarbaliactivity.com/tours/bali-motorbike-traveling-trip  
**Scope:** Single-page SEO + GEO (AI citation) audit — `seo page` + `seo geo`  
**Date:** 2026-10-04  
**Live HTML fetch:** HTTP 200, 0 redirects, 57 ms (`/tmp/motorbike-seo/page.html`, 318,128 bytes)  
**Score confidence:** Medium — Core Web Vitals unknown (PageSpeed Insights rate-limited; retried once)  
**This branch:** Title/meta, GEO H2, route passages, Promo badge, and planner link are implemented. Image compression, reviews, and CWV remain follow-ups.

---

## A) Audit Summary

This is Sekar Bali Activity’s guided **Bali motorbike / scooter day** money page. It is already a strong commercial + GEO page: SSR answer block, price table, six destination routes, compare tables, visible FAQs, TouristTrip/Product JSON-LD with AggregateOffer, standalone `Question`/`Answer` (not FAQPage), speakable selectors, `llms.txt` / `pricing.md`, and a spoke cluster. The page is **indexable** and **citable**. The main gaps are **SERP alignment** (title leads with “Best Price Scooter…” while the H1 and search language are “Bali motorbike tour”), **thin destination passages**, **oversized route JPEGs**, and **no first-party reviews** on this URL.

**Overall rating:** Good — **84/100** (performance excluded from the weighted total; see scoring notes)

### Top 3 issues

1. Title / meta / H1 mismatch — title is `Best Price Scooter Tour Bali | Promo 450K` (41 chars). Primary keyword **Bali motorbike tour** is not first. Meta (135 chars) omits “motorbike” and “Ubud”. H1 is already correct.
2. Destination H3s are one-to-two sentences — weak passage-index / GEO citation blocks for Ubud, waterfall, Kintamani, South, North, East.
3. Route JPEGs: three files >500 KB (`moto-ubud.jpg` 623 KB, `moto-east.jpg` 591 KB, `moto-ubud-waterfall.jpg` 563 KB). Markdown `<img>` tags have no width/height (CLS risk below the fold).

### Top 3 opportunities

1. Lead the title with **Bali Motorbike Tour Ubud** and put the primary keyword + Ubud + WhatsApp in a 150–160 character meta (keep promo 450K; do **not** claim cheapest vs ~USD 28–39 marketplace scooter days).
2. Expand each route H3 into an 80–120 word self-contained “X is…” passage (stops, tickets extra, IDP/pillion, what it is not).
3. Add the existing planner (`/planners/motorbike-tour-price`) on this money page and a visible Promo badge (copy already has strikethrough list prices).

### What we will not do

- Do not claim cheapest / best in Bali vs cheap SERP scooter rentals or USD marketplace listings.
- Do not add FAQPage or HowTo schema (commercial site; FAQ rich results gone May 2026; HowTo deprecated).
- Do not change the slug `bali-motorbike-traveling-trip` (canonical + sitemap already set; a rename needs 301s).
- Do not invent reviews, 999K packages, Gorilla Cave, free quad, or SeaBank.
- Do not change published promo rates (450 / 500 / 650 / 750 / 750 / 800 + 550K south shuttle).

---

## Page Score Card

```
Overall Score: 84/100   (CWV excluded — Unknown)

On-Page SEO:     76/100  ████████░░░░
Content Quality: 84/100  ████████░░░░
Technical:       92/100  █████████░░░
Schema:          88/100  █████████░░░
Images:          68/100  ███████░░░░░
GEO / AI:        90/100  █████████░░░
Performance:     Insufficient data
```

Weighted mix (skill defaults, performance omitted and remaining categories renormalized): Technical 25, Content 20, On-Page 15, Schema 15, Images 10, GEO 5 → **84**.

---

## Scoring notes (rubric)

### On-Page SEO — 76

**Positives:** One H1 includes “Bali Motorbike Tour” + Ubud. Title unique and 41 characters (30–60 gate). Self-canonical + `index,follow`. Question-style H2/H3s. Dense descriptive internal links to the motorbike cluster.

**Deficits:** Title leads with “Best Price Scooter…”. Meta omits primary keyword and Ubud (135 chars vs 150–160 sweet spot). Title does not match H1.

**Penalties:** Warning ×2 (title keyword order + meta keyword/Ubud). Justification: strong technical on-page, penalized by SERP-string mismatch.

### Content Quality — 84

**Positives:** ~3,781 words (service-page minimum 800). First-party price table, compare table, six named routes, inclusions, itinerary. Operator facts (per scooter, tickets extra, IDP/pillion, 550K shuttle vs 400K ATV surcharge). Visible “Updated 2026-10-04”.

**Deficits:** Destination H3s are thin. `reviews: []` — no on-page testimonials. Flesch 39.1 is polluted by nav/schema concatenation (treat as Hypothesis, not a rewrite mandate).

**Penalties:** Warning ×2 (thin route passages, empty reviews).

### Technical — 92

**Positives:** HTTPS, 0 redirect hops, security headers 100/100, robots allow Google + AI crawlers, sitemap lists this URL with `lastmod` 2026-10-04 and image entries, 0 broken links / 127 checked (4 benign redirects).

**Deficits:** Slug `traveling-trip` is weaker than search language (Info — do not rename without redirects). No hreflang (English-only site — Info / N/A).

### Schema — 88

**Positives:** JSON-LD only. `TouristTrip` + `Product` with `AggregateOffer` low 450000 / high 800000 IDR and six Offers. BreadcrumbList. WebPage + speakable CSS. Ten standalone Question/Answer nodes. No FAQPage. No HowTo.

**Deficits:** WebPage `name` copies the weak seoTitle. No AggregateRating (correct — do not fake). `article_seo.py` crashed on `@type` arrays (script limitation, not a site bug).

### Images — 68

**Positives:** All content images have descriptive alt. Hero uses Next/Image `fill` + `priority` inside an aspect box. OG image 1600×1000.

**Deficits:** Three JPEGs >500 KB (Critical per image skill). Four more >200 KB. Destination markdown images lack width/height. Hero/gallery `fill` omits HTML width/height attributes (aspect boxes mitigate CLS).

**Penalties:** Critical ×1 (oversized files) −15 from a 5/8 base (~63) → **68** after judgment (alts and Next hero keep this out of Poor).

### GEO / AI — 90

**Positives:** SSR `ActivityGeoBlock` with `.motorbike-geo-tldr` / `.motorbike-geo-answer`. Definition-first TL;DR. Price table. 10 question answers. `llms.txt` 100/100 + `llms-full.txt` + `pricing.md`. AI crawlers explicitly allowed. Speakable selectors match live classes.

**Deficits:** GEO H2 is “Bali scooter tour Ubud — facts AI can cite” (operator residue; primary keyword not first). Long FAQ answers bury the 40–60 word close. Money page does not link the motorbike planner.

### Performance — Insufficient data

PageSpeed mobile + desktop rate-limited; one retry also rate-limited. Do not invent LCP/INP/CLS. Hypothesis only: 474 KB hero JPEG and 623 KB route JPEG can hurt LCP if selected as the LCP element.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- | --- |
| On-page title | Warning | Confirmed | Title leads with “Best Price Scooter…” not the primary query | Live `<title>`: `Best Price Scooter Tour Bali \| Promo 450K` (41). Cluster head term is “Bali motorbike tour”. H1: `Bali Motorbike Tour — Scooter Day from Ubud` | `Bali Motorbike Tour Ubud \| Promo 450K` (37). Keep promo 450K. Do not claim cheapest |
| On-page meta | Warning | Confirmed | Meta omits motorbike + Ubud; 135 chars | Live description: “Best published scooter promo from IDR 450K…” | Rewrite 150–160 chars starting with “Bali motorbike tour from Ubud” + tickets extra + WhatsApp |
| On-page H1 | Pass | Confirmed | Single H1 matches intent | parse.json `h1` length 1 | Keep |
| Canonical / robots | Pass | Confirmed | Self-canonical, index,follow, 200, 0 hops | parse.json + redirect_checker | Keep |
| URL slug | Info | Confirmed | `traveling-trip` ≠ “motorbike tour” | Path `/tours/bali-motorbike-traveling-trip` | Do not rename this pass. Reinforce keyword in title/H1/body |
| Destination copy | Warning | Confirmed | Six route H3s are 1–2 sentences | fullDescription H3s e.g. “The entry Bali scooter tour from Ubud. Stops: …” | Expand each to 80–120 word citable passages |
| GEO H2 | Warning | Confirmed | H2 says “facts AI can cite” | Live H2: `Bali scooter tour Ubud — facts AI can cite` | User-facing H2 with “Bali motorbike tour from Ubud” |
| Internal links | Warning | Confirmed | Planner calculator not on the money page | tourGuides list has price/compare spokes, not `/planners/motorbike-tour-price` | Add planner link on-page + in WebPage.significantLink |
| Reviews / E-E-A-T | Warning | Confirmed | `reviews: []` on this tour | `src/data/tours.ts` motorbike `reviews: []` | Collect real WhatsApp/TripAdvisor quotes later. Do not invent |
| Images weight | Critical | Confirmed | Three destination JPEGs >500 KB | `moto-ubud.jpg` 623 KB; `moto-east.jpg` 591 KB; `moto-ubud-waterfall.jpg` 563 KB | Compress / serve WebP-AVIF via existing Next optimizer; long-term re-export |
| Image dimensions | Warning | Confirmed | Body images missing width/height | parse.json: hero/gallery/route imgs `width: null` | Hero/gallery use aspect boxes (OK). Prefer Next Image for route photos later |
| Schema types | Pass | Confirmed | TouristTrip+Product, AggregateOffer 450000–800000, no FAQPage/HowTo | 17 JSON-LD blocks; FAQPage=false | Keep Question/Answer. Do not add FAQPage |
| Schema WebPage name | Warning | Confirmed | WebPage.name copies weak seoTitle | Block 6 `name`: Best Price Scooter Tour Bali \| Promo 450K | Follows seoTitle — fix title and this updates |
| Social meta | Pass | Confirmed | OG + Twitter complete, score 92 | social.json | Follows title/description |
| Security / HTTPS | Pass | Confirmed | Headers 100/100 | security_headers.py | Keep |
| Links | Pass | Confirmed | 0 broken / 127 | broken_links.py | Keep |
| Sitemap | Pass | Confirmed | URL + lastmod 2026-10-04 + 3 images | sitemap.xml | Keep |
| llms.txt | Pass | Confirmed | Present, 100/100, motorbike bullets + FAQs | llms_txt_checker + live `/llms.txt` | Keep; optional: add tickets/IDP to the lead bullet |
| AI crawlers | Pass | Confirmed | GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot allowed | robots_checker.py | Keep |
| Readability score | Info | Hypothesis | Flesch 39.1 / 19-sentence “paragraphs” | readability.json concatenates nav + tables | Ignore as a rewrite mandate |
| CWV | Info | Hypothesis | Unknown | pagespeed.py rate-limited twice | Re-run PSI with a key; watch hero JPEG |
| GSC for this URL | Info | Hypothesis | Aug–Sep 2026 export has no motorbike/scooter rows | `gsc-export-2026-08-02_2026-09-02.json` | Request indexing; pull a fresh GSC page report |
| Competitor SERP | Info | Likely | Marketplace Ubud scooter days list ~USD 28–39 / 5–7h; tickets often extra | TouristTube / PowerTraveller listings (2026 fetch) | Differentiate: six published IDR routes, per scooter, IDP/pillion, 550K south shuttle. Do not say cheapest |
| Brand mentions | Info | Hypothesis | No Wikipedia/Reddit/YouTube audit this pass | GEO skill brand table | Earn mentions via real guest content later — no citation spam |

---

## Detailed findings

### [Area] On-page title and meta
Severity: Warning  
Confidence: Confirmed  
Finding: The SERP title optimizes for “best price scooter” instead of the cluster head term “Bali motorbike tour”, and the meta does not mention motorbike or Ubud.  
Evidence: Live title 41 chars; live meta 135 chars; H1 already uses the head term; `activityKeywords.ts` lists `Bali motorbike tour` first.  
Impact: Lower query–title match and weaker CTR on “Bali motorbike tour” / “Bali scooter tour Ubud”. “Best Price” also invites cheap-rental / USD marketplace comparison the page must not win by claiming cheapest.  
Fix: Keyword-first title + 150–160 char meta. Promo 450K stays. Honest frame is “published promo”, not island-wide cheapest.

### [Area] Destination passages
Severity: Warning  
Confidence: Confirmed  
Finding: Each destination H3 is a price + stop list, not a self-contained answer.  
Evidence: Ubud H3 body is two sentences; same pattern for waterfall / Kintamani / South / North / East.  
Impact: Passage indexing and AI Overviews prefer 40–60 word first answers and ~100–200 word blocks. Thin H3s lose citability to the GEO FAQ grid above.  
Fix: Expand each route with definition, stops, tickets extra, ride-or-pillion, and a disambiguation (not ATV / not car / not jeep / not dirt bike).

### [Area] GEO heading
Severity: Warning  
Confidence: Confirmed  
Finding: The SSR H2 reads like an internal GEO label.  
Evidence: `heading: 'Bali scooter tour Ubud — facts AI can cite'` in `activityGeo.ts`; live H2 matches.  
Impact: Users and some AI extractors treat H2 as the section title. “facts AI can cite” wastes the keyword slot and looks non-human.  
Fix: `Bali motorbike tour from Ubud — 2026 facts`.

### [Area] Images
Severity: Critical (weight) / Warning (dimensions)  
Confidence: Confirmed  
Finding: Destination JPEGs are heavy; markdown images lack dimensions.  
Evidence: Filesystem bytes listed above; parse.json width/height null on body photos.  
Impact: LCP/INP unknown, but >500 KB LCP candidates are a common mobile fail.  
Fix: Keep Next optimizer for hero/gallery. Compress the three largest JPEGs in a later binary pass. Do not block copy/title fixes on image re-exports.

### [Area] Schema
Severity: Pass (types) / Warning (WebPage.name)  
Confidence: Confirmed  
Finding: Commercial schema is eligible and honest. FAQPage is correctly absent.  
Evidence: 17 JSON-LD blocks; AggregateOffer 450000–800000; 10 Question nodes; speakable `.motorbike-geo-tldr`.  
Impact: AI/agent parsers can price the six routes. Adding FAQPage would violate the 2026 commercial restriction and would not restore FAQ rich results.  
Fix: Only change WebPage.name by changing seoTitle. Do not add FAQPage or HowTo.

### [Area] E-E-A-T / reviews
Severity: Warning  
Confidence: Confirmed  
Finding: This URL has no first-party reviews.  
Evidence: `reviews: []`. Cooking/Tumang can cite TripAdvisor; this tour cannot.  
Impact: Weaker experience signals vs marketplace listings that show review counts.  
Fix: Collect real guest quotes. Do not add AggregateRating until counts are real.

---

## GEO / AI citation (seo geo)

**GEO readiness:** 90/100

| Platform | Score (directional) | Notes |
| --- | --- | --- |
| Google AI Overviews | 88 | SSR facts + tables + top-of-page definition. Title mismatch can keep the page out of the classic top-10 that AIO still prefers (92% of citations). |
| ChatGPT / OAI-SearchBot | 90 | Allowed in robots; llms.txt + pricing.md + citation snippets with URLs. |
| Perplexity | 88 | Same machine-readable surfaces. Weak Wikipedia/Reddit brand layer (Hypothesis). |

**AI crawler access:** GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Anthropic-AI, PerplexityBot, Google-Extended, Applebot-Extended explicitly allowed.

**llms.txt:** HTTP 200, quality 100/100, `llms-full.txt` present. Motorbike is a lead bullet, a product block, compare rows, and several Q&As.

**SSR:** Tour page is App Router server-rendered. GEO block is not client-only.

**Passage citability:** TL;DR and the ten GEO answers are the citable core. Destination H3s and the “About” intro are the weak passages.

**Speakable:** `.motorbike-geo-tldr`, `.motorbike-geo-answer`, `.activity-geo-tldr`, `.geo-tldr` — all exist on `ActivityGeoBlock`.

**RSL 1.0:** Not implemented (Info). DataCatalog license is CC BY 4.0 on llms surfaces.

**No citation spam:** Do not buy Reddit/YouTube mentions.

---

## Competitor / SERP context (honest)

Public 2026 listings for “Ubud scooter tour” include marketplace days around **USD 28–39** for ~5–7 hours, tickets often extra (TouristTube / PowerTraveller style pages). Cheap “scooter rental” queries are a different product (shop bike, no guide).

Sekar’s Ubud promo **IDR 450,000 per scooter** sits in a similar cash band to some USD listings, but this page must **not** say cheapest or beat every SERP price. Differentiation that is true today:

- Six published IDR routes (Ubud 450K → East 800K), not one mystery “from” price
- Per scooter, not always per person
- Tickets and lunch extra (stated)
- IDP recommended or pillion
- Chosen-area pickup in promo; Canggu / Jimbaran / Nusa Dua shuttle **550K once**
- Explicitly not Sedang ATV, not a private car day, not a dirt-bike enduro

---

## Environment Limitations

- `pagespeed.py` mobile + desktop rate-limited; one retry also rate-limited. CWV = Unknown.
- `article_seo.py` TypeError: unhashable list (`@type` arrays). Schema extracted manually from HTML.
- `generate_report.py` not run (would re-hit PageSpeed and duplicate fetches). No `SEO-REPORT.html`.
- GSC export on disk (2 Aug–2 Sep 2026) has no motorbike/scooter rows — not proof of zero impressions.
- Vercel team MCP 403 this environment; live HTML used via curl instead.
- Readability script concatenates chrome + tables; Flesch is not a content-rewrite order.

---

## C) Prioritized action plan (see ACTION-PLAN.md)

1. Title + meta + OG/Twitter (follow seoTitle)  
2. GEO H2 + thicker route passages + planner link + Promo badge  
3. Compress oversized JPEGs (later binary pass)  
4. Real reviews when they exist  
5. Fresh GSC + PSI with a key  

---

## D) Unknowns and follow-ups

- Field LCP / INP / CLS for this URL  
- GSC queries, impressions, CTR for `/tours/bali-motorbike-traveling-trip`  
- Whether Google has indexed the latest GEO copy  
- Brand mentions on YouTube / Reddit / Wikipedia  
- Image CLS from markdown destination photos on mid-tier Android
