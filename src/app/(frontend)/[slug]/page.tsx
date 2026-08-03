import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  return {
    title: `${resolvedParams.slug.toUpperCase()} | S-Leaves`,
  }
}

export default async function CustomPage({ params }: Props) {
  const resolvedParams = await params

  if (resolvedParams.slug === 'about') {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About S-Leaves</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            At S-Leaves, we believe travel should be immersive, sustainable, and unforgettable. Our carefully curated itineraries connect conscious travelers with local guides, hidden natural wonders, and deep cultural heritage across Bali and Indonesia.
          </p>
        </div>
      </main>
    )
  }

  if (resolvedParams.slug === 'contact') {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Have questions about our private tours or custom transfer packages? Get in touch with our 24/7 support team.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4">
            <p className="font-semibold">Email: <span className="font-normal text-gray-600 dark:text-gray-400">info@sekarbaliactivity.com</span></p>
            <p className="font-semibold">Phone/WhatsApp: <span className="font-normal text-gray-600 dark:text-gray-400">+62 812 3456 7890</span></p>
          </div>
        </div>
      </main>
    )
  }

  notFound()
}
