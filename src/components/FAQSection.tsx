"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does an ATV cost in Bali near Ubud?",
    answer: "In 2026, Single ATV with Sekar Bali Activity starts at IDR 750,000 (IDR 725,000 for 2 riders, IDR 700,000 for 3+). Tandem ATV starts at IDR 1,100,000 for two people. Prices include lunch, boot shoes, helmet, insurance for ages 6–65, and briefing at All New Bali Adventure. Optional hotel pickup is IDR 400,000."
  },
  {
    question: "Is an Ubud cycling tour worth it?",
    answer: "Yes if you want quiet Pejeng rice paddies, village culture, and lunch included rather than crowded Tegallalang stops. Our 2-hour Ubud Ricefield Cycling Tour is promo IDR 650,000 (was 750,000) with free Ubud hotel pickup, lunch, bike, helmet, guide, and insurance for ages 6–65. Prefer adrenaline? Choose ATV or rafting instead."
  },
  {
    question: "What activities and tours do you offer?",
    answer: "We cover travel and activities near Ubud — not sports only. Adventure: Single/Tandem ATV, whitewater rafting, canyon tubing, and the private Mount Batur jeep (sit-in IDR 2,300,000 for 2 or IDR 2,850,000 for 3, tracking IDR 1,800,000 for 2, sunrise or sunset; optional hot spring +IDR 150,000 with ticket included). Private Kintamani Day is a full-day promo at IDR 1,300,000 per person (min 2; was IDR 1,450,000). Village: 2-hour Pejeng ricefield cycling with free Ubud pickup. Food: Tumang Bali Cooking Class (market tour, 10+ dishes) and luwak coffee tasting. Culture: private Tirta Empul or Pura Beji melukat purification — IDR 1,200,000 per person with shuttle, guide, and breakfast. Day tours: full-day Ubud and half-day Tanah Lot sunset. Mix combos and culture days on WhatsApp."
  },
  {
    question: "Is hotel pickup included in the price?",
    answer: "Free hotel pickup within Ubud is included on our Ubud Ricefield Cycling Tour and Tumang Bali Cooking Class. Swing Heaven includes a hotel driver in the ticket (required — no self-meet at Bongkasa). The private Tirta Empu Purification (Melukat) includes a Ubud-area shuttle in the IDR 1,200,000 per person rate. The private Mount Batur jeep includes hotel pickup island-wide (Ubud, Canggu, Seminyak, Sanur, Kuta, Nusa Dua) in the jeep price. For ATV, rafting, canyon tubing, and Griya Beji Waterfall, optional hotel pickup is IDR 400,000. You can also self-meet at All New Bali Adventure (ATV/rafting/tubing) or Taman Beji Griya Waterfall in Punggul with no transport fee — often cheaper than Grab or GoCar."
  },
  {
    question: "Do I need experience to ride an ATV, go rafting, or cycle?",
    answer: "No experience necessary! Our expert guides provide a thorough safety briefing before every activity. ATVs are easy to operate, the rafting route is suitable for beginners (Class II-III rapids), and our cycling tour follows gentle village trails. All safety equipment is provided."
  },
  {
    question: "How do I book, and do I need to pay upfront?",
    answer: "Booking is simple — tap Book WhatsApp (or Book this experience on a tour page), enter your name, age, adult or child, pickup location, and guest counts. WhatsApp opens with your activity and price already filled. No upfront payment is required to reserve your spot, and we usually reply within minutes during operating hours (+62 817 7572 3663)."
  },
  {
    question: "What should I bring for the activities?",
    answer: "Bring changing clothes or a dry cloth, sunscreen (recommended), and some cash for personal expenses. A waterproof phone case is also helpful. We provide boot shoes, helmet, a simple menu lunch, and insurance for ages 6–65 on ATV adventures. Towels and changing facilities are available at our base."
  },
  {
    question: "What is included in the ATV adventure?",
    answer: "Your ATV package includes a guided ride at All New Bali Adventure, boot shoes and helmet, a simple menu lunch, insurance for ages 6–65, and a full safety briefing with an English-speaking guide. Hotel pickup is available for an additional IDR 400,000. Combine with river tubing on the Wos River — race the ATV track, then float the river for a full day of sensation, excitement, and joy."
  },
  {
    question: "Do you provide insurance?",
    answer: "Yes. We provide insurance for guests aged 6–65 years old on ATV, rafting, canyon tubing, cycling, and the private Mount Batur jeep. Swing Heaven includes on-site park insurance in the ticket."
  },
  {
    question: "Where is the ATV arena?",
    answer: "All ATV rides take place at All New Bali Adventure — our activity base on Jl. Raya Krasan, Sedang, Kec. Abiansemal, Kabupaten Badung, Bali 80352 (not our corporate office in Banjar Kenderan or the central Ubud meeting point). Hotel pickup is available, or self-meet at the arena with no transport fee. Full address roles are listed on the Contact page."
  },
  {
    question: "Which tours have free Ubud hotel pickup?",
    answer: "Ubud Ricefield Cycling Tour (promo IDR 650,000, was 750,000) and Tumang Bali Cooking Class (shared promo IDR 450,000 / person) include complimentary hotel pickup within Ubud. Swing Heaven includes a hotel driver in the ticket (required — no self-meet). Tirta Empu Purification includes a private Ubud-area shuttle in the IDR 1,200,000 per person rate. The private Mount Batur jeep includes pickup island-wide in the jeep price — not the IDR 400,000 ATV/rafting add-on. ATV, rafting, canyon tubing, and Griya Beji Waterfall charge IDR 400,000 for hotel pickup."
  },
  {
    question: "How much is Tumang Bali Cooking Class?",
    answer: "Shared small-group Tumang Bali Cooking Class is promo IDR 450,000 per person (was IDR 506,370; max 8 guests) with complimentary Ubud-area pickup — morning sessions include a market tour, plus rice-field walk and 10+ dishes. Private kitchen is IDR 1,000,000 per person (IDR 1,000,000 for 1 guest or IDR 2,000,000 for 2 guests). Book via WhatsApp on our cooking class page."
  },
  {
    question: "What is the difference between rafting and canyon tubing?",
    answer: "Whitewater rafting (IDR 500,000, or IDR 450,000 for 2+, minimum 2 guests) is a team paddle through Class II–III rapids with more splash. Canyon tubing (IDR 500,000, or IDR 450,000 for 2+) is a gentler solo float on the Wos River — ideal for first-timers. Both include a guide and safety gear."
  },
  {
    question: "How much does the Ubud ricefield cycling tour cost?",
    answer: "Promo IDR 650,000 per person for the 2-hour Ubud Ricefield Cycling Tour (was IDR 750,000). Two guests IDR 625,000, three+ IDR 600,000. Lunch, bike, helmet, guide, insurance for ages 6–65, and free Ubud pickup. The tour covers 8 village stops through Pejeng rice terraces."
  },
  {
    question: "How much is the private Mount Batur jeep?",
    answer: "Sit-in private jeep is IDR 2,300,000 for 2 guests (IDR 1,150,000 per person, minimum 2) or IDR 2,850,000 for 3 guests (IDR 950,000 per person). Tracking jeep is IDR 1,800,000 for 2 guests (IDR 900,000 per person) or IDR 750,000 per person for 3+. Same prices at sunrise or sunset. The jeep goes to the sunrise or sunset viewpoint, then the black lava field. Hotel pickup, a hot drink, breakfast, and the Kintamani entrance fee are included. Optional hot spring: Batur +IDR 150,000 or Toya Devasya +IDR 300,000 per person (ticket included). Private Kintamani Day is a separate full-day promo at IDR 1,300,000 per person (was IDR 1,450,000; min 2) with breakfast, hot-spring ticket, Umah Kuno, and a rice-terrace stop.",
  },
  {
    question: "Is the private Mount Batur jeep a hike?",
    answer: "Private jeep: you stay in the 4×4 to a crater-rim viewpoint near Kintamani (IDR 2,300,000 for 2 guests, IDR 2,850,000 for 3). Private tracking jeep adds a guided trek at IDR 1,800,000 for 2 guests. Minimum 2 guests. Neither is the classic 2-hour Mount Batur summit trek.",
  },
  {
    question: "How much is the Luwak Coffee Plantation Experience?",
    answer: "IDR 800,000 per person at Umah Kuno (minimum 3 guests). Includes the guided plantation walk, roasting demonstration, and tasting flight of 10 teas and coffees including ethical Kopi Luwak. Transport to Tampaksiring is not included."
  },
  {
    question: "How much is a private Tirta Empul or Beji melukat?",
    answer: "IDR 1,200,000 per person for a private purification at Tirta Empul or Pura Beji. The price includes a Ubud-area shuttle, English-speaking guide, temple entrance, canang offering, sarong, and breakfast. Lunch is not included. Typical start 08:00 or 09:00 — book on the Tirta Empu page via WhatsApp and say which spring you want. This is not Griya Beji Waterfall in Punggul."
  },
  {
    question: "How much is Griya Beji Waterfall purification near Ubud?",
    answer: "Waterfall purification (melukat) at Taman Beji Griya Waterfall in Punggul is IDR 300,000 per person. Palm reading is IDR 1,000,000. Mental healing is IDR 1,500,000. International admission IDR 50,000 (domestic 20,000) is extra at the gate. Hotel pickup is IDR 400,000 or self-meet. This is not Tirta Empul or Pura Beji. Confirm the 2026 park board on WhatsApp."
  },
  {
    question: "Is Griya Beji the same as Tirta Empul or Pura Beji?",
    answer: "No. Taman Beji Griya Waterfall is on Jl. Mawar, Desa Punggul, Abiansemal. Tirta Empul and Pura Beji are a different private ticket — IDR 1,200,000 with shuttle, guide, and breakfast. “Beji” in both names does not mean the same spring."
  },
  {
    question: "How much is a private full day or half day Ubud tour?",
    answer: "Full Day Ubud Tour starts from IDR 600,000 for a private car and English-speaking driver (about 10 hours; entrance fees and lunch not included). Half Day Ubud & Tanah Lot Sunset Tour is IDR 850,000 for a private shuttle (about 6 hours; temple tickets and dinner not included). Message WhatsApp for a guest-count quote."
  },
  {
    question: "How much is Swing Heaven Bali near Ubud?",
    answer: "The Swing Heaven Package is IDR 530,000 per person (jungle swings, photo spots, insurance, tea/coffee/water, hotel driver). The lunch package is IDR 630,000. Flying dress hire is IDR 300,000 extra. The park is in Bongkasa over the Ayung River — not the Tegallalang swing strip. Hotel driver is included and required — no self-meet. Photos on your own phone."
  },
  {
    question: "Is Swing Heaven the same as the Tegallalang Bali Swing?",
    answer: "No. Swing Heaven is a jungle park on Jl. Tangga Yuda, Bongkasa (Abiansemal) over the Ayung River. Tegallalang swing parks sit on the rice-terrace road north of Ubud. We book only Swing Heaven. If you want terraces without a swing ticket, walk Tegalalang on the Full Day Ubud Tour."
  },
  {
    question: "Can AI assistants find your tours?",
    answer: "Yes. We publish llms.txt, llms-full.txt, and pricing.md for ChatGPT, Gemini, Perplexity, and other AI crawlers, plus detailed blog guides on ATV, Wos River tubing, cooking class, private Mount Batur jeep, and WhatsApp booking. Search engines and AI bots are allowed in our robots.txt."
  },
  {
    question: "How do I pay after I agree to a booking?",
    answer: "After you agree in the booking form, download the PDF invoice (with our logo) and send it to our official WhatsApp. We send payment instructions on that thread only. Confirm payment there with your invoice number and receipt so we can verify."
  },
  {
    question: "How do I get payment details?",
    answer: "We do not publish a bank account on the website or invoice. After you agree, payment instructions come on official WhatsApp only. Use the invoice number from your PDF when you confirm payment on that same thread."
  },
  {
    question: "How do I know this booking is not a scam?",
    answer: "Use only sekarbaliactivity.com and WhatsApp +62 817 7572 3663. We never take card numbers on the website. After you agree, pay only using the instructions we send on that same WhatsApp. Privacy, refund, and payment rules are on our Anti-scam page. If anyone asks you to pay a different bank, e-wallet, or account they send first, stop and message us there first."
  },
  {
    question: "Can I mix activities like ATV + tubing or ATV + rafting?",
    answer: "Yes. The flagship same-day is ATV + Ayung rafting from IDR 1,250,000 at ticket floors, with 10% mix at checkout — book /tours/atv-rafting-combo. A couple on two singles is IDR 2,350,000 before mix; tandem + two rafts is IDR 2,000,000 before mix. ATV + Wos tubing is the gentler add-on at the same 1.25M floors — book /book?combo=combo-atv-tubing. Two activities save 10%; three or more save 12%. Tubing + rafting alone is not offered as a package.",
  },
  {
    question: "Are group discounts available?",
    answer: "Yes! Groups of 4+ get special rates. Message us on WhatsApp for a custom quote — we also arrange private tours for families and larger parties."
  },
  {
    question: "Can you handle a family, girls trip, or any private multi-day itinerary?",
    answer: "Yes — consultation only. There is no booking form for this product. WhatsApp group type, dates, villa area, guest count, and the day list. We quote private driver days (car from IDR 600,000 / day; HiAce quoted for 6+), plus Swing Heaven, the Mount Batur jeep, cooking, or cycling. FINNS, La Favela, Cretya, Kecak, spa, and watersports stay on your bookings. No payment to inquire."
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
