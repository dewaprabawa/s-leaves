# GEO Analysis — New Activities (Sekar Bali Activity)

**2026-10-04 money-page audit:** https://www.sekarbaliactivity.com/tours/whitewater-rafting — GEO readiness **84/100** live, higher after this PR. SSR TL;DR + price table + 7 GEO FAQs already existed. Gaps vs motorbike: title led with “Best Price”, Offer was 500,000 only, no `Question` nodes, no speakable, GEO H2 said “facts AI can cite”, llms lead featured the ATV combo not standalone Ayung. This PR adds keyword-first title, Product/AggregateOffer 450,000–500,000, standalone Question/Answer, speakable CSS, Ayung llms bullet, pickup-checker link. Do **not** claim cheapest vs 235K–350K shared tickets. Full write-up: `FULL-AUDIT-REPORT.md`.

**2026-10-04 money-page audit:** https://www.sekarbaliactivity.com/tours/bali-motorbike-traveling-trip — GEO readiness **90/100**. SSR TL;DR, price table, 10 Question/Answer nodes (not FAQPage), speakable selectors, llms.txt 100/100. Remaining GEO gaps: title led with “Best Price Scooter…” (fixed in the audit PR), destination H3s were thin (expanded), H2 said “facts AI can cite” (now “Bali motorbike tour from Ubud — 2026 facts”), planner calculator was not linked. Do not buy citations. Full write-up: `FULL-AUDIT-REPORT.md`.

**Audit date:** 2026-09-28  
**GEO Readiness Score: 58/100** (live motorbike hole) · **86/100** (coverage PR) · **90/100** (motorbike money-page upgrade)  
**Platform scrape:** not run — readiness is structural, not citation-share.

Operator facts that must stay extractable on the new SKUs:

- **Bali motorbike tour:** from **IDR 450,000** per 125–160cc automatic scooter (Ubud) to **IDR 800,000** (East). Tickets and lunch **not** included. Pickup at the **chosen area**. Ride (IDP recommended) or pillion. Not Sedang ATV, not a dirt bike, not a private car. Money page now has a definition-first TLDR, 134–167 word answer blocks, and per-destination AggregateOffer.
- **UTV at Bali Buggy Adventures (Pemogan):** single **IDR 1,200,000** · tandem **IDR 1,500,000**. About 1 hour / 7 km. Lunch included. Driver 17+ / passenger 6+. Pickup **quoted**. Not Sedang ATV.
- **Park / workshop / dirt-bike tickets:** we book the published ticket (source from-price + IDR 200,000). Pickup **quoted**. Do not invent free or 400K.

## Pillars

| Pillar | Weight | Live | After PR | Notes |
|--------|-------:|-----:|---------:|-------|
| Citability | 25% | 12 | 23 | Motorbike now has an “X is…” TLDR (~54 words) plus 134–167 word price / definition / vs-car answers. |
| Structural readability | 20% | 12 | 19 | Motorbike money page now has definition, priced table, vs-car/ATV table, destination H3s, and GEO Q&A. |
| Multi-modal | 15% | 11 | 12 | First-party motorbike/UTV photos; no video. |
| Authority / brand | 20% | 12 | 16 | Host note + desk notes; no Wikipedia. TripAdvisor remains cooking-class sameAs. |
| Technical accessibility | 20% | 11 | 18 | AI bots allowed; llms 100. Live agent files omitted motorbike; UTV missing from inventory sentence. |

Live pillar total 58. Coverage-PR pillar total 86. After money-page upgrade **88**.

## Platform breakdown (readiness, not live share)

| Platform | Score | Why |
|----------|------:|-----|
| Google AI Overviews / AI Mode | 84 | People-first money pages + unique IDR. Motorbike now answers “scooter vs driver” without a cloned title. |
| ChatGPT (search) | 86 | llms.txt definition + priced bullets + motorbike / UTV rows in summaries and pricing.md. |
| Perplexity | 80 | Extractable Q&A; community mentions unknown. |
| Gemini | 82 | Google-Extended allowed; LocalBusiness + geo meta present. |
| Copilot | 75 | Bing-oriented files not added (IndexNow unused). |

## AI crawler access

All of: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot — **allowed**.  
CCBot / Bytespider also allowed (training).

## llms.txt status

- `/llms.txt` — 200, quality **100/100**, 14 sections (live 2026-09-28).
- `/llms-full.txt` — present.
- `/.well-known/llms.txt` — mirrored.
- `/pricing.md` — present.

**Live gap:** motorbike absent from llms + pricing. UTV present in summaries, absent from `GEO_INVENTORY`.

**Now:**

1. Motorbike row in `GEO_TOUR_SUMMARIES` + `GEO_PRICING`.
2. UTV + motorbike named in `GEO_INVENTORY`.
3. Pickup policy distinguishes motorbike (chosen area) from quoted park/UTV and 400K adventure surcharge.
4. Comparison table: scooter vs private car.

## Brand mention analysis

| Surface | Status | Confidence |
|---------|--------|------------|
| Instagram / Facebook | Linked in footer + `sameAs` | Confirmed |
| TripAdvisor (Tumang) | Visible cooking citation; not a motorbike/UTV review page | Confirmed |
| Wikipedia / Wikidata | Not found | Hypothesis |
| YouTube | Not present as a citation surface | Hypothesis |
| Reddit | Not audited this run | Unknown |

Do not manufacture a Wikipedia page. Do not buy citations.

## Passage-level citability

**Strong (keep):**
- UTV “facts AI can cite” — first-sentence answer + single/tandem table + “not ATV”.
- Safari package table (Hopper → Rhino).
- Canyoning vs tubing vs buggies spoke.
- Motorbike TLDR (54 words) + destination price table + vs-driver spoke (this PR).

**Still weak:**
- Workshop pages share a from-price band; individual teachers unnamed.
- No speakable CSS hooks on motorbike beyond the shared ActivityGeoBlock.
- No original survey / first-party rider-count stats.

## Schema recommendations (AI discoverability)

- Keep JSON-LD `TouristTrip` + `Offer` on every new money page.
- Do **not** add FAQPage or HowTo.
- Optional later: `speakable` cssSelector on `.answer-block` for motorbike/UTV TLDRs (cooking/jeep already have dedicated WebPage builders).

## Content reformatting (done or still open)

| Passage | Action |
|---------|--------|
| Motorbike H1 body | Keep destination sections; GEO block now leads with the 54-word definition |
| `GEO_QUICK_ANSWER` | Unchanged (54 words). Do not dump the inventory back in |
| Things-to-do hub | Added motorbike row + UTV/motorbike choose-table lines |
| Organization description | Now names motorbike + UTV |

## Top 5 highest-impact changes

1. Ship the motorbike GEO corpus so AI can cite IDR / tickets / pickup.
2. Add motorbike + UTV to `GEO_INVENTORY` and `/pricing.md`.
3. Publish the vs-private-driver spoke (comparison content is the most-cited GEO format).
4. Fix Organization `priceRange` so entity markup matches dirt-bike / Griya extremes.
5. Request indexing on the new money page, spoke, llms.txt, and pricing.md after deploy.
