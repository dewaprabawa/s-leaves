# SEO + GEO Full-Site Audit — Sekar Bali Activity

**Audit date:** 2026-09-25  
**Scope:** Full site — homepage, `/book`, `/experiences`, money-page tours, `/contact`, `/blog`, robots/sitemap, `llms.txt` / `pricing.md`. Live domain **plus** remaining GEO actions implemented in this PR.  
**Business type:** Local tour operator / travel activities (Pejeng–Ubud). WhatsApp-first booking.  
**Primary conversion:** Open booking → WhatsApp with prefilled guest/date/price.  
**Score confidence:** Medium for technical/on-page/GEO (script + live fetch + repo). Low for Performance (PageSpeed API not re-run).

**Overall rating:** Good  
**SEO Health Score: 78/100** (live, production) · **84/100** after this PR’s GEO split, visible TripAdvisor citation, mapped blog CTAs, and chef Person schema  
**Automated dashboard:** `SEO-REPORT.html` (prior scripted **86/100** — different weights; LLM-first score is canonical)  
**GEO Readiness: 78/100** live · **86/100** after this PR (see `GEO-ANALYSIS.md`)

### Top 3 issues (live)
1. `llms.txt` / homepage GEO lead is a **257-word** inventory sentence (outside the 40–60 word citation window).
2. Traveler’s Choice is claimed on the homepage without a visible TripAdvisor href (`citation_readiness` **51**, 0 high-trust outbound).
3. Twelve blog slugs still hop to a generic `/book` CTA instead of the matching money page.

### Top 3 opportunities (this PR)
1. Split the GEO lead into a 53-word definition + priced bullets + keep the inventory in `llms-full.txt` / `pricing.md` — **done in repo**.
2. Visible TripAdvisor citation on the homepage GEO block — **done in repo**.
3. Map every remaining blog slug in `ArticleBookingCta` — **77/77 done**.

---

## A) Audit summary

| Surface | Title (live) | Notes |
|---------|--------------|--------|
| `/` | Sekar Bali Activity \| Jeep, Cooking & ATV Ubud (46) | H1 brand-first; GEO dump below fold |
| `/book` | WhatsApp Checkout (this branch) | Checkout-only — does not reuse tour SERP titles |
| `/experiences` | Browse Ubud Experiences (this branch) | Catalog H1 — not a money-page clone |
| `/tours/bali-atv-adventure` | Private ATV Ride Ubud \| From IDR 750K | GEO table + Q&A present |
| `/tours/balinese-cooking-class` | Cooking Class Ubud \| Tumang · Free Pickup 450K | Chef + pickup extractable; Person schema added in repo |
| `/tours/batur-sunrise-jeep-tour` | Private jeep, meal after viewpoint, no-hike | Strong cluster |
| `/contact` | Contact Us \| Sekar Bali Activity | Three-address NAP — correct GBP split |
| `/llms.txt` | Quality 100/100 | Live lead still 257 words; repo lead 53 words |

---

## B) Findings table

Verifier: `finding_verifier.py` — raw 8, verified 8, dropped 0.

| Area | Severity | Confidence | Finding | Evidence | Fix |
|------|----------|------------|---------|----------|-----|
| GEO / Structure | Warning | Confirmed | Live `llms.txt` lead is a 257-word inventory sentence | `llms_txt_checker.py` 2026-09-25 parsed.description | This PR: `GEO_QUICK_ANSWER` = 53 words; `GEO_INVENTORY` + `GEO_LEAD_BULLETS` |
| GEO / Authority | Warning | Confirmed | Homepage Traveler’s Choice has no visible TripAdvisor href | `citation_readiness.py` score **51**, 45 claims, 0 trusted outbound | This PR: visible TA link in `GeoAnswerBlock` + `llms.txt`. Script “trusted” list is gov/edu/wikipedia only — TA will **not** move that counter |
| CTA / On-page | Warning | Confirmed | 12 blog slugs used the default `/book` CTA | `ArticleBookingCta` ended at `what-is-the-subak-system-bali` | This PR: 77/77 slugs mapped; park pickup stays **quoted** |
| Performance | Warning | Hypothesis | CWV unmeasured; homepage still heavy | PSI rate-limited prior runs | Re-run mobile PSI after deploy — not a confirmed CWV fail |
| Schema | Info | Confirmed | Cooking money page had no Person node | Tour schema was brand + AggregateRating only | This PR: Person JSON-LD for Chef Wayan Suryana |
| Images | Info | Confirmed | Jeep still Unsplash | `images.unsplash.com` jeep frames | Needs operator files |
| Technical | Pass | Confirmed | Crawl/index/security/AI bots healthy | robots all AI bots allowed; headers **100**; llms quality **100**; answer blocks **100** / 22 directs; EEAT **66** | None |
| On-page | Pass | Confirmed | Keyword jobs still hold | `/book` checkout-only; `/experiences` catalog | Do not reuse tour SERP titles on blogs |

