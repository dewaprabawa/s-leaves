import { NextResponse } from 'next/server'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const EXTRA_KEYS = [
  'activity',
  'source',
  'page',
  'event',
  'date',
  'time',
  'guests',
  'location',
  'price',
] as const

function clip(value: unknown, max: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Lead inbox is not configured. Please use WhatsApp.' },
      { status: 503 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 })
  }

  const name = clip(body.name, 120) || 'Website visitor'
  const email = clip(body.email, 160) || 'noreply@sekarbaliactivity.com'
  const subject = clip(body.subject, 160)
  const message = clip(body.message, 4000)

  if (!subject || !message) {
    return NextResponse.json({ success: false, message: 'Missing message.' }, { status: 400 })
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    name,
    email,
    subject,
    message,
    from_name: 'Sekar Bali Activity',
    botcheck: '',
  }

  const extra = body.extra
  if (extra && typeof extra === 'object' && !Array.isArray(extra)) {
    for (const key of EXTRA_KEYS) {
      const value = clip((extra as Record<string, unknown>)[key], 240)
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
    return NextResponse.json({
      success: Boolean(data.success),
      message: data.message || (data.success ? 'Success!' : 'Error'),
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Could not send. Please try WhatsApp.' },
      { status: 502 },
    )
  }
}
