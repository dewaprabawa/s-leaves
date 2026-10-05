# ACTION PLAN

**URL:** https://www.sekarbaliactivity.com/tours/griya-beji-waterfall  
**Date:** 2026-10-05  
**Source:** `FULL-AUDIT-REPORT.md` (single-page SEO + GEO)

Order: blockers → quick wins → strategic. No FAQPage. No cheapest claim. No price change. Do not invent life-therapy / chakra SKUs. Do not confuse Griya Beji with Tirta Empul / Pura Beji.

---

## 1. Immediate blockers

None. The URL returns HTTP 200, is `index,follow`, self-canonical, listed in `sitemap.xml` (URL + 3 images), and is not `noindex`. 0 redirect hops. Security headers 100/100. AI crawlers allowed.

---

## 2. Quick wins (this PR — implemented on `cursor/griya-beji-seo-geo-audit-c8fa`)

| # | Action | Impact | Effort | Owner file |
| --- | --- | --- | --- | --- |
| 1 | Title → `Griya Beji Waterfall Ubud \| From 300K` (37). Keyword + Ubud. Keep From 300K. Not cheapest. | High — query–title match | Low | `src/data/tours.ts` `seoTitle` |
| 2 | Meta 158 chars starting with “Griya Beji waterfall purification near Ubud”, 300K / 1M / 1.5M, gate extra, pickup 400K or self-meet, not Tirta Empul. | High — snippet relevance | Low | `src/data/tours.ts` `seoDescription` |
| 3 | GEO H2 → `Griya Beji Waterfall near Ubud — 2026 facts` | High — first extractable heading | Low | `src/data/activityGeo.ts` `GRIYA.heading` |
| 4 | About H2 → `About Griya Beji Waterfall near Ubud` | Medium — H2 keyword alignment | Low | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 5 | Hero price → `300,000 melukat · 1,000,000 palm · 1,500,000 healing` | High — visible 3 SKUs | Low | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 6 | `TouristTrip` + `Product` with `AggregateOffer` 300,000–1,500,000 + five Offers (melukat, palm, healing, intl admission, pickup 400K) | High — agent + rich-result price | Medium | `src/app/(frontend)/tours/[slug]/page.tsx` |
| 7 | Standalone `Question`/`Answer` from GEO FAQs + WebPage `speakable` (`.griya-geo-tldr`, `.griya-geo-answer`, `.activity-geo-tldr`, `.geo-tldr`) | High — GEO citation | Medium | `page.tsx`, `ActivityGeoBlock.tsx` |
| 8 | touristType → spiritual / culture (not adventure seekers) | Medium — entity accuracy | Low | `page.tsx` |
| 9 | Related guides: hotel pickup checker first + extraNote URL | Medium — pickup honesty | Low | `tourGuides.ts`, `activityGeo.ts` |
| 10 | llms lead bullet: Punggul 300K / 1M / 1.5M · gate extra · pickup 400K · not Tirta Empul | Medium — agent citability | Low | `src/data/geoContent.ts` `GEO_LEAD_BULLETS` |

---

## 3. Strategic (not this PR unless cheap)

| # | Action | Impact | Effort | Notes |
| --- | --- | --- | --- | --- |
| 11 | Collect real guest reviews; then Review / AggregateRating | Medium — E-E-A-T | High | `reviews: []` today. Do not invent. |
| 12 | PageSpeed with an API key (mobile + desktop) | Medium — CWV truth | Low | Environment was rate-limited. Measure INP, not FID. |
| 13 | YouTube / short-form of a real Punggul visit (brand mention) | Medium — GEO brand | High | Earn, do not buy citations. |
| 14 | Fresh GSC query report after title change + request indexing | High — first impressions | Low | Aug–Sep 2026 export: no Griya rows. |

---

## 4. Maintenance

- Request indexing in GSC after deploy (`/tours/griya-beji-waterfall`).
- Keep published 2026 park menu: **IDR 300,000** melukat · **IDR 1,000,000** palm · **IDR 1,500,000** healing · **IDR 50,000** intl / **20,000** domestic gate · **pickup IDR 400,000 or self-meet**.
- Confirm the live board on WhatsApp — park menus change.
- Keep honest vs Tirta Empul (private **1.2M** with shuttle + breakfast).
- Do not change ATV 750/725/700, jeep 750K-at-3+, cycling promo 650-vs-750, Swing 530/630, motorbike 450/500/650/750/750/800 + 550K south shuttle, or rafting 500/450-for-2+.

---

## 5. Explicitly out of scope

- FAQPage or HowTo JSON-LD
- “Cheapest melukat in Bali” / “best purification in Bali”
- Fake 999K / Gorilla Cave / free quad / SeaBank / Jungle Buggies
- Invented life-therapy / chakra-aura SKUs
- Changing published Griya prices
- Changing ATV, jeep, cycling, swing, motorbike, or rafting prices
- Merging leftover draft automation PRs
- Invented reviews

---

## 6. Expected outcome after deploy

- SERP title matches **Griya Beji Waterfall Ubud** with visible From 300K.
- Snippet states 300K / 1M / 1.5M, gate extra, pickup 400K or self-meet, not Tirta Empul.
- Agents can cite palm, healing, admission, and pickup from Product/AggregateOffer + Question nodes + llms.txt.
- First-index test; do not expect overnight rank vs the official park site or Tirta Empul mega-queries.
