# A4 — Tour page regression / CTR watch

| Field | Value |
|-------|--------|
| **Name** | `SEO: Tour regression + CTR watch` |
| **Trigger** | Scheduled · Weekly · Wednesday 09:00 Asia/Makassar |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Open pull request · Memories · optional Slack |

## Prompt

```text
Regression-check ALL tour detail pages for ranking + sales leaks.

Check in code (and local build/render if feasible):
1. Every /tours/[slug] has WhatsApp Consultation + Book CTAs
2. Visible "from" price matches basePrice / tier helpers
3. duration → ISO schema correct (especially "1.5 Hours" → PT1H30M, never PT5H)
4. No placeholder youtube IDs (e.g. dQw4w9WgXcQ)
5. seoTitle / seoDescription present on P0 tours with IDR or clear differentiator
6. Pickup messaging matches policy (400k vs free Ubud vs jeep island-wide vs Luwak no transport)
7. Internal links from tour pages to related blogs / book still present where expected

If regressions found: fix with DRAFT PR "Fix tour SEO/sales regressions".
If clean: Memories "regression-watch: OK YYYY-MM-DD" and stop.

Do not redesign UI. Do not expand scope beyond SEO/conversion regressions.
```
