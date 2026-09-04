# Competitor Keyword Report: Cycling + Cooking Class Combo

**Date:** 2026-09-03  
**Site:** https://www.sekarbaliactivity.com  
**Focus:** Close the `cycling cooking class Ubud` gap competitors already rank for

## Competitors reviewed

| Source | What they rank for |
|--------|--------------------|
| ubudcyclingtour.com | Cycling + cooking class packages, downhill cycling, ATV combos |
| cookingclassinubud.com | Morning cooking class, market visit, farm-to-table |
| ByFood / Bali Travel Life / Cili Travel | “Cycling and Cooking Class in Ubud” product pages (~USD 90–130) |
| baliquadbiking.com / atvrideubud.com | ATV head terms + safety equipment (adjacent gaps) |

Automated crawl (2026-09-03): `competitor_gap_2026-09-03.json` — 4 competitors, 48 Sekar pages / 320 topics.

## Highest-value gaps for Sekar (truthful only)

| Priority | Keyword / topic | Competitor signal | Action taken |
|----------|-----------------|-------------------|--------------|
| P0 | **cycling cooking class Ubud** | ubudcyclingtour + ByFood SERPs | New blog post |
| P0 | **cycling and cooking class in Ubud** | Exact competitor title pattern | Title + H1 + meta keywords |
| P0 | **rice paddy cycling** + cooking | Countryside / paddy mid-tail | Post body + footer links |
| P1 | **Balinese cooking class Ubud** | cookingclassinubud.com | Tour shortDescription + GEO FAQ |
| P1 | safety equipment (ATV) | baliquadbiking, atvrideubud | Keyword meta only (already covered in ATV inclusions) |
| Skip | Mount Batur sunrise, Lovina dolphins, flying fox | Off-product | Do not target |

## Published post

- **URL:** `/blog/cycling-cooking-class-ubud-full-day-itinerary`
- **Title:** Cycling & Cooking Class in Ubud: Full-Day Itinerary, Prices & How to Book (2026)
- **GEO:** Answer-first open + Key Takeaways + price tables + citability FAQ entries in `geoContent.ts`
- **Truthful packaging:** Day = Ricefield Cycling (IDR 475,000); Evening = Dinner Cooking Class (IDR 400,000, 17:30–20:30)

## On-site SEO / GEO updates

- Site `keywords` meta: combo + cooking modifiers
- Footer SEO cloud: Cycling & Cooking Class Ubud links
- Homepage travel guides: new post featured first
- `GEO_UPDATED` → 2026-09-03; combo FAQs + citation snippet + article list
- Internal links from cycling guide, cooking class guide, and comparison post

## Re-run crawl

```bash
python3 .cursor/skills/seo/scripts/competitor_gap.py https://www.sekarbaliactivity.com \
  --competitor https://ubudcyclingtour.com \
  --competitor https://www.baliquadbiking.com \
  --competitor https://cookingclassinubud.com \
  --competitor https://atvrideubud.com --json
```
