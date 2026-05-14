import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

const COOKIE_KEY = 'cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(COOKIE_KEY))

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa política de privacidade.
        </p>
        <div className="cookie-banner__actions">
          <Link to="/privacy" className="cookie-banner__btn cookie-banner__btn--manage">
            Gerenciar
          </Link>
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={handleDecline}>
            Recusar
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={handleAccept}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
