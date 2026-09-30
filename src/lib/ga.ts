export const GA_MEASUREMENT_ID = 'G-TJW418QSF8'

type GaEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GaEventParams) => void
  }
}

export function trackGaEvent(eventName: string, params?: GaEventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
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
