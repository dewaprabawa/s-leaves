#!/usr/bin/env node
/**
 * Print the next pending SEO/GEO article topic from the queue.
 * Usage: node scripts/seo-geo-next-topic.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const queuePath = join(root, '.github/automation/article-topic-queue.json')

const queue = JSON.parse(readFileSync(queuePath, 'utf8'))
const pending = queue.topics
  .filter((t) => t.status === 'pending')
  .sort((a, b) => a.priority - b.priority)

if (pending.length === 0) {
  console.log(JSON.stringify({ ok: false, message: 'No pending topics in queue.' }, null, 2))
  process.exit(0)
}

const next = pending[0]
console.log(
  JSON.stringify(
    {
      ok: true,
      next,
      remaining: pending.length - 1,
      instructions: '.github/automation/seo-geo-weekly-article.md',
      template: '.github/automation/ARTICLE-TEMPLATE.md',
    },
    null,
    2,
  ),
)
