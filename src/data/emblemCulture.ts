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
      'Essas qualidades traduzem o perfil esperado dos membros do SobreviventeS Moto Clube: firmeza, adaptação e constância.',
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
