# GitHub SEO Report

- Repository: `dewaprabawa/s-leaves`
- Generated (UTC): `2026-08-04T11:11:52+00:00`
- Provider mode: `auto`
- Overall score: `20.0`
- Verified findings: `25` (raw: `38`, dropped: `0`)

## Score Components

| Component | Score |
|-----------|-------|
| repo_audit | 0 |
| readme_lint | 60 |
| community_health | 0 |

## Script Status

| Script | Status |
|--------|--------|
| repo_audit | ok |
| readme_lint | ok |
| community_health | ok |
| traffic_archiver | ok |
| search_benchmark | ok |
| competitor_research | ok |

## Query Discovery

- Mode: `auto-derived`
- Source: `repo slug + metadata + title analysis`
- Queries: `leaves; dewaprabawa leaves`

## Limitations

- repo_audit: No GitHub token found and gh CLI is unavailable. Set GITHUB_TOKEN/GH_TOKEN for reliable API access.
- search_benchmark: no explicit query supplied; using auto-derived repo-specific benchmark queries.
- community_health: No GitHub token provided and gh CLI is unavailable. Set GITHUB_TOKEN/GH_TOKEN.
- traffic_archiver: No GitHub token found and gh CLI is unavailable. Traffic endpoints require auth; set GITHUB_TOKEN/GH_TOKEN.
- traffic_archiver: views endpoint failed: All provider attempts failed. api(public): Requires authentication (status: None)
- traffic_archiver: clones endpoint failed: All provider attempts failed. api(public): Requires authentication (status: None)
- traffic_archiver: referrers endpoint failed: All provider attempts failed. api(public): Requires authentication (status: None)
- traffic_archiver: paths endpoint failed: All provider attempts failed. api(public): Requires authentication (status: None)
- search_benchmark: No GitHub token found and gh CLI is unavailable. Search may be rate-limited; set GITHUB_TOKEN/GH_TOKEN.
- competitor_research: No GitHub token found and gh CLI is unavailable. Competitor research may be rate-limited; set GITHUB_TOKEN/GH_TOKEN.

## Prioritized Findings

| Severity | Source | Finding | Evidence | Fix |
|----------|--------|---------|----------|-----|
| Critical | repo_audit, community_health | Missing required repository file: LICENSE. | Local file check indicates `LICENSE` is absent. | Add `LICENSE` to restore baseline project trust and discoverability. |
| Warning | repo_audit | Repository description is missing. | GitHub metadata `description` is empty. | Add a concise, intent-matched description that explains scope and audience. |
| Warning | repo_audit | No repository topics configured. | GitHub topics list is empty. | Add relevant discovery topics (up to 20) for intent coverage. |
| Warning | repo_audit | Community health score is below recommended baseline. | GitHub community health is 14%. | Complete missing governance files and contribution docs to raise score. |
| Warning | repo_audit, community_health | Missing community profile component: code_of_conduct. | GitHub community profile `files.code_of_conduct` is missing. | Add the missing `code_of_conduct` file/template in repository root or `.github/`. |
| Warning | repo_audit, community_health | Missing community profile component: contributing. | GitHub community profile `files.contributing` is missing. | Add the missing `contributing` file/template in repository root or `.github/`. |
| Warning | repo_audit, community_health | Missing community profile component: issue_template. | GitHub community profile `files.issue_template` is missing. | Add the missing `issue_template` file/template in repository root or `.github/`. |
| Warning | repo_audit, community_health | Missing community profile component: pull_request_template. | GitHub community profile `files.pull_request_template` is missing. | Add the missing `pull_request_template` file/template in repository root or `.github/`. |
| Warning | repo_audit, community_health | Missing community profile component: license. | GitHub community profile `files.license` is missing. | Add the missing `license` file/template in repository root or `.github/`. |
| Warning | repo_audit, community_health | Missing recommended trust artifact: CONTRIBUTING.md. | Local file check indicates `CONTRIBUTING.md` is absent. | Add `CONTRIBUTING.md` to improve contribution readiness and credibility signals. |
| Warning | repo_audit, community_health | Missing recommended trust artifact: CODE_OF_CONDUCT.md. | Local file check indicates `CODE_OF_CONDUCT.md` is absent. | Add `CODE_OF_CONDUCT.md` to improve contribution readiness and credibility signals. |
| Warning | repo_audit, community_health | Missing recommended trust artifact: SECURITY.md. | Local file check indicates `SECURITY.md` is absent. | Add `SECURITY.md` to improve contribution readiness and credibility signals. |
| Warning | repo_audit, community_health | Missing recommended trust artifact: .github/ISSUE_TEMPLATE. | Local file check indicates `.github/ISSUE_TEMPLATE` is absent. | Add `.github/ISSUE_TEMPLATE` to improve contribution readiness and credibility signals. |
| Warning | repo_audit, community_health | Missing recommended trust artifact: CITATION.cff. | Local file check indicates `CITATION.cff` is absent. | Add `CITATION.cff` to improve contribution readiness and credibility signals. |
| Warning | readme_lint | Opening section lacks target intent terms. | None of the configured intent terms appear in the opening section. | Include primary use-case language in first 2-3 paragraphs. |
| Warning | readme_lint | README should contain exactly one H1 heading. | Detected H1 count: 3. | Keep a single H1 title and move other top-level sections to H2. |
| Warning | readme_lint | README lacks explicit proof/results section. | No heading found for examples, reports, screenshots, or outputs. | Add evidence sections with sample outputs or screenshots. |
| Warning | readme_lint | License reference is missing or unclear in README. | No explicit license mention detected. | Add a short license section linking to LICENSE file. |
| Warning | community_health | GitHub community profile health is below baseline target. | health_percentage=14 | Add missing governance artifacts until health percentage reaches >=85. |
| Warning | competitor_research | High-frequency competitor topics are missing from target repo. | Missing topic examples: bukkit, craftbukkit, java, minecraft, minecraft-api | Add relevant missing topics (without exceeding 20 total) based on actual repository scope. |
| Info | repo_audit | Repository title can be better aligned to search intent keywords. | Suggested slug: `leaves` / Suggested title: `Leaves` | Consider renaming repository slug and updating description/topics to reflect the suggested intent keywords. |
| Info | readme_lint | README is short for a discoverability-oriented project page. | Word count is 148. | Expand with concise sections for install, proof, and contribution paths. |
| Info | competitor_research | Competitors frequently include `install` sections. | 3 competitor repos include this pattern. | Ensure README has a clear `install` section near the top-level navigation flow. |
| Info | competitor_research | Competitors frequently include `usage/examples` sections. | 4 competitor repos include this pattern. | Ensure README has a clear `usage/examples` section near the top-level navigation flow. |
| Info | competitor_research | Competitors frequently include `contributing` sections. | 3 competitor repos include this pattern. | Ensure README has a clear `contributing` section near the top-level navigation flow. |

