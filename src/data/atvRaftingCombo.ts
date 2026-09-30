import { FEATURED_COMBOS, getComboListPrice } from '@/lib/combos'
import { TIER_PRICES_IDR } from '@/lib/pricing'

export const ATV_RAFTING_TOUR_SLUG = 'atv-rafting-combo'
export const ATV_RAFTING_ARTICLE_SLUG = 'atv-rafting-combo-ubud-2026'
export const ATV_RAFTING_COMBO_ID = 'combo-atv-rafting'

const [ATV_1] = TIER_PRICES_IDR['single-atv']
const [RAFT_1, RAFT_2] = TIER_PRICES_IDR.rafting

/** Published ticket floors (no mix). 1 ATV list + 1 rafting list. */
export const ATV_RAFTING_LIST_FROM_IDR = ATV_1 + RAFT_1

export function getAtvRaftingFeaturedCombo() {
  return FEATURED_COMBOS.find((c) => c.id === ATV_RAFTING_COMBO_ID) ?? FEATURED_COMBOS[0]
}

export function getAtvRaftingComboOffer() {
  const featured = getAtvRaftingFeaturedCombo()
  return {
    id: ATV_RAFTING_COMBO_ID,
    name: 'ATV + Ayung Rafting',
    tagline: 'Flagship land + water day',
    description:
      'Morning Sedang ATV at All New Bali Adventure, then Class II–III Ayung rafting. Ticket floors: ATV from IDR 750,000 + rafting IDR 500,000 (IDR 450,000 for 2+). Same-day mix takes 10% off at checkout. Hotel pickup IDR 400,000 once, or self-meet.',
    duration: 'Full day feel · 5–7 hours',
    atvFromIdr: ATV_1,
    raftingListIdr: RAFT_1,
    raftingTwoPlusIdr: RAFT_2,
    listFromIdr: ATV_RAFTING_LIST_FROM_IDR,
    mixFromIdr: getComboListPrice(featured),
    tourHref: `/tours/${ATV_RAFTING_TOUR_SLUG}`,
    bookHref: `/book?combo=${ATV_RAFTING_COMBO_ID}`,
    articleHref: `/blog/${ATV_RAFTING_ARTICLE_SLUG}`,
    atvHref: '/tours/bali-atv-adventure',
    raftingHref: '/tours/whitewater-rafting',
  }
}
