# ACTION PLAN

**URL:** https://www.sekarbaliactivity.com/tours/whitewater-rafting  
**Date:** 2026-10-04  
**Source:** `FULL-AUDIT-REPORT.md` (single-page SEO + GEO)

Order: blockers → quick wins → strategic. No FAQPage. No cheapest claim. No price change. Do not match 235K–350K shared/resident tickets or Red Paddle ~180K–325K own-transport listings.

---

## 1. Immediate blockers

None. The URL returns HTTP 200, is `index,follow`, self-canonical, listed in `sitemap.xml` (URL + image), and is not `noindex`. 0 redirect hops. Security headers 100/100. AI crawlers allowed.

---

## 2. Quick wins (this PR — implemented on `cursor/rafting-seo-geo-audit-c8fa`)

| # | Action | Impact | Effort | Owner file |
| --- | --- | --- | --- | --- |
| 1 | Title → `Ayung River Rafting Ubud \| 500K · 450K` (38). Keyword first. Keep published 500K · 450K. Not “Best Price” / cheapest. | High — query–title match + CTR at GSC pos 13 | Low | `src/data/tours.ts` `seoTitle` (OG/Twitter/WebPage.name follow) |
| 2 | Meta 153 chars starting with “Ayung River rafting near Ubud”, Class II–III, 500K / 450K for 2+ (min 2), lunch + gear, pickup 400K or self-meet, WhatsApp. | High — snippet relevance | Low | `src/data/tours.ts` `seoDescription` |
| 3 | GEO H2 → `Ayung River rafting near Ubud — 2026 facts` | High — first extractable heading | Low | `src/data/activityGeo.ts` `RAFTING.heading` |
| 4 | About H2 → `About Ayung River rafting near Ubud` | Medium — H2 keyword alignment | Low | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 5 | Hero price → `500,000 / person · 450,000 for 2+ (min 2)` (was “From 500,000”) | High — visible 2+ rate | Low | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 6 | `TouristTrip` + `Product` with `AggregateOffer` 450,000–500,000 + three Offers (2+, list, optional pickup 400K) | High — agent + rich-result price | Medium | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 7 | Standalone `Question`/`Answer` from GEO FAQs + WebPage `speakable` (`.rafting-geo-tldr`, `.rafting-geo-answer`, `.activity-geo-tldr`, `.geo-tldr`) | High — GEO citation | Medium | `page.tsx`, `ActivityGeoBlock.tsx` |
| 8 | Thicken “What to Expect” + combo vs tubing + hotel-pickup-checker link | Medium — passage / conversion | Low | `src/data/tours.ts` `fullDescription` |
| 9 | Related guides: hotel pickup checker first | Medium — pickup honesty + internal link | Low | `src/data/tourGuides.ts` |
| 10 | llms lead bullet: standalone Ayung 500K / 450K for 2+ · lunch · pickup 400K · not 235K–350K | Medium — agent citability | Low | `src/data/geoContent.ts` `GEO_LEAD_BULLETS` |
| 11 | GEO extraNote: pickup 400K + `/planners/hotel-pickup-checker` | Medium — prevent free-pickup hallucination | Low | `src/data/activityGeo.ts` `RAFTING.extraNote` |

---

## 3. Strategic (not this PR unless cheap)

| # | Action | Impact | Effort | Notes |
| --- | --- | --- | --- | --- |
| 12 | Compress `public/images/adventures/rafting.jpg` (1,202,566 B, 1376×768) under 200–300 KB; prefer AVIF/WebP source | High for LCP if this JPEG wins LCP | Medium | Binary; verify quality. Next already serves `_next/image` for the hero. Do not block copy/schema on a binary pass. |
| 13 | Collect real guest reviews; then Review / AggregateRating | Medium — E-E-A-T | High | `reviews: []` today. Do not invent quotes. |
| 14 | PageSpeed with an API key (mobile + desktop) | Medium — CWV truth | Low | Environment was rate-limited. Measure INP, not FID. |
| 15 | YouTube / short-form of a real Ayung run (brand mention) | Medium — GEO brand | High | Earn, do not buy citations. |
| 16 | Fresh GSC query report after title change | High — CTR test | Low | Aug–Sep 2026 export: 12 impressions, 0 clicks, pos 13. |

---

## 4. Maintenance

- Request indexing in GSC after deploy (`/tours/whitewater-rafting`).
- Re-run PageSpeed with a key; compress the hero if LCP is this JPEG.
- Keep published 2026 rates: **IDR 500,000** list · **IDR 450,000 for 2+ (min 2)** · lunch, helmet, life jacket, crew, insurance 6–65 included · **pickup IDR 400,000 or self-meet**.
- Keep honest vs cheap SERP: do **not** claim cheapest vs 235K–350K group/own-transport or Red Paddle ~180K–325K.
- Do not change ATV 750/725/700, jeep 750K-at-3+, cycling promo 650-vs-750, Swing 530/630, or motorbike 450/500/650/750/750/800 + 550K south shuttle.

---

## 5. Explicitly out of scope

- FAQPage or HowTo JSON-LD
- “Cheapest rafting in Bali” / “best rafting in Bali”
- Fake 999K / Gorilla Cave / free quad / SeaBank / Jungle Buggies
- Changing rafting 500K / 450K-for-2+ / min 2 / 400K pickup
- Changing ATV, jeep, cycling, swing, or motorbike prices
- Merging leftover draft automation PRs
- Invented reviews

---

## 6. Expected outcome after deploy

- SERP title matches cluster head **Ayung River rafting Ubud** with visible 500K · 450K.
- Snippet states Class II–III, lunch, pickup 400K or self-meet.
- Agents can cite 450K for 2+ and the pickup rule from Product/AggregateOffer + Question nodes + llms.txt.
- CTR test on the existing pos-13 impression set; do not expect overnight rank jumps vs cheap Ayung tickets.
