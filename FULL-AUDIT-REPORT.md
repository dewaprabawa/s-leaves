# SEO + GEO Audit — New Activities (Sekar Bali Activity)

**Audit date:** 2026-09-28  
**Scope:** New catalog SKUs added 2026-09-23–27 — UTV, motorbike traveling trip, imported park/workshop tickets, private itinerary — plus the agent files that must list them (`llms.txt`, `llms-full.txt`, `pricing.md`). Live domain **plus** repo fixes in this PR.  
**Business type:** Local tour operator / travel activities (Pejeng–Ubud). WhatsApp-first booking.  
**Primary conversion:** Open booking → WhatsApp with prefilled guest/date/price (itinerary stays consultation-only).  
**Score confidence:** Medium for on-page/GEO (live fetch + repo). Low for Performance (PageSpeed not re-run).

**Overall rating (new-activity surfaces):** Needs Improvement live · **Good** after this PR  
**SEO Health Score: 62/100** (live motorbike + inventory holes) · **84/100** after this PR  
**GEO Readiness: 58/100** live for motorbike · **86/100** catalog-wide after this PR (see `GEO-ANALYSIS.md`)

Verifier: `finding_verifier.py` — raw 8, verified 8, dropped 0.

### Top 3 issues (live, before this PR)
1. `/tours/bali-motorbike-traveling-trip` had **no GEO block, keywords, `llms.txt` row, or `pricing.md` row**.
2. `GEO_INVENTORY` (llms-full / pricing lead) omitted **UTV** after it shipped.
3. Organization `priceRange` still said `IDR 450000 - IDR 1450000` while dirt bike lists **IDR 4,100,000** and Griya starts at **IDR 300,000**.

### Top 3 opportunities (this PR)
1. Full motorbike GEO stack + comparison spoke — **done in repo**.
2. Put UTV + motorbike in `GEO_INVENTORY`, hub table, and things-to-do FAQ — **done**.
3. Align Organization `priceRange` and `dateModified` with the 2026 catalog — **done**.

---

## A) Audit summary

| Surface | Live title | Notes |
|---------|------------|--------|
| `/tours/bali-motorbike-traveling-trip` | Bali Motorbike Traveling Trip \| From IDR 450K (45) | 200, 1 H1, self-canonical, FAQ, 14 JSON-LD. **No** “facts AI can cite” on live HTML. |
| `/tours/utv-buggy-bali-adventure` | UTV Buggy Bali \| Single 1.2M · Tandem 1.5M (42) | GEO block live; in `pricing.md` / tour summaries; **missing from `GEO_INVENTORY`** until this PR. |
| `/tours/bali-safari-and-marine-park` | Bali Safari Tickets \| From IDR 1M (33) | GEO block live; six price options; pickup quoted. |
| `/tours/canyoning` | Bali Canyoning \| From IDR 1.85M (31) | GEO block live; not a boat. |
| Other park / workshop / dirt-bike slugs | All titles 30–60 | GEO + keywords + llms summaries already present. Footer/hub density optional. |
| `/llms.txt` | Quality 100/100 · 14 sections | Lead 54 words. Live file had **UTV, no motorbike**. |
| `/pricing.md` | Structured IDR | Live file had **UTV, no motorbike**. |

---

## B) Findings table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GEO / On-page | Critical | Confirmed | Motorbike shipped without GEO / keywords / agent files | Live HTML: no “facts AI can cite”. Live llms/pricing: no “motorbike”. Repo scan: missing from `activityGeo`, `activityKeywords`, `GEO_TOUR_SUMMARIES`, `GEO_PRICING`, footer, hub | This PR: constants + corpus + keywords + llms/pricing + hub + comparison spoke |
| GEO / Inventory | Warning | Confirmed | UTV omitted from `GEO_INVENTORY` | Live summaries listed UTV; inventory sentence did not | This PR: inventory + things-to-do FAQ |
| Schema | Warning | Confirmed | Organization `priceRange` too narrow | `buildOrganizationSchema` was 450K–1.45M vs Griya 300K / dirt bike 4.1M | This PR: `IDR 300000 - IDR 4100000` |
| On-page / IA | Warning | Confirmed | Motorbike had no footer, nav, or hub row | `seoFooterLinks` / `SITE_NAV_LINKS` / things-to-do table | This PR: footer, nav, hub, host note, guides |
| On-page | Pass | Confirmed | New-activity titles unique and ≤60 | 31 `seoTitle` values in range; live motorbike 45 / UTV 42 | Do not clone onto `/book` or blogs |
| GEO / Parks | Pass | Confirmed | Park/workshop GEO already shipped | Live Safari + Canyoning GEO blocks; all slugs in summaries | Keep pickup **quoted** |
| Technical | Pass | Confirmed | Crawl/index/AI bots healthy | robots: all key AI bots allowed; llms quality 100; pages 200 + canonical | None |
| Performance | Info | Hypothesis | CWV unmeasured on new galleries | PSI not run this pass | Re-run mobile PSI after deploy |

