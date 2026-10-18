import Script from "next/script"

/** Ahrefs Web Analytics site key */
const AHREFS_ANALYTICS_KEY = "reXJz3/OCav3HQao8hDc1Q"

export default function AhrefsAnalytics() {
  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      strategy="afterInteractive"
      data-key={AHREFS_ANALYTICS_KEY}
    />
  )
}
