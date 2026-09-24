# SEO + GEO + CTA Full-Site Audit — Sekar Bali Activity

**Audit date:** 2026-09-24  
**Scope:** Full site — homepage, `/book`, `/experiences`, money-page tours (ATV, cooking, jeep), `/contact`, `/blog` hub, robots/sitemap, `llms.txt` / `pricing.md`. Live domain **plus** current-repo CTA/hours/title fixes in this PR.  
**Business type:** Local tour operator / travel activities (Pejeng–Ubud). WhatsApp-first booking.  
**Primary conversion:** Open booking → WhatsApp with prefilled guest/date/price.  
**Score confidence:** Medium for technical/on-page/GEO (script + live fetch). Low for Performance (PageSpeed API rate-limited).

**Overall rating:** Good  
**SEO Health Score: 78/100** (live, pre-deploy, LLM rubric) · **82/100** after this PR’s CTA / hours / `/book` message-match fixes  
**Automated dashboard:** `SEO-REPORT.html` scripted **86/100** (different weights; LLM-first score is canonical)  
**GEO Readiness: 78/100** (see `GEO-ANALYSIS.md`)  
**CTA score: 62 → 80** after this PR (see CTA section)

### Top 3 issues
1. Conversion labels did not match destinations or the jeep-led homepage offer (`Book Now`, “Book on WhatsApp” → `/book`, `/book` titled as ATV).
2. Hours/NAP mismatch: schema 07:00, `/contact` 08:00–20:00, header “Pickup from 7 AM” vs jeep collect at 02:00–03:00.
3. Homepage is citation-rich but source-poor (citation script **51/100**, 0 trusted outbound links) and very heavy (8,077 words, 52 images).

### Top 3 opportunities
1. Ship this PR’s CTA vocabulary + `/contact` nav + hours alignment (done in repo).
2. Split the 257-word `llms.txt` definition into a 50-word answer + priced bullets.
3. Add a visible TripAdvisor citation next to the Traveler’s Choice claim; replace Unsplash jeep frames.

---

## A) Audit summary

| Surface | Title (live) | Notes |
|---------|--------------|--------|
| `/` | Sekar Bali Activity \| Jeep, Cooking & ATV Ubud (46) | H1 “Your Bali day, booked clear” — brand-first, offer in subcopy |
| `/book` | Live ATV-coded title → **WhatsApp Checkout** *(this PR)* | Checkout intent only — does not reuse homepage jeep/cooking/ATV |
| `/tours/bali-atv-adventure` | Private ATV Ride Ubud \| From IDR 750K | GEO table + Q&A present |
| `/tours/balinese-cooking-class` | Cooking Class Ubud \| Tumang · Free Pickup 450K | Chef + pickup extractable |
| `/tours/batur-sunrise-jeep-tour` | Private jeep, meal after viewpoint, no-hike | Strong cluster |
| `/contact` | Contact Us \| Sekar Bali Activity | Three-address NAP — correct GBP split |
| `/blog` | Blog & Travel Guide \| Sekar Bali Activity | Large 2026 cluster, many dated Sept 19–23 |
| `/llms.txt` | Quality 100/100 | Lead sentence 257 words |

---

## B) Findings table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| CTA / CRO | Warning | Confirmed | Header CTA was generic and hidden on the smallest viewport; Contact pointed at `/#contact` | `HeaderNav.tsx`; EEAT checker treated Contact as homepage | This PR: `Book` / `Book WhatsApp` always visible; Contact → `/contact` |
| CTA / On-page | Warning | Confirmed | Default article CTA said WhatsApp but linked to `/book`; tour cards said “Book This Experience” | `ArticleBookingCta` DEFAULT; `TourBookingCard` jeep-only special case | This PR: “Start WhatsApp booking”; slug-specific labels |
| On-page | Warning | Confirmed | `/book` was ATV-coded vs jeep-led homepage | Live `/book` title vs `DEFAULT_TITLE` | This PR: title/H1/OG/schema mention jeep + cooking + ATV |
| Local / Schema | Warning | Confirmed | Hours 07:00 vs 08:00; “Pickup from 7 AM” vs 02:00 jeep | `seo.ts`, `/contact`, jeep GEO | This PR: schema 08:00–20:00; header WhatsApp hours |
| GEO / Authority | Warning | Confirmed | 45 homepage claims, 0 trusted outbound links | `citation_readiness.py` score 51 | Visible TripAdvisor link + author bylines |
| GEO / Structure | Warning | Confirmed | `llms.txt` lead is a 257-word run-on | `readability.py` sentence rewrite | Split into definition + bullets |
| Performance | Warning | Likely | Homepage 8,077 words / 52 images; dual LCP candidates | readability + image inventory; PSI rate-limited | Trim above-fold catalog; re-run PSI |
| Images | Info | Confirmed | Jeep still Unsplash | `images.unsplash.com/photo-1727335333476` | Operator photos |
| Technical | Info | Confirmed | `sitemap_index.xml` 404 | `sitemap_checker.py` | Ignore — `/sitemap.xml` is the real file (118 URLs) |
| Technical | Pass | Confirmed | Crawl/index/security/AI bots healthy | robots, headers 100, canonical self, 0 broken of 118 | None |
| GEO / Technical | Pass | Confirmed | `llms.txt` / `llms-full.txt` / `pricing.md` / speakable | llms checker 100; 22 answer blocks | Keep generators in sync |

