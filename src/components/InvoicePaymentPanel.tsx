'use client'

import { CheckCircle2, MessageCircle, MapPin } from 'lucide-react'
import {
  INVOICE_PAYMENT_METHODS_LINE,
  openInvoiceWhatsApp,
  type InvoiceDraft,
} from '@/lib/invoice'
import { PAYMENT_INSTRUCTIONS } from '@/lib/payment'
import { formatIdr } from '@/lib/whatsapp'
import CardBrandLogos from '@/components/CardBrandLogos'

type Props = {
  invoice: InvoiceDraft
  onBack: () => void
  onClose: () => void
}

export default function InvoicePaymentPanel({ invoice, onBack, onClose }: Props) {
  const handleSendInvoice = () => {
    openInvoiceWhatsApp(invoice)
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
            Review your booking below, then tap <strong>Agree — send invoice to WhatsApp</strong>.
            We confirm and send payment instructions on that thread.
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
          <span className="text-brand-green-light">Participants</span>
          <span className="font-semibold text-brand-green text-right">
            {invoice.adults} adult{invoice.adults === 1 ? '' : 's'}
            {invoice.children > 0
              ? `, ${invoice.children} child${invoice.children === 1 ? '' : 'ren'}`
              : ''}
          </span>
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
        <div className="pt-2 border-t border-brand-green/10 space-y-1.5">
          {invoice.lineItems.map((item) => (
            <div key={item.label + String(item.amount)} className="flex justify-between gap-3 text-sm">
              <span className="text-brand-green-light text-left">{item.label}</span>
              <span className="font-semibold text-brand-green whitespace-nowrap">
                {item.amount < 0 ? '−' : ''}{formatIdr(Math.abs(item.amount))}
              </span>
            </div>
          ))}
        </div>
        {invoice.paymentMode === 'deposit' &&
        (invoice.amountDue ?? invoice.total) < invoice.total ? (
          <>
            <div className="flex justify-between gap-3 text-sm pt-2 border-t border-brand-green/10">
              <span className="text-brand-green-light">Package total</span>
              <span className="font-semibold text-brand-green">{formatIdr(invoice.total)}</span>
            </div>
            <div className="flex justify-between gap-3 text-base">
              <span className="font-bold text-brand-green">
                Deposit due
                {invoice.depositPercent ? ` (${invoice.depositPercent}%)` : ''}
              </span>
              <span className="font-bold text-brand-green text-xl">
                {formatIdr(invoice.amountDue ?? invoice.total)}
              </span>
            </div>
          </>
        ) : (
          <div className="flex justify-between gap-3 text-base pt-2 border-t border-brand-green/10">
            <span className="font-bold text-brand-green">Total due</span>
            <span className="font-bold text-brand-green text-xl">
              {formatIdr(invoice.amountDue ?? invoice.total)}
            </span>
          </div>
        )}
        {invoice.createdBy ? (
          <p className="text-xs text-brand-green-light pt-1">Prepared by {invoice.createdBy}</p>
        ) : null}
      </div>

      {invoice.mapUrl ? (
        <div className="rounded-2xl border-2 border-brand-green/25 bg-brand-green/5 p-4 md:p-5 mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5">
            No shuttle — where to meet
          </p>
          <p className="text-sm font-semibold text-brand-green leading-relaxed">
            {invoice.location}
          </p>
          <p className="text-xs text-brand-green-light leading-relaxed mt-1">
            This map pin is also included in the WhatsApp invoice, so you can open it on the day.
            Please show your invoice to the operator when you arrive — see you there!
          </p>
          <a
            href={invoice.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand-green px-4 py-2.5 text-sm font-bold text-sand hover:bg-brand-green-light transition-colors"
          >
            <MapPin className="h-4 w-4 shrink-0" />
            Open meeting point in Google Maps
          </a>
        </div>
      ) : null}

      <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-4 md:p-5 mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-2">
          How to pay
        </p>
        <ul className="space-y-1">
          {PAYMENT_INSTRUCTIONS.map((line) => (
            <li key={line} className="text-xs text-brand-green-light leading-relaxed">
              · {line}
            </li>
          ))}
          <li className="text-xs text-brand-green-light leading-relaxed">
            · {INVOICE_PAYMENT_METHODS_LINE}
          </li>
        </ul>
        <p className="mt-3 flex items-center gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green-light">
            We accept
          </span>
          <CardBrandLogos logoClassName="h-7" />
        </p>
      </div>

      <div className="space-y-3 mt-auto">
        <button
          type="button"
          onClick={handleSendInvoice}
          className="w-full py-4 rounded-xl font-bold text-base bg-brand-green text-sand hover:bg-brand-green-light shadow-lg transition-all inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Agree — send invoice to WhatsApp
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
