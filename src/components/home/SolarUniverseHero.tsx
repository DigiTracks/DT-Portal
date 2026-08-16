import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'

// 10 Products mapped in 3 concentric celestial orbits:
// Tier 1: Core Apps (3)
// Tier 2: Operations & Specialized (4)
// Tier 3: Platform & DevSec (3)

interface OrbitItem {
  slug: string
  tier: 1 | 2 | 3
  baseAngle: number // degrees
  speed: number // rotation period in seconds
}

const CELESTIAL_SYSTEM: OrbitItem[] = [
  // Tier 1: Inner Orbit (radius: 170px)
  { slug: 'vedik', tier: 1, baseAngle: 0, speed: 45 },
  { slug: 'chronos', tier: 1, baseAngle: 120, speed: 45 },
  { slug: 'glowra', tier: 1, baseAngle: 240, speed: 45 },

  // Tier 2: Mid Orbit (radius: 290px)
  { slug: 'garix', tier: 2, baseAngle: 30, speed: 65 },
  { slug: 'hireez', tier: 2, baseAngle: 120, speed: 65 },
  { slug: 'vertex', tier: 2, baseAngle: 210, speed: 65 },
  { slug: 'top-10', tier: 2, baseAngle: 300, speed: 65 },

  // Tier 3: Outer Orbit (radius: 410px)
  { slug: 'unify', tier: 3, baseAngle: 45, speed: 85 },
  { slug: 'orion', tier: 3, baseAngle: 165, speed: 85 },
  { slug: 'orion-hunter', tier: 3, baseAngle: 285, speed: 85 }
]

