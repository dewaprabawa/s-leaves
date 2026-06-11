import type { Block } from 'payload'

export const FAQs: Block = {
  slug: 'faqs',
  labels: {
    singular: 'FAQ Accordion',
    plural: 'FAQ Accordions',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
