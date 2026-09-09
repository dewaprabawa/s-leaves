# Action Plan — SEO + GEO (implementation status)

- **Site:** https://www.sekarbaliactivity.com/
- **Audit date:** 2026-09-09
- **Implementation branch:** `cursor/seo-geo-action-plan-2c12`
- **Merged with:** `origin/main` (includes audit report #75)

## Done in this PR

1. **GEO opening blurb NAP conflict** — `geoContent.ts` one-liners now lead with Sedang / Abiansemal activity base; Pejeng reserved for cycling routes; `GEO_UPDATED` → 2026-09-09
2. **Hero without T-rex** — cherry-picked landscape ATV hero assets + layout from PR #72
3. **TripAdvisor citation** — linked Tumang listing `Attraction_Review-g297701-d26364507` on cooking money page, GEO FAQs, `sameAs`, and tour markdown
4. **Internal-link pass** — `tourGuides.ts` + “Guides for this activity” on each `/tours/*` money page
5. **Host E-E-A-T notes** — first-hand host blocks for ATV, cycling, cooking, rafting
6. **TouristTrip enrichment** — ISO `duration`, clearer `areaServed` for ATV (Sedang)
7. **sameAs expansion** — Tumang operator + TripAdvisor (IG/FB kept). Skipped X/Twitter (handle 404)

## Still open / ops

- Re-run PageSpeed with `PAGESPEED_API_KEY` after deploy (CWV unknown in audit)
- Optional: claim/create real Sekar Bali Activity TripAdvisor or GMB URL for brand `sameAs` (do not invent)
- Optional SEO skill script fixes for multi-type `@type` arrays (auto-report false Critical on Organization)

## Do not do (unchanged)

- No FAQPage schema for commercial rich-result recovery
- No Wikipedia created solely for SEO
- No purchased AI citations

## Note on audit auto-report items (from #75 runner)

Machine `generate_report.py` listed “No Organization/Person entity” and Wikipedia/Wikidata `sameAs` gaps as Critical/Info. Organization already ships as `TravelAgency` + `LocalBusiness` (false Critical). Wikipedia/Wikidata remain optional and must not be created for SEO alone.
