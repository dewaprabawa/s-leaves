# GEO Analysis — Sekar Bali Activity

**Audit date:** 2026-09-25  
**GEO Readiness Score: 78/100** (live) · **86/100** (this PR, after deploy)  
**Platform scrape:** not run — readiness is structural, not citation-share.

Operator facts that must stay extractable:

- Jeep and tracking include a **sit-down meal after the viewpoint**; food is **not** cooked inside the 4×4. Not the summit trek.
- Tumang cooking: promo **IDR 450,000**, private **IDR 1,000,000 / person**, Chef Wayan Suryana, max 8, **free Ubud pickup**.
- ATV at **All New Bali Adventure**, Sedang — not Kuber / Dragon Cave. Pickup **IDR 400,000** or self-meet.
- Park / workshop / dirt-bike pickup is **quoted**. Do not invent free or 400K.

## Pillars

| Pillar | Weight | Live | After PR | Notes |
|--------|-------:|-----:|---------:|-------|
| Citability | 25% | 18 | 21 | 22 direct answer blocks (script 100). Live citation_readiness **51** (45 claims, 0 high-trust outbound). Visible TripAdvisor + 53-word lead improve extractability; the checker only treats gov/edu/wikipedia as “trusted”, so the numeric score stays ~51. |
| Structural readability | 20% | 17 | 19 | H2 question heads + tables on money pages. Live llms lead was 257 words; repo lead is 53 words + priced bullets. |
| Multi-modal | 15% | 12 | 12 | First-party cooking/ATV; jeep Unsplash; no video layer. |
| Authority / brand | 20% | 14 | 16 | Live TA is schema `sameAs` only. Repo: visible homepage + llms.txt TripAdvisor href; Person schema for Chef Wayan Suryana. EEAT script still **66**. |
| Technical accessibility | 20% | 17 | 18 | AI bots allowed; llms.txt 100; llms-full; pricing.md; SSR GEO blocks. |

Live pillar total 78. After-PR pillar total **86**.

## Platform breakdown (readiness, not live share)

| Platform | Score | Why |
|----------|------:|-----|
| Google AI Overviews / AI Mode | 82 | Traditional SEO is solid; people-first pages + unique IDR facts. No special markup required. |
| ChatGPT (search) | 84 | Short llms.txt definition + priced bullets + TripAdvisor URL in the lead. |
| Perplexity | 80 | Extractable Q&A; community mentions unknown. |
| Gemini | 82 | Google-Extended allowed; LocalBusiness + geo meta present. |
| Copilot | 75 | Bing-oriented files not added (IndexNow unused). |

## AI crawler access

All of: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot — **allowed**.  
CCBot / Bytespider also allowed (training). Blocking those is optional and would not help citations.

## llms.txt status

- `/llms.txt` — 200, quality **100/100**, 13 sections.  
- `/llms-full.txt` — present.  
- `/.well-known/llms.txt` — mirrored.  
- `/pricing.md` — present, structured IDR.  
- Discovered via `rel=alternate` (correctly **off** the Google XML sitemap).

**Live gap (fixed in repo):** `GEO_QUICK_ANSWER` was one 257-word sentence.

**Now:**

1. 53-word “what it is” definition (`GEO_QUICK_ANSWER`).
2. Priced bullets (`GEO_LEAD_BULLETS`: jeep / cooking / cycling / ATV / park tickets).
3. Full inventory only in `GEO_INVENTORY` → `llms-full.txt` + `pricing.md`.
4. TripAdvisor URL under the lead.

## Brand mention analysis

| Surface | Status | Confidence |
|---------|--------|------------|
| Instagram / Facebook | Linked in footer + `sameAs` | Confirmed |
| TripAdvisor (Tumang) | Live: schema `sameAs` only. Repo: visible homepage + llms.txt href | Confirmed |
| Wikipedia / Wikidata | Not found in repo or homepage | Hypothesis — likely absent |
| YouTube | Not present as a citation surface | Hypothesis |
| Reddit | Not audited this run | Unknown |

Brand mentions correlate more with AI citations than backlinks. A Wikipedia page is **not** something to manufacture; earn it if notable.

## Passage-level citability

**Strong (keep):**
- Tour “facts AI can cite” blocks (ATV, cooking, jeep) — first-sentence answers + IDR tables.
- Visible FAQ on tour pages (not FAQPage schema).
- Comparison articles (jeep vs trek, swing vs Tegallalang, zoo vs safari vs Taro).
- Homepage GEO lead now sits in the 40–60 word window (53 words) with priced bullets underneath.

**Still weak:**
- Homepage catalog still dumps many IDR claims without academic-domain sources (script citation 51).
- Jeep Unsplash frames (multi-modal).

Optimal window used by this skill: **134–167 words** per self-contained block, **40–60** for the opening answer. Money-page TLDRs already sit in the short window.

## Server-side rendering

Tour GEO tables and article bodies are in the server tree (`tours/[slug]/page.tsx`, blog markdown). Homepage catalog is a client module (`HomePageClient`) but initial HTML from the live fetch still contained H1, prices, and GEO answer text — crawlers that skip JS still see the offer. Do not move prices exclusively into client state.

## Schema for AI discoverability

Keep: LocalBusiness, TouristTrip, Offer (IDR), speakable `.geo-answer-block`, Question/Answer.  
Added: Person for Chef Wayan Suryana on the cooking money page.  
Do not add FAQPage or HowTo.

## Top 5 highest-impact GEO changes

1. Split the llms.txt definition — **done in this PR**.  
2. Visible TripAdvisor citation on the homepage GEO block — **done**.  
3. Map leftover blog slugs to money-page CTAs — **done (77/77)**.  
4. Operator jeep photos — **blocked on files**.  
5. Quarterly refresh of `GEO_UPDATED` / price tables so agents do not quote last season — stamped **2026-09-25**.

## Content reformatting (shipped)

`GEO_QUICK_ANSWER` is now:

> Sekar Bali Activity is a Pejeng / Ubud-area travel operator. Guests book a private Mount Batur jeep, Tumang cooking class, Pejeng cycling, or Sedang ATV on WhatsApp — no payment to inquire. Pickup is free on cycling and cooking, island-wide on the jeep, IDR 400,000 or self-meet on ATV, and quoted on park tickets.

Then five priced bullets. The 257-word inventory remains available as `GEO_INVENTORY` for long-context files only.
