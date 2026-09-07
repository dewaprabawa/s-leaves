'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CheckCircle2,
  Copy,
  Download,
  Link2,
  Loader2,
  MessageCircle,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'
import {
  POPULAR_VISIT_LOCATIONS,
  getPopularVisitById,
} from '@/data/popularLocations'
import {
  TRANSFER_OPTION_LABELS,
  createTemporaryActivityId,
  loadAdminActivities,
  loadCreatorName,
  saveAdminActivities,
  saveCreatorName,
  type AdminActivity,
  type TransferOption,
} from '@/lib/adminInvoiceCatalog'
import { calculateAdminInvoicePricing } from '@/lib/adminInvoicePricing'
import {
  DROP_SAME_HOTEL_FEE_IDR,
  OUT_OF_UBUD_EXTRA_IDR,
  PICKUP_FEE_IDR,
} from '@/lib/pricing'
import {
  buildInvoiceShareUrl,
  buildStaffToGuestWhatsAppUrl,
  createInvoiceNumber,
  downloadInvoicePdf,
  type InvoiceDraft,
  type InvoicePaymentMode,
} from '@/lib/invoice'
import { MEETING_POINT } from '@/lib/meetingPoint'
import { PAYMENT_BANK } from '@/lib/payment'
import { formatIdr } from '@/lib/whatsapp'

type LocationMode = 'popular' | 'custom' | 'self-meet'

const emptyTempForm = (): Omit<AdminActivity, 'id' | 'isTemporary'> => ({
  name: '',
  adultPrice: 500_000,
  childPrice: null,
  minPax: 1,
  times: ['09:00', '13:00'],
  freeUbudPickup: false,
})

