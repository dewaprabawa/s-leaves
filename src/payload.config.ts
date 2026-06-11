import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    // Users collection (required for admin auth)
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
    // Media collection (placeholder — fully configured in Phase 2)
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(dirname, '../media'),
        imageSizes: [
          { name: 'thumbnail', width: 400, height: undefined, position: 'centre' },
          { name: 'card', width: 800, height: undefined, position: 'centre' },
          { name: 'hero', width: 1600, height: undefined, position: 'centre' },
          { name: 'og', width: 1200, height: 630, position: 'centre' },
        ],
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
  ],

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
