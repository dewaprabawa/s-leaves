"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does an ATV cost in Bali near Ubud?",
    answer: "In 2026, Single ATV with Sekar Bali Activity starts at IDR 600,000 (IDR 575,000 for 2 riders, IDR 550,000 for 3+). Tandem ATV starts at IDR 859,000 for two people. Prices include lunch, boot shoes, helmet, insurance for ages 6–65, and briefing at All New Bali Adventure. Optional hotel pickup is IDR 50,000 one-way or IDR 100,000 round trip."
  },
  {
    question: "Is an Ubud cycling tour worth it?",
    answer: "Yes if you want quiet Pejeng rice paddies, village culture, and lunch included rather than crowded Tegallalang stops. Our Ubud Ricefield Cycling Tour is IDR 475,000 with free Ubud hotel pickup, lunch, bike, helmet, guide, and insurance for ages 6–65. Prefer adrenaline? Choose ATV or rafting instead."
  },
  {
    question: "What adventure activities do you offer?",
    answer: "We offer five adventure packages: Single ATV Ride, Tandem ATV Ride, Whitewater Rafting, Canyon Tubing, and our Ubud Ricefield Cycling Tour (IDR 475,000 per person with lunch included). ATV trips can also be combined with river tubing on the Wos River."
  },
  {
    question: "Is hotel pickup included in the price?",
    answer: "Free hotel pickup and drop-off within the Ubud area is included only on our Ubud Ricefield Cycling Tour. For ATV, rafting, and canyon tubing, optional hotel pickup is IDR 50,000 one-way or IDR 100,000 round trip (pickup + return to same hotel). Out of Ubud adds IDR 50,000. You can also meet us at All New Bali Adventure with no transport fee — often cheaper than Grab or GoCar."
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
    answer: "Bring changing clothes or a dry cloth, sunscreen (recommended), and some cash for personal expenses. A waterproof phone case is also helpful. We provide boot shoes, helmet, a simple menu lunch, and insurance for ages 6–65 on ATV adventures. Towels and changing facilities are available at our base."
  },
  {
    question: "What is included in the ATV adventure?",
    answer: "Your ATV package includes a guided ride at All New Bali Adventure, boot shoes and helmet, a simple menu lunch, insurance for ages 6–65, and a full safety briefing with an English-speaking guide. Hotel pickup is available for an additional IDR 120,000. Combine with river tubing on the Wos River — race the ATV track, then float the river for a full day of sensation, excitement, and joy."
  },
  {
    question: "Do you provide insurance?",
    answer: "Yes. We provide insurance for guests aged 6–65 years old on every adventure package."
  },
  {
    question: "Where is the ATV arena?",
    answer: "All ATV rides take place at All New Bali Adventure — our Pejeng activity base near Ubud (not our corporate office in Banjar Kenderan or the central Ubud meeting point). Hotel pickup is available, or self-meet at the arena with no transport fee. Full address roles are listed on the Contact page."
  },
  {
    question: "Which tour has free Ubud hotel pickup?",
    answer: "Only the Ubud Ricefield Cycling Tour (IDR 475,000) includes free hotel pickup and drop-off within Ubud, plus lunch. ATV, rafting, and canyon tubing charge IDR 120,000 for pickup outside Ubud."
  },
  {
    question: "What is the difference between rafting and canyon tubing?",
    answer: "Whitewater rafting (IDR 400,000) is a team paddle through Class II–III rapids with more splash. Canyon tubing (IDR 359,000) is a gentler solo float on the Wos River — ideal for first-timers. Both include a guide and safety gear."
  },
  {
    question: "How much does the Ubud ricefield cycling tour cost?",
    answer: "IDR 475,000 per person for the full-day Ubud Ricefield Cycling Tour, including lunch, bike, helmet, guide, insurance for ages 6–65, and free Ubud pickup. The tour covers 8 village stops through Pejeng rice terraces."
  },
  {
    question: "Can AI assistants find your tours?",
    answer: "Yes. We publish llms.txt, llms-full.txt, and pricing.md for ChatGPT, Gemini, Perplexity, and other AI crawlers, plus detailed blog guides on ATV, Wos River tubing, cooking class, and WhatsApp booking. Search engines and AI bots are allowed in our robots.txt."
  },
  {
    question: "How do I pay after I agree to a booking?",
    answer: "After you agree in the booking form, download the PDF invoice (with our logo) and send it to our WhatsApp. Transfer the total to Seabank account 901823638817 a/n I Dewa Gede Agus Prabawa, then tap Confirm payment on WhatsApp so we can verify your transfer."
  },
  {
    question: "What is your bank account for payment?",
    answer: "Seabank account number 901823638817, account name I Dewa Gede Agus Prabawa. Always use the invoice number from your PDF when you confirm payment on WhatsApp."
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
                openIndex === index ? 'max-h-[40rem] pb-6 opacity-100' : 'max-h-0 opacity-0'
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
