import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']
const borderStyles = ['solid', 'dashed', 'solid', 'dotted', 'solid']

export default function EventCard({ event, index = 0 }) {
  const accent = accentColors[index % accentColors.length]
  const borderStyle = borderStyles[index % borderStyles.length]
  const isPast = event.status === 'past'

  return (
    <div
      style={{
        background: 'rgba(45,27,78,0.75)',
        border: `4px ${borderStyle} ${accent}`,
        borderRadius: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: `8px 8px 0 ${accentColors[(index + 1) % accentColors.length]}, 16px 16px 0 ${accentColors[(index + 2) % accentColors.length]}`,
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        filter: isPast ? 'saturate(0.55)' : 'none',
        transform: index % 2 === 1 ? 'translateY(16px)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = index % 2 === 1 ? 'translateY(12px) scale(1.02)' : 'translateY(-4px) scale(1.02)'
        e.currentTarget.style.filter = 'none'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = index % 2 === 1 ? 'translateY(16px)' : 'none'
        e.currentTarget.style.filter = isPast ? 'saturate(0.55)' : 'none'
      }}
    >
      {/* Media block */}
      <div style={{ position: 'relative' }}>
        <div
          className="media-block media-16-9"
          style={{ borderRadius: 0, borderWidth: 0, borderBottom: `4px ${borderStyle} ${accent}` }}
        />
        {isPast && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <span className="badge badge-ended">Ended</span>
          </div>
        )}
        {!isPast && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <span className="badge badge-live">Upcoming</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{
          fontFamily: '"Outfit", sans-serif', fontWeight: 900, fontSize: '1.3rem',
          color: '#fff', textShadow: `2px 2px 0 ${accent}`,
          textTransform: 'uppercase', letterSpacing: '-0.01em'
        }}>{event.title}</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: accent, fontSize: '0.85rem', fontWeight: 700 }}>
            <Calendar size={15} strokeWidth={2.5} aria-hidden="true" />
            {event.date}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            <MapPin size={15} strokeWidth={2.5} aria-hidden="true" />
            {event.venue}
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{event.description}</p>

        <button className="btn-outline" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
          Know More <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
