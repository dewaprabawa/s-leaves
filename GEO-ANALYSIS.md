# GEO Analysis — sekarbaliactivity.com

**Audit date:** 2026-09-04  
**URL:** https://www.sekarbaliactivity.com  
**Method:** `seo-geo` rubric + live fetch (`robots_checker`, `llms_txt_checker`, homepage HTML) + codebase review  
**Product context:** `.agents/product-marketing.md` (Pejeng / Ubud adventure operator)

---

## GEO Readiness Score: 78/100

| Pillar | Weight | Score | Notes |
|--------|-------:|------:|-------|
| Citability | 25% | 21/25 | Strong answer blocks + citation snippets; TLDR ~61 words (OK). Missing cooking in machine tour/price tables. |
| Structural readability | 20% | 17/20 | SSR FAQ + comparison tables on homepage; homepage HTML ~199KB still heavy. |
| Multi-modal | 15% | 10/15 | Real tour imagery; no video/YouTube entity layer for AI text citation. |
| Authority / brand | 20% | 12/20 | Instagram/Facebook `sameAs` only; no Wikipedia / review-site entity depth. |
| Technical accessibility | 20% | 18/20 | SSR GEO block, `llms.txt` + `llms-full.txt`, AI bots allowed. Gaps: no `/pricing.md`, no agent `Link` discovery, `anthropic-ai` case alias. |

**Prior claimed “AI/GEO 100/100” (FULL-AUDIT-REPORT) overstated agent-readiness.** Core citability is strong; discovery/parseability for buying agents and full offer coverage still had gaps (confirmed below).

---

## Platform breakdown (evidence-based, not live citation monitoring)

| Platform | Score | Why |
|----------|------:|-----|
| Google AI Overviews | 72 | Relies on classic SEO + passages; speakable + FAQ structure help; brand third-party mentions weak. |
| ChatGPT (search) | 80 | `llms.txt` / full corpus + allowed GPTBot/OAI-SearchBot; entity `sameAs` thin. |
| Perplexity | 78 | Structured facts + comparisons; community/third-party presence not built. |
| Gemini / Google-Extended | 76 | Allowed crawler + owned-site structure; cooking offer under-indexed in GEO tables. |

*Live “are we cited?” checks were not run against ChatGPT/Perplexity UIs in this environment — treat platform scores as readiness, not observed citation share.*

---

## AI crawler access status

| Crawler | Status |
|---------|--------|
| GPTBot, ChatGPT-User, OAI-SearchBot | Explicitly allowed |
| ClaudeBot, Anthropic-AI | Explicitly allowed |
| PerplexityBot, Google-Extended, GoogleOther | Explicitly allowed |
| Applebot-Extended, Bytespider, FacebookBot, Amazonbot, cohere-ai, CCBot | Explicitly allowed |
| `anthropic-ai` (lowercase) | Checker flagged as unmanaged — inherits `*`; fix: add lowercase rule |

---

## llms.txt status

| File | Live | Notes |
|------|------|-------|
| `/llms.txt` | 200 (~19.7KB) | Valid title, description, primary pages, FAQ corpus |
| `/llms-full.txt` | 200 (~19.5KB) | Extended FAQ + booking flow |
| `/.well-known/llms.txt` | Present in app | Mirrors short file |
| `/pricing.md` | **404** | Agent-readiness gap (buying agents skip opaque pricing) |

---

## Brand mention analysis

| Surface | Status |
|---------|--------|
| Own site entity (NAP + arena roles) | Strong |
| Instagram / Facebook | In Organization `sameAs` |
| Wikipedia / Wikidata | Not present |
| TripAdvisor / Google reviews surface in schema | Not in `sameAs` |
| YouTube channel | Not linked for AI text-layer citations |
| Reddit / niche forums | Not systematically present |

---

## Passage-level citability

- Homepage `.geo-tldr` + `.geo-answer-block` are SSR and speakable-targeted — **Pass**.
- Optimal block length: many FAQ answers are 40–70 words (good for extraction).
- **Gap:** Cooking class exists as a tour + blog mentions but was missing from `GEO_TOUR_SUMMARIES` / `GEO_PRICING` / primary pages — agents comparing “what do you sell?” skipped it.
- **Gap:** Blog package article still said Single ATV **IDR 650,000** while live tiers / GEO / homepage use **IDR 600,000** — citation conflict risk.

---

## Server-side rendering check

- GEO FAQ section, tour quick-reference table, and TLDR appear in initial HTML (`geo-answer-block` count > 0) — **Pass**.
- Booking popup remains client-side (expected); facts needed for citation are not gated behind it — **Pass**.

---

## Top 5 highest-impact changes (execution order)

1. **Ship `/pricing.md`** (and sitemap + `llms.txt` link) so agents can parse IDR tiers without rendering the homepage.
2. **Complete GEO offer coverage** — add Balinese cooking class to tour summaries, pricing table, primary pages, and a comparison row.
3. **Fix IDR citation conflicts** — align blog “packages & prices” copy to 600K single-ATV tiers.
4. **Agent discovery headers** — HTTP `Link` to `/llms.txt`, `/llms-full.txt`, `/pricing.md`; alternate `text/markdown` link for pricing.
5. **Robots alias + strategy docs** — lowercase `anthropic-ai`; replace stale Phase-3 “future GEO” roadmap with an executable GEO plan.

---

## Schema recommendations

- Keep commercial-safe `Question`/`Answer` blocks (do **not** add FAQPage).
- Keep `speakable` selectors on `.geo-tldr` / `.geo-answer-block`.
- Add `pricing.md` to `significantLink` / DataCatalog datasets.
- Optional later: TripAdvisor/Google Maps URLs in `sameAs` when verified.

---

## Content reformatting suggestions

- Homepage FAQ subset: diversify beyond first 8 ATV/combo questions so rafting, booking, and pickup answers stay visible.
- Keep one 40–60 word definition lead; avoid expanding TLDR into a keyword cloud (prior density remediation).

---

## Execution log (this PR)

| Item | Status |
|------|--------|
| `/pricing.md` route + sitemap | Done |
| Cooking class in GEO corpus | Done |
| Blog ATV price alignment (650→600) | Done |
| Link headers + layout alternates | Done |
| robots `anthropic-ai` | Done |
| Homepage FAQ category diversity | Done |
| Strategy / action-plan GEO update | Done |
