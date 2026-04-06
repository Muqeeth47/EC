import { Link } from 'react-router-dom'
import { Target, Eye, BookOpen, Mic, Users, Feather, ArrowRight } from 'lucide-react'
import membersData from '../data/members.json'
import MemberCard from '../components/MemberCard'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

const whyJoin = [
  { icon: BookOpen, title: 'Literary Growth',   color: '#FF3AF2', text: 'Sharpen your literary analysis, expand your reading horizons, and develop a critical eye through curated workshops and reading circles.' },
  { icon: Mic,      title: 'Stage Confidence',  color: '#00F5D4', text: 'From spoken word to debate, you\'ll find your voice in front of an audience and discover the performer hiding in every writer.' },
  { icon: Users,    title: 'Creative Community', color: '#FFE600', text: 'Join a tribe of like-minded souls who believe words change worlds. Collaborate, critique, and co-create in a judgment-free space.' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ─── HERO BANNER ──────────────────────────── */}
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #FF3AF2', position: 'relative', overflow: 'hidden'
      }}>
        {/* large bg text */}
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          fontFamily: '"Bangers", cursive', opacity: 0.05,
          color: '#00F5D4', whiteSpace: 'nowrap', letterSpacing: '0.05em', lineHeight: 1
        }}>ABOUT</div>

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 800,
              fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#00F5D4', border: '3px dashed #00F5D4', borderRadius: 9999,
              padding: '0.35rem 1rem', display: 'inline-block', marginBottom: '1.5rem'
            }}>✦ Our Story ✦</span>
          </div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff', maxWidth: 800
          }}>
            About <span className="grad-text">WordCraft</span><br />English Club
          </h1>
        </div>
      </section>

      {/* ─── CLUB HISTORY ─────────────────────────── */}
      <section className="section-pattern-1" style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase',
              color: '#fff', marginBottom: '1.5rem'
            }}>Our <span style={{ color: '#FF3AF2' }}>History</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. WordCraft English Club was founded in 2018 by a group of literature-obsessed students who wanted more than lectures — they wanted a living, breathing space where language could be explored, twisted, celebrated, and wielded with intention. What began as a small reading circle of eight students has grown into the most active cultural club on campus.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              Over six years, we have hosted over 40 events ranging from intimate author talks to campus-wide debate tournaments. Our alumni have gone on to careers in journalism, screenwriting, academia, and public advocacy — carrying the WordCraft spirit with them wherever their words take them.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="media-block" style={{
              aspectRatio: '4/3', borderRadius: 24,
              borderColor: '#FFE600',
              boxShadow: '12px 12px 0 #FF3AF2, 24px 24px 0 #7B2FFF'
            }} />
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────── */}
      <section style={{ padding: '7rem 2rem', background: 'rgba(45,27,78,0.2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', color: '#fff'
            }}>Mission &amp; <span style={{ color: '#00F5D4' }}>Vision</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Mission */}
            <div style={{
              background: 'rgba(45,27,78,0.8)', border: '4px solid #FF3AF2',
              borderRadius: 24, padding: '3rem',
              boxShadow: '8px 8px 0 #FFE600, 16px 16px 0 #7B2FFF',
              position: 'relative', overflow: 'hidden'
            }}>
              <div aria-hidden="true" style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Target size={28} color="#FF3AF2" strokeWidth={2.5} aria-hidden="true" />
                <h3 style={{
                  fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                  fontSize: '1.5rem', textTransform: 'uppercase', color: '#FF3AF2',
                  textShadow: '2px 2px 0 #7B2FFF'
                }}>Our Mission</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, fontSize: '1rem' }}>
                To cultivate a dynamic literary community that empowers students to find, develop, and celebrate their unique voices through the written and spoken word. We believe every student has a story worth telling — and we exist to help them tell it boldly.
              </p>
            </div>

            {/* Vision */}
            <div style={{
              background: 'rgba(45,27,78,0.8)', border: '4px dashed #00F5D4',
              borderRadius: 24, padding: '3rem',
              boxShadow: '8px 8px 0 #FF6B35, 16px 16px 0 #FF3AF2',
              transform: 'translateY(16px)'
            }}>
              <div aria-hidden="true" style={{ fontSize: '4rem', marginBottom: '1rem' }}>👁️</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Eye size={28} color="#00F5D4" strokeWidth={2.5} aria-hidden="true" />
                <h3 style={{
                  fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                  fontSize: '1.5rem', textTransform: 'uppercase', color: '#00F5D4',
                  textShadow: '2px 2px 0 #FF3AF2'
                }}>Our Vision</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.85, fontSize: '1rem' }}>
                To become the premier literary society in the region — a hub where aspiring writers, orators, and thinkers converge to shape the cultural conversation of our time. We envision a campus where literature is not just studied, but lived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACULTY ADVISOR ──────────────────────── */}
      <section style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <div aria-hidden="true" className="animate-bounce-sub" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎓</div>
          <h2 className="text-shadow-md" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase',
            color: '#fff', marginBottom: '3rem'
          }}>Faculty <span style={{ color: '#FFE600' }}>Advisor</span></h2>

          <div style={{
            background: 'rgba(45,27,78,0.75)',
            border: '4px solid #FFE600',
            borderRadius: 24,
            padding: '3rem 2rem',
            maxWidth: 380,
            margin: '0 auto',
            boxShadow: '12px 12px 0 #FF3AF2, 24px 24px 0 #00F5D4',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem'
          }}>
            <div className="media-block media-photo" style={{
              width: 140, height: 140, borderRadius: '50%',
              borderColor: '#FF3AF2', borderWidth: 4, aspectRatio: 'auto',
              flexShrink: 0,
              boxShadow: '0 0 30px rgba(255,230,0,0.4)'
            }} />
            <div>
              <h3 style={{
                fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                fontSize: '1.4rem', textTransform: 'uppercase', color: '#fff',
                textShadow: '2px 2px 0 #FFE600'
              }}>Dr. Samina Riaz</h3>
              <p style={{
                fontFamily: '"Outfit", sans-serif', fontWeight: 700,
                fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#FFE600', marginTop: '0.35rem'
              }}>Associate Professor</p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                Department of English Language & Literature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFICE BEARERS ───────────────────────── */}
      <section style={{ padding: '7rem 2rem', background: 'rgba(45,27,78,0.2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏆</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', color: '#fff',
            }}>Office <span style={{ color: '#FF3AF2' }}>Bearers</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            {membersData.bearers.map((m, i) => <MemberCard key={m.id} member={m} index={i} size="lg" />)}
          </div>
        </div>
      </section>

      {/* ─── WHY JOIN ─────────────────────────────── */}
      <section style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div aria-hidden="true" className="animate-float" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚀</div>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', color: '#fff',
            }}>Why <span className="grad-text">Join Us?</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {whyJoin.map(({ icon: Icon, title, color, text }, i) => (
              <div key={i} style={{
                background: 'rgba(45,27,78,0.75)',
                border: `4px ${i === 1 ? 'dashed' : 'solid'} ${color}`,
                borderRadius: 24, padding: '2.5rem',
                boxShadow: `8px 8px 0 ${accentColors[(i+1)%5]}, 16px 16px 0 ${accentColors[(i+2)%5]}`,
                transform: i % 2 === 1 ? 'translateY(16px)' : 'none',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '1rem'
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `${color}22`, border: `4px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 20px ${color}55`
                }}>
                  <Icon size={30} color={color} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                  fontSize: '1.3rem', textTransform: 'uppercase', color: '#fff',
                  textShadow: `2px 2px 0 ${color}`
                }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '0.95rem' }}>{text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact"><button className="btn-primary">Join WordCraft <ArrowRight size={18} /></button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
