import type { CollectionConfig } from 'payload'

export const Tours: CollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'location', 'updatedAt'],
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
              name: 'type',
              type: 'select',
              required: true,
              options: [
                { label: 'Day Tour', value: 'day-tour' },
                { label: 'Multi-day Tour', value: 'multi-day' },
              ],
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'location',
              type: 'text',
              required: true,
            },
            {
              name: 'duration',
              type: 'text',
              required: true,
            },
            {
              name: 'categoryTags',
              type: 'array',
              fields: [
                {
                  name: 'tag',
                  type: 'text',
                },
              ],
            },
            {
              name: 'description',
              type: 'richText',
              localized: true,
            },
            {
              name: 'media',
              type: 'group',
              fields: [
                {
                  name: 'heroImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'gallery',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
              ],
            },
            {
              name: 'itinerary',
              type: 'array',
              localized: true,
              fields: [
                {
                  name: 'dayTitle',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'richText',
                },
              ],
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
                {
                  name: 'childPrice',
                  type: 'number',
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
            {
              name: 'canonicalURL',
              type: 'text',
            },
            {
              name: 'jsonLDOverride',
              type: 'code',
              admin: {
                language: 'json',
              },
            },
          ],
        },
      ],
    },
  ],
}
