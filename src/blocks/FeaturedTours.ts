import type { Block } from 'payload'

export const FeaturedTours: Block = {
  slug: 'featuredTours',
  labels: {
    singular: 'Featured Tours Grid',
    plural: 'Featured Tours Grids',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Featured Tours',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Handcrafted itineraries curated for extraordinary memories.',
    },
    {
      name: 'tours',
      type: 'relationship',
      relationTo: 'tours',
      hasMany: true,
      admin: {
        description: 'Select specific tours to show in this grid. Leave empty to automatically display latest tours.',
      },
    },
    {
      name: 'buttonLabel',
      type: 'text',
      admin: {
        description: 'Label for the CTA button at the bottom of the section (e.g. "View All Tours"). Leave empty to hide.',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      admin: {
        description: 'Destination URL for the CTA button (e.g. /tours).',
      },
    },
  ],
}
