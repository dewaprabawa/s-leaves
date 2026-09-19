# Action Plan — Cooking Class & Sunrise Jeep SEO/GEO

**Date:** 2026-09-19  
**Scope:** `/tours/balinese-cooking-class` and `/tours/batur-sunrise-jeep-tour`  
**Operator fact:** Sunrise jeep does **not** include meals; food is **not** served on the jeep.

---

## 1) Immediate blockers (this PR)

| # | Action | Why | Effort |
|---|--------|-----|--------|
| 1 | Remove “breakfast included / served on the jeep” from tour page, FAQs, itinerary, includes, meta, host note | Stops AI and Google from citing a false inclusion | Done |
| 2 | Add meals to **Not included** and keep FAQ “Is breakfast included?” → **No** | Query-shaped answer agents will extract | Done |
| 3 | Sync `jeepGeo.ts`, `geoContent.ts` (`llms.txt` / `pricing.md`), homepage FAQ + JSON-LD, jeep blogs | Agent files must match the money page | Done |
| 4 | Honest SERP title (drop “From IDR 750K”) | 750K is 3+ only | Done |
| 5 | Inject jeep `Question`/`Answer` JSON-LD; merge duplicate schema function | Cooking already had this; jeep did not ship | Done |
| 6 | Deduplicate jeep `pickup` field and `TOUR_RELATED_GUIDES` key | Second declaration was overwriting guides | Done |

**Deploy this branch** so live `/llms.txt` and the jeep money page stop saying breakfast is included.

---

## 2) Quick wins (after deploy)

1. **Manual AI check (15 min):** Ask ChatGPT / Perplexity / Google: “Is breakfast included on the Mount Batur Sunrise Jeep Tour?” and “Mount Batur sunrise without hiking.” Confirm this domain is cited with **No meals / no food on the jeep**.
2. **Search Console:** Request indexing on `/tours/batur-sunrise-jeep-tour`, `/llms.txt`, `/pricing.md`, jeep price + vs-trek posts.
3. **WhatsApp scripts:** If staff still say “breakfast on top,” update the saved reply to match the site.
4. **Cooking:** Leave money-page facts as-is (promo 450K, max 8, free Ubud pickup). No meal-claim bug found.

---

## 3) Strategic improvements

| Priority | Item | Page |
|----------|------|------|
| High | First-party jeep photos (replace Unsplash) | Jeep money + OG |
| High | One canonical jeep-compare URL + 301 the alias | `vs-sunrise-trek` vs `vs-trekking` |
| Medium | Cooking spokes: worth it 2026, vegetarian menu, morning market vs afternoon | Cooking cluster |
| Medium | Add verified TripAdvisor / GBP `sameAs` when URLs are confirmed | Sitewide entity |
| Medium | og:image width/height; jeep `og:locale` | Both |
| Low | YouTube jeep/cooking clips (text layer: title, description, chapters) | GEO brand mentions |

---

## 4) Do not do

- Do **not** add commercial `FAQPage` or `HowTo` schema (rich results gone / restricted).
- Do **not** write a separate “AI-only” jeep page. Same facts for people and agents.
- Do **not** re-introduce breakfast on the jeep to “match competitors.”
- Do **not** buy or engineer AI citations.

---

## Execution order

1. Merge/deploy this PR (fact correction + reports).
2. Re-crawl GSC + spot-check AI answers.
3. Photo + slug-canonical work.
4. Cooking cluster articles when calendar allows.
