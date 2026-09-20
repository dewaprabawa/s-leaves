# SEO weekly backlog

**Last run:** 2026-09-14 (A3 cluster — `cooking-class-ubud-price-2026-worth-it`)  
**Owner:** Sekar Bali marketing / Cursor automation A2

## Inbox
<!-- Slack/manual ideas land here -->

## This week — top 5 opportunities

1. **Mount Batur jeep pickup time from Canggu / Seminyak**  
   - Money page: `/tours/batur-sunrise-jeep-tour`  
   - Why it sells: High-ticket sunrise product (solo IDR 1.35M · 2 pax 950K · 3+ 750K). Guests abandon if they do not know a 02:00–03:00 island-wide pickup is included (not the ATV IDR 400K add-on). Guide + vs-trek posts exist; no dedicated “pickup times by area” spoke.  
   - Effort: **M**  
   - Action: **new article** (south Bali vs Ubud clock) + **title tweak** on money page — SERP title `Mount Batur Sunrise Jeep | No Hike, From IDR 750K` is the 3+ group rate; solo guests can read that as bait.

2. **Tandem ATV Ubud price / single vs tandem**  
   - Money page: `/tours/bali-atv-adventure`  
   - Why it sells: Couples search “tandem ATV” before WhatsApp. Price 2026, arena, private-vs-mass, and tubing-combo posts exist; marketing plan still lists **ATV vs tandem** as an unwritten spoke. Money-page title now includes tandem (`ATV Ride Ubud from IDR 750K | Tandem 1.1M`, 2026-09-18).  
   - Effort: **M**  
   - Action: **new article** (single IDR 750K vs tandem IDR 1.1M, who shares). Title tweak shipped.

3. **Ricefield cycling Ubud — free pickup + IDR 750K in the title**  
   - Money page: `/tours/ubud-ricefield-cycling-tour`  
   - Why it sells: Booking reason is **free Ubud pickup + lunch** on a 2-hour Pejeng ride. Title `Rice Paddy Cycling Ubud | Pejeng` (32 chars) omits both money modifiers (they sit only in the meta). Cluster already has worth-it, vs Tegallalang, combo day, pickup explainer.  
   - Effort: **S**  
   - Action: **title tweak** (e.g. `Ricefield Cycling Ubud | Free Pickup 750K`). Do not write another generic cycling guide.

4. **Cooking class Ubud worth it 2026 / vegetarian menu**  
   - Money page: `/tours/balinese-cooking-class`  
   - Why it sells: Promo IDR 450K + free Ubud pickup + max 8. Money page QA’d 2026-09-11; cluster still missing the two commercial spokes from the marketing plan (`worth it 2026`, vegetarian / market vs no-market). FAQ already confirms a full vegetarian/vegan menu if requested at booking.  
   - Effort: **M**  
   - Action: **new article** (honest worth-it + dietary request + morning market vs afternoon). Not this week’s first write — rotate jeep/ATV first.

5. **Rafting Ubud price** (P1 clearly underserved)  
   - Money page: `/tours/whitewater-rafting`  
   - Why it sells: IDR 500K list / IDR 450K for 2+ on Class II–III is a mid-ticket filler next to ATV. Comparison blog exists (`/blog/rafting-vs-tubing-vs-atv-near-ubud`). Canyon tubing uses the same 500K / 450K for 2+ list.  
   - Effort: **S**  
   - Action: **keep titles** on both P1 pages (`Rafting Ubud | 500K · 450K for 2+`, `Canyon Tubing Ubud | 500K · 450K for 2+`) + **internal links** from ATV money page.

## P0 rotation

| Tour | Slug | Cluster status | This week |
|------|------|----------------|-----------|
| Cooking | `/tours/balinese-cooking-class` | Money page QA’d 2026-09-11. Spokes: inside class, pickup, cycling+cooking, spices. **Missing:** worth it, vegetarian, market vs afternoon. | Hold money-page edits. Article later this month. |
| ATV | `/tours/bali-atv-adventure` | Money page QA’d 2026-09-18 (title/tandem/venue/schema/WA). Cluster still **missing** dedicated single-vs-tandem article. Combo IDR not on tour card. | Hold money-page edits. Tandem article still next. |
| Batur jeep | `/tours/batur-sunrise-jeep-tour` | Guide 2026 + jeep vs trek. **Missing:** pickup times by area; title “from 750K” risk. | **Primary focus.** |
| Cycling | `/tours/ubud-ricefield-cycling-tour` | Densest cluster (worth it, vs Tegallalang, combo, pickup, 2026 guide). Duration now 2 hours. | Title only + fix AM/PM friction (see sales notes). |

