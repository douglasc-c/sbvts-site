import logoBlack from '../assets/escudo_vetor.svg'
import { Link } from 'react-router-dom'

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
            <Link to="/#home">Inicio</Link>
            <Link to="/about">Sobre nós</Link>
            <Link to="/gallery">Galeria</Link>
            <Link to="/#contact">Saiba mais</Link>
          </nav>
        </div>
        <p>NOSSO VELHO É ESCUDO, É FORTALEZA.</p>
      </div>

      <p className="site-footer-copyright">Desenvolvido por Spacetools Technologic. © 2011 - {currentYear} SobreviventeS Moto Clube®. Todos os direitos reservados.</p>
    </footer>
  )
}
