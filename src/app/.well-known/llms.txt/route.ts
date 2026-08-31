import { buildLlmsTxt } from '@/data/geoContent'

/** Mirror /llms.txt at /.well-known/llms.txt for AI crawlers that check well-known paths */
export const dynamic = 'force-static'
export const revalidate = 86400

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
