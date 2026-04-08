import { NavLink } from 'react-router-dom'
import { BookOpen, Camera, MessageCircle, Globe, Mail, Sparkles } from 'lucide-react'

const links = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/events',  label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog',    label: 'Blog' },
  { to: '/members', label: 'Members' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { icon: Camera,        label: 'Instagram' },
  { icon: MessageCircle, label: 'Twitter' },
  { icon: Globe,         label: 'Facebook' },
  { icon: Mail,          label: 'Email' },
]

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative bg text */}
      <div style={{
        position: 'absolute', bottom: '-20px', left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12rem', fontFamily: '"Bangers", cursive',
        opacity: 0.04, whiteSpace: 'nowrap', pointerEvents: 'none',
        color: '#FF3AF2', letterSpacing: '0.05em', lineHeight: 1
      }} aria-hidden="true">WORDCRAFT</div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <BookOpen size={28} strokeWidth={3} style={{ color: '#FF3AF2' }} aria-hidden="true" />
              <span style={{
                fontFamily: '"Bangers", cursive', fontSize: '1.6rem', letterSpacing: '0.05em',
                background: 'linear-gradient(90deg, #FF3AF2, #00F5D4, #FFE600)',
                backgroundSize: '200%', WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>WordCraft EC</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Cultivating literary voices, one word at a time. The English Club of Crescent College.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {socials.map(({ icon: Icon, label }, i) => (
                <button
                  key={label}
                  aria-label={label}
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(45,27,78,0.7)',
                    border: `3px solid ${accentColors[i % accentColors.length]}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.25s ease',
                    color: accentColors[i % accentColors.length]
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = accentColors[i % accentColors.length]
                    e.currentTarget.style.color = '#0D0D1A'
                    e.currentTarget.style.transform = 'scale(1.15) rotate(8deg)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(45,27,78,0.7)'
                    e.currentTarget.style.color = accentColors[i % accentColors.length]
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                  }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#00F5D4', marginBottom: '1.25rem'
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {links.map((l, i) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    style={({ isActive }) => ({
                      color: isActive ? '#FF3AF2' : 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.4rem'
                    })}
                    onMouseEnter={e => e.currentTarget.style.color = accentColors[i % accentColors.length]}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <Sparkles size={12} aria-hidden="true" /> {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#FFE600', marginBottom: '1.25rem'
            }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
              <p>📧 wordcraft@crescentcollege.edu</p>
              <p>📸 @wordcraft_ec</p>
              <p>📍 Room 204, Arts Block<br />Crescent College, Lahore</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '3px dashed rgba(255,58,242,0.3)',
            paddingTop: '1.5rem',
            display: 'flex', flexWrap: 'wrap', gap: '1rem',
            justifyContent: 'space-between', alignItems: 'center'
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
            © 2025 WordCraft English Club · Crescent College · All rights reserved
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontFamily: '"Outfit", sans-serif', fontWeight: 700, letterSpacing: '0.08em' }}>
            Made with ✨ and too many metaphors
          </p>
        </div>
      </div>
    </footer>
  )
}
