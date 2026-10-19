/** Ahrefs Web Analytics — official head inject (matches Ahrefs project settings). */
const AHREFS_ANALYTICS_KEY = "reXJz3/OCav3HQao8hDc1Q"

export default function AhrefsAnalytics() {
  const inject = `
    (function () {
      var ahrefs_analytics_script = document.createElement('script');
      ahrefs_analytics_script.async = true;
      ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
      ahrefs_analytics_script.setAttribute('data-key', '${AHREFS_ANALYTICS_KEY}');
      document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
    })();
  `

  return (
    <script
      id="ahrefs-analytics"
      dangerouslySetInnerHTML={{ __html: inject }}
    />
  )
}
