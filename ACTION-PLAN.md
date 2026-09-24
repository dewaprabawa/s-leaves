# Action Plan — SEO / GEO / CTA (Sekar Bali Activity)

**Date:** 2026-09-24  
**Live score:** 78/100 · **After this PR:** 82/100 (in-repo CTA, hours, `/book` message-match)  
**Conversion goal:** WhatsApp booking with prefilled details

## 1. Immediate blockers

None. The site is indexable, HTTPS, self-canonical, and allows Google + AI crawlers. 0 broken links on the homepage crawl.

## 2. Done in this PR (quick wins)

1. **Header CTA** — always visible; `Book` (mobile) / `Book WhatsApp` (desktop); overlay `Book on WhatsApp`.
2. **Contact nav** — `/contact` (NAP page) instead of `/#contact`.
3. **Hours honesty** — schema `08:00–20:00` matches `/contact`; header no longer says “Pickup from 7 AM” (jeep collects 02:00–03:00).
4. **Article default CTA** — “Start WhatsApp booking” for `/book` (label matches the hop).
5. **Tour CTAs** — activity-specific primary + sticky labels (jeep, cooking, ATV, cycling, rafting, tubing, swing, waterfall, melukat, coffee, day tours).
6. **`/book` SERP + H1** — jeep + cooking + ATV so checkout matches the homepage title.
7. **Homepage closer** — “Start WhatsApp booking” + “WhatsApp private jeep” (was ATV).
8. **Twitter** — `twitter:creator` = `@sekarbaliactivity`.
9. **Website schema** `dateModified` refreshed to 2026-09-23.
10. **FAQ booking copy** updated to the new button names.

## 3. Strategic (next)

| Priority | Action | Why | Effort |
|----------|--------|-----|--------|
| High | Split `GEO_QUICK_ANSWER` / `llms.txt` lead into a ~50-word definition + priced bullets | 257-word run-on is outside citation windows | Medium |
| High | Visible TripAdvisor link beside Traveler’s Choice 2026 | Citation script: 0 trusted outbound links | Low |
| High | Map remaining blog slugs in `ArticleBookingCta` to the matching tour | Default `/book` CTA is weaker than a money-page hop | Medium |
| Medium | Replace Unsplash jeep frames with operator photos | Flagship offer still stock | Low (needs files) |
| Medium | Trim homepage above-fold catalog; keep GEO tables below | 52 images + 8,077 words | Medium |
| Medium | Re-run PageSpeed mobile on `/`, ATV, jeep after deploy | CWV unknown this run | Low |
| Low | Remove unused GetYourGuide button branches | Dead aggregator CTA code | Low |
| Low | Named host/chef bylines (Person schema) on cluster articles | EEAT 66 | Medium |

## 4. Do not do

- Do not add FAQPage schema (commercial restriction; FAQ rich results gone May 2026).
- Do not add HowTo schema (deprecated).
- Do not invent free pickup or the IDR 400K surcharge on park / workshop / dirt-bike tickets — pickup is **quoted**.
- Do not add a booking popup on private itinerary pages (consultation only).
- Do not buy or engineer AI citations.
- Do not create `sitemap_index.xml` just to satisfy the checker — `/sitemap.xml` is the inventory.

## 5. After deploy (ops)

1. Request indexing on `/`, `/book`, `/contact`, jeep / cooking / ATV money pages.
2. Confirm GBP hours = 08:00–20:00.
3. Manual GEO prompts: “Is breakfast cooked in the Batur jeep?” → **No, sit-down meal after the viewpoint**. “Is hotel pickup included on ATV?” → **IDR 400,000 or self-meet**.
4. Click the new header Book control on a 390px viewport and complete a WhatsApp handoff.
