import type { HomeContent } from '../types/site'

let cachedHomeContent: HomeContent | null = null

export function getCachedHomeContent(): HomeContent | null {
  return cachedHomeContent
}

export function setCachedHomeContent(content: HomeContent): void {
  cachedHomeContent = content
}