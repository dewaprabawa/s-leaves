import type { CollectionConfig } from 'payload'

export const Addons: CollectionConfig = {
  slug: 'addons',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
