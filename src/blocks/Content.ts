import type { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Rich Text Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      required: true,
    },
  ],
}
