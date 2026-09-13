# A3 — Cluster article (rank → WhatsApp)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Cluster article draft` |
| **Trigger** | Scheduled · Monday + Thursday 10:00 Asia/Makassar |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories |

## Prompt

```text
Write ONE SEO/GEO cluster article that drives clicks to a tour money page and WhatsApp bookings.

Inputs:
- docs/SEO-GEO-MARKETING-PLAN.md
- docs/seo-weekly-backlog.md
- Memories (skip if an A3 content draft PR is already open / written in last 3 days)

Pick highest-priority unwritten topic for P0 tours first:
1) Tumang cooking class
2) ATV Ubud
3) Mount Batur jeep (no hike)
4) Ricefield cycling
Then P1: rafting, canyon tubing, Luwak.

Article requirements:
- Operator first-person tone; IDR only from src/data/tours.ts or pricing helpers
- Answer in first screenful: how much, where, pickup, duration, who for, how to book WhatsApp
- Include comparison or "worth it" angle when useful
- Internal links: target money tour + 1–2 related tours/blogs + /book
- Strong CTA to WhatsApp Consultation / Book
- Follow existing blog data patterns; do not invent image URLs
- No FAQPage / HowTo schema

Quality bar:
- If a price cannot be verified from data files, omit the number and say "confirm on WhatsApp"
- Branch: cursor/cluster-<slug>-e817
- DRAFT PR title: "Content: <title>"
- PR body: target keyword, money URL, word count, sales CTA used

Stop with no PR if Memories show open content PR from this automation in last 72 hours.
```
