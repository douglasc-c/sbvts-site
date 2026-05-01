import type { FeatureCard } from '../types/site'

type AboutSectionProps = {
  features: FeatureCard[]
}

export function AboutSection({ features }: AboutSectionProps) {
  return (
    <section className="section-shell" id="about">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">About Us</p>
          <h2>Built for Riders, Not Spectators</h2>
        </div>
        <p className="section-description">
          We combine discipline, respect, and raw energy to create a motorcycle community that feels like family.
        </p>
      </div>

      <div className="feature-grid stagger-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
