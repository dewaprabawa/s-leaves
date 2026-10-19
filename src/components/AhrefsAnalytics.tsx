/**
 * Ahrefs Web Analytics — static tag in <head>.
 * Their Site Audit crawler does not run JS, so createElement() injects fail
 * verification even when visitors are counted. This must appear in view-source.
 */
const AHREFS_ANALYTICS_KEY = "reXJz3/OCav3HQao8hDc1Q"

export default function AhrefsAnalytics() {
  return (
    <script
      async
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={AHREFS_ANALYTICS_KEY}
    />
  )
}
