import React from 'react'

const renderRichText = (content: any) => {
  if (!content) return null
  if (typeof content === 'string') return <p>{content}</p>
  
  if (content.root && Array.isArray(content.root.children)) {
    return content.root.children.map((block: any, i: number) => {
      if (block.type === 'heading') {
        const Tag = `h${block.tag?.replace('h', '') || '2'}` as any
        return <Tag key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</Tag>
      }
      return <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>
    })
  }
  
  if (Array.isArray(content)) {
    return content.map((block: any, i: number) => (
      <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>
    ))
  }
  
  return null
}

export const ContentBlock = ({ block }: { block: any }) => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-emerald">
        {renderRichText(block.richText)}
      </div>
    </section>
  )
}
