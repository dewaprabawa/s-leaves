# SEO Audit Report — Luwak Coffee Plantation (Umah Kuno)

**Scope:** Single-page audit (`single-page`)  
**URL:** https://www.sekarbaliactivity.com/tours/luwak-coffee-plantation  
**Date:** 2026-09-09  
**Score confidence:** Medium (CWV unavailable — PageSpeed API rate-limited)

## A) Audit Summary

| | |
|---|---|
| **Overall** | **62/100 — Needs Improvement** (live). ~78/100 after PR #90 deploy + duration/schema fixes |
| **Rating band** | Needs Improvement (50–69) |

### Page Score Card (live production)

```
Overall Score: 62/100

On-Page SEO:     58/100  ██████░░░░
Content Quality: 78/100  ████████░░
Technical:       88/100  █████████░
Schema:          55/100  ██████░░░░
Images:          52/100  █████░░░░░
AI Search (GEO): 60/100  ██████░░░░
Performance:     n/a     (PSI rate-limited)
```

### Top 3 issues
1. **Stale price IDR 400,000** in UI + `TouristTrip` `Offer` schema (business rate is **IDR 800,000**; PR #90 not live yet).
2. **Wrong ISO duration `PT5H`** for a **1.5-hour** experience (`durationToIso` matches `.5 Hours` as `5`).
3. **Hero/OG image ~557KB** JPEG (`/coffee.jpg`) without explicit dimensions — LCP/CLS risk.

### Top 3 opportunities
1. Deploy priced `seoTitle` / `seoDescription` (already on PR #90): include **IDR 800K**, ethical Luwak, Ubud/Umah Kuno.
2. Add **page-scoped `WebPage` schema** for Luwak (jeep/cooking already have this pattern).
3. Ensure **`pricing.md` / `llms.txt`** list Luwak at **IDR 800,000** (branch GEO_PRICING already does; production still says generic “coffee tasting”).

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Pricing / On-page | Critical | Confirmed | Live price still **IDR 400,000** in UI and schema | Visible “From IDR 400.000”; JSON-LD `offers.price: 400000`; RSC `basePrice:400000` | Merge/deploy [PR #90](https://github.com/dewaprabawa/s-leaves/pull/90) |
| Schema | Warning | Confirmed | `TouristTrip.duration` is **PT5H** vs content **1.5 Hours** | Live schema `duration: "PT5H"`; `durationToIso("1.5 Hours")` matches `5` via `/(\d+)\s*Hours?/i` | Parse decimals → `PT1H30M` |
| Schema | Warning | Confirmed | Homepage `WebPage` (`#webpage`) injected on tour URL | `WebPage.url` = site root; name = homepage title | Add Luwak page `WebPage` like jeep/cooking builders |
| On-page | Warning | Confirmed | Title **68 chars**, no price; meta **129 chars**, no price/Ubud/ethical | Title: `Luwak Coffee Plantation Experience (Umah Kuno) \| Sekar Bali Activity`; meta omits IDR | Use PR #90 `seoTitle` / `seoDescription` |
| Images | Warning | Confirmed | Hero/OG `coffee.jpg` ≈ **557KB** | `content-length: 557287`; hero `width`/`height` null (fill) | Compress &lt;200KB WebP/AVIF; set OG w/h 1200×630 |
| Content / Trust | Warning | Confirmed | Placeholder YouTube ID `dQw4w9WgXcQ` in tour data | `tours.ts` `youtubeVideoId: "dQw4w9WgXcQ" // Placeholder` | Remove or replace; embed not currently rendered on tour page |
| GEO | Warning | Confirmed | Live `llms.txt` / `pricing.md` lack priced Luwak line | `llms.txt` “coffee tasting” only; `pricing.md` has no Luwak row on live | Deploy GEO_PRICING Luwak row (800k) from PR #90 |
| Schema / topical | Info | Confirmed | 8 sitewide GEO `Question` nodes (ATV-heavy) on coffee URL | e.g. `#geo-qa-1` “best Bali ATV tour” on Luwak HTML | Scope Q&A by page; **do not** add commercial `FAQPage` for rich results |
| Social | Info | Confirmed | OG/Twitter mostly OK (77/100); no `og:locale` / image dimensions | `social_meta.py` score 77 | Add dimensions; sync OG copy after price deploy |
| Technical | Pass | Confirmed | Indexable, canonical, HTTPS, security headers, sitemap, AI bots allowed, 0 broken links | `index,follow`; canonical www; security 100/100; sitemap loc present; apex→www 308 | Maintain |
| Content | Pass | Confirmed | Solid unique copy, H1–H3 hierarchy, ethical E-E-A-T angle, related internal links | ~756–924 words; Flesch 50.8; 56 internal / 6 external; guides to ethical Luwak blogs | Keep min-3 + transport-not-included consistent post-deploy |
| Performance | Info | Hypothesis | CWV unknown | PSI: “Rate limited by Google API” | Re-run PSI with key; treat hero as LCP candidate |

---

## C) Evidence notes (scripts)

| Check | Result |
|-------|--------|
| `fetch_page.py` | HTTP 200 (apex redirects to www) |
| `parse_html.py` | Title/meta/H1/schema/images extracted |
| `readability.py` | 756 words, Flesch 50.8, grade 10.6 |
| `social_meta.py` | 77/100 |
| `robots_checker.py` | AI crawlers explicitly allowed; sitemap declared |
| `llms_txt_checker.py` | `llms.txt` + `llms-full.txt` present (quality 100) |
| `security_headers.py` | 100/100 |
| `broken_links.py` | 0 broken / 36 checked |
| `redirect_checker.py` | www final 200; apex 308→www |
| `pagespeed.py` | **Failed** — API rate limit (environment limitation) |
| `article_seo.py` | **Failed** — script bug (`DEPRECATED_SCHEMA` list unhashable) |
| `finding_verifier.py` | **Failed** — schema mismatch on findings wrapper |

**Schema present (live):** `TravelAgency`/`LocalBusiness`, `WebSite`, `WebPage` (homepage-scoped), `TouristTrip`+`Offer`, `BreadcrumbList`, `ItemList`, `DataCatalog`, multiple `Question`.

**Do not recommend:** `FAQPage` (restricted; FAQ rich results retired) or `HowTo` (deprecated).

---

## D) Unknowns and follow-ups

- Mobile LCP / INP / CLS field or lab data (PSI blocked).
- Whether Search Console shows rich-result warnings for `PT5H` / offer price mismatch.
- Confirm post-deploy that Googlebot/AI caches refresh for `llms.txt` and `pricing.md`.

---

## E) Branch vs live

| Signal | Live (2026-09-09) | Branch `cursor/luwak-coffee-price-800k-e817` |
|--------|-------------------|-----------------------------------------------|
| `basePrice` / Offer | 400000 | **800000** |
| `seoTitle` | Falls back to long title | `Luwak Coffee Plantation Umah Kuno \| IDR 800K` |
| Body / FAQ price | 400k UI | 800k copy + FAQ |
| GEO / FAQ / primary pages | Generic coffee tasting | Explicit Umah Kuno **IDR 800,000** |
| `duration` ISO | Still wrong until code fix | Still wrong until `durationToIso` fix |
