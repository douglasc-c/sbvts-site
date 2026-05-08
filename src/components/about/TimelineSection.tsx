import './TimelineSection.css'

type TimelineItem = {
  year: string
  date: string
  shortDate: string
  title: string
  description: string
  imageUrl: string
}

type TimelineSectionProps = {
  items: TimelineItem[]
}

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="section-shell timeline-section">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Marcos do Clube</p>
            <h2>Conheça Nossa Base</h2>
          </div>
      </div>

      <ol className="timeline-list">
        {items.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <li className={`timeline-item ${isEven ? 'timeline-item--left' : 'timeline-item--right'}`} key={item.year}>
              <figure className="timeline-image-wrap">
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                <figcaption className="timeline-year">{item.shortDate}</figcaption>
              </figure>

              <div className="timeline-spine" aria-hidden="true">
                <div className="timeline-dot" />
                <div className="timeline-track" />
              </div>

              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
