# Scheduled task: Weekly SEO + GEO article

**Use this prompt in Cursor Automations (or any scheduled agent).**  
**Frequency:** Weekly (recommended: Monday, Asia/Makassar)  
**Repo:** `dewaprabawa/s-leaves`  
**Branch prefix:** `cursor/seo-geo-article-`

---

## Automation prompt (copy below the line)

---

You are publishing one SEO + GEO article for **Sekar Bali Activity** (`https://www.sekarbaliactivity.com`).

### Step 1 — Pick the topic

1. Read `.github/automation/article-topic-queue.json`
2. Select the **highest-priority** topic with `"status": "pending"`
3. If none pending, stop and report that the queue is empty

### Step 2 — Research facts (required)

Read these files before writing — do not invent prices or policies:

- `src/data/tours.ts` — itineraries, inclusions, FAQs
- `src/data/geoContent.ts` — pricing, policies, entity facts
- `src/lib/meetingPoint.ts` — meeting point URL
- `.github/automation/ARTICLE-TEMPLATE.md` — structure

Run SEO evidence (optional but recommended):

```bash
python3 .cursor/skills/seo/scripts/internal_links.py https://www.sekarbaliactivity.com --depth 1 --max-pages 30
```

### Step 3 — Write the article

1. Append a new post to `src/data/blog.ts` following `ARTICLE-TEMPLATE.md`
2. Requirements:
   - **Answer-first opening** — bold question + direct answer (GEO)
   - **Key Takeaways** block (4 bullets)
   - **800–1,200 words** for commercial; 600+ for GEO
   - Link to all `tourLinks` from the topic queue entry
   - Link to all `internalLinks` from the topic queue entry
   - Include at least **2 links to `/tours/*`** pages
   - Mention **All New Bali Adventure** for ATV content
   - Mention optional pickup checkbox + meeting point link when relevant: `https://share.google/nPiK86d9rgxN19GkV`
   - End with a clear **Book now** CTA

### Step 4 — Update GEO corpus

In `src/data/geoContent.ts`:

1. Bump `GEO_UPDATED` to today's date (`YYYY-MM-DD`)
2. Add the new article to `GEO_ARTICLES`
3. If `geoFaqCandidate` exists on the topic, add one entry to `GEO_FAQ_FOR_LLM` with category, answer, and URL
4. Optionally add one line to `GEO_CITATION_SNIPPETS` (quotable fact)

### Step 5 — Internal linking (orphan fix)

Update **at least 2 existing** blog posts in `src/data/blog.ts` to link to the new article where contextually relevant.

If commercial article, update `travelGuides` in `src/app/(frontend)/page.tsx` (max 6 entries — add new, remove oldest generic entry).

### Step 6 — Verify

```bash
npm run build
```

Fix any TypeScript or build errors.

### Step 7 — Mark topic published

In `.github/automation/article-topic-queue.json`, set the topic's `"status"` to `"published"` and add:

```json
"publishedAt": "YYYY-MM-DD",
"prUrl": "optional after PR created"
```

### Step 8 — Commit and PR

1. Branch: `cursor/seo-geo-article-<slug-short>-4ec1`
2. Commit message: `Add SEO/GEO article: <title>`
3. Push and open a **draft PR** to `main`
4. PR body must list: new URL, tour links added, GEO FAQ added (if any), internal links updated

### Do NOT

- Add FAQPage JSON-LD (restricted for commercial sites)
- Invent prices, pickup rules, or locations
- Duplicate an existing slug in `blog.ts`
- Skip `npm run build`

---

## Quick reference — current pricing

| Tour | Price | Notes |
| --- | --- | --- |
| Single ATV | IDR 650,000 | All New Bali Adventure |
| Tandem ATV | IDR 859,000 | 2 pax |
| Whitewater rafting | IDR 400,000 | Class II–III |
| Canyon tubing | IDR 359,000 | Wos River |
| Ubud ricefield cycling | IDR 450,000 | Free Ubud pickup + 3 meals |

Pickup: optional checkbox in booking. Unchecked = meet at All New Bali Adventure (no fee). Checked = hotel address required; IDR 120,000 surcharge outside Ubud (free Ubud pickup on cycling only).
