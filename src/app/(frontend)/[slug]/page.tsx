import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  
  if (resolvedParams.slug === 'about') {
    return {
      title: 'About Us - Sekar Bali Activity | Local Pejeng Guides',
      description: 'Meet the local Balinese family behind Sekar Bali Activity. Learn about our commitment to sustainable tourism in Pejeng village.',
    }
  }

  return {
    title: `${resolvedParams.slug.toUpperCase()} | Sekar Bali Activity`,
  }
}

export default async function CustomPage({ params }: Props) {
  const resolvedParams = await params

  if (resolvedParams.slug === 'about') {
    return (
      <main className="min-h-screen bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-brand-green">Our Story in Pejeng</h1>
          
          <div className="prose prose-lg prose-emerald max-w-none text-gray-700">
            <p className="text-xl font-medium text-brand-green-light">
              Welcome to Sekar Bali Activity. We are not a massive, corporate tour agency. We are a family of proud Balinese locals born and raised in the ancient village of Pejeng.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-brand-green mt-8 mb-4">Why We Started</h2>
            <p>
              For decades, we watched mass tourism flood into central Ubud, bringing heavy traffic and commercialized experiences. We realized that many travelers were leaving Bali without ever truly experiencing the slow, spiritual, and communal lifestyle that makes our island so special.
            </p>
            <p>
              We created Sekar Bali Activity to bridge that gap. We want to welcome you into our village, show you the secret paths through our <em>Subak</em> rice terraces, and share the flavors of our family kitchen.
            </p>

            <h2 className="text-2xl font-serif font-bold text-brand-green mt-8 mb-4">Our Commitment to E-E-A-T</h2>
            <ul className="space-y-4">
              <li><strong>Experience:</strong> Every guide on our team grew up navigating the trails of Pejeng and Ubud. This is our backyard.</li>
              <li><strong>Expertise:</strong> Our cooking class instructors are the mothers and grandmothers of our village, passing down recipes that have survived generations.</li>
              <li><strong>Authoritativeness:</strong> We work directly with the local <em>Banjar</em> (village council) to ensure our tours respect local customs and temple ceremonies.</li>
              <li><strong>Trust:</strong> We believe in ethical tourism. This means fair wages for our team, no caged animals (especially in our Luwak coffee tour), and a commitment to preserving our environment.</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }

  if (resolvedParams.slug === 'contact') {
    return (
      <main className="min-h-screen bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-brand-green">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about our private tours, cooking classes, or custom transfer packages? We are a local family business and usually reply within a few hours.
          </p>
          <div className="bg-white p-8 rounded-2xl border border-brand-green/10 shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Us</h3>
              <p className="text-xl font-medium text-brand-green">info@sekarbaliactivity.com</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">WhatsApp / Call</h3>
              <p className="text-xl font-medium text-brand-green">+62 812 3456 7890</p>
              <p className="text-sm text-gray-500 mt-1">Available everyday from 7:00 AM to 9:00 PM (Bali Time)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Basecamp</h3>
              <p className="text-lg text-gray-800">Pejeng Village, Gianyar, Bali 80552</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  notFound()
}
