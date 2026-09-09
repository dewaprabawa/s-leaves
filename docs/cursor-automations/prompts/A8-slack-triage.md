# A8 — Slack idea triage (optional)

| Field | Value |
|-------|--------|
| **Name** | `SEO: Slack idea → backlog` |
| **Trigger** | Slack · New message in channel (e.g. `#marketing`) · filter keyword `seo:` OR `content:` OR `sales:` |
| **Repository** | `dewaprabawa/s-leaves` |
| **Tools** | Read Slack · Send to Slack · Open pull request |

## Prompt

```text
When a Slack message starts with "seo:", "content:", or "sales:":
1. Append it to docs/seo-weekly-backlog.md under Inbox (date + short summary + author if available).
2. Propose the best target money-page URL from our 9 tours.
3. Open a small DRAFT PR if the backlog file changed.
4. Reply in the Slack thread confirming it was logged + suggested tour URL.

Ignore unrelated messages.
Do not write full articles from Slack alone.
```
