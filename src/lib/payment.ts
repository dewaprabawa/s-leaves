/** Payment is arranged on official WhatsApp only — no bank account is published. */
export const PAYMENT_INSTRUCTIONS = [
  'No payment to inquire.',
  'After you agree, we send payment instructions on official WhatsApp only.',
  'Keep your receipt and confirm on that same WhatsApp thread with your invoice number.',
] as const

export function formatPaymentWhatsAppNote(): string {
  return 'Payment instructions are sent on official WhatsApp after you agree. We do not publish a bank account on the website or invoice.'
}