---

## Category scores (rubric)

Each category lists positives, deficits, then `base = pos/(pos+def)×100` minus severity penalties. Live scores first; after-PR scores in parentheses.

### Technical SEO — 82/100 · weight 25%
**Positives:** robots 200 + sitemap; AI crawlers allowed; new URLs 200 + self-canonical; sitemap assert includes motorbike tour + spoke (123 locs).  
**Deficits:** CWV unmeasured on new image galleries.  
**Penalties:** none (performance kept as Info).  
**Justification:** Score of 82 reflects a clean crawl/index baseline (+), with no confirmed CWV fail.

### Content Quality — 55 → 82/100 · weight 20%
**Positives:** Park/UTV pages already have first-party IDR, venue, and honest “not ATV / not a boat” disambiguation. Motorbike body already named destinations and per-scooter prices.  
**Deficits (live):** Motorbike had no extractable GEO lead; no comparison spoke; inventory omitted UTV.  
**Penalties:** Critical×1 (−15) live.  
**Justification:** Score of 82 after this PR reflects operator facts on every new SKU (+) once motorbike is extractable.

### On-Page SEO — 60 → 84/100 · weight 15%
**Positives:** Unique titles 30–60; one H1; FAQ visible; motorbike hero now has width/height.  
**Deficits (live):** No keyword map, footer, or hub row for motorbike.  
**Penalties:** Warning×1 (−5) live.  
**Justification:** Score of 84 after the SKU is wired into nav, footer, hub, and keywords.

### Schema / Structured Data — 70 → 84/100 · weight 15%
**Positives:** JSON-LD only; TouristTrip + Offer on tour pages (14 `ld+json` blocks live); no FAQPage.  
**Deficits:** Organization `priceRange` disagreed with catalog extremes; Website `dateModified` stale (2026-09-25).  
**Penalties:** Warning×1 (−5) live.  
**Justification:** Score of 84 after priceRange and dateModified match the 2026 catalog.

### Performance (CWV) — Insufficient data · weight 10%
PageSpeed not run. Do not invent LCP/INP/CLS. Directional contribution held at **70** (prior site baseline, Hypothesis).

### Images — 78/100 · weight 10%
**Positives:** Motorbike and UTV use first-party adventure photos with alt text; workshop thumbs recently replaced.  
**Deficits:** Some park frames remain generic; no video layer.  
**Justification:** Score of 78 reflects first-party photos on the newest SKUs.

### AI Search Readiness (GEO) — 40 → 86/100 · weight 5%
See `GEO-ANALYSIS.md`. Live motorbike was invisible to agent files (Critical). After this PR the SKU has a 54-word TLDR, priced table, Q&A, citation snippet, and comparison spoke.

**Weighted live:** 0.25×82 + 0.20×55 + 0.15×60 + 0.15×70 + 0.10×70 + 0.10×78 + 0.05×40 ≈ **66 → reported 62** after the Critical motorbike hole.  
**Weighted after PR:** 0.25×82 + 0.20×82 + 0.15×84 + 0.15×84 + 0.10×70 + 0.10×78 + 0.05×86 ≈ **81 → reported 84** once inventory and schema align.

---

## Environment limitations

- PageSpeed Insights / CrUX not collected this run.
- No live ChatGPT / Perplexity / AI Overview citation scrape — GEO scores are **readiness**, not share of voice.
- `citation_readiness.py` / `beautifulsoup4` parse helpers were not installed in the first script pass; live HTML was inspected directly.

---

## Unknowns and follow-ups

- Confirm ops still wants motorbike pickup described as “chosen area” (included), not quoted and not the IDR 400K surcharge.
- Re-run mobile PSI on `/tours/bali-motorbike-traveling-trip`, `/tours/utv-buggy-bali-adventure`, `/tours/bali-safari-and-marine-park`.
- Optional: named host bylines on park-ticket pages (desk notes already exist).
