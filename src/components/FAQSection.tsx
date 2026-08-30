"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What adventure activities do you offer?",
    answer: "We offer four thrilling adventure packages: Single ATV Ride (1 pax), Tandem ATV Ride (2 pax), Whitewater Rafting, and Canyon Tubing. We also offer village cycling tours and coffee plantation experiences."
  },
  {
    question: "Is hotel pickup included in the price?",
    answer: "Yes! All our adventure packages include free hotel pickup and drop-off within the Ubud and surrounding areas. For pickups further away (e.g. Seminyak, Kuta, Canggu), a small surcharge applies."
  },
  {
    question: "Do I need experience to ride an ATV or go rafting?",
    answer: "No experience necessary! Our expert guides provide a thorough safety briefing before every activity. ATVs are easy to operate, and the rafting route is suitable for beginners (Class II-III rapids). All safety equipment is provided."
  },
  {
    question: "How do I book, and do I need to pay upfront?",
    answer: "Booking is simple — just click 'Book Now' to message us directly on WhatsApp. Tell us your preferred date, group size, and activity. No upfront payment is required to reserve your spot."
  },
  {
    question: "What should I bring for the activities?",
    answer: "Just bring a change of clothes, sunscreen, and a waterproof phone case. We provide all safety gear, helmets, life jackets, and equipment. Towels and changing facilities are available at our base."
  },
  {
    question: "Are group discounts available?",
    answer: "Yes! We offer special rates for groups of 4 or more. Contact us via WhatsApp for a custom group quote. We can also arrange private tours for larger parties."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-6 lg:px-12 max-w-4xl mx-auto w-full bg-sand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
