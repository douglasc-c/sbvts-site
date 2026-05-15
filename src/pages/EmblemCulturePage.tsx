import './EmblemCulturePage.css'
import { useState } from 'react'
import nomeVector from '../assets/brasao/tarja_alta.svg'
import nomeBottomVector from '../assets/brasao/tarja_baixa.svg'
import velhoVector from '../assets/brasao/velho.svg'
import cactoVector from '../assets/brasao/cacto.svg'
import garrafasVector from '../assets/brasao/garrafas.svg'
import boiVector from '../assets/brasao/boi.svg'

type Topic = {
  id: 'name' | 'old-man' | 'cactus' | 'bottles' | 'skull'
  title: string
  body: string[]
}

type CulturePoint = {
  title: string
  emphasis?: string
  body: string[]
}

const emblemTopics: Topic[] = [
  {
    id: 'name',
    title: 'Nome sem apóstrofo',
    body: [
      'O nome SOBREVIVENTES, sem o sinal ortográfico apóstrofo entre as letras finais, simboliza unidade.',
      'Mesmo quando um membro estiver rodando sozinho, ele não representa um sobrevivente no singular, mas sim SobreviventeS no plural, pois o clube se entende como corpo único.',
      "Exemplo didático: em uma grafia como Sobrevivente'S, a separação poderia transmitir ideia de individualidade. Na cultura do clube, a leitura correta é sempre de união.",
    ],
  },
  {
    id: 'old-man',
    title: 'Velho SobreviventeS',
    body: [
      'A figura do Velho SobreviventeS é a base da cultura do clube. O velho simboliza sabedoria prática, vivida na estrada, na convivência e nas decisões coletivas.',
      'Ele aparece sentado e segurando o MC nas mãos para representar que os destinos do clube são definidos por quem senta à mesa de reunião para votar, deliberar e zelar pelas regras: os membros de escudo fechado.',
    ],
  },
  {
    id: 'cactus',
    title: 'Cacto',
    body: [
      'O cacto representa resistência, sobrevivência e durabilidade.',
      'Essas qualidades traduzem o perfil esperado dos membros do SobreviventeS Moto Clube Brasil: firmeza, adaptação e constância.',
    ],
  },
  {
    id: 'bottles',
    title: 'Garrafas e copos',
    body: [
      'As duas garrafas e os dois copos simbolizam receptividade, hospitalidade e festividade.',
      'A mensagem é de prontidão para receber bem, tanto os irmãos de clube quanto visitantes e frequentadores dos eventos promovidos pelo moto clube.',
    ],
  },
  {
    id: 'skull',
    title: 'Crânio de boi',
    body: [
      'O crânio de boi representa um traço direto da identidade do grupo: o apreço pelo churrasco e pela convivência em volta da mesa.',
      'No contexto do brasão, esse elemento reforça a linguagem franca e o espírito de irmandade do clube.',
    ],
  },
]

const culturePoints: CulturePoint[] = [
  {
    title: 'Ensinamento do Velho para os Integrantes',
    emphasis: 'MISSÃO: Aprender & Servir! (A&S)',
    body: [
      'Alguém só pode servir para alguma coisa quando aprende sobre essa coisa.',
      'Em suma, um integrante só pode servir como membro se aprender, na prática, a ser membro.',
    ],
  },
  {
    title: 'Lema dos Integrantes',
    emphasis: 'Hoje de pé eu aprendo e amanhã sentado eu ensino.',
    body: [],
  },
  {
    title: 'Ensinamento do Velho para os Membros',
    emphasis: 'MISSÃO: Ensinar & Zelar! (E&Z)',
    body: [
      'Só é possível ensinar de verdade aquilo que se zela.',
      'Por isso, os membros sentam à mesa, exercem voto e guardam o conjunto de regras e normas do clube.',
    ],
  },
  {
    title: 'Alarido / Brado',
    emphasis: 'O Velho por nós, nós pelo Velho! (VpnnpV)',
    body: [],
  },
  {
    title: 'Observação de hierarquia',
    body: [
      'Os integrantes correspondem aos Prósperos e Meios Escudos.',
      'Os membros correspondem aos Escudos Fechados.',
    ],
  },
]

export function EmblemCulturePage() {
  const [activeEmblemId, setActiveEmblemId] = useState<string | null>(null)

  const emblemSvgs: Record<string, string> = {
    name: nomeVector,
    'bottom-band': nomeBottomVector,
    'old-man': velhoVector,
    cactus: cactoVector,
    bottles: garrafasVector,
    skull: boiVector,
  }

  return (
    <main className="page-enter emblem-culture-page">
      <section className="section-shell emblem-culture-hero">
        <p className="section-kicker">Identidade e Tradição</p>
        <h1>Brasão e Cultura do Moto Clube</h1>
        <p className="emblem-culture-hero__subtitle">
          Documento de referência sobre os símbolos do brasão e os princípios filosóficos da cultura do Velho SobreviventeS.
        </p>
      </section>

      <section className="section-shell emblem-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Parte I</p>
            <h2>Explicação do Brasão</h2>
          </div>
        </div>

        <div className="emblem-diagram" aria-label="Diagrama do brasão com explicações e setas">
          <svg className="emblem-diagram__arrows" viewBox="0 0 1000 900" role="presentation" aria-hidden="true">
            <defs>
              <marker id="emblem-arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                <path d="M0,0 L12,6 L0,12 Z" fill="#2d2d2d" />
              </marker>
            </defs>

            {/* <path d="M300 190 L447 245" markerEnd="url(#emblem-arrowhead)" /> */}
            {/* <path d="M700 190 L546 303" markerEnd="url(#emblem-arrowhead)" /> */}
            {/* <path d="M300 435 L432 430" markerEnd="url(#emblem-arrowhead)" /> */}
            {/* <path d="M700 435 L572 430" markerEnd="url(#emblem-arrowhead)" /> */}
            {/* <path d="M500 760 L500 610" markerEnd="url(#emblem-arrowhead)" /> */}
          </svg>

          <figure className="emblem-diagram__image-wrap">
            {Object.entries(emblemSvgs).map(([id, src]) => (
              <img
                key={id}
                src={src}
                alt={`Detalhe do brasão: ${id}`}
                className={`emblem-diagram__part emblem-diagram__part--${id} ${
                  activeEmblemId === id ? 'emblem-diagram__part--active' : ''
                }`}
                loading="lazy"
              />
            ))}
          </figure>

          {emblemTopics.map((topic) => (
            <article
              className={`emblem-callout emblem-callout--${topic.id} ${
                activeEmblemId === topic.id ? 'emblem-callout--active' : ''
              }`}
              key={topic.title}
              onMouseEnter={() => setActiveEmblemId(topic.id)}
              onMouseLeave={() => setActiveEmblemId(null)}
            >
              <h3>{topic.title}</h3>
              {topic.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell culture-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Parte II</p>
            <h2>Conteúdo Intelectual Filosófico</h2>
          </div>
        </div>

        <div className="culture-list">
          {culturePoints.map((point) => (
            <article className="culture-block" key={point.title}>
              <h3>{point.title}</h3>
              {point.emphasis && <p className="culture-block__emphasis">{point.emphasis}</p>}
              {point.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