Skip generic “best Bali” ideas. P2 day tours stay on hold.

## Next 2 articles to write

1. **Mount Batur Jeep Pickup Times from Canggu, Seminyak & Ubud (2026)**  
   - Primary keyword: `Mount Batur jeep pickup time from Canggu`  
   - Target: `/tours/batur-sunrise-jeep-tour`  
   - WhatsApp CTA angle: Send **hotel area + date + guest count** — we confirm the exact 02:00–03:00 pickup (south Bali earliest, Ubud later), no hike, **no payment to inquire**.

2. **Single vs Tandem ATV Near Ubud: 2026 Price and Who Should Share**  
   - Primary keyword: `tandem ATV Ubud price`  
   - Target: `/tours/bali-atv-adventure`  
   - WhatsApp CTA angle: Say **1 or 2 riders + hotel** — we quote single (from IDR 750K) vs tandem (IDR 1.1M for two), optional **IDR 400K pickup** vs self-meet at All New Bali Adventure, Sedang.

## Next articles to write
| Priority | Working title | Target money page | Status |
|----------|---------------|-------------------|--------|
| P0 | Cooking Class Ubud Price 2026: Is It Worth It? | /tours/balinese-cooking-class | drafted 2026-09-14 |
| P0 | Vegetarian / vegan Tumang menu | /tours/balinese-cooking-class | todo |
| P0 | Morning market vs afternoon class | /tours/balinese-cooking-class | todo |
| P0 | ATV Ubud unwritten spoke (price already live) | /tours/bali-atv-adventure | todo |
Do **not** write these in this run (A3 cluster writer). Next-up after those: `Is a Balinese Cooking Class in Ubud Worth It in 2026?` → `/tours/balinese-cooking-class` (promo 450K, max 8, free pickup, vegetarian on request).

## Sales friction notes

List only — no UI redesign in this run.

- Rafting + canyon tubing FAQs still say free Ubud pickup applies to **cycling only**; cooking class also includes complimentary Ubud pickup (`src/data/tours.ts`).
- Cooking and ATV set `venue` / `pickup` chips. Jeep, cycling, luwak, rafting, tubing, and day tours still omit ATF venue (jeep/cycling already have pickup).
- ATV option `ATV + River Tubing Combo` uses `priceDiff: 0` (“ask for combo pricing”). Book card maps ATV to single/tandem only — combo is not a priced bookable SKU. `/book` featured combos discount ATV+tubing, but the money page cannot quote it.
- ATV combo blog (`/blog/atv-river-tubing-wos-river-bali`) says “Hotel pickup (Ubud area usually free)” — **false**. ATV pickup is IDR 400,000 (or self-meet).
- Cycling money page + `BookNowButton` are **afternoon only** (`13:30`). Combo / worth-it blogs still frame cycling as a **morning** block before Tumang cooking.
- Cycling worth-it post still says cycling is the **only** tour with free Ubud pickup; cooking also includes it (pickup explainer is correct).
- Luwak Book fallback is `minPax: 1` while copy requires **minimum 3**; transport to Tampaksiring is not included and is easy to miss in the form.
- Jeep Book times are `02:30` / `03:00` only — south Bali often needs closer to 02:00; title “From IDR 750K” is 3+ not solo.
- `src/lib/pricing.ts` comment still says pickup is “free on Ubud cycling only” (cooking is also free).
- Full-day / half-day Ubud tours mark `pickupIncluded: true` while entrance fees and meals are excluded from the from-price.
- Jeep heroes are Unsplash stock (weaker trust on a 1.35M sunrise product).

## Existing slugs (do not duplicate)

**Tours:** `bali-atv-adventure` · `batur-sunrise-jeep-tour` · `whitewater-rafting` · `canyon-tubing` · `ubud-ricefield-cycling-tour` · `luwak-coffee-plantation` · `balinese-cooking-class` · `full-day-ubud-tour` · `half-day-ubud-tanah-lot-tour`

