# Article template — Sekar Bali Activity (SEO + GEO)

Use this structure when adding a post to `src/data/blog.ts`.

## Frontmatter object (TypeScript)

```ts
{
  slug: 'your-slug-here',
  title: 'Primary Keyword: Clear Benefit (2026)',
  excerpt: 'One sentence answer with price or location if commercial. Max ~160 chars for meta.',
  publishedAt: 'YYYY-MM-DD', // today's date in ISO format
  author: 'Sekar Bali Activity',
  image: '/images/adventures/atv-adventure.jpg', // or rafting.jpg, cycling.jpg, canyon-tubing.jpg, hero-banner.jpg
  content: `
...markdown body...
`
}
```

## Body structure (required for GEO citability)

```markdown
**[Target question in bold?]** Direct answer in the first sentence with price, location, and brand name.

> **Key Takeaways**
> - Bullet 1 (price or policy)
> - Bullet 2 (what is included)
> - Bullet 3 (who it is for)
> - Bullet 4 (how to book)

---

## Section H2 (intent cluster)

Paragraph with facts. Link to tour page: [Bali ATV Adventure](/tours/bali-atv-adventure).

## Comparison or table (if applicable)

| Item | Details |
| --- | --- |
| Single ATV | IDR 650,000 |

## How to book

1. Open [sekarbaliactivity.com](/)
2. Tap **Book Now** — optional pickup checkbox; meet at [All New Bali Adventure](https://share.google/nPiK86d9rgxN19GkV) if no pickup
3. Send WhatsApp with name, date, activity, price

**Book now** — [Tour page CTA](/tours/SLUG).
```

## Facts — always use these (do not invent)

| Fact | Value |
| --- | --- |
| Site | https://www.sekarbaliactivity.com |
| Single ATV | IDR 650,000 |
| Tandem ATV | IDR 859,000 |
| Whitewater rafting | IDR 400,000 |
| Canyon tubing | IDR 359,000 |
| Ubud ricefield cycling | IDR 450,000 (breakfast, lunch, dinner; free Ubud pickup) |
| Pickup surcharge | IDR 120,000 outside Ubud (cycling free pickup Ubud only) |
| ATV arena | All New Bali Adventure, Pejeng |
| Meeting point map | https://share.google/nPiK86d9rgxN19GkV |
| WhatsApp | +62 817 7572 3663 |
| Booking | No upfront payment to inquire |

## Tour page links

- `/tours/bali-atv-adventure`
- `/tours/whitewater-rafting`
- `/tours/canyon-tubing`
- `/tours/ubud-ricefield-cycling-tour`

## After publishing — also update

1. `src/data/geoContent.ts` — add to `GEO_ARTICLES`; optional new `GEO_FAQ_FOR_LLM` entry; bump `GEO_UPDATED`
2. `src/app/(frontend)/page.tsx` — add to `travelGuides` if commercial (keep max 6, rotate oldest)
3. 2+ existing blog posts — add internal link to the new article
4. Run `npm run build`
