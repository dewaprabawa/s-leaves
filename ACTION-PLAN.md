# Action Plan — SEO / GEO / CTA (Sekar Bali Activity)

**Date:** 2026-09-25  
**Live score:** 78/100 · **After this PR:** 84/100  
**Conversion goal:** WhatsApp booking with prefilled details

## 1. Immediate blockers

None. The site is indexable, HTTPS, self-canonical, and allows Google + AI crawlers.

## 2. Done in this revision (2026-09-25)

1. **Split `GEO_QUICK_ANSWER`** — 53-word “X is…” definition (40–60 window). Full inventory lives in `GEO_INVENTORY` for `llms-full.txt` / `pricing.md` only.
2. **Lead prices** — `GEO_LEAD_BULLETS` on homepage GEO block, `/llms.txt`, `/llms-full.txt`, and `/pricing.md` (jeep / cooking / cycling / ATV / park tickets).
3. **Visible TripAdvisor citation** — homepage GEO block + `llms.txt` link to Tumang Traveler’s Choice 2026. (`citation_readiness.py` still scores tripadvisor as non-trusted — gov/edu/wikipedia only.)
4. **Article CTAs** — 77/77 blog slugs mapped to the matching tour. Park / workshop / dirt-bike copy keeps **quoted pickup**.
5. **Person schema** — Chef Wayan Suryana JSON-LD + `instructor` on `/tours/balinese-cooking-class`.
6. **`GEO_UPDATED` / Website `dateModified`** — 2026-09-25.

Earlier in this PR (2026-09-24): header Book CTA, `/contact` nav, hours 08:00–20:00, WhatsApp label match, `/book` checkout-only titles, anti-cannibalization keyword jobs.

## 3. Still open

| Priority | Action | Why | Effort |
|----------|--------|-----|--------|
| High | Keep new title jobs when adding cluster posts | Prevents tour vs blog cannibalization | Ongoing |
| Medium | Replace Unsplash jeep frames with operator photos | Flagship offer still stock | Low (needs files) |
| Medium | Trim homepage above-fold catalog; keep GEO tables below | Heavy DOM / image count | Medium |
| Medium | Re-run PageSpeed mobile on `/`, ATV, jeep after deploy | CWV unknown this run | Low |
| Low | Remove unused GetYourGuide button branches | Dead aggregator CTA code | Low |
| Low | Named host bylines on remaining cluster articles | EEAT 66 | Medium |

## 4. Do not do

- Do not add FAQPage schema (commercial restriction; FAQ rich results gone May 2026).
- Do not add HowTo schema (deprecated).
- Do not invent free pickup or the IDR 400K surcharge on park / workshop / dirt-bike tickets — pickup is **quoted**.
- Do not add a booking popup on private itinerary pages (consultation only).
- Do not buy or engineer AI citations.
- Do not create `sitemap_index.xml` just to satisfy the checker — `/sitemap.xml` is the inventory.
- Do not give `/book`, `/experiences`, or a blog the same title pattern as a `/tours/[slug]` money page.
- Do not put the 257-word inventory back into `GEO_QUICK_ANSWER`.

## 5. After deploy (ops)

1. Request indexing on `/`, `/llms.txt`, `/tours/balinese-cooking-class`, jeep / ATV money pages.
2. Confirm GBP hours = 08:00–20:00.
3. Manual GEO prompts: “Is breakfast cooked in the Batur jeep?” → **No, sit-down meal after the viewpoint**. “Is hotel pickup included on ATV?” → **IDR 400,000 or self-meet**. “What is Sekar Bali Activity?” → should now quote the 53-word definition, not the inventory dump.
4. Click a park-cluster blog CTA and confirm pickup copy still says **quoted**.
