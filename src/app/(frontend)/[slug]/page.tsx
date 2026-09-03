import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  
  const reserved = ['about', 'contact', 'privacy-policy', 'cancellation-policy']
  if (reserved.includes(resolvedParams.slug)) {
    return { title: 'Page Not Found' }
  }

  return {
    title: `${resolvedParams.slug.toUpperCase()} | Sekar Bali Activity`,
  }
}

export default async function CustomPage({ params }: Props) {
  const resolvedParams = await params

  const reserved = ['about', 'contact', 'privacy-policy', 'cancellation-policy']
  if (reserved.includes(resolvedParams.slug)) {
    notFound()
  }

  notFound()
}
