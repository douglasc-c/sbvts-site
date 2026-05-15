type EmblemTopic = {
  id: 'name' | 'old-man' | 'cactus' | 'bottles' | 'skull'
  title: string
  body: string[]
}

type CulturePoint = {
  title: string
  emphasis?: string
  body: string[]
}

export const emblemTopics: EmblemTopic[] = [
  {
    id: 'name',
    title: 'Nome sem apóstrofo',
    body: [
      'A grafia SOBREVIVENTES sem apóstrofo simboliza unidade. Mesmo sozinho, o membro representa o coletivo (plural), reforçando que o clube é um corpo único e inseparável.'
    ],
  },
  {
    id: 'old-man',
    title: 'O Velho',
    body: [
      'O Velho simboliza a sabedoria prática da estrada. Ele aparece sentado segurando o MC para mostrar que o destino do clube é decidido à mesa, exclusivamente pelos membros de escudo fechado que votam e zelam pelas regras.'
    ],
  },
  {
    id: 'cactus',
    title: 'Cacto',
    body: [
      'O cacto simboliza resistência e durabilidade. Representa o perfil do membro: firme, adaptável e constante diante de qualquer adversidade.'
    ],
  },
  {
    id: 'bottles',
    title: 'Garrafas e copos',
    body: [
      'Simbolizam hospitalidade e festividade. Representam a prontidão do clube em receber bem irmãos, visitantes e amigos em seus eventos.'
    ],
  },
  {
    id: 'skull',
    title: 'Crânio de boi',
    body: [
      'Ícone da identidade do grupo, representa o apreço pelo churrasco e pela convivência à mesa. Reforça a irmandade e a linguagem franca do clube.'
    ],
  },
]

export const culturePoints: CulturePoint[] = [
  {
    title: 'Ensinamento do Velho para os Integrantes',
    emphasis: 'MISSÃO: Aprender & Servir!',
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
    emphasis: 'MISSÃO: Ensinar & Zelar!',
    body: [
      'Só é possível ensinar de verdade aquilo que se zela.',
      'Por isso, os membros sentam à mesa, exercem voto e guardam o conjunto de regras e normas do clube.',
    ],
  },
  {
    title: 'Alarido / Brado',
    emphasis: 'O Velho por nós, nós pelo Velho!',
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
