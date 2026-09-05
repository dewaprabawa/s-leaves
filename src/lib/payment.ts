/** Bank transfer details for booking invoices / payment confirmation */
export const PAYMENT_BANK = {
  bankName: 'Seabank',
  accountNumber: '901823638817',
  accountName: 'I Dewa Gede Agus Prabawa',
} as const

export const PAYMENT_INSTRUCTIONS = [
  'Transfer the invoice total to the Seabank account below.',
  'Keep your transfer receipt / screenshot.',
  'Tap “Confirm payment” and send it on WhatsApp so we can verify and lock your slot.',
] as const

export function formatBankTransferBlock(): string {
  return [
    `*Bank:* ${PAYMENT_BANK.bankName}`,
    `*Account number:* ${PAYMENT_BANK.accountNumber}`,
    `*Account name:* ${PAYMENT_BANK.accountName}`,
  ].join('\n')
}
