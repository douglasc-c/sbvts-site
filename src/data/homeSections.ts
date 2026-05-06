import type { ValueItem } from '../types/home'
import heroLocalImage from '../assets/jpg/IMG_1796.jpeg'
import legacyLocalImage from '../assets/jpg/CIMG0788.jpg'
import garageLocalImage from '../assets/jpg/IMG_7626.jpeg'
import midBannerImage from '../assets/jpg/9d784d6b-f215-419c-85bf-991246956467.jpg'

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
