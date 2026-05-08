import sobreviventes from '../../assets/sobrevieventesmotoclube.svg'

type HomeHeroProps = {
  title: string
  subtitle: string
  imageUrl: string
}

export function HomeHero({ title, subtitle, imageUrl }: HomeHeroProps) {
  return (
    <section className="home-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="home-hero-overlay" />
      <div className="home-hero-logo-wrap" aria-hidden="true">
        <img src={sobreviventes} alt="" className="home-kicker-logo" />
      </div>
      <div className="home-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="home-primary-button" href="#membership">
          Saiba mais
        </a>
      </div>
    </section>
  )
}
