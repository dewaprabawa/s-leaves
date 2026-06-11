import type { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'callToAction',
  labels: {
    singular: 'Call To Action',
    plural: 'Calls To Action',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      admin: {
        description: 'Where should this button link to? e.g. /tours or /contact',
      },
    },
  ],
}
