export type NavigationLink = {
  label: string
  to: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/about' },
  { label: 'Galeria', to: '/gallery' },
  // { label: 'Estatuto', to: '/statute' },
  { label: 'Brasão e Cultura', to: '/emblem-culture' },
]
