import { useState } from 'react'
import galleryData from '../data/gallery.json'
import GalleryBlock from '../components/GalleryBlock'

const categories = ['All', 'Events', 'Activities', 'Competitions']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter)

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ─── HEADER ───────────────────────────────── */}
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #FFE600', position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          fontFamily: '"Bangers", cursive', opacity: 0.05,
          color: '#FFE600', whiteSpace: 'nowrap', lineHeight: 1
        }}>GALLERY</div>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div aria-hidden="true" className="animate-wiggle" style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🖼️</div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff'
          }}>
            Photo <span style={{ color: '#FFE600' }}>Gallery</span>
          </h1>
        </div>
      </section>

      {/* ─── FILTER BAR ───────────────────────────── */}
      <section style={{ padding: '3rem 2rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              ✦ {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── MASONRY/GRID ─────────────────────────── */}
      <section style={{ padding: '4rem 2rem 7rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Responsive columns grid with mixed heights */}
          <div
            className="gallery-columns"
            style={{
              columns: 3,
              columnGap: '1.5rem',
              WebkitColumns: 3,
            }}
          >
            {filtered.map((item, i) => (
              <div key={item.id} style={{ breakInside: 'avoid', marginBottom: '1.5rem' }}>
                <GalleryBlock item={item} index={i} />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)' }}>
              <p>No gallery items found.</p>
            </div>
          )}
        </div>
      </section>


    </div>
  )
}
