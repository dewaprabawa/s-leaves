import type { CollectionConfig } from 'payload'

export const Transfers: CollectionConfig = {
  slug: 'transfers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'vehicleType', 'capacity', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
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
              name: 'route',
              type: 'group',
              fields: [
                {
                  name: 'from',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'to',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'vehicleType',
              type: 'text',
              required: true,
            },
            {
              name: 'capacity',
              type: 'number',
              required: true,
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'pricing',
              type: 'group',
              fields: [
                {
                  name: 'currency',
                  type: 'text',
                  defaultValue: 'USD',
                  required: true,
                },
                {
                  name: 'basePrice',
                  type: 'number',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'metaTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'metaDescription',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
}
