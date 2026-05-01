import { Link } from 'react-router-dom'
import { useCarousel } from '../../hooks/useCarousel'
import type { ArticleItem } from '../../types/home'

type LatestArticlesSectionProps = {
  items: ArticleItem[]
}

export function LatestArticlesSection({ items }: LatestArticlesSectionProps) {
  const { startIndex } = useCarousel({
    totalItems: items.length,
    pageSize: 3,
    autoplayIntervalMs: 4000,
  })

  const visibleItems = items.slice(startIndex, startIndex + 3)

  return (
    <section className="home-articles">
      <article className="home-articles-header">
        <div className="home-articles-card">
          <p className="home-kicker">SBVTS</p>
          <h2>Galeria</h2>
        </div>
        <Link to="/gallery">Ver mais</Link>
      </article>

      <div className="home-article-grid">
        {visibleItems.map((article) => (
          <article className="home-article-card" key={article.title}>
            <img src={article.imageUrl} alt={article.title} loading="lazy" />
            <div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
