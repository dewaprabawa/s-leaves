<!-- Updated: 2026-09-04 -->
# Google SEO Quick Reference (September 2026)

Concise reference guide for subagents. Summarizes key Google Search concepts,
requirements, and best practices. Not a reproduction of Google's documentation —
see Official Documentation Links at the bottom for full details.

**Policy care rules for agents:** Prefer originality, first-hand experience, and
real value over SEO-optimized commodity content. Do not recommend scaled AI
publishing, citation buying, or FAQPage rich-result chasing. Treat Discover and
Search as separate surfaces.

---

## H1 2026 Algorithm & Policy Timeline (Read Carefully)

> Label confidence: **Confirmed** = Google-announced rollout or policy statement.
> **Industry observed** = publisher/analyst impact reports — use for prioritization,
> not as guaranteed ranking mechanics.

### February 2026 Discover Core Update — Confirmed
- **Dates:** Announced/rolled out Feb 5, 2026; completed ~Feb 27, 2026
- **Scope:** First core update specifically targeting **Google Discover** (separate from general Search rankings)
- **Focus:** Usefulness in Discover; freshness, originality, engagement; personalized relevance over purely SEO-optimized material
- **Impact (industry observed):** Timely/authoritative publishers gained Discover traffic; repetitive/generic content lost feed visibility — especially news, lifestyle, informational niches
- **Agent rule:** Do not conflate Discover recovery advice with classic blue-link ranking fixes

### March 2026 Spam Update — Confirmed
- **Dates:** Mar 24–25, 2026 (~under 20 hours)
- **Focus:** Rapid removal of scaled low-quality/spammy content; bulk AI spam and policy violations
- **Impact (industry observed):** Mass-produced AI / templated sites dropped; cleaner sites saw short-term competition relief
- **Agent rule:** Treat as enforcement of existing spam policies with faster detection — not a new policy category

### March 2026 Core Update — Confirmed
- **Dates:** Mar 27 – Apr 8, 2026 (12 days)
- **Focus:** Relevant/satisfying content across site types; originality & information gain; stronger E-E-A-T and brand/authority signals
- **Impact (industry observed):** High volatility (~80% top-result shifts reported); authoritative brands gained; aggregators, thin pages, low-value AI-heavy pages declined; e-commerce, YMYL, publishing most volatile
- **Agent rule:** Recovery requires real content/expertise changes — waiting alone is insufficient

### May 2026 Core Update — Confirmed
- **Dates:** May 21 – Jun 2, 2026 (12 days)
- **Focus:** Stronger weight on first-hand/original expertise vs aggregated/organized content; continued pressure on AI “commodity content”
- **Impact (industry observed):** Faster visible impact (~48h); more volatile than March across many verticals; sites hit by earlier 2026 commodity-content pressure showed little recovery without real changes; News/Top Stories quality issues amplified
- **Agent rule:** Prefer first-party data, case studies, operator experience, unique photos/itineraries over templated roundups

### June 2026 Spam Update — Confirmed
- **Dates:** Jun 24–26, 2026 (~2 days); global, all languages
- **Focus:** Enforcement of existing spam policies (no new named category announced)
- **Industry speculation (unconfirmed):** AI-spam and citation manipulation — Google did not publicly confirm a single target mechanism; reportedly not specifically a link-spam or Site Reputation Abuse–named wave
- **Agent rule:** Never recommend buying/manipulating AI Overview or AI Mode citations

### Other Major 2026 Search Changes You Must Respect

| Change | Date / status | Agent implication |
|--------|---------------|-------------------|
| **FAQ rich results gone** | Stopped appearing ~May 7, 2026 across site types | Do **not** chase FAQ rich results. Visible FAQ content + schema may still aid understanding / AI Overviews — but **do not** recommend `FAQPage` for commercial sites |
| **Search Console AI Performance report** | Rolling out 2026 | Track AI Overviews / AI Mode visibility separately from classic organic |
| **AI search citation manipulation = spam** | Confirmed policy extension | Manipulating or buying citations to influence AI Overviews / AI Mode is spam |
| **Universal Cart (e-commerce)** | 2026 | Clean Merchant Center feeds + accurate Product schema essential for cross-surface shopping |
| **AI Mode Search Agents (I/O 2026)** | Announced | Optimize for multi-step / agentic sessions (structured pricing, policies, extractable facts) — not only single-query SERPs |

