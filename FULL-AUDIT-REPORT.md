# FULL AUDIT REPORT

**URL:** https://www.sekarbaliactivity.com/tours/whitewater-rafting  
**Scope:** Single-page SEO + GEO (AI citation) audit — `seo page` + `seo geo`  
**Date:** 2026-10-04  
**Live HTML fetch:** HTTP 200, 0 redirects, 83 ms (`/tmp/rafting-seo/page.html`)  
**Score confidence:** Medium — Core Web Vitals unknown (PageSpeed Insights rate-limited)  
**This branch:** Title/meta, GEO H2, About H2, hero 2+ price, Product/AggregateOffer + Question nodes, llms lead bullet, pickup-checker link. Image compression and reviews remain follow-ups.

---

## A) Audit Summary

This is Sekar Bali Activity’s **Ayung River whitewater rafting** money page. It is indexable and already has an SSR GEO block, a 2026 price table, and honest copy that refuses the cheap 235K–350K SERP. The page is **not** as GEO-complete as the motorbike money page: JSON-LD is a single `TouristTrip` Offer at **500,000 only** (the bookable **450,000 for 2+** is missing), there are no `Question` nodes, WebPage has no speakable selectors, the title leads with “Best Price”, and GSC (2 Aug–2 Sep 2026) shows **12 impressions / 0 clicks / position 13**.

**Overall rating:** Good — **79/100** (performance excluded)

### Top 3 issues

1. Title / meta / H1 mismatch — title `Best Price Rafting Ubud | 500K · 450K` does not lead with **Ayung River rafting Ubud**. Meta is 126 chars. H1 is already correct.
2. Schema Offer is only IDR 500,000. Agents and rich-result parsers miss the 2+ rate, pickup rule, and GEO Q&A.
3. Hero JPEG `rafting.jpg` is **1.2 MB** (1376×768). Hero price line shows only “From 500,000”.

### Top 3 opportunities

1. Keyword-first title + 150–160 char meta (keep 500K · 450K; do **not** claim cheapest vs IDR 235K–350K shared/resident tickets).
2. `TouristTrip` + `Product` `AggregateOffer` (450,000–500,000) + standalone `Question`/`Answer` (not FAQPage) + speakable CSS.
3. Show **500,000 / 450,000 for 2+ (min 2)** in the hero and add a standalone Ayung bullet to `llms.txt`.

### What we will not do

- Do not claim cheapest / best rafting in Bali vs 235K–350K group tickets or Red Paddle ~180K–325K own-transport listings.
- Do not add FAQPage or HowTo.
- Do not change 500K / 450K for 2+ / min 2 / 400K pickup.
- Do not change ATV, jeep, cycling, swing, or motorbike prices.
- Do not invent reviews.

---

## Page Score Card

```
Overall Score: 79/100   (CWV excluded — Unknown)

On-Page SEO:     74/100  ███████░░░░░
Content Quality: 82/100  ████████░░░░
Technical:       92/100  █████████░░░
Schema:          72/100  ███████░░░░░
Images:          55/100  ██████░░░░░░
GEO / AI:        84/100  ████████░░░░
Performance:     Insufficient data
```

GSC (2 Aug–2 Sep 2026 export): this URL **12 impressions, 0 clicks, avg position 13**. Compare spoke `/blog/rafting-vs-tubing-vs-atv-near-ubud` had 7 impressions at position 8.4.

---

## Scoring notes (rubric)

### On-Page SEO — 74

**Positives:** One H1 with Ayung + whitewater + Ubud. Title unique, 37 chars. Self-canonical + `index,follow`. Question H3s in the GEO block. Slug `whitewater-rafting` matches search language.

**Deficits:** Title leads with “Best Price”. Meta 126 chars. About H2 is generic. Hero price hides 450K for 2+.

### Content Quality — 82

**Positives:** 1,038 words (service minimum 800). Price table, combo vs tubing, schedules, inclusions, FAQs. Honest cheap-listing disclaimer already in GEO FAQ. Flesch 64.4 (standard).

**Deficits:** River H3 was one short paragraph. `reviews: []`. shortDescription was scenery-only.

### Technical — 92

HTTPS, 0 hops, security headers 100/100, AI crawlers allowed, sitemap includes the URL + image, 0 broken / 127 links.

### Schema — 72

**Positives:** JSON-LD TouristTrip with Offer, BreadcrumbList, WebPage, duration PT3H. No FAQPage. No HowTo.

**Deficits:** Not Product. Single Offer 500000. No AggregateOffer. No Question nodes. No speakable.

### Images — 55

Alts present. Hero uses Next/Image fill. File is 1.2 MB (Critical). Width/height missing on live hero attrs.

### GEO / AI — 84

SSR TL;DR + price table + 7 GEO FAQs. llms.txt 100/100 already lists the money page. Lead bullets featured the **combo**, not standalone Ayung. GEO H2 said “facts AI can cite”.

### Performance — Insufficient data

