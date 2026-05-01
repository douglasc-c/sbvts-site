import { Link } from 'react-router-dom'
import type { EventItem } from '../../types/site'
import { buildEventSlug } from '../../utils/event'

type UpcomingEventsSectionProps = {
  events: EventItem[]
}

const eventThumbnailUrls = [
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80',
]

function getEventDayLabel(dateString: string): string {
  const date = new Date(dateString)
  return Number.isNaN(date.getTime()) ? '--' : String(date.getDate()).padStart(2, '0')
}

function getEventMonthLabel(dateString: string): string {
  const date = new Date(dateString)
  return Number.isNaN(date.getTime())
    ? '---'
    : new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date).toUpperCase()
}

export function UpcomingEventsSection({ events }: UpcomingEventsSectionProps) {
  return (
    <section className="home-upcoming" id="events">
      <p className="home-kicker home-center">Latest Event</p>
      <h2>Upcoming Events</h2>

      <div className="home-event-list">
        {events.slice(0, 2).map((event, index) => (
          <article className="home-event-row" key={event.title}>
            <div
              className="home-event-thumb"
              style={{ backgroundImage: `url(${eventThumbnailUrls[index] ?? eventThumbnailUrls[0]})` }}
            />

            <div className="home-event-day">
              <strong>{getEventDayLabel(event.date)}</strong>
              <span>{getEventMonthLabel(event.date)}</span>
            </div>

            <div className="home-event-content">
              <h3>{event.title}</h3>
              <p>{event.summary}</p>
            </div>

            <div className="home-event-meta">
              <p>{event.location}</p>
              <p>{event.difficulty}</p>
              <Link className="home-primary-button" to={`/events/${buildEventSlug(event.title)}`}>
                Register Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
