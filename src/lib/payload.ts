import { getPayload as getPayloadInstance } from 'payload'
import config from '@payload-config'

/**
 * Global variable for caching the payload instance in development.
 * Prevents multiple instances from being created during hot reloads.
 */
let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

/**
 * Returns a cached Payload Local API client.
 * Includes graceful error handling so the frontend doesn't crash 
 * completely when MongoDB is down or misconfigured (e.g. IP whitelist errors).
 */
export const getPayload = async () => {
  if (cached.client) {
    return cached.client
  }

  try {
    if (!cached.promise) {
      cached.promise = getPayloadInstance({ config })
    }
    cached.client = await cached.promise
  } catch (e) {
    cached.promise = null
    console.error('Payload Local API failed to initialize. Database might be down or unreachable.', e)
    return null
  }

  return cached.client
}
