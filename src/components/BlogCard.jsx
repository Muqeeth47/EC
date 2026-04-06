import { Clock, User, ArrowRight } from 'lucide-react'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function BlogCard({ post, index = 0 }) {
  const accent = accentColors[index % accentColors.length]
  const accentNext = accentColors[(index + 1) % accentColors.length]

  return (
    <article
      style={{
        background: 'rgba(45,27,78,0.75)',
        border: `4px solid ${accent}`,
        borderRadius: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: `8px 8px 0 ${accentNext}`,
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        transform: index % 3 === 1 ? 'translateY(12px)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) rotate(0.5deg) scale(1.02)'
        e.currentTarget.style.boxShadow = `12px 12px 0 ${accentNext}, 0 0 30px ${accent}44`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = index % 3 === 1 ? 'translateY(12px)' : 'none'
        e.currentTarget.style.boxShadow = `8px 8px 0 ${accentNext}`
      }}
    >
      {/* Thumbnail */}
      <div
        className="media-block"
        style={{
          aspectRatio: '16/9', borderRadius: 0,
          borderWidth: 0, borderBottom: `4px solid ${accent}`
        }}
      />

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        <span className="badge badge-cat" style={{ background: `${accent}22`, color: accent, borderColor: accent, alignSelf: 'flex-start' }}>
          {post.category}
        </span>

        <h3 style={{
          fontFamily: '"Outfit", sans-serif', fontWeight: 900,
          fontSize: '1.1rem', color: '#fff',
          textShadow: `1px 1px 0 ${accent}`,
          textTransform: 'uppercase', letterSpacing: '-0.01em',
          lineHeight: 1.25
        }}>{post.title}</h3>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.6, flex: 1 }}>
          {post.excerpt.slice(0, 120)}…
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem', borderTop: `2px dashed rgba(255,255,255,0.1)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>
            <User size={13} aria-hidden="true" /> {post.author}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>
            <Clock size={13} aria-hidden="true" /> {post.readTime}
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <button style={{
              background: 'none', border: 'none', color: accent,
              fontFamily: '"Outfit", sans-serif', fontWeight: 800,
              fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem',
              transition: 'gap 0.2s ease'
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
              onMouseLeave={e => e.currentTarget.style.gap = '0.3rem'}
            >
              Read <ArrowRight size={13} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
