import { getPayload } from "@/lib/payload"
import { draftMode } from "next/headers"
import { LivePreviewListener } from "@/components/LivePreviewListener"
import { RenderBlocks } from "@/components/RenderBlocks"
import Link from "next/link"

export const revalidate = 3600 // Cache for 1 hour

export default async function Home() {
  const payload = await getPayload()
  
  if (!payload) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-semibold">Database Connection Offline</p>
          <p className="text-sm text-gray-500">Could not initialize Payload CMS.</p>
        </div>
      </main>
    )
  }

  const { isEnabled: isDraftMode } = await draftMode()

  try {
    const { docs } = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
      draft: isDraftMode,
      limit: 1,
      depth: 2, // Fetch relations (background images)
    })

    const page = docs[0] as any

    if (!page) {
      // Fallback instructions if seeding is not done yet
      return (
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 bg-gray-50 dark:bg-gray-950 min-h-[70vh]">
          <div className="text-center max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Setup Pending
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to <span className="text-emerald-600">S-Leaves</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400">
              The dynamic Home page CMS data has not been seeded yet. Please run the database seed to create default content for landing, about, and contact pages.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <form action="/api/seed" method="POST">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
                >
                  Run Database Seed
                </button>
              </form>
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700 transition-colors"
              >
                Open Admin Panel
              </Link>
            </div>
          </div>
        </main>
      )
    }

    return (
      <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col w-full">
        {isDraftMode && <LivePreviewListener />}
        <RenderBlocks layout={page.layout} />
      </main>
    )
  } catch (error) {
    console.error("Failed to load home page dynamic blocks", error)
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-semibold">Error Loading Page</p>
          <p className="text-sm text-gray-500">Failed to render home page blocks from the database.</p>
        </div>
      </main>
    )
  }
}
