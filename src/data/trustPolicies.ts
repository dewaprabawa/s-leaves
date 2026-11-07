import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from '@/lib/contact'
import { PRIMARY_NAP_ADDRESS } from '@/lib/locations'
import { SITE_URL } from '@/lib/seo'

export const TRUST_POLICIES_UPDATED = '30 September 2026'

export const TRUST_POLICY_LINKS = {
  antiScam: '/anti-scam',
  privacy: '/privacy-policy',
  refund: '/refund-policy',
  payment: '/payment-policy',
  cancellation: '/cancellation-policy',
} as const

export const OFFICIAL_PAYMENT = {
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
    title: 'Pay only via official WhatsApp',
    summary:
      'No payment to inquire. After you agree, we send payment instructions on official WhatsApp only. We do not publish a bank account.',
  },
] as const

export const ANTI_SCAM_RULES = [
  'Message only the WhatsApp number published on this website.',
  'Pay only using the instructions we send on official WhatsApp. We do not publish a bank account.',
  'Use the PDF invoice with our logo. Match the invoice number when you confirm payment.',
  'Never send card numbers, OTPs, or remote-access apps in chat.',
  'If someone asks you to pay a different bank, e-wallet, or “agent account,” stop and message us here first.',
] as const

/** Trust & safety — registered tour/activity operator. Do not invent NIB/NPWP numbers here. */
export const TRUST_AND_SAFETY = {
  eyebrow: 'Trust & safety',
  title: 'Officially registered tour and activity business',
  lead:
    'Sekar Bali Activity is a legitimate Indonesian tour and activity operator — officially registered with the government as a travel and activities business. Our registered office matches the address on Google Business Profile.',
  points: [
    {
      title: 'Government-registered business',
      text: 'We operate as an officially registered Indonesian tour and activity company. Guests book a real local operator, not an unregistered chat account.',
    },
    {
      title: 'Registered office you can verify',
      text: `Our legal address is ${OFFICIAL_PAYMENT.office}. It matches Google Business Profile. That office is for registration and admin — ATV and most activities meet at the venue pin on each tour page.`,
    },
    {
      title: 'Safe booking channel',
      text: `Inquire free on WhatsApp ${OFFICIAL_PAYMENT.whatsappDisplay}. Payment instructions come on that official chat only. We do not publish a bank account on the website.`,
    },
    {
      title: 'Activity safety',
      text: 'Adventure days include a safety briefing, required gear, and insurance where published on the tour page (for example ATV ages 6–65). Free cancel up to 24 hours before start time.',
    },
  ],
} as const
