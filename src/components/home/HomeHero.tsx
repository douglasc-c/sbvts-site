type HomeHeroProps = {
  title: string
  subtitle: string
  imageUrl: string
}

export function HomeHero({ title, subtitle, imageUrl }: HomeHeroProps) {
  return (
    <section className="home-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="home-hero-overlay" />
      <div className="home-hero-content">
        <p className="home-kicker">Sobreviventes Moto Clube</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="home-primary-button" href="#membership">
          Falar com a equipe
        </a>
      </div>
    </section>
  )
}
