export type NavigationLink = {
  label: string
  to: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/about' },
  { label: 'Galeria', to: '/gallery' },
]
