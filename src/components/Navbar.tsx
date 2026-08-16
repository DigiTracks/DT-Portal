import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/lab', label: 'Lab' },
  { to: '/contact', label: 'Contact' }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" onClick={close} aria-label="Digi Tracks home">
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={'end' in l ? l.end : false}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/products" className="btn btn-sm btn-primary nav-cta" onClick={close}>
            Explore Products
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className={`mobile-toggle${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} onClick={close}>
            {l.label}
          </Link>
        ))}
        <Link to="/products" onClick={close} className="btn btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
          Explore Products
        </Link>
      </nav>
    </header>
  )
}