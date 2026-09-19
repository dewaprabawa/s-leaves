# GEO Analysis — Cooking Class & Mount Batur Sunrise Jeep

**Audit date:** 2026-09-19  
**URLs:**  
- https://www.sekarbaliactivity.com/tours/balinese-cooking-class  
- https://www.sekarbaliactivity.com/tours/batur-sunrise-jeep-tour  
**Method:** `seo-geo` rubric + live fetch + repo (`cookingGeo.ts`, `jeepGeo.ts`, `geoContent.ts`, `llms.txt`)  
**Operator fact:** Jeep meals are **not** included; food is **not** served on the jeep.

Live citation scrapes (ChatGPT / Perplexity / AI Overviews) were **not** run. Scores are readiness, not observed share of voice.

---

## GEO Readiness Score: 71/100 (live) → 82/100 (this PR)

| Pillar | Weight | Live | This PR | Notes |
|--------|-------:|-----:|--------:|-------|
| Citability | 25% | 14/25 | 22/25 | Cooking passages were already extractable. Jeep’s most-cited inclusion was **false**. |
| Structural readability | 20% | 16/20 | 17/20 | Cooking has GEO H2 + table + Q&A. Jeep GEO block is in repo, missing on live. |
| Multi-modal | 15% | 9/15 | 9/15 | Cooking: first-party photos. Jeep: Unsplash only. No YouTube text layer. |
| Authority / brand | 20% | 12/20 | 12/20 | Cooking has TripAdvisor proof. Jeep/site `sameAs` still thin. |
| Technical accessibility | 20% | 18/20 | 19/20 | AI bots allowed; `llms.txt` 200. Jeep QA JSON-LD now injected. |

**Prior 2026-09-04 “78/100” sitewide score** assumed cooking was the gap. Cooking is now the stronger GEO page. Jeep was the citation-risk page because agents would copy “breakfast on top.”

---

## Platform breakdown (readiness)

| Platform | Cooking | Jeep (live) | Jeep (this PR) | Why |
|----------|--------:|------------:|---------------:|-----|
| Google AI Overviews | 80 | 52 | 76 | AIO follows ranking + passage truth. False breakfast is a quality hit. |
| ChatGPT search | 84 | 58 | 80 | `llms.txt` + GPTBot allowed; jeep facts were wrong in that file. |
| Perplexity | 82 | 56 | 78 | Will quote the FAQ “Yes, breakfast…” until deploy. |
| Gemini / Google-Extended | 80 | 54 | 76 | Crawler allowed; still needs index refresh after deploy. |

---

## AI crawler access status

| Crawler | Status |
|---------|--------|
| GPTBot, ChatGPT-User, OAI-SearchBot | Explicitly allowed |
| ClaudeBot, Anthropic-AI, anthropic-ai | Explicitly allowed |
| PerplexityBot, Google-Extended, GoogleOther | Explicitly allowed |
| Applebot-Extended, Bytespider, FacebookBot, Amazonbot, cohere-ai, CCBot | Explicitly allowed |

**Pass.** No need to block search-and-cite bots.

---

## llms.txt status

| File | Live | Notes |
|------|------|-------|
| `/llms.txt` | 200 | Lists both tours with IDR. Jeep summary still said “breakfast on top” on 2026-09-19. |
| `/llms-full.txt` | 200 | Mirrors FAQ corpus including the false breakfast Q&A. |
| `/.well-known/llms.txt` | Present in app | Mirror of short file |
| `/pricing.md` | Generator in repo | Jeep includes line repeated the breakfast claim |

This PR updates generators. Live files change on deploy (`GEO_UPDATED` / `JEEP_GEO_UPDATED` → 2026-09-19).

---

## Brand mention analysis

| Surface | Cooking | Jeep |
|---------|---------|------|
| Own money page + GEO block | Strong (live) | Strong in repo; **GEO block not live** |
| TripAdvisor | Tumang 5.0 / 1500+ linked | None first-party |
| Wikipedia / Wikidata | No | No |
| YouTube | No | No |
| Reddit / forums | Not systematic | Not systematic |
| Instagram / Facebook `sameAs` | Site-level only | Site-level only |

