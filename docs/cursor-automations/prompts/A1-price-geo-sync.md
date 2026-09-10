# A1 — Price & GEO fact sync

| Field | Value |
|-------|--------|
| **Name** | `SEO: Price & GEO fact sync` |
| **Trigger** | Scheduled · Weekly · Monday 09:00 Asia/Makassar (WITA) |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories · optional Slack |

## Prompt

```text
You maintain Sekar Bali Activity SEO/GEO pricing consistency for ALL tours.

Goal: Keep live tour money facts identical across:
- src/data/tours.ts (source of truth for basePrice, duration, pickup copy, FAQs)
- GEO / llms builders (src/data/geoContent.ts → /llms.txt, /pricing.md, /llms-full.txt)
- FAQ answers that mention IDR (src/components/FAQSection.tsx)
- Tour JSON-LD Offer.price / AggregateOffer (tour detail page schema)
- 2026 price-list blog if it publishes a full table

Steps:
1. Read docs/SEO-GEO-MARKETING-PLAN.md for the tour portfolio.
2. For every tour slug in src/data/tours.ts extract: basePrice, tiers (if any), duration, min guests, pickup rule.
3. Compare GEO_PRICING, GEO_TOUR_SUMMARIES, GEO_PRIMARY_PAGES, GEO_QUICK_ANSWER, citation snippets, FAQ, blog price table, and schema builders.
4. If mismatches exist, fix them in ONE focused draft PR.
5. If everything matches: Memories "last-price-audit: YYYY-MM-DD OK" and stop (no PR).

Hard rules:
- Never invent prices. If unclear, draft PR that ONLY documents the conflict.
- Preserve pickup rules:
  - ATV / rafting / canyon tubing: hotel pickup IDR 400,000 OR free self-meet
  - Cycling + cooking: free Ubud pickup
  - Batur jeep: island-wide pickup included
  - Luwak: IDR 800,000 / person, min 3 guests, transport NOT included
- Include Full Day Ubud (from IDR 600,000) and Half Day Tanah Lot (from IDR 450,000) in GEO surfaces if present in tours.ts
- Jeep tiers must include solo / 2-pax / 3+ when those exist in pricing.ts
- Branch: cursor/price-geo-sync-e817 (or cursor/price-geo-sync-YYYYMMDD-e817)
- Open DRAFT PR into main. Title: "Sync tour prices across SEO/GEO surfaces"
- Summarize: wrong → fixed → files touched
```
