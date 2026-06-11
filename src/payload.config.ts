import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Tours } from './collections/Tours'
import { Transfers } from './collections/Transfers'
import { Bookings } from './collections/Bookings'
import { GlobalSettings } from './globals/GlobalSettings'

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
    Users,
    Media,
    Tours,
    Transfers,
    Bookings,
  ],

  globals: [
    GlobalSettings,
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
