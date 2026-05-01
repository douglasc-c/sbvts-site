import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigationLinks'
import bombrilWhite from '../assets/bombril_white.svg'
import bombrilBlack from '../assets/bombril_black.svg'
import anthemTrack from '../assets/Hino_SobreviventeS_M.C.mp3'

type SiteHeaderProps = {
  clubName: string
  tagline: string
}

export function SiteHeader({ clubName, tagline }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((previousValue) => !previousValue)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : 'is-at-top'}`} id="home">
      <div className="site-topbar">
        <div className="site-topbar-left">
          <a href="https://www.instagram.com/sobreviventes.mc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/sobreviventesmotoclube/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <p>{tagline}</p>
        <div className="site-topbar-right">
          <audio className="site-topbar-player" controls preload="none" autoPlay aria-label="Hino Sobreviventes MC">
            <source src={anthemTrack} type="audio/mpeg" />
            Seu navegador nao suporta audio.
          </audio>
          <Link to="/#membership">Saber mais</Link>
        </div>
      </div>

      <div className="site-header">
        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navigationLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="brand-block" to="/" onClick={closeMenu}>
          <img src={isScrolled ? bombrilBlack : bombrilWhite} alt={clubName} className="brand-logo" />
        </Link>
      </div>
    </header>
  )
}
