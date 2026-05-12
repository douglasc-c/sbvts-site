import { homeImages } from '../data/homeSections'
import { setCachedHomeContent } from '../data/homeContentCache'
import type { HomeContent } from '../types/site'

import headerLogo from '../assets/bombril.svg'

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

export async function preloadAppAssets(): Promise<void> {
  const imageSources = [
    homeImages.hero,
    headerLogo,
  ]

  await Promise.all([
    preloadContent(),
    ...imageSources.map((src) => preloadImage(src)),
  ])
}
