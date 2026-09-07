import type { Metadata } from 'next'
import AdminInvoiceBuilder from '@/components/AdminInvoiceBuilder'

export const metadata: Metadata = {
  title: 'Invoice builder (staff)',
  description: 'Unlisted staff tool to build activity invoices for WhatsApp and payment links.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: '/tools/invoice',
  },
}

export default function AdminInvoiceToolsPage() {
  return (
    <main className="w-full bg-sand pt-32 pb-24 flex-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
        <header className="max-w-3xl space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold-dark">
            Staff tool · not published
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            Invoice builder
          </h1>
          <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
            Build a guest invoice from activities (including temporary ones), set pickup/drop,
            choose deposit or full payment, then copy a link or send on WhatsApp. This page is
            unlisted — bookmark the URL; it is not in the site menu or sitemap.
          </p>
        </header>

        <AdminInvoiceBuilder />
      </div>
    </main>
  )
}
