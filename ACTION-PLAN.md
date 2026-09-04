# SEO Action Plan — sekarbaliactivity.com

**Date:** 2026-09-04 (Google Search focus — cycling)  
**Prior:** 2026-09-04 GEO follow-up; 2026-09-03 SEOmator remediation  
**Overall priority:** **Google classic SEO (cycling money page)** → local/GBP → GEO consistency

---

## Priority 0 — Cycling Google Search 2026 (this pass)

| Action | Google 2026 rationale | Status |
|--------|----------------------|--------|
| Correct cycling inclusions to **lunch only** | Avoid SERP/snippet & trust conflicts | ✅ |
| Add `seoTitle` / `seoDescription` on cycling tour | Title ≤60 / meta ≤160; P0 rice paddy + Pejeng | ✅ |
| Use SERP fields in `generateMetadata` | Stop truncating long `shortDescription` in snippets | ✅ |
| Strengthen H2s, highlights, image alts | Mid-tail countryside / Pejeng / lunch CTR | ✅ |
| Enrich `TouristTrip` Offer with inclusions | Clear commercial entity for Search | ✅ |
| Publish `CYCLING-GOOGLE-SEO-2026.md` | Execution plan + keyword map | ✅ |
| Refocus `SEO-STRATEGY.md` on Google-first cycling | Strategy matches Search KPIs | ✅ |

**Next (ops / content — not code):**
1. GSC: filter queries containing cycling / rice paddy / Pejeng — baseline impressions & CTR.
2. GBP: upload real Pejeng rice-paddy + lunch-stop photos; reply to reviews with place specifics.
3. Publish/refresh one spoke only if it adds first-hand info (Subak / Pejeng history) — no thin AI posts.

---

## Completed — GEO audit execution (2026-09-04)

| Action | Finding | Status |
|--------|---------|--------|
| Add `/pricing.md` | Agents got 404 for machine-readable pricing | ✅ |
| Include cooking class in GEO tours/prices/comparisons | Offer incomplete in llms corpus | ✅ |
| Diversify homepage GEO FAQ subset | First-8 skew to ATV/combo only | ✅ |
| Fix blog Single ATV IDR 650K → 600K | Citation conflict vs live tiers | ✅ |
| HTTP `Link` + layout alternate for AI files | Weak agent discovery | ✅ |
| robots `anthropic-ai` alias | Checker: unmanaged lowercase UA | ✅ |
| Refresh SEO-STRATEGY / IMPLEMENTATION-ROADMAP | Plan still treated GEO as future Phase 3 | ✅ |
| Write `GEO-ANALYSIS.md` | No scored GEO deliverable | ✅ |

---

## Completed in prior PR (SEOmator remediation)

| Action | Audit finding | Status |
|--------|---------------|--------|
| Shorten title to ≤60 chars | Title 76 chars | ✅ |
| Shorten meta description to ≤160 chars | Description 361 chars / pixel width fail | ✅ |
| Remove `max-snippet:-1` googleBot directive | False “snippet blocking” warn | ✅ |
| Fix H1 spacing (`ATV & Village`) | Truncated H1 text | ✅ |
| Footer section labels → `<p>` (not `h4`) | h2 → h4 hierarchy skip | ✅ |
| Skip-to-content link | Accessibility warn | ✅ |
| Trim footer keyword cloud (48 → 20 unique links) | Keyword stuffing + 115 links | ✅ |
| Soften repeated ATV/Bali/Ubud/IDR copy | Keyword stuffing (4 terms >2%) | ✅ |
| Homepage GEO FAQ subset (curated) | DOM size + density + HTML weight | ✅ |
| Descriptive GEO/comparison anchors | Non-descriptive “Read more” | ✅ |
| Hero `fetchPriority="high"` + next/image for cards | LCP + missing dims + legacy formats | ✅ |
| Eager-load first carousel images | Above-fold lazy-load warn | ✅ |
| Drop duplicate homepage TouristTrip JSON-LD | HTML 211KB / text-to-HTML ratio | ✅ |
| Booking Terms + Our Team footer links | E-E-A-T terms / expertise | ✅ |
| Visible review trust line | Trust signals warn | ✅ |
| `twitter:site` | Social polish | ✅ |

---

## Priority 1 — After Deploy (Verify)

1. Confirm production cycling SERP title/description lengths in rich results / view-source.
2. Confirm production `/pricing.md`, `/llms.txt`, Link headers (lunch-only cycling inclusions).
3. Spot-check WebP/AVIF + GSC URL inspection for `/tours/ubud-ricefield-cycling-tour`.

---

## Priority 2 — Performance (Hosting / Build)

| Item | Note |
|------|------|
| Text compression / Brotli | CDN/hosting config |
| HTTP/3 alt-svc | CDN/edge config |
| Inline JS ~56KB | Optional booking popup split |
| DOM still large | GEO block curated; further trim only if CWV regresses |

---

## Priority 3 — Ongoing Local + light GEO

1. Monthly GSC cycling query review (impressions, CTR, position).
2. Author bio on blog posts → `/about`.
3. Verified review platform URLs in Organization `sameAs`.
4. Optional: monthly 20-query AI citation log (secondary to Search).

---

## Do NOT Do

| Item | Reason |
|------|--------|
| FAQPage schema | Restricted / no commercial FAQ rich results (May 2026) |
| HowTo schema | Deprecated for rich results |
| Restore dense keyword footer cloud | Inflates density + link count |
| Re-add `max-snippet:-1` | Triggers false “snippet blocking” in some tools |
| Fork prices or meal claims outside `tours` / `pricing.ts` / `geoContent.ts` | Creates Search + AI citation conflicts |
| Thin AI “cycling keyword” doorway pages | Mar/Jun 2026 spam + helpful-content risk |
