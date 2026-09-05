# SEO Full Audit Report — sekarbaliactivity.com

**Audit date:** 2026-09-05  
**Scope:** GSC performance audit (Web search, 2026-08-02 → 2026-09-02) + live technical/on-page verification  
**URL:** https://www.sekarbaliactivity.com  
**Source data:** `gsc-export-2026-08-02_2026-09-02.json` (uploaded Search Console export)  
**Business type:** Local adventure tour operator (Ubud / Pejeng, Bali)  
**Score confidence:** Medium (GSC Confirmed; PageSpeed API rate-limited this run)

---

## A) Audit Summary

| Metric | Value |
|--------|-------|
| Overall rating | **Needs Improvement (52/100)** — discoverability growing, commercial intent still weak |
| Period clicks | **20** |
| Period impressions | **455** |
| Avg position (days with data) | **~30.4** |
| Site CTR | **4.4%** (20/455) |
| Homepage CTR | **12.7%** at avg position **4.75** (healthy) |
| Money-page tour clicks | **0** across indexed tour URLs |

### Top 3 issues
1. **Commercial pages are almost invisible** — cycling money page has only **2 impressions**; ATV tour **12**; cooking **1**. Blog informational URLs absorb most impressions.
2. **High-impression blogs have 0% CTR** — temple dress (69 imp), airport transfer (69 imp), spices/food/luwak clusters rank but do not convert to clicks.
3. **Thin blog content + weak internal linking** — temple-dress page ~300 words; 17 blog URLs are near-orphans (≤1 inbound internal link from homepage crawl).

### Top 3 opportunities
1. **CTR rewrites** on temple dress + airport transfer (titles truncated; positions 27–61).
2. **Internal-link spokes → money pages** from those blogs into ATV / cycling / cooking / WhatsApp book flows.
3. **Add `seoDescription` (≤160)** on ATV + cooking tours (live metas are 285 / 199 chars from `shortDescription`).

---

## B) GSC Performance Snapshot (Confirmed)

### Trend
| Week | Clicks | Impressions |
|------|--------|-------------|
| 2026-W31 | 6 | 90 |
| 2026-W32 | 1 | 153 |
| 2026-W33 | 2 | 56 |
| 2026-W34 | 1 | 59 |
| 2026-W35 | **10** | **97** |

**Sep 2 spike:** 7 clicks / 63 impressions / avg position 3.0 — early positive signal after recent SEO deploys; too early to call durable.

### Channel mix
| Slice | Clicks | Impressions | Notes |
|-------|--------|-------------|-------|
| Homepage (`/`) | 10 | 79 | Best CTR + position |
| Blog URLs | 6 | ~429* | Impressions dominate; CTR near zero on top URLs |
| Tour URLs | 0 | 115 | Includes `/tours` (redirects to `/#adventures`) + legacy paths |
| `http://sekarbaliactivity.com/` | 4 | 4 | Redirects correctly to https www — brand/nav noise |

\*Page-row impressions can exceed chart totals due to GSC row sampling / multi-dimension export.

### Devices
| Device | Clicks | Impressions | CTR | Avg position |
|--------|--------|-------------|-----|--------------|
| Desktop | 16 | 304 | 5.3% | **42.2** |
| Mobile | 4 | 151 | 2.7% | **10.0** |

Desktop sees more volume but much deeper average position (informational long-tail). Mobile ranks better but converts fewer clicks in this window.

### Countries (impressions leaders)
Indonesia (17 clk / 147 imp) dominates clicks. US (70), India (45), Australia (32), UK (25) show **impressions without clicks** — SERP relevance/CTR gap for English traveler queries.

### Search appearance
Product snippets: **5 impressions, 0 clicks, position 22** — schema eligibility exists but no CTR yet.

### Query themes (top impression drivers)
| Theme | Example queries | Signal |
|-------|-----------------|--------|
| Temple dress / etiquette | `what to wear in bali temples` (20 imp, pos 41) | Informational, deep SERP |
| Luwak / food / spices | `luwak coffee`, `traditional balinese food`, `base genep` | Soft brand adjacency; not booking intent |
| Brand | `sekar bali` (8 imp, pos **6.9**, 0 clicks) | Brand SERP underperforming CTR |
| Airport / Ubud transfer | many DPS→Ubud variants | Guides rank deep (pos 60+) |
| Cycling / ATV commercial | almost absent in query table | Money keywords not yet earning impressions |

**Query-level clicks:** none attributed (GSC privacy anonymization at low volume). Page-level clicks still usable.

### Highest-impression pages (problem set)
| Page | Clicks | Imp | CTR | Pos | Verdict |
|------|--------|-----|-----|-----|---------|
| `/` | 10 | 79 | 12.7% | 4.8 | ✅ Keep / protect |
| `/blog/bali-temple-dress-code` | 0 | 69 | 0% | 27.6 | ⚠️ CTR + depth rewrite |
| `/blog/bali-airport-transfer-guide-dps-to-ubud` | 0 | 69 | 0% | 60.7 | ⚠️ Thin + off-offer; deepen or retarget |
| `/tours` | 0 | 48 | 0% | 5.2 | ℹ️ 308 → `/#adventures` (no indexable hub) |
| `/blog/bali-atv-tour-ubud-guide` | 1 | 34 | 2.9% | 8.1 | Opportunity — strengthen → ATV tour |
| `/tours/bali-dirt-bike-adventure` | 0 | 32 | 0% | 24.1 | Warning — product page CTR/position |
| `/blog/how-to-spot-ethical-luwak-coffee-in-bali` | 2 | 29 | 6.9% | 11.8 | Best blog CTR; expand internal links |
| `/tours/ubud-ricefield-cycling-tour` | 0 | **2** | 0% | 19.5 | 🔴 Priority money page — near zero visibility |

