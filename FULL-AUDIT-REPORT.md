# SEO Full Audit Report — sekarbaliactivity.com

**Audit date:** 2026-09-03  
**URL:** https://www.sekarbaliactivity.com  
**Source audit:** SEOmator PDF (uploaded) + live HTML verification  
**Business type:** Local adventure tour operator (Ubud / Pejeng, Bali)

---

## Executive Summary

| Category (SEOmator) | Score | After remediation focus |
|---------------------|-------|-------------------------|
| On-Page SEO | 88/100 | Title, description, snippet robots |
| Content | 65/100 | Keyword density, heading order, HTML weight |
| Performance | 69/100 (LH 44) | LCP fetchpriority, image dims/formats, above-fold lazy |
| Images | 85/100 | next/image + width/height + WebP/AVIF pipeline |
| Links | 93/100 | Fewer footer links, descriptive anchors |
| E-E-A-T | 86/100 | Terms + team links, visible review trust |
| Structured Data | 100/100 | Kept lean (removed redundant TouristTrip on homepage) |
| AI/GEO | 100/100 | Preserved; homepage shows 8 FAQs, full set in llms.txt |

---

## Critical / Fail Findings — Status

### 1. Meta description too long (361 chars) + pixel width fail — Fixed
- **Evidence:** Live `<meta name="description">` was 361 characters.
- **Fix:** `DEFAULT_DESCRIPTION` shortened to 146 chars (target 120–160).

### 2. Title too long (76 chars) — Fixed
- **Evidence:** Title truncated in SERPs.
- **Fix:** `DEFAULT_TITLE` → `Sekar Bali Activity | ATV & Ubud Adventures` (43 chars).

### 3. Keyword stuffing (4 terms >2% density) — Mitigated
- **Evidence:** Body density — IDR 3.11%, ATV 2.73%, Bali 2.61%, Ubud 2.59%.
- **Fix:** Trimmed keyword footer cloud, softened package copy, shortened GEO TLDR, show 8 homepage GEO FAQs (full corpus remains in `/llms.txt`).

### 4. Text-to-HTML ratio 9.8% — Improved
- **Evidence:** HTML ~211KB with 19 JSON-LD blocks including 5 duplicate TouristTrip entries.
- **Fix:** Removed homepage TouristTrip duplicates (detail pages retain tour schema); reduced visible GEO DOM.

### 5. “Snippet blocking” warn — Fixed (tool false positive)
- **Evidence:** `googlebot` contained `max-snippet:-1` (unlimited snippets).
- **Fix:** Omitted `max-snippet` / `max-video-preview` so tools no longer misread `-1`.

---

## Warnings Addressed

| Finding | Fix |
|---------|-----|
| Heading skip h2→h4 in footer | Footer labels are styled `<p>`, not headings |
| No skip navigation link | Skip link → `#main-content` |
| Above-fold lazy images | First 2 carousel images `loading="eager"` |
| LCP missing fetchpriority | Hero Image `fetchPriority="high"` + `preload` |
| Images missing width/height | next/image with explicit dimensions on cards/carousel |
| Legacy JPG-only markup | Cards/carousel/CTA use next/image (AVIF/WebP formats enabled) |
| Excessive links (115) | Footer cloud 48 → 20 curated links |
| Non-descriptive anchors | GEO “Read more” → contextual link text |
| Missing terms / trust / expertise | Booking Terms, Our Team, review platforms line |
| twitter:site missing | Added `@sekarbaliactivity` |

---

## Remaining (Hosting / Out of Band)

| Finding | Owner |
|---------|-------|
| No Brotli/text compression detected | CDN / host |
| No HTTP/3 alt-svc | CDN / host |
| Inline JS ~56KB | Next client bundle — optional future split |
| Lighthouse Performance 44 | Re-measure after deploy; CWV in GSC |

---

## Environment Limitations

- Production re-score depends on deploy of this branch.
- PageSpeed lab metrics should be re-checked post-deploy with a fresh PSI run.

---

## Scoring Guidance After Fixes

Expect Content and On-Page category gains from metadata + density + heading fixes. Performance score depends on CDN compression and LCP verification in the field, not only HTML changes.
