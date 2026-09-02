# SEO Full Audit Report — sekarbaliactivity.com

**Audit date:** 2026-09-01  
**URL:** https://www.sekarbaliactivity.com  
**Business type:** Local adventure tour operator (Ubud / Pejeng, Bali)  
**Confidence:** Confirmed (script-backed) where noted; Hypothesis where environment limited

---

## Executive Summary

| Category | Score | Rating |
|----------|-------|--------|
| Technical SEO | 88/100 | Good |
| On-Page SEO | 82/100 | Good |
| Content Quality | 78/100 | Good |
| Schema / Structured Data | 85/100 | Good |
| Internal Linking | 65/100 | Needs Improvement |
| AI Search Readiness (GEO) | 95/100 | Excellent |
| Performance (CWV) | — | Not measured (API rate limit) |
| **Overall (excl. CWV)** | **82/100** | **Good** |

Sekar Bali Activity has a solid technical foundation: indexable pages, clean robots.txt, strong llms.txt (100/100), complete Open Graph tags, and dedicated tour detail pages. The main gaps are **orphan blog posts** (only linked from `/blog` index), **limited cross-linking between commercial guides and tour pages**, and **missing Twitter handle meta tags**. Core Web Vitals could not be verified due to Google PageSpeed API rate limiting in this environment.

---

## Environment Limitations

| Check | Status |
|-------|--------|
| PageSpeed Insights (mobile) | Failed — Google API rate limited |
| Core Web Vitals (LCP, INP, CLS) | Not measured — confidence: Hypothesis only |
| Full-site crawl (depth >1) | Partial — depth-1 crawl only (14 pages) |

---

## Technical SEO

### robots.txt — ✅ Pass (Confirmed)

- HTTP 200, sitemap declared: `https://www.sekarbaliactivity.com/sitemap.xml`
- AI crawlers explicitly allowed: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, FacebookBot, Amazonbot
- ⚠️ `anthropic-ai` inherits wildcard rules (not explicitly named) — low impact

### Sitemap — ✅ Pass (Confirmed)

- `/sitemap.xml` returns static routes including homepage, blog posts, tour pages, and geo pages
- New tour pages (`/tours/*`) and blog posts included via `BLOG_POSTS` and `getAllTourSlugs()`

### Indexability — ✅ Pass (Confirmed)

- Homepage: `meta robots: index, follow`
- Canonical: `https://www.sekarbaliactivity.com`
- `lang="en"`, viewport set, UTF-8 charset

### URL Structure — ✅ Pass

- Clean slugs: `/tours/bali-atv-adventure`, `/blog/bali-atv-tour-ubud-guide`
- No mixed HTTP/HTTPS issues observed on homepage fetch

---

## On-Page SEO

### Homepage — ✅ Pass (Confirmed)

| Element | Value | Severity |
|---------|-------|----------|
| Title | Sekar Bali Activity \| Private ATV, River Tubing & Village Cycling Tours Ubud | ✅ |
| Meta description | 230 chars — includes pricing, activities, WhatsApp CTA | ✅ |
| H1 | Private Bali ATV & Ubud Adventures | ✅ |
| H2 structure | Adventures, Pricing, Guides, FAQ sections | ✅ |

### Social Meta — ⚠️ Warning (85/100)

| Tag | Status |
|-----|--------|
| og:title, og:description, og:image, og:url, og:type | ✅ All present |
| twitter:card, twitter:title, twitter:description, twitter:image | ✅ Present |
| twitter:site | ℹ️ Missing (optional) |
| twitter:creator | ℹ️ Missing (optional) |

**Fix:** Add `twitter:site` (e.g. `@sekarbaliactivity`) in root layout metadata.

---

## Schema / Structured Data

### Confirmed on site

- Organization / LocalBusiness / TravelAgency JSON-LD on homepage
- Product / Offer ItemList for adventure packages
- Tour pages: TouristTrip-style structured data with BreadcrumbList
- Blog posts: BlogPosting with author and datePublished

### Restrictions applied (per Google policy)

- ❌ Do not add FAQPage schema — restricted for commercial sites
- ❌ Do not add HowTo schema — deprecated for rich results

---

## Content Quality & E-E-A-T

### Strengths

- Transparent IDR pricing on homepage and tour pages
- Location specificity: Pejeng, All New Bali Adventure ATV arena
- WhatsApp booking flow with clear inclusions (gear, lunch, insurance)
- Blog guides answer commercial intent queries (ATV prices, tubing combo, booking steps)
- `llms.txt` and `llms-full.txt` for AI citation readiness

### Gaps

- 18 blog posts are **orphan pages** (≤1 internal link) — only reachable from `/blog` index
- Older articles still link to `/#adventures` instead of `/tours/*` detail pages
- Limited author/team bios on blog posts (author name only, no profile page)

**Confidence:** Confirmed for orphan count via `internal_links.py`; Likely for E-E-A-T author gap based on page structure review.

---

## Internal Linking

### Crawl stats (depth 1, max 30 pages)

- Pages crawled: 14
- Unique pages found: 31
- Total internal links: 87
- Avg links per page: 7.2

### Issues

| Finding | Evidence | Impact | Confidence |
|---------|----------|--------|------------|
| 18 orphan blog posts | Only 1 incoming link each (from `/blog`) | Lower PageRank flow, slower discovery | Confirmed |
| Tour pages under-linked from blog | Many `/#adventures` anchors remain | Missed commercial link equity | Confirmed |
| Homepage travel guides section | 6 commercial guides linked | ✅ Good hub for new articles | Confirmed |

### Fixes implemented in this PR

- 4 new sales-focused articles with links to `/tours/*` and each other
- Updated cycling and ATV/tubing links in existing posts
- Homepage `travelGuides` section points to new commercial guides
- `geoContent.ts` updated with tour page URLs and new article list

---

## AI Search Readiness (GEO)

### llms.txt — ✅ Excellent (100/100)

- Title, description, 7 sections, 11 links
- `llms-full.txt` present
- Pricing table and FAQ snippets for AI assistants

### Recommendations

- Keep `GEO_UPDATED` date current when pricing or policies change
- Add new commercial articles to `GEO_ARTICLES` after each publish (done in this PR)

---

## Performance (Core Web Vitals)

**Status:** Not measured — PageSpeed API rate limited during audit.

**Hypothesis:** Next.js static generation and image optimization (`/_next/image`) suggest acceptable performance, but LCP/INP/CLS should be verified in Google Search Console or with a PageSpeed API key.

---

## Image Optimization

- Hero and adventure images use descriptive alt text (Confirmed on homepage parse)
- OG image: `/images/adventures/og-cover.jpg` (1200×630 referenced in seo.ts)
- Lazy loading on below-fold adventure cards

---

## Priority Findings Summary

| # | Finding | Severity | Confidence |
|---|---------|----------|------------|
| 1 | 18 orphan blog posts with weak internal links | ⚠️ Warning | Confirmed |
| 2 | Commercial blog posts should link to `/tours/*` not `/#adventures` | ⚠️ Warning | Confirmed |
| 3 | Missing `twitter:site` meta tag | ℹ️ Info | Confirmed |
| 4 | CWV not verified (API limit) | ℹ️ Info | Environment |
| 5 | No dedicated author pages for E-E-A-T | ℹ️ Info | Likely |

---

## Artifacts Generated

- `FULL-AUDIT-REPORT.md` (this file)
- `ACTION-PLAN.md`
- Script evidence: robots_checker, llms_txt_checker, internal_links, social_meta, parse_html
