import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Mic, Feather, Star, Zap, Heart } from 'lucide-react'
import eventsData from '../data/events.json'
import EventCard from '../components/EventCard'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']
const upcomingEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 3)

const floatingShapes = [
  { emoji: '✨', top: '12%', left: '5%', anim: 'animate-float',     size: '2.5rem', delay: '0s' },
  { emoji: '📚', top: '20%', right: '6%', anim: 'animate-wiggle',   size: '3rem',   delay: '0.5s' },
  { emoji: '🖊️', top: '55%', left: '3%', anim: 'animate-bounce-sub', size: '2rem', delay: '1s' },
  { emoji: '💫', bottom:'20%', right:'4%', anim: 'animate-float-rev', size: '2.5rem', delay: '0.3s' },
  { emoji: '🎭', top: '75%', left: '7%', anim: 'animate-wiggle',    size: '2rem',   delay: '0.8s' },
  { emoji: '⚡', top: '35%', right:'3%', anim: 'animate-bounce-sub', size: '1.8rem', delay: '0.2s' },
]

const galleryItems = [
  { id: 1, color: '#FF3AF2', aspect: '1/1' },
  { id: 2, color: '#00F5D4', aspect: '1/1' },
  { id: 3, color: '#FFE600', aspect: '1/1' },
  { id: 4, color: '#FF6B35', aspect: '1/1' },
  { id: 5, color: '#7B2FFF', aspect: '1/1' },
  { id: 6, color: '#FF3AF2', aspect: '1/1' },
]

