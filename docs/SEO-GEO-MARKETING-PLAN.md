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

## 0) Oct 2026 improvement plan — booking first, then SEO/GEO

This is the working plan after the 4 Sept–1 Oct 2026 GA4 report (695 sessions, **0 key events**).  
GEO titles and `llms.txt` book URLs already shipped in #185. The next bottleneck is **WhatsApp**, not more blog volume.

### One sentence

Measure WhatsApp, convert the traffic we already get (Google jeep / combo / cooking / cycling + ChatGPT `/book`), then pull ATV Google from the location blog onto `/tours/bali-atv-adventure`. Do not write a pile of new posts until `generate_lead` shows which pages book.

### What the report already proved

| Fact | What it means for the plan |
|------|----------------------------|
| Google 262 sessions (38%), 66% engaged | Protect jeep, combo, cooking, cycling, motorbike. They already rank. |
| ChatGPT 153 sessions (22%), 60% engaged, `/book` 19 | GEO is working. `/book` must convert, not dump a long catalog. |
| Direct `/book` 14 at 93% / 2m 53s; direct ATV 17 at 82% / 4m 33s | These people want to send WhatsApp. Do not bury the send button. |
| ATV Google → location blog ~26 vs money page ~2 | Cannibalization. Blog must hand off to the tour URL. |
| `what-to-skip-on-a-6-day-bali-itinerary` 43 Google | Keep money CTAs (jeep / combo / ATV / cooking / cycling). |
| Instagram 28 sessions, 11s, `/experiences` 25 | Bio link is wrong. Point it at ATV or ATV+rafting. |
| 0 key events / Rp0 | Measurement gap. `generate_lead` marked 3 Oct. Revenue stays Rp0 until a `purchase` event exists. Do not read Rp0 as no sales. |

### Booking plan (activation)

**Goal:** more WhatsApp threads with activity + date + guests + IDR already filled.

**Current friction on the site**

- Tour cards offer three actions: **Book** (popup), **WhatsApp Consultation**, **Ask about this**. Book is a multi-field form; Consultation is one tap. Undecided guests skip the priced message.
- The older `/tours` booking form is **3 steps** and asks email, phone, and age before WhatsApp opens. Tourists drop there.
- `/book` is a long catalog. ChatGPT and Direct often land **without** `?activity=` / `?combo=`, so they must hunt for the SKU they already chose.
- Instagram bio sends people to `/experiences` (4-second bounce). That is not a booking page.

**Do this week (ops — no code)**

1. Tap one WhatsApp button on the live site and confirm `generate_lead` in GA4 **Realtime**.
2. Tag every new WA chat: Google / ChatGPT / Instagram / Direct / Repeat.
3. Reply in under **15 minutes** from 08:00–20:00 WITA. Rankings do not book if the chat sits.
4. First ATV reply always names **All New Bali Adventure, Sedang — not the Banjar Kenderan office**.
5. Change the Instagram bio / link-in-bio to `/tours/atv-rafting-combo` or `/tours/bali-atv-adventure` — not `/experiences`.
6. Keep two ready WA scripts: **ATV + Ayung rafting** (from 1.25M, 10% mix, pickup 400K once, rafting min 2) and **cycling + cooking** (free Ubud pickup).
7. Payment stays WhatsApp-only after the guest agrees. **No SeaBank / bank numbers on the site or in the first message.**

**Ship next on the site (say “implement booking” to start)**

1. If `/book?activity=` or `/book?combo=` is present, **collapse the catalog** and show only that SKU + a sticky **Send this on WhatsApp**.
2. Sticky one-tap WhatsApp on jeep, combo, cooking, cycling, and ATV money pages: *WhatsApp this price — no payment to inquire*.
3. Cut required Book-popup fields to **name, date, guests, hotel**. Email / phone / age become optional.
4. Prefill every WA message with activity, URL, published IDR, pickup rule.
5. Keep Consultation as the **secondary** button (undecided). Book / Send is primary (ready).

**Honest booking facts — never invent**

| Rule | Published 2026 |
|------|----------------|
| Single ATV | 750K / 725K / 700K (1 / 2 / 3+) |
| Tandem ATV | 1.1M |
| ATV + rafting flagship | from 1.25M · 10% mix |
| Rafting | 500K list / 450K for 2+ · **min 2** |
| Cycling | 750K / 725K / 700K · free Ubud pickup |
| Scooter promo | 450K |
| ATV / rafting pickup | **400K once** or self-meet at the arena |
| Cooking promo | 450K · free Ubud pickup |
| Jeep | 1.35M solo / 750K for 3+ · pickup included |
| Do not claim | cheapest vs 235K–350K SERP · fake 999K · Jungle Buggies 3-lap |

### SEO plan (Google)

**Protect what already ranks** — jeep, ATV+rafting combo, cooking, cycling, motorbike. Refresh facts; do not rebuild those pages.

**Fix the ATV leak**