**Verifier:** `finding_verifier.py` — raw 11, verified 11, dropped 0.

---

## Category scores (rubric)

Each category lists positives, deficits, then `base = pos/(pos+def)×100` minus severity penalties.

### Technical SEO — 82/100 · weight 25%
**Positives:** robots.txt 200 + sitemap; all key AI crawlers allowed; security headers 100 (HSTS 2y + preload, CSP, XFO, XCTO, referrer, permissions); self-canonical; 0 broken homepage links.  
**Deficits:** homepage DOM weight; CWV unmeasured.  
**Penalties:** Warning×1 (performance adjacency, −5). Hours/canonical issues closed in this PR.  
**Justification:** Score of 82 reflects a clean crawl/index/security baseline (+), penalized by an oversized homepage and no field CWV.

### Content Quality — 78/100 · weight 20%
**Positives:** Unique operator IDR/pickup/venue facts; named chef (Wayan Suryana); honest “not the summit / not Happy Swing / not Tirta Empul” disambiguation; large comparison cluster (Safari vs Zoo vs Taro, jeep vs trek, etc.).  
**Deficits:** Homepage claims unsourced (citation 51); EEAT 66 (org-only author); older culture posts thinner than 2026 money clusters.  
**Penalties:** Warning×1 (−5).  
**Justification:** Score of 78 reflects first-party activity facts (+), penalized by missing visible citations and bylines.

### On-Page SEO — 80/100 · weight 15%
**Positives:** Unique titles ≤60; metas present; one H1/page on sampled URLs; dense internal links (2,292 on 26-page crawl, 121 unique URLs); social meta 92.  
**Deficits:** Homepage H1 is clever not keyword-led; twitter:creator was missing (fixed); `/book` message mismatch (fixed).  
**Justification:** Score of 80 after this PR’s `/book` + Twitter creator alignment.

### Schema / Structured Data — 82/100 · weight 15%
**Positives:** JSON-LD only; TravelAgency+LocalBusiness; WebSite; TouristTrip + Offer on tours; speakable; Question/Answer without commercial FAQPage; ItemList on `/book` and `/experiences`.  
**Deficits:** Homepage Product offers historically pointed at `/#experiences`; no Wikidata `sameAs`; hours were 07:00 (fixed).  
**Justification:** Score of 82 — eligible types present, hours now match `/contact`.

### Performance (CWV) — 60/100 · weight 10% · Score confidence: Low
**Positives:** Next Image + `sharp`; hero `preload` / `fetchPriority`; AVIF/WebP pipeline.  
**Deficits:** PSI rate-limited (environment limitation, not a confirmed fail); 52 homepage images; logo.png + hero both LCP candidates.  
**Justification:** Directional 60 only. Re-score after PSI.

### Images — 78/100 · weight 10%
**Positives:** 0 missing alt of 52; descriptive alts; OG 1200×630.  
**Deficits:** Unsplash jeep; homepage image count.  
**Justification:** Score of 78 — alts pass, jeep stock and catalog weight remain.

### AI Search Readiness (GEO) — 78/100 · weight 5%
**Positives:** Answer-block score 100 (22 directs); llms quality 100; pricing.md; AI bots allowed; SSR tour GEO blocks.  
**Deficits:** Citation 51; EEAT 66; 257-word llms lead.  
**Justification:** Score of 78 — extractable structure is excellent; authority packaging is not.

**Weighted live total:** 0.25×82 + 0.20×78 + 0.15×80 + 0.15×82 + 0.10×60 + 0.10×78 + 0.05×78 = **78**.

---

## CTA audit (conversion + GEO)

Primary business goal: **WhatsApp booking with prefilled details** (`.agents/product-marketing.md`).

| Surface | Before | After this PR | Verdict |
|---------|--------|---------------|---------|
| Header (desktop) | Book Now → `/book` | Book WhatsApp → `/book` | Value-named, still one hop to checkout |
| Header (mobile) | Hidden; only hamburger | Always-visible Book | Critical mobile gap closed |
| Header Contact | `/#contact` | `/contact` | Indexable NAP page |
| Header hours | Pickup from 7 AM | WhatsApp 08:00–20:00 | Stops lying about jeep 02:00 collects |
| Homepage hero | Book private jeep / Browse | Unchanged (already strong) | Pass |
| Homepage footer CTA | Start booking + WhatsApp ATV | Start WhatsApp booking + WhatsApp private jeep | Matches hero offer |
| Tour card | Book This Experience (except jeep) | Activity-specific labels | Stronger intent match |
| Tour mobile sticky | Book | Short activity label | Visible without scroll |
| Article default | Book on WhatsApp → `/book` | Start WhatsApp booking → `/book` | Label matches hop |
| `/book` title/H1 | ATV-coded, then briefly jeep/cooking/ATV | WhatsApp Checkout / send date | Stops cannibalizing `/` and money pages |
| GetYourGuide gold button | Rendered if URL set | No `getYourGuideUrl` assigned in `tours.ts` | Dead code, not live leak |

