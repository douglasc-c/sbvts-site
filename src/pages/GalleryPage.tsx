import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { homeGallery } from '../data/gallerySections'
import './GalleryPage.css'

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [navigationDirection, setNavigationDirection] = useState<'next' | 'previous'>('next')
  const wheelCooldownRef = useRef(0)

  const isLightboxOpen = activeIndex !== null
  const currentItem = activeIndex !== null ? homeGallery[activeIndex] : null

  const openLightbox = (index: number) => {
    setNavigationDirection('next')
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setActiveIndex(null)
  }

  const showNext = () => {
    setNavigationDirection('next')
    setActiveIndex((previousIndex) => {
      if (previousIndex === null) {
        return 0
      }

      return (previousIndex + 1) % homeGallery.length
    })
  }

  const showPrevious = () => {
    setNavigationDirection('previous')
    setActiveIndex((previousIndex) => {
      if (previousIndex === null) {
        return 0
      }

      return (previousIndex - 1 + homeGallery.length) % homeGallery.length
    })
  }

  const handleLightboxWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault()

    const now = Date.now()
    if (now - wheelCooldownRef.current < 220) {
      return
    }

    wheelCooldownRef.current = now

    if (event.deltaY > 0) {
      showNext()
    }

    if (event.deltaY < 0) {
      showPrevious()
    }
  }

  useEffect(() => {
    if (!isLightboxOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen])

  const lightboxContent =
    isLightboxOpen && currentItem
      ? createPortal(
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador da galeria"
            onClick={closeLightbox}
          >
            <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()} onWheel={handleLightboxWheel}>
              <button type="button" className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
                <span aria-hidden="true">×</span>
                Fechar
              </button>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-prev"
                onClick={showPrevious}
                aria-label="Imagem anterior"
              >
                ←
              </button>

              <figure
                className={`gallery-lightbox-figure is-${navigationDirection}`}
                key={`${activeIndex ?? 0}-${navigationDirection}`}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src={currentItem.imageUrl}
                    alt={currentItem.title}
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
                <figcaption>
                  <div className="gallery-lightbox-meta">
                    <strong>{currentItem.title}</strong>
                    <span>{currentItem.excerpt}</span>
                  </div>
                  <small>
                    {activeIndex !== null ? activeIndex + 1 : 1} / {homeGallery.length}
                  </small>
                </figcaption>
              </figure>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-next"
                onClick={showNext}
                aria-label="Próxima imagem"
              >
                →
              </button>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <main className="page-enter gallery-page section-shell">
      <header className="gallery-header">
        <p className="section-kicker">SBVTS</p>
        <h1>Galeria</h1>
        <p className="gallery-description">
          Registros oficiais dos rolês, encontros e momentos que nos representam.
        </p>
      </header>

      <section className="gallery-grid" aria-label="Imagens da galeria">
        {homeGallery.map((item, index) => (
          <article className="gallery-card" key={item.title}>
            <button
              type="button"
              className="gallery-open-button"
              onClick={() => openLightbox(index)}
              aria-label={`Abrir imagem: ${item.title}`}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
            </button>
            <div className="gallery-card-body">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
      {lightboxContent}
    </main>
  )
}