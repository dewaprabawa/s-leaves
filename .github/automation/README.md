# SEO / GEO article automation

Scheduled content workflow for **Sekar Bali Activity** blog + AI citation (GEO).

## Files

| File | Purpose |
| --- | --- |
| `seo-geo-weekly-article.md` | **Main agent prompt** — paste into Cursor Automation |
| `article-topic-queue.json` | Topic backlog (pending → published) |
| `ARTICLE-TEMPLATE.md` | Article structure + fact sheet |
| `../workflows/seo-geo-article-schedule.yml` | GitHub weekly reminder issue |

## Setup — Cursor Automation (recommended)

1. Open **Cursor → Automations → New automation**
2. **Schedule:** Weekly, Monday 09:00 (or your preference), timezone `Asia/Makassar`
3. **Repository:** `dewaprabawa/s-leaves`
4. **Branch:** `main` (agent creates feature branch)
5. **Prompt:** Copy everything under *"Automation prompt"* in `seo-geo-weekly-article.md`
6. Enable **Create pull request** (draft)

## Setup — GitHub Actions reminder (optional)

The workflow `.github/workflows/seo-geo-article-schedule.yml` opens a GitHub Issue every Monday with the next topic from the queue. Use it as a reminder or trigger a manual agent run.

**Cron:** `0 1 * * 1` (Monday 01:00 UTC ≈ 09:00 Bali)

## Add new topics

Edit `article-topic-queue.json` — add an object with `"status": "pending"`:

```json
{
  "id": "unique-id",
  "status": "pending",
  "priority": 9,
  "slug": "url-slug-here",
  "title": "Article Title (2026)",
  "type": "commercial",
  "targetQuery": "search query to rank for",
  "tourLinks": ["/tours/bali-atv-adventure"],
  "internalLinks": ["/blog/existing-post-slug"],
  "geoFaqCandidate": "Question for GEO FAQ?",
  "image": "/images/adventures/atv-adventure.jpg"
}
```

Lower `priority` number = runs first.

## Manual run

```bash
node scripts/seo-geo-next-topic.mjs
```

Prints the next pending topic as JSON for copy-paste into an agent chat.

## After each article ships

- [ ] `blog.ts` — new post
- [ ] `geoContent.ts` — GEO_ARTICLES + optional FAQ + GEO_UPDATED
- [ ] `page.tsx` — travelGuides (if commercial)
- [ ] 2+ existing posts — internal links to new article
- [ ] `article-topic-queue.json` — status `published`
- [ ] `npm run build` passes
