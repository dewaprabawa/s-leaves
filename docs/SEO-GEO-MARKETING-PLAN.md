# SEO + GEO Marketing Plan — Sekar Bali Activity

**Site:** https://www.sekarbaliactivity.com  
**Goal:** More Google + AI (ChatGPT / Perplexity / Gemini / AI Overviews) visibility → more clicks → more WhatsApp bookings  
**Scope:** All 9 tour / activity pages  
**Horizon:** 90 days (execution) + 12 months (authority)  
**Owner model:** Founder + ops (WhatsApp) + content agent / contractor  

---

## 1) North-star outcomes

| Metric | 90-day target | How to measure |
|--------|---------------|----------------|
| Organic sessions to `/tours/*` | +40–60% vs baseline | GA4 |
| WhatsApp clicks from tour pages | +50% | GA4 event / UTM on `wa.me` |
| Booked guests from organic / AI | Track manually in WA (tag “Google” / “ChatGPT”) | Spreadsheet |
| Tour pages in top 10 for primary money keywords | 4+ of 9 tours | GSC |
| Brand / tour cited in AI answers | Appear for 8+ tracked prompts | Monthly LLM spot-checks |

**Conversion path we optimize for:**  
Search / AI answer → tour money page → **WhatsApp Consultation** or **Book** → paid guest.

---

## 2) Tour portfolio (money pages)

| Tour | URL slug | From price | Primary money keyword | Intent |
|------|----------|------------|----------------------|--------|
| ATV + optional tubing | `/tours/bali-atv-adventure` | IDR 750K | `ATV Ubud price` / `ATV ride Bali` | High commercial |
| Mount Batur Sunrise Jeep | `/tours/batur-sunrise-jeep-tour` | IDR 1.35M (solo) / 750K (3+) | `Mount Batur jeep no hike` | High commercial + differentiator |
| Whitewater rafting | `/tours/whitewater-rafting` | IDR 500K | `rafting Ubud price` | Mid commercial |
| Canyon tubing | `/tours/canyon-tubing` | IDR 359K | `canyon tubing Bali` / `Wos River tubing` | Mid commercial |
| Ricefield cycling | `/tours/ubud-ricefield-cycling-tour` | IDR 750K | `Ubud ricefield cycling` | High commercial + culture |
| Luwak coffee (Umah Kuno) | `/tours/luwak-coffee-plantation` | IDR 800K (min 3) | `ethical luwak coffee Ubud` | Trust / niche |
| Tumang cooking class | `/tours/balinese-cooking-class` | IDR 450K promo | `cooking class Ubud price` | Highest culture priority |
| Full day Ubud | `/tours/full-day-ubud-tour` | IDR 600K | `full day Ubud tour private` | Mid commercial |
| Half day Ubud + Tanah Lot | `/tours/half-day-ubud-tanah-lot-tour` | IDR 450K | `Tanah Lot sunset tour from Ubud` | Mid commercial |

**Priority tiers (effort order)**  
1. **P0 — Book now:** Cooking class, ATV, Batur jeep, Cycling  
2. **P1 — Fill calendar:** Rafting, Canyon tubing, Luwak coffee  
3. **P2 — Upsell / packages:** Full-day Ubud, Half-day Tanah Lot  

---

## 3) Strategy in one sentence

Win **clear IDR + pickup + venue facts** on every tour page (Google + LLMs copy these), then surround each money page with a **content cluster** that answers comparison / “worth it” / “how much” questions and routes back to WhatsApp.

---

## 4) Google SEO plan (rank + click)

### 4.1 On-page (every tour) — checklist

Do this once per tour, then refresh quarterly:

- [ ] **Title ≤60 chars** with money modifier (`price`, `from IDR`, `Ubud`, differentiator)
- [ ] **Meta description 150–160 chars** with price + CTA (“WhatsApp booking”)
- [ ] **One H1** = tour name; H2s = itinerary, inclusions, pickup, FAQ
- [ ] **Price visible above the fold** (matches schema `Offer.price`)
- [ ] **Unique first 100 words** (venue, pickup rule, what is / is not included)
- [ ] **Internal links:** 2 related tours + 2 blog guides + `/book` + `/pricing.md`
- [ ] **WhatsApp Consultation + Book** CTAs (already shipping on detail pages)
- [ ] **Images:** WebP/AVIF &lt;200KB where possible; descriptive alt; hero = real activity
- [ ] **No placeholder media** (no fake YouTube IDs)

### 4.2 Technical SEO (sitewide)

