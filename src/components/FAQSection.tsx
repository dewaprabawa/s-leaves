"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What ATV experience levels do you cater to?",
    answer: "We welcome all skill levels — from complete beginners to experienced riders. Our professional guides will provide a thorough safety briefing and riding tutorial before every tour. Beginners start on easier terrain and progress at their own pace, while experienced riders can tackle more challenging routes."
  },
  {
    question: "Is safety gear provided?",
    answer: "Absolutely. Full safety gear is included with every ATV tour — helmets, goggles, gloves, and boots. Our ATVs are regularly maintained and inspected before each ride. We also have a dedicated safety marshal on every tour to ensure a safe and thrilling experience."
  },
  {
    question: "What should I wear for an ATV ride?",
    answer: "We recommend wearing comfortable clothes that you don't mind getting muddy — long pants, a t-shirt, and closed-toe shoes or sandals with a strap. We provide boots, helmets, and goggles. Bring sunscreen and a change of clothes if you prefer."
  },
  {
    question: "Can children ride ATVs?",
    answer: "Children aged 7–12 can ride as a tandem passenger with a parent/guardian on a single ATV. Children aged 12 and above can operate their own ATV on our beginner-friendly trails under close supervision. All children must wear full safety gear."
  },
  {
    question: "What trail routes are available?",
    answer: "We offer three exciting trail routes: the Jungle Trail (2 hours, beginner-friendly through tropical forests and rivers), the Volcano Route (3 hours, intermediate with stunning views of Mount Batur), and the Rice Terrace Trail (4 hours, our signature full experience through Bali's iconic landscapes)."
  },
  {
    question: "How do I book an ATV tour?",
    answer: "Booking is easy! Click the WhatsApp button on our website to message our team directly. Let us know your preferred date, group size, and chosen trail, and we'll confirm availability right away. No upfront payment is required to reserve your spot."
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
        <p className="text-brand-accent font-semibold tracking-wide uppercase text-sm mb-4">Got questions?</p>
        <h2 className="text-4xl lg:text-5xl font-serif text-brand-green font-bold leading-tight mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-brand-green-light text-lg max-w-2xl mx-auto">
          Everything you need to know before your ATV adventure in Bali.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-green/10 transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left text-brand-green focus:outline-none cursor-pointer"
            >
              <span className="font-bold text-lg pr-8">{faq.question}</span>
              <ChevronDown 
                className={`w-6 h-6 text-brand-accent shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
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
