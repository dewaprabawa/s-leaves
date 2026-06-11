import React from 'react'

export const FAQsBlock = ({ block }: { block: any }) => {
  const items = block.items || []

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            {block.title}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {items.map((item: any, i: number) => (
            <details 
              key={item.id || i}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 font-bold text-base text-gray-900 dark:text-white cursor-pointer select-none focus:outline-none">
                <span>{item.question}</span>
                <span className="relative w-5 h-5 shrink-0 transition-transform duration-350 group-open:rotate-180 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-gray-650 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800/60 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
