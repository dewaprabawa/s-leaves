# Combo SEO / GEO audit — 4 Oct 2026

Scope: ATV single + rafting, ATV tandem + rafting, ATV + tubing. Evidence from live HTML, catalog copy, checkout mix, GA4 (4 Sept–1 Oct), GSC (2 Aug–29 Sep).

## Verdict

The flagship **ATV + Ayung rafting** money page is indexable and already a Google lead. The **sales articles** behind it are thin, and two of the three combo SKUs guests actually buy (tandem + rafting, ATV + tubing) have no honest commercial page. Fix the articles and GEO answers. Do **not** invent a 999K bundle or a third tour slug.

## Inventory (confirmed)

| Guest ask | Money page | Sales article | Checkout | Published from-price |
| --- | --- | --- | --- | --- |
| ATV single + rafting | `/tours/atv-rafting-combo` (200) | `/blog/atv-rafting-combo-ubud-2026` | `/book?combo=combo-atv-rafting` | 1.25M = one 750K ATV + one 500K rafting seat |
| ATV tandem + rafting | Same tour page option only | **None** | Same mix; say “tandem” | Couple math 2.0M before 10% (1.1M bike + two 450K rafting) |
| ATV + tubing | **No tour slug** | `/blog/atv-river-tubing-wos-river-bali` (Aug 30, ~250 words) | `/book?combo=combo-atv-tubing` | Mix already 10%. Copy still says “ask WhatsApp / we do not publish a bundle” |

Checkout already applies **10% for 2 activities, 12% for 3+**. Rafting **min 2**. Pickup **IDR 400,000 once** or self-meet. ATV lunch is on the ATV ticket. Rafting lunch is on the rafting ticket. **Tubing lunch is not included.**

## Findings

| Finding | Evidence | Impact | Severity |
| --- | --- | --- | --- |
| Combo already works in Google | GA4: ATV+rafting ~29 Google sessions vs ATV money page ~2 | Keep one flagship tour URL. Do not split `/tours/atv-tandem-rafting` | Pass |
| Single + rafting article is a price stub | ~550 words, no day flow, no single-vs-tandem section, SERP title hides that 1.25M is one seat | Couples bounce when they add two bikes + two rafts | Warning |
| Tandem + rafting has no page | Couple math lives in one table row. GEO FAQ only cites 1.25M | Couples searching “tandem ATV rafting” hit the ATV-only tandem post | Warning |
| ATV + tubing article is stale and wrong | “Hotel pickup (Ubud area usually free)” is false. No `seoTitle`. CTA says pick “ATV + River Tubing Combo” on the ATV tour page | Trust + GEO cite risk. ChatGPT already 22% of sessions | Critical (copy error) |
| Tubing GEO refuses a published mix | Tour + GEO: “we do not publish a bundled ATV+tubing IDR” while `/book?combo=combo-atv-tubing` already discounts 10% | Assistants cannot quote a floor; guests think the add-on is opaque | Warning |
| Keyword cannibalization risk | One money page must stay the book URL for both single and tandem rafting | New tandem **article** only. No second `/tours/` | Info |

## Honest numbers we will publish

| Party | Tickets | Before 10% | After 10% mix | Pickup |
| --- | --- | --- | --- | --- |
| From-price (1 ATV + 1 water seat) | 750K + 500K | 1,250,000 | 1,125,000 at checkout | +400K or self-meet |
| Couple, two single ATVs + 2 rafting or 2 tubing | 1,450,000 + 900,000 | 2,350,000 | 2,115,000 | +400K or self-meet |
| Couple, one tandem ATV + 2 rafting or 2 tubing | 1,100,000 + 900,000 | 2,000,000 | 1,800,000 | +400K or self-meet |

Do not print a fake package sticker. Rafting still **min 2**. Tubing is the same IDR as rafting and a **gentler Wos sit-on-tube**, not Ayung Class II–III.

## Action (this PR)

1. Expand `/blog/atv-rafting-combo-ubud-2026` into a single-ATV + rafting sales page (from-price vs couple day).
2. Add `/blog/atv-tandem-rafting-ubud-2026` for the couple tandem day (2.0M / 1.8M after mix).
3. Rewrite `/blog/atv-river-tubing-wos-river-bali` — kill free-pickup, publish floors + 10% mix, book `combo-atv-tubing`.
4. Update GEO / llms / money-page copy so assistants can cite the three SKUs without inventing a bundle.
