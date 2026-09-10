# Cursor Automations Plan — Sekar Bali SEO / GEO / Sales

Paste these into [cursor.com/automations](https://cursor.com/automations) (or `/automate` in chat).  
Repo: **`dewaprabawa/s-leaves`** (this project).  
Base branch for PRs: **`main`**.  
Create at: [cursor.com/automations](https://cursor.com/automations)  
Billing note: Automations run as cloud agents (Max Mode) — start with **A1 + A2**, then add more.

Companion strategy: `docs/SEO-GEO-MARKETING-PLAN.md`

---

## How to set each one up

1. Open **Automations** → **New automation**
2. Set **Trigger** (schedule / GitHub / Slack) from the table below
3. Paste the **Prompt** exactly (edit only prices if they change)
4. Enable **Tools** listed
5. Set **Repository** = this repo (required if the agent opens PRs)
6. Save → **Activate**
7. Run once manually to verify

**Guardrails (all automations):**
- Open a **draft PR** for any code/content change — never push straight to `main`
- Branch name: `cursor/<short-name>-e817`
- If nothing useful to do → **exit with a short “no-op” summary** (do not invent work)
- Never invent tour prices — read from `src/data/tours.ts`, `pricing.md` / `llms.txt` sources in repo
- Do **not** add commercial `FAQPage` or `HowTo` schema
- Do **not** buy links / fake reviews / AI citation spam

---

## Rollout order (don’t enable all at once)

| Week | Enable |
|------|--------|
| Week 1 | A1 Price & GEO sync · A2 Weekly SEO opportunity |
| Week 2 | A3 Content cluster writer · A4 Ranking / regression watch |
| Week 3 | A5 LLM citation spot-check · A6 Tour page QA |
| Optional | A7 PR SEO check · A8 Slack “content idea” triage |

---

## Automation catalog

### A1 — Price & GEO fact sync (CRITICAL)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Price & GEO fact sync` |
| **Trigger** | Scheduled — **Weekly Monday 09:00 Asia/Makassar** (or cron `0 1 * * 1` UTC ≈ Monday morning WITA) |
| **Repository** | Yes — this repo |
| **Tools** | Memories · Open PR · (optional) Send to Slack |
| **Acts when** | Any mismatch between tour IDR / pickup / duration and agent files |
| **Output** | Draft PR fixing mismatches + short run summary |

**Prompt (copy-paste):**

```text
You are maintaining Sekar Bali Activity SEO/GEO pricing consistency.

Goal: Keep live tour money facts identical across:
- src/data/tours.ts (and related tour data)
- GEO / llms sources (llms.txt generators, pricing.md / pricing content)
- FAQ answers that mention IDR
- Tour JSON-LD Offer.price if generated from the same data

Steps:
1. Read docs/SEO-GEO-MARKETING-PLAN.md for the canonical tour list and current intended prices.
2. Scan the repo for each tour slug and extract: basePrice / tiers, pickup rules, duration, min guests.
3. Compare page-facing copy, GEO pricing tables, llms text builders, and schema builders.
4. If mismatches exist, fix them in one focused PR.
5. If everything matches, write MEMORIES note "last-price-audit: YYYY-MM-DD OK" and stop (no PR).

Rules:
- Never invent prices. If unclear, open a draft PR that ONLY documents the conflict in the PR body and does not guess.
- Preserve ATV/rafting hotel pickup IDR 400,000 vs free Ubud pickup on cycling/cooking vs island-wide jeep pickup.
- Luwak coffee: IDR 800,000 / person, min 3, transport not included (unless data already changed — then sync everywhere to the new data).
- Branch: cursor/price-geo-sync-e817 (or cursor/price-geo-sync-<date>-e817 if branch exists).
- Open a DRAFT PR into main. Title: "Sync tour prices across SEO/GEO surfaces".
- Summarize: what was wrong, what you fixed, files touched.
```

---

### A2 — Weekly SEO opportunity scan

| Field | Value |
|-------|--------|
| **Name** | `SEO: Weekly opportunity scan` |
| **Trigger** | Scheduled — **Weekly Tuesday 09:00 WITA** |
| **Repository** | Yes |
| **Tools** | Memories · Open PR (only if creating/updating a backlog file) · Send to Slack (optional) |
| **Acts when** | Always produces a backlog update; PR only if file changes |
| **Output** | Update `docs/seo-weekly-backlog.md` via draft PR |

**Prompt:**

```text
Run a weekly SEO opportunity pass for Sekar Bali Activity (Ubud tours).

Read:
- docs/SEO-GEO-MARKETING-PLAN.md
- docs/seo-weekly-backlog.md (create if missing)
- Existing blog + tour slugs under src/

Produce / update docs/seo-weekly-backlog.md with:
1. Top 5 opportunities this week (keyword / page / why / effort S-M-L)
2. P0 tour focus rotation (cooking, ATV, Batur jeep, cycling)
3. Suggested 1–2 article titles to write next (with target money-page URL)
4. Technical debt notes (schema, titles, internal links) spotted in code — no drive-by refactors

Self-check:
- Prefer opportunities that end in WhatsApp bookings (money keywords, comparisons, “price 2026”).
- Skip generic “best Bali” ideas.
- Do not publish articles in this run — backlog only unless a tiny metadata fix is clearly needed.

Open a DRAFT PR titled "Weekly SEO backlog YYYY-MM-DD".
If backlog unchanged in substance, still refresh the "Last run" date and note "no new opportunities".
Save key decisions to Memories.
```

---

### A3 — Content cluster writer (draft PR)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Cluster article draft` |
| **Trigger** | Scheduled — **Twice weekly (Mon + Thu 10:00 WITA)** |
| **Repository** | Yes |
| **Tools** | Memories · Open PR |
| **Acts when** | Backlog has an unwritten P0/P1 article; skip if last article PR still open |
| **Output** | 1 draft blog post PR linking to a money tour page |

**Prompt:**

```text
Write ONE SEO/GEO cluster article for Sekar Bali Activity.

Inputs:
- docs/SEO-GEO-MARKETING-PLAN.md
- docs/seo-weekly-backlog.md (if present)
- Memories (skip if a cluster-article draft PR is already open / written in last 3 days)

Pick the highest-priority unwritten topic for P0 tours first:
cooking class, ATV Ubud, Mount Batur jeep (no hike), ricefield cycling.

Requirements:
- First-hand operator tone; include exact IDR only from repo tour data
- Answer: how much, where, pickup, duration, who it's for, how to book on WhatsApp
- Include a comparison or “worth it” angle when relevant
- Internal links: target money tour + 1–2 related tours/blogs + /book
- Add to blog data following existing patterns in this repo (do not invent image URLs — reuse existing public images or omit)
- Strong CTA to WhatsApp / book — no FAQPage schema

Quality bar:
- If you cannot verify a price from data files, omit the number and say “confirm on WhatsApp”
- Open DRAFT PR: "Content: <title>"
- Branch: cursor/cluster-<slug>-e817
- End with: target keyword, money page URL, word count

Stop without PR if Memories show an open content PR from this automation in the last 72 hours.
```

---

### A4 — Ranking / page regression watch

| Field | Value |
|-------|--------|
| **Name** | `SEO: Tour page regression watch` |
| **Trigger** | Scheduled — **Weekly Wednesday 09:00 WITA** |
| **Repository** | Yes |
| **Tools** | Memories · Open PR (fixes only) · Send to Slack (optional) |
| **Acts when** | Broken facts, missing CTAs, schema duration bugs, missing WhatsApp consultation |
| **Output** | Report in PR body; code PR only for clear regressions |

**Prompt:**

```text
Regression-check all tour detail pages for Sekar Bali Activity.

Check in code (and local build/render if feasible):
1. Every /tours/[slug] has WhatsApp Consultation + Book CTAs
2. Visible price matches basePrice / tier helpers
3. duration → ISO schema is correct (especially "1.5 Hours" → PT1H30M, not PT5H)
4. No Rick-Roll / placeholder youtubeVideoId on tours
5. seoTitle / seoDescription present on P0 tours
6. Luwak / cooking / jeep / ATV pickup messaging not contradicted

If regressions found: fix with DRAFT PR "Fix tour SEO regressions".
If clean: Memories "regression-watch: OK YYYY-MM-DD" and stop.
Do not redesign UI. Do not expand scope beyond SEO/conversion regressions.
```

---

### A5 — LLM / GEO citation spot-check

| Field | Value |
|-------|--------|
| **Name** | `GEO: Monthly LLM citation checklist` |
| **Trigger** | Scheduled — **Monthly, 1st day 09:00 WITA** |
| **Repository** | Yes |
| **Tools** | Memories · Open PR |
| **Acts when** | Always updates checklist doc; optional tiny GEO copy PR |

**Prompt:**

```text
Update docs/geo-citation-checklist.md for Sekar Bali Activity.

For each prompt below, note: Expected money URL, key facts the answer MUST include (price, pickup, venue), and content gaps in our repo if we couldn't support a citable answer:

1. How much is ATV in Ubud 2026?
2. Mount Batur sunrise without hiking
3. Best small-group cooking class Ubud price
4. Ubud ricefield cycling with hotel pickup
5. Ethical luwak coffee tasting near Ubud
6. ATV + river tubing Ubud combo
7. Rafting vs canyon tubing near Ubud
8. Free Ubud hotel pickup which tours?

Also verify /llms.txt and /pricing.md generators still list all tours with IDR.

Open DRAFT PR with checklist updates only unless a clear one-line GEO fact fix is needed.
Do not claim we are cited in ChatGPT unless you have tool evidence — this is a readiness checklist, not a live SERP scrape unless tools allow.
```

---

### A6 — Tour money-page QA (deep pass, rotating)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Rotating tour money-page QA` |
| **Trigger** | Scheduled — **Weekly Friday 09:00 WITA** |
| **Repository** | Yes |
| **Tools** | Memories · Open PR |
| **Acts when** | Always audits one P0/P1 tour; PR if improvements are concrete |

**Prompt:**

```text
Deep-audit ONE tour money page (rotate using Memories last-tour-qa).

Order: cooking → ATV → Batur jeep → cycling → rafting → tubing → luwak → full-day → half-day.

For the chosen tour:
1. Title/meta/H1 keyword fit
2. Above-the-fold quick facts (price, duration, pickup, venue)
3. Schema Offer + duration
4. Internal links to/from cluster blogs
5. WhatsApp consultation message includes tour title
6. Propose ≤5 concrete copy/SEO edits

If edits are high-confidence and small, implement in DRAFT PR.
Else write findings into docs/seo-weekly-backlog.md under "Tour QA".
Update Memories: last-tour-qa=<slug> date=<YYYY-MM-DD>
```

---

### A7 — PR SEO gate (GitHub trigger)

| Field | Value |
|-------|--------|
| **Name** | `SEO: PR review gate` |
| **Trigger** | GitHub — **Pull request opened** + **Pull request pushed** |
| **Repository** | Yes (required) |
| **Tools** | Comment on pull request · Memories |
| **Acts when** | PR touches tours, blog, geo, pricing, schema, or public marketing copy |
| **Output** | PR comment checklist; no approve/reject unless you enable approvals |

**Prompt:**

```text
When a PR opens or updates, if it touches marketing/SEO surfaces (tours data, blog, geoContent, pricing/llms, tour page schema, booking CTAs):

Comment a short SEO/GEO checklist:
- Prices consistent across UI + schema + GEO files?
- Any new FAQPage/HowTo schema? (flag — do not add)
- WhatsApp CTAs still present on tour pages?
- Internal links to money pages present for new blog posts?
- Duration ISO plausible?

If no marketing files changed, comment nothing and exit.
Do not implement fixes in this automation unless the PR author asked; review only.
```

---

### A8 — Slack content triage (optional)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Slack idea → backlog` |
| **Trigger** | Slack — **New message in channel** (e.g. `#marketing`) filter keyword `seo:` or `content:` |
| **Repository** | Yes |
| **Tools** | Read Slack · Send to Slack · Open PR |
| **Output** | Append to backlog + reply in thread |

**Prompt:**

```text
When a Slack message starts with "seo:" or "content:", add it to docs/seo-weekly-backlog.md under Inbox with date + author summary.
Open a small DRAFT PR if needed.
Reply in Slack confirming it was logged and propose the target money-page URL from our tours.
Ignore unrelated messages.
```

---

## Suggested Memories keys

Initialize empty notes the first run can write:

- `last-price-audit`
- `last-cluster-article-at`
- `open-content-pr`
- `last-tour-qa`
- `regression-watch`

---

## Success criteria (after 30 days)

| Automation | Healthy signal |
|------------|----------------|
| A1 | Zero price mismatches for 2 consecutive weeks |
| A2 | Backlog always has next 2 articles defined |
| A3 | ≥6 draft article PRs / month (human merges best ones) |
| A4 | No open regressions on CTAs / schema duration |
| A5 | Checklist covers all 8 prompts with repo evidence |
| A6 | All 9 tours deep-audited at least once |

---

## Cost control

- Prefer **weekly** over daily
- A3 is the expensive one (writing) — cap at 2×/week
- If usage spikes: disable A3 first, keep A1 + A4
- Always **draft PRs** so you approve before merge

---

## One-shot setup checklist

- [ ] Create `docs/seo-weekly-backlog.md` (empty template OK — A2 will fill)
- [ ] Create `docs/geo-citation-checklist.md` (empty OK — A5 will fill)
- [ ] Enable A1 + A2
- [ ] Connect Slack only if you want A8
- [ ] After first green runs, enable A3 + A4
- [ ] Enable A7 once team is opening marketing PRs regularly
