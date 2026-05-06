type MidBannerSectionProps = {
  imageUrl: string
}

export function MidBannerSection({ imageUrl }: MidBannerSectionProps) {
  return (
    <section className="home-mid-banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="home-mid-banner-overlay" />
      <div className="home-mid-banner-content">
        <p className="home-kicker">Sobreviventes Moto Clube</p>
        <h2>Entre Para a Família</h2>
        <a className="home-primary-button" href="#membership">
          Iniciar Contato
        </a>
      </div>
    </section>
  )
}
