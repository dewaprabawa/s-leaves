import type { CollectionConfig } from 'payload'

export const Transfers: CollectionConfig = {
  slug: 'transfers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
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
              name: 'transferType',
              type: 'select',
              defaultValue: 'airport',
              required: true,
              options: [
                { label: 'Airport Transfer (Flight details required)', value: 'airport' },
                { label: 'Point-to-Point / Custom stops (No Flight required)', value: 'custom' },
              ],
              label: 'Transfer Type',
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
              name: 'vehicles',
              type: 'array',
              label: 'Available Vehicles',
              required: true,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Vehicle Class / Name (e.g. Standard Sedan)',
                },
                {
                  name: 'capacity',
                  type: 'number',
                  required: true,
                  label: 'Max Passengers Capacity',
                },
                {
                  name: 'basePrice',
                  type: 'number',
                  required: true,
                  label: 'Base Flat Price (USD)',
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Vehicle Image',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'Short Description (e.g. Avanza/Xenia or similar)',
                },
              ],
            },
            {
              name: 'dropPoints',
              type: 'array',
              label: 'Additional Drop-off Points',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Drop Point Area / Name (e.g. Canggu Stop)',
                },
                {
                  name: 'additionalPrice',
                  type: 'number',
                  required: true,
                  label: 'Additional Fee (USD)',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'Short description/terms',
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
