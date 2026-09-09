/**
 * Browser helper for lead emails. The Web3Forms access key stays on the server
 * (`WEB3FORMS_ACCESS_KEY`) and is never sent to the client.
 */

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

export async function submitWeb3Form(fields: Web3FormFields): Promise<Web3FormResult> {
  try {
    const response = await fetch('/api/web3forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        subject: fields.subject,
        message: fields.message,
        extra: fields.extra,
      }),
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
