import { useOutletContext } from 'react-router-dom'
import type { HomeContent } from '../types/site'

type SiteContentContext = {
  content: HomeContent
}

export function useSiteContent() {
  return useOutletContext<SiteContentContext>()
}
