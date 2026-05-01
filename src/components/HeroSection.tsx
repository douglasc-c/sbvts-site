type HeroSectionProps = {
  title: string
  subtitle: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="hero-section section-shell">
      <p className="section-kicker">Motorcycle Brotherhood</p>
      <h1>{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>

      <div className="hero-actions">
        <a className="cta-button" href="#events">
          Upcoming Rides
        </a>
        <a className="ghost-button" href="#about">
          Discover Culture
        </a>
      </div>
    </section>
  )
}
