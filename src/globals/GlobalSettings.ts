import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const GlobalSettings: GlobalConfig = {
  slug: 'global-settings',
  label: 'Global Settings',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath('/', 'layout')
        return doc
      }
    ]
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
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Website Logo Image',
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
