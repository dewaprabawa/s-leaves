/** Configure this ID on the GA4 tag inside the GTM container. Do not also load gtag.js. */
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

/** Pushes a GTM custom event. The container listens for the event name. */
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
