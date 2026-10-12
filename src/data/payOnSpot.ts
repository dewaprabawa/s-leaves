/** Activities guests can pay for at the venue on arrival (cash, QRIS, or card). */
export const PAY_ON_SPOT_SLUGS = new Set([
  'bali-atv-adventure',
  'atv-rafting-combo',
  'atv-premium-package-bali',
  'whitewater-rafting',
  'canyon-tubing',
])

export function isPayOnSpotTour(slug: string) {
  return PAY_ON_SPOT_SLUGS.has(slug)
}

export const PAY_ON_SPOT_METHODS = ['Cash (IDR)', 'QRIS', 'Visa', 'Mastercard', 'Debit card'] as const

export const PAY_ON_SPOT_CARDS = 'Visa, Mastercard, or debit card'

export const PAY_ON_SPOT_CARD_SURCHARGE_PERCENT = 3

export const PAY_ON_SPOT_SUMMARY = `Pay on the spot when you arrive at the venue — cash (IDR), QRIS, Visa, Mastercard, or debit card. Card payments add a ${PAY_ON_SPOT_CARD_SURCHARGE_PERCENT}% surcharge.`

export const PAY_ON_SPOT_FAQ_QUESTION = 'Can I pay on the spot by credit card?'

export const PAY_ON_SPOT_FAQ_ANSWER = `Yes. Pay at the venue when you arrive — cash (IDR), QRIS, Visa, Mastercard, or debit card. Card payments (${PAY_ON_SPOT_CARDS}) add a ${PAY_ON_SPOT_CARD_SURCHARGE_PERCENT}% surcharge; cash has no card fee. We never ask for card numbers on the website or on WhatsApp. Prefer to settle before the day? Ask for payment instructions on official WhatsApp.`
