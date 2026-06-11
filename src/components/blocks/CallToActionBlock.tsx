import React from 'react'
import Link from 'next/link'

export const CallToActionBlock = ({ block }: { block: any }) => {
  return (
    <section className="py-24 px-6 bg-emerald-50 dark:bg-emerald-950/20">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-xl ring-1 ring-emerald-900/5">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {block.title}
          </h2>
          {block.text && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {block.text}
            </p>
          )}
        </div>
        
        <div className="pt-4">
          <Link 
            href={block.buttonLink}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-700 hover:scale-105 transition-all shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {block.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
