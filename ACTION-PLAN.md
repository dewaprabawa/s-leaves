# SEO / GEO Action Plan — sekarbaliactivity.com

Date: 2026-09-27 · Overall ~88/100 (Good; GEO Excellent). No critical issues found.

## Priority 1 — Measure (this week)
1. **Verify Core Web Vitals (mobile).** PageSpeed API was rate-limited this run. Add a PageSpeed API key or use Google Search Console → Core Web Vitals (CrUX) and record mobile LCP, INP, CLS. Focus on the content-heavy homepage. *(Impact: High · Effort: Low)*

## Priority 2 — Quick polish (this week)
2. **Fix homepage H1 spacing.** Accessible text reads "Your Bali day,booked clear" — add a space after the comma so it reads "Your Bali day, booked clear." *(Impact: Low · Effort: Low)*

## Priority 3 — Opportunities (this month)
3. **Add first-party review/rating schema** to `Product`/`TouristTrip` **only if** you have genuine guest reviews (e.g., from WhatsApp/GetYourGuide). Never fabricate. *(Impact: Medium · Effort: Medium)*
4. **Homepage weight check.** After CWV data lands, if mobile LCP/INP is weak, trim/lazy-load below-the-fold sections and defer non-critical JSON-LD/DOM. *(Impact: Medium · Effort: Medium)*

## No action needed
- robots.txt AI-crawler allow-list, sitemap, security headers, social meta, canonical, schema coverage, and llms.txt/llms-full.txt/pricing.md are all in great shape.
- Sitemap "index 404" probes are false positives — `/sitemap.xml` (121 URLs) is valid.
- The new **Bali Motorbike Traveling Trip** is live, indexed in the sitemap, and fully optimized (title, meta, TouristTrip/Offer/Breadcrumb schema, canonical).

## Keep doing (protect these wins)
- Maintain the QAPage `Question`/`Answer` blocks (not `FAQPage`) and avoid `HowTo` — this matches current Google rich-result reality.
- Keep `llms.txt` / `llms-full.txt` / `pricing.md` updated whenever prices or activities change (GEO citability).
- Keep AI crawlers allowed in robots.txt.