---

## C) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| Commercial visibility | Critical | Confirmed | Money tour pages earn almost no Search impressions/clicks | GSC: cycling 2 imp / 0 clk; cooking 1 / 0; ATV tour 12 / 0 | Hub→spoke internal links; title/meta for P0 commercial queries; GBP photos; GSC query filter weekly |
| Content–intent mismatch | Critical | Confirmed | Impressions skew to dress-code / airport / food, not ATV/cycling booking queries | Query table top rows; blog 429 imp vs tour pages 115 | Rebalance content calendar to commercial mid-tails; no new thin informational posts |
| Blog CTR | Warning | Confirmed | Top blogs show impressions with 0% CTR | Temple dress + airport: 69+69 imp, 0 clicks | Rewrite titles ≤60 chars with benefit; meta ≤155; add date/local proof in SERP copy |
| Thin content | Warning | Confirmed | Temple-dress article is thin for competitive query | Readability script: ~263–301 words; Flesch 56 | Expand to 900–1,200 words with first-hand Pejeng temple visit notes + CTA to village tours |
| On-page meta (ATV) | Warning | Confirmed | ATV tour meta description overflows SERP limit | Live meta 285 chars from `shortDescription`; no `seoDescription` in `tours.ts` | Add `seoDescription` ≤160 (mirror cycling pattern) |
| On-page meta (cooking) | Warning | Confirmed | Cooking class meta 199 chars | Live page + `shortDescription` 199 chars | Add `seoDescription` ≤160 |
| Blog titles | Warning | Confirmed | Multiple high-imp titles >60–90 chars (truncation) | Airport title 95 chars; ATV guide 90; luwak 94 | Shorten `seoTitle` / frontmatter titles |
| Internal linking | Warning | Confirmed | 17 blog URLs are near-orphans | `internal_links.py` depth-1: ≤1 inbound each, including temple dress + airport | Add contextual links from homepage/blog index + cross-links to tours |
| IA `/tours` | Info | Confirmed | `/tours` 308-redirects to `/#adventures` | `curl -I` → `location: /#adventures`; GSC still shows `/tours` (48 imp) | Keep redirect; ensure homepage `#adventures` is the only tours hub in sitemap/nav |
| Brand SERP | Warning | Confirmed | `sekar bali` avg pos 6.9 with 0 clicks | GSC Queries | Improve brand title/sitename consistency; Google Business Profile; Knowledge signals |
| Legacy URL | Info | Confirmed | `pejeng-cycling-tour` still earns 7 imp via 308 | Redirect → `ubud-ricefield-cycling-tour` | Leave 308; consolidate internal links to final URL only |
| Technical crawl | Pass | Confirmed | robots allows AI crawlers; HTTPS; security headers score 100 | `robots_checker`, `security_headers` | Maintain |
| GEO files | Pass | Confirmed | `llms.txt` quality score 100 | `llms_txt_checker` | Maintain fact parity with tour pages |
| Social meta (home) | Pass | Confirmed | OG + Twitter complete; score 92 | `social_meta.py` | Maintain |
| Redirect hygiene | Pass | Confirmed | http→https→www clean; no loops | `redirect_checker` + curl | Maintain |
| Product snippets | Info | Confirmed | 5 product-snippet impressions, 0 clicks | GSC Search appearance | Improve Offer clarity / price consistency on Product/TouristTrip |
| Core Web Vitals | Unknown | — | PSI API rate-limited this run | Script error | Re-run `pagespeed.py` with API key or check GSC CWV |

---

## D) Category Scoring (directional)

Weights per skill rubric. Scores use Confirmed evidence only; PSI missing → Performance confidence Low.

| Category | Weight | Positives | Deficits | Score | Justification |
|----------|--------|-----------|----------|-------|---------------|
| Technical SEO | 25% | HTTPS, headers, robots/AI allow, clean redirects, sitemap | `/tours` soft hub via hash; PSI unknown | **78** | Strong crawl/security (+); IA quirk (−) |
| Content Quality | 20% | Some first-hand blogs (luwak CTR); llms corpus | Thin top blogs; informational skew | **42** | Thin + intent mismatch Critical/Warning penalties |
| On-Page SEO | 15% | Home title/desc fixed; cycling seo* fields | ATV/cooking overflow; long blog titles; brand CTR | **48** | Meta overflows + CTR failures |
| Schema | 15% | TravelAgency, Product/Offer list, Question/Answer (no FAQPage) | Product snippets not converting | **80** | Implementation solid; snippet CTR lag |
| Performance | 10% | Prior LCP work shipped | No fresh PSI this run | **Insufficient data** | Use prior LH 44 as Hypothesis only |
| Images | 10% | next/image pipeline from prior remediations | Not re-audited visually this run | **75** | Carry-forward Likely |
| AI / GEO | 5% | llms.txt 100; AI bots allowed; Link alternates | — | **92** | Pass |

**Weighted overall (excluding Performance):** ≈ **52** → Needs Improvement.

---

## E) Environment Limitations
- Google PageSpeed Insights API rate-limited (no LCP/INP/CLS this run).
- GSC query clicks anonymized at low volume — page metrics used for click analysis.
- Export is Web search only (Filters: Search type = Web); Discover / AI Mode not included.
- Depth-1 internal-link crawl may undercount blog↔blog links beyond homepage.

---

## F) Prior art still valid
Prior remediations (title/meta length on homepage, GEO FAQ trim, cycling lunch-only truth, `seoTitle`/`seoDescription` on cycling) remain in place and should not be reverted. This audit reframes priority from “fix homepage tooling warnings” to **“earn commercial impressions + CTR on money pages and top blogs.”**
