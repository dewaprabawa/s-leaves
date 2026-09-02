#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const queuePath = join(root, '.github/automation/article-topic-queue.json')
const queue = JSON.parse(readFileSync(queuePath, 'utf8'))
const pending = (queue.topics || [])
  .filter((t) => t.status === 'pending')
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))

if (pending.length === 0) {
  console.log('Queue is empty — no pending SEO/GEO topics.')
  process.exit(0)
}

const next = pending[0]
console.log(JSON.stringify({ next, remaining: pending.length }, null, 2))