- Money page title already owns *ATV All New Bali Adventure \| From 750K* (#185).
- Location blog must stay a **spoke**: first screen + last paragraph = **Book here → `/tours/bali-atv-adventure`**.
- Do not 301 the location blog while it still wins Google. Convert it; then re-check GSC in 30 days.
- First 100 words on the tour page: venue Sedang, from 750K, pickup 400K or self-meet, WhatsApp, not the office.

**Other Google work**

- Keep IDR + differentiator in titles (no hike / free Ubud pickup / All New Bali Adventure / max 8 guests).
- `what-to-skip` stays; it already earns 43 Google sessions — keep the money CTAs.
- Retired URLs (dance, offering, jungle-buggies 3-laps, Tegallalang swing): confirm 301 / do-not-cite. Do not revive copy.
- Export GSC last 28 days for `/tours/*`. Next spoke articles only for queries with **impressions and no ranking money page**.
- Cadence: **refresh 4 existing P0 pages / spokes** before writing new posts. Two new spokes a week only after `generate_lead` has a week of data.

### GEO plan (ChatGPT / Perplexity / AI Overviews)

ChatGPT is already 22% of sessions. The job is **citation → `/book` or money page → WhatsApp**, not more `llms.txt` prose.

1. Keep `/llms.txt`, `/llms-full.txt`, `/pricing.md` in sync **the same day** any IDR or pickup rule changes.
2. Lead answers with a book URL (already in GEO_QUICK_ANSWER / “Book these URLs”).
3. Monthly prompt check: ATV Ubud price, Batur no hike, cooking class Ubud, ricefield cycling pickup, ATV+rafting, rafting vs tubing.
4. Perplexity is 6 sessions — ignore until Google + ChatGPT convert.
5. Do not cite retired tickets. Do not invent cave ATV, e-bike cycling, or a summit-hike jeep.

### 30-day sequence

| Days | Focus | Done when |
|------|--------|-----------|
| 1–3 | Measure + Instagram bio + WA tags + reply SLA | `generate_lead` visible in Realtime; bio is a money page |
| 4–14 | Booking conversion on `/book` deep links + 5 money pages | ChatGPT / Direct `/book` sessions produce WhatsApp events |
| 15–30 | ATV blog → tour handoff, GSC query pass, 4 refreshes, LLM spot-check | First Events report: `generate_lead` by source/medium + page |

### What we will not do this month

- Paid ads before `generate_lead` exists
- New blog volume for its own sake
- Facebook / Bing / `dubgtcg.dbz` cleanup as a priority
- Publishing bank / SeaBank details
- Reviving Jungle Buggies 3-lap
- Claiming cheapest vs 235K–350K listings
- Inventing a 999K package

### How we know it worked

After 7+ days of real WhatsApp taps, send **GA4 Events** (`generate_lead`) + **Traffic source/medium** (no page-path dimension). We will rank channels by WhatsApp, not sessions. Booked guests still get a manual WA tag (Google / ChatGPT / IG / Direct) until a `purchase` event exists.

### GA4 baseline (4 Sept–1 Oct 2026)

| Channel | Sessions | Share | Quality |
|---------|----------|-------|---------|
| Google organic | 262 | 37.7% | Best — 66% engaged, 1m 10s |
| Direct | 222 | 31.9% | Mixed — 32% engaged |
| ChatGPT (`chatgpt.com / ai-assistant`) | 153 | 22.0% | Real AI demand — 60% engaged |
| Instagram | 28 | 4.0% | Weak — 11 seconds |
| Other (Bing, FB, Perplexity, spam) | 30 | 4.3% | Ignore Bing/FB/`dubgtcg.dbz` |

**695 sessions · 0 key events in that window** (`generate_lead` marked as a key event 3 Oct 2026). Google already ranks jeep, ATV+rafting combo, cooking, cycling, motorbike. ATV Google demand lands on the **location blog**, not `/tours/bali-atv-adventure` — GEO now cites the tour URL first. ChatGPT already opens `/book` and money pages; llms.txt lists those URLs. Instagram should not use `/experiences` as the bio link.

---

## 2) Tour portfolio (money pages)

| Tour | URL slug | From price | Primary money keyword | Intent |
|------|----------|------------|----------------------|--------|
| ATV + optional tubing | `/tours/bali-atv-adventure` | IDR 750K | `ATV Ubud price` / `ATV ride Bali` | High commercial |
| Mount Batur Sunrise Jeep | `/tours/batur-sunrise-jeep-tour` | IDR 1.35M (solo) / 750K (3+) | `Mount Batur jeep no hike` | High commercial + differentiator |
| Whitewater rafting | `/tours/whitewater-rafting` | IDR 500K (450K for 2+) | `rafting Ubud price` | Mid commercial |
| Canyon tubing | `/tours/canyon-tubing` | IDR 500K (450K for 2+) | `canyon tubing Bali` / `Wos River tubing` | Mid commercial |
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
- [ ] **Booking (P0):** Confirm `generate_lead` in Realtime; tag WA by source; Instagram bio → money page  
- [ ] **Booking (code when asked):** `/book` deep-link focus + fewer form fields + sticky WhatsApp on 5 money pages  
- [ ] Audit all 9 tours: title, meta, H1, visible price, schema price, duration ISO  
- [ ] Sync `pricing.md` + `llms.txt` + `llms-full.txt` to live IDR  
- [ ] GSC property verified; sitemap submitted  
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

Follow **§0** — booking first. Do not start a new article sprint until WhatsApp is measured.

1. **Realtime:** One live WhatsApp tap → confirm `generate_lead` in GA4 Realtime  
2. **Ops:** Tag WA chats by source; Instagram bio → ATV or ATV+rafting (not `/experiences`); reply &lt; 15 min  
3. **GSC:** Export last 28 days for `/tours/*` (impressions vs clicks) — use it after booking conversion, not instead of it  
4. **Fact lock:** Cooking 450K, ATV tiers, jeep tiers, combo from 1.25M, rafting min 2, pickup 400K once — page + schema + `pricing.md` + `llms.txt`  
5. **Next code slice (when asked):** `/book` deep-link focus + fewer Book-popup fields + sticky WhatsApp on the 5 money pages  

---

*Living document — update when prices, venues, or pickup rules change.*