- [ ] Keep `sitemap.xml`, canonicals, HTTPS, security headers (already strong)
- [ ] Fix any tour schema bugs (`duration` ISO must match real hours — e.g. `1.5 Hours` → `PT1H30M`)
- [ ] Page-scoped `WebPage` + `TouristTrip`/`Product` + `Offer` + `BreadcrumbList` on every tour
- [ ] **Do not** add commercial `FAQPage` / `HowTo` schema for rich results
- [ ] Core Web Vitals: LCP &lt;2.5s mobile on top 4 tour URLs (compress heroes)
- [ ] GSC: submit sitemap; fix coverage; monitor queries per tour slug

### 4.3 Content clusters (topical authority)

Build **one pillar + 4–8 spokes** per P0 tour:

| Pillar (money page) | Spoke blog themes (examples) |
|---------------------|------------------------------|
| Cooking class | worth it 2026, vegetarian menu, market vs no-market, cycling+cooking day |
| ATV Ubud | price 2026, All New Bali Adventure location, ATV vs tandem, ATV+tubing combo |
| Batur jeep | jeep vs trek, pickup times by area, no-hike sunrise, who should skip the hike |
| Cycling Pejeng | free Ubud pickup explained, Subak paths, cycling+cooking itinerary |

**Publishing cadence:** 2 spoke articles / week for 8 weeks (16 articles), then 1 / week maintenance.

### 4.4 Click-through (SERP)

- Put **IDR** in title/description when accurate  
- Use differentiators competitors omit: *ethical cage-free*, *no hike*, *free Ubud pickup*, *max 8 guests*, *All New Bali Adventure arena*  
- Avoid generic “best Bali tour” titles  

---

## 5) GEO / LLM plan (citations + AI answers)

LLMs prefer **stable facts, clear prices, named venues, and machine-readable files**.

### 5.1 Agent-readable surfaces (keep fresh)

| File / surface | Action |
|----------------|--------|
| `/llms.txt` | List all 9 tours with **exact IDR**, duration, pickup rule, URL |
| `/llms-full.txt` | Expand FAQs + citation snippets per tour |
| `/pricing.md` | Single source of truth for all IDR tiers + pickup fees |
| Tour JSON-LD | `Offer.price` must match on-page IDR |
| Homepage GEO Q&A | Keep ATV/cooking FAQs on homepage only (not polluting every tour URL) |

**Update rule:** Any price change → update tour data + `pricing.md` + `llms.txt` + FAQ answers the **same day**.

### 5.2 Answer-shaped content (for AI Overviews / ChatGPT)

Every P0 tour page must answer in the first screenful:

1. **How much?** (IDR + min pax)  
2. **Where?** (named venue / area)  
3. **Pickup?** (free / included / +IDR 400K / self-meet)  
4. **How long?**  
5. **Who is it for / not for?**  
6. **How to book?** (WhatsApp — no deposit to inquire)

Add a short **“Quick answer”** block (visible HTML, not only schema) near the top of each tour — LLMs extract these.

### 5.3 Prompt tracking (monthly)

Test and log whether Sekar Bali is cited for:

- “How much is ATV in Ubud 2026?”
- “Mount Batur sunrise without hiking”
- “Best cooking class Ubud small group price”
- “Ubud ricefield cycling with hotel pickup”
- “Ethical luwak coffee tasting near Ubud”
- “ATV + river tubing Ubud combo”
- “Rafting vs canyon tubing near Ubud”

If missing: strengthen the matching spoke article + refresh `llms.txt` facts.

### 5.4 Citation assets

- One **comparison table** per competitive query (jeep vs trek, rafting vs tubing, ethical vs caged luwak)
- First-party photos + named operator (“Sekar Bali Activity”) + WhatsApp number in prose
- TripAdvisor / Google review links where real (cooking class especially)

---

## 6) Per-tour action list

### P0 — Cooking class (`balinese-cooking-class`)
1. Lock promo IDR 450K vs was-price everywhere (page, schema, llms, pricing.md)  
2. Speakable / GEO TLDR block (market AM vs afternoon)  
3. Cluster: 4 posts → all link to money page + WhatsApp  
4. Push “max 8 guests + free Ubud pickup” in title/meta  

### P0 — ATV (`bali-atv-adventure`)
1. Price tiers (1 / 2 / 3+) + optional tubing clearly above fold  
2. Venue NAP: All New Bali Adventure, Sedang — map + self-meet vs IDR 400K pickup  
3. Cluster: cost 2026, location guide, private vs mass market, combo tubing  
4. Internal link from homepage pricing table  

### P0 — Batur jeep (`batur-sunrise-jeep-tour`)
1. Solo / 2 / 3+ offer schema (already patterned) — keep accurate  
2. Own “no hike / crater rim / pickup included island-wide” messaging  
3. Cluster: guide 2026, jeep vs trek, pickup times south Bali vs Ubud  
4. Disambiguate optional Kintamani coffee stop ≠ Umah Kuno Luwak tour  