---

## Category scores (rubric)

Each category lists positives, deficits, then `base = pos/(pos+def)×100` minus severity penalties. Live scores first; after-PR scores in parentheses.

### Technical SEO — 82/100 · weight 25%
**Positives:** robots.txt 200 + sitemap; all key AI crawlers allowed; security headers 100 (HSTS 2y + preload, CSP, XFO, XCTO, referrer, permissions); self-canonical.  
**Deficits:** homepage DOM weight; CWV unmeasured.  
**Penalties:** Warning×1 (performance adjacency, −5).  
**Justification:** Score of 82 reflects a clean crawl/index/security baseline (+), penalized by an oversized homepage and no field CWV.

### Content Quality — 78 → 80/100 · weight 20%
**Positives:** Unique operator IDR/pickup/venue facts; named chef; honest “not the summit / not Happy Swing / not Tirta Empul” disambiguation; comparison cluster.  
**Deficits:** Homepage claims still outnumber citations (script 51); EEAT 66 (org-only author on most posts); older culture posts thinner.  
**Penalties:** Warning×1 (−5) live; Person + visible TA reduce packaging deficit after deploy.  
**Justification:** Score of 80 after this PR reflects first-party facts (+) plus a named Person and a visible third-party review link.

### On-Page SEO — 80 → 82/100 · weight 15%
**Positives:** Unique titles ≤60 on money pages; one H1/page; `/book` and `/experiences` no longer clone homepage SERP language; 77/77 article CTAs mapped.  
**Deficits:** Homepage H1 is clever not keyword-led.  
**Justification:** Score of 82 after every blog hops to the matching tour instead of a generic checkout.

### Schema / Structured Data — 82 → 85/100 · weight 15%
**Positives:** JSON-LD only; TravelAgency+LocalBusiness; WebSite; TouristTrip + Offer; speakable; Question/Answer without commercial FAQPage.  
**Deficits:** No Wikidata `sameAs`.  
**Justification:** Score of 85 after Person + `instructor` on the cooking money page.

### Performance (CWV) — 60/100 · weight 10% · Score confidence: Low
**Positives:** Next Image + `sharp`; hero preload.  
**Deficits:** PSI not measured this run (environment limitation); catalog + GEO tables still heavy.  
**Justification:** Directional 60 only. Re-score after PSI.

### Images — 78/100 · weight 10%
**Positives:** Alts present on sampled inventory; OG 1200×630.  
**Deficits:** Unsplash jeep; homepage image count.  
**Justification:** Score of 78 — alts pass, jeep stock remains.

### AI Search Readiness (GEO) — 78 → 88/100 · weight 5%
**Positives:** Answer-block score 100 (22 directs); llms quality 100; pricing.md; AI bots allowed; SSR tour GEO blocks.  
**Deficits (live):** Citation 51; EEAT 66; 257-word llms lead.  
**After this PR:** 53-word “X is…” lead + priced bullets + visible TripAdvisor + full CTA map. Script citation score will stay ~51 because tripadvisor.com is not in `HIGH_TRUST_HOST_RE`.  
**Justification:** Score of 88 — extractable structure now matches the citation window; authority packaging improved for travel AIs even if the academic-domain checker does not move.

