# SEO Action Plan — Luwak Coffee Plantation (Umah Kuno)

**Source audit:** `FULL-AUDIT-REPORT.md` (2026-09-09)  
**URL:** https://www.sekarbaliactivity.com/tours/luwak-coffee-plantation  
**Status:** Implementation in progress on `cursor/luwak-coffee-seo-fixes-e817` (includes 800k price commits)

## 1) Immediate blockers

| # | Action | Status |
|---|--------|--------|
| 1 | Merge & deploy price + SEO fixes so live shows **IDR 800,000** | Ready for review (this PR) |
| 2 | Post-deploy spot-check live HTML + JSON-LD for `800000` / “IDR 800” | After merge |

## 2) Quick wins

| # | Action | Status |
|---|--------|--------|
| 3 | Fix `durationToIso` → `1.5 Hours` = **`PT1H30M`** | Done |
| 4 | Remove YouTube `dQw4w9WgXcQ` placeholders (Luwak + cycling) | Done |
| 5 | Compress `/coffee.jpg` (~122KB) + OG width/height | Done |
| 6 | `pricing.md` / `llms.txt` list Luwak at **IDR 800,000** via GEO_PRICING | Done (ships with price commits) |

## 3) Strategic improvements

| # | Action | Status |
|---|--------|--------|
| 7 | Page-scoped `WebPage` schema for all tours (incl. Luwak) | Done |
| 8 | Move GEO `Question` + homepage `WebPage`/`ItemList` off global layout → homepage only | Done |
| 9 | Luwak keywords + `geo.placename` Tampaksiring/Ubud | Done |
| 10 | Re-run PageSpeed / CWV polish | Pending (API rate limits; hero already compressed) |

## 4) Do not do

- Do **not** add `FAQPage` or `HowTo` schema.
- Do **not** buy/manipulate AI Overview citations.
