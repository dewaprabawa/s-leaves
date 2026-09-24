# GEO Analysis — Sekar Bali Activity

**Audit date:** 2026-09-24  
**GEO Readiness Score: 78/100** (live)  
**Platform scrape:** not run — readiness is structural, not citation-share.

Operator facts that must stay extractable:

- Jeep and tracking include a **sit-down meal after the viewpoint**; food is **not** cooked inside the 4×4. Not the summit trek.
- Tumang cooking: promo **IDR 450,000**, private **IDR 1,000,000 / person**, Chef Wayan Suryana, max 8, **free Ubud pickup**.
- ATV at **All New Bali Adventure**, Sedang — not Kuber / Dragon Cave. Pickup **IDR 400,000** or self-meet.
- Park / workshop / dirt-bike pickup is **quoted**. Do not invent free or 400K.

## Pillars

| Pillar | Weight | Score | Notes |
|--------|-------:|------:|-------|
| Citability | 25% | 18 | 22 direct answer blocks (script 100) but citation_readiness **51** (45 claims, 0 trusted outbound) |
| Structural readability | 20% | 17 | H2 question heads + tables on money pages; llms lead is a 257-word sentence |
| Multi-modal | 15% | 12 | First-party cooking/ATV; jeep Unsplash; no video layer |
| Authority / brand | 20% | 14 | TripAdvisor `sameAs` in schema only; EEAT 66; org-only author |
| Technical accessibility | 20% | 17 | AI bots allowed; llms.txt 100; llms-full; pricing.md; SSR GEO blocks |

## Platform breakdown (readiness, not live share)

| Platform | Score | Why |
|----------|------:|-----|
| Google AI Overviews / AI Mode | 80 | Traditional SEO is solid; people-first pages + unique IDR facts. No special markup required. |
| ChatGPT (search) | 78 | llms.txt + priced tables help; Wikipedia/Reddit entity presence not verified. |
| Perplexity | 76 | Extractable Q&A; community mentions unknown. |
| Gemini | 80 | Google-Extended allowed; LocalBusiness + geo meta present. |
| Copilot | 75 | Bing-oriented files not added (IndexNow unused). |

## AI crawler access

All of: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot — **allowed**.  
CCBot / Bytespider also allowed (training). Blocking those is optional and would not help citations.

## llms.txt status

- `/llms.txt` — 200, quality **100/100**, 13 sections, large link set.  
- `/llms-full.txt` — present.  
- `/.well-known/llms.txt` — mirrored.  
- `/pricing.md` — present, structured IDR.  
- Discovered via `rel=alternate` (correctly **off** the Google XML sitemap).

**Gap:** `GEO_QUICK_ANSWER` is one 257-word sentence. Rewrite as:

1. 40–60 word “what it is” definition.  
2. Priced bullets (jeep / cooking / cycling / ATV / pickup rules).  
3. Links already in the file.

## Brand mention analysis

| Surface | Status | Confidence |
|---------|--------|------------|
| Instagram / Facebook | Linked in footer + `sameAs` | Confirmed |
| TripAdvisor (Tumang) | Schema `sameAs` only — not a visible homepage citation | Confirmed |
| Wikipedia / Wikidata | Not found in repo or homepage | Hypothesis — likely absent |
| YouTube | Not present as a citation surface | Hypothesis |
| Reddit | Not audited this run | Unknown |

Brand mentions correlate more with AI citations than backlinks. A Wikipedia page is **not** something to manufacture; earn it if notable.

## Passage-level citability

**Strong (keep):**
- Tour “facts AI can cite” blocks (ATV, cooking, jeep) — first-sentence answers + IDR tables.
- Visible FAQ on tour pages (not FAQPage schema).
- Comparison articles (jeep vs trek, swing vs Tegallalang, zoo vs safari vs Taro).

**Weak:**
- Homepage GEO dump and `llms.txt` lead (too long, pronoun-heavy inventory).
- Default blog CTA was a generic `/book` hop (label fixed; many slugs still unmapped).

Optimal window used by this skill: **134–167 words** per self-contained block, **40–60** for the opening answer. Money-page TLDRs already sit in the short window.

## Server-side rendering

Tour GEO tables and article bodies are in the server tree (`tours/[slug]/page.tsx`, blog markdown). Homepage catalog is a client module (`HomePageClient`) but initial HTML from the live fetch still contained H1, prices, and GEO answer text — crawlers that skip JS still see the offer. Do not move prices exclusively into client state.

## Schema for AI discoverability

Keep: LocalBusiness, TouristTrip, Offer (IDR), speakable `.geo-answer-block`, Question/Answer.  
Do not add FAQPage or HowTo.  
Optional later: Person for Chef Wayan Suryana; more `sameAs` only for real profiles.

## Top 5 highest-impact GEO changes

1. Split the llms.txt definition (this file’s #1).  
2. Visible TripAdvisor (or other primary-source) citation on cooking surfaces.  
3. Map leftover blog slugs to money-page CTAs.  
4. Operator jeep photos.  
5. Quarterly refresh of `GEO_UPDATED` / price tables so agents do not quote last season.

## Content reformatting (specific)

Rewrite the llms.txt opener from the current inventory sentence to:

> Sekar Bali Activity is a Pejeng / Ubud-area operator. Guests book a private Mount Batur jeep, Tumang cooking class, Pejeng cycling, or Sedang ATV on WhatsApp — no payment to inquire. Pickup rules are published per activity.

Then list prices as a markdown table (already exists further down — promote it).
