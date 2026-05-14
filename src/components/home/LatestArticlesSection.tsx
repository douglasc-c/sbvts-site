import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useCarousel } from '../../hooks/useCarousel'
import type { ArticleItem } from '../../types/home'

type LatestArticlesSectionProps = {
  items: ArticleItem[]
}

export function LatestArticlesSection({ items }: LatestArticlesSectionProps) {
  const { startIndex } = useCarousel({
    totalItems: items.length,
    pageSize: 3,
    autoplayIntervalMs: 12000,
  })

  const transitionDurationMs = 520
  const initialItems = items.slice(0, 3)
  const [currentItems, setCurrentItems] = useState<ArticleItem[]>(initialItems)
  const [previousItems, setPreviousItems] = useState<ArticleItem[] | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const previousStartIndexRef = useRef(startIndex)
  const previousVisibleItemsRef = useRef<ArticleItem[]>(initialItems)

  useEffect(() => {
    const nextItems = items.slice(startIndex, startIndex + 3)

    if (previousStartIndexRef.current !== startIndex) {
      setPreviousItems(previousVisibleItemsRef.current)
      setCurrentItems(nextItems)
      setIsTransitioning(true)

      const timeoutId = window.setTimeout(() => {
        setPreviousItems(null)
        setIsTransitioning(false)
      }, transitionDurationMs)

      previousVisibleItemsRef.current = nextItems
      previousStartIndexRef.current = startIndex

      return () => {
        window.clearTimeout(timeoutId)
      }
    }

    setCurrentItems(nextItems)
    previousVisibleItemsRef.current = nextItems
  }, [items, startIndex])

  const renderCards = (cardItems: ArticleItem[], keyPrefix: 'current' | 'previous') =>
    cardItems.map((article) => (
      <article className="home-article-card" key={`${keyPrefix}-${article.title}`}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={article.imageUrl}
            alt={article.title}
            loading="lazy"
            draggable="false"
            onContextMenu={e => e.preventDefault()}
            onDragStart={e => e.preventDefault()}
            style={{ userSelect: 'none', pointerEvents: 'auto', width: '100%', height: '100%', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              background: 'transparent',
              zIndex: 2,
              pointerEvents: 'all',
            }}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </article>
    ))

  return (
    <section className="home-articles">
      <article className="home-articles-header">
        <div className="home-articles-card">
          <p className="home-kicker">SBVTS</p>
          <h2>Galeria</h2>
        </div>
        <Link to="/gallery">Ver galeria</Link>
      </article>

      <div className="home-article-carousel">
        {isTransitioning && previousItems ? (
          <div className="home-article-layer is-previous" aria-hidden="true">
            <div className="home-article-grid">{renderCards(previousItems, 'previous')}</div>
          </div>
        ) : null}

        <div className={`home-article-layer is-current${isTransitioning ? ' is-entering' : ''}`}>
          <div className="home-article-grid">{renderCards(currentItems, 'current')}</div>
        </div>
      </div>
    </section>
  )
}
