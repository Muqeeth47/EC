import { useState } from 'react'
import { Mail, Camera, MapPin, Send, Phone } from 'lucide-react'

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Header */}
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #00F5D4', position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(4rem, 14vw, 12rem)', fontFamily: '"Bangers", cursive',
          opacity: 0.05, color: '#00F5D4', whiteSpace: 'nowrap', lineHeight: 1
        }}>CONTACT</div>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✉️</div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff'
          }}>Get In <span style={{ color: '#00F5D4' }}>Touch</span></h1>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '6rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left: contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div aria-hidden="true" className="animate-float" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📡</div>
              <h2 className="text-shadow-sm" style={{
                fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                fontSize: '2rem', textTransform: 'uppercase', color: '#fff', marginBottom: '0.5rem'
              }}>Contact <span style={{ color: '#FF3AF2' }}>Info</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Reach out — whether you want to join, collaborate, or just say hello.
              </p>
            </div>

            {[
              { Icon: Mail,      label: 'Email',     value: 'wordcraft@crescentcollege.edu', color: '#FF3AF2' },
              { Icon: Camera,    label: 'Instagram', value: '@wordcraft_ec',                 color: '#00F5D4' },
              { Icon: Phone,     label: 'Phone',     value: '+92 42 111 000 000',            color: '#FFE600' },
              { Icon: MapPin,    label: 'Address',   value: 'Room 204, Arts Block\nCrescent College, Lahore',  color: '#FF6B35' },
            ].map(({ Icon, label, value, color }, i) => (
              <div key={label} style={{
                background: 'rgba(45,27,78,0.7)', border: `4px solid ${color}`,
                borderRadius: 20, padding: '1.5rem',
                boxShadow: `6px 6px 0 ${accentColors[(i+1)%5]}`,
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                  background: `${color}22`, border: `3px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon size={20} color={color} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontFamily: '"Outfit",sans-serif', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: '0.25rem' }}>
                    {label}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', whiteSpace: 'pre-line' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div style={{
            background: 'rgba(45,27,78,0.75)', border: '4px solid #FF3AF2',
            borderRadius: 28, padding: '3rem',
            boxShadow: '12px 12px 0 #FFE600, 24px 24px 0 #7B2FFF'
          }}>
            <h2 style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: '1.8rem', textTransform: 'uppercase', color: '#fff',
              textShadow: '2px 2px 0 #FF3AF2', marginBottom: '2rem'
            }}>Send a <span style={{ color: '#FF3AF2' }}>Message</span></h2>

            {sent && (
              <div style={{
                background: 'rgba(0,245,212,0.15)', border: '3px solid #00F5D4',
                borderRadius: 12, padding: '1rem 1.5rem', marginBottom: '1.5rem',
                color: '#00F5D4', fontFamily: '"Outfit",sans-serif', fontWeight: 700,
                fontSize: '0.95rem'
              }}>
                ✓ Message sent! We'll get back to you soon. ✨
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" className="form-input" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input" placeholder="Tell us what's on your mind…" value={form.message} onChange={handleChange} required rows={5} />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding: '0 2rem 7rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h3 style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 800,
            fontSize: '1.2rem', textTransform: 'uppercase', color: '#FFE600',
            letterSpacing: '0.1em', marginBottom: '1.5rem',
            textShadow: '2px 2px 0 #FF3AF2'
          }}>📍 Find Us On The Map</h3>
          <div className="media-block media-map" style={{
            borderRadius: 20, borderColor: '#FFE600',
            boxShadow: '8px 8px 0 #FF3AF2, 16px 16px 0 #7B2FFF',
            minHeight: 220
          }} />
        </div>
      </section>
    </div>
  )
}
