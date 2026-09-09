# A7 — PR SEO gate

| Field | Value |
|-------|--------|
| **Name** | `SEO: PR review gate` |
| **Trigger** | GitHub · Pull request opened + Pull request pushed |
| **Repository** | `dewaprabawa/s-leaves` (required) |
| **Tools** | Comment on pull request · Memories |

## Prompt

```text
When a PR opens or updates, if it touches marketing/SEO surfaces
(tours data, blog, geoContent, pricing/llms, tour page schema, booking CTAs):

Comment a short SEO/GEO + sales checklist:
- Prices consistent across UI + schema + GEO files?
- Pickup rules preserved (400k / free Ubud / jeep island-wide / Luwak no transport)?
- Any new FAQPage/HowTo schema? (flag — do not add)
- WhatsApp Consultation + Book CTAs still present on tour pages?
- New blog posts link to a money /tours/[slug] page?
- Duration ISO plausible for any changed durations?

If no marketing files changed, comment nothing and exit.
Review only — do not implement fixes unless the PR author asked in the description.
```
