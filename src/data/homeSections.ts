import type { ArticleItem, ValueItem } from '../types/home'
import heroLocalImage from '../assets/jpg/IMG_1796.jpeg'
import legacyLocalImage from '../assets/jpg/CIMG0788.jpg'
import garageLocalImage from '../assets/jpg/IMG_7626.jpeg'
import midBannerImage from '../assets/jpg/9d784d6b-f215-419c-85bf-991246956467.jpg'

import galeria1 from '../assets/galeria/IMG_5440.jpeg'
import galeria2 from '../assets/galeria/IMG_5620.jpeg'
import galeria3 from '../assets/galeria/IMG_5719.jpeg'
import galeria4 from '../assets/galeria/IMG_6240.jpeg'
import galeria5 from '../assets/galeria/IMG_6680.jpeg'
import galeria6 from '../assets/galeria/91f86ae3-999f-44bd-9904-0677666436aa.jpg'
import galeria7 from '../assets/galeria/be87da69-4690-404c-bc25-d107a2f861e7.jpg'
import galeria8 from '../assets/galeria/57305134-78ab-487f-93c7-9867817fb611.jpg'
import galeria9 from '../assets/galeria/82806521-9823-4961-B998-F82E2591AF48.png'
import galeria10 from '../assets/galeria/IMG_2647.jpeg'
import galeria11 from '../assets/galeria/IMG_7081.jpeg'
import galeria12 from '../assets/galeria/IMG_7625.jpeg'
import galeria13 from '../assets/galeria/IMG_7628.jpeg'
import galeria14 from '../assets/galeria/IMG_7650.jpeg'
import galeria15 from '../assets/galeria/e24b1c39-0e2a-4213-a958-d8f8c47d4d22.jpg'

export const homeImages = {
  hero: heroLocalImage,
  legacy: legacyLocalImage,
  garage: garageLocalImage,
  midBanner: midBannerImage,
}

export const homeValues: ValueItem[] = [
  {
  title: 'Hierarquia',
  description: 'Aqui existe ordem. Cada posição é conquistada e respeitada. Decisões são tomadas por quem carrega a responsabilidade, e seguidas por quem veste as cores.',
},
{
  title: 'Disciplina',
  description: 'Disciplina é o que mantém o SOBREVIVENTES de pé. Horários são cumpridos, formações são respeitadas e atitudes são cobradas. Não é sobre querer — é sobre fazer o que precisa ser feito.',
},
{
  title: 'Lealdade',
  description: 'Lealdade não se fala, se prova. Aos irmãos, ao clube e às cores. Aqui não existe meio-termo — ou está dentro de verdade, ou não está.',
}
]

export const homeGallery: ArticleItem[] = [
  {
    title: 'SBVTS em Formação',
    excerpt: 'Registro do clube em formação, representando a força e a disciplina dos irmãos SobreviventeS.',
    imageUrl: galeria1,
  },
  {
    title: 'Encontro do Clube',
    excerpt: 'Momento de confraternização entre os membros, reforçando os laços e a identidade do clube.',
    imageUrl: galeria2,
  },
  {
    title: 'Saída em Pelotão',
    excerpt: 'Os irmãos em movimento, com alinhamento e respeito à ordem estabelecida pelo clube.',
    imageUrl: galeria3,
  },
  {
    title: 'Nossa Casa',
    excerpt: 'Registro de nossa casa, a confraternização entre os membros e integrantes.',
    imageUrl: galeria4,
  },
  {
    title: 'Tradição e Irmandade',
    excerpt: 'Momento que traduz o espírito do clube: lealdade, respeito e amor pela moto.',
    imageUrl: galeria5,
  },
  {
    title: 'Concentração',
    excerpt: 'Preparativos antes da saída, com todos os membros reunidos e prontos para a estrada.',
    imageUrl: galeria6,
  },
  {
    title: 'Na Estrada',
    excerpt: 'A liberdade da estrada é o que une os irmãos SobreviventeS a cada quilômetro percorrido.',
    imageUrl: galeria7,
  },
  {
    title: 'Registro Oficial',
    excerpt: 'Foto oficial do clube registrando mais um momento de história e memória do SBVTS.',
    imageUrl: galeria8,
  },
  {
    title: 'Cores do Clube',
    excerpt: 'As cores do SBVTS presentes em cada detalhe, do colete à atitude de cada irmão.',
    imageUrl: galeria9,
  },
  {
    title: 'Presença na Estrada',
    excerpt: 'Mais um registro da presença do SBVTS, levando atitude, respeito e identidade por onde passa.',
    imageUrl: galeria10,
  },
  {
    title: 'União em Movimento',
    excerpt: 'Os irmãos seguem juntos, reforçando na estrada os valores que sustentam o clube.',
    imageUrl: galeria11,
  },
  {
    title: 'Respeito e Postura',
    excerpt: 'Uma imagem que representa a postura firme, a disciplina e o compromisso com as cores.',
    imageUrl: galeria12,
  },
  {
    title: 'Irmandade Sobre Rodas',
    excerpt: 'Cada saída reforça a irmandade construída com lealdade, convivência e estrada.',
    imageUrl: galeria13,
  },
  {
    title: 'Memória do Clube',
    excerpt: 'Registro de mais um momento importante da trajetória do SBVTS e da sua história.',
    imageUrl: galeria14,
  },
  {
    title: 'Essência Sobreviventes',
    excerpt: 'Uma imagem que resume o espírito do clube: união, identidade e respeito pela caminhada.',
    imageUrl: galeria15,
  },
]
