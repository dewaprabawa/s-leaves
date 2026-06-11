import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Content } from '../blocks/Content'
import { CallToAction } from '../blocks/CallToAction'
import { FeaturedTours } from '../blocks/FeaturedTours'
import { FeaturedTransfers } from '../blocks/FeaturedTransfers'
import { Testimonials } from '../blocks/Testimonials'
import { FAQs } from '../blocks/FAQs'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        return `${req.protocol}//${req.host}/api/preview?url=/${data.slug === 'home' ? '' : data.slug}&secret=${process.env.PAYLOAD_SECRET}`
      },
    },
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The URL path for this page (e.g. "about-us" or "contact"). Use "home" for the root page.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        Hero,
        Content,
        CallToAction,
        FeaturedTours,
        FeaturedTransfers,
        Testimonials,
        FAQs,
      ],
    },
  ],
}
