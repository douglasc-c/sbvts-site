import { BrandWordmark } from '../BrandWordmark'

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
        <BrandWordmark className="home-kicker-logo" />
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
