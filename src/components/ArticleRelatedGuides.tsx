import Link from 'next/link'
import { getArticleInternalLinks } from '@/data/articleInternalLinks'

type Props = {
  slug: string
}

/** Crawlable related-article + money-page links on every blog post. */
export default function ArticleRelatedGuides({ slug }: Props) {
  const { sameCluster, moreActivities } = getArticleInternalLinks(slug)
  if (!sameCluster.length && !moreActivities.length) return null

  return (
    <nav
      aria-label="Related activity guides"
      className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-8 space-y-6"
    >
      {sameCluster.length ? (
        <div className="space-y-3">
          <h2 className="font-display text-lg font-bold text-brand-green uppercase tracking-wide">
            More on this activity
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sameCluster.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-green hover:bg-brand-green/5"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {moreActivities.length ? (
        <div className="space-y-3">
          <h2 className="font-display text-lg font-bold text-brand-green uppercase tracking-wide">
            Other activities to book
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {moreActivities.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-brand-green/10 px-4 py-3 text-sm font-semibold text-brand-green hover:bg-brand-green/5"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
