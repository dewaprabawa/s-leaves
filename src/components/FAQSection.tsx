"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of experiences does Sekar Bali Activity offer?",
    answer: "We offer three intimate, village-led experiences in the historic Pejeng district (near Ubud, Bali): a scenic Village & Terrace Cycling Tour, an authentic Luwak Coffee Plantation Experience (Umah Kuno), and a hands-on Traditional Balinese Dinner Cooking Class."
  },
  {
    question: "Where do the tours take place, and is pickup included?",
    answer: "All our experiences take place in the peaceful village of Pejeng, away from the typical tourist crowds. We offer convenient pickup services in the Ubud area so you can relax and enjoy the day."
  },
  {
    question: "Are your tours suitable for large groups?",
    answer: "We deliberately keep our groups comfortably small. This ensures a safe, unhurried pace, allowing for more personal conversations with our local hosts and a deeper connection to the Balinese culture around you."
  },
  {
    question: "How do I book a tour, and do I need to pay in advance?",
    answer: "Booking is incredibly simple and direct! You can click the WhatsApp button on our website to chat with our local team and check availability. No payment is required just to inquire or reserve your spot."
  },
  {
    question: "How much do the Bali tours cost?",
    answer: "Our authentic experiences start at a highly accessible price point to support the local village economy: Cycling Tour & Cooking Class are IDR 400,000 per adult (IDR 350,000 per child), and the Luwak Coffee Experience is IDR 400,000 per person (requires a minimum booking of 3 people)."
  },
  {
    question: "How long do the activities last?",
    answer: "Our activities are designed to give you a real morning, afternoon, or evening without feeling rushed. The maximum tour length is 4 hours (for example, the cycling tour runs from 8:30 AM to 12:30 PM), while the coffee tasting is a shorter, relaxing 1.5-hour session."
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
    <section id="faq" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto w-full bg-sand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="text-center mb-16">
        <p className="text-brand-green-light font-semibold tracking-wide uppercase text-sm mb-4">Got questions?</p>
        <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-green/10 transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left text-brand-green focus:outline-none"
            >
              <span className="font-bold text-lg pr-8">{faq.question}</span>
              <ChevronDown 
                className={`w-6 h-6 text-brand-green-light shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-brand-green-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
