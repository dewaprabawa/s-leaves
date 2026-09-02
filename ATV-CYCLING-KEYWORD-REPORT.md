# ATV & Cycling Competitor Keyword Report

**Date:** 2026-09-02  
**Site:** https://www.sekarbaliactivity.com  
**Focus:** Supporting SEO keywords for ATV / quad bike and ricefield cycling

## Competitors compared

| Niche | Competitors crawled / reviewed |
|-------|--------------------------------|
| ATV | baliquadbiking.com, atvrideubud.com (Kuber, Green ATV), pertiwiadventure patterns |
| Cycling | ubudcyclingtour.com, jegegbalicycling.com, dewabike.com, baliadventurecamp.com |

Automated gap crawl: 5 competitors, ~122 competitor pages vs Sekar (244 topics already covered).

---

## How competitors win SERPs

### ATV operators
They rank on **arena features + package modifiers**, not generic “Bali tours”:

| Competitor pattern | Example title / meta | Intent |
|--------------------|----------------------|--------|
| Head product noun | “Bali Quad Biking”, “ATV Ride Ubud” | Transactional |
| Arena USP | “Dragon Cave”, “700m tunnel”, “waterfall ATV” | Differentiator (do **not** copy unless true) |
| Beginner + safety | “beginner ATV”, “no experience needed” | Commercial |
| Price in snippet | “From IDR 600K”, “Book Now Pay Later” | CTR |
| Combos | ATV + rafting, ATV + river tubing, ATV + cave tubing | Upsell |
| Terrain words | jungle, mud track, rice field, river, waterfall | Mid-tail |

### Cycling operators
They rank on **route type + village authenticity**:

| Competitor pattern | Example | Intent |
|--------------------|---------|--------|
| Route brand | “Kintamani downhill cycling”, “Ubud rice fields” | Transactional |
| Terrain synonyms | rice paddy, ricefield, countryside, village | Mid-tail |
| Experience modifiers | family compound, home visit, lunch included | Commercial |
| Combo packages | cycling + tubing, cycling + rafting | Upsell |
| Soft effort cues | “mostly downhill”, “gentle”, “all fitness levels” | Reduce friction |

---

## Gap analysis: what Sekar already owns vs missing support terms

### Already strong (keep + reinforce)
- Private ATV / All New Bali Adventure arena
- ATV + Wos River tubing combo
- Pejeng village / Subak authenticity
- WhatsApp booking
- Ubud ricefield cycling + free pickup + 3 meals

### Missing or weak supporting keywords (priority)

#### ATV — add / reinforce (truthful to All New Bali Adventure)

| Priority | Supporting keyword | Why competitors use it | Where to place |
|----------|--------------------|------------------------|----------------|
| P0 | **ATV ride Ubud** | Head term on atvrideubud.com | Tour title/meta, footer, H1 support |
| P0 | **Bali quad bike tour Ubud** | baliquadbiking.com head noun “quad bike” | Meta, footer, body H2 |
| P0 | **beginner ATV Ubud** | FAQ / trust for first-timers | FAQ, blog, tour meta |
| P1 | **ATV mud track Ubud** | Terrain mid-tail (jungle/mud) | Tour body, image alt |
| P1 | **ATV with lunch included Bali** | Inclusion CTR | Highlights, Offer schema |
| P1 | **ATV rafting combo Bali** | Combo pages on baliquadbiking | Footer + compare blog |
| P1 | **ATV Ubud price 2026** | Price-intent SERPs | Pricing section / blog |
| P2 | single / tandem ATV solo ride | Package selectors | Booking UI + pricing labels |

**Do not target (false for Sekar):** Dragon Cave / Goa Naga, Kuber 700m tunnel, black-sand beach ATV, Green ATV Silakarang.

#### Cycling — add / reinforce (truthful to Pejeng ricefield route)

| Priority | Supporting keyword | Why competitors use it | Where to place |
|----------|--------------------|------------------------|----------------|
| P0 | **rice paddy cycling Ubud** | Synonym of ricefield; high search volume | Tour meta, footer, H2 |
| P0 | **Ubud countryside cycling tour** | Countryside / village bike SERPs | Tour title support, meta |
| P0 | **Pejeng village cycling / bike tour** | Unique geo moat competitors lack | Own this term |
| P1 | **cycling tour with lunch Ubud** | Meal-included CTR (you include 3 meals) | Meta + highlights |
| P1 | **small group village bike tour Bali** | Soft-private differentiator | Card copy |
| P1 | **authentic village cycling Pejeng** | Anti-Tegallalang mass tourism | Blog + about |
| P2 | Pejeng vs Tegallalang cycling | Comparison SERP already has blog | Internal links |

**Do not over-claim:** “Kintamani downhill volcano cycling” unless that exact route is offered. Competitors own that product line separately.

---

## Recommended supporting keyword set (copy-ready)

**ATV cluster:**  
`ATV ride Ubud`, `Bali quad bike tour Ubud`, `private ATV jungle Ubud`, `beginner ATV Ubud`, `ATV mud track Ubud`, `All New Bali Adventure ATV`, `tandem ATV Bali`, `ATV river tubing combo`, `ATV rafting combo Bali`, `ATV with lunch included`, `ATV Ubud price 2026`

**Cycling cluster:**  
`Ubud ricefield cycling tour`, `rice paddy cycling Ubud`, `Ubud countryside cycling tour`, `Pejeng village bike tour`, `village cycling Pejeng`, `cycling tour with lunch Ubud`, `small group cycling Bali`, `authentic village cycling Pejeng`

**Conversion modifiers (pair with both):**  
`all-inclusive`, `private / small group`, `from IDR …`, `hotel pickup Ubud`, `WhatsApp booking`, `beginner friendly`, `2026`

---

## Implementation in this PR

1. Expanded site `keywords` meta with ATV + cycling support terms  
2. Expanded footer SEO link cloud with competitor-matched anchors  
3. Strengthened ATV tour title/meta/body: “quad bike”, “ATV ride Ubud”, mud track, lunch, combos  
4. Strengthened cycling tour title/meta/body: rice paddy, countryside, Pejeng village, meals  

Re-crawl monthly:
```bash
python3 .cursor/skills/seo/scripts/competitor_gap.py https://www.sekarbaliactivity.com \
  --competitor https://www.baliquadbiking.com \
  --competitor https://atvrideubud.com \
  --competitor https://ubudcyclingtour.com \
  --competitor https://jegegbalicycling.com \
  --competitor https://www.dewabike.com --json
```
