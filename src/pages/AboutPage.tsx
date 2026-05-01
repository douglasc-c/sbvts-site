import { useSiteContent } from '../hooks/useSiteContent'

export function AboutPage() {
  const { content } = useSiteContent()

  return (
    <main className="page-enter">
      <section className="section-shell">
        <p className="section-kicker">Our Story</p>
        <h1>Built in Asphalt, Bound by Respect</h1>
        <p className="hero-subtitle">
          SBVTS Riders started as a small garage meetup and evolved into a high-commitment community of riders focused on technique, safety, and brotherhood.
        </p>
      </section>

      <section className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">What We Stand For</p>
            <h2>Values That Guide Every Ride</h2>
          </div>
        </div>

        <div className="feature-grid stagger-grid">
          {content.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
