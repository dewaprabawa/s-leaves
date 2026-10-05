# FULL AUDIT REPORT

**URL:** https://www.sekarbaliactivity.com/tours/griya-beji-waterfall  
**Scope:** Single-page SEO + GEO (AI citation) audit — `seo page` + `seo geo`  
**Date:** 2026-10-05  
**Live HTML fetch:** HTTP 200, 0 redirects, 71 ms (`/tmp/griya-seo/page.html`)  
**Score confidence:** Medium — Core Web Vitals unknown (PageSpeed Insights rate-limited)  
**This branch:** Title/meta, GEO H2, About H2, hero 3 SKUs, Product/AggregateOffer + Question nodes, llms lead bullet, pickup-checker link.

---

## A) Audit Summary

This is Sekar Bali Activity’s **Griya Beji Waterfall** money page (Taman Beji Griya, Desa Punggul). It is indexable and already has an SSR GEO block, a 2026 park-menu table, and honest copy that refuses **Tirta Empul / Pura Beji**. The page is weaker than the rafting and motorbike money pages: JSON-LD is a single `TouristTrip` Offer at **300,000 only** (palm **1,000,000** and healing **1,500,000** are missing), there are no `Question` nodes, WebPage has no speakable selectors, the title omits **Ubud**, the About H2 is generic, and GSC (2 Aug–2 Sep 2026) has **no rows** for this URL.

**Overall rating:** Good — **78/100** (performance excluded)

### Top 3 issues

1. Title / meta / H1 mismatch — title `Griya Beji Waterfall Melukat | From 300K` (40) omits **Ubud**. Meta is 129 chars. H1 is already correct.
2. Schema Offer is only IDR 300,000. Agents miss palm, healing, gate admission, and pickup. `touristType` is “Adventure seekers”.
3. Hero shows only “From 300,000”. GEO H2 says “facts AI can cite”. No standalone Griya lead bullet in `llms.txt`.

### Top 3 opportunities

1. Keyword-first title with Ubud + 150–160 char meta (keep From 300K; name palm 1M / healing 1.5M in the snippet).
2. `TouristTrip` + `Product` `AggregateOffer` (300,000–1,500,000) + standalone `Question`/`Answer` (not FAQPage) + speakable CSS.
3. Show **300K melukat · 1M palm · 1.5M healing** in the hero and add a Griya `llms.txt` lead bullet.

### What we will not do

- Do not claim cheapest / best purification in Bali vs Travely packages (460K–970K with lunch/car) or unverified 100K–200K “entry + ritual” listings.
- Do not add FAQPage or HowTo.
- Do not change 300K / 1M / 1.5M / 50K intl admission / 20K domestic / 400K pickup.
- Do not publish life therapy / chakra SKUs we do not book.
- Do not change ATV, jeep, cycling, swing, motorbike, or rafting prices.
- Do not invent reviews.

---

## Page Score Card

```
Overall Score: 78/100   (CWV excluded — Unknown)

On-Page SEO:     76/100  ███████░░░░░
Content Quality: 84/100  ████████░░░░
Technical:       93/100  █████████░░░
Schema:          70/100  ███████░░░░░
Images:          72/100  ███████░░░░░
GEO / AI:        82/100  ████████░░░░
Performance:     Insufficient data
```

GSC (2 Aug–2 Sep 2026 export): **no rows** for this URL or Griya / Punggul queries.

---

## Scoring notes (rubric)

### On-Page SEO — 76

**Positives:** One H1 with Griya Beji + Waterfall + Purification + Ubud. Title unique, 40 chars. Self-canonical + `index,follow`. Question H3s in the GEO block. Slug `griya-beji-waterfall` matches search language.

**Deficits:** Title omits Ubud. Meta 129 chars. About H2 is generic. Hero hides 1M / 1.5M.

### Content Quality — 84

**Positives:** 1,068 words (service minimum 800). Park-menu table, vs Tirta Empul, pickup, etiquette, FAQs. Honest “not Tirta Empul” already in GEO FAQ. Flesch 50.8 (ritual vocabulary).

**Deficits:** `reviews: []`. Pickup-checker not linked from the money page.

### Technical — 93

HTTPS, 0 hops, security headers 100/100, AI crawlers allowed, sitemap includes the URL + 3 images, 0 broken / 128 links (4 login/WhatsApp redirects).

### Schema — 70

**Positives:** JSON-LD TouristTrip with Offer, BreadcrumbList, WebPage. No FAQPage. No HowTo.

**Deficits:** Not Product. Single Offer 300000. No AggregateOffer. No Question nodes. No speakable. touristType Adventure seekers.

### Images — 72

Alts present. Hero uses Next/Image fill. Files 176–207 KB (Warning, not Critical). Width/height missing on live hero attrs.

### GEO / AI — 82

SSR TL;DR + price table + 7 GEO FAQs. llms.txt 100/100 already lists the money page in the catalog. Lead bullets omitted standalone Griya. GEO H2 said “facts AI can cite”.

### Performance — Insufficient data

