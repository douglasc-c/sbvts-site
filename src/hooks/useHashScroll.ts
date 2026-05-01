import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_SELECTOR = '.site-header'

function getScrollOffset(): number {
  const header = document.querySelector<HTMLElement>(HEADER_SELECTOR)
  return (header?.offsetHeight ?? 0) + 16
}

export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = decodeURIComponent(location.hash.slice(1))
    const targetElement = document.getElementById(targetId)

    if (!targetElement) {
      return
    }

    const top = targetElement.getBoundingClientRect().top + window.scrollY - getScrollOffset()

    window.scrollTo({ top, behavior: 'smooth' })
  }, [location.hash, location.pathname])
}
