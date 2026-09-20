import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from '@/lib/contact'
import { PAYMENT_BANK } from '@/lib/payment'
import { PRIMARY_NAP_ADDRESS } from '@/lib/locations'
import { SITE_URL } from '@/lib/seo'

export const TRUST_POLICIES_UPDATED = '20 September 2026'

export const TRUST_POLICY_LINKS = {
  antiScam: '/anti-scam',
  privacy: '/privacy-policy',
  refund: '/refund-policy',
  payment: '/payment-policy',
  cancellation: '/cancellation-policy',
} as const

export const OFFICIAL_PAYMENT = {
  bankName: PAYMENT_BANK.bankName,
  accountNumber: PAYMENT_BANK.accountNumber,
  accountName: PAYMENT_BANK.accountName,
  whatsappDisplay: CONTACT_PHONE_DISPLAY,
  whatsappUrl: CONTACT_WHATSAPP_URL,
  email: CONTACT_EMAIL,
  website: SITE_URL,
  office: PRIMARY_NAP_ADDRESS.formatted,
} as const

export const TRUST_POLICY_CARDS = [
  {
    href: TRUST_POLICY_LINKS.privacy,
    label: 'Privacy policy',
    title: 'Your booking data stays with us',
    summary:
      'We use your name, hotel, and WhatsApp only to confirm the tour. We do not sell personal data or take card numbers on this website.',
  },
  {
    href: TRUST_POLICY_LINKS.refund,
    label: 'Refund policy',
    title: 'Free cancel up to 24 hours',
    summary:
      'Cancel in writing 24 hours before start time and amounts paid are refunded. Weather or operator cancellations are fully refundable or free to reschedule.',
  },
  {
    href: TRUST_POLICY_LINKS.payment,
    label: 'Payment policy',
    title: 'Pay only our published Seabank',
    summary:
      'No payment to inquire. After you agree, transfer only to the Seabank account on your invoice and confirm on our official WhatsApp.',
  },
] as const

export const ANTI_SCAM_RULES = [
  'Message only the WhatsApp number published on this website.',
  `Transfer only to ${PAYMENT_BANK.bankName} ${PAYMENT_BANK.accountNumber} a/n ${PAYMENT_BANK.accountName}.`,
  'Use the PDF invoice with our logo. Match the invoice number when you confirm payment.',
  'Never send card numbers, OTPs, or remote-access apps in chat.',
  'If someone asks you to pay a different bank, e-wallet, or “agent account,” stop and message us here first.',
] as const
