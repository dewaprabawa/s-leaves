/**
 * Admin invoice builder catalog — built-in adventures plus temporary
 * activities stored in localStorage so staff can edit without publishing.
 */

import { ADVENTURES, type AdventureCatalogItem } from '@/data/adventures'
import {
  CHILD_PRICE_IDR,
  getUnitPrice,
  type ActivityId,
} from '@/lib/pricing'

export const ADMIN_ACTIVITIES_STORAGE_KEY = 'sba-admin-invoice-activities-v1'
export const ADMIN_CREATOR_STORAGE_KEY = 'sba-admin-invoice-creator-v1'

export type AdminActivity = {
  id: string
  name: string
  /** Linked catalog id for auto tier pricing; omit for fully custom temps */
  catalogId?: ActivityId
  adultPrice: number
  childPrice?: number | null
  minPax: number
  times: string[]
  freeUbudPickup?: boolean
  isTemporary: boolean
  /** Soft-hide without deleting */
  archived?: boolean
}

export type TransferOption = 'none' | 'pickup' | 'drop' | 'pickup-drop' | 'other'

export const TRANSFER_OPTION_LABELS: Record<TransferOption, string> = {
  none: 'Self-meet (no transfer)',
  pickup: 'Hotel pickup only',
  drop: 'Drop-off only',
  'pickup-drop': 'Pickup + return drop',
  other: 'Other / custom transfer',
}

function adventureToAdmin(adv: AdventureCatalogItem): AdminActivity {
  return {
    id: adv.id,
    name: adv.name,
    catalogId: adv.id,
    adultPrice: getUnitPrice(adv.id, 1),
    childPrice: CHILD_PRICE_IDR[adv.id] ?? null,
    minPax: adv.minPax,
    times: [...adv.times],
    freeUbudPickup: adv.freeUbudPickup,
    isTemporary: false,
  }
}

export function getDefaultAdminActivities(): AdminActivity[] {
  return ADVENTURES.map(adventureToAdmin)
}

export function loadAdminActivities(): AdminActivity[] {
  if (typeof window === 'undefined') return getDefaultAdminActivities()
  try {
    const raw = window.localStorage.getItem(ADMIN_ACTIVITIES_STORAGE_KEY)
    if (!raw) return getDefaultAdminActivities()
    const parsed = JSON.parse(raw) as AdminActivity[]
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultAdminActivities()

    const defaults = getDefaultAdminActivities()
    const byId = new Map(parsed.map((a) => [a.id, a]))

    // Keep catalog activities in sync for missing entries; preserve edits
    for (const def of defaults) {
      if (!byId.has(def.id)) byId.set(def.id, def)
    }

    return Array.from(byId.values())
  } catch {
    return getDefaultAdminActivities()
  }
}

export function saveAdminActivities(activities: AdminActivity[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ADMIN_ACTIVITIES_STORAGE_KEY, JSON.stringify(activities))
}

export function createTemporaryActivityId(): string {
  return `temp-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000)}`
}

export function loadCreatorName(): string {
  if (typeof window === 'undefined') return ''
  try {
    return window.localStorage.getItem(ADMIN_CREATOR_STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

export function saveCreatorName(name: string): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ADMIN_CREATOR_STORAGE_KEY, name.trim())
}
