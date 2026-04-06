import { useState } from 'react'
import membersData from '../data/members.json'
import MemberCard from '../components/MemberCard'

const batches = ['All', '2023', '2024', '2025']
const accentColors = ['#FF3AF2', '#00F5D4', '#FFE600', '#FF6B35', '#7B2FFF']

export default function Members() {
  const [batch, setBatch] = useState('All')

  const filteredGeneral = batch === 'All'
    ? membersData.general
    : membersData.general.filter(m => m.batch === batch)

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        padding: '5rem 2rem', background: 'rgba(45,27,78,0.3)',
        borderBottom: '4px solid #FF6B35', position: 'relative', overflow: 'hidden'
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(4rem, 14vw, 12rem)', fontFamily: '"Bangers", cursive',
          opacity: 0.05, color: '#FF6B35', whiteSpace: 'nowrap', lineHeight: 1
        }}>MEMBERS</div>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div aria-hidden="true" className="animate-bounce-sub" style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>👥</div>
          <h1 className="text-shadow-lg" style={{
            fontFamily: '"Outfit", sans-serif', fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff'
          }}>Our <span style={{ color: '#FF6B35' }}>Members</span></h1>
        </div>
      </section>

      {/* Batch filter */}
      <section style={{ padding: '3rem 2rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {batches.map(b => (
            <button key={b} className={`filter-btn ${batch === b ? 'active' : ''}`} onClick={() => setBatch(b)}>
              {b === 'All' ? '✦ All Batches' : `✦ Batch ${b}`}
            </button>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section style={{ padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span aria-hidden="true" className="animate-wiggle" style={{ fontSize: '2rem' }}>⭐</span>
            <h2 className="text-shadow-md" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', color: '#fff'
            }}>Core <span style={{ color: '#FF3AF2' }}>Team</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            {membersData.core.map((m, i) => <MemberCard key={m.id} member={m} index={i} size="lg" />)}
          </div>
        </div>
      </section>

      {/* General Members */}
      <section style={{ padding: '2rem 2rem 7rem', background: 'rgba(45,27,78,0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span aria-hidden="true" className="animate-bounce-sub" style={{ fontSize: '2rem' }}>🌟</span>
            <h2 className="text-shadow-sm" style={{
              fontFamily: '"Outfit", sans-serif', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', color: '#fff'
            }}>General <span style={{ color: '#00F5D4' }}>Members</span>
              <span style={{ fontFamily: '"Outfit"', fontWeight: 700, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', marginLeft: '1rem' }}>
                ({filteredGeneral.length})
              </span>
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="members-table">
              <thead>
                <tr><th>#</th><th>Name</th><th>Batch</th><th>Status</th></tr>
              </thead>
              <tbody>
                {filteredGeneral.map((m, i) => (
                  <tr key={m.id}>
                    <td style={{ color: accentColors[i % 5], fontWeight: 800, fontFamily: '"Outfit",sans-serif' }}>{String(i + 1).padStart(2, '0')}</td>
                    <td style={{ fontWeight: 600, color: '#fff' }}>{m.name}</td>
                    <td><span className="badge" style={{ background: `${accentColors[i % 5]}20`, color: accentColors[i % 5], borderColor: accentColors[i % 5] }}>{m.batch}</span></td>
                    <td><span className="badge badge-live">Active</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredGeneral.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.4)' }}>No members found.</div>
          )}
        </div>
      </section>
    </div>
  )
}
