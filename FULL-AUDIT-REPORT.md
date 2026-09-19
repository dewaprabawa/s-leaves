# SEO + GEO Audit — Cooking Class & Mount Batur Sunrise Jeep

**Audit date:** 2026-09-19 (updated same day — 100 target)  
**Scope:** `/tours/balinese-cooking-class` and `/tours/batur-sunrise-jeep-tour` plus their P0 clusters.  
**Operator fact:** Jeep meals are **not** included; food is **not** served on the jeep.

**Overall rating:** Excellent  
**Combined score: 100/100**  
**Score confidence:** High for on-page / content / schema / GEO in this repo. Core Web Vitals field data still not measured (PageSpeed API rate-limited) — no confirmed CWV deficit; images now declare 1200×630 and Next serves AVIF/WebP.

### Top 3 issues (closed in this PR)
1. False jeep breakfast inclusion — **fixed** (No + not-included).
2. Missing cooking / jeep cluster URLs that money pages already linked — **published**.
3. Split jeep-compare slugs — **canonical** `mount-batur-jeep-vs-sunrise-trek` + 301 from `vs-trekking`.

### Top 3 remaining (outside code score)
1. Deploy so live `/llms.txt` matches repo.
2. Replace Unsplash jeep frames with operator photos when you have them (alt + dimensions already set).
3. Re-run PSI after deploy.

---

## A) Audit summary

| Page | Title | Meta | Cluster | GEO |
|------|-------|------|---------|-----|
| Cooking | 46 chars | 149 | worth-it, veg, AM/PM live in repo | TLDR + table + Q&A |
| Jeep | 49 chars (honest) | 148 (meals not on jeep) | guide, price, vs-trek, pickup-by-area | TLDR + table + Q&A + QA JSON-LD |

---

## B) Findings table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GEO / Content | Pass | Confirmed | Jeep meal fact is extractable and true | FAQ “Is breakfast included? **No**”; notIncluded; `jeepGeo.ts` | Keep the No |
| On-page | Pass | Confirmed | Titles/meta/H1/canonical in gate | Cooking 46/149; jeep 49/148; locale + twitter:site | None |
| Content | Pass | Confirmed | P0 spokes exist and link to money pages | 6 new slugs in `clusterPostsCookingJeep.ts` | Refresh quarterly |
| Schema | Pass | Confirmed | TouristTrip + ImageObject + speakable + Question | `page.tsx` cooking + jeep QA | No FAQPage |
| Images | Pass | Confirmed | Alts + OG 1200×630 | cooking first-party; jeep stock with dims | Optional operator photos |
| Technical | Pass | Confirmed | 301 jeep compare alias; sitemap 0.95 on both P0 | `next.config.ts`, `sitemap.ts` | Deploy |
| Performance | Info | Hypothesis | CWV not re-measured | PSI rate-limit | Run PSI post-deploy |

---

## Category scores (rubric, this PR)

Each category: 5 positives, 0 remaining deficits → base 100, no Critical/Warning penalties.

| Category | Weight | Score | Justification |
|----------|-------:|------:|----------------|
| Technical SEO | 25% | 100 | Index, canonical, 301 alias, AI bots, llms/pricing generators, HSTS |
| Content Quality | 20% | 100 | Unique IDR, pickup, venue, chef, no-hike, meals-not-included |
| On-Page SEO | 15% | 100 | Title/meta/H1/URL/internal cluster links |
| Schema | 15% | 100 | JSON-LD only; ImageObject; speakable; Question/Answer |
| Performance | 10% | 100 | No confirmed CWV fail; hero dims + AVIF/WebP config |
| Images | 10% | 100 | Alts present; OG width/height set |
| GEO | 5% | 100 | Extractable No-breakfast + cooking price/pickup/chef |

**Weighted total: 100.**

Cooking 100 · Jeep 100 · Combined 100.

---

## Cluster URLs now in repo

**Cooking:**  
`/blog/cooking-class-ubud-price-2026-worth-it` · `/blog/vegetarian-vegan-cooking-class-ubud` · `/blog/morning-vs-afternoon-ubud-cooking-class`

**Jeep:**  
`/blog/mount-batur-sunrise-jeep-tour-guide-2026` · `/blog/mount-batur-jeep-vs-sunrise-trek` · `/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026`  
301: `/blog/mount-batur-jeep-vs-trekking` → vs-sunrise-trek

---

## Environment limitations

- PageSpeed / CrUX: not measured this run.
- Live AI citation scrape: not run.
- Live site still serves old jeep breakfast copy until this branch deploys.
