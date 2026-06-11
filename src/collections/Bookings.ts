import type { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'customerName',
    defaultColumns: ['customerName', 'selectedDate', 'status', 'paymentStatus'],
  },
  access: {
    // Only admins can read/manage bookings, frontend logic will create them via local API
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Frontend forms need to create bookings
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            const webhookUrl = process.env.CRM_WEBHOOK_URL
            
            if (!webhookUrl || webhookUrl.includes('placeholder')) {
              console.log('CRM webhook skipped: No valid URL configured.')
              return doc
            }

            const response = await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                event: 'booking.created',
                data: doc,
              }),
            })

            if (!response.ok) {
              console.error(`CRM webhook failed with status: ${response.status}`)
            } else {
              console.log('CRM webhook delivered successfully.')
            }
          } catch (err) {
            console.error('Error firing CRM webhook:', err)
          }
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'unpaid',
      options: [
        { label: 'Unpaid', value: 'unpaid' },
        { label: 'Deposit Paid', value: 'deposit-paid' },
        { label: 'Paid', value: 'paid' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'customerEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'customerPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'bookingType',
      type: 'relationship',
      relationTo: ['tours', 'transfers'],
      required: true,
    },
    {
      name: 'selectedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'numberOfPax',
      type: 'group',
      fields: [
        {
          name: 'adults',
          type: 'number',
          required: true,
          defaultValue: 1,
        },
        {
          name: 'children',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'flightDetails',
      type: 'group',
      fields: [
        { name: 'flightNumber', type: 'text' },
        { name: 'arrivalTime', type: 'text' },
        { name: 'hotelZone', type: 'text' },
      ],
      admin: {
        description: 'Required only for airport transfers',
      },
    },
    {
      name: 'webhookDeliveryStatus',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}
