import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigationLinks'
import bombrilWhite from '../assets/bombril.svg'
import anthemTrack from '../assets/Hino_SobreviventeS_M.C.mp3'

type SiteHeaderProps = {
  clubName: string
  tagline: string
}

export function SiteHeader({ clubName, tagline }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const anthemAudioRef = useRef<HTMLAudioElement>(null)

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
          <a
            href="https://www.instagram.com/sobreviventes.mc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2m0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9m9.75 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
              </svg>
            </span>
          </a>
          <a
            href="https://www.facebook.com/sobreviventesmotoclube/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M13 2h3a1 1 0 0 1 0 2h-3a2 2 0 0 0-2 2v3h4a1 1 0 1 1 0 2h-4v10a1 1 0 1 1-2 0V11H7a1 1 0 1 1 0-2h2V6a4 4 0 0 1 4-4" />
              </svg>
            </span>
          </a>
        </div>
        <p>{tagline}</p>
        <div className="site-topbar-right">
          <audio ref={anthemAudioRef} className="site-topbar-player" controls preload="none" autoPlay aria-label="Hino Sobreviventes MC">
            <source src={anthemTrack} type="audio/mpeg" />
            Seu navegador nao suporta audio.
          </audio>
          <Link to="/#membership">Saber mais</Link>
        </div>
      </div>

      <div className="site-header">
        <button
          type="button"
          className={`mobile-menu-button ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
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
          <img src={bombrilWhite} alt={clubName} className="brand-logo" />
        </Link>
      </div>
    </header>
  )
}
