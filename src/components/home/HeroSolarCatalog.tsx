import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'

// 10 Products mapped into 3 cosmic orbital tiers for cinematic expansion:
// Tier 1: Core Apps (3 products, inner orbit radius: 220px)
// Tier 2: Operations & Platforms (4 products, middle orbit radius: 360px)
// Tier 3: Platform & DevSec (3 products, outer orbit radius: 490px)

interface OrbitDef {
  slug: string
  tier: number
  angle: number // base initial angle in degrees
  speed: number // rotation speed in seconds per revolution
}

const ORBIT_STRUCTURE: OrbitDef[] = [
  // Tier 1: Inner (radius: 200px - 220px)
  { slug: 'vedik', tier: 1, angle: 0, speed: 40 },
  { slug: 'chronos', tier: 1, angle: 120, speed: 40 },
  { slug: 'glowra', tier: 1, angle: 240, speed: 40 },

  // Tier 2: Mid (radius: 340px - 370px)
  { slug: 'garix', tier: 2, angle: 30, speed: 58 },
  { slug: 'hireez', tier: 2, angle: 120, speed: 58 },
  { slug: 'vertex', tier: 2, angle: 210, speed: 58 },
  { slug: 'top-10', tier: 2, angle: 300, speed: 58 },

  // Tier 3: Outer (radius: 460px - 500px)
  { slug: 'unify', tier: 3, angle: 45, speed: 76 },
  { slug: 'orion', tier: 3, angle: 165, speed: 76 },
  { slug: 'orion-hunter', tier: 3, angle: 285, speed: 76 }
]

