const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function MemberCard({ member, index = 0, size = 'md' }) {
  const accent = accentColors[index % accentColors.length]
  const accentNext = accentColors[(index + 1) % accentColors.length]
  const isLg = size === 'lg'

  return (
    <div
      style={{
        background: 'rgba(45,27,78,0.75)',
        border: `4px solid ${accent}`,
        borderRadius: 24,
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
        boxShadow: `6px 6px 0 ${accentNext}, 12px 12px 0 ${accentColors[(index + 2) % accentColors.length]}`,
        transition: 'all 0.3s ease',
        transform: index % 2 === 1 ? 'translateY(10px)' : 'none',
        textAlign: 'center',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) rotate(1deg)'
        e.currentTarget.style.boxShadow = `10px 10px 0 ${accentNext}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = index % 2 === 1 ? 'translateY(10px)' : 'none'
        e.currentTarget.style.boxShadow = `6px 6px 0 ${accentNext}, 12px 12px 0 ${accentColors[(index + 2) % accentColors.length]}`
      }}
    >
      {/* Photo block */}
      <div
        className="media-block"
        style={{
          width: isLg ? 120 : 96,
          height: isLg ? 120 : 96,
          borderRadius: '50%',
          borderColor: accentNext,
          borderWidth: 4,
          flexShrink: 0,
          boxShadow: `0 0 20px ${accent}60`,
        }}
      />

      <div>
        <h3 style={{
          fontFamily: '"Outfit", sans-serif', fontWeight: 800,
          fontSize: isLg ? '1.15rem' : '1rem',
          color: '#fff', textShadow: `1px 1px 0 ${accent}`,
          textTransform: 'uppercase', letterSpacing: '-0.01em'
        }}>{member.name}</h3>

        {member.role && (
          <p style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 700,
            fontSize: '0.78rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: accent, marginTop: '0.25rem'
          }}>{member.role}</p>
        )}

        {member.batch && (
          <span className="badge" style={{
            background: `${accent}22`, color: accent, borderColor: accent,
            marginTop: '0.5rem', fontSize: '0.7rem'
          }}>
            Batch {member.batch}
          </span>
        )}
      </div>
    </div>
  )
}
