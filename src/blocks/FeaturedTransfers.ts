import type { Block } from 'payload'

export const FeaturedTransfers: Block = {
  slug: 'featuredTransfers',
  labels: {
    singular: 'Featured Transfers Grid',
    plural: 'Featured Transfers Grids',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Private Airport & Hotel Transfers',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Reliable, flat-rate, air-conditioned transport with professional English-speaking drivers.',
    },
    {
      name: 'transfers',
      type: 'relationship',
      relationTo: 'transfers',
      hasMany: true,
      admin: {
        description: 'Select specific transfers to show in this grid. Leave empty to automatically display all transfers.',
      },
    },
    {
      name: 'buttonLabel',
      type: 'text',
      admin: {
        description: 'Label for the CTA button at the bottom of the section (e.g. "View All Transfers"). Leave empty to hide.',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      admin: {
        description: 'Destination URL for the CTA button (e.g. /transfers).',
      },
    },
  ],
}