PageSpeed rate-limited. Hypothesis: 1.2 MB JPEG can be the LCP element.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- | --- |
| Title | Warning | Confirmed | Leads with Best Price, not Ayung River rafting | Live title 37 chars. Cluster head: Ayung River rafting Ubud | `Ayung River Rafting Ubud \| 500K · 450K` |
| Meta | Warning | Confirmed | 126 chars; weak head-term lead | parse.json | 150–160 chars starting with Ayung River rafting near Ubud |
| Hero price | Warning | Confirmed | Only From 500,000 | page.tsx fallback | 500,000 / person · 450,000 for 2+ (min 2) |
| GEO H2 | Warning | Confirmed | “facts AI can cite” | Live H2 | Ayung River rafting near Ubud — 2026 facts |
| About H2 | Warning | Confirmed | Generic About This Experience | Live H2 | About Ayung River rafting near Ubud |
| Schema Offer | Warning | Confirmed | Single 500000 Offer; no 2+; no Product | JSON-LD block 4 | AggregateOffer 450000–500000 + pickup Offer |
| Schema Q&A | Warning | Confirmed | No Question nodes | 7 JSON-LD blocks; FAQPage=false | Standalone Question/Answer from GEO FAQs |
| Image weight | Critical | Confirmed | Hero 1.2 MB | rafting.jpg 1,202,566 B | Compress later; Next already optimizes delivery |
| Reviews | Warning | Confirmed | `reviews: []` | tours.ts | Real quotes later |
| Canonical | Pass | Confirmed | 200, index, self-canonical | parse + redirect | Keep |
| Links | Pass | Confirmed | 0 broken | broken_links.py | Keep |
| llms.txt | Pass | Confirmed | Present; standalone lead bullet missing | GEO_LEAD_BULLETS | Add Ayung River rafting row |
| CWV | Info | Hypothesis | Unknown | pagespeed rate limit | PSI with a key |
| Competitor SERP | Info | Likely | Cheap Ayung tickets 180K–350K; mid-band 370K–550K | balitobali / bali-water-sport / bali-river-rafting / Red Paddle | Differentiate lunch + WhatsApp + min 2. Do not say cheapest |
| GSC | Info | Confirmed | 12 impressions, 0 clicks, pos 13 | gsc-export Aug–Sep 2026 | Title/meta CTR test after deploy |

---

## Detailed findings

### [Area] On-page title and meta
Severity: Warning  
Confidence: Confirmed  
Finding: The SERP title optimizes for “best price rafting” while the H1 and cluster head term are Ayung River rafting Ubud.  
Evidence: Live title; GSC 0 CTR at position 13.  
Impact: Query–title mismatch and zero clicks on the thin impression set. “Best Price” invites 235K listings this product must not undercut.  
Fix: Keyword-first title. Keep published 500K · 450K. Honest frame is published rate, not island cheapest.

### [Area] Schema
Severity: Warning  
Confidence: Confirmed  
Finding: Parsers only see 500,000.  
Evidence: Offer.price 500000; no Product; no Question.  
Impact: AI agents quoting “how much is rafting in Ubud” can miss the 2+ rate and pickup rule.  
Fix: AggregateOffer + Question/Answer. Do not add FAQPage.

### [Area] Images
Severity: Critical  
Confidence: Confirmed  
Finding: 1.2 MB JPEG.  
Evidence: Filesystem bytes.  
Impact: Likely LCP weight on mobile (CWV unmeasured).  
Fix: Re-export later. Do not block copy/schema on a binary pass.

---

## GEO / AI citation

**GEO readiness:** 84/100 (live) · higher after this PR’s Question nodes + speakable + llms bullet.

| Platform | Score | Notes |
| --- | --- | --- |
| Google AI Overviews | 80 | Definition-first GEO block exists. Title mismatch + position 13 weaken AIO odds. |
| ChatGPT / OAI-SearchBot | 86 | Allowed; llms + pricing.md already list 500K / 450K for 2+. |
| Perplexity | 82 | Extractable Q&A on-page; no FAQPage (correct). |

**SSR:** App Router. ActivityGeoBlock is server-rendered.  
**Speakable (this PR):** `.rafting-geo-tldr`, `.rafting-geo-answer`, `.activity-geo-tldr`, `.geo-tldr`.  
**No citation spam.**

---

## Competitor / SERP context (honest)

2026 public Ayung listings include **IDR 235,000–300,000** group/own-transport tickets (balitobali / bali-water-sport), **~IDR 180,000–325,000** Red Paddle own-transport / with-transport tables, and mid operators around **IDR 370,000–550,000**. Ubudcenter’s 2026 guide cites Ayung **450K–550K**.

Sekar publishes **IDR 500,000**, or **IDR 450,000 for 2+ (min 2)**, lunch and gear in, pickup **400,000** or self-meet. That sits in the mid published band. This page must **not** say cheapest. Differentiation that is true: WhatsApp booking, lunch included, min 2, explicit vs tubing / ATV combo, and a written refusal to match shared/resident tickets.

---

## Environment Limitations

- PageSpeed rate-limited (no retry loop).
- `article_seo.py` skipped (`@type` array crash known).
- `generate_report.py` not run.
- Vercel team MCP 403; live HTML via curl.
- GSC export is one month (Aug–Sep 2026), not a live API.

---

## C) Prioritized action plan

See `ACTION-PLAN.md`. Quick wins are implemented on `cursor/rafting-seo-geo-audit-c8fa`.

---

## D) Unknowns and follow-ups

- Field LCP / INP / CLS  
- Fresh GSC queries after the title change  
- Real guest reviews  
- Compress `rafting.jpg`
