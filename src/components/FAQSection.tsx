"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/** Practical accordion FAQs — avoid duplicating the GEO answer block above */
const faqs = [
  {
    question: "Do I need experience to ride, raft, or cycle?",
    answer: "No. Guides give a full safety briefing before every activity. Quads are beginner-friendly, rafting is Class II–III, and the cycling route follows gentle village paths. All safety gear is provided."
  },
  {
    question: "How do I book, and do I need to pay upfront?",
    answer: "Tap Book Now, enter your name, age, adult or child, pickup location, and guest counts. WhatsApp opens with your activity and price filled in. No upfront payment is required to reserve — we usually reply within minutes during operating hours (+62 817 7572 3663)."
  },
  {
    question: "What should I bring?",
    answer: "Bring a change of clothes or dry cloth, sunscreen, and some cash for extras. A waterproof phone case helps. We provide boots, helmet, a simple lunch (on included packages), and insurance. Towels and changing rooms are available at base."
  },
  {
    question: "Is hotel pickup included?",
    answer: "Free hotel pickup within Ubud is included only on the ricefield cycling tour. For other activities, optional pickup is Rp 50,000 one-way or Rp 100,000 round trip to the same hotel. Out-of-Ubud adds Rp 50,000. You can also self-meet at All New Bali Adventure with no transport fee."
  },
  {
    question: "What is included on the quad adventure?",
    answer: "A guided ride at All New Bali Adventure, boot shoes and helmet, a simple lunch, insurance, and a safety briefing with an English-speaking guide. Optional hotel pickup is available. You can add Wos River tubing after the track for a full day out."
  },
  {
    question: "Where is the arena?",
    answer: "Rides run at All New Bali Adventure — our Pejeng activity base (not the corporate office in Banjar Kenderan or the central Ubud meeting point). Pickup is available, or self-meet with no transport fee. Full address roles are on the Contact page."
  },
  {
    question: "Rafting or canyon tubing — which should I pick?",
    answer: "Rafting (from Rp 400,000) is a team paddle through Class II–III rapids with more splash. Canyon tubing (from Rp 359,000) is a gentler solo float on the Wos River — ideal for first-timers. Both include a guide and safety gear."
  },
  {
    question: "Are group discounts available?",
    answer: "Yes. Groups of 4+ get special rates. Message WhatsApp for a custom quote — we also arrange private tours for families and larger parties."
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 md:px-8 pb-6 text-brand-green-light leading-relaxed border-t border-brand-green/5 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
