# Action Plan — New Activities SEO / GEO

**Date:** 2026-09-28  
**Live score (new-activity surfaces):** 62/100 · **After this PR:** 84/100  
**Conversion goal:** WhatsApp booking with prefilled details (itinerary stays consultation-only)

## 1. Immediate blockers

None for indexing. HTTPS, self-canonical, sitemap, and AI crawlers are healthy.

The **commercial GEO blocker** was the motorbike money page shipping without agent-readable facts. That is fixed in this PR — it is not live until deploy.

## 2. Done in this revision (2026-09-28)

1. **Motorbike GEO stack** — `motorbikeTrip.ts` constants; 54-word TLDR; priced destination table; five self-contained Q&As; citation snippet.
2. **Keywords** — first-class `KEYWORD_CLUSTERS['bali-motorbike-traveling-trip']` (head / book / compare). Not park-workshop.
3. **Agent files** — `GEO_PRICING`, `GEO_TOUR_SUMMARIES`, `GEO_INVENTORY`, pickup policy, things-to-do FAQ, comparison table in `GEO_COMPARISONS`.
4. **UTV inventory** — Bali Buggy Adventures + 1.2M / 1.5M added to `GEO_INVENTORY` (was summaries-only).
5. **Internal links** — footer, layout, `SITE_NAV_LINKS`, host note, related guides, hub table + choose row.
6. **Comparison spoke** — `/blog/bali-motorbike-tour-vs-private-driver-2026` with mapped CTA (motorbike vs full-day car vs ATV). Head terms stay on the money page.
7. **Schema** — Organization `priceRange` `IDR 300000 - IDR 4100000`; Website `dateModified` 2026-09-28.
8. **Sitemap** — motorbike is a money-page priority; spoke lastmod override 2026-09-28. `assertSitemapInventory` passes (123 locs).

## 3. Still open

| Priority | Action | Why | Effort |
|----------|--------|-----|--------|
| High | Keep new title jobs when adding cluster posts | Prevents tour vs blog cannibalization | Ongoing |
| Medium | Re-run PageSpeed mobile on motorbike, UTV, Safari after deploy | CWV unknown this run | Low |
| Medium | Optional footer links for Taro dinner / Tabanan dirt bike | Discoverability only — GEO already exists | Low |
| Low | Named practitioner bylines on workshop pages | EEAT | Medium |
| Low | First-party video / YouTube mentions | GEO multi-modal | High |

## 4. Do not do

- Do not add FAQPage schema (commercial restriction; FAQ rich results gone May 2026).
- Do not add HowTo schema (deprecated).
- Do not invent free Ubud pickup or the IDR 400K surcharge on park / workshop / dirt-bike / UTV tickets — pickup is **quoted**.
- Do not invent free-Ubud cycling pickup on the motorbike trip — pickup is **at the chosen area**.
- Do not claim the motorbike trip is Sedang ATV, a dirt-bike enduro, or a private car day.
- Do not add a booking popup on private itinerary pages (consultation only).
- Do not buy or engineer AI citations.
- Do not give `/book`, `/experiences`, or a blog the same title pattern as a `/tours/[slug]` money page.
- Do not put the full inventory sentence back into `GEO_QUICK_ANSWER`.

## 5. After deploy (ops)

1. Request indexing on `/tours/bali-motorbike-traveling-trip`, `/blog/bali-motorbike-tour-vs-private-driver-2026`, `/llms.txt`, `/pricing.md`, `/tours/utv-buggy-bali-adventure`.
2. Manual GEO prompts:
   - “How much is a Bali motorbike tour from Ubud?” → **IDR 450,000 per scooter; tickets not included; pickup at chosen area**.
   - “Is the motorbike trip the same as a private driver?” → **No. Car from IDR 600,000.**
   - “Is UTV the Ubud ATV?” → **No. Pemogan 7 km UTV, lunch included, 1.2M / 1.5M.**
3. Click the new blog CTA and confirm it lands on the motorbike money page, not generic `/book`.
