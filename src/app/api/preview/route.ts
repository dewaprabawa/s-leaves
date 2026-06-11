import { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(
  req: NextRequest
): Promise<Response> {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const url = searchParams.get('url')

  if (!url) {
    return new Response('No URL provided', { status: 404 })
  }

  // To secure the preview endpoint in production, we check the secret.
  if (secret !== process.env.PAYLOAD_SECRET && process.env.NODE_ENV === 'production') {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path from the fetched post
  redirect(url)
}
