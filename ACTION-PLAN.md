# SEO Action Plan — Luwak Coffee Plantation (Umah Kuno)

**Source audit:** `FULL-AUDIT-REPORT.md` (2026-09-09)  
**URL:** https://www.sekarbaliactivity.com/tours/luwak-coffee-plantation

## 1) Immediate blockers

| # | Action | Impact | Effort | Type |
|---|--------|--------|--------|------|
| 1 | **Merge & deploy [PR #90](https://github.com/dewaprabawa/s-leaves/pull/90)** so UI, `Offer.price`, FAQ, GEO, `seoTitle`/`seoDescription` all show **IDR 800,000** | Stops wrong-price indexing & AI citations | Low | Quick win |
| 2 | After deploy, **spot-check** live HTML + JSON-LD for `800000` / “IDR 800” and request indexing if needed | Confirms cache freshness | Low | Quick win |

## 2) Quick wins (this week)

| # | Action | Impact | Effort | Type |
|---|--------|--------|--------|------|
| 3 | Fix `durationToIso` in `src/app/(frontend)/tours/[slug]/page.tsx` so `1.5 Hours` → **`PT1H30M`** (not `PT5H`) | Schema accuracy | Low | Quick win |
| 4 | Remove or replace `youtubeVideoId: "dQw4w9WgXcQ"` placeholders (Luwak + cycling) | Trust / E-E-A-T | Low | Quick win |
| 5 | Compress `/coffee.jpg` (&lt;200KB WebP/AVIF) and set OG `width`/`height` | LCP + social preview | Low–Med | Quick win |
| 6 | Confirm live `/pricing.md` and `/llms.txt` list **Luwak Coffee Plantation (Umah Kuno) — IDR 800,000** | GEO / AEO | Low (after #1) | Quick win |

## 3) Strategic improvements

| # | Action | Impact | Effort | Type |
|---|--------|--------|--------|------|
| 7 | Add **page-scoped `WebPage` schema** for Luwak (and other tours missing it), mirroring jeep/cooking | Clearer entity graph | Med | Strategic |
| 8 | Scope sitewide GEO `Question` JSON-LD so ATV Q&A is not emitted on coffee URLs | Topical focus | Med | Strategic |
| 9 | Add Luwak-specific `keywords` + `geo.placename` (Tampaksiring/Ubud) in `generateMetadata` | On-page relevance | Low–Med | Strategic |
| 10 | Re-run PageSpeed (mobile) with API key; fix any LCP/INP issues tied to hero/JS | CWV | Med | Strategic |

## 4) Do not do

- Do **not** add `FAQPage` schema for commercial rich results (restricted; FAQ rich results retired).
- Do **not** add `HowTo` schema (deprecated).
- Do **not** buy/manipulate AI Overview citations.

## 5) Execution order

1. Ship price PR #90 → verify live 800k  
2. Patch `durationToIso` + remove Rick-Roll YouTube IDs  
3. Optimize `coffee.jpg` + OG dimensions  
4. Page-scoped WebPage + GEO Q&A scoping  
5. PSI follow-up and CWV polish  

## 6) Environment limitations

- PageSpeed Insights API rate-limited during audit — treat performance score as **unknown**.
- `article_seo.py` / `finding_verifier.py` failed on script bugs — findings verified manually against fetched HTML.