**Weighted live total:** 0.25×82 + 0.20×78 + 0.15×80 + 0.15×82 + 0.10×60 + 0.10×78 + 0.05×78 = **78**.  
**Weighted after this PR:** 0.25×82 + 0.20×80 + 0.15×82 + 0.15×85 + 0.10×60 + 0.10×78 + 0.05×88 = **84**.

---

## Keyword jobs (anti-cannibalization)

Keep one URL on each head query. Do **not** give `/book`, `/experiences`, or a blog the same title pattern as a `/tours/[slug]` money page.

| Head query | Owner |
|------------|--------|
| Jeep / cooking / ATV Ubud (brand + offer) | `/` |
| WhatsApp checkout | `/book` |
| Browse catalog | `/experiences` |
| Private ATV / cooking / jeep / cycling / swing / parks | matching `/tours/[slug]` |
| Compare / worth-it / clock / guide | matching `/blog/[slug]` |

---

## Technical SEO

- **robots.txt:** 200. Disallow `/admin/`, `/api/`, `/tools/`, `/invoice`. Sitemap `https://www.sekarbaliactivity.com/sitemap.xml`. GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot allowed. CCBot / Bytespider allowed (training).
- **Canonical:** Homepage self-canonical `https://www.sekarbaliactivity.com/`.
- **Security:** HTTPS + HSTS preload, CSP, frame/nosniff/referrer/permissions. Score **100**.
- **llms.txt:** 200, quality **100/100**, 13 sections. Live lead still the 257-word sentence; repo generators now emit the 53-word definition.

---

## Content & E-E-A-T

E-E-A-T script: **66**. Author = brand on most posts. Policy pages exist. `/contact` correctly separates corporate office (GBP), Ubud meeting point, and Sedang activity base.

Person schema for Chef Wayan Suryana is added on the cooking money page only — do not invent bylines on park-ticket posts.

---

## Schema

Keep: LocalBusiness, TouristTrip, Offer (IDR), speakable `.geo-answer-block`, Question/Answer.  
Added (repo): Person (`#chef`) + `instructor` on Tumang cooking.  
Do **not** add FAQPage (commercial restriction; FAQ rich results removed May 2026). Do **not** add HowTo.

---

## Performance

PageSpeed Insights: **not re-run** this pass — environment limitation, not a site fail. Re-run mobile PSI on `/`, ATV, jeep after deploy.

---

## Images

Cooking/ATV first-party. Jeep Unsplash. Not replaced — no new operator files.

---

## Operator facts that must stay extractable

- Jeep and tracking include a **sit-down meal after the viewpoint**; food is **not** cooked inside the 4×4. Not the summit trek.
- Tumang cooking: promo **IDR 450,000**, private **IDR 1,000,000 / person**, Chef Wayan Suryana, max 8, **free Ubud pickup**.
- ATV at **All New Bali Adventure**, Sedang — not Kuber / Dragon Cave. Pickup **IDR 400,000** or self-meet.
- Park / workshop / dirt-bike pickup is **quoted**. Do not invent free or 400K.

---

## Environment limitations

- PageSpeed / CrUX: not measured this run. Do not treat as a confirmed CWV fail.
- Live AI Overview / ChatGPT / Perplexity citation scrape: not run.
- GSC / analytics: not connected.
- `sitemap_index.xml` 404 is a script probe, not a site bug.
- `citation_readiness.py` “trusted” hosts are gov/edu/wikipedia/WHO/OECD — TripAdvisor is a travel citation, not a score mover.
- No local Next.js runtime in this environment — UI verified via source + live script evidence, not a browser pass.

---

## C) Prioritized action plan

See `ACTION-PLAN.md`. Immediate blockers: none. High items from the 2026-09-24 plan are implemented in this revision.

## D) Unknowns and follow-ups

1. Mobile LCP / INP / CLS field values after deploy.
2. Whether AI Overviews cite this domain for “ATV Ubud”, “Tumang cooking class”, “Mount Batur jeep no hike”.
3. GBP hours vs the published 08:00–20:00.
4. Operator jeep photos (blocked on files).
