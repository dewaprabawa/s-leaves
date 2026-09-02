# SEO Action Plan — sekarbaliactivity.com

**Date:** 2026-09-01  
**Overall priority:** Internal linking and commercial content → Technical polish → Performance verification

---

## Completed in This PR

| Action | Impact | Status |
|--------|--------|--------|
| Booking popup **Details** button — view tour itinerary without leaving dialog | UX + conversion | ✅ Done |
| 4 new sales articles with `/tours/*` internal links | Commercial SEO + internal links | ✅ Done |
| Homepage travel guides → new commercial blog URLs | Hub linking | ✅ Done |
| Updated cycling/ATV/tubing links in existing blog posts | Link equity to tour pages | ✅ Done |
| `geoContent.ts` — tour pages + new articles in llms.txt | AI citation | ✅ Done |
| Tour detail pages in sitemap | Indexability | ✅ Done (prior PR) |

---

## Priority 1 — High Impact (Do Next)

### 1. Cross-link orphan blog posts from related articles

**Finding:** 18 blog posts have only 1 internal link (from `/blog` index).  
**Fix:** Add a "Related guides" block at the bottom of each commercial article linking to 3–4 related posts. Start with culture posts (Pejeng history, Subak, spices) linking to the new cycling guide.

**Effort:** Medium — template component on blog post page  
**Confidence:** Confirmed

### 2. Replace remaining `/#adventures` links in blog content

**Finding:** Cooking class, Luwak coffee, and tour-package posts still anchor to homepage hash.  
**Fix:** Map each CTA to the correct `/tours/[slug]` where a tour page exists; keep `/#adventures` only as a fallback hub link.

**Effort:** Low — search/replace in `src/data/blog.ts`  
**Confidence:** Confirmed

### 3. Add footer "Popular Tours" links

**Finding:** Tour pages discovered mainly via homepage cards and sitemap.  
**Fix:** Add footer links: ATV, Rafting, Tubing, Cycling tour pages.

**Effort:** Low — `layout.tsx` footer nav  
**Confidence:** Likely

---

## Priority 2 — Medium Impact (Within 2 Weeks)

### 4. Add `twitter:site` metadata

**Fix:** In `src/lib/seo.ts` or root layout metadata:
```ts
twitter: { site: '@sekarbaliactivity', card: 'summary_large_image', ... }
```

**Effort:** Low  
**Confidence:** Confirmed

### 5. Verify Core Web Vitals in Search Console

**Fix:** Check LCP, INP, CLS for homepage and `/tours/*` in GSC → Experience → Core Web Vitals. Re-run PageSpeed with API key if available.

**Effort:** Low (monitoring)  
**Confidence:** Environment limitation during audit

### 6. Blog index category grouping

**Fix:** Group `/blog` into "Adventure Guides" vs "Culture & Food" with section headers and cross-links between categories.

**Effort:** Medium  
**Confidence:** Likely

---

## Priority 3 — Ongoing Content

### 7. Publish 2–4 articles per quarter targeting commercial queries

Suggested next topics:
- "Bali ATV for beginners — what to expect at All New Bali Adventure"
- "Ubud pickup zones and surcharges explained (2026)"
- "Best Bali adventure combo: ATV + tubing vs rafting + cycling"

Each article should link to 2+ tour pages and 1+ related blog post.

### 8. Add author/team snippet to blog posts

**Fix:** Short bio + link to `/about` on each post for E-E-A-T signals.

**Effort:** Low  
**Confidence:** Likely

---

## Do NOT Do

| Item | Reason |
|------|--------|
| FAQPage JSON-LD | Restricted to government/healthcare authorities |
| HowTo JSON-LD | Deprecated for rich results (Sept 2023) |
| Location spam pages | Not applicable; single service area in Pejeng/Ubud |
| FID references | Replaced by INP since Sept 2024 |

---

## Success Metrics

| Metric | Target (90 days) |
|--------|------------------|
| Orphan blog posts | ≤5 (from 18) |
| Tour page internal links | ≥3 per tour page from blog + footer |
| Indexed `/tours/*` pages | 5+ in GSC |
| Organic clicks on commercial guides | Track in GSC for new article URLs |

---

## Files Touched This Sprint

- `src/components/BookingPopup.tsx` — Details button
- `src/components/BookingTourDetailPanel.tsx` — in-dialog tour panel
- `src/lib/bookingTourDetails.ts` — activity → tour slug map
- `src/data/blog.ts` — 4 new articles + internal link updates
- `src/data/geoContent.ts` — llms.txt article/tour URLs
- `src/app/(frontend)/page.tsx` — travel guides hub
