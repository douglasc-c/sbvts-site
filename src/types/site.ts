export type EventDifficulty = 'Easy' | 'Intermediate' | 'Advanced'

export type FeatureCard = {
  title: string
  description: string
}

export type StatItem = {
  value: number
  label: string
  suffix?: string
}

export type EventItem = {
  title: string
  date: string
  location: string
  summary: string
  details: string
  distanceKm: number
  difficulty: EventDifficulty
  routeHighlights: string[]
}

export type MembershipPlan = {
  name: string
  price: string
  perks: string[]
  isHighlighted?: boolean
}

export type HomeContent = {
  clubName: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  features: FeatureCard[]
  stats: StatItem[]
  events: EventItem[]
  membershipPlans: MembershipPlan[]
}
