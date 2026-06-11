import type { CollectionConfig, CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const updateTourRating = async (payload: any, tourId: string) => {
  try {
    // Fetch all approved reviews for this tour
    const { docs: reviews } = await payload.find({
      collection: 'reviews',
      where: {
        and: [
          { tour: { equals: tourId } },
          { status: { equals: 'approved' } }
        ]
      },
      limit: 1000,
      depth: 0
    })

    const count = reviews.length
    let averageRating = 5.0 // default rating if no reviews

    if (count > 0) {
      const sum = reviews.reduce((acc: number, r: any) => acc + (r.rating || 5), 0)
      averageRating = Math.round((sum / count) * 10) / 10 // round to 1 decimal place
    }

    // Update the Tour document
    await payload.update({
      collection: 'tours',
      id: tourId,
      data: {
        rating: averageRating,
        reviewCount: count
      }
    })
  } catch (error) {
    console.error(`Failed to update tour ratings for tour ${tourId}:`, error)
  }
}

const afterChangeHook: CollectionAfterChangeHook = async ({ doc, previousDoc, req }) => {
  if (doc.tour) {
    await updateTourRating(req.payload, typeof doc.tour === 'object' ? doc.tour.id : doc.tour)
  }
  if (previousDoc?.tour && previousDoc.tour !== doc.tour) {
    await updateTourRating(req.payload, typeof previousDoc.tour === 'object' ? previousDoc.tour.id : previousDoc.tour)
  }
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ doc, req }) => {
  if (doc.tour) {
    await updateTourRating(req.payload, typeof doc.tour === 'object' ? doc.tour.id : doc.tour)
  }
}

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'tour', 'rating', 'status', 'createdAt'],
  },
  access: {
    read: ({ req }) => {
      // Admins and staff can read all reviews
      if (req.user) return true
      // Public users can only read approved reviews
      return {
        status: {
          equals: 'approved',
        },
      }
    },
    create: () => true, // Anyone can submit a review
    update: ({ req }) => !!req.user, // Only logged-in admin users can edit/moderate
    delete: ({ req }) => !!req.user, // Only logged-in admin users can delete
  },
  fields: [
    {
      name: 'tour',
      type: 'relationship',
      relationTo: 'tours',
      required: true,
      hasMany: false,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      options: [
        { label: 'Pending Moderation', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    {
      name: 'visitDate',
      type: 'date',
      admin: {
        description: 'When the traveler completed the tour',
      },
    },
  ],
  hooks: {
    afterChange: [afterChangeHook],
    afterDelete: [afterDeleteHook],
  },
}
