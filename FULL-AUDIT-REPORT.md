# Full SEO + GEO Audit Report

- **Site:** https://www.sekarbaliactivity.com/
- **Scope:** Full-site technical + on-page + schema + GEO/AI search readiness (homepage + money pages + machine-readable surfaces)
- **Business type:** Local travel / activities operator (ATV, rafting, tubing, cycling, cooking class, day tours near Ubud)
- **Generated:** 2026-09-09
- **Overall SEO Health Score:** **84 / 100** (band: Strong)
- **Score confidence:** Medium — PageSpeed/CWV incomplete (API rate limit); entity script false-negatives corrected manually

## Audit Summary

Sekar Bali Activity already has an unusually strong AI/GEO stack for a local operator (`llms.txt` 100/100, `llms-full.txt`, `pricing.md`, AI crawlers allowed, Question/answer blocks, TouristTrip + Offer schema). Traditional SEO foundations (HTTPS, security headers, social meta, sitemap, money-page titles) are also solid.

The biggest gaps are **entity consistency after the Sedang activity-base move**, **weak citation/E-E-A-T source signals**, **orphan-heavy blog internal linking**, and an **unmerged / still-live fantasy T-rex hero** that undermines trust and brand perception.

### Top 3 issues
1. GEO entity conflict: `llms.txt` opens with “Pejeng-based…” while NAP/schema/activity base correctly say Sedang / Abiansemal (`Confirmed`)
2. Live homepage hero is still the old portrait banner (896×1195) with photoreal T-rex — trust / brand / LCP risk (`Confirmed`)
3. Citation readiness 45/100 — many factual IDR claims, almost no high-trust external sources (`Confirmed`)

### Top 3 opportunities
1. Align all GEO one-liners to Sedang activity base + Pejeng cycling geography (quick win)
2. Strengthen internal links from homepage/tours → blog money posts; reduce orphan blogs
3. Expand `sameAs` (TripAdvisor / Google Business / X if real) and add first-hand host bylines on key guides

---

## Score Card (LLM-adjusted)

| Category | Weight | Score | Notes |
| --- | ---: | ---: | --- |
| Technical SEO | 25% | 90 | Security 100, robots/AI crawlers 100, redirects clean, 0 broken on homepage crawl sample |
| Content Quality | 20% | 78 | Strong pricing transparency & guides; E-E-A-T 59; citation 45 |
| On-Page SEO | 15% | 88 | Titles/metas/H1s strong on home + ATV + cooking |
| Schema / Structured Data | 15% | 86 | TravelAgency+LocalBusiness, TouristTrip/Product Offers, Question blocks — **not** missing Organization |
| Performance (CWV) | 10% | — | **Unknown** (PageSpeed rate-limited) |
| Images | 10% | 72 | Homepage 0 missing alt; live hero still old T-rex portrait asset |
| AI Search / GEO | 5% | 88 | llms.txt 100, answer blocks 100; NAP conflict in opening blurb |

**Weighted estimate (excluding CWV):** ~84/100

---

## Findings Table

