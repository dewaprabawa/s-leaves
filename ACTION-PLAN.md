# ACTION PLAN

**URL:** https://www.sekarbaliactivity.com/tours/bali-motorbike-traveling-trip  
**Date:** 2026-10-04  
**Source:** `FULL-AUDIT-REPORT.md` (single-page SEO + GEO)

Order: blockers → quick wins → strategic. No FAQPage. No cheapest claim. No slug rename. No price changes.

---

## 1. Immediate blockers

None. The URL returns 200, is `index,follow`, self-canonical, in `sitemap.xml`, and is not `noindex`.

---

## 2. Quick wins (this PR — implemented on `cursor/motorbike-seo-geo-audit-c8fa`)

| # | Action | Impact | Effort | Owner file |
| --- | --- | --- | --- | --- |
| 1 | Title → `Bali Motorbike Tour Ubud \| Promo 450K` (37). Keyword first. Promo 450K stays. Not “best/cheapest in Bali”. | High — query–title match + CTR | Low | `src/data/tours.ts` `seoTitle` (OG/Twitter/WebPage.name follow) |
| 2 | Meta 150–160 chars starting with “Bali motorbike tour from Ubud”, tickets extra, ride or pillion, Canggu shuttle 550K, WhatsApp. | High — snippet relevance | Low | `src/data/tours.ts` `seoDescription` |
| 3 | GEO H2 → `Bali motorbike tour from Ubud — 2026 facts` | High — first extractable heading | Low | `src/data/activityGeo.ts` `MOTORBIKE.heading` |
| 4 | Promo badge on the tour header (same pattern as cycling) | Medium — on-page promo notice | Low | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 5 | Link `/planners/motorbike-tour-price` from the money page + WebPage.significantLink | Medium — internal link + conversion | Low | `tourGuides.ts`, `page.tsx` schema, `activityGeo.ts` extraNote |
| 6 | Expand six destination H3s to 80–120 word citable passages (honest stops only) | High — passage / GEO | Medium | `src/data/tours.ts` `fullDescription` |
| 7 | llms lead bullet: tickets extra + IDP or pillion | Medium — agent citability | Low | `src/data/geoContent.ts` `GEO_LEAD_BULLETS` |

---

## 3. Strategic (not this PR unless cheap)

| # | Action | Impact | Effort | Notes |
| --- | --- | --- | --- | --- |
| 8 | Compress `moto-ubud.jpg` / `moto-east.jpg` / `moto-ubud-waterfall.jpg` under 200–300 KB; prefer AVIF/WebP source | High for LCP if those images win LCP | Medium | Binary; verify quality. Next already serves `_next/image` for hero/gallery |
| 9 | Render destination photos with `next/image` + width/height instead of markdown `<img>` | Medium — CLS | Medium | New small component |
| 10 | Collect real guest reviews; then Review / AggregateRating | Medium — E-E-A-T | High | Do not invent |
| 11 | YouTube / short-form of a real scooter day (brand mention signal) | Medium — GEO brand | High | Earn, do not buy citations |
| 12 | Slug → `/tours/bali-motorbike-tour` only with 301 + sitemap + internal rewrite | Low–medium long term | High | Not this pass |

---

## 4. Maintenance

- Request indexing in GSC after deploy.
- Re-run PageSpeed with an API key (environment was rate-limited).
- Pull a page-filtered GSC query report (on-disk Aug–Sep export had no motorbike rows).
- Keep published promo: Ubud 450K, waterfall 500K, Kintamani 650K, South 750K, North 750K, East 800K, south shuttle 550K once. Tickets + lunch extra.

---

## 5. Explicitly out of scope

- FAQPage or HowTo JSON-LD
- “Cheapest scooter tour in Bali”
- Fake 999K / Gorilla Cave / free quad / SeaBank
- Changing ATV 750/725/700, jeep 750K-at-3+, cycling 650-vs-750, Swing 530/630
- Merging leftover draft PRs
