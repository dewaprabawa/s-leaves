import type { Metadata } from 'next'
import GuestInvoiceView from '@/components/GuestInvoiceView'

type Props = {
  searchParams: Promise<{ d?: string }>
}

export const metadata: Metadata = {
  title: 'Your invoice',
  description: 'View and pay your Sekar Bali Activity invoice.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default async function GuestInvoicePage({ searchParams }: Props) {
  const { d } = await searchParams

  return (
    <main className="w-full bg-sand pt-32 pb-24 flex-1">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <GuestInvoiceView payload={d ?? null} />
      </div>
    </main>
  )
}
