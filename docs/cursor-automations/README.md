# Cursor Automations — SEO/GEO Rank + Sales Kit

**Site:** https://www.sekarbaliactivity.com  
**Repo:** `dewaprabawa/s-leaves`  
**Goal:** Maintain SEO/GEO facts → improve Google + AI visibility → more WhatsApp bookings for **all tours**

You cannot create Automations from code in this environment. Paste each block into  
→ [cursor.com/automations](https://cursor.com/automations) → **New automation**

Strategy context: [`../SEO-GEO-MARKETING-PLAN.md`](../SEO-GEO-MARKETING-PLAN.md)  
Long-form plan: [`../CURSOR-AUTOMATIONS-PLAN.md`](../CURSOR-AUTOMATIONS-PLAN.md)

---

## Enable order (cost control)

| Week | Turn on | Why |
|------|---------|-----|
| **Week 1** | **A1** + **A2** | Price/GEO integrity + weekly opportunity backlog |
| **Week 2** | **A3** + **A4** | Content that ranks + regression/CTA watch |
| **Week 3** | **A5** + **A6** | LLM citation readiness + rotating tour QA |
| **Optional** | **A7** + **A8** | PR SEO gate + Slack idea capture |

Disable **A3** first if cloud usage spikes (writing is the expensive loop).

---

## Shared settings (every automation)

| Setting | Value |
|---------|--------|
| **Repository** | `dewaprabawa/s-leaves` (required for PRs) |
| **Base branch** | `main` |
| **Tools** | Open pull request · Memories · (optional) Send to Slack |
| **PR policy** | Always **draft** PRs — never merge to `main` |
| **Branch prefix** | `cursor/<job>-e817` |
| **No-op rule** | If nothing useful → short summary + stop (no junk PR) |
| **Never** | Invent IDR prices · add FAQPage/HowTo schema · buy links/fake reviews |

### Pickup rules (do not break)
- ATV / rafting / canyon tubing → hotel pickup **IDR 400,000** (or free self-meet)
- Cycling + cooking → **free Ubud** pickup
- Batur jeep → **island-wide** pickup included
- Luwak → **IDR 800,000 / min 3 / transport not included**

---

## Catalog

| ID | Name | Trigger | Prompt file |
|----|------|---------|-------------|
| A1 | Price & GEO fact sync | Weekly Mon 09:00 WITA | [`prompts/A1-price-geo-sync.md`](prompts/A1-price-geo-sync.md) |
| A2 | SEO opportunity + sales backlog | Weekly Tue 09:00 WITA | [`prompts/A2-seo-opportunity-scan.md`](prompts/A2-seo-opportunity-scan.md) |
| A3 | Cluster article → WhatsApp CTA | Mon + Thu 10:00 WITA | [`prompts/A3-cluster-article.md`](prompts/A3-cluster-article.md) |
| A4 | Tour page regression / CTR watch | Weekly Wed 09:00 WITA | [`prompts/A4-regression-watch.md`](prompts/A4-regression-watch.md) |
| A5 | LLM / GEO citation checklist | Monthly 1st 09:00 WITA | [`prompts/A5-llm-citation-check.md`](prompts/A5-llm-citation-check.md) |
| A6 | Rotating money-page QA | Weekly Fri 09:00 WITA | [`prompts/A6-tour-money-page-qa.md`](prompts/A6-tour-money-page-qa.md) |
| A7 | PR SEO gate | PR opened / pushed | [`prompts/A7-pr-seo-gate.md`](prompts/A7-pr-seo-gate.md) |
| A8 | Slack idea → backlog | Slack `seo:` / `content:` / `sales:` | [`prompts/A8-slack-triage.md`](prompts/A8-slack-triage.md) |

---

## How to create one (2 minutes)

1. Open [cursor.com/automations](https://cursor.com/automations) → **New**
2. **Name** = from the table above
3. **Trigger** = schedule or GitHub/Slack as listed
4. **Repository** = this repo
5. Paste the **Prompt** from the matching file (everything under `## Prompt`)
6. Enable tools: **Open PR**, **Memories**, optional Slack
7. Save → **Activate** → **Run once** manually

Or in Cursor chat: `/automate` and paste the prompt + say the schedule.

---

## Tours covered (all 9)

1. ATV · 2. Batur jeep · 3. Rafting · 4. Canyon tubing · 5. Ricefield cycling  
6. Luwak coffee · 7. Cooking class · 8. Full-day Ubud · 9. Half-day Tanah Lot  

P0 focus for content: **cooking, ATV, jeep, cycling** (highest booking intent).

---

## Success after 30 days

- Zero price mismatches for 2 weeks (A1)
- Backlog always has next 2 articles (A2)
- ≥6 draft content PRs / month (A3) — you merge the best
- No broken WhatsApp CTAs / schema duration bugs (A4)
- All 8 LLM prompts documented as “repo-ready” (A5)
- All 9 tours deep-audited once (A6)
