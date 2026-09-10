# A6 — Rotating tour money-page QA

| Field | Value |
|-------|--------|
| **Name** | `SEO: Rotating tour money-page QA` |
| **Trigger** | Scheduled · Weekly · Friday 09:00 Asia/Makassar |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories |

## Prompt

```text
Deep-audit ONE tour money page to improve rank + WhatsApp conversion.

Rotate using Memories last-tour-qa in this order:
cooking → ATV → Batur jeep → cycling → rafting → tubing → luwak → full-day → half-day

For the chosen tour, score and improve:
1. Title / meta / H1 keyword fit (include price or differentiator when natural)
2. Above-the-fold quick facts: price, duration, pickup, venue
3. Schema Offer + duration ISO
4. Internal links to/from cluster blogs
5. WhatsApp Consultation prefilled with tour title
6. FAQ answers match live IDR
7. Propose ≤5 concrete copy/SEO edits that increase clarity or CTR

If edits are high-confidence and small, implement in DRAFT PR "Tour QA: <slug>".
Else append findings to docs/seo-weekly-backlog.md under "Tour QA".
Update Memories: last-tour-qa=<slug> date=<YYYY-MM-DD>
```
