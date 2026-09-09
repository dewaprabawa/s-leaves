/**
 * Client-side Web3Forms submissions (required on the free plan).
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel / .env.local — do not commit the value.
 */
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export type Web3FormFields = {
  name: string
  email?: string
  subject: string
  message: string
  extra?: Record<string, string>
}

export type Web3FormResult = {
  success: boolean
  message: string
}

function getAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || ''
}

export async function submitWeb3Form(fields: Web3FormFields): Promise<Web3FormResult> {
  const accessKey = getAccessKey()
  if (!accessKey) {
    return { success: false, message: 'Lead inbox is not configured. Please try WhatsApp.' }
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    name: fields.name.trim() || 'Website visitor',
    email: (fields.email || '').trim() || 'noreply@sekarbaliactivity.com',
    subject: fields.subject,
    message: fields.message,
    from_name: 'Sekar Bali Activity',
    botcheck: '',
  }

  if (fields.extra) {
    for (const [key, value] of Object.entries(fields.extra)) {
      if (value) payload[key] = value
    }
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = (await response.json()) as { success?: boolean; message?: string }
    return {
      success: Boolean(data.success),
      message: data.message || (data.success ? 'Success!' : 'Error'),
    }
  } catch {
    return { success: false, message: 'Could not send. Please try WhatsApp.' }
  }
}

const INTEREST_STORAGE_KEY = 'sba-web3forms-activity-click'
const INTEREST_DEDUP_MS = 15 * 60 * 1000

function shouldSkipInterest(activity: string): boolean {
  if (typeof window === 'undefined') return true
  try {
    const raw = sessionStorage.getItem(INTEREST_STORAGE_KEY)
    const seen = raw ? (JSON.parse(raw) as Record<string, number>) : {}
    const last = seen[activity]
    const now = Date.now()
    if (last && now - last < INTEREST_DEDUP_MS) return true
    seen[activity] = now
    sessionStorage.setItem(INTEREST_STORAGE_KEY, JSON.stringify(seen))
    return false
  } catch {
    return false
  }
}

/** Fire-and-forget ping when a guest clicks an activity (book, card, or details). */
export function notifyActivityClick(activity: string, source: string) {
  const label = activity.trim()
  if (!label) return
  if (shouldSkipInterest(label)) return

  const page = typeof window !== 'undefined' ? window.location.pathname : ''
  void submitWeb3Form({
    name: 'Website visitor',
    subject: `Activity click: ${label}`,
    message: [
      `Someone clicked an activity on sekarbaliactivity.com.`,
      '',
      `Activity: ${label}`,
      `Source: ${source}`,
      page ? `Page: ${page}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
    extra: {
      activity: label,
      source,
      page,
      event: 'activity_click',
    },
  })
}

export type BookingNotifyInput = {
  guestName: string
  email?: string
  activity: string
  date?: string
  time?: string
  guests?: string
  location?: string
  price?: string
  notes?: string
  source?: string
}

/** Send a completed booking / invoice request (does not replace WhatsApp). */
export function notifyBookingSubmitted(input: BookingNotifyInput) {
  const guests = input.guests || '—'
  const message = [
    'New booking request from sekarbaliactivity.com',
    '',
    `Name: ${input.guestName}`,
    input.email ? `Email: ${input.email}` : 'Email: (not provided)',
    `Activity: ${input.activity}`,
    input.date ? `Date: ${input.date}` : null,
    input.time ? `Time: ${input.time}` : null,
    `Guests: ${guests}`,
    input.location ? `Pickup / location: ${input.location}` : null,
    input.price ? `Price: ${input.price}` : null,
    input.notes ? `Notes: ${input.notes}` : null,
    input.source ? `Source: ${input.source}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  return submitWeb3Form({
    name: input.guestName,
    email: input.email,
    subject: `Booking: ${input.activity}`,
    message,
    extra: {
      activity: input.activity,
      event: 'booking',
      date: input.date || '',
      time: input.time || '',
      guests,
      location: input.location || '',
      price: input.price || '',
    },
  })
}
