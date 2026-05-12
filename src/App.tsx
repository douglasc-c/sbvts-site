import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { SiteLayout } from './components/SiteLayout'

const HomePage = lazy(async () => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(async () => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const GalleryPage = lazy(async () => import('./pages/GalleryPage').then((module) => ({ default: module.GalleryPage })))

function PageFallback() {
  return (
    <main className="page-enter">
      <section className="section-shell">
        <p className="section-kicker">Carregando</p>
        <h1>Preparando pagina</h1>
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
