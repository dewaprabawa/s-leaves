import { getPayload } from "@/lib/payload"
import { notFound } from "next/navigation"
import { draftMode } from "next/headers"
import type { Metadata } from "next"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { RenderBlocks } from "@/components/RenderBlocks"

export const revalidate = 3600 // Cache for 1 hour

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload()
  if (!payload) return []

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    return docs
      .filter((page: any) => page.slug !== 'home')
      .map((page: any) => ({
        slug: page.slug,
      }))
  } catch (e) {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const payload = await getPayload()
  
  if (!payload) return { title: 'Not Found' }

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: resolvedParams.slug } },
      limit: 1,
    })
    const page = docs[0] as any
    if (!page) return { title: 'Not Found' }

    return {
      title: `${page.title} | S-Leaves`,
    }
  } catch {
    return { title: 'S-Leaves' }
  }
}

export default async function CustomPage({ params }: Props) {
  const resolvedParams = await params
  const payload = await getPayload()
  
  if (!payload) notFound()

  const { isEnabled: isDraftMode } = await draftMode()

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: resolvedParams.slug } },
      draft: isDraftMode,
      limit: 1,
      depth: 2, // Fetch relation data for background images
    })
    
    const page = docs[0] as any

    if (!page) {
      notFound()
    }

    return (
      <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
        {isDraftMode && <LivePreviewListener />}
        <RenderBlocks layout={page.layout} />
      </main>
    )
  } catch (e) {
    console.error("Failed to fetch page", e)
    notFound()
  }
}
