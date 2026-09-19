#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const queuePath = join(root, '.github/automation/article-topic-queue.json')
const queue = JSON.parse(readFileSync(queuePath, 'utf8'))
const next = [...queue.topics]
  .filter((topic) => topic.status === 'pending')
  .sort((a, b) => a.priority - b.priority)[0]

if (!next) {
  console.log('Queue is empty — no pending SEO/GEO article topics.')
  process.exit(0)
}

console.log(JSON.stringify(next, null, 2))
