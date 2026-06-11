import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Slider/Grid',
    plural: 'Testimonials Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'What Our Travelers Say',
    },
    {
      name: 'reviews',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          defaultValue: 'Traveler',
        },
        {
          name: 'rating',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
