import React from 'react'
import { HeroBlock } from './blocks/HeroBlock'
import { ContentBlock } from './blocks/ContentBlock'
import { CallToActionBlock } from './blocks/CallToActionBlock'
import { FeaturedToursBlock } from './blocks/FeaturedToursBlock'
import { FeaturedTransfersBlock } from './blocks/FeaturedTransfersBlock'
import { TestimonialsBlock } from './blocks/TestimonialsBlock'
import { FAQsBlock } from './blocks/FAQsBlock'

export const RenderBlocks = ({ layout }: { layout: any[] }) => {
  if (!layout || layout.length === 0) return null

  return (
    <div className="flex flex-col w-full">
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'hero':
            return <HeroBlock key={i} block={block} />
          case 'content':
            return <ContentBlock key={i} block={block} />
          case 'callToAction':
            return <CallToActionBlock key={i} block={block} />
          case 'featuredTours':
            return <FeaturedToursBlock key={i} block={block} />
          case 'featuredTransfers':
            return <FeaturedTransfersBlock key={i} block={block} />
          case 'testimonials':
            return <TestimonialsBlock key={i} block={block} />
          case 'faqs':
            return <FAQsBlock key={i} block={block} />
          default:
            return (
              <div key={i} className="p-4 bg-red-100 text-red-800">
                Unknown block type: {block.blockType}
              </div>
            )
        }
      })}
    </div>
  )
}
