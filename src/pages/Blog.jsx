import { Clock, User, Calendar } from 'lucide-react'
import blogsData from '../data/blogs.json'
import BlogCard from '../components/BlogCard'

const featured = blogsData.find(p => p.featured)
const rest      = blogsData.filter(p => !p.featured)

const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function Blog() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ─── HEADER ───────────────────────────────── */}
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #7B2FFF', position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          fontFamily: '"Bangers", cursive', opacity: 0.05,
          color: '#7B2FFF', whiteSpace: 'nowrap', lineHeight: 1
        }}>BLOG</div>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div aria-hidden="true" className="animate-float" style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✍️</div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff'
          }}>
            Blog &amp; <span style={{ color: '#7B2FFF' }}>Articles</span>
          </h1>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─────────────────────── */}
      {featured && (
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{
                fontFamily: '"Outfit", sans-serif', fontWeight: 800,
                fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#FF3AF2', border: '3px solid #FF3AF2', borderRadius: 9999,
                padding: '0.35rem 1rem', display: 'inline-block'
              }}>⭐ Featured Article</span>
            </div>

            <div style={{
              background: 'rgba(45,27,78,0.8)', border: '4px solid #FF3AF2',
              borderRadius: 28, overflow: 'hidden',
              boxShadow: '12px 12px 0 #FFE600, 24px 24px 0 #7B2FFF'
            }}>
              {/* Featured media */}
              <div className="media-block" style={{
                aspectRatio: '16/6', borderRadius: 0,
                borderWidth: 0, borderBottom: '4px solid #FF3AF2'
              }} />

              <div className="featured-inner" style={{ padding: '3rem' }}>
                <span className="badge badge-cat" style={{
                  background: 'rgba(255,58,242,0.2)', color: '#FF3AF2',
                  borderColor: '#FF3AF2', marginBottom: '1rem', display: 'inline-block'
                }}>{featured.category}</span>

                <h2 style={{
                  fontFamily: '"Outfit", sans-serif', fontWeight: 900,
                  fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', textTransform: 'uppercase',
                  color: '#fff', textShadow: '2px 2px 0 #FF3AF2, 4px 4px 0 #7B2FFF',
                  lineHeight: 1.1, marginBottom: '1.25rem'
                }}>{featured.title}</h2>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00F5D4', fontSize: '0.9rem', fontWeight: 700 }}>
                    <User size={16} aria-hidden="true" /> {featured.author}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>
                    <Calendar size={16} aria-hidden="true" /> {featured.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>
                    <Clock size={16} aria-hidden="true" /> {featured.readTime}
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.1rem', lineHeight: 1.85, maxWidth: 720, marginBottom: '2rem' }}>
                  {featured.excerpt}
                </p>

                <button className="btn-primary" style={{ fontSize: '0.9rem' }}>
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── ARTICLES GRID ────────────────────────── */}
      <section style={{ padding: '2rem 2rem 7rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: '1.8rem', textTransform: 'uppercase', color: '#fff',
            textShadow: '2px 2px 0 #00F5D4', marginBottom: '3rem'
          }}>More <span style={{ color: '#00F5D4' }}>Articles</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            {rest.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
          </div>
        </div>
      </section>

    </div>
  )
}
