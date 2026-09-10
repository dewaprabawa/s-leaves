# A2 — SEO opportunity + sales backlog

| Field | Value |
|-------|--------|
| **Name** | `SEO: Weekly opportunity + sales backlog` |
| **Trigger** | Scheduled · Weekly · Tuesday 09:00 Asia/Makassar |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories · optional Slack |

## Prompt

```text
Run the weekly SEO + sales opportunity pass for Sekar Bali Activity (all tours).

Read:
- docs/SEO-GEO-MARKETING-PLAN.md
- docs/seo-weekly-backlog.md (create/update)
- Existing tours + blog slugs

Update docs/seo-weekly-backlog.md with:

## This week — top 5 opportunities
For each: target keyword · money-page URL · why it sells · effort S/M/L · expected action (title tweak / new article / internal links)

## P0 rotation
Focus cooking, ATV, Batur jeep, cycling unless a P1 tour is clearly underserved.

## Next 2 articles to write
Title · primary keyword · target /tours/[slug] · WhatsApp CTA angle

## Sales friction notes
Anything blocking bookings found in code (missing CTA, unclear price, pickup confusion) — list only, do not redesign UI here.

## Last run
YYYY-MM-DD

Rules:
- Prefer commercial / booking intent ("price", "worth it", "vs", "pickup", "no hike", "ethical luwak").
- Skip generic "best Bali" ideas.
- Do not write full articles in this run.
- Open DRAFT PR: "Weekly SEO backlog YYYY-MM-DD"
- Memories: last-seo-backlog-run = date
```
