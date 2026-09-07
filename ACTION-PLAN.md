# Action Plan — Cycling & Combo Tours (SEO + GEO)

**Date:** 2026-09-07  
**Source audit:** `FULL-AUDIT-REPORT.md` (cycling + combo cluster)  
**Primary conversion:** WhatsApp booking  
**Do not:** Add FAQPage/HowTo schema; mass-publish thin Bali blogs; claim free pickup on non-cycling tours

---

## 0) Immediate blockers / critical

| ID | Action | Why | Owner signal | Done when |
|----|--------|-----|--------------|-----------|
| 0.1 | Keep `/tours/pejeng-cycling-tour` → `/tours/ubud-ricefield-cycling-tour` **308**; request GSC **URL Inspection** + “Request indexing” on the canonical ricefield URL | Legacy URL still 7 imp @ pos 7.86 vs canonical 2 @ 19.5 | Ops + Search Console | Canonical impressions rise; legacy fades |
| 0.2 | Remove or replace `youtubeVideoId: "dQw4w9WgXcQ"` on cycling / cooking / luwak in `src/data/tours.ts` | Placeholder rickroll ID is a trust/E-E-A-T landmine if ever rendered | Eng | No placeholder IDs in tour data |
| 0.3 | From Pejeng vs Tegallalang + worth-it + cycling guide: ensure **above-the-fold CTA** → `/tours/ubud-ricefield-cycling-tour` and secondary → combo blog or cooking tour | Money pages ≈0 clicks | Content | Each spoke has 2+ contextual money links |

---

## 1) Quick wins (high impact, low–medium effort)

| ID | Action | Impact | Effort |
|----|--------|--------|--------|
| 1.1 | Add **Cycling + Cooking Class** card to `/book` featured combos (and homepage culture strip) with IDR cycling + cooking totals, timeline, WhatsApp prefill for both | Closes product gap vs ubudcyclingtour / ByFood package SERPs | M | ✅ Done 2026-09-07 |
| 1.2 | Add **Balinese Cooking Class** as a primary section on `/book` (parity with cycling) | Cooking is only footer-linked today | S | ✅ Done 2026-09-07 |
| 1.3 | Rebuild **Pejeng vs Tegallalang** with H2/H3s + comparison table + lunch/pickup facts; expand to ~900–1,200 words | Best cycling foothold (9 imp @ ~9.6) is structurally weak for SEO/GEO | M |
| 1.4 | Expand combo itinerary post: fixed sample total (or clear “from IDR X when booked together”), seasonal harvest note, hotel→kitchen logistics after free cycling drop-off | Competitor package pages are deeper; agents need parseable totals | M |
| 1.5 | Homepage: add 1 contextual link to `/blog/ubud-ricefield-cycling-tour-guide-2026` near cycling card | Guide currently **0** homepage inlinks | S |
| 1.6 | Optional SERP CTR test on cycling title: keep ≤60 chars; test “Pejeng Rice Paddy Cycling \| Free Pickup” variants | Position ~19 needs CTR when impressions grow | S |

---

## 2) Strategic (high impact, more effort)

| ID | Action | Notes |
|----|--------|-------|
| 2.1 | Decide product model for culture combo: (A) featured WhatsApp package only, or (B) dedicated `/tours/cycling-cooking-class-ubud` with `TouristTrip` — **only if** unique copy, not a thin doorway | Prefer (A) first unless package is sold as one SKU |
| 2.2 | Collect **5–10 cycling / combo guest reviews** (name, month, Pejeng/ricefield/cooking specifics); surface on tour pages + schema `AggregateRating` only with real reviews | E-E-A-T tour score 43; empty `reviews: []` |
| 2.3 | Deepen worth-it + 2026 guide with first-hand Subak / house-visit / lunch restaurant detail (photos of own tours) | Beat commodity “best Bali cycling” AI pages |
| 2.4 | Third-party GEO: TripAdvisor/Google reviews in `sameAs` if profiles exist; optional short YouTube of real Pejeng ride (text layer: title, description, chapters) | Brand mentions > backlinks for AI citations |
| 2.5 | If mix-discount should apply to culture day, extend `combos.ts` carefully — today cycling is excluded by design; don’t break free-pickup pricing rules | Product decision |

---

## 3) GEO-specific checklist

| Check | Action |
|-------|--------|
| Keep AI bots allowed | Maintain robots allows for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended |
| Keep `llms.txt` / `pricing.md` synced | When prices change, update `geoContent.ts` + `pricing.ts` same day |
| Extractable answers | Keep 40–60 word answer blocks for “worth it?”, “price?”, “combo?” |
| No FAQPage | Visible FAQs OK; schema stays Question/Answer / Speakable only |
| Agent booking | Featured culture combo + clear IDR on `/book` and `/pricing.md` |

---

## 4) Measurement (14–28 days)

| KPI | Baseline (GSC 2026-08-02→09-02) | Target |
|-----|----------------------------------|--------|
| `/tours/ubud-ricefield-cycling-tour` | 2 imp / 0 clk / pos 19.5 | ≥30 imp; CTR ≥3% |
| `/tours/balinese-cooking-class` | 1 / 0 | ≥15 imp; CTR ≥3% |
| `/blog/pejeng-rice-terrace-cycling-vs-tegallalang` | 9 / 0 / pos 9.6 | CTR ≥2%; links driving tour sessions |
| `/blog/cycling-cooking-class-ubud-full-day-itinerary` | Not in top pages | Appear in GSC pages; assists WhatsApp |
| Queries | Mostly brand/Pejeng geo, not “rice paddy cycling” | Appear for mid-tail cycling + combo queries |

---

## 5) Explicit non-actions

- Do **not** create FAQPage or HowTo JSON-LD for commercial tour pages.
- Do **not** target Kintamani downhill / Tegallalang-only / “3 meals” claims.
- Do **not** buy AI citations or spam Reddit/Wikipedia for GEO.
- Do **not** cross-locale hreflang until real translated pages exist.

---

## Priority order (execute)

1. ~~0.2 placeholder YouTube cleanup~~ (still open — see 0.2)
2. ~~1.1–1.2 book/homepage culture combo + cooking section~~ ✅
3. 1.3 Pejeng vs Tegallalang restructure  
4. 1.4 combo blog deepen + 0.1 GSC consolidation  
5. 2.2 reviews → E-E-A-T  
6. 2.3–2.4 authority / video / third-party  