export default function AdminInvoiceBuilder() {
  const [activities, setActivities] = useState<AdminActivity[]>([])
  const [ready, setReady] = useState(false)

  const [createdBy, setCreatedBy] = useState('')
  const [activityId, setActivityId] = useState('')
  const [priceMode, setPriceMode] = useState<'auto' | 'manual'>('auto')
  const [manualAdultPrice, setManualAdultPrice] = useState(0)
  const [manualChildPrice, setManualChildPrice] = useState(0)

  const [guestName, setGuestName] = useState('')
  const [guestWhatsApp, setGuestWhatsApp] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')

  const [locationMode, setLocationMode] = useState<LocationMode>('popular')
  const [popularLocationId, setPopularLocationId] = useState(
    POPULAR_VISIT_LOCATIONS[0]?.id ?? '',
  )
  const [customLocation, setCustomLocation] = useState('')
  const [isOutUbud, setIsOutUbud] = useState(false)

  const [transferOption, setTransferOption] = useState<TransferOption>('pickup')
  const [sameDropOff, setSameDropOff] = useState(true)
  const [customTransferNote, setCustomTransferNote] = useState('')
  const [customTransferFee, setCustomTransferFee] = useState(0)

  const [paymentMode, setPaymentMode] = useState<InvoicePaymentMode>('full')
  const [depositPercent, setDepositPercent] = useState(50)

  const [invoice, setInvoice] = useState<InvoiceDraft | null>(null)
  const [shareUrl, setShareUrl] = useState('')
  const [copyStatus, setCopyStatus] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [showActivityEditor, setShowActivityEditor] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [tempForm, setTempForm] = useState(emptyTempForm())

  useEffect(() => {
    const loaded = loadAdminActivities()
    setActivities(loaded)
    setCreatedBy(loadCreatorName())
    const first = loaded.find((a) => !a.archived)
    if (first) {
      setActivityId(first.id)
      setTime(first.times[0] || '09:00')
      setManualAdultPrice(first.adultPrice)
      setManualChildPrice(first.childPrice ?? 0)
    }
    setDate(new Date().toISOString().split('T')[0])
    setReady(true)
  }, [])

  const activeActivities = useMemo(
    () => activities.filter((a) => !a.archived),
    [activities],
  )

  const selected = activeActivities.find((a) => a.id === activityId) ?? null

  useEffect(() => {
    if (!selected) return
    setTime(selected.times[0] || '09:00')
    setManualAdultPrice(selected.adultPrice)
    setManualChildPrice(selected.childPrice ?? 0)
    setPriceMode(selected.catalogId && !selected.isTemporary ? 'auto' : 'manual')
    setAdults((prev) => Math.max(selected.minPax, prev || selected.minPax))
  }, [selected?.id])

  useEffect(() => {
    if (locationMode !== 'popular') return
    const loc = getPopularVisitById(popularLocationId)
    setIsOutUbud(Boolean(loc?.isOutUbud))
  }, [locationMode, popularLocationId])

  const pricing = useMemo(() => {
    if (!selected) {
      return { lineItems: [], activityTotal: 0, transferTotal: 0, packageTotal: 0 }
    }
    return calculateAdminInvoicePricing({
      activity: selected,
      priceMode,
      manualAdultPrice,
      manualChildPrice,
      adults,
      children,
      locationMode,
      transferOption,
      sameDropOff,
      isOutUbud,
      customTransferFee,
      customTransferNote,
    })
  }, [
    selected,
    priceMode,
    manualAdultPrice,
    manualChildPrice,
    adults,
    children,
    locationMode,
    transferOption,
    sameDropOff,
    isOutUbud,
    customTransferFee,
    customTransferNote,
  ])

  const liveDue =
    paymentMode === 'deposit'
      ? Math.round(
          pricing.packageTotal *
            (Math.min(100, Math.max(1, depositPercent)) / 100),
        )
      : pricing.packageTotal

  const persistActivities = (next: AdminActivity[]) => {
    setActivities(next)
    saveAdminActivities(next)
  }

  const resolveLocationLabel = (): string => {
    if (locationMode === 'self-meet') return `Meet at ${MEETING_POINT.label}`
    if (locationMode === 'custom') return customLocation.trim()
    return getPopularVisitById(popularLocationId)?.label ?? popularLocationId
  }

  const handleBuild = () => {
    setError(null)
    if (!selected) {
      setError('Select an activity.')
      return
    }
    if (createdBy.trim().length < 2) {
      setError('Enter the staff name who creates this invoice.')
      return
    }
    if (guestName.trim().length < 2) {
      setError('Enter the guest name.')
      return
    }
    if (locationMode === 'custom' && customLocation.trim().length < 2) {
      setError('Enter a custom location.')
      return
    }
    if (adults < selected.minPax) {
      setError(`Minimum ${selected.minPax} adult(s) for this activity.`)
      return
    }

    saveCreatorName(createdBy)

    const result = calculateAdminInvoicePricing({
      activity: selected,
      priceMode,
      manualAdultPrice,
      manualChildPrice,
      adults,
      children,
      locationMode,
      transferOption,
      sameDropOff,
      isOutUbud,
      customTransferFee,
      customTransferNote,
    })

    if (result.lineItems.length === 0) {
      setError('Could not calculate price. Check activity and guest counts.')
      return
    }

    const amountDue =
      paymentMode === 'deposit'
        ? Math.round(
            result.packageTotal *
              (Math.min(100, Math.max(1, depositPercent)) / 100),
          )
        : result.packageTotal

    const effectiveTransfer: TransferOption =
      locationMode === 'self-meet' ? 'none' : transferOption

    const draft: InvoiceDraft = {
      invoiceNumber: createInvoiceNumber(),
      issuedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      guestName: guestName.trim(),
      adults,
      children,
      activity: selected.name,
      activityOption:
        priceMode === 'manual' || selected.isTemporary
          ? 'Custom / temporary rate'
          : undefined,
      date,
      time,
      location: resolveLocationLabel(),
      notes:
        [
          notes.trim() || null,
          `Transfer: ${TRANSFER_OPTION_LABELS[effectiveTransfer]}`,
          effectiveTransfer === 'other' && customTransferNote.trim()
            ? customTransferNote.trim()
            : null,
          locationMode === 'popular'
            ? `Visit area: ${getPopularVisitById(popularLocationId)?.area ?? ''}`
            : null,
        ]
          .filter(Boolean)
          .join(' · ') || undefined,
      lineItems: result.lineItems,
      total: result.packageTotal,
      createdBy: createdBy.trim(),
      paymentMode,
      amountDue,
      depositPercent: paymentMode === 'deposit' ? depositPercent : undefined,
      transferOption: effectiveTransfer,
      guestWhatsApp: guestWhatsApp.trim() || undefined,
    }

    setInvoice(draft)
    setShareUrl(buildInvoiceShareUrl(draft))
  }

  const handleCopyLink = async () => {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopyStatus('Link copied')
      setTimeout(() => setCopyStatus(null), 2000)
    } catch {
      setCopyStatus('Copy failed — select the link manually')
    }
  }

  const handleWhatsApp = () => {
    if (!invoice || !shareUrl) return
    window.open(
      buildStaffToGuestWhatsAppUrl(invoice, shareUrl, guestWhatsApp),
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleDownload = async () => {
    if (!invoice) return
    setDownloading(true)
    try {
      await downloadInvoicePdf(invoice)
    } catch {
      setError('PDF download failed.')
    } finally {
      setDownloading(false)
    }
  }

  const startEditActivity = (act: AdminActivity) => {
    setEditingId(act.id)
    setTempForm({
      name: act.name,
      catalogId: act.catalogId,
      adultPrice: act.adultPrice,
      childPrice: act.childPrice ?? null,
      minPax: act.minPax,
      times: [...act.times],
      freeUbudPickup: act.freeUbudPickup,
    })
    setShowActivityEditor(true)
  }

  const startNewTemporary = () => {
    setEditingId(null)
    setTempForm(emptyTempForm())
    setShowActivityEditor(true)
  }

  const saveActivityForm = () => {
    if (tempForm.name.trim().length < 2) {
      setError('Activity name is required.')
      return
    }
    const times = tempForm.times.filter(Boolean)
    if (times.length === 0) times.push('09:00')

    if (editingId) {
      persistActivities(
        activities.map((a) =>
          a.id === editingId
            ? {
                ...a,
                name: tempForm.name.trim(),
                adultPrice: Number(tempForm.adultPrice) || 0,
                childPrice: tempForm.childPrice ?? null,
                minPax: Math.max(1, Number(tempForm.minPax) || 1),
                times,
                freeUbudPickup: Boolean(tempForm.freeUbudPickup),
              }
            : a,
        ),
      )
    } else {
      const neu: AdminActivity = {
        id: createTemporaryActivityId(),
        name: tempForm.name.trim(),
        adultPrice: Number(tempForm.adultPrice) || 0,
        childPrice: tempForm.childPrice ?? null,
        minPax: Math.max(1, Number(tempForm.minPax) || 1),
        times,
        freeUbudPickup: Boolean(tempForm.freeUbudPickup),
        isTemporary: true,
      }
      persistActivities([...activities, neu])
      setActivityId(neu.id)
      setPriceMode('manual')
    }
    setShowActivityEditor(false)
    setEditingId(null)
    setError(null)
  }

  const archiveActivity = (id: string) => {
    const act = activities.find((a) => a.id === id)
    if (!act) return
    if (!act.isTemporary) {
      persistActivities(
        activities.map((a) => (a.id === id ? { ...a, archived: true } : a)),
      )
    } else {
      persistActivities(activities.filter((a) => a.id !== id))
    }
    if (activityId === id) {
      const next = activities.find((a) => a.id !== id && !a.archived)
      setActivityId(next?.id ?? '')
    }
  }

  if (!ready) {
    return (
      <div className="flex items-center justify-center py-24 text-brand-green-light">
        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading invoice builder…
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-8">
      <div className="space-y-6">
        <section className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 space-y-4">
          <h2 className="font-display text-xl font-bold text-brand-green">Who & guest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Created by (staff)
              </span>
              <input
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                placeholder="e.g. Dewa"
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm text-brand-green"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Guest name
              </span>
              <input
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Guest full name"
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm text-brand-green"
              />
            </label>
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Guest WhatsApp (optional)
              </span>
              <input
                value={guestWhatsApp}
                onChange={(e) => setGuestWhatsApp(e.target.value)}
                placeholder="62812… or +62 812…"
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm text-brand-green"
              />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-bold text-brand-green">Activity</h2>
            <button
              type="button"
              onClick={startNewTemporary}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-green text-sand px-3 py-2 text-xs font-bold uppercase tracking-wider"
            >
              <Plus className="w-3.5 h-3.5" /> Temporary activity
            </button>
          </div>

          <label className="block space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
              Select activity
            </span>
            <select
              value={activityId}
              onChange={(e) => setActivityId(e.target.value)}
              className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm text-brand-green"
            >
              {activeActivities.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                  {a.isTemporary ? ' (temporary)' : ''}
                </option>
              ))}
            </select>
          </label>

          {selected ? (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => startEditActivity(selected)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-brand-green/15 px-3 py-2 text-xs font-semibold text-brand-green hover:bg-sand"
              >
                <Pencil className="w-3.5 h-3.5" /> Edit activity
              </button>
              {selected.isTemporary ? (
                <button
                  type="button"
                  onClick={() => archiveActivity(selected.id)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove temporary
                </button>
              ) : null}
            </div>
          ) : null}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Adults
              </span>
              <input
                type="number"
                min={selected?.minPax ?? 1}
                value={adults}
                onChange={(e) => setAdults(Math.max(1, Number(e.target.value) || 1))}
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Children
              </span>
              <input
                type="number"
                min={0}
                value={children}
                onChange={(e) => setChildren(Math.max(0, Number(e.target.value) || 0))}
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Date
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Time
              </span>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              >
                {(selected?.times ?? ['09:00']).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="space-y-3 pt-2 border-t border-brand-green/10">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
              Pricing
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={!selected?.catalogId || selected.isTemporary}
                onClick={() => setPriceMode('auto')}
                className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-40 ${
                  priceMode === 'auto'
                    ? 'bg-brand-green text-sand'
                    : 'border border-brand-green/15 text-brand-green'
                }`}
              >
                Auto (tour tiers)
              </button>
              <button
                type="button"
                onClick={() => setPriceMode('manual')}
                className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider ${
                  priceMode === 'manual'
                    ? 'bg-brand-green text-sand'
                    : 'border border-brand-green/15 text-brand-green'
                }`}
              >
                Set price manually
              </button>
            </div>
            {priceMode === 'manual' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="block space-y-1.5">
                  <span className="text-xs text-brand-green-light">Adult unit price (IDR)</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={manualAdultPrice}
                    onChange={(e) => setManualAdultPrice(Number(e.target.value) || 0)}
                    className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-xs text-brand-green-light">Child unit price (IDR)</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={manualChildPrice}
                    onChange={(e) => setManualChildPrice(Number(e.target.value) || 0)}
                    className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
                  />
                </label>
              </div>
            ) : (
              <p className="text-sm text-brand-green-light">
                Uses published tier rates for {selected?.name}. Group discounts apply automatically.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 space-y-4">
          <h2 className="font-display text-xl font-bold text-brand-green">
            Location & transfer
          </h2>

          <div className="flex flex-wrap gap-2">
            {(
              [
                ['popular', 'Most popular visit'],
                ['custom', 'Custom location'],
                ['self-meet', 'Self-meet at arena'],
              ] as const
            ).map(([mode, label]) => (
              <button
                key={mode}
                type="button"
                onClick={() => {
                  setLocationMode(mode)
                  if (mode === 'self-meet') setTransferOption('none')
                }}
                className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider ${
                  locationMode === mode
                    ? 'bg-brand-green text-sand'
                    : 'border border-brand-green/15 text-brand-green'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {locationMode === 'popular' ? (
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Popular visit / pickup area
              </span>
              <select
                value={popularLocationId}
                onChange={(e) => setPopularLocationId(e.target.value)}
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              >
                {POPULAR_VISIT_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.label}
                    {loc.isOutUbud ? ' · out of Ubud' : ''}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {locationMode === 'custom' ? (
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Custom hotel / address
              </span>
              <input
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                placeholder="Hotel name & area"
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              />
            </label>
          ) : null}

          {locationMode !== 'self-meet' ? (
            <>
              <label className="inline-flex items-center gap-2 text-sm text-brand-green">
                <input
                  type="checkbox"
                  checked={isOutUbud}
                  onChange={(e) => setIsOutUbud(e.target.checked)}
                  className="rounded border-brand-green/30"
                />
                Out of Ubud (+{formatIdr(OUT_OF_UBUD_EXTRA_IDR)} when transfer applies)
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                  Transfer option
                </span>
                <select
                  value={transferOption}
                  onChange={(e) => setTransferOption(e.target.value as TransferOption)}
                  className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
                >
                  {(Object.keys(TRANSFER_OPTION_LABELS) as TransferOption[]).map((key) => (
                    <option key={key} value={key}>
                      {TRANSFER_OPTION_LABELS[key]}
                    </option>
                  ))}
                </select>
              </label>

              {transferOption === 'pickup' ? (
                <label className="inline-flex items-center gap-2 text-sm text-brand-green">
                  <input
                    type="checkbox"
                    checked={sameDropOff}
                    onChange={(e) => setSameDropOff(e.target.checked)}
                    className="rounded border-brand-green/30"
                  />
                  Also return drop to same hotel (+{formatIdr(DROP_SAME_HOTEL_FEE_IDR)})
                </label>
              ) : null}

              {transferOption === 'other' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block space-y-1.5 sm:col-span-2">
                    <span className="text-xs text-brand-green-light">Custom transfer note</span>
                    <input
                      value={customTransferNote}
                      onChange={(e) => setCustomTransferNote(e.target.value)}
                      placeholder="e.g. Airport transfer both ways"
                      className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
                    />
                  </label>
                  <label className="block space-y-1.5">
                    <span className="text-xs text-brand-green-light">Custom transfer fee (IDR)</span>
                    <input
                      type="number"
                      min={0}
                      step={1000}
                      value={customTransferFee}
                      onChange={(e) => setCustomTransferFee(Number(e.target.value) || 0)}
                      className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
                    />
                  </label>
                </div>
              ) : null}
            </>
          ) : (
            <p className="text-sm text-brand-green-light">
              Guest meets at {MEETING_POINT.name} — no pickup/drop fee.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 space-y-4">
          <h2 className="font-display text-xl font-bold text-brand-green">Payment</h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setPaymentMode('full')}
              className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider ${
                paymentMode === 'full'
                  ? 'bg-brand-green text-sand'
                  : 'border border-brand-green/15 text-brand-green'
              }`}
            >
              Full payment
            </button>
            <button
              type="button"
              onClick={() => setPaymentMode('deposit')}
              className={`rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider ${
                paymentMode === 'deposit'
                  ? 'bg-brand-green text-sand'
                  : 'border border-brand-green/15 text-brand-green'
              }`}
            >
              Deposit
            </button>
          </div>
          {paymentMode === 'deposit' ? (
            <label className="block space-y-1.5 max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Deposit percent
              </span>
              <input
                type="number"
                min={1}
                max={100}
                value={depositPercent}
                onChange={(e) =>
                  setDepositPercent(
                    Math.min(100, Math.max(1, Number(e.target.value) || 50)),
                  )
                }
                className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              />
            </label>
          ) : null}
          <label className="block space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
              Notes (optional)
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full rounded-xl border border-brand-green/15 bg-sand px-3 py-2.5 text-sm"
              placeholder="Special requests, lunch notes, etc."
            />
          </label>
        </section>

        {error ? (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
            {error}
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleBuild}
          className="w-full sm:w-auto rounded-xl bg-accent-gold text-brand-green font-bold text-sm uppercase tracking-wider px-8 py-3.5 hover:brightness-95"
        >
          Build invoice
        </button>
      </div>

      <aside className="xl:sticky xl:top-28 h-fit space-y-4">
        <div className="rounded-2xl border border-brand-green/10 bg-white p-5 space-y-3">
          <h2 className="font-display text-lg font-bold text-brand-green">Live total</h2>
          {pricing.lineItems.map((item) => (
            <div
              key={item.label + String(item.amount)}
              className="flex justify-between gap-3 text-sm"
            >
              <span className="text-brand-green-light text-left">{item.label}</span>
              <span className="font-semibold text-brand-green whitespace-nowrap">
                {formatIdr(item.amount)}
              </span>
            </div>
          ))}
          <div className="flex justify-between text-sm border-t border-brand-green/10 pt-2">
            <span className="text-brand-green-light">Package</span>
            <span className="font-semibold text-brand-green">
              {formatIdr(pricing.packageTotal)}
            </span>
          </div>
          <div className="flex justify-between text-base border-t border-brand-green/10 pt-2">
            <span className="font-bold text-brand-green">
              {paymentMode === 'deposit' ? `Deposit (${depositPercent}%)` : 'Amount due'}
            </span>
            <span className="font-bold text-brand-green text-xl">{formatIdr(liveDue)}</span>
          </div>
          <p className="text-[11px] text-brand-green-light">
            Pickup {formatIdr(PICKUP_FEE_IDR)} · drop {formatIdr(DROP_SAME_HOTEL_FEE_IDR)} · out of
            Ubud +{formatIdr(OUT_OF_UBUD_EXTRA_IDR)}
          </p>
        </div>

        {invoice ? (
          <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-5 space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-green">{invoice.invoiceNumber}</p>
                <p className="text-xs text-brand-green-light">
                  Ready to send · by {invoice.createdBy}
                </p>
              </div>
            </div>
            <div className="text-sm space-y-1">
              <p>
                <span className="text-brand-green-light">Guest:</span>{' '}
                <span className="font-semibold">{invoice.guestName}</span>
              </p>
              <p>
                <span className="text-brand-green-light">Activity:</span>{' '}
                <span className="font-semibold">{invoice.activity}</span>
              </p>
              <p>
                <span className="text-brand-green-light">Due now:</span>{' '}
                <span className="font-bold">
                  {formatIdr(invoice.amountDue ?? invoice.total)}
                </span>
              </p>
            </div>
            <p className="text-[11px] break-all text-brand-green-light bg-white/70 rounded-lg p-2 border border-brand-green/10">
              {shareUrl}
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/20 bg-white py-2.5 text-sm font-bold text-brand-green"
              >
                <Copy className="w-4 h-4" /> {copyStatus ?? 'Copy invoice link'}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green text-sand py-2.5 text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4" /> Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/20 bg-white py-2.5 text-sm font-bold text-brand-green disabled:opacity-60"
              >
                {downloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                Download PDF
              </button>
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/20 bg-white py-2.5 text-sm font-bold text-brand-green"
              >
                <Link2 className="w-4 h-4" /> Open guest invoice
              </a>
            </div>
            <p className="text-[11px] text-brand-green-light">
              Seabank {PAYMENT_BANK.accountNumber} · {PAYMENT_BANK.accountName}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-brand-green/20 bg-white/60 p-5 text-sm text-brand-green-light">
            Fill the form and tap <strong className="text-brand-green">Build invoice</strong> to
            get a copy link and WhatsApp send ready.
          </div>
        )}
      </aside>

      {showActivityEditor ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-sand p-6 space-y-4 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-brand-green">
              {editingId ? 'Edit activity' : 'Add temporary activity'}
            </h3>
            <label className="block space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green-light">
                Name
              </span>
              <input
                value={tempForm.name}
                onChange={(e) => setTempForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-brand-green/15 bg-white px-3 py-2.5 text-sm"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block space-y-1.5">
                <span className="text-xs text-brand-green-light">Adult price</span>
                <input
                  type="number"
                  value={tempForm.adultPrice}
                  onChange={(e) =>
                    setTempForm((f) => ({ ...f, adultPrice: Number(e.target.value) || 0 }))
                  }
                  className="w-full rounded-xl border border-brand-green/15 bg-white px-3 py-2.5 text-sm"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-xs text-brand-green-light">Child price</span>
                <input
                  type="number"
                  value={tempForm.childPrice ?? 0}
                  onChange={(e) =>
                    setTempForm((f) => ({
                      ...f,
                      childPrice: Number(e.target.value) || 0,
                    }))
                  }
                  className="w-full rounded-xl border border-brand-green/15 bg-white px-3 py-2.5 text-sm"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-xs text-brand-green-light">Min pax</span>
                <input
                  type="number"
                  min={1}
                  value={tempForm.minPax}
                  onChange={(e) =>
                    setTempForm((f) => ({
                      ...f,
                      minPax: Math.max(1, Number(e.target.value) || 1),
                    }))
                  }
                  className="w-full rounded-xl border border-brand-green/15 bg-white px-3 py-2.5 text-sm"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-xs text-brand-green-light">Times (comma)</span>
                <input
                  value={tempForm.times.join(', ')}
                  onChange={(e) =>
                    setTempForm((f) => ({
                      ...f,
                      times: e.target.value
                        .split(',')
                        .map((t) => t.trim())
                        .filter(Boolean),
                    }))
                  }
                  className="w-full rounded-xl border border-brand-green/15 bg-white px-3 py-2.5 text-sm"
                />
              </label>
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-brand-green">
              <input
                type="checkbox"
                checked={Boolean(tempForm.freeUbudPickup)}
                onChange={(e) =>
                  setTempForm((f) => ({ ...f, freeUbudPickup: e.target.checked }))
                }
              />
              Free Ubud pickup
            </label>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowActivityEditor(false)
                  setEditingId(null)
                }}
                className="flex-1 rounded-xl border border-brand-green/15 py-2.5 text-sm font-semibold text-brand-green"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveActivityForm}
                className="flex-1 rounded-xl bg-brand-green text-sand py-2.5 text-sm font-bold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
