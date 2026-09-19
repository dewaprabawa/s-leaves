# SEO + GEO Audit — Cooking Class & Mount Batur Sunrise Jeep

**Audit date:** 2026-09-19  
**Scope:** Focused two-page audit (not full-site). Live HTML + repo source for:

- https://www.sekarbaliactivity.com/tours/balinese-cooking-class
- https://www.sekarbaliactivity.com/tours/batur-sunrise-jeep-tour

Supporting GEO surfaces: `/llms.txt`, `/pricing.md` generators (`src/data/geoContent.ts`, `src/data/jeepGeo.ts`, `src/data/cookingGeo.ts`), jeep/cooking blogs, homepage FAQ/JSON-LD.

**Business type:** Local tour operator (Ubud / Pejeng / Kintamani).  
**Method:** `seo-audit` + `seo-geo` + `seo-page` rubric (`llm-audit-rubric.md`). Scripts: `fetch_page.py`, `parse_html.py`, `readability.py`, `robots_checker.py`, `llms_txt_checker.py`, `social_meta.py`, `security_headers.py`, `redirect_checker.py`, `pagespeed.py`.  
**Operator fact used in this audit:** Mount Batur sunrise jeep does **not** include meals and does **not** serve food on the jeep.

**Overall rating:** Needs Improvement (score band 70–79)  
**Score confidence:** Medium (live HTML + repo confirmed; Core Web Vitals unknown — PageSpeed API rate-limited)

### Top 3 issues
1. **Critical (jeep, live + repo before this PR):** AI-extractable copy said breakfast is included and “served on top of the jeep.” That is false. Live page had ~50 “breakfast” mentions; `/llms.txt` repeated it.
2. **Warning (jeep SERP):** Title `From IDR 750K` is the 3+ group rate only. Solo is IDR 1,350,000 — CTR bait risk.
3. **Warning (jeep cluster):** Money-page links and homepage cards point at `/blog/mount-batur-jeep-vs-sunrise-trek` and `/blog/mount-batur-sunrise-jeep-tour-guide-2026`, while `src/data/blog.ts` ships `mount-batur-jeep-vs-trekking` and `mount-batur-sunrise-jeep-tour-price-guide-2026`. Duplicate keys in `tourGuides.ts` made one jeep guide set overwrite the other.

### Top 3 opportunities
1. Publish the corrected “meals not included / no food on the jeep” fact on every GEO surface (this PR).
2. Keep cooking’s extractable price / pickup / chef / max-8 block; add missing spokes (worth-it, vegetarian, market vs afternoon).
3. Replace Unsplash jeep heroes with first-party crater-rim photos + inject jeep `Question`/`Answer` JSON-LD (this PR injects the schemas).

---

## A) Audit summary

| Page | Live 200 | Title | Meta | Words (parse) | GEO block live? |
|------|----------|-------|------|---------------|-----------------|
| Cooking class | Yes | 46 chars — pass | 149 chars — pass | 1,556 | Yes (`#cooking-geo`) |
| Sunrise jeep | Yes | 49 chars (old title bait) | ~160, falsely includes breakfast | 1,663 | **No** on live HTML (repo has `JeepGeoBlock`) |

Sitewide technical baseline (homepage / robots): HTTPS, HSTS, CSP, sitemap referenced, AI crawlers explicitly allowed, `/llms.txt` 200 (quality 100/100), `/llms-full.txt` present.

This PR corrects the jeep meal claim in tour, GEO, homepage, blogs, and product-marketing copy. Live citations will stay wrong until deploy.

---

