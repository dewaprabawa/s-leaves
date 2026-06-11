import type { GlobalConfig } from 'payload'

export const GlobalSettings: GlobalConfig = {
  slug: 'global-settings',
  label: 'Global Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              defaultValue: 'S-Leaves',
            },
            {
              name: 'contactInfo',
              type: 'group',
              fields: [
                { name: 'phone', type: 'text' },
                { name: 'whatsapp', type: 'text' },
                { name: 'email', type: 'email' },
              ],
            },
          ],
        },
        {
          label: 'SEO defaults',
          fields: [
            {
              name: 'defaultMetaTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'defaultMetaDescription',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'defaultOGImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'defaultJSONLDSchema',
              type: 'code',
              admin: {
                language: 'json',
              },
            },
          ],
        },
        {
          label: 'Social',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'],
                },
                {
                  name: 'url',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
