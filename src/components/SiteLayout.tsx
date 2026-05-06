import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { useHashScroll } from '../hooks/useHashScroll'
import { useHomeContent } from '../hooks/useHomeContent'

export function SiteLayout() {
  const { content, isLoading, hasError } = useHomeContent()

  useHashScroll()

  if (isLoading) {
    return (
      <div className="page-shell">
        <main className="page-enter">
          <section className="section-shell">
            <p className="section-kicker">Carregando</p>
            <h1>Preparando conteudo</h1>
            <p className="hero-subtitle">Buscando informacoes de conteudo e rotas.</p>
          </section>
        </main>
      </div>
    )
  }

  if (hasError || !content) {
    return (
      <div className="page-shell">
        <main className="page-enter">
          <section className="section-shell">
            <p className="section-kicker">Erro de carregamento</p>
            <h1>Nao foi possivel carregar o conteudo</h1>
            <p className="hero-subtitle">Verifique o arquivo JSON externo e tente novamente.</p>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <SiteHeader clubName={content.clubName} tagline={content.tagline} />
      <Outlet context={{ content }} />
      <SiteFooter clubName={content.clubName} />
    </div>
  )
}
