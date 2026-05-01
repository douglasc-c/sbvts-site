import { useEffect, useMemo, useState } from 'react'

type UseCarouselOptions = {
  totalItems: number
  pageSize: number
  autoplayIntervalMs?: number
}

type UseCarouselResult = {
  page: number
  totalPages: number
  canNavigate: boolean
  startIndex: number
  next: () => void
  previous: () => void
  setPage: (newPage: number) => void
}

export function useCarousel({
  totalItems,
  pageSize,
  autoplayIntervalMs = 4000,
}: UseCarouselOptions): UseCarouselResult {
  const [page, setPageState] = useState(0)

  const totalPages = useMemo(() => {
    if (totalItems <= 0 || pageSize <= 0) {
      return 0
    }

    return Math.ceil(totalItems / pageSize)
  }, [pageSize, totalItems])

  const canNavigate = totalPages > 1
  const safePage = totalPages > 0 ? page % totalPages : 0
  const startIndex = safePage * pageSize

  function setPage(newPage: number) {
    if (totalPages === 0) {
      setPageState(0)
      return
    }

    const normalizedPage = ((newPage % totalPages) + totalPages) % totalPages
    setPageState(normalizedPage)
  }

  function next() {
    setPage(page + 1)
  }

  function previous() {
    setPage(page - 1)
  }

  useEffect(() => {
    if (!canNavigate) {
      setPageState(0)
      return
    }

    const autoplay = window.setInterval(() => {
      setPageState((currentPage) => (currentPage + 1) % totalPages)
    }, autoplayIntervalMs)

    return () => {
      window.clearInterval(autoplay)
    }
  }, [autoplayIntervalMs, canNavigate, totalPages])

  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPageState(0)
      return
    }

    if (totalPages === 0 && page !== 0) {
      setPageState(0)
    }
  }, [page, totalPages])

  return {
    page: safePage,
    totalPages,
    canNavigate,
    startIndex,
    next,
    previous,
    setPage,
  }
}
