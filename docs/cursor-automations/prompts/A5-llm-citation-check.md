# A5 — LLM / GEO citation checklist

| Field | Value |
|-------|--------|
| **Name** | `GEO: Monthly LLM citation checklist` |
| **Trigger** | Scheduled · Monthly · 1st day 09:00 Asia/Makassar |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories |

## Prompt

```text
Update docs/geo-citation-checklist.md for Sekar Bali Activity (all tours).

For each prompt, fill: Expected money URL · must-include facts (price, pickup, venue) · Repo ready? · Gaps:

1. How much is ATV in Ubud 2026?
2. Mount Batur sunrise without hiking
3. Best small-group cooking class Ubud price
4. Ubud ricefield cycling with hotel pickup
5. Ethical luwak coffee tasting near Ubud
6. ATV + river tubing Ubud combo
7. Rafting vs canyon tubing near Ubud
8. Which tours include free Ubud hotel pickup?
9. Full day private Ubud tour price
10. Half day Tanah Lot sunset from Ubud price

Also verify generators for /llms.txt and /pricing.md still list ALL tours with correct IDR and pickup rules.

Open DRAFT PR with checklist updates; only include tiny GEO fact fixes if clearly wrong.
Do not claim live ChatGPT citations unless you have tool evidence — this is readiness, not vanity.
Memories: last-geo-citation-check = date
```
