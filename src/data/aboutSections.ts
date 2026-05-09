import type { StatItem } from '../types/site'
import img1796 from '../assets/jpg/CIMG0790.jpg'
import imgCimg from '../assets/jpg/889178A6-A7A4-4EC8-ACE8-43663BA91608_1_201_a.jpeg'

export const aboutStats: StatItem[] = [
  { value: 2026 - 2011, label: 'Anos de história', suffix: '+' },
  { value: 2, label: 'Unidades ativas' },
  { value: 2, label: 'Estados cobertos' },
]

export const aboutTimeline = [
  {
    year: '2011',
    date: '1 de maio de 2011',
    shortDate: '1.5.11',
    title: 'Fundação',
    description:
      'O SOBREVIVENTES MOTO CLUBE é fundado em garagem com o propósito de formar uma irmandade guiada por hierarquia, disciplina e lealdade.',
    imageUrl: img1796,
  },
  {
    year: '2017',
    date: '10 de junho de 2017',
    shortDate: '10.6.17',
    title: 'Unidade Santa Catarina',
    description:
      'A unidade de Joinville - SC é inaugurada, levando as cores e o código de conduta do clube para o estado catarinense.',
    imageUrl: imgCimg,
  },
]