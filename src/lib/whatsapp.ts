import { CONTACT_WHATSAPP_URL } from '@/lib/contact'

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
}

export function formatIdr(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount)
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

  lines.push('', 'Please confirm availability. Thank you!')
  return lines.join('\n')
}

export function buildWhatsAppBookingUrl(payload: WhatsAppBookingPayload) {
  const text = buildWhatsAppBookingMessage(payload)
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

export function openWhatsAppBooking(payload: WhatsAppBookingPayload) {
  window.open(buildWhatsAppBookingUrl(payload), '_blank', 'noopener,noreferrer')
}
