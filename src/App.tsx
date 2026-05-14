import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { SiteLayout } from './components/SiteLayout'
import { CookieBanner } from './components/CookieBanner'

const HomePage = lazy(async () => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(async () => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const GalleryPage = lazy(async () => import('./pages/GalleryPage').then((module) => ({ default: module.GalleryPage })))
const PrivacyPolicyPage = lazy(async () => import('./pages/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage })))

function PageFallback() {
  return (
    <main className="page-enter">
      <section className="section-shell">
        <p className="section-kicker">Preparando página</p>
        <h1>Carregando</h1>
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route
            path="/"
            element={(
              <Suspense fallback={<PageFallback />}>
                <HomePage />
              </Suspense>
            )}
          />
          <Route
            path="/about"
            element={(
              <Suspense fallback={<PageFallback />}>
                <AboutPage />
              </Suspense>
            )}
          />
          <Route
            path="/gallery"
            element={(
              <Suspense fallback={<PageFallback />}>
                <GalleryPage />
              </Suspense>
            )}
          />
          <Route
            path="/privacy"
            element={(
              <Suspense fallback={<PageFallback />}>
                <PrivacyPolicyPage />
              </Suspense>
            )}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
      <CookieBanner />
    </>
  )
}

export default App