## B) Findings table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GEO / Content (jeep) | Critical | Confirmed | False inclusion: breakfast served on the jeep | Live FAQ “Is breakfast included? Yes…”; included list; itinerary “Breakfast on Top”; `llms.txt` tour summary; `JEEP_GEO_FAQS` | State meals are **not** included; keep the question so AI can cite the No |
| On-page (jeep) | Warning | Confirmed | SERP title uses 3+ floor as “from” price | Live `<title>Mount Batur Sunrise Jeep \| No Hike, From IDR 750K</title>` | Use a non-bait title (this PR: `No Hike, Island Pickup`) |
| Content (jeep) | Warning | Confirmed | Stock Unsplash gallery, not operator photos | Live HTML: `unsplash.com` 56 hits; cooking uses `/images/cooking/*` | Swap in first-party jeep photos |
| Technical (jeep) | Warning | Confirmed | Duplicate `pickup` key + duplicate `buildJeepWebPageSchema` | `tours.ts` had two `pickup` fields; `page.tsx` declared the schema function twice | Keep one pickup string; merge schema (speakable + blog links) |
| Schema (jeep) | Warning | Confirmed | `buildJeepQaSchemas()` never rendered | Function exists; only cooking QA scripts injected | Inject jeep QA JSON-LD (this PR) |
| IA / links (jeep) | Warning | Confirmed | Split jeep blog slugs + overwritten guide list | `TOUR_RELATED_GUIDES['batur-sunrise-jeep-tour']` declared twice; live vs-trek URL exists, local `blog.ts` uses vs-trekking | One guide list; link to slugs that exist in `blog.ts` |
| GEO (cooking) | Pass | Confirmed | Extractable price, chef, max 8, free Ubud pickup, market vs PM | Live GEO TLDR + price table + 8 Q&As; parse H2 “facts AI can cite” | Keep facts in sync with Tumang promo IDR |
| On-page (cooking) | Pass | Confirmed | Title/meta/H1/canonical aligned | Title 46; meta 149; H1 “Tumang Bali Cooking Class near Ubud”; canonical self | None required |
| Images (cooking) | Pass | Confirmed | First-party photos with descriptive alt | `/images/cooking/satay-class.jpg` etc.; all gallery alts present | Optional: explicit width/height for CLS |
| Content (cooking) | Warning | Likely | Cluster gaps vs plan | Backlog: worth-it 2026, vegetarian menu, market vs afternoon not in `blog.ts` slugs | Add 2–3 spoke articles linking to money page |
| Authority (both) | Warning | Likely | Thin third-party entity graph | Organization `sameAs` Instagram/Facebook only; jeep has no TripAdvisor/YouTube layer | Add verified GBP / review URLs when real |
| Performance | Info | Hypothesis | CWV not measured this run | `pagespeed.py` returned API rate-limit; no CrUX | Re-run PSI with key; watch LCP on Unsplash jeep hero |
| Schema policy | Pass | Confirmed | No commercial `FAQPage` / `HowTo` | Cooking uses standalone `Question`/`Answer`; jeep now matches | Do not add FAQPage for rich results |

---

## Category scores (rubric)

Weights: Technical 25% · Content 20% · On-page 15% · Schema 15% · Performance 10% · Images 10% · GEO 5%.

### Cooking class — 78/100 (Good)

**Technical 80.** + index/follow, self-canonical, 200 no redirects, SSR GEO. − optional og:locale / twitter:site.  
**Content 78.** + 1,556 words, named chef, IDR table, pickup, vegetarian FAQ, first-hand kitchen note. − partner-listing E-E-A-T (Tumang vs Sekar) needs the existing disclosure. Flesch 49.4 (educated audience).  
**On-page 82.** Title/meta/H1/URL/keyword alignment. Duplicate GEO + page FAQ headings are intentional for citability.  
**Schema 88.** TravelAgency + TouristTrip/Product offers + Breadcrumb + speakable + Question/Answer. 30 JSON-LD blocks is heavy but valid.  
**Performance: Insufficient data.**  
**Images 80.** Real class photos, alts present; fill images omit width/height attributes.  
**GEO 86.** Strong TLDR (~50–60 words), price table, query-shaped H3s, listed in `llms.txt`.

> Score of 78 reflects extractable cooking facts and first-party media (+), penalized by missing cluster spokes and partner-identity nuance (Warning×2).

### Sunrise jeep — 54/100 live (Poor) → 74/100 in this PR (Good)

**Live penalties (Critical −15):** false breakfast inclusion across money page, FAQs, itinerary, host note, `llms.txt`, blogs.  
**After this PR:** facts flipped to “meals not included / food not served on the jeep”; title bait removed; jeep QA schema injected; duplicate pickup/schema/guides cleaned.

**Technical 78** (post-fix).  
**Content 76** (post-fix; still Unsplash, still two jeep-compare slugs in the wild).  
**On-page 78** (post-fix title 49 / meta 148).  
**Schema 82** (post-fix; speakable + QA).  
**Performance: Insufficient data.**  
**Images 50.** Stock Unsplash, hero duplicated in gallery.  
**GEO 80** (post-fix answer is now citable and true).

> Live score of 54 is driven by the breakfast Critical (−15) plus title bait and stock images. Repo score of 74 after this PR assumes deploy.

**Combined focus score (live):** ~66 (Needs Improvement)  
**Combined focus score (this PR):** ~76 (Good)

---

## Detailed findings