PageSpeed rate-limited.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- | --- |
| Title | Warning | Confirmed | Omits Ubud; leads with Melukat + From 300K | Live title 40 chars. Cluster head: Griya Beji Waterfall + waterfall purification Ubud | `Griya Beji Waterfall Ubud \| From 300K` |
| Meta | Warning | Confirmed | 129 chars; weak pickup / gate | parse.json | 150–160 chars starting with Griya Beji waterfall purification near Ubud |
| Hero price | Warning | Confirmed | Only From 300,000 | page.tsx fallback | 300K melukat · 1M palm · 1.5M healing |
| GEO H2 | Warning | Confirmed | “facts AI can cite” | Live H2 | Griya Beji Waterfall near Ubud — 2026 facts |
| About H2 | Warning | Confirmed | Generic About This Experience | Live H2 | About Griya Beji Waterfall near Ubud |
| Schema Offer | Warning | Confirmed | Single 300000 Offer; no Product | JSON-LD block 5 | AggregateOffer 300000–1500000 + admission + pickup |
| Schema Q&A | Warning | Confirmed | No Question nodes | 7 JSON-LD blocks; FAQPage=false | Standalone Question/Answer from GEO FAQs |
| touristType | Warning | Confirmed | Adventure seekers | TouristTrip | Spiritual / culture travelers |
| llms.txt | Warning | Confirmed | Catalog lists page; lead bullet missing | GEO_LEAD_BULLETS | Add Griya Beji Waterfall row |
| Reviews | Warning | Confirmed | `reviews: []` | tours.ts | Real quotes later |
| Canonical | Pass | Confirmed | 200, index, self-canonical | parse + redirect | Keep |
| Links | Pass | Confirmed | 0 broken | broken_links.py 128/0 | Keep |
| Images | Pass | Confirmed | 176–207 KB with alts | filesystem | Optional later compress |
| CWV | Info | Hypothesis | Unknown | pagespeed rate limit | PSI with a key |
| Competitor SERP | Info | Likely | Park menu matches detik/heybali 20K/50K + 300K/1M/1.5M. Travely packages 460K–970K include car+lunch. Some blogs list 100K entry. | detik, heybali, travely, balitouristic | Publish park menu. Do not say cheapest. Do not invent chakra SKUs. |
| GSC | Info | Confirmed | No rows Aug–Sep 2026 | gsc-export | Title/meta + request indexing after deploy |

---

## Detailed findings

### [Area] On-page title and meta
Severity: Warning  
Confidence: Confirmed  
Finding: The SERP title names Melukat but not Ubud, while the H1 and cluster head include waterfall purification Ubud.  
Evidence: Live title 40 chars; meta 129 chars; GSC empty for this URL.  
Impact: Query–title mismatch on “waterfall purification Ubud” / “Griya Beji Ubud”.  
Fix: Keyword-first title with Ubud. Keep From 300K. Name palm, healing, gate, pickup, and not-Tirta in the meta.

### [Area] Schema
Severity: Warning  
Confidence: Confirmed  
Finding: Parsers only see 300,000.  
Evidence: Offer.price 300000; no Product; no Question.  
Impact: AI agents quoting palm reading or mental healing can miss the published 1M / 1.5M and the 400K pickup rule.  
Fix: AggregateOffer + Question/Answer. Do not add FAQPage.

### [Area] Images
Severity: Info  
Confidence: Confirmed  
Finding: Hero 176 KB; gallery 188–207 KB.  
Evidence: Filesystem bytes.  
Impact: Under the 500 KB critical threshold. Next already serves `_next/image`.  
Fix: Optional later compress. Do not block copy/schema.

---

## GEO / AI citation

**GEO readiness:** 82/100 (live) · higher after this PR’s Question nodes + speakable + llms bullet.

| Platform | Score | Notes |
| --- | --- | --- |
| Google AI Overviews | 78 | Definition-first GEO block exists. Title missing Ubud + zero GSC weaken AIO odds. |
| ChatGPT / OAI-SearchBot | 84 | Allowed; llms + pricing.md already list 300K / 1M / 1.5M. Lead bullet missing. |
| Perplexity | 80 | Extractable Q&A on-page; no FAQPage (correct). |

**SSR:** App Router. ActivityGeoBlock is server-rendered.  
**Speakable (this PR):** `.griya-geo-tldr`, `.griya-geo-answer`, `.activity-geo-tldr`, `.geo-tldr`.  
**No citation spam.**

---

## Competitor / SERP context (honest)

2026 public park-menu reporting (detik.com, heybali.info) matches what we publish: **IDR 20,000** domestic / **50,000** international admission, **melukat 300,000**, **palm reading 1,000,000**, **healing 1,500,000**. Some blogs list other therapies (life / chakra) at 1.5M — we do **not** invent those SKUs. Travely-style half-day packages **IDR 460,000–970,000** bundle car + lunch + ritual — a different product. A few English guides still quote **100,000** basic entry. Sekar publishes the park board plus **pickup 400,000 or self-meet**. This page must **not** say cheapest.

---

## Environment Limitations

- PageSpeed rate-limited (no retry loop).
- `article_seo.py` skipped (`@type` array crash known).
- `generate_report.py` not run.
- Vercel team MCP 403; live HTML via curl.
- GSC export is one month (Aug–Sep 2026), not a live API. No Griya rows.

---

## C) Prioritized action plan

See `ACTION-PLAN.md`. Quick wins are implemented on `cursor/griya-beji-seo-geo-audit-c8fa`.

---

## D) Unknowns and follow-ups

- Field LCP / INP / CLS  
- Fresh GSC queries after the title change  
- Real guest reviews  
- Optional image recompress
