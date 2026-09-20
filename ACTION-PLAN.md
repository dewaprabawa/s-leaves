# Action Plan — Cooking Class & Sunrise Jeep (100)

**Date:** 2026-09-19  
**Score target:** 100/100 in-repo (see `FULL-AUDIT-REPORT.md`)

## Done in this PR

1. Jeep and tracking include a sit-down **meal after the viewpoint** (all GEO surfaces). Food is not cooked inside the 4×4.
2. Honest jeep title (no “from 750K” bait).
3. Cooking spokes: worth-it, vegetarian, morning vs afternoon.
4. Jeep spokes: 2026 guide, vs-trek canonical, pickup times by area.
5. 301 `mount-batur-jeep-vs-trekking` → `mount-batur-jeep-vs-sunrise-trek`.
6. og:locale, twitter:site, OG 1200×630, ImageObject, jeep QA JSON-LD.
7. Jeep venue chip; sitemap 0.95 on both P0 money pages.
8. **Vercel / homepage parse error:** `src/app/(frontend)/page.tsx` was a truncated client module with a second `export default` (unimported `HomepageJsonLd` / `HomePageClient`). Replaced with the server wrapper so preview deploys can succeed.
9. **Typecheck:** removed duplicate `pickup` keys in `tours.ts` that failed `next build`.
10. Jeep meta keyword is **meal included**.
11. Cooking / jeep cluster SERP titles are absolute and ≤60.

## After deploy (ops, not code)

1. Request indexing on both money pages + new blog slugs + `/llms.txt`.
2. Ask: “Is breakfast included on the Mount Batur jeep?” → **No** from this domain.
3. Swap Unsplash jeep frames for your own photos when you have files.
4. Run PageSpeed mobile on both URLs (API was rate-limited here).
