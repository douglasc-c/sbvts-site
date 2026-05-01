import { useEffect, useState } from 'react'
import type { HomeContent } from '../types/site'

type HomeContentState = {
  content: HomeContent | null
  isLoading: boolean
  hasError: boolean
}

const CONTENT_PATH = '/content/home-content.json'

export function useHomeContent(): HomeContentState {
  const [content, setContent] = useState<HomeContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadContent() {
      try {
        const response = await fetch(CONTENT_PATH, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Failed to load home content')
        }

        const data = (await response.json()) as HomeContent
        setContent(data)
      } catch {
        if (!controller.signal.aborted) {
          setHasError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadContent()

    return () => {
      controller.abort()
    }
  }, [])

  return { content, isLoading, hasError }
}
