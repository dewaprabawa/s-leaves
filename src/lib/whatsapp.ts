import { CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { trackGenerateLead } from '@/lib/ga'
import { SITE_URL } from '@/lib/seo'

export type WhatsAppBookingPayload = {
  guestName: string
  guestAge?: number | string
  guestType?: 'Adult' | 'Child' | string
  adults?: number
  children?: number
  childrenAges?: string
  activity: string
  activityOption?: string
  date?: string
  time?: string
  location?: string
  locationMapUrl?: string
  price: string | number
  notes?: string
  /** Absolute page URL so one WhatsApp number can attribute the lead. */
  pageUrl?: string
}

export function formatIdr(amount: number) {
  return `IDR ${amount.toLocaleString('id-ID')}`
}

/** Browser page URL for WhatsApp attribution (origin + path + query, no hash). */
export function getBrowserPageUrl(): string | undefined {
  if (typeof window === 'undefined') return undefined
  const { origin, pathname, search } = window.location
  return `${origin}${pathname}${search}`
}

/** Prefer an explicit page URL; otherwise use the current browser page. */
export function resolveWhatsAppPageUrl(pageUrl?: string | null): string | undefined {
  const explicit = pageUrl?.trim()
  if (explicit) return explicit
  return getBrowserPageUrl()
}

function appendFromWebsiteLine(lines: string[], pageUrl?: string | null) {
  const url = resolveWhatsAppPageUrl(pageUrl)
  if (!url) return
  lines.push(`*From website:* ${url}`)
}

/** Build a clear WhatsApp booking message with guest + trip details */
export function buildWhatsAppBookingMessage(payload: WhatsAppBookingPayload) {
  const priceText =
    typeof payload.price === 'number' ? formatIdr(payload.price) : payload.price

  const lines = [
    'Hello Sekar Bali Activity! I would like to book an adventure.',
    '',
    `*Name:* ${payload.guestName}`,
  ]

  if (payload.guestAge !== undefined && payload.guestAge !== '') {
    lines.push(`*Age:* ${payload.guestAge}`)
  }
  if (payload.guestType) {
    lines.push(`*Guest type:* ${payload.guestType}`)
  }
  if (payload.adults !== undefined) {
    lines.push(`*Adults:* ${payload.adults}`)
  }
  if (payload.children !== undefined && payload.children > 0) {
    const ages = payload.childrenAges ? ` (ages: ${payload.childrenAges})` : ''
    lines.push(`*Children:* ${payload.children}${ages}`)
  }

  lines.push(`*Activity:* ${payload.activity}`)
  if (payload.activityOption) {
    lines.push(`*Option:* ${payload.activityOption}`)
  }
  if (payload.date) {
    lines.push(`*Date:* ${payload.date}`)
  }
  if (payload.time) {
    lines.push(`*Time:* ${payload.time}`)
  }
  if (payload.location) {
    lines.push(`*Location / pickup:* ${payload.location}`)
  }
  if (payload.locationMapUrl) {
    lines.push(`*Map pin:* ${payload.locationMapUrl}`)
  }

  lines.push(`*Price:* ${priceText}`)

  if (payload.notes) {
    lines.push(`*Notes:* ${payload.notes}`)
  }

  appendFromWebsiteLine(lines, payload.pageUrl)

  lines.push('', 'Please confirm availability. Thank you!')
  return lines.join('\n')
}

export function buildWhatsAppBookingUrl(payload: WhatsAppBookingPayload) {
  const text = buildWhatsAppBookingMessage({
    ...payload,
    pageUrl: resolveWhatsAppPageUrl(payload.pageUrl),
  })
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

export function openWhatsAppBooking(payload: WhatsAppBookingPayload) {
  trackGenerateLead('whatsapp_booking', {
    activity: payload.activity,
    page_url: resolveWhatsAppPageUrl(payload.pageUrl) ?? '(unknown)',
  })
  window.open(buildWhatsAppBookingUrl(payload), '_blank', 'noopener,noreferrer')
}

export type ConsultationActivityRef = {
  title: string
  pageUrl?: string
}

function normalizeConsultationActivities(
  activity: string | ConsultationActivityRef[],
  pageUrl?: string,
): ConsultationActivityRef[] {
  if (Array.isArray(activity)) {
    return activity.filter((item) => item.title.trim().length > 0)
  }
  const title = activity.trim()
  return title ? [{ title, pageUrl }] : []
}

/** Pre-filled WhatsApp consult for one or more activities the guest wants to discuss. */
export function buildWhatsAppConsultationMessage(
  activity: string | ConsultationActivityRef[],
  pageUrl?: string,
) {
  const items = normalizeConsultationActivities(activity, pageUrl)
  const fromPage = resolveWhatsAppPageUrl(
    typeof activity === 'string' ? pageUrl : pageUrl ?? items[0]?.pageUrl,
  )
  const lines = [
    'Hello Sekar Bali Activity! I would like a WhatsApp consultation.',
    '',
  ]

  if (items.length === 0) {
    lines.push('I would like help choosing activities.')
  } else if (items.length === 1) {
    lines.push(`*Activity:* ${items[0].title}`)
    if (items[0].pageUrl) {
      lines.push(`*Page:* ${items[0].pageUrl}`)
    }
  } else {
    lines.push(`I am interested in these ${items.length} activities:`)
    items.forEach((item, index) => {
      lines.push(`${index + 1}. *${item.title}*`)
      if (item.pageUrl) {
        lines.push(`   ${item.pageUrl}`)
      }
    })
  }

  // Always attribute the chat to a site URL (one phone number → many pages).
  if (fromPage && (items.length !== 1 || items[0]?.pageUrl !== fromPage)) {
    lines.push(`*From website:* ${fromPage}`)
  } else if (items.length === 0) {
    appendFromWebsiteLine(lines, fromPage)
  } else if (items.length === 1 && !items[0].pageUrl) {
    appendFromWebsiteLine(lines, fromPage)
  }

  lines.push(
    '',
    'Please help with availability, group pricing, and pickup options. Thank you!',
  )
  return lines.join('\n')
}

export function buildWhatsAppConsultationUrl(
  activity: string | ConsultationActivityRef[],
  pageUrl?: string,
) {
  const text = buildWhatsAppConsultationMessage(activity, pageUrl)
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

/** Generic WhatsApp hello that always carries the website page for attribution. */
export function buildWhatsAppContactMessage(pageUrl?: string) {
  const lines = [
    'Hello Sekar Bali Activity! I found you on the website and would like to chat.',
    '',
  ]
  appendFromWebsiteLine(lines, pageUrl ?? SITE_URL)
  lines.push('', 'Thank you!')
  return lines.join('\n')
}

export function buildWhatsAppContactUrl(pageUrl?: string) {
  const text = buildWhatsAppContactMessage(resolveWhatsAppPageUrl(pageUrl) ?? SITE_URL)
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
