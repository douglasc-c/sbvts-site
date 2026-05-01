import type { StatItem } from '../types/site'
import { formatCompactNumber } from '../utils/number'

type RideStatsSectionProps = {
  stats: StatItem[]
}

function buildStatValue(stat: StatItem): string {
  const suffix = stat.suffix ?? ''
  return `${formatCompactNumber(stat.value)}${suffix}`
}

export function RideStatsSection({ stats }: RideStatsSectionProps) {
  return (
    <section className="stats-shell" aria-label="Club statistics">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <p className="stat-value">{buildStatValue(stat)}</p>
          <p className="stat-label">{stat.label}</p>
        </article>
      ))}
    </section>
  )
}