### P0 — Cycling (`ubud-ricefield-cycling-tour`)
1. Emphasize **free Ubud pickup + lunch** in SERP snippet  
2. Cluster: worth it?, Pejeng Subak, cycling+cooking full day  
3. Cross-sell cooking class CTA mid-page  

### P1 — Rafting / Tubing
1. Class II–III vs canyon float differentiation  
2. One comparison blog: rafting vs tubing vs ATV  
3. Combo CTAs to ATV money page  

### P1 — Luwak (`luwak-coffee-plantation`)
1. Keep IDR **800,000 / min 3 / transport not included** consistent  
2. Ethical / cage-free as primary SERP angle (not “cheapest”)  
3. Cluster: how to spot ethical luwak, Umah Kuno sourcing  
4. Schema duration `PT1H30M`  

### P2 — Day tours
1. Private car / driver inclusions vs entrance fees excluded  
2. Thin-content risk: expand itinerary + sample schedule + hotel areas served  
3. Package with cooking or cycling as “culture day” internal links  

---

## 7) Sales / conversion actions (clicks → WhatsApp)

SEO without conversion wastes rankings.

| Action | Why |
|--------|-----|
| Keep **WhatsApp Consultation** on every tour (pre-filled activity + URL) | Low-friction for undecided guests |
| Keep **Book** form → WhatsApp with price | High-intent path |
| Tag WA chats: source = Organic / AI / Ads | Learn what content sells |
| Reply SLA &lt; 15 min during 08:00–20:00 WITA | Rankings ≠ sales if slow reply |
| Offer 2 ready combos in WA scripts | ATV+tubing; cycling+cooking |
| Monthly price audit | Prevent Google/AI citing stale IDR |

---

## 8) 90-day roadmap

### Weeks 1–2 — Unblock & align facts
- [ ] Audit all 9 tours: title, meta, H1, visible price, schema price, duration ISO  
- [ ] Sync `pricing.md` + `llms.txt` + `llms-full.txt` to live IDR  
- [ ] GSC property verified; sitemap submitted  
- [ ] GA4: events for WhatsApp CTA clicks per tour slug  
- [ ] Compress remaining heavy tour heroes  

### Weeks 3–4 — Foundation
- [ ] Quick-answer blocks on all P0 pages  
- [ ] Internal link pass: homepage ↔ tours ↔ top blogs  
- [ ] Publish 4 spoke articles (1 per P0 tour)  
- [ ] Ensure consultation CTA live on all tours  

### Weeks 5–8 — Velocity
- [ ] Publish 8 more spokes (2 / week)  
- [ ] One comparison page each: jeep vs trek; rafting vs tubing; ethical luwak  
- [ ] Refresh cooking + ATV money pages with new FAQs from real WA questions  
- [ ] Start monthly LLM citation checklist  

### Weeks 9–12 — Compound
- [ ] Update top 10 blogs with 2026 prices  
- [ ] Add 2 combo landing sections (not thin doorway pages)  
- [ ] Review GSC queries → new FAQ / spoke backlog  
- [ ] Report: organic sessions, WA clicks, booked guests by tour  

---

## 9) 12-month outlook (quarters)

| Quarter | Focus |
|---------|--------|
| Q1 | P0 money-page excellence + 16 cluster articles + GEO file hygiene |
| Q2 | P1 tours + English/Indonesian FAQ expansion + review generation loop |
| Q3 | Video embeds (real) on ATV/jeep/cooking; YouTube SEO → site |
| Q4 | Package pages (culture day, adventure day) only if unique content ≥800 words |

---

## 10) Do / Don’t

**Do**
- Lead with exact IDR, venue names, pickup rules  
- Write like a local operator (first-hand experience)  
- Keep agent files (`llms.txt`, `pricing.md`) in sync with the site  

**Don’t**
- Buy AI citations or fake reviews  
- Spam identical location pages  
- Add `FAQPage` / `HowTo` schema for commercial rich results  
- Change prices on the page without updating schema + llms + pricing.md  

---

## 11) KPI dashboard (weekly)

1. GSC clicks / impressions for each `/tours/*`  
2. GA4 tour page views + WA click events  
3. WA bookings tagged by tour  
4. Top 5 queries per tour (opportunity list)  
5. LLM spot-check score (cited / not cited)  

---

## 12) Immediate next actions (this week)

1. **Baseline:** Export GSC last 28 days for all `/tours/*`  
2. **Fact sync:** Confirm cooking 450K, ATV tiers, jeep tiers, luwak 800K, cycling 750K in page + schema + `pricing.md` + `llms.txt`  
3. **Ship content:** One article each for cooking, ATV, jeep, cycling (or refresh existing) with hard CTA to WhatsApp  
4. **Conversion:** Confirm Consultation + Book on all 9 detail pages in production  
5. **Assign owner:** Who updates prices; who writes spokes; who answers WA  

---

*Living document — update when prices, venues, or pickup rules change.*
