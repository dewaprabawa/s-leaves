import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'adventure',
      options: [
        { label: 'Adventure', value: 'adventure' },
        { label: 'Food & Workshops', value: 'food' },
        { label: 'Culture & Heritage', value: 'culture' },
        { label: 'Village & Nature', value: 'village' },
        { label: 'Day Tours', value: 'day-tour' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Browse taxonomy for travel & activities discovery (not sports-only).',
      },
    },
    {
      name: 'area',
      type: 'text',
      admin: {
        description: 'Area label shown on discovery cards (e.g. Pejeng / Ubud).',
      },
    },
    {
      name: 'isTopPick',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature on homepage top-picks rail.',
      },
    },
    {
      name: 'duration',
      type: 'text',
    },
    {
      name: 'fromPriceIdr',
      type: 'number',
      admin: {
        description: 'Starting price in IDR for list cards.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Activity Image',
    },
  ],
}
