import { useEffect, useRef, useState } from 'react'
import { homeGallery } from '../data/homeSections'
import './GalleryPage.css'

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const wheelCooldownRef = useRef(0)

  const isLightboxOpen = activeIndex !== null
  const currentItem = activeIndex !== null ? homeGallery[activeIndex] : null

  const openLightbox = (index: number) => {
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setActiveIndex(null)
  }

  const showNext = () => {
    setActiveIndex((previousIndex) => {
      if (previousIndex === null) {
        return 0
      }

      return (previousIndex + 1) % homeGallery.length
    })
  }

  const showPrevious = () => {
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
              <img src={item.imageUrl} alt={item.title} loading="lazy" />
            </button>
            <div className="gallery-card-body">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
          </article>
        ))}
      </section>

      {isLightboxOpen && currentItem && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Visualizador da galeria" onClick={closeLightbox}>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()} onWheel={handleLightboxWheel}>
            <button type="button" className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
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

            <figure className="gallery-lightbox-figure">
              <img src={currentItem.imageUrl} alt={currentItem.title} />
              <figcaption>
                <strong>{currentItem.title}</strong>
                <span>{currentItem.excerpt}</span>
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
        </div>
      )}
    </main>
  )
}