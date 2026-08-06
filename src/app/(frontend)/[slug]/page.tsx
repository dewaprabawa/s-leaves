import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  
  if (resolvedParams.slug === 'about' || resolvedParams.slug === 'contact') {
    return { title: 'Page Not Found' }
  }

  return {
    title: `${resolvedParams.slug.toUpperCase()} | Sekar Bali Activity`,
  }
}

export default async function CustomPage({ params }: Props) {
  const resolvedParams = await params

  if (resolvedParams.slug === 'about' || resolvedParams.slug === 'contact') {
    notFound()
  }

  notFound()
}