---

## How Google Search Works

Google Search operates in three stages: **Crawling** (Googlebot discovers pages by following links and reading sitemaps), **Indexing** (Google processes and stores page content, metadata, and signals in its search index), and **Serving** (when a user searches, Google's algorithms rank indexed pages by relevance, quality, and usability to return the most useful results). Pages must be crawlable and indexable to appear in search results.

---

## Google Search Essentials

Formerly known as "Webmaster Guidelines." Key requirements:

### Technical Requirements
- Pages must be accessible to Googlebot (not blocked by robots.txt or noindex)
- Pages must return HTTP 200 status for indexable content
- Content must be in a format Google can process (HTML preferred, JS-rendered content supported but slower)
- Pages must be served over HTTPS

### Spam Policies
- No cloaking (showing different content to Googlebot vs users)
- No doorway pages (pages created solely to rank for specific queries)
- No hidden text or links
- No keyword stuffing
- No link spam (buying links, excessive link exchanges)
- No scraped or auto-generated content without added value
- No sneaky redirects
- No thin affiliate pages
- No scaled content abuse (mass low-effort / commodity AI pages)
- No site reputation abuse
- **No AI search citation manipulation** — buying or otherwise manipulating citations to influence AI Overviews or AI Mode answers is spam (confirmed 2026 policy extension to AI search features)

### Key Best Practices
- Create content for users, not search engines
- Make your site easy to navigate with a clear hierarchy
- Use descriptive, unique titles and meta descriptions per page
- Use heading tags (H1-H6) to structure content logically
- Optimize images with alt text and appropriate file sizes
- Ensure mobile-friendly responsive design
- Improve page load speed (Core Web Vitals)
- Submit an XML sitemap to Google Search Console
- Use structured data (JSON-LD) to help Google understand content

---

## Content Quality Signals

Google evaluates content quality through the E-E-A-T framework:

- **Experience**: Does the content creator have first-hand experience with the topic? (Original photos, personal stories, demonstrated use)
- **Expertise**: Does the creator have relevant knowledge or credentials? (Professional background, technical depth, accurate sourcing)
- **Authoritativeness**: Is the creator or site recognized as a go-to source? (Industry citations, brand mentions, expert recognition)
- **Trustworthiness**: Is the content and site reliable and transparent? (Contact info, secure site, editorial standards, accurate claims)

> **YMYL Note**: "Your Money or Your Life" topics (health, finance, safety, legal) are held to the highest E-E-A-T standards. Inaccurate YMYL content can cause real-world harm, so Google applies stricter quality thresholds.

> **December 2025 Update**: E-E-A-T evaluation now extends to ALL competitive queries, not just YMYL topics. Every page competing for ranking is assessed on these signals.

> **March–May 2026 Core Updates**: Greater weighting toward first-party data, original insights, operator/author experience, and brand authority. Aggregators and templated AI commodity content remain under sustained pressure. Recovery requires substantive content changes, not waiting for the next update.

---

## Core Web Vitals

Measured at the 75th percentile of real user data (field data).

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s – 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms – 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 – 0.25 | > 0.25 |

**Key facts:**
- INP replaced FID (First Input Delay) on March 12, 2024. FID was fully removed from all Chrome tools (CrUX API, PageSpeed Insights, Lighthouse) on September 9, 2024. Do NOT reference FID.
- Core Web Vitals are a confirmed ranking signal (since June 2021)
- Field data (CrUX) is preferred over lab data (Lighthouse) for assessment
- Passing all three metrics at "Good" is the target

**Measurement tools:**
- Google PageSpeed Insights (field + lab data)
- Chrome User Experience Report (CrUX) — field data
- Lighthouse (lab data only)
- Google Search Console Core Web Vitals report

---

## Structured Data Best Practices

- **JSON-LD is Google's preferred format** (over Microdata and RDFa)
- Place JSON-LD in `<script type="application/ld+json">` tags in the `<head>` or `<body>`
- Always include `@context` and `@type` properties
- **Required properties** must be present for rich result eligibility
- **Recommended properties** improve rich result quality but aren't mandatory
- Only mark up content that is visible on the page
- Use Google's Rich Results Test to validate before deployment
- Do not mark up content that is misleading or hidden from users
- Keep schema current — update when page content changes

### Deprecated/Restricted Types (as of Sep 2026)
- **HowTo**: Rich results removed (September 2023)
- **FAQ rich results**: Stopped appearing across all site types (~May 7, 2026). `FAQPage` was already restricted to government/healthcare (Aug 2023). **Do not recommend FAQPage for commercial sites.** Visible Q&A content remains useful for users and may support AI understanding without rich-result eligibility.
- **SpecialAnnouncement**: Deprecated (July 31, 2025)
- **CourseInfo, EstimatedSalary, LearningVideo**: Retired (June 2025)
- **ClaimReview**: Retired (June 2025)
- **VehicleListing**: Retired (June 2025)

---

## Common Penalties & How to Avoid Them

### Manual Actions
Google Search Console notifications for violations. Common causes:
- **Unnatural links** (buying/selling links): Disavow bad links, request reconsideration
- **Thin content**: Add substantial unique value to affected pages
- **Cloaking/sneaky redirects**: Remove deceptive serving, request reconsideration
- **User-generated spam**: Moderate comments/forums, add nofollow to user links
- **Structured data issues**: Fix misleading or spam markup

### Algorithmic Demotions
No manual notification — detected through ranking drops. Common causes:
- **Helpful Content System**: Merged into Google's core ranking in March 2024 — no longer a standalone system. Helpfulness signals are now evaluated within every core update. Low-value, AI-generated, or unhelpful content at scale still triggers demotions via core updates.
- **Core Updates**: Broad quality reassessment across all signals (Mar & May 2026 were especially volatile; originality / first-hand expertise heavily rewarded)
- **Spam Updates**: Automated detection of spam patterns (Mar & Jun 2026 were unusually fast rollouts)
- **Discover Core Updates**: Affect Discover feed visibility separately from classic Search (Feb 2026)
- **Link Spam Updates**: Devaluation of manipulative link patterns
- **Commodity / scaled AI content pressure**: Industry-observed sustained demotions for templated, low-information-gain pages (“Mt. AI”-style publishing)

### Recovery Steps
1. Identify the issue (Search Console classic + AI Performance report when available; ranking timeline analysis; separate Discover vs Search if traffic source differs)
2. Fix the root cause (remove spam, improve originality/E-E-A-T, clean links, stop citation manipulation)
3. For manual actions: submit reconsideration request via Search Console
4. For algorithmic: improve quality with real first-party value — do not expect recovery from waiting alone (confirmed pattern after Mar/May 2026)
5. Monitor recovery in Search Console performance reports (and AI Performance when rolled out)

---

## Official Documentation Links

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [How Google Search Works](https://developers.google.com/search/docs/fundamentals/how-search-works)
- [Structured Data Overview](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Core Web Vitals Report](https://support.google.com/webmasters/answer/9205520)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Search Console Help](https://support.google.com/webmasters)
- [Manual Actions Report](https://support.google.com/webmasters/answer/9044175)
- [Google Search Status Dashboard](https://status.search.google.com/)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [E-E-A-T and Quality Rater Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

> **Mobile-first indexing** is 100% complete as of July 5, 2024. Google now crawls and indexes ALL websites exclusively with the mobile Googlebot user-agent.
