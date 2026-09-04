import { buildPricingMd } from '@/data/geoContent'

export const dynamic = 'force-static'
export const revalidate = 86400

/** Machine-readable pricing for AI agents (no JS required) */
export async function GET() {
  return new Response(buildPricingMd(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
