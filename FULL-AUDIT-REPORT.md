# SEO Full Audit Report — sekarbaliactivity.com

**Audit date:** 2026-09-06  
**Scope:** Full-site (homepage + money tours + high-impression blogs + technical/GEO scripts)  
**URL:** https://www.sekarbaliactivity.com  
**Business type:** Local adventure tour operator (Pejeng / Ubud, Bali)  
**Evidence sources:** Live HTML fetch/parse, robots/llms/security/social/redirects/broken-links/internal-links/sitemap/images, GSC export `gsc-export-2026-08-02_2026-09-02.json`, `SEO-REPORT.html` dashboard  
**Score confidence:** Medium (GSC Confirmed; PageSpeed API rate-limited — CWV Unknown)

---

## A) Audit Summary

| Metric | Value |
|--------|-------|
| Overall rating | **Needs Improvement (61/100)** |
| Technical foundation | Strong (crawl, HTTPS/HSTS, AI crawlers, schema base) |
| Commercial Search health | Weak (tour money pages ≈0 clicks in GSC window) |
| Period clicks / impressions | **20 / 455** (Web search, 2026-08-02 → 2026-09-02) |
| Homepage | 79 imp / 10 clk / CTR **12.7%** / pos **4.8** |
| Core tours (ATV + cycling + cooking) | **15 impressions / 0 clicks** combined |

### Category scores (LLM + script evidence)

| Category | Weight | Score | Notes |
|----------|-------:|------:|-------|
| Technical SEO | 25% | 88 | robots, sitemap, security, 0 broken links |
| Content Quality | 20% | 52 | many blogs still thin vs 1,500-word gate |
| On-Page SEO | 15% | 58 | money metas OK; long titles + CTR gaps on blogs |
| Schema / Structured Data | 15% | 82 | LocalBusiness + TouristTrip + Product; no FAQPage/HowTo |
| Performance (CWV) | 10% | — | **Unknown** (PSI rate limit) — excluded from rollup |
| Image Optimization | 10% | 90 | alt text complete on audited pages |
| AI Search Readiness (GEO) | 5% | 95 | llms.txt 100/100; AI bots allowed |
| **Weighted overall** | | **61** | CWV excluded; commercial CTR/impressions drag content/on-page |

> Automated `generate_report.py` dashboard scored **86/100** but falsely flagged “No Organization” (site has `TravelAgency`/`LocalBusiness`) and zeroed CWV due to API failure. Prefer this LLM-first score.

### Top 3 issues
1. **Money pages are nearly invisible in Search** — ATV 12 imp / 0 clk; cycling 2 / 0; cooking 1 / 0 (GSC Confirmed).
2. **Informational blogs absorb impressions without clicks or commercial handoff** — temple dress + airport transfer: 138 imp / 0 clk in export window (rewrites shipped 2026-09-05; CTR not yet measurable in this export).
3. **Thin / over-titled blog spokes** — multiple posts 360–570 words with titles 87–94 chars; 15+ near-orphan URLs at crawl depth 1.

### Top 3 opportunities
1. **Internal-link spokes → ATV / cycling / cooking / WhatsApp book** from ranking blogs.
2. **Shorten titles + tighten metas ≤160** on cost/comparison posts still truncating.
3. **Deepen 3–5 commercial hub posts only** (ATV guide, cost, private vs mass, cycling worth-it, Pejeng vs Tegallalang) with operator-first detail — do not mass-publish more generic Bali blogs.

---

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GSC / Commercial | 🔴 Critical | Confirmed | Core tour URLs earn almost no Search clicks | ATV 12/0, cycling 2/0, cooking 1/0, rafting 12/0; home 79/10 | Route equity + CTR from blogs into money URLs; unique commercial copy/CTAs |
| On-Page / CTR | ⚠️ Warning | Confirmed | High-imp blogs had 0% CTR in export window | temple-dress 69/0/pos 27.6; airport 69/0/pos 60.7 | Monitor post-rewrite CTR 14–28d; iterate SERP copy if still &lt;2% |
| Content | ⚠️ Warning | Confirmed | Blogs below quality-gate depth + long titles | private-ATV 400w/t94; luwak 360w/t94; cycling-worth 440w/t87; ATV-cost 567w/t93 | Expand or consolidate; titles ≤60 with brand at end |
| Internal links | ⚠️ Warning | Confirmed | Many near-orphan blog URLs | `internal_links.py`: 15 orphans (≤1 inbound); sitemap orphan crawl: 31 at depth 1 | Add contextual links from `/blog` + related posts; link every spoke → tour |
| On-Page meta | ⚠️ Warning | Confirmed | Several metas &gt;160 chars | book 198; blog index 184; ATV-cost 185; cycling-worth 189 | Cap `seoDescription` / excerpts ≤155–160 |
| Brand | ⚠️ Warning | Confirmed | Brand query ranks, 0 clicks | `sekar bali` 8 imp / pos 6.9 / 0 clk | Brand-first SERP title; GBP/NAP/`sameAs` consistency; reviews |
| Commercial focus | ⚠️ Warning | Confirmed | Dirt-bike page out-impresses core ATV | dirt-bike 32 imp / 0 clk / pos 24 vs ATV 12/0 | Improve CTR or de-emphasize/prune if non-core |
| Technical | ✅ Pass | Confirmed | Crawl + security baseline strong | robots 200; AI bots allowed; sitemap 53 URLs; security 100; 0 broken links | Maintain `/admin/` `/api/` disallow |
| GEO | ✅ Pass | Confirmed | AI discovery artifacts excellent | `llms.txt` quality 100; `llms-full.txt` + `pricing.md` present | Keep prices/NAP synced with `tours.ts` / GBP |
| Schema | ✅ Pass | Confirmed | LocalBusiness/TravelAgency + TouristTrip/Offer + Product ItemList | Live JSON-LD; GSC Product snippets 5 imp | Optional tour `sku`; do **not** add FAQPage/HowTo |
| Social / images | ✅ Pass | Confirmed | OG/Twitter complete; alts present | social_meta 92/100; homepage/tour `missing_alt=0` | Optional `twitter:creator` |
| Redirects | ℹ️ Info | Confirmed | HTTP apex is a 2-hop chain | `http://` → `https://apex` → `https://www` | Collapse to one hop if hosting allows |
| CWV | ℹ️ Info | Hypothesis | Mobile CWV not measured this run | `pagespeed.py` rate-limited twice | Re-run with `PAGESPEED_API_KEY` |
| Hreflang | ℹ️ Info | Confirmed | No hreflang (EN-only) | `hreflang=[]`, `lang=en` | Add only if launching locales |

