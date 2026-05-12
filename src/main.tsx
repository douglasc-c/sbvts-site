import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { preloadAppAssets } from './utils/preloadAppAssets'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)

async function bootstrap() {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )

  // Preload in background so first paint is not blocked by heavy assets.
  void preloadAppAssets()

  const loadingElement = document.getElementById('app-boot-loading')
  loadingElement?.remove()
}

void bootstrap()
