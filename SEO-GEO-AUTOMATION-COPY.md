# Sekar Bali — Weekly SEO/GEO Article Automation

**Copy everything inside the box below** into Cursor → Automations → New automation → Prompt.

**Suggested schedule:** Weekly, Monday 09:00, timezone `Asia/Makassar`  
**Repo:** `dewaprabawa/s-leaves`  
**Base branch:** `main`

---

```
Publish one SEO + GEO article for Sekar Bali Activity (https://www.sekarbaliactivity.com).

STEP 1 — PICK TOPIC
Read .github/automation/article-topic-queue.json
Choose the highest-priority topic with "status": "pending"
If none pending, stop and say the queue is empty

STEP 2 — READ FACTS (do not invent prices)
- src/data/tours.ts
- src/data/geoContent.ts
- src/lib/meetingPoint.ts

STEP 3 — WRITE ARTICLE
Append new post to src/data/blog.ts using this structure:

{
  slug: 'slug-from-queue',
  title: 'Title from queue (2026)',
  excerpt: 'One sentence with price/location, max ~160 chars',
  publishedAt: 'YYYY-MM-DD',
  author: 'Sekar Bali Activity',
  image: '/images/adventures/atv-adventure.jpg',
  content: `
**[Target question]?** Direct answer first sentence with brand, price, location.

> **Key Takeaways**
> - Bullet 1
> - Bullet 2
> - Bullet 3
> - Bullet 4

---

## Section heading

Body with internal links to tour pages and related blog posts.

**Book now** — [Tour name](/tours/slug).
`
}

Article rules:
- Answer-first opening (bold question + direct answer) for GEO/AI citation
- 800–1200 words commercial, 600+ words GEO
- Link all tourLinks and internalLinks from the queue topic
- At least 2 links to /tours/* pages
- ATV content: mention All New Bali Adventure arena
- Pickup: optional checkbox in booking; no pickup = meet at https://share.google/nPiK86d9rgxN19GkV
- End with Book now CTA

STEP 4 — UPDATE GEO
In src/data/geoContent.ts:
- Bump GEO_UPDATED to today (YYYY-MM-DD)
- Add article to GEO_ARTICLES
- If topic has geoFaqCandidate, add one GEO_FAQ_FOR_LLM entry
- Optionally add one GEO_CITATION_SNIPPETS line

STEP 5 — INTERNAL LINKS
Update at least 2 existing blog posts in src/data/blog.ts to link to the new article
If commercial: update travelGuides in src/app/(frontend)/page.tsx (max 6, rotate oldest)

STEP 6 — BUILD
Run: npm run build
Fix any errors

STEP 7 — MARK PUBLISHED
In article-topic-queue.json set topic status to "published" and add publishedAt date

STEP 8 — COMMIT & PR
Branch: cursor/seo-geo-article-<short-slug>-4ec1
Commit: Add SEO/GEO article: <title>
Push and open draft PR to main

DO NOT:
- Add FAQPage JSON-LD
- Invent prices or policies
- Duplicate an existing blog slug
- Skip npm run build

FACTS (always use these):
- Site: https://www.sekarbaliactivity.com
- Single ATV: IDR 650,000 | Tandem ATV: IDR 859,000
- Whitewater rafting: IDR 400,000 | Canyon tubing: IDR 359,000
- Ubud ricefield cycling: IDR 450,000 (breakfast, lunch, dinner; free Ubud pickup only)
- Pickup surcharge: IDR 120,000 outside Ubud (cycling free pickup in Ubud only)
- ATV arena: All New Bali Adventure, Pejeng
- Meeting point: https://share.google/nPiK86d9rgxN19GkV
- WhatsApp: +62 817 7572 3663
- No upfront payment to inquire

Tour pages:
- /tours/bali-atv-adventure
- /tours/whitewater-rafting
- /tours/canyon-tubing
- /tours/ubud-ricefield-cycling-tour
```

---

## Topic queue (next articles)

Run `node scripts/seo-geo-next-topic.mjs` to see the current next topic.

| # | Slug | Title |
|---|------|-------|
| 1 | `bali-atv-for-beginners-first-time-guide` | Bali ATV for Beginners |
| 2 | `meet-at-all-new-bali-adventure-no-pickup` | Meet at All New Bali Adventure (no pickup) |
| 3 | `single-atv-vs-tandem-atv-bali` | Single vs Tandem ATV |
| 4 | `ubud-ricefield-cycling-tour-with-kids` | Cycling with Kids & Families |
| 5 | `what-to-bring-bali-atv-rafting-tubing` | What to Bring |
| 6 | `bali-group-adventure-tours-discounts` | Group Tours & Discounts |
| 7 | `best-time-bali-atv-rafting-near-ubud` | Best Time for ATV & Rafting |
| 8 | `atv-and-tubing-combo-day-itinerary` | ATV + Tubing Combo Itinerary |

Full queue: `.github/automation/article-topic-queue.json`

---

## Cursor Automation setup (30 seconds)

1. Cursor → **Automations** → **New automation**
2. Name: `Weekly SEO GEO Article`
3. Schedule: **Weekly** → Monday → 09:00 → `Asia/Makassar`
4. Repository: `dewaprabawa/s-leaves`
5. Paste the prompt from the code block above
6. Turn on **Create pull request** (draft)
7. Save

---

## After each run checklist

- [ ] New post in `src/data/blog.ts`
- [ ] `geoContent.ts` updated
- [ ] 2+ internal links from old posts
- [ ] Topic marked `published` in queue
- [ ] `npm run build` passes
- [ ] Draft PR open
