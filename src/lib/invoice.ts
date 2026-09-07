import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { formatIdr } from '@/lib/whatsapp'
import { formatBankTransferBlock, PAYMENT_BANK } from '@/lib/payment'
import type { TransferOption } from '@/lib/adminInvoiceCatalog'

export type InvoiceLineItem = {
  label: string
  amount: number
}

export type InvoicePaymentMode = 'full' | 'deposit'

export type InvoiceDraft = {
  invoiceNumber: string
  issuedAt: string
  guestName: string
  guestAge?: string
  guestType?: string
  adults: number
  children: number
  childrenAges?: string
  activity: string
  activityOption?: string
  date: string
  time: string
  location: string
  notes?: string
  lineItems: InvoiceLineItem[]
  /** Full package / booking total before deposit split */
  total: number
  /** Staff member who created this invoice */
  createdBy?: string
  paymentMode?: InvoicePaymentMode
  /** Amount guest should transfer now (deposit or full) */
  amountDue?: number
  depositPercent?: number
  transferOption?: TransferOption
  guestWhatsApp?: string
}

export function createInvoiceNumber(date = new Date()): string {
  const y = date.getFullYear().toString().slice(-2)
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `SBA-${y}${m}${d}-${rand}`
}

function formatPdfAmount(amount: number): string {
  const abs = Math.abs(amount).toLocaleString('id-ID')
  return amount < 0 ? `- IDR ${abs}` : `IDR ${abs}`
}

async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const res = await fetch('/logo.png')
    if (!res.ok) return null
    const blob = await res.blob()
    return await new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : null)
      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