**Blogs already covering commercial intent:**  
`how-much-does-atv-cost-bali-ubud-2026` · `bali-atv-all-new-bali-adventure-location-guide` · `private-atv-vs-mass-market-ubud` · `atv-river-tubing-wos-river-bali` · `ubud-atv-track-types-mud-jungle-vs-cave-tunnel` · `mount-batur-sunrise-jeep-tour-guide-2026` · `mount-batur-jeep-vs-sunrise-trek` · `is-ubud-cycling-tour-worth-it` · `ubud-ricefield-cycling-tour-guide-2026` · `pejeng-rice-terrace-cycling-vs-tegallalang` · `cycling-cooking-class-ubud-full-day-itinerary` · `ubud-hotel-pickup-bali-adventures-explained` · `rafting-vs-tubing-vs-atv-near-ubud` · `bali-whitewater-rafting-near-ubud-guide` · `bali-canyon-tubing-guide-ubud` · `bali-adventure-packages-prices-2026` · `inside-balinese-cooking-class-pejeng` · `luwak-coffee-ethical-sourcing` · `how-to-spot-ethical-luwak-coffee-in-bali`

## Tour QA notes
<!-- A6 appends here -->

### 2026-09-18 — `bali-atv-adventure` (implemented in PR)
Scores (source): Title/meta/H1 64 · ATF facts 72 · Schema Offer+ISO 78 · Cluster links 76 · WhatsApp title 88 · FAQ IDR 90.

Shipped:
1. Absolute SERP title `ATV Ride Ubud from IDR 750K | Tandem 1.1M` (41 chars; was 27 and omitted tandem).
2. H1/title now `Bali ATV Quad Bike Adventure near Ubud` (adds Ubud; tubing is optional, not in H1). Meta adds pickup IDR 400K vs self-meet (151 chars).
3. ATF + booking card: venue chip `All New Bali Adventure, Sedang`; price shows single 750K · tandem 1.1M. Card no longer advertises 3+ IDR 700K as a fake “from” promo.
4. Schema `AggregateOffer` (single 750K / tandem 1.1M) + `duration: PT4H` + `location` Place. WhatsApp Consultation prefills title + single from IDR 750,000.
5. Cluster: in-body links to price / arena / track-types / tubing / private-vs-mass; track-types added to related guides. FAQ adds single vs tandem + self-meet vs IDR 400K pickup.

Left for later (not this PR): tandem comparison article; combo `priceDiff: 0`; combo blog still says Ubud pickup is usually free.

### 2026-09-11 — `balinese-cooking-class` (implemented in PR)
Scores (source + live HTML): Title/meta/H1 62 · ATF facts 70 · Schema Offer+ISO 92 · Cluster links 80 · WhatsApp title 90 · FAQ IDR 95.

Shipped:
1. Absolute SERP title `Cooking Class Ubud | Tumang · Free Pickup 450K` (was truncated by `| Sekar Bali Activity`).
2. Meta trimmed to ≤160; H1 now `Tumang Bali Cooking Class near Ubud`.
3. ATF + booking card chips: price, duration, free Ubud pickup, Tumang venue.
4. Private booking `priceDiff` now 183,090 (live IDR 633,090) — was 126,720 / 576,720.
5. Cluster: pickup guide + inside-class post on money page + WebPage `significantLink`.

WhatsApp Consultation already prefills tour title; now also includes promo IDR. Schema `AggregateOffer` + `duration: PT4H` already valid; added `location` Place.

## Technical / schema debt
<!-- A2/A4 appends here -->

- `whitewater-rafting` and `canyon-tubing` have no `seoTitle` / `seoDescription`.
- Cycling `seoTitle` missing price + free-pickup modifiers (meta already has them).
- Jeep `seoTitle` leads with group-rate “From IDR 750K”.
- ATV `seoTitle` now includes tandem (`ATV Ride Ubud from IDR 750K | Tandem 1.1M`, 2026-09-18).
- Pickup comment in `pricing.ts` out of date vs cooking free-Ubud rule.
- Confirm any price/duration change still syncs `pricing.md` + `llms.txt` the same day (cycling duration → 2 hours already in tour data).
