import './EmblemCulturePage.css'
import { useState } from 'react'
import nomeVector from '../assets/brasao/tarja_alta.svg'
import nomeBottomVector from '../assets/brasao/tarja_baixa.svg'
import velhoVector from '../assets/brasao/velho.svg'
import cactoVector from '../assets/brasao/cacto.svg'
import garrafasVector from '../assets/brasao/garrafas.svg'
import boiVector from '../assets/brasao/boi.svg'
import { emblemTopics, culturePoints } from '../data/emblemCulture'



export function EmblemCulturePage() {
  const [activeEmblemId, setActiveEmblemId] = useState<string | null>(null)

  const emblemSvgs: Record<string, string> = {
    name: nomeVector,
    'bottom-band': nomeBottomVector,
    'old-man': velhoVector,
    cactus: cactoVector,
    bottles: garrafasVector,
    skull: boiVector,
  }

  return (
    <main className="page-enter emblem-culture-page">
      <section className="section-shell emblem-culture-hero">
        <p className="section-kicker">Identidade e Tradição</p>
        <h1>Brasão e Cultura do Moto Clube</h1>
        <p className="emblem-culture-hero__subtitle">
          Documento de referência sobre os símbolos do brasão e os princípios filosóficos da cultura do Velho SobreviventeS.
        </p>
      </section>

      <section className="section-shell emblem-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Parte I</p>
            <h2>Explicação do Brasão</h2>
          </div>
        </div>

        <div className="emblem-diagram" aria-label="Diagrama do brasão com explicações interativas">
          <svg className="emblem-diagram__arrows" viewBox="0 0 1000 900" role="presentation" aria-hidden="true">
            <defs>
              <marker id="emblem-arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M0,0 L12,6 L0,12 Z" fill="#2d2d2d" />
              </marker>
            </defs>
          </svg>

          <figure className="emblem-diagram__image-wrap">
            {Object.entries(emblemSvgs).map(([id, src]) => (
              <img
                key={id}
                src={src}
                alt={`Detalhe do brasão: ${id}`}
                className={`emblem-diagram__part emblem-diagram__part--${id} ${
                  activeEmblemId === id ? 'emblem-diagram__part--active' : ''
                }`}
                loading="lazy"
                onMouseEnter={() => setActiveEmblemId(id)}
                onMouseLeave={() => setActiveEmblemId(null)}
              />
            ))}
          </figure>
          <div className="emblem-callouts">
            {emblemTopics.map((topic) => (
              <article
                className={`emblem-callout emblem-callout--${topic.id} ${
                  activeEmblemId === topic.id ? 'emblem-callout--active' : ''
                }`}
                key={topic.title}
                onMouseEnter={() => setActiveEmblemId(topic.id)}
                onMouseLeave={() => setActiveEmblemId(null)}
              >
                <h3>{topic.title}</h3>
                {topic.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell culture-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Parte II</p>
            <h2>Conteúdo Intelectual Filosófico</h2>
          </div>
        </div>

        <div className="culture-list">
          {culturePoints.map((point) => (
            <article className="culture-block" key={point.title}>
              <h3>{point.title}</h3>
              {point.emphasis && <p className="culture-block__emphasis">{point.emphasis}</p>}
              {point.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