/** Generate and download a branded PDF invoice (client-side) */
export async function downloadInvoicePdf(invoice: InvoiceDraft): Promise<void> {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const margin = 18
  let y = 18

  const logo = await loadLogoDataUrl()
  if (logo) {
    try {
      doc.addImage(logo, 'PNG', margin, y, 22, 22)
    } catch {
      // Logo optional — continue without it
    }
  }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.setTextColor(27, 67, 50)
  doc.text('Sekar Bali Activity', margin + (logo ? 28 : 0), y + 8)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(80, 80, 80)
  doc.text('Ubud · Bali Adventure Tours', margin + (logo ? 28 : 0), y + 14)
  doc.text(`${CONTACT_PHONE_DISPLAY} · ${CONTACT_EMAIL}`, margin + (logo ? 28 : 0), y + 19)

  y = 48
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.setTextColor(27, 67, 50)
  doc.text('INVOICE', margin, y)

  y += 10
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(40, 40, 40)
  doc.text(`Invoice No: ${invoice.invoiceNumber}`, margin, y)
  doc.text(`Date: ${invoice.issuedAt}`, 120, y)

  y += 12
  doc.setFont('helvetica', 'bold')
  doc.text('Bill to', margin, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  doc.text(invoice.guestName, margin, y)
  y += 5
  if (invoice.guestAge) {
    doc.text(
      `Age: ${invoice.guestAge}${invoice.guestType ? ` · ${invoice.guestType}` : ''}`,
      margin,
      y,
    )
    y += 5
  }
  doc.text(
    `Guests: ${invoice.adults} adult(s)${invoice.children > 0 ? `, ${invoice.children} child(ren)` : ''}`,
    margin,
    y,
  )
  if (invoice.childrenAges) {
    y += 5
    doc.text(`Children ages: ${invoice.childrenAges}`, margin, y)
  }

  y += 12
  doc.setFont('helvetica', 'bold')
  doc.text('Booking details', margin, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  const details = [
    `Activity: ${invoice.activity}`,
    invoice.activityOption ? `Option: ${invoice.activityOption}` : null,
    `Date: ${invoice.date}`,
    `Time: ${invoice.time}`,
    `Pickup / meeting: ${invoice.location}`,
  ].filter(Boolean) as string[]
  for (const line of details) {
    doc.text(line, margin, y)
    y += 5
  }
  if (invoice.notes) {
    const noteLines = doc.splitTextToSize(`Notes: ${invoice.notes}`, 170)
    doc.text(noteLines, margin, y)
    y += noteLines.length * 5 + 2
  }

  y += 6
  doc.setDrawColor(27, 67, 50)
  doc.setLineWidth(0.3)
  doc.line(margin, y, 192, y)
  y += 8

  doc.setFont('helvetica', 'bold')
  doc.text('Description', margin, y)
  doc.text('Amount', 160, y)
  y += 6
  doc.setFont('helvetica', 'normal')
  for (const item of invoice.lineItems) {
    const labelLines = doc.splitTextToSize(item.label, 130)
    doc.text(labelLines, margin, y)
    doc.text(formatPdfAmount(item.amount), 160, y)
    y += Math.max(labelLines.length * 5, 6)
  }

  y += 4
  doc.line(margin, y, 192, y)
  y += 8
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  const amountDue = invoice.amountDue ?? invoice.total
  const isDeposit = invoice.paymentMode === 'deposit' && amountDue < invoice.total
  if (isDeposit) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text('Package total', margin, y)
    doc.text(formatPdfAmount(invoice.total), 160, y)
    y += 6
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text(
      `Deposit due now${invoice.depositPercent ? ` (${invoice.depositPercent}%)` : ''}`,
      margin,
      y,
    )
    doc.text(formatPdfAmount(amountDue), 160, y)
  } else {
    doc.text('Total due', margin, y)
    doc.text(formatPdfAmount(amountDue), 160, y)
  }

  if (invoice.createdBy) {
    y += 7
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(90, 90, 90)
    doc.text(`Prepared by: ${invoice.createdBy}`, margin, y)
    doc.setTextColor(40, 40, 40)
  }

  y += 14
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Payment details (Seabank transfer)', margin, y)
  y += 7
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text(`Bank: ${PAYMENT_BANK.bankName}`, margin, y)
  y += 5
  doc.text(`Account number: ${PAYMENT_BANK.accountNumber}`, margin, y)
  y += 5
  doc.text(`Account name: ${PAYMENT_BANK.accountName}`, margin, y)
  y += 8
  doc.setFontSize(9)
  doc.setTextColor(90, 90, 90)
  const footer = doc.splitTextToSize(
    'After you transfer, please confirm payment on WhatsApp with your invoice number and transfer receipt. We will verify and confirm your booking.',
    174,
  )
  doc.text(footer, margin, y)

  doc.save(`${invoice.invoiceNumber}.pdf`)
}

function amountDueNow(invoice: InvoiceDraft): number {
  return invoice.amountDue ?? invoice.total
}

/** WhatsApp message: guest agrees and sends invoice details to the business number */
export function buildInvoiceWhatsAppMessage(invoice: InvoiceDraft): string {
  const due = amountDueNow(invoice)
  const isDeposit = invoice.paymentMode === 'deposit' && due < invoice.total
  const lines = [
    'Hello Sekar Bali Activity! I agree to this booking and am sending my invoice.',
    '',
    `*Invoice:* ${invoice.invoiceNumber}`,
    `*Name:* ${invoice.guestName}`,
  ]
  if (invoice.guestAge) lines.push(`*Age:* ${invoice.guestAge}`)
  if (invoice.guestType) lines.push(`*Guest type:* ${invoice.guestType}`)
  lines.push(`*Adults:* ${invoice.adults}`)
  if (invoice.children > 0) {
    const ages = invoice.childrenAges ? ` (ages: ${invoice.childrenAges})` : ''
    lines.push(`*Children:* ${invoice.children}${ages}`)
  }
  lines.push(`*Activity:* ${invoice.activity}`)
  if (invoice.activityOption) lines.push(`*Option:* ${invoice.activityOption}`)
  lines.push(`*Date:* ${invoice.date}`)
  lines.push(`*Time:* ${invoice.time}`)
  lines.push(`*Location / pickup:* ${invoice.location}`)
  if (invoice.transferOption && invoice.transferOption !== 'none') {
    lines.push(`*Transfer:* ${invoice.transferOption}`)
  }
  lines.push(`*Package total:* ${formatIdr(invoice.total)}`)
  lines.push(
    isDeposit
      ? `*Deposit due now${invoice.depositPercent ? ` (${invoice.depositPercent}%)` : ''}:* ${formatIdr(due)}`
      : `*Amount due:* ${formatIdr(due)}`,
  )
  if (invoice.createdBy) lines.push(`*Prepared by:* ${invoice.createdBy}`)
  lines.push('')
  lines.push('*Transfer to:*')
  lines.push(formatBankTransferBlock())
  lines.push('')
  lines.push(
    'I downloaded the PDF invoice with your logo and will attach it here if needed. I will transfer and then confirm payment.',
  )
  if (invoice.notes) {
    lines.push('')
    lines.push(`*Notes:* ${invoice.notes}`)
  }
  return lines.join('\n')
}

/** Staff → guest WhatsApp with shareable invoice link */
export function buildStaffToGuestInvoiceMessage(
  invoice: InvoiceDraft,
  shareUrl: string,
): string {
  const due = amountDueNow(invoice)
  const isDeposit = invoice.paymentMode === 'deposit' && due < invoice.total
  const lines = [
    `Hello ${invoice.guestName}! Here is your Sekar Bali Activity invoice.`,
    '',
    `*Invoice:* ${invoice.invoiceNumber}`,
    `*Activity:* ${invoice.activity}`,
    `*Date:* ${invoice.date} · ${invoice.time}`,
    `*Location:* ${invoice.location}`,
    `*Package total:* ${formatIdr(invoice.total)}`,
    isDeposit
      ? `*Deposit due now:* ${formatIdr(due)}`
      : `*Amount due:* ${formatIdr(due)}`,
    '',
    `View / pay invoice: ${shareUrl}`,
    '',
    '*Transfer to Seabank:*',
    formatBankTransferBlock(),
  ]
  if (invoice.createdBy) {
    lines.push('', `Prepared by ${invoice.createdBy} — reply here if you have questions.`)
  }
  return lines.join('\n')
}

export function buildStaffToGuestWhatsAppUrl(
  invoice: InvoiceDraft,
  shareUrl: string,
  guestPhoneE164?: string,
): string {
  const text = buildStaffToGuestInvoiceMessage(invoice, shareUrl)
  const digits = (guestPhoneE164 || '').replace(/\D/g, '')
  if (digits.length >= 8) {
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
  }
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}

/** WhatsApp message after guest finishes Seabank transfer */
export function buildPaymentConfirmationWhatsAppMessage(invoice: InvoiceDraft): string {
  const paid = amountDueNow(invoice)
  return [
    'Hello Sekar Bali Activity! I have finished payment.',
    '',
    `*Invoice:* ${invoice.invoiceNumber}`,
    `*Name:* ${invoice.guestName}`,
    `*Activity:* ${invoice.activity}`,
    `*Date:* ${invoice.date}`,
    `*Amount paid:* ${formatIdr(paid)}`,
    '',
    '*Paid to:*',
    formatBankTransferBlock(),
    '',
    'Please confirm you received the transfer. I can send the receipt screenshot next.',
    'Thank you!',
  ].join('\n')
}

/** Encode invoice for unlisted share links (URL-safe base64 JSON) */
export function encodeInvoiceSharePayload(invoice: InvoiceDraft): string {
  const json = JSON.stringify(invoice)
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    const bytes = new TextEncoder().encode(json)
    let binary = ''
    bytes.forEach((b) => {
      binary += String.fromCharCode(b)
    })
    return window.btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  }
  return Buffer.from(json, 'utf8').toString('base64url')
}

