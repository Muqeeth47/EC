import { useState } from 'react'
import eventsData from '../data/events.json'
import EventCard from '../components/EventCard'

const upcoming = eventsData.filter(e => e.status === 'upcoming')
const past     = eventsData.filter(e => e.status === 'past')

export default function Events() {
  const [tab, setTab] = useState('upcoming')
  const events = tab === 'upcoming' ? upcoming : past

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ─── HEADER ───────────────────────────────── */}
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #00F5D4', position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          fontFamily: '"Bangers", cursive', opacity: 0.05,
          color: '#00F5D4', whiteSpace: 'nowrap', lineHeight: 1
        }}>EVENTS</div>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div aria-hidden="true" className="animate-bounce-sub" style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📅</div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff'
          }}>
            <span className="grad-text">Events</span> &amp;<br />
            <span style={{ color: '#00F5D4' }}>Happenings</span>
          </h1>
        </div>
      </section>

      {/* ─── TAB TOGGLE ───────────────────────────── */}
      <section style={{ padding: '3rem 2rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className={`filter-btn ${tab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setTab('upcoming')}
          >
            ✦ Upcoming Events
          </button>
          <button
            className={`filter-btn ${tab === 'past' ? 'active' : ''}`}
            onClick={() => setTab('past')}
          >
            ✦ Past Events
          </button>
        </div>
      </section>

      {/* ─── EVENTS GRID ──────────────────────────── */}
      <section style={{ padding: '4rem 2rem 7rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {events.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)' }}>
              <p style={{ fontSize: '1.2rem' }}>No events found.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              {events.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
