/**
 * GA4 measurement ID — loaded via gtag.js in `GoogleAnalytics.tsx`.
 * Keep GTM free of a duplicate GA4 Configuration tag for this same ID
 * (otherwise page views double-count). Use GTM for extra tags only.
 */
export const GA_MEASUREMENT_ID = 'G-TJW418QSF8'
export const GTM_CONTAINER_ID = 'GTM-MRSRZFNP'

type GaEventParams = Record<string, string | number | boolean | undefined>

type DataLayerObject = { event: string } & Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: Array<DataLayerObject | IArguments>
    gtag?: (command: string, eventName: string, params?: GaEventParams) => void
  }
}

/** Sends the event to GA4 via gtag and mirrors it on dataLayer for GTM. */
export function trackGaEvent(eventName: string, params?: GaEventParams) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  const payload: DataLayerObject = { event: eventName }
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) payload[key] = value
    }
  }
  window.dataLayer.push(payload)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/** Primary conversion: guest opens official WhatsApp. Mark `generate_lead` as a key event in GA4. */
export function trackGenerateLead(method: string, extra?: GaEventParams) {
  trackGaEvent('generate_lead', {
    currency: 'IDR',
    method,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    ...extra,
  })
}

export function isWhatsAppHref(href: string | null | undefined): boolean {
  if (!href) return false
  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'https://www.sekarbaliactivity.com')
    return (
      url.hostname === 'wa.me' ||
      url.hostname === 'api.whatsapp.com' ||
      url.hostname === 'web.whatsapp.com' ||
      url.protocol === 'whatsapp:'
    )
  } catch {
    return /wa\.me|whatsapp/i.test(href)
  }
}