export function decodeInvoiceSharePayload(payload: string): InvoiceDraft | null {
  try {
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/')
    const pad = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4))
    const b64 = normalized + pad
    let json: string
    if (typeof window !== 'undefined' && typeof window.atob === 'function') {
      const binary = window.atob(b64)
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
      json = new TextDecoder().decode(bytes)
    } else {
      json = Buffer.from(b64, 'base64').toString('utf8')
    }
    const parsed = JSON.parse(json) as InvoiceDraft
    if (!parsed?.invoiceNumber || !parsed?.guestName || typeof parsed.total !== 'number') {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function buildInvoiceShareUrl(invoice: InvoiceDraft, origin?: string): string {
  const base =
    origin ||
    (typeof window !== 'undefined' ? window.location.origin : 'https://www.sekarbaliactivity.com')
  return `${base}/invoice?d=${encodeInvoiceSharePayload(invoice)}`
}

export function buildInvoiceWhatsAppUrl(invoice: InvoiceDraft): string {
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(buildInvoiceWhatsAppMessage(invoice))}`
}

export function buildPaymentConfirmationWhatsAppUrl(invoice: InvoiceDraft): string {
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(buildPaymentConfirmationWhatsAppMessage(invoice))}`
}

export function openInvoiceWhatsApp(invoice: InvoiceDraft): void {
  window.open(buildInvoiceWhatsAppUrl(invoice), '_blank', 'noopener,noreferrer')
}

export function openPaymentConfirmationWhatsApp(invoice: InvoiceDraft): void {
  window.open(buildPaymentConfirmationWhatsAppUrl(invoice), '_blank', 'noopener,noreferrer')
}
