"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, Loader2, AlertCircle, User, Mail, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL || "https://placeholder-webhook.site/s-leaves/crm";
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {
        console.log("Webhook submission simulated:", data);
      });

      setIsSuccess(true);
      reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 text-center space-y-4 shadow-sm h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
        <p className="text-emerald-800 dark:text-emerald-200 max-w-sm mx-auto">
          Thank you for reaching out. Our travel specialists will contact you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 px-6 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors text-sm font-semibold shadow-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-150 dark:border-gray-800 p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
      </div>

      {error && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800 flex gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              <User className="w-4 h-4 text-emerald-500" /> Full Name
            </label>
            <input
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              <Mail className="w-4 h-4 text-emerald-500" /> Email Address
            </label>
            <input
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            <MessageSquare className="w-4 h-4 text-emerald-500" /> Subject
          </label>
          <input
            {...register("subject")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            placeholder="How can we help you?"
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
            placeholder="Tell us about your dream trip..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors flex items-center justify-center shadow-lg shadow-emerald-600/20"
          >
            {isSubmitting ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
            ) : (
              <>Send Message <Send className="w-4 h-4 ml-2" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