Cooking can earn citations via the named kitchen + review count. Jeep must win on **unique operator facts**: no hike, crater rim ~1,350m, island-wide pickup, **meals not included**.

---

## Passage-level citability

### Cooking — Pass

Live TLDR (self-contained, ~55 words): promo IDR 450,000, was 506,370, Chef Wayan Sudiana, max 8, AM market, rice-field walk, free Ubud pickup, TripAdvisor 2026.

Query-shaped H3s match fan-out: price, market tour, vegetarian, couples, pickup, morning vs afternoon.

### Jeep — Fail on live, Pass after this PR

**Bad live passage (do not keep):**  
“Yes — a simple breakfast is served on top of the jeep right after sunrise…”

**Replacement passage (this PR, 40–60 words):**  
Sekar Bali Activity’s Mount Batur Sunrise Jeep Tour is a private no-hike 4×4 to a crater-rim viewpoint (~1,350m) near Kintamani. Solo IDR 1,350,000 / 2 guests IDR 825,000 / 3+ IDR 750,000 per person. Hotel pickup and a hot drink are included. **Meals are not included and food is not served on the jeep.**

---

## Server-side rendering check

- Cooking GEO FAQ, price table, and TLDR appear in initial HTML — **Pass**.
- Jeep GEO block is SSR in repo (`JeepGeoBlock`) but **absent from live HTML** — **Fail live / Pass after deploy**.
- Booking popup remains client-side; citation facts are not gated — **Pass**.

---

## Top 5 highest-impact changes

1. **Correct the jeep meal fact everywhere agents read** (money page, FAQ, `llms.txt`, `pricing.md`, blogs, homepage). **This PR.**
2. **Deploy** so live HTML matches the repo (jeep GEO block + No-breakfast FAQ).
3. **Keep cooking’s extractable table**; add worth-it / vegetarian spokes later.
4. **First-party jeep images** so multi-modal selection is not Unsplash stock.
5. **Canonicalize jeep-compare slugs** so internal links and `significantLink` do not split equity.

---

## Schema recommendations

- Keep commercial-safe `Question`/`Answer` (this PR injects jeep QA). **Do not** add `FAQPage`.
- Keep `speakable` on `.cooking-geo-tldr` / `.jeep-geo-tldr`.
- `Offer.description` is built from `tour.included` — removing breakfast from `included` also fixes schema.
- Optional later: TripAdvisor URL in cooking `sameAs` (already in `significantLink`).

---

## Content reformatting (jeep)

| Before (do not cite) | After |
|----------------------|--------|
| Breakfast served on top of the jeep | Meals not included; food not served on the jeep |
| Included: breakfast | Not included: food / meals |
| FAQ: Yes, breakfast is included | FAQ: No. Bring a snack if you want to eat. Hot drink included. |
| Title: From IDR 750K | Title: No Hike, Island Pickup |

Cooking copy does not need a meal-fact rewrite.

---

## Prompt tracking (monthly)

| Prompt | Must-include facts | Ready after this PR? |
|--------|--------------------|----------------------|
| Best small-group cooking class Ubud price | Promo 450K, max 8, free Ubud pickup, Tumang / Chef Wayan | Yes |
| Mount Batur sunrise without hiking | Private 4×4, crater rim not summit, island-wide pickup, IDR tiers | Yes |
| Is breakfast included on the Batur jeep? | **No. Food is not served on the jeep.** | Yes (repo); live until deploy: **No** |
| Jeep vs trek | Different products; jeep is not the summit | Yes — keep this, drop food-on-jeep |

---

## Execution log (this PR)

| Item | Status |
|------|--------|
| Jeep meals removed from includes / GEO / blogs / homepage | Done |
| “Is breakfast included?” kept as a **No** | Done |
| Jeep SERP title de-baited | Done |
| Jeep QA JSON-LD injected | Done |
| Duplicate jeep schema + pickup + guides key | Done |
| `GEO_UPDATED` / `JEEP_GEO_UPDATED` → 2026-09-19 | Done |
| Live citation scrape | Not run |