### 1. Jeep meals — Critical GEO error (operator-confirmed)

**Finding:** Guests are told breakfast is included and served on the jeep. Operator: we do **not** provide food on the jeep; meals are **not** included.

**Evidence (live 2026-09-19):**
- Meta: “Hot drink, breakfast on top, hotel pickup included.”
- Highlight: “Hot drink en route + breakfast served on top”
- H3 “Sunrise & Breakfast on Top”; itinerary “Breakfast on Top”
- Included: “Breakfast served on top of the jeep”
- FAQ: “Is breakfast included? Yes — a simple breakfast is served on top of the jeep…”
- Host note + `/llms.txt` tour summary + pricing includes line

**Impact:** Google and ChatGPT/Perplexity will cite a false inclusion. That is a trust, refund, and review risk — worse than a missing keyword.

**Fix (this PR):** Flip every inclusion surface to: hotel pickup + hot drink + entrance + insurance included; **meals not included; food not served on the jeep.** Keep the “Is breakfast included?” question with a direct **No**.

Hot drink stays included (operator specified *eat* / meals, not drinks).

### 2. Jeep SERP title bait — Warning

**Finding:** `From IDR 750K` is only the 3+ sharing rate.

**Evidence:** Live title; money-page chip already lists solo 1.35M / 2 pax 825K / 3+ 750K.

**Impact:** Misleading SERP snippets; possible poor reviews / Quality Rater “misleading” signal.

**Fix:** This PR uses `Mount Batur Sunrise Jeep | No Hike, Island Pickup` (49 chars).

### 3. Jeep GEO block missing on live — Warning

**Finding:** Repo renders `<JeepGeoBlock />`; live HTML has no `jeep-geo` / `geo-tldr`. Cooking’s block **is** live.

**Evidence:** `parse_html.py` — cooking `geo-tldr True`; jeep `geo-tldr False`. Live H2 starts at “About This Experience”; local H2 is “About the Mount Batur Sunrise Jeep Tour”.

**Impact:** Cooking is more citable than jeep on the live site. Deploy this branch to close the gap **with corrected facts**.

### 4. Cooking class — largely healthy

**Pass signals:**
- Unique title with money modifier (`450K`, free pickup, Tumang)
- H1 includes “Cooking Class” + “Ubud”
- Promo vs was-price visible (IDR 450,000 / 506,370)
- Complimentary Ubud pickup in chips, includes, FAQs, GEO
- Named chef (Wayan Sudiana), max 8, 10+ dishes, AM market vs PM
- Vegetarian / vegan FAQ
- First-party gallery + TripAdvisor Traveler’s Choice 2026
- `/book?activity=balinese-cooking-class` deep link
- Speakable CSS + Question JSON-LD

**Remaining gaps:**
- No dedicated “worth it 2026” / vegetarian / market-vs-afternoon spokes in `blog.ts` (plan still open)
- Homepage jeep cards still linked to slugs that may 404 in some deploys
- Rafting/tubing FAQs still under-state cooking free pickup (out of this PR’s meal-fix scope)

### 5. Images

| Page | First-party? | Alt | Notes |
|------|--------------|-----|-------|
| Cooking | Yes | Descriptive | Priority hero; lazy gallery |
| Jeep | No (Unsplash) | Descriptive | Same photo as hero + first gallery item; CLS: fill images without width/height |

### 6. Readability

| Page | Flesch | Grade | Notes |
|------|--------|-------|-------|
| Cooking | 49.4 | 10.6 | Acceptable for a detailed class page |
| Jeep | 64.6 | 9.4 | Clearer; long pricing sentence is fine |

### 7. Environment limitations

- PageSpeed / CrUX: **not measured** (API rate-limited). Do not treat LCP/INP/CLS as confirmed.
- Live ChatGPT / Perplexity / AI Overview citation scrape: **not run**. GEO scores are readiness, not observed share of voice.
- `article_seo.py` crashed on `@type` arrays (`unhashable type: list`) — not a site defect.

---

## C) Prioritized action plan

See `ACTION-PLAN.md`.

## D) Unknowns and follow-ups

1. Confirm whether a hot drink is still offered (kept as included).
2. Re-run PSI mobile on both URLs after deploy.
3. Monthly prompt check: “Is breakfast included on Mount Batur jeep?” must return **No** from this domain.
4. Decide canonical jeep-compare slug (`vs-sunrise-trek` vs `vs-trekking`) and 301 the other.
5. Cooking: publish worth-it / vegetarian spokes when ready.