### Suppressed / contradicted automated claims
| Claim from `generate_report.py` | Verdict |
|---------------------------------|---------|
| “No Organization/Person entity in JSON-LD” (Critical) | **False** — homepage has `@type: ["TravelAgency","LocalBusiness"]` with name, url, logo, address, geo, `sameAs` (Instagram, Facebook) |
| Wikipedia/Wikidata missing as Critical SEO | **Info only** — do not create for SEO; strengthen real citations/reviews instead |

---

## C) Detailed Analysis

### Technical SEO
- **robots.txt:** Allow `/`; Disallow `/admin/`, `/api/`; explicit Allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, etc.; Sitemap declared.
- **Sitemap:** `https://www.sekarbaliactivity.com/sitemap.xml` — **53** URLs (8 system + 9 tours + blogs + GEO files). Checker 404s on `sitemap_index.xml` / `sitemap-index.xml` are noise (not referenced by robots).
- **Redirects:** `https://www` final; apex and http use 308. Prefer single-hop http→www.
- **Broken links:** 0 broken / 37 checked on homepage.
- **Security:** HSTS preload, CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy — score 100.

### Content & E-E-A-T
- Homepage ~2.1k–3.2k words (parser variance with chrome); clear offers and pricing.
- Temple dress expanded to **~909 words** (was ~300) — still below 1,500 gate but improved.
- Competitive informational posts (food, luwak, airport) still thin and low-CTR; they dilute commercial focus.
- E-E-A-T: local NAP in schema/`llms.txt`, Instagram/Facebook `sameAs`. Missing review/`AggregateRating` on tours (not required, but helpful when real reviews exist — never fabricate).

### On-Page (sampled live 2026-09-06)

| URL | Title len | Meta len | Words | Notes |
|-----|----------:|---------:|------:|-------|
| `/` | 43 | 148 | 2k+ | Pass |
| `/tours/bali-atv-adventure` | 50 | 124 | 807 | Pass meta; solid TouristTrip |
| `/tours/ubud-ricefield-cycling-tour` | 67 | 140 | 774 | Title slightly long |
| `/tours/balinese-cooking-class` | 54 | 132 | 973 | Pass (prior overlong meta fixed) |
| `/blog/bali-temple-dress-code` | 50 | 116 | 909 | Improved |
| `/blog/how-much-does-atv-cost-bali-ubud-2026` | **93** | **185** | 567 | Truncation risk |
| `/blog/private-atv-vs-mass-market-ubud` | **94** | **183** | 400 | Thin + truncation |
| `/book` | 42 | **198** | 793 | Shorten meta |

### Schema
- Organization as **TravelAgency + LocalBusiness** (correct for this business).
- Tours: **TouristTrip** with itinerary + Offer (IDR).
- Sitewide Product ItemList (GSC Product snippets seen).
- Standalone **Question/Answer** nodes (not FAQPage) — acceptable; do not wrap as FAQPage for commercial rich results.
- No HowTo (deprecated) — good.

### Performance
- **Unknown.** Hero LCP candidate: `/images/adventures/hero-banner.jpg` via `next/image`. Re-measure INP/LCP/CLS with PSI key.

### Images
- Audited homepage + tours: **0 missing alt**. Next Image used for adventure assets.

### AI Search Readiness
- `llms.txt` / `llms-full.txt` / `.well-known/llms.txt` / `pricing.md` present with entity facts, prices, Q&A, comparisons.
- Strong GEO posture relative to typical local operators.

---

## D) Unknowns and Follow-ups

1. Mobile **LCP / INP / CLS** (PSI rate limit) — Hypothesis until re-run.
2. Post-2026-09-05 title/meta rewrite **CTR lift** on temple-dress + airport — needs fresh GSC window.
3. Whether `/tours` (48 GSC impressions via redirect to `/#adventures`) should become a real unique hub — only if content is not a thin duplicate.
4. Real review inventory for AggregateRating — do not invent ratings.
5. Backlink/entity KG depth beyond Instagram/Facebook — Info, not blockers.

---

## E) Environment Limitations

- Google PageSpeed Insights API **rate-limited** (retried once) — no CWV numbers this run.
- `article_seo.py` / `validate_schema.py` crash on multi-type `@type` lists (`TypeError: unhashable type: 'list'`) — schema reviewed manually via parse + BeautifulSoup.
- GSC export covers **2026-08-02 → 2026-09-02** only; later deploys may not be reflected.

---

## F) Artifacts

| File | Role |
|------|------|
| `FULL-AUDIT-REPORT.md` | This report |
| `ACTION-PLAN.md` | Prioritized fixes |
| `SEO-REPORT.html` | Interactive script dashboard (score not authoritative) |
| `audit.json` / `verified_audit.json` | Structured findings |
| `gsc-export-2026-08-02_2026-09-02.json` | Search Console evidence |
