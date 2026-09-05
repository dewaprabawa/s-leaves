'use client'

import { useState } from 'react'
import { CheckCircle2, Download, MessageCircle, Loader2 } from 'lucide-react'
import {
  downloadInvoicePdf,
  openInvoiceWhatsApp,
  openPaymentConfirmationWhatsApp,
  type InvoiceDraft,
} from '@/lib/invoice'
import { PAYMENT_BANK, PAYMENT_INSTRUCTIONS } from '@/lib/payment'
import { formatIdr } from '@/lib/whatsapp'

type Props = {
  invoice: InvoiceDraft
  onBack: () => void
  onClose: () => void
}

export default function InvoicePaymentPanel({ invoice, onBack, onClose }: Props) {
  const [downloading, setDownloading] = useState(false)
  const [pdfReady, setPdfReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownloadPdf = async () => {
    setDownloading(true)
    setError(null)
    try {
      await downloadInvoicePdf(invoice)
      setPdfReady(true)
    } catch (err) {
      console.error(err)
      setError('Could not create the PDF. Please try again or send the WhatsApp invoice text.')
    } finally {
      setDownloading(false)
    }
  }

  const handleSendInvoice = async () => {
    setError(null)
    try {
      if (!pdfReady) {
        await downloadInvoicePdf(invoice)
        setPdfReady(true)
      }
    } catch (err) {
      console.error(err)
      // Still open WhatsApp with text even if PDF fails
    }
    openInvoiceWhatsApp(invoice)
  }

  const handleConfirmPayment = () => {
    openPaymentConfirmationWhatsApp(invoice)
  }

  return (
    <div className="w-full p-6 md:p-8 flex flex-col max-h-[95vh] overflow-y-auto">
      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-brand-green" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-green font-bold">
            Agree &amp; pay by invoice
          </h2>
          <p className="text-sm text-brand-green-light mt-1 leading-relaxed">
            Download the PDF invoice (with our logo), send it to our WhatsApp, transfer to Seabank,
            then confirm payment.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-brand-green/15 bg-white p-4 md:p-5 mb-4 space-y-2">
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-brand-green-light">Invoice</span>
          <span className="font-bold text-brand-green">{invoice.invoiceNumber}</span>
        </div>
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-brand-green-light">Guest</span>
          <span className="font-semibold text-brand-green">{invoice.guestName}</span>
        </div>
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-brand-green-light">Activity</span>
          <span className="font-semibold text-brand-green text-right">{invoice.activity}</span>
        </div>
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-brand-green-light">Date · time</span>
          <span className="font-semibold text-brand-green">
            {invoice.date} · {invoice.time}
          </span>
        </div>
        <div className="flex justify-between gap-3 text-base pt-2 border-t border-brand-green/10">
          <span className="font-bold text-brand-green">Total due</span>
          <span className="font-bold text-brand-green text-xl">{formatIdr(invoice.total)}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-4 md:p-5 mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-2">
          Transfer to Seabank
        </p>
        <dl className="space-y-1.5 text-sm text-brand-green">
          <div className="flex justify-between gap-3">
            <dt className="text-brand-green-light">Bank</dt>
            <dd className="font-bold">{PAYMENT_BANK.bankName}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-brand-green-light">Account number</dt>
            <dd className="font-bold tracking-wide">{PAYMENT_BANK.accountNumber}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-brand-green-light">Account name</dt>
            <dd className="font-bold text-right">{PAYMENT_BANK.accountName}</dd>
          </div>
        </dl>
        <ul className="mt-3 space-y-1">
          {PAYMENT_INSTRUCTIONS.map((line) => (
            <li key={line} className="text-xs text-brand-green-light leading-relaxed">
              · {line}
            </li>
          ))}
        </ul>
      </div>

      {error ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2 mb-3">
          {error}
        </p>
      ) : null}

      <div className="space-y-3 mt-auto">
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={downloading}
          className="w-full py-3.5 rounded-xl font-bold text-sm border border-brand-green/20 bg-white text-brand-green hover:bg-sand transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {pdfReady ? 'Download PDF invoice again' : 'Download PDF invoice (with logo)'}
        </button>

        <button
          type="button"
          onClick={handleSendInvoice}
          className="w-full py-4 rounded-xl font-bold text-base bg-brand-green text-sand hover:bg-brand-green-light shadow-lg transition-all inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Agree — send invoice to WhatsApp
        </button>

        <button
          type="button"
          onClick={handleConfirmPayment}
          className="w-full py-3.5 rounded-xl font-bold text-sm bg-accent-gold text-brand-green hover:brightness-95 transition-all inline-flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          I finished payment — confirm on WhatsApp
        </button>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-2.5 text-sm font-semibold text-brand-green-light hover:text-brand-green"
          >
            ← Edit booking
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 text-sm font-semibold text-brand-green-light hover:text-brand-green"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