| Severity | Confidence | Area | Finding | Evidence | Impact | Fix |
| --- | --- | --- | --- | --- | --- | --- |
| Warning | Confirmed | GEO / NAP | Opening GEO blurb still says “Pejeng-based operator” while activity base is Sedang | `llms.txt` line 3 vs Entity facts activity base `Jl. Raya Krasan…80352`; `src/data/geoContent.ts` GEO one-liner | AI engines may cite the wrong village for ATV self-meet | Rewrite GEO one-liners to “Ubud-area operator · activity base Sedang (Abiansemal); Pejeng cycling routes” |
| Warning | Confirmed | Brand / Images | Live hero banner still portrait T-rex composite | Live `hero-banner.jpg` = 896×1195, 173570 bytes (old asset). PR #72 not on production | Hurts trust, CTR, and brand; wrong visual for Bali ATV | Merge/deploy hero-without-trex + landscape crop |
| Warning | Confirmed | GEO / Citations | Factual claims outnumber source signals (score 45) | `citation_readiness.py`: 20 claims, 0 trusted external domains, 5 external links | Lower citability in ChatGPT/Perplexity vs aggregators | Link TripAdvisor Traveler’s Choice claim; cite official tourism/Subak sources on culture posts |
| Warning | Confirmed | Internal links | Many blog URLs look underlinked / orphan-like | `internal_links` script: 24 potential orphans ≤1 inbound | Crawl depth + topical authority diluted | Add contextual links from tour pages + homepage guides strip to money blogs |
| Warning | Likely | E-E-A-T | Thin first-hand / host identity on commercial pages | `eeat_signal_checker.py` score 59; no editorial policy; authors = brand name only | Harder to win AI Overview + long-tail trust vs named chef/host pages | Add named host/chef bios (already strong on Tumang); author boxes on ATV/cycling guides |
| Info | Confirmed | Entity KG | No Wikipedia/Wikidata; `sameAs` only IG + Facebook | `entity_checker.py` + homepage JSON-LD `sameAs` | Weaker Knowledge Graph / AI brand graph | Add real profiles only (GMB, TripAdvisor, X). Do **not** create Wikipedia for SEO |
| Info | Confirmed | Schema script false positive | Auto-report marked “No Organization” as Critical | Homepage JSON-LD `@type: ["TravelAgency","LocalBusiness"]` with address/geo/sameAs | Misleading Critical in machine report | Ignore; keep multi-type LocalBusiness (correct for GBP NAP) |
| Info | Confirmed | Schema | TouristTrip Offers present; cooking uses AggregateOffer | ATV Offer price 750000 IDR; cooking AggregateOffer 506370–1266180 | Good rich-result eligibility for products/trips | Add `itinerary` / duration where accurate; keep FAQPage **out** (commercial-safe Question blocks already used) |
| Pass | Confirmed | AI crawlability | All major AI bots allowed; sitemap referenced | `robots.txt` GPTBot/ClaudeBot/PerplexityBot/Google-Extended Allow; Sitemap present | Agents can train/cite | Maintain |
| Pass | Confirmed | GEO surfaces | `llms.txt` 100/100; `llms-full.txt` + `pricing.md` + `.well-known/llms.txt` | `llms_txt_checker.py` Quality 100; HTTP 200 all companions | Strong agent readiness | Keep dates/prices in sync with site |
| Pass | Confirmed | Answer extractability | Homepage answer-block score 100 (8 direct answers) | `answer_block_scanner.py` | High passage citability | Keep 40–60 word lead answers on money FAQs |
| Pass | Confirmed | Security | Security headers 100/100 | HSTS preload, CSP, XFO, nosniff, Referrer-Policy, Permissions-Policy | Trust + HTTPS hygiene | Maintain |
| Pass | Confirmed | Social meta | OG/Twitter 92/100 | All required OG tags; twitter:creator optional missing | Share previews solid | Optional: add twitter:creator |
| Pass | Confirmed | Sitemap | 52 indexable URLs incl. 8 tours + 32 blogs + AI files | Live sitemap.xml HTTP 200 | Coverage healthy | Ensure lastmod updates on content edits |
| Pass | Confirmed | Links | Homepage broken-link sample: 0 broken / 4 redirects | `broken_links.py` | Crawl health | Investigate the 1 broken flagged in aggregate runner if reproducible |
| Unknown | — | CWV | Mobile/Desktop PSI unavailable | Google PageSpeed API rate limited | Can’t confirm LCP/INP/CLS | Rerun with `PAGESPEED_API_KEY` |

---

## Technical SEO

**Crawlability:** `robots.txt` allows `/`, blocks `/admin/`, `/api/`, `/tools/`, `/invoice`. AI crawlers explicitly allowed. Sitemap at `/sitemap.xml` lists 52 URLs.

**Indexability:** Homepage `meta robots: index, follow`. Canonical `https://www.sekarbaliactivity.com` (no trailing slash) — consistent with most loc entries.

**Security:** Full modern header set (score 100).

**Redirects:** Apex/www settle cleanly; dirt-bike URL resolves to ATV money page (product removed correctly).

---

## On-Page SEO (money pages)

