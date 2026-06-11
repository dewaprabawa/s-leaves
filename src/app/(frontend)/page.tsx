import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Platform Active
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          S-Leaves
          <span className="block text-emerald-600 dark:text-emerald-400">
            Travel Booking Platform
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          Your premium travel booking platform is up and running.
          Powered by Next.js and Payload CMS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
          >
            Open Admin Panel →
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700 transition-colors"
          >
            Browse Tours
          </Link>
        </div>
      </div>

      {/* Status Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto w-full">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-2">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Frontend</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Next.js</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400">✓ Running</div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-2">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">CMS</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Payload v3</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400">✓ Integrated</div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-2">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Database</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">MongoDB</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400">✓ Connected</div>
        </div>
      </div>
    </main>
  )
}
