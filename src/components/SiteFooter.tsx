import logoBlack from '../assets/escudo_vetor.svg'

type SiteFooterProps = {
  clubName: string
}

export function SiteFooter({ clubName }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <img src={logoBlack} alt={clubName} className="site-footer-logo" />
        <div className="site-footer-brand-right">
          <nav className="site-footer-nav" aria-label="Footer navigation">
            <a href="/#home">Inicio</a>
            <a href="/#about">Sobre nós</a>
            <a href="/gallery">Galeria</a>
            <a href="/#membership">Saiba mais</a>
          </nav>
        </div>
        <p>NOSSO VELHO É ESCUDO, É FORTALEZA</p>
      </div>

      <form className="site-footer-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="newsletter-email">Newsletter</label>
        <div>
          <input id="newsletter-email" name="email" type="email" placeholder="Digite seu email" />
          <button type="submit">Inscrever-se</button>
        </div>
      </form>

      <p className="site-footer-copyright">{currentYear} {clubName}. Todos os direitos reservados.</p>
    </footer>
  )
}
