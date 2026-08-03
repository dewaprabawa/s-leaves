import type { CollectionConfig } from 'payload'

export const Tours: CollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'location', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        // Build the URL to the frontend page with draft mode enabled
        return `${req.protocol}//${req.host}/api/preview?url=/tours/${data.slug}&secret=${process.env.PAYLOAD_SECRET}`
      },
    },
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
              name: 'rating',
              type: 'number',
              defaultValue: 5,
              min: 1,
              max: 5,
              admin: {
                description: 'Simulated rating value (1-5) for frontend cards.',
              },
            },
            {
              name: 'reviewCount',
              type: 'number',
              defaultValue: 85,
              admin: {
                description: 'Simulated number of reviews.',
              },
            },
            {
              name: 'isBestseller',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Mark this tour as a Bestseller to display a special badge.',
              },
            },
            {
              name: 'hasFreeCancellation',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Enable to display "Free cancellation up to 24h before" on the frontend.',
              },
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
                  required: false,
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
                  admin: {
                    description: 'Standard price per adult (for base tier/individual bookings)',
                  },
                },
                {
                  name: 'childPrice',
                  type: 'number',
                  admin: {
                    description: 'Price per child',
                  },
                },
                {
                  name: 'infantPrice',
                  type: 'number',
                  admin: {
                    description: 'Price per infant (set to 0 or leave empty for free)',
                  },
                },
                {
                  name: 'groupBrackets',
                  type: 'array',
                  admin: {
                    description: 'Multi-tier pricing based on the total number of adults (e.g. 1-2 pax: $85, 3-5 pax: $75, 6+ pax: $65). Overrides basePrice if matching bracket is found.',
                  },
                  fields: [
                    {
                      name: 'minPax',
                      type: 'number',
                      required: true,
                    },
                    {
                      name: 'maxPax',
                      type: 'number',
                      required: true,
                    },
                    {
                      name: 'pricePerPax',
                      type: 'number',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'seasonalOverrides',
                  type: 'array',
                  admin: {
                    description: 'Set custom peak or off-peak base pricing for specific date ranges.',
                  },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'startDate',
                      type: 'date',
                      required: true,
                      admin: {
                        date: {
                          pickerAppearance: 'dayOnly',
                        },
                      },
                    },
                    {
                      name: 'endDate',
                      type: 'date',
                      required: true,
                      admin: {
                        date: {
                          pickerAppearance: 'dayOnly',
                        },
                      },
                    },
                    {
                      name: 'priceOverride',
                      type: 'number',
                      required: true,
                      admin: {
                        description: 'Overridden base price per adult during this period',
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'maxParticipantsPerDay',
              type: 'number',
              required: true,
              defaultValue: 20,
              admin: {
                description: 'Maximum number of participants allowed to book this tour per day.',
              },
            },
            {
              name: 'addons',
              type: 'relationship',
              relationTo: 'addons',
              hasMany: true,
              admin: {
                description: 'Select add-ons that can be purchased with this tour.',
              },
            },
            {
              name: 'activities',
              type: 'relationship',
              relationTo: 'activities',
              hasMany: true,
              label: 'Associated Activities',
            },
            {
              name: 'activityOptions',
              type: 'array',
              label: 'Activity / Booking Options',
              admin: {
                description: 'Define different options or packages for this tour (e.g. Shared Tour, Private Tour, Tour with Rafting, etc.).',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  label: 'Option Name',
                },
                {
                  name: 'priceDiff',
                  type: 'number',
                  required: true,
                  defaultValue: 0,
                  label: 'Price Adjustment (USD)',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'Option Description',
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
