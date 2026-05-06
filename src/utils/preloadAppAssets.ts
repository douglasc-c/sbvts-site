import { homeImages } from '../data/homeSections'
import { homeGallery } from '../data/gallerySections'
import { setCachedHomeContent } from '../data/homeContentCache'
import type { HomeContent } from '../types/site'

import directorPresident from '../assets/diretores/presidente.jpeg'
import directorVicePresident from '../assets/diretores/vice-presidente.jpeg'
import directorState from '../assets/diretores/dir-estadual.jpeg'
import directorFinancial from '../assets/diretores/dir-financeiro.jpeg'
import directorDiscipline from '../assets/diretores/dir-disciplina.jpeg'
import directorCommunication from '../assets/diretores/dir-comunicacao.jpeg'
import headerLogo from '../assets/bombril.svg'
import footerLogo from '../assets/escudo_vetor.svg'

const CONTENT_PATH = '/content/home-content.json'

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => resolve()
    image.onerror = () => resolve()
    image.src = src

    if (image.complete) {
      resolve()
    }
  })
}

async function preloadContent(timeoutMs = 6000): Promise<void> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(CONTENT_PATH, { cache: 'force-cache', signal: controller.signal })

    if (response.ok) {
      const data = (await response.json()) as HomeContent
      setCachedHomeContent(data)
    }
  } catch {
    // Ignore bootstrap fetch failures: runtime hook keeps normal error handling.
  } finally {
    window.clearTimeout(timeout)
  }
}

async function waitForFonts(): Promise<void> {
  if (!('fonts' in document)) {
    return
  }

  try {
    await document.fonts.ready
  } catch {
    // Font loading issues should not block initial render forever.
  }
}

export async function preloadAppAssets(): Promise<void> {
  const imageSources = [
    ...Object.values(homeImages),
    ...homeGallery.map((item) => item.imageUrl),
    directorPresident,
    directorVicePresident,
    directorState,
    directorFinancial,
    directorDiscipline,
    directorCommunication,
    headerLogo,
    footerLogo,
  ]

  await Promise.all([
    preloadContent(),
    waitForFonts(),
    ...imageSources.map((src) => preloadImage(src)),
  ])
}