**Remaining CTA debt**
- Older blog posts still fall through to the default `/book` CTA instead of the matching tour.
- Consultation-only itineraries correctly go to `wa.me` — keep that split (do not add a booking popup).
- Park/workshop tickets must keep **quoted pickup** in any new CTA (do not invent free or IDR 400K).

---

## Keyword jobs (anti-cannibalization)

One URL owns each head query. Spokes support the money page; they do not reuse its SERP title.

| URL | Owns | Must not target |
|-----|------|-----------------|
| `/` | Brand + jeep / cooking / ATV discovery | “WhatsApp checkout”, “things to do near Ubud”, catalog browse |
| `/experiences` | Browse the catalog | Money-page heads, homepage offer string |
| `/book` | WhatsApp checkout + combo handoff | “Private ATV ride Ubud”, “Cooking class Ubud”, “Private Mount Batur jeep” |
| `/tours/[slug]` | Commercial book + price | Guide / vs / worth-it titles |
| `/blog/things-to-do-near-ubud-2026` | “Things to do near Ubud” list | Full SKU price-list title |
| `/blog/bali-adventure-packages-prices-2026` | Sitewide IDR table | “Things to do” |
| Other `/blog/*` | How / vs / worth / when / where | Exact tour `seoTitle` pattern (`X Ubud \| From IDR Y`) |

This PR retitled overlapping spokes (Swing, cooking worth-it, jeep guide, Griya Beji, Bird Park, full-day, Tanah Lot, luwak, ATV guide, melukat, Tumang inside, jeep prices) and stopped `getBlogKeywords()` from copying tour **head** terms onto articles.

---

## Technical SEO

- **robots.txt:** 200. Disallow `/admin/`, `/api/`, `/tools/`, `/invoice`. Sitemap `https://www.sekarbaliactivity.com/sitemap.xml`. Host set. GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended allowed. CCBot also allowed (training — business choice).
- **Redirects:** Apex fetch 200 in 51ms, 0 hops from the www URL.
- **Canonical:** Homepage self-canonical `https://www.sekarbaliactivity.com/`.
- **Broken links:** 118 checked, 0 broken, 5 redirected.
- **Internal links:** 26 pages crawled, 121 unique URLs, no obvious orphans among money pages (most tours 26 inbound). Workshop/park pages thinner inbound (4–5) — expected for new imports.
- **Hreflang:** None. English-only. Info, not a defect.
- **Security:** HTTPS + HSTS preload, CSP, frame/nosniff/referrer/permissions. Score 100.

---

## Content & E-E-A-T

Homepage Flesch 57.3 (grade 9.2) — acceptable for travel English. Word count 8,077 is a **catalog + GEO dump**, not a thin page.

E-E-A-T script: **66**. Author = brand only. Policy pages exist (`/anti-scam`, `/payment-policy`, `/refund-policy`, `/cancellation-policy`, `/privacy-policy`) but the checker missed several. `/contact` correctly separates corporate office (GBP), Ubud meeting point, and Sedang activity base — keep that split.

---

## Schema

Sitewide: Organization/LocalBusiness, WebSite, SiteNavigation, DataCatalog for llms.  
Tours: TouristTrip + ImageObject + speakable + visible Q&A (not FAQPage).  
`/book` + `/experiences`: ItemList of TouristTrip offers.

Do **not** add FAQPage (commercial restriction; FAQ rich results removed May 2026). Do **not** add HowTo.

---

## Performance

PageSpeed Insights: **rate-limited** this run — environment limitation, not a site fail.  
Likely pressure: full-viewport hero + 52 images + 8k words of GEO tables. Re-run mobile PSI on `/`, `/tours/bali-atv-adventure`, `/tours/batur-sunrise-jeep-tour` after deploy.

---

## Images

0 missing alt. Cooking/ATV first-party. Jeep Unsplash. Logo PNG competes with hero for LCP.

---

## Environment limitations

- PageSpeed / CrUX: not measured (API rate limit). Do not treat as a confirmed CWV fail.
- Live AI Overview / ChatGPT / Perplexity citation scrape: not run.
- GSC / analytics: not connected.
- `sitemap_index.xml` 404 is a script probe, not a site bug.
- Schema in `web_fetch` markdown is incomplete; JSON-LD confirmed from repo + entity types in citation script.
- `generate_report.py` wrote `SEO-REPORT.html` (scripted 86/100). That dashboard uses different category weights. This markdown is the LLM-first record.

---

## C) Unknowns and follow-ups

1. Mobile LCP / INP / CLS field values.
2. Whether AI Overviews cite this domain for “ATV Ubud”, “Tumang cooking class”, “Mount Batur jeep no hike”.
3. GBP hours vs the 08:00–20:00 we now publish — confirm they match.
4. Which older blog slugs still lack a mapped article CTA.