export function HeroSolarCatalog() {
  // States:
  // 'collapsed' → Digi Tracks Core in Center ("Click to Open Product Universe")
  // 'expanding' → Big Bang zoom-out expansion + 2s hyper-spin animation
  // 'expanded'  → Steady, elegant 60fps orbital revolution with interactive product cards
  const [stage, setStage] = useState<'collapsed' | 'expanding' | 'expanded'>('collapsed')
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null)
  const [hoveredProductSlug, setHoveredProductSlug] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'industry' | 'platform' | 'developer'>('all')
  const [isPaused, setIsPaused] = useState(false)
  const spinTimerRef = useRef<number | null>(null)

  const handleOpenUniverse = () => {
    if (stage !== 'collapsed') return
    setStage('expanding')

    // 2-second hyper-spin and zoom-out flourish
    spinTimerRef.current = window.setTimeout(() => {
      setStage('expanded')
    }, 2000)
  }

  const handleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation()
    setStage('collapsed')
    setSelectedProductSlug(null)
  }

  useEffect(() => {
    return () => {
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current)
    }
  }, [])

  const selectedProduct = PRODUCTS.find((p) => p.slug === selectedProductSlug)

  return (
    <section className={`solar-hero-universe ${stage}`}>
      {/* Dynamic Cosmic Background */}
      <div className="universe-canvas-bg" aria-hidden="true">
        <div className="cosmic-grid-overlay" />
        <div className="cosmic-nebula nebula-teal" />
        <div className="cosmic-nebula nebula-cyan" />
        <div className="cosmic-nebula nebula-indigo" />
      </div>

      {/* Top Floating Studio Header */}
      <div className="universe-header-strip">
        <div className="universe-tag">
          <span className="live-core-dot" />
          <span>DIGI TRACKS PRODUCT CATALOG</span>
          <span className="universe-vtag">v2026</span>
        </div>

        {stage === 'expanded' && (
          <div className="universe-category-tabs">
            <button
              className={`u-cat-btn ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              All 10 Products
            </button>
            <button
              className={`u-cat-btn ${categoryFilter === 'industry' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('industry')}
            >
              Industry Apps (6)
            </button>
            <button
              className={`u-cat-btn ${categoryFilter === 'platform' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('platform')}
            >
              Platforms (2)
            </button>
            <button
              className={`u-cat-btn ${categoryFilter === 'developer' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('developer')}
            >
              Dev & Security (2)
            </button>
          </div>
        )}

        {stage !== 'collapsed' && (
          <div className="universe-controls-strip">
            <button
              type="button"
              className="u-action-btn"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume planetary orbit' : 'Pause planetary orbit'}
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
            <button
              type="button"
              className="u-action-btn reset-btn"
              onClick={handleCollapse}
              aria-label="Reset to central catalog"
            >
              ↺ Reset Center
            </button>
          </div>
        )}
      </div>

      {/* Main Solar Stage Container */}
      <div className={`solar-viewport-stage ${isPaused ? 'motion-paused' : ''}`}>
        {/* Concentric SVG Orbital Guide Rings */}
        <svg className="concentric-orbits-svg" viewBox="0 0 1200 1200" aria-hidden="true">
          <defs>
            <radialGradient id="sunCentralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#0284c7" stopOpacity="0.06" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="600" cy="600" r="580" fill="url(#sunCentralGlow)" />

          {/* 3 Rings */}
          <circle cx="600" cy="600" r="220" className="orbit-track-ring ring-1" />
          <circle cx="600" cy="600" r="370" className="orbit-track-ring ring-2" />
          <circle cx="600" cy="600" r="510" className="orbit-track-ring ring-3" />
        </svg>

        {/* Central Core: Digi Tracks Product Catalog Sun */}
        <div
          className={`central-sun-core ${stage}`}
          onClick={handleOpenUniverse}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleOpenUniverse()
            }
          }}
          aria-label="Click to open Digi Tracks Solar Product Catalog"
        >
          <div className="sun-inner-plate">
            <div className="sun-mark-shield">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="url(#coreGrad)" />
                <defs>
                  <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <path d="M12 24L24 12L36 24L24 36Z" fill="#ffffff" fillOpacity="0.95" />
                <path d="M18 24L24 18L30 24L24 30Z" fill="url(#coreGrad)" />
                <circle cx="24" cy="24" r="3" fill="#ffffff" />
              </svg>
            </div>

            <div className="sun-core-typography">
              <span className="sun-brand-main">
                <strong className="grad-text-core">DIGI</strong> TRACKS
              </span>
              <span className="sun-catalog-badge">
                {stage === 'collapsed' ? 'PRODUCT CATALOG' : 'STUDIO CORE'}
              </span>
            </div>

            {stage === 'collapsed' ? (
              <div className="sun-click-invitation">
                <span className="pulse-beacon" />
                <span className="invitation-text">Click to Launch Universe</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l4 4-4 4M8 12h8" />
                </svg>
              </div>
            ) : (
              <span className="sun-live-tag">10 Active Products</span>
            )}
          </div>

          <div className="sun-atmospheric-pulse" aria-hidden="true" />
          <div className="sun-corona-waves" aria-hidden="true" />
        </div>

        {/* Orbiting Product Planets */}
        {ORBIT_STRUCTURE.map((item) => {
          const product = PRODUCTS.find((p) => p.slug === item.slug)
          if (!product) return null

          const isDimmed = categoryFilter !== 'all' && product.type !== categoryFilter && (categoryFilter !== 'industry' || (product.type !== 'industry' && product.type !== 'specialized'))
          const isSelected = selectedProductSlug === product.slug
          const isHovered = hoveredProductSlug === product.slug

          return (
            <div
              key={product.slug}
              className={`planet-orbit-arm tier-${item.tier} ${stage}`}
              style={{
                ['--base-angle' as string]: `${item.angle}deg`,
                ['--orbit-speed' as string]: `${item.speed}s`,
                ['--product-accent' as string]: product.accent
              }}
            >
              <div
                className={`planet-node-holder ${isDimmed ? 'dimmed' : ''} ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredProductSlug(product.slug)}
                onMouseLeave={() => setHoveredProductSlug(null)}
                onClick={() => setSelectedProductSlug(isSelected ? null : product.slug)}
              >
                <div className="planet-body" style={{ ['--pc' as string]: product.accent }}>
                  <img src={product.logo} alt={product.name} className="planet-icon-img" width="30" height="30" />
                  <span className="planet-glow-ring" />
                </div>

                {/* Floating Planet Label */}
                <div className="planet-name-badge">
                  <span className="p-badge-title">{product.name}</span>
                  <span className="p-badge-cat">{product.category}</span>
                </div>

                {/* Hover Quick Tooltip */}
                <div className="planet-hover-card">
                  <div className="p-h-top">
                    <strong>{product.name}</strong>
                    <span className="p-h-cat">{product.category}</span>
                  </div>
                  <p className="p-h-tagline">{product.tagline}</p>
                  <div className="p-h-action">
                    <span>Click to inspect</span>
                    <span className="p-h-arrow">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Selected Product Inspector Modal / Bottom Drawer */}
      {selectedProduct && (
        <div className="universe-product-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-product-title">
          <div className="drawer-content-box" style={{ borderTop: `4px solid ${selectedProduct.accent}` }}>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setSelectedProductSlug(null)}
              aria-label="Close product inspector"
            >
              &times;
            </button>

            <div className="drawer-grid">
              <div className="drawer-left">
                <div className="d-logo-row">
                  <img src={selectedProduct.logo} alt="" className="drawer-logo" width="60" height="60" />
                  <div>
                    <span className="d-cat">{selectedProduct.category}</span>
                    <h2 id="drawer-product-title" className="d-title">{selectedProduct.name}</h2>
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
                  <strong>Key Architectural Capabilities:</strong>
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
                    onClick={() => setSelectedProductSlug(null)}
                  >
                    Keep Exploring Universe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Mission Strip */}
      <div className="universe-bottom-banner">
        <div className="container-wide">
          <div className="u-banner-inner">
            <div className="u-banner-text">
              <span className="u-banner-headline">Software for businesses beyond Excel.</span>
              <span className="u-banner-sub">
                Independent product studio building 10 connected applications, platforms, and developer tooling.
              </span>
            </div>
            <div className="u-banner-links">
              <Link to="/products" className="btn btn-sm btn-primary">Browse Grid View &rarr;</Link>
              <Link to="/about" className="btn btn-sm btn-ghost">About Studio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
