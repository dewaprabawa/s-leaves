# SEO Action Plan — sekarbaliactivity.com

**Date:** 2026-09-05  
**Based on:** GSC export 2026-08-02 → 2026-09-02 + live verification (`FULL-AUDIT-REPORT.md`)  
**Overall priority:** Earn **commercial impressions + CTR** on money pages → fix zero-CTR blogs → protect brand/home

---

## Priority 0 — This week (Critical / Quick wins)

| # | Action | Evidence | Owner | Done when |
|---|--------|----------|-------|-----------|
| 0.1 | Add `seoDescription` ≤160 on **ATV** + **cooking** tours (same pattern as cycling) | Live metas 285 / 199 chars from `shortDescription` | Code (`src/data/tours.ts`) | ✅ Shipped 2026-09-05 |
| 0.2 | Rewrite SERP title + meta for `/blog/bali-temple-dress-code` | 69 imp / 0 clk / pos 27.6; title OK length but weak CTR | Content | ✅ Title/excerpt rewritten; monitor CTR |
| 0.3 | Rewrite SERP title + meta for `/blog/bali-airport-transfer-guide-dps-to-ubud` | 69 imp / 0 clk / pos 60.7; title **95 chars** | Content | ✅ Title ≤60 with brand template |
| 0.4 | Add 2–3 contextual internal links from temple-dress blog → ATV / cycling / cooking | Orphan crawl ≤1 inbound; commercial pages starved | Content | ✅ Links added; expand to more blogs next |
| 0.5 | Point all internal links at final cycling URL only (`/tours/ubud-ricefield-cycling-tour`) | Legacy `/tours/pejeng-cycling-tour` still has 7 GSC impressions via 308 | Code/content | ✅ No src hrefs to legacy; keep 308 in `next.config.ts` |

---

## Priority 1 — Next 2 sprints (Commercial visibility)

| # | Action | Why | KPI |
|---|--------|-----|-----|
| 1.1 | Strengthen `/blog/bali-atv-tour-ubud-guide` as ATV hub spoke (price table, inclusions, WhatsApp CTA, link to `/tours/bali-atv-adventure`) | Already pos ~8 with 34 imp / 1 click | ATV tour impressions ≥50 / 28d |
| 1.2 | Expand temple-dress article to **900–1,200 words** with first-hand Pejeng/Ubud temple visit notes (no AI filler) | Thin (~300 words) on competitive query | Position → top 20; CTR >3% |
| 1.3 | Publish/refresh **one** cycling spoke only if it adds operator-real info (Subak / Pejeng vs Tegallalang already exists — improve that page’s title/CTR instead of new thin posts) | Cycling money page has **2 impressions** | Cycling URL impressions ≥30 / 28d |
| 1.4 | Dirt-bike tour page: unique `seoTitle`/`seoDescription`, clearer H1/offer, photos | 32 imp / 0 clk / pos 24 | CTR >2% or prune if non-core |
| 1.5 | Brand query pack: GBP name consistency, homepage brand in title, review `sameAs` | `sekar bali` pos 6.9 / 0 clicks | Brand query CTR >10% |

---

## Priority 2 — Internal linking & IA

| # | Action | Evidence |
|---|--------|----------|
| 2.1 | From homepage + `/blog` index, add descriptive links to top GSC blogs (temple dress, airport, luwak ethical, ATV guide, Pejeng history) | 17 near-orphan blogs |
| 2.2 | Keep `/tours` → `/#adventures` redirect; do **not** create a thin duplicate tours index unless building a real unique hub | `/tours` 48 GSC imp via redirect target |
| 2.3 | Ensure sitemap lists only final tour slugs (already true) + no legacy pejeng-cycling URL | Sitemap check 2026-09-05 |

---

## Priority 3 — Measurement cadence

1. **Weekly GSC:** filter queries containing `atv`, `cycling`, `rice paddy`, `pejeng`, `cooking`, `rafting` — track impressions, CTR, position.
2. **Weekly pages:** homepage, ATV tour, cycling tour, cooking tour, temple dress, airport guide, ATV guide.
3. **Re-run PSI** (mobile) once API key available; record LCP / INP / CLS in this file.
4. **Countries:** watch US/AU/UK CTR separately — currently impressions without clicks.
5. When available: Search Console **AI Performance** vs classic Web (do not mix KPIs).

---

## Priority 4 — Keep doing (already green)

| Item | Status |
|------|--------|
| Homepage title ≤60 / meta ≤160 | ✅ |
| Cycling `seoTitle` / `seoDescription` + lunch-only truth | ✅ |
| Security headers / HSTS / AI crawler allow | ✅ |
| `llms.txt` / `pricing.md` discovery | ✅ |
| No FAQPage / HowTo schema | ✅ keep |
| http → https → www redirects | ✅ |

---

## Do NOT Do

| Item | Reason |
|------|--------|
| Mass new informational blogs (dress codes, airport, generic food) | Already consume impressions without commercial clicks |
| FAQPage / HowTo schema | Restricted / deprecated rich results |
| Thin AI doorway pages for cycling keywords | Mar/Jun 2026 spam risk |
| Re-expand homepage GEO FAQ DOM / keyword footer cloud | Prior density + HTML weight wins |
| Fork prices outside `tours.ts` / `pricing.ts` / `geoContent.ts` | Citation + SERP conflicts |
| Treat Discover tactics as Search ranking fixes | Discover ≠ Search (Feb 2026) |

---

## Suggested execution order (checklist)

- [x] 0.1 ATV + cooking `seoDescription` *(shipped 2026-09-05)*
- [x] 0.2 Temple dress title/meta CTR rewrite *(shipped 2026-09-05)*
- [x] 0.3 Airport guide title/meta shorten *(shipped 2026-09-05)*
- [x] 0.4 Internal links temple dress → cycling / cooking / ATV *(shipped 2026-09-05)*
- [x] 0.5 Kill legacy cycling internal links *(confirmed none in `src/`; 308 kept)*
- [ ] 1.1 ATV guide spoke hardening
- [ ] 1.2 Expand temple dress (first-hand)
- [ ] 1.3 Cycling spoke CTR / impressions lift
- [ ] 1.4 Dirt-bike page decision (optimize or de-emphasize)
- [ ] 1.5 Brand / GBP pack
- [ ] 2.x Orphan link pass
- [ ] 3.x Weekly GSC review started

---

## Success criteria (28 days after Priority 0–1)

| KPI | Baseline (this export) | Target |
|-----|------------------------|--------|
| Site clicks / 28d | 20 | ≥40 |
| Cycling tour impressions | 2 | ≥30 |
| ATV tour impressions | 12 | ≥50 |
| Temple dress CTR | 0% | ≥3% |
| Airport guide CTR | 0% | ≥2% **or** retarget/noindex if off-strategy |
| Brand `sekar bali` CTR | 0% | ≥10% |
