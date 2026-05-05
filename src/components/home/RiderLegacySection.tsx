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
        <h2>{mainFeature?.title ?? 'I would rather be a rider than a spectator.'}</h2>
        <p>
          {mainFeature?.description ??
            'Built to move with discipline and passion, our group values road respect and rider growth above all.'}
        </p>
        <Link className="home-primary-button" to="/about">
          Descubra mais
        </Link>
      </article>

      <figure className="home-legacy-image-frame">
        <img src={imageUrl} alt="Rider portrait on motorcycle" loading="lazy" />
        <figcaption>
          <strong>1.5.11</strong>
          <span>Fundação</span>
        </figcaption>
      </figure>
    </section>
  )
}
