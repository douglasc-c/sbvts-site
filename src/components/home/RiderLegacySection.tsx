import type { FeatureCard } from '../../types/site'
import { Link } from 'react-router-dom'

type RiderLegacySectionProps = {
  features: FeatureCard[]
  imageUrl: string
}

export function RiderLegacySection({ features, imageUrl }: RiderLegacySectionProps) {
  const mainFeature = features[0]

  return (
    <section className="home-split-block" id="about">
      <article className="home-story-card">
        <p className="home-kicker">Nossa História</p>
        <h2>{mainFeature?.title ?? 'Melhor viver a estrada do que apenas assistir.'}</h2>
        <p>
          {mainFeature?.description ??
            'Construído para seguir com disciplina e atitude, nosso grupo valoriza respeito na estrada e evolução constante.'}
        </p>
        <Link className="home-primary-button" to="/about">
          Ver História
        </Link>
      </article>

      <figure className="home-legacy-image-frame">
        <img src={imageUrl} alt="Integrante em destaque sobre a motocicleta" loading="lazy" />
        <figcaption>
          <strong>1.5.11</strong>
          <span>Fundação</span>
        </figcaption>
      </figure>
    </section>
  )
}
