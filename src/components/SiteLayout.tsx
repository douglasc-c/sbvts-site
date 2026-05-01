import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { useHashScroll } from '../hooks/useHashScroll'
import { useHomeContent } from '../hooks/useHomeContent'

export function SiteLayout() {
  const { content, isLoading, hasError } = useHomeContent()

  useHashScroll()

  if (isLoading) {
    return (
      <div className="page-shell">
        <main className="page-enter">
          <section className="section-shell">
            <p className="section-kicker">Loading</p>
            <h1>Preparing Ride Data</h1>
            <p className="hero-subtitle">Fetching external content and route information.</p>
          </section>
        </main>
      </div>
    )
  }

  if (hasError || !content) {
    return (
      <div className="page-shell">
        <main className="page-enter">
          <section className="section-shell">
            <p className="section-kicker">Load Error</p>
            <h1>Content Could Not Be Loaded</h1>
            <p className="hero-subtitle">Check the external JSON file and try again.</p>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <SiteHeader clubName={content.clubName} tagline={content.tagline} />
      <Outlet context={{ content }} />
      <SiteFooter clubName={content.clubName} />
    </div>
  )
}
