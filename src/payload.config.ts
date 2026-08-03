import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Tours } from './collections/Tours'
import { Transfers } from './collections/Transfers'
import { Bookings } from './collections/Bookings'
import { Addons } from './collections/Addons'
import { Reviews } from './collections/Reviews'
import { Activities } from './collections/Activities'
import { GlobalSettings } from './globals/GlobalSettings'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  localization: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: true,
  },

  collections: [
    Pages,
    Users,
    Media,
    Tours,
    Transfers,
    Bookings,
    Addons,
    Reviews,
    Activities,
  ],

  globals: [
    GlobalSettings,
  ],

  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
    connectOptions: {
      family: 4,
      serverSelectionTimeoutMS: 5000,
    },
  }),

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || 's-leaves-payload-secret-2026-a7b3c9d1e5f2g8h4',

  sharp,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
