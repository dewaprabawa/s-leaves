'use client'

import { useMemo, useState } from 'react'
import { CheckCircle2, Download, Loader2, MessageCircle } from 'lucide-react'
import {
  decodeInvoiceSharePayload,
  downloadInvoicePdf,
  openInvoiceWhatsApp,
  openPaymentConfirmationWhatsApp,
} from '@/lib/invoice'
import { PAYMENT_BANK, PAYMENT_INSTRUCTIONS } from '@/lib/payment'
import { formatIdr } from '@/lib/whatsapp'

type Props = {
  payload: string | null
}

export default function GuestInvoiceView({ payload }: Props) {
  const invoice = useMemo(
    () => (payload ? decodeInvoiceSharePayload(payload) : null),
    [payload],
  )
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!payload || !invoice) {
    return (
      <div className="rounded-2xl border border-brand-green/10 bg-white p-8 text-center space-y-3">
        <h1 className="font-display text-2xl font-bold text-brand-green">Invoice not found</h1>
        <p className="text-sm text-brand-green-light">
          This link is missing or invalid. Ask your Sekar Bali Activity host for a new invoice
          link.
        </p>
      </div>
    )
  }

  const amountDue = invoice.amountDue ?? invoice.total
  const isDeposit =
    invoice.paymentMode === 'deposit' && amountDue < invoice.total

  const handleDownload = async () => {
    setDownloading(true)
    setError(null)
    try {
      await downloadInvoicePdf(invoice)
    } catch {
      setError('Could not create the PDF. Please try WhatsApp instead.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-brand-green/10 bg-white p-6 md:p-8 space-y-5 max-w-xl mx-auto">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-brand-green" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark">
            Invoice
          </p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-brand-green">
            {invoice.invoiceNumber}
          </h1>
          <p className="text-sm text-brand-green-light mt-1">
            {invoice.issuedAt}
            {invoice.createdBy ? ` · Prepared by ${invoice.createdBy}` : ''}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <Row label="Guest" value={invoice.guestName} />
        <Row
          label="Guests"
          value={`${invoice.adults} adult(s)${invoice.children > 0 ? `, ${invoice.children} child(ren)` : ''}`}
        />
        <Row label="Activity" value={invoice.activity} />
        {invoice.activityOption ? (
          <Row label="Option" value={invoice.activityOption} />
        ) : null}
        <Row label="Date · time" value={`${invoice.date} · ${invoice.time}`} />
        <Row label="Location" value={invoice.location} />
      </div>

      <div className="border-t border-brand-green/10 pt-3 space-y-1.5">
        {invoice.lineItems.map((item) => (
          <div
            key={item.label + String(item.amount)}
            className="flex justify-between gap-3 text-sm"
          >
            <span className="text-brand-green-light text-left">{item.label}</span>
            <span className="font-semibold text-brand-green whitespace-nowrap">
              {item.amount < 0 ? '−' : ''}
              {formatIdr(Math.abs(item.amount))}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-green/10 pt-3 space-y-1">
        {isDeposit ? (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-brand-green-light">Package total</span>
              <span className="font-semibold">{formatIdr(invoice.total)}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="font-bold text-brand-green">
                Deposit due now
                {invoice.depositPercent ? ` (${invoice.depositPercent}%)` : ''}
              </span>
              <span className="font-bold text-brand-green text-xl">
                {formatIdr(amountDue)}
              </span>
            </div>
          </>
        ) : (
          <div className="flex justify-between text-base">
            <span className="font-bold text-brand-green">Total due</span>
            <span className="font-bold text-brand-green text-xl">
              {formatIdr(amountDue)}
            </span>
          </div>
        )}
      </div>

      {invoice.notes ? (
        <p className="text-xs text-brand-green-light leading-relaxed">{invoice.notes}</p>
      ) : null}

      <div className="rounded-xl border border-accent-gold/30 bg-accent-gold/5 p-4">
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
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
          {error}
        </p>
      ) : null}

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-3.5 rounded-xl font-bold text-sm border border-brand-green/20 bg-white text-brand-green hover:bg-sand transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {downloading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          Download PDF invoice
        </button>
        <button
          type="button"
          onClick={() => openInvoiceWhatsApp(invoice)}
          className="w-full py-4 rounded-xl font-bold text-base bg-brand-green text-sand hover:bg-brand-green-light shadow-lg transition-all inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Agree — send invoice on WhatsApp
        </button>
        <button
          type="button"
          onClick={() => openPaymentConfirmationWhatsApp(invoice)}
          className="w-full py-3.5 rounded-xl font-bold text-sm bg-accent-gold text-brand-green hover:brightness-95 transition-all inline-flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          I finished payment — confirm on WhatsApp
        </button>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-brand-green-light">{label}</span>
      <span className="font-semibold text-brand-green text-right">{value}</span>
    </div>
  )
}