| URL | Title | H1 | Notes |
| --- | --- | --- | --- |
| `/` | Sekar Bali Activity \| Ubud Travel & Tours | Your Bali day, booked clear | Clear commercial intent |
| `/tours/bali-atv-adventure` | ATV Ride Ubud from IDR 750K \| … | Bali ATV Quad Bike Adventure & River Tubing | Price in title — strong CTR |
| `/tours/balinese-cooking-class` | Cooking Class Ubud \| Tumang from IDR 506K \| … | Tumang Bali Cooking Class | Partner product well marked up |
| `/contact` | Contact Us \| … | Book or ask on WhatsApp. | Location roles documented |

Homepage H2/H3 structure is deep (pricing, combos, FAQ, guides) — good for long-tail and fan-out queries.

---

## Schema & Structured Data

**Present (confirmed in SSR HTML):**
- `TravelAgency` + `LocalBusiness` with corporate NAP (Banjar Kenderan) + `additionalProperty` activityBase (Sedang address)
- `WebSite`, `WebPage`, `ItemList`, `DataCatalog`
- Multiple standalone `Question` / `Answer` nodes (commercial-safe; **not** FAQPage — correct per 2026 guidance)
- Tour pages: `TouristTrip` (+ `Product` on cooking) with `Offer` / `AggregateOffer`
- Blog posts: `BlogPosting` with `datePublished` / `author`

**Gaps:**
- Entity graph `sameAs` limited to Instagram + Facebook
- ATV `TouristTrip` lacks rich `itinerary` object
- Auto `entity_checker` fails on multi-type `@type` arrays — treat its “Critical missing Organization” as **false positive**

---

## GEO / AI Search Readiness

### Strengths
- Agent stack: `/llms.txt`, `/llms-full.txt`, `/pricing.md`, `/.well-known/llms.txt` linked via `<link rel="alternate">` and schema DataCatalog
- Explicit AI bot allow-list in robots
- Quotable pricing tiers + pickup rules in Markdown (agent-parseable without JS)
- Homepage FAQ / GeoAnswerBlock with direct answers (scanner 100)
- AreaServed includes Sedang, Abiansemal, Badung, Pejeng, Ubud

### Weaknesses
1. **Entity contradiction in the first sentence of `llms.txt`** (“Pejeng-based”) vs accurate activity-base block below — LLMs often overweight the opening blurb
2. Homepage body still Pejeng-heavy (23 mentions) vs Sedang (4) — fine for cycling, confusing for ATV arena
3. Citation readiness 45 — TripAdvisor Traveler’s Choice claimed without outbound trust link in samples
4. Brand graph thin outside IG/FB (no YouTube/Reddit density observed in this pass)

### Platform notes
- **Google AI Overviews:** Win via classic ranking + people-first guides; keep E-E-A-T / unique operator facts
- **ChatGPT / Perplexity / Claude:** Already well served by llms.txt + pricing.md; fix opening NAP blurb immediately
- Do **not** add FAQPage schema for rich-result recovery (deprecated for commercial)

---

## Content & E-E-A-T

- Readability: Flesch 56.7 / grade ~9.2 — acceptable for travel commercial copy
- Blog cluster coverage is strong (ATV price, arena guide, combos, cycling vs Tegallalang, pickup policy)
- Tumang cooking page has excellent partner specificity (Chef Wayan, TripAdvisor TC 2026)
- Missing: named ATV guide bios, editorial/corrections policy, outbound citations on factual culture claims

---

## Images & Performance

- Homepage images: 23 with **0 missing alt** (`Confirmed`)
- **Live hero still old portrait T-rex asset** — merge PR #72 / redeploy
- CWV: **Unknown** this run (PSI rate limit). Re-check LCP on hero after landscape deploy

---

## Measurement Notes

- `pagespeed.py`: rate-limited — CWV score withheld
- `entity_checker.py`: false Critical on Organization (multi-type JSON-LD)
- `article_seo.py`: crashed on list `@type` (`TypeError: unhashable type: 'list'`) — script bug, not site bug
- `generate_report.py` raw overall 87/100 overstated Entity=0 and CWV=0 penalties; LLM-adjusted **84** with Entity corrected and CWV excluded