export default function Home() {
  return (
    <div>
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="hero-section section-pattern-1" style={{ position: 'relative' }}>
        {/* Massive bg text */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(6rem, 18vw, 18rem)',
          fontFamily: '"Bangers", cursive', opacity: 0.05,
          color: '#FF3AF2', whiteSpace: 'nowrap', letterSpacing: '0.05em',
          pointerEvents: 'none', zIndex: 0, lineHeight: 1
        }}>WORDS</div>

        {/* Floating shapes */}
        {floatingShapes.map((s, i) => (
          <div key={i} aria-hidden="true" className={`${s.anim}${i > 2 ? ' floating-shape-hide' : ''}`} style={{
            position: 'absolute', top: s.top, bottom: s.bottom,
            left: s.left, right: s.right, fontSize: s.size,
            animationDelay: s.delay, zIndex: 2, pointerEvents: 'none'
          }}>{s.emoji}</div>
        ))}

        {/* Hero content */}
        <div style={{ textAlign: 'center', maxWidth: 860, padding: '0 2rem', position: 'relative', zIndex: 5 }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 800,
              fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#00F5D4', border: '3px dashed #00F5D4', borderRadius: 9999,
              padding: '0.4rem 1.2rem', display: 'inline-block'
            }}>✦ College English Club · Est. 2018 ✦</span>
          </div>

          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            textTransform: 'uppercase', lineHeight: 0.95,
            marginBottom: '1.5rem', color: '#fff'
          }}>
            <span className="grad-text">Word</span>
            <span style={{ color: '#FFE600' }}>Craft</span>
            <br />
            <span style={{ fontSize: '55%', color: 'rgba(255,255,255,0.85)' }}>English Club</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'rgba(255,255,255,0.8)',
            maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.7
          }}>
            Where literature ignites imagination. A community of writers, readers, debaters, and storytellers rewriting what it means to belong.
          </p>

          <div className="btn-group-mobile" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/events"><button className="btn-primary">Explore Events <ArrowRight size={18} /></button></Link>
            <Link to="/about"><button className="btn-secondary">About the Club</button></Link>
          </div>
        </div>

        {/* Hero media block */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #FF3AF2, #00F5D4, #FFE600, #FF6B35, #7B2FFF)',
          zIndex: 10
        }} />
      </section>

      {/* ─── HERO MEDIA BLOCK ─────────────────────── */}
      <section style={{ padding: '4rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div className="media-block media-16-9" style={{
          borderRadius: 24,
          borderColor: '#00F5D4',
          boxShadow: '12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2',
          maxHeight: 520,
          overflow: 'hidden'
        }} />
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────── */}
      <section className="section-pattern-2" style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="about-2col" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '4rem', marginBottom: '1rem' }}>📖</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase', color: '#fff',
              marginBottom: '1.5rem', lineHeight: 1
            }}>
              About The <span className="grad-text">Club</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. WordCraft was born from a shared obsession with language — its power to move, to challenge, and to transform the ordinary into the extraordinary.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>
              We host debates, poetry slams, author talks, creative writing workshops, and more — creating a vibrant literary ecosystem in the heart of Crescent College.
            </p>
            <Link to="/about"><button className="btn-primary">Discover More <ArrowRight size={18} /></button></Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            {[
              { icon: BookOpen, label: 'Reading Circles', color: '#FF3AF2' },
              { icon: Mic,      label: 'Spoken Word',     color: '#00F5D4' },
              { icon: Users,    label: 'Debates',          color: '#FFE600' },
              { icon: Feather,  label: 'Creative Writing', color: '#FF6B35' },
            ].map(({ icon: Icon, label, color }, i) => (
              <div key={i} style={{
                background: 'rgba(45,27,78,0.7)',
                border: `4px solid ${color}`,
                borderRadius: 20,
                padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
                alignItems: 'center', textAlign: 'center',
                boxShadow: `6px 6px 0 ${accentColors[(i+1)%5]}`,
                transform: i % 2 === 1 ? 'translateY(16px)' : 'none',
                transition: 'all 0.3s ease'
              }}>
                <Icon size={36} strokeWidth={2.5} color={color} aria-hidden="true" />
                <span style={{
                  fontFamily: '"Outfit", sans-serif', fontWeight: 800,
                  fontSize: '0.85rem', letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#fff'
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────── */}
      <div style={{ overflow: 'hidden', borderTop: '4px solid #FF3AF2', borderBottom: '4px solid #FF3AF2', padding: '0.75rem 0', background: 'rgba(255,58,242,0.08)' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(6).fill(['✦ Spoken Word', '✦ Debate', '✦ Creative Writing', '✦ Poetry', '✦ Literary Analysis', '✦ Storytelling']).flat().map((t, i) => (
            <span key={i} style={{
              fontFamily: '"Bangers", cursive', fontSize: '1.4rem',
              letterSpacing: '0.05em', color: accentColors[i % 5]
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ─── UPCOMING EVENTS ──────────────────────── */}
      <section style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div aria-hidden="true" className="animate-bounce-sub" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📅</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase',
              color: '#fff', marginBottom: '0.75rem'
            }}>Upcoming <span style={{ color: '#FFE600' }}>Events</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto' }}>
              Don't miss what's coming — mark your calendar and show up.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {upcomingEvents.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/events"><button className="btn-secondary">View All Events <ArrowRight size={16} /></button></Link>
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ──────────────────────── */}
      <section style={{ padding: '7rem 2rem', background: 'rgba(45,27,78,0.25)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🖼️</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', color: '#fff',
            }}>Gallery <span className="grad-text">Preview</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {galleryItems.map((item, i) => (
              <div key={item.id} className="gallery-item" style={{
                aspectRatio: '1/1', background: '#000',
                borderColor: item.color, borderRadius: 16,
                boxShadow: `6px 6px 0 ${accentColors[(i+1)%5]}`,
                transform: i % 2 === 1 ? 'rotate(1.5deg)' : i % 3 === 2 ? 'rotate(-1deg)' : 'none',
                transition: 'all 0.3s ease'
              }}>
                <div className="overlay">
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'rgba(255,58,242,0.9)', border: '3px solid #FFE600',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Star size={20} color="#fff" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/gallery"><button className="btn-outline">Full Gallery <ArrowRight size={16} /></button></Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
          {[
            { num: '150+', label: 'Active Members', icon: Users, color: '#FF3AF2' },
            { num: '6+',   label: 'Years Running',  icon: Star,  color: '#00F5D4' },
            { num: '40+',  label: 'Events Hosted',  icon: Zap,   color: '#FFE600' },
            { num: '∞',    label: 'Stories Told',   icon: Heart, color: '#FF6B35' },
          ].map(({ num, label, icon: Icon, color }, i) => (
            <div key={i} style={{
              background: 'rgba(45,27,78,0.7)',
              border: `4px solid ${color}`, borderRadius: 20,
              padding: '2rem 1rem', textAlign: 'center',
              boxShadow: `8px 8px 0 ${accentColors[(i+1)%5]}`,
              transform: i % 2 === 1 ? 'translateY(12px)' : 'none',
              transition: 'all 0.3s ease'
            }}>
              <Icon size={32} color={color} strokeWidth={2.5} style={{ marginBottom: '0.75rem' }} aria-hidden="true" />
              <div style={{
                fontFamily: '"Bangers", cursive', fontSize: '3.5rem',
                color: '#fff', textShadow: `3px 3px 0 ${color}`, lineHeight: 1
              }}>{num}</div>
              <div style={{
                fontFamily: '"Outfit", sans-serif', fontWeight: 700,
                fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem'
              }}>{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