## Query Benchmark

| Query | Rank | Sampled | Total Results |
|-------|------|---------|---------------|
| leaves | Not found | 100 | 15014 |
| dewaprabawa leaves | Not found | 0 | 0 |

## Competitor Research

- Competitors analyzed: `6` across `2` queries

| Competitor | Seen Queries | Best Rank | Stars | Topics |
|------------|--------------|-----------|-------|--------|
| brow/leaves | 1 | 1 | 1425 | 0 |
| metafizzy/flickity | 1 | 2 | 7574 | 0 |
| LeavesMC/Leaves | 1 | 3 | 847 | 10 |
| dmitryikh/leaves | 1 | 4 | 481 | 7 |
| freshOS/Stevia | 1 | 5 | 3416 | 20 |
| ReactiveMongo/Play-ReactiveMongo | 1 | 6 | 411 | 4 |

### Topic Gaps

- `bukkit` (covered by 1 competitors)
- `craftbukkit` (covered by 1 competitors)
- `java` (covered by 1 competitors)
- `minecraft` (covered by 1 competitors)
- `minecraft-api` (covered by 1 competitors)
- `minecraft-performance` (covered by 1 competitors)
- `minecraft-server` (covered by 1 competitors)
- `paper` (covered by 1 competitors)
- `paper-fork` (covered by 1 competitors)
- `spigot-fork` (covered by 1 competitors)

### Competitor Opportunities

- [Warning] High-frequency competitor topics are missing from target repo.
  Evidence: Missing topic examples: bukkit, craftbukkit, java, minecraft, minecraft-api
  Fix: Add relevant missing topics (without exceeding 20 total) based on actual repository scope.
- [Info] Competitors frequently include `install` sections.
  Evidence: 3 competitor repos include this pattern.
  Fix: Ensure README has a clear `install` section near the top-level navigation flow.
- [Info] Competitors frequently include `usage/examples` sections.
  Evidence: 4 competitor repos include this pattern.
  Fix: Ensure README has a clear `usage/examples` section near the top-level navigation flow.
- [Info] Competitors frequently include `contributing` sections.
  Evidence: 3 competitor repos include this pattern.
  Fix: Ensure README has a clear `contributing` section near the top-level navigation flow.

## Traffic Snapshot

- Views: `None` (unique: `None`)
- Clones: `None` (unique: `None`)
- Archive history: `.github-seo-data/traffic_history.jsonl`
- Latest snapshot: `.github-seo-data/latest_traffic_snapshot.json`

## Title Optimization

- Current name: `s-leaves`
- Recommended slug: `leaves`
- Recommended title: `Leaves`
- Intent keywords: `leaves`

## Backlink Distribution Plan

- Target repo URL: `https://github.com/dewaprabawa/s-leaves`

### Suggested Post Titles

- How I Built Leaves for SEO Automation
- GitHub SEO Playbook: Improving Discoverability for Leaves
- Leaves: From Idea to Open-Source SEO Workflow
- Open-Source Guide: leaves with Leaves

### Channels

| Channel | Content Type | Cadence | CTA |
|---------|--------------|---------|-----|
| Medium | Technical case study | 1 post per major release | Link to repo + install quickstart + release notes |
| Dev.to | Tutorial / launch post | 1 launch post + update posts quarterly | Link to GitHub repo and usage examples |
| Hashnode | Deep-dive engineering write-up | Bi-monthly | Link to architecture docs and scripts |
| Personal/Company Blog | Canonical long-form article | Monthly | Link to repo, docs, and comparison pages |
| LinkedIn Article | Problem/solution summary for practitioners | Per release | Link to repo and demo outputs |
| Reddit (relevant subreddits) | Show-and-tell with value-first context | Selective (major feature drops) | Share repo only after explaining workflow and results |

### Anchor Guidance

- Exact-match anchor cap: `10%`
- Brand anchors (repo/owner name)
- Partial-match anchors (e.g., 'agentic SEO skill')
- Generic anchors ('GitHub repo', 'source code')
- Naked URL anchors
