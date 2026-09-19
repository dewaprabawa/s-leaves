"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, CheckCircle2, Loader2, AlertCircle, User, Mail, MessageSquare } from "lucide-react"
import { CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { submitWeb3Form } from "@/lib/web3forms"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

const fieldClass =
  "w-full px-4 py-3 border border-brand-green/15 bg-sand/40 text-brand-green placeholder:text-brand-green-light/60 focus:ring-2 focus:ring-accent-gold/40 focus:border-accent-gold/50 outline-none transition-all"

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitWeb3Form({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        extra: {
          event: "contact_form",
          page: "/contact",
        },
      })

      if (!result.success) {
        setError(result.message || "Something went wrong. Please try WhatsApp instead.")
        return
      }

      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white border border-brand-green/10 p-8 md:p-10 text-center space-y-4 min-h-[420px] flex flex-col items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-accent-gold/12 text-accent-gold-dark flex items-center justify-center mb-1">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold uppercase text-brand-green">
          Message sent
        </h3>
        <p className="text-brand-green-light max-w-sm mx-auto text-sm leading-relaxed">
          Thank you for reaching out. Our team will reply shortly — WhatsApp is fastest if you
          need a same-day booking.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="h-11 px-6 rounded-full border border-brand-green/20 text-brand-green text-sm font-semibold hover:bg-brand-green/5 transition-colors"
          >
            Send another message
          </button>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-6 rounded-full btn-gold-shimmer text-sm font-bold uppercase tracking-wider"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-brand-green/10 p-6 md:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-accent-gold-dark font-semibold tracking-[0.15em] uppercase text-xs mb-2">
          Message
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-brand-green mb-2">
          Send us a note
        </h2>
        <p className="text-brand-green-light text-sm leading-relaxed">
          We usually reply within 24 hours. For bookings today or tomorrow, use WhatsApp.
        </p>
      </div>

      {error ? (
        <div className="mb-6 p-3.5 bg-accent-gold/10 text-accent-gold-dark text-sm border border-accent-gold/25 flex gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-brand-green mb-1.5">
              <User className="w-4 h-4 text-accent-gold-dark" /> Full name
            </label>
            <input
              {...register("name")}
              className={fieldClass}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name ? (
              <p className="text-accent-gold-dark text-xs mt-1">{errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-brand-green mb-1.5">
              <Mail className="w-4 h-4 text-accent-gold-dark" /> Email
            </label>
            <input
              {...register("email")}
              type="email"
              className={fieldClass}
              placeholder="you@email.com"
              autoComplete="email"
            />
            {errors.email ? (
              <p className="text-accent-gold-dark text-xs mt-1">{errors.email.message}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-brand-green mb-1.5">
            <MessageSquare className="w-4 h-4 text-accent-gold-dark" /> Subject
          </label>
          <input
            {...register("subject")}
            className={fieldClass}
            placeholder="Booking question, pickup, custom quote…"
          />
          {errors.subject ? (
            <p className="text-accent-gold-dark text-xs mt-1">{errors.subject.message}</p>
          ) : null}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-brand-green mb-1.5">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={5}
            className={`${fieldClass} resize-none`}
            placeholder="Date, hotel area, guests, and which activity you want…"
          />
          {errors.message ? (
            <p className="text-accent-gold-dark text-xs mt-1">{errors.message.message}</p>
          ) : null}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full h-12 px-6 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
