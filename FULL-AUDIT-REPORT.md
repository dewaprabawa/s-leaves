# SEO / GEO Audit — sekarbaliactivity.com

- **Target:** https://www.sekarbaliactivity.com/
- **Date:** 2026-09-27
- **Type:** Technical SEO + GEO (AI search) audit, script-backed evidence
- **Overall score:** ~88 / 100 — **Good** (GEO is Excellent)

## Scorecard

| Category (weight) | Score | Evidence |
| --- | --- | --- |
| Technical SEO (25%) | 88 | robots.txt 200 + sitemap; HTTPS; canonical; security 100/100 |
| Content Quality (20%) | 85 | Strong local first-party E-E-A-T; very long homepage (~12,171 words) |
| On-Page SEO (15%) | 90 | Title 46 chars; meta 146 chars; single H1; canonical present |
| Schema / Structured Data (15%) | 95 | Org[TravelAgency,LocalBusiness], WebSite, Product×8, Offer×8, QAPage Question×8, TouristTrip, Breadcrumb, GeoCoordinates, DataCatalog |
| Performance / CWV (10%) | N/A* | PageSpeed API rate-limited (no key) — not measured this run |
| Image Optimization (10%) | 88 | next/image (AVIF/WebP), immutable caching, alt text on tour images |
| AI Search Readiness / GEO (5%) | 98 | llms.txt + llms-full.txt 100/100; pricing.md; DataCatalog schema; AI crawlers allowed |

\* Core Web Vitals could not be measured in this environment (see Environment Limitations).

## What's working well (Pass ✅)

- **AI crawler policy** — robots.txt explicitly allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, and more; sitemap declared. (`robots_checker.py`)
- **GEO files** — `/llms.txt` (14 sections, 103 links, **100/100**) and `/llms-full.txt` both present; `/pricing.md` machine-readable. Best-in-class AI-search readiness. (`llms_txt_checker.py`)
- **Security headers — 100/100** — HSTS (preload), CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. (`security_headers.py`)
- **Social meta — 100/100** — full Open Graph (7/7) + Twitter Card (6/6) with `summary_large_image`. (`social_meta.py`)
- **Structured data** — Organization typed `["TravelAgency","LocalBusiness"]` with PostalAddress, GeoCoordinates, OpeningHoursSpecification, ContactPoint; WebSite; per-tour `TouristTrip` + `Offer` + `BreadcrumbList`; homepage `Product`/`Offer`/`ItemList`; 8× `Question`/`Answer` (QAPage-style) and `SpeakableSpecification` for AI answers; `DataCatalog`/`Dataset` pointing at the llms/pricing files.
- **Compliant tactics** — Correctly uses QAPage `Question`/`Answer` (not `FAQPage`) and no `HowTo` — aligned with current Google rich-result reality.
- **On-page basics** — Title 46 chars, meta description 146 chars, one H1, self-referencing canonical, HTTPS, mobile-responsive.
- **Sitemap** — 3 sitemaps, **121 URLs**, referenced from robots.txt.
- **New Bali Motorbike Traveling Trip is live and fully optimized** — `/tours/bali-motorbike-traveling-trip` returns 200, title `Bali Motorbike Traveling Trip | From IDR 450K`, good meta, `TouristTrip`+`Offer`+`Breadcrumb` schema, self-canonical, and **present in the sitemap**.

## Findings & opportunities

### ⚠️ 1. Core Web Vitals not verified (Hypothesis)
- **Evidence:** `pagespeed.py` was rate-limited by the Google PageSpeed API (no API key), so LCP/INP/CLS were not captured this run. The homepage is content-heavy (~12,171 words + many JSON-LD blocks).
- **Impact:** CWV is a ranking signal (mobile-first). A heavy homepage can hurt mobile LCP/INP.
- **Fix:** Add a `PAGESPEED_API_KEY` (or check Google Search Console → Core Web Vitals / CrUX) and measure mobile LCP, INP, CLS. Confirm the hero image is `priority`/preloaded (it is in code) and that the large JSON-LD/DOM isn't delaying interactivity.

### ⚠️ 2. Homepage H1 accessible text has no space after the comma (Low)
- **Evidence:** H1 renders as `Your Bali day,booked clear` in the accessible/plain-text extraction (a `<br>`/markup break sits right after the comma).
- **Impact:** Minor — assistive tech and text extractors read "day,booked". No ranking impact, small polish.
- **Fix:** Ensure a space (or restructure) so it reads "Your Bali day, booked clear."

### ℹ️ 3. Very long homepage (~12,171 words) (Info)
- **Evidence:** `parse_html.py` word_count = 12,171.
- **Impact:** Great for GEO/topical depth, but watch mobile weight and keep the primary WhatsApp/booking CTA prominent above the fold.
- **Fix:** Monitor CWV (see #1); no change required if metrics are green.

### ℹ️ 4. Sitemap index probes 404 (False positive — no action)
- **Evidence:** `sitemap_checker.py` flagged `/sitemap_index.xml` and `/sitemap-index.xml` as 404. These are just alternate-name probes; the real `/sitemap.xml` (121 URLs) is valid and declared in robots.txt.
- **Fix:** None needed. If the URL count grows large, consider a formal sitemap index.

### 💡 5. Consider first-party review/rating schema (Opportunity, only if genuine)
- **Evidence:** Product/TouristTrip offers do not expose `aggregateRating`/`review`.
- **Impact:** Real, first-party ratings can earn richer results and reinforce E-E-A-T.
- **Fix:** If you collect genuine guest reviews, add `Review`/`aggregateRating` to the relevant `Product`/`TouristTrip`. Never fabricate ratings.

## Environment Limitations

- **Core Web Vitals:** Google PageSpeed Insights API returned rate-limit errors (no API key available in this run). CWV is therefore reported as *not measured* (Hypothesis), not as a confirmed issue. Re-run `pagespeed.py` with an API key or use Search Console CrUX data.

## Evidence sources

Scripts from `.cursor/skills/seo/scripts/` run against the live site: `robots_checker.py`, `llms_txt_checker.py`, `security_headers.py`, `social_meta.py`, `sitemap_checker.py`, `fetch_page.py`, `parse_html.py`; plus direct JSON-LD extraction and live HTTP status checks for `/tours/bali-motorbike-traveling-trip` and `/experiences`.
