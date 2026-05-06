import { homeValues } from '../data/homeSections'
import { aboutContextCards } from '../data/aboutSections'
import './AboutPage.css'

export function AboutPage() {
  return (
    <main className="page-enter about-page">
      <section className="section-shell about-hero">
        <p className="section-kicker">Nossa História</p>
        <h1>Forjados no respeito, unidos pela confiança</h1>
        <p className="hero-subtitle">
          O SOBREVIVENTES nasceu de reuniões em garagem e evoluiu para uma irmandade de alta responsabilidade, guiada por postura e compromisso com as cores. Cada irmão é parte de uma história construída com respeito, disciplina e lealdade, onde a estrada é o cenário e a moto é a paixão que nos une. Temos como missão preservar a tradição, fortalecer os laços e avançar no território nacional.
        </p>
      </section>

      <section className="section-shell about-values">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Nossos Pilares</p>
            <h2>Valores que Guiam Cada Irmão</h2>
          </div>
        </div>

        <div className="feature-grid stagger-grid">
          {homeValues.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell about-context">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Marcos do Clube</p>
            <h2>Conheça Nossa Base</h2>
          </div>
        </div>

        <div className="about-context-grid stagger-grid">
          {aboutContextCards.map((card) => (
            <article className="about-context-card" key={card.title}>
              <span className="about-context-subtitle">{card.subtitle}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
