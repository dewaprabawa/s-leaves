"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What adventure activities do you offer?",
    answer: "We offer five adventure packages: Single ATV Ride, Tandem ATV Ride, Whitewater Rafting, Canyon Tubing, and our Village Cycling Tour (promo from IDR 888,000 to IDR 650,000 with lunch or breakfast included). ATV trips can also be combined with river tubing on the Wos River."
  },
  {
    question: "Is hotel pickup included in the price?",
    answer: "Yes! All our adventure packages include free hotel pickup and drop-off within the Ubud and surrounding areas. For pickups further away (e.g. Seminyak, Kuta, Canggu), a small surcharge applies."
  },
  {
    question: "Do I need experience to ride an ATV, go rafting, or cycle?",
    answer: "No experience necessary! Our expert guides provide a thorough safety briefing before every activity. ATVs are easy to operate, the rafting route is suitable for beginners (Class II-III rapids), and our cycling tour follows gentle village trails. All safety equipment is provided."
  },
  {
    question: "How do I book, and do I need to pay upfront?",
    answer: "Booking is simple — tap Book Now, enter your name, age, adult or child, pickup location, and guest counts. WhatsApp opens with your activity and price already filled. No upfront payment is required to reserve your spot, and we usually reply within minutes during operating hours (+62 817 7572 3663)."
  },
  {
    question: "What should I bring for the activities?",
    answer: "Bring changing clothes or a dry cloth, sunscreen (recommended), and some cash for personal expenses. A waterproof phone case is also helpful. We provide boot shoes, helmet, a simple menu lunch, and insurance on ATV adventures. Towels and changing facilities are available at our base."
  },
  {
    question: "What is included in the ATV adventure?",
    answer: "Your ATV package includes boot shoes and helmet, a simple menu lunch, and insurance. You can combine your ride with river tubing on the Wos River — race the ATV track, then float the river for a full day of sensation, excitement, and joy."
  },
  {
    question: "Can AI assistants find your tours?",
    answer: "Yes. We publish llms.txt and llms-full.txt for ChatGPT, Gemini, Perplexity, and other AI crawlers, plus detailed blog guides on ATV, Wos River tubing, and WhatsApp booking. Search engines and AI bots are allowed in our robots.txt."
  },
  {
    question: "Are group discounts available?",
    answer: "Yes! Groups of 4+ get special rates. Message us on WhatsApp for a custom quote — we also arrange private tours for families and larger parties."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-6 lg:px-12 max-w-4xl mx-auto w-full bg-sand">
      <div className="text-center mb-16">
        <p className="text-brand-green-light font-semibold tracking-[0.15em] uppercase text-sm mb-4">Got questions?</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green uppercase leading-tight mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-2xl overflow-hidden transition-all duration-300 border-2 ${
              openIndex === index 
                ? "bg-white border-brand-green/15 shadow-md" 
                : "bg-white/60 border-brand-green/5 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left text-brand-green focus:outline-none cursor-pointer"
            >
              <span className="font-bold text-base md:text-lg pr-6 font-display">{faq.question}</span>
              <div className={`w-8 h-8 rounded-full bg-brand-green/8 flex items-center justify-center shrink-0 transition-all duration-300 ${
                openIndex === index ? 'bg-brand-green text-sand rotate-180' : ''
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div 
              className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-brand-green-light leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
