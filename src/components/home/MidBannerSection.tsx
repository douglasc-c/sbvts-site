import { Link } from "react-router-dom"

type MidBannerSectionProps = {
  imageUrl: string
}

export function MidBannerSection({ imageUrl }: MidBannerSectionProps) {
  return (
    <section className="home-mid-banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="home-mid-banner-overlay" />
      <div className="home-mid-banner-content">
        <p className="home-kicker">Sobreviventes Moto Clube</p>
        <h2>Fazer parte dessa família não é fácil</h2>
        <Link className="home-primary-button" to="#contact">
          Saiba mais
        </Link>
      </div>
    </section>
  )
}