export function SolarUniverseHero() {
  // 'idle': Big DigiTracks Central Core Button
  // 'spinning': Big Bang zoom-out + 2s hyper-spin
  // 'ready': Orbit settles into smooth constant revolution, user can select any product
  const [universeState, setUniverseState] = useState<'idle' | 'spinning' | 'ready'>('idle')
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  const handleLaunchUniverse = () => {
    if (universeState !== 'idle') return
    setUniverseState('spinning')
    setSelectedSlug(null)

    // Exact 2 seconds hyper-spin and expansion, then settle
    timerRef.current = window.setTimeout(() => {
      setUniverseState('ready')
    }, 2000)
  }

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation()
    setUniverseState('idle')
    setSelectedSlug(null)
    setHoveredSlug(null)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const selectedProduct = PRODUCTS.find((p) => p.slug === selectedSlug)

  return (
    <section className={`solar-hero-universe ${universeState}`}>
      {/* Background Soft Studio Ambient Glows */}
      <div className="universe-canvas-bg" aria-hidden="true">
        <div className="cosmic-nebula nebula-teal" />
        <div className="cosmic-nebula nebula-cyan" />
        <div className="cosmic-nebula nebula-indigo" />
      </div>

      {/* Top Studio Indicator Bar */}
      <div className="universe-header-strip">
        <div className="universe-tag">
          <span className="live-core-dot" />
          <span>DIGI TRACKS PRODUCT CATALOG</span>
          <span className="universe-vtag">v2026</span>
        </div>

        {universeState !== 'idle' && (
          <div className="universe-controls-strip">
            <button
              type="button"
              className="u-action-btn"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume planetary orbits' : 'Pause planetary orbits'}
            >
              {isPaused ? '▶ Resume Orbit' : '⏸ Pause Orbit'}
            </button>
            <button
              type="button"
              className="u-action-btn reset-btn"
              onClick={handleReset}
              aria-label="Collapse universe"
            >
              ↺ Reset Center
            </button>
          </div>
        )}
      </div>

      {/* Main Solar Stage Viewport */}
      <div className={`solar-viewport-stage ${isPaused ? 'motion-paused' : ''}`}>
        {/* Subtle Concentric Vector Orbit Paths */}
        <svg className="concentric-orbits-svg" viewBox="0 0 1200 1200" aria-hidden="true">
          <defs>
            <radialGradient id="sunCentralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#0284c7" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="600" cy="600" r="580" fill="url(#sunCentralGlow)" />
          <circle cx="600" cy="600" r="220" className="orbit-track-ring ring-1" />
          <circle cx="600" cy="600" r="370" className="orbit-track-ring ring-2" />
          <circle cx="600" cy="600" r="510" className="orbit-track-ring ring-3" />
        </svg>

        {/* Central Core DigiTracks Catalog Button */}
        <div
          className={`central-sun-core ${universeState}`}
          onClick={handleLaunchUniverse}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleLaunchUniverse()
            }
          }}
          aria-label="Click DigiTracks Products to launch solar system universe"
        >
          <div className="sun-inner-plate">
            <div className="sun-mark-shield">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="url(#sunMarkGrad)" />
                <defs>
                  <linearGradient id="sunMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <path d="M12 24L24 12L36 24L24 36Z" fill="#ffffff" fillOpacity="0.95" />
                <path d="M18 24L24 18L30 24L24 30Z" fill="url(#sunMarkGrad)" />
                <circle cx="24" cy="24" r="3" fill="#ffffff" />
              </svg>
            </div>

            <div className="sun-core-typography">
              <span className="sun-brand-main">
                <strong className="grad-text-core">DIGI</strong> TRACKS
              </span>
              <span className="sun-catalog-badge">
                {universeState === 'idle' ? 'PRODUCT CATALOG' : 'STUDIO CORE'}
              </span>
            </div>

            {universeState === 'idle' ? (
              <div className="sun-click-invitation">
                <span className="pulse-beacon" />
                <span>Click to Open Universe</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            ) : (
              <span className="sun-live-tag">10 Active Products</span>
            )}
          </div>

          <div className="sun-atmospheric-pulse" aria-hidden="true" />
        </div>

        {/* Orbiting Planetary Arms */}
        {CELESTIAL_SYSTEM.map((item) => {
          const product = PRODUCTS.find((p) => p.slug === item.slug)
          if (!product) return null

          const isSelected = selectedSlug === product.slug
          const isHovered = hoveredSlug === product.slug
          const armState = universeState === 'idle' ? 'collapsed' : universeState === 'spinning' ? 'expanding' : 'expanded'

          return (
            <div
              key={product.slug}
              className={`planet-orbit-arm tier-${item.tier} ${armState}`}
              style={{
                ['--base-angle' as string]: `${item.baseAngle}deg`,
                ['--orbit-speed' as string]: `${item.speed}s`,
                ['--pc' as string]: product.accent
              }}
            >
              <div
                className={`planet-node-holder ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSlug(product.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onClick={() => setSelectedSlug(isSelected ? null : product.slug)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${product.name}`}
              >
                <div className="planet-body" style={{ ['--pc' as string]: product.accent }}>
                  <img src={product.logo} alt={product.name} className="planet-icon-img" width="30" height="30" />
                  <span className="planet-glow-ring" />
                </div>

                {/* Always-visible Name Pill */}
                <div className="planet-name-badge">
                  <span className="p-badge-title">{product.name}</span>
                  <span className="p-badge-cat">{product.category}</span>
                </div>

                {/* Instant Hover Inspector Card */}
                <div className="planet-hover-card">
                  <div className="p-h-top">
                    <strong>{product.name}</strong>
                    <span className="p-h-cat">{product.category}</span>
                  </div>
                  <p className="p-h-tagline">{product.tagline}</p>
                  <div className="p-h-action">
                    <span>Click to inspect</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Selected Product Inspector Modal Drawer */}
      {selectedProduct && (
        <div className="universe-product-drawer" role="dialog" aria-modal="true">
          <div className="drawer-content-box" style={{ borderTop: `4px solid ${selectedProduct.accent}` }}>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setSelectedSlug(null)}
              aria-label="Close product inspector"
            >
              &times;
            </button>

            <div className="drawer-grid">
              <div className="drawer-left">
                <div className="d-logo-row">
                  <img src={selectedProduct.logo} alt="" className="drawer-logo" width="56" height="56" />
                  <div>
                    <span className="d-cat">{selectedProduct.category}</span>
                    <h2 className="d-title">{selectedProduct.name}</h2>
                    <span className="status-badge">{selectedProduct.status}</span>
                  </div>
                </div>
                <p className="d-tagline">{selectedProduct.tagline}</p>
                <p className="d-desc">{selectedProduct.description}</p>
              </div>

              <div className="drawer-right">
                <div className="d-problem-box">
                  <strong>The Operational Challenge:</strong>
                  <p>{selectedProduct.problem}</p>
                </div>

                <div className="d-caps-list">
                  <strong>Core Capabilities:</strong>
                  <div className="d-caps-tags">
                    {selectedProduct.capabilities.map((c) => (
                      <span key={c} className="platform-badge">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="d-btn-row">
                  <Link to={selectedProduct.route} className="btn btn-primary">
                    Open Full {selectedProduct.name} Product Page &rarr;
                  </Link>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedSlug(null)}
                  >
                    Keep Exploring Universe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
