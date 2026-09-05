import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { formatIdr } from '@/lib/whatsapp'
import { formatBankTransferBlock, PAYMENT_BANK } from '@/lib/payment'

export type InvoiceLineItem = {
  label: string
  amount: number
}

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
  total: number
}

export function createInvoiceNumber(date = new Date()): string {
  const y = date.getFullYear().toString().slice(-2)
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `SBA-${y}${m}${d}-${rand}`
}

function formatPdfAmount(amount: number): string {
  return `IDR ${amount.toLocaleString('id-ID')}`
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
  doc.text('Total due', margin, y)
  doc.text(formatPdfAmount(invoice.total), 160, y)

  y += 14
  doc.setFontSize(11)
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

/** WhatsApp message: guest agrees and sends invoice details to the business number */
export function buildInvoiceWhatsAppMessage(invoice: InvoiceDraft): string {
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
  lines.push(`*Total:* ${formatIdr(invoice.total)}`)
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

/** WhatsApp message after guest finishes Seabank transfer */
export function buildPaymentConfirmationWhatsAppMessage(invoice: InvoiceDraft): string {
  return [
    'Hello Sekar Bali Activity! I have finished payment.',
    '',
    `*Invoice:* ${invoice.invoiceNumber}`,
    `*Name:* ${invoice.guestName}`,
    `*Activity:* ${invoice.activity}`,
    `*Date:* ${invoice.date}`,
    `*Amount paid:* ${formatIdr(invoice.total)}`,
    '',
    '*Paid to:*',
    formatBankTransferBlock(),
    '',
    'Please confirm you received the transfer. I can send the receipt screenshot next.',
    'Thank you!',
  ].join('\n')
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
