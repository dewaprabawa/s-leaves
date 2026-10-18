/** Ahrefs Web Analytics — exact project snippet in <head> for install verification. */
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
