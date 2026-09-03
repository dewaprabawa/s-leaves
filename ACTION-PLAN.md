# SEO Action Plan — sekarbaliactivity.com

**Date:** 2026-09-03  
**Source:** SEOmator audit (88/100 on-page; Lighthouse Performance 44)  
**Overall priority:** SERP metadata → content density/headings → images/LCP → E-E-A-T polish

---

## Completed in This PR (SEOmator remediation)

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
| Homepage GEO FAQ subset (8 of 20) | DOM size + density + HTML weight | ✅ |
| Descriptive GEO/comparison anchors | Non-descriptive “Read more” | ✅ |
| Hero `fetchPriority="high"` + next/image for cards | LCP + missing dims + legacy formats | ✅ |
| Eager-load first carousel images | Above-fold lazy-load warn | ✅ |
| Drop duplicate homepage TouristTrip JSON-LD | HTML 211KB / text-to-HTML ratio | ✅ |
| Booking Terms + Our Team footer links | E-E-A-T terms / expertise | ✅ |
| Visible review trust line | Trust signals warn | ✅ |
| `twitter:site` | Social polish | ✅ |

---

## Priority 1 — After Deploy (Verify)

1. Re-run SEOmator / Lighthouse on production homepage.
2. Confirm SERP title/description lengths in rich results preview.
3. Confirm Googlebot meta no longer includes `max-snippet:-1`.
4. Spot-check WebP/AVIF via Next image optimizer in Network tab.

---

## Priority 2 — Performance (Hosting / Build)

| Item | Note |
|------|------|
| Text compression / Brotli | CDN/hosting config (not app HTML) |
| HTTP/3 alt-svc | CDN/edge config |
| Inline JS ~56KB | Client homepage — consider splitting booking popup |
| DOM still large | Further reduce FAQ accordion overlap with GEO block if needed |

---

## Priority 3 — Ongoing Content / E-E-A-T

1. Author bio snippet on blog posts linking to `/about`.
2. Related guides block for orphan blog posts.
3. Optional editorial/safety notes page if YMYL-adjacent auditors keep flagging (tour operator, not medical/finance).

---

## Do NOT Do

| Item | Reason |
|------|--------|
| FAQPage schema | Restricted to gov/health authority sites |
| HowTo schema | Deprecated for rich results |
| Restore dense keyword footer cloud | Inflates density + link count |
| Re-add `max-snippet:-1` | Triggers false “snippet blocking” in some tools |
