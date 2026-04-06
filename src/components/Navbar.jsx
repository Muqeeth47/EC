import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/events',   label: 'Events' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/blog',     label: 'Blog' },
  { to: '/members',  label: 'Members' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <NavLink to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={24} strokeWidth={3} style={{ color: '#FF3AF2' }} aria-hidden="true" />
          WordCraft EC
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X size={26} color="#FF3AF2" />
            : <>
                <span /><span /><span />
              </>
          }
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
