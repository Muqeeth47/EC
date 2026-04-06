import { ZoomIn } from 'lucide-react'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function GalleryBlock({ item, index = 0 }) {
  const accent = accentColors[index % accentColors.length]
  const accentNext = accentColors[(index + 1) % accentColors.length]

  return (
    <div
      className="gallery-item"
      style={{
        borderColor: accent,
        boxShadow: `6px 6px 0 ${accentNext}`,
        aspectRatio: item.aspect,
        background: '#000',
        transform: index % 3 === 1 ? 'rotate(1deg)' : index % 3 === 2 ? 'rotate(-0.5deg)' : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)'
        e.currentTarget.style.boxShadow = `10px 10px 0 ${accentNext}, 0 0 30px rgba(255,58,242,0.4)`
        e.currentTarget.style.zIndex = '10'
      }}
      onMouseLeave={e => {
        const base = index % 3 === 1 ? 'rotate(1deg)' : index % 3 === 2 ? 'rotate(-0.5deg)' : 'none'
        e.currentTarget.style.transform = base
        e.currentTarget.style.boxShadow = `6px 6px 0 ${accentNext}`
        e.currentTarget.style.zIndex = 'auto'
      }}
    >
      {/* Overlay */}
      <div className="overlay">
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'rgba(255,58,242,0.9)', border: '3px solid #FFE600',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(255,58,242,0.8)',
        }}>
          <ZoomIn size={24} color="#fff" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '0.75rem',
          background: 'rgba(13,13,26,0.85)', borderRadius: 8,
          padding: '0.3rem 0.7rem',
          fontFamily: '"Outfit", sans-serif', fontWeight: 700,
          fontSize: '0.75rem', color: accent,
          border: `2px solid ${accent}`
        }}>{item.label}</div>
      </div>
    </div>
  )
}
