import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

// 10 Products organized into 4 concentric orbital tiers:
// Tier 1 (Inner): Vedik, Chronos, Glowra (Duration: 38s, radius: 18%)
// Tier 2 (Core): Garix, Hireez, VERTEX (Duration: 50s, radius: 28%)
// Tier 3 (Platforms): UNIFY, Top 10 (Duration: 68s, radius: 37%)
// Tier 4 (Outer Tech): ORION, ORION HUNTER (Duration: 84s, radius: 45%)

const ORBIT_ITEMS = [
  // Tier 1: Inner Applications (radius ~18%)
  { slug: 'vedik', tier: 1, duration: 36, delay: 0, category: 'industry' },
  { slug: 'chronos', tier: 1, duration: 36, delay: -12, category: 'industry' },
  { slug: 'glowra', tier: 1, duration: 36, delay: -24, category: 'industry' },

  // Tier 2: Specialized Applications (radius ~28%)
  { slug: 'garix', tier: 2, duration: 50, delay: -5, category: 'industry' },
  { slug: 'hireez', tier: 2, duration: 50, delay: -21.6, category: 'industry' },
  { slug: 'vertex', tier: 2, duration: 50, delay: -38.3, category: 'industry' },

  // Tier 3: Business Platforms (radius ~37%)
  { slug: 'unify', tier: 3, duration: 66, delay: -8, isMajor: true, category: 'platform' },
  { slug: 'top-10', tier: 3, duration: 66, delay: -41, category: 'platform' },

  // Tier 4: Developer & Security Tech (radius ~45%)
  { slug: 'orion', tier: 4, duration: 82, delay: -15, category: 'developer' },
  { slug: 'orion-hunter', tier: 4, duration: 82, delay: -56, category: 'developer' }
]

const TIERS = [
  { id: 1, label: 'Core Applications', radiusPercent: 18 },
  { id: 2, label: 'Industry Operations', radiusPercent: 28 },
  { id: 3, label: 'Connected Platforms', radiusPercent: 37 },
  { id: 4, label: 'Developer & Security', radiusPercent: 45 }
]

const FILTER_TABS = [
  { id: 'all', label: 'All Ecosystem', count: 10 },
  { id: 'industry', label: 'Industry Applications', count: 6 },
  { id: 'platform', label: 'Business Platforms', count: 2 },
  { id: 'developer', label: 'Developer & Security', count: 2 }
]

export function EcosystemMap() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isPaused, setIsPaused] = useState(false)
  const [sunExpanded, setSunExpanded] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<'enter' | 'exit'>('enter')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sunExpanded) {
        setAnimationDirection('exit')
        setTimeout(() => setSunExpanded(false), 240)
      }
    }

    if (sunExpanded) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [sunExpanded])

  const openSunModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setAnimationDirection('enter')
    setSunExpanded(true)
  }

  const closeSunModal = () => {
    setAnimationDirection('exit')
    setTimeout(() => setSunExpanded(false), 240)
  }

  return (
    <div className="ecosystem-section-wrap">
      {/* Category selector */}
      <div className="ecosystem-filter-bar" role="tablist" aria-label="Ecosystem filters">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeFilter === tab.id}
            className={`eco-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="eco-filter-count">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="ecosystem-viewport">
        <div
          className={`cosmic-stage ${isPaused ? 'paused' : ''}`}
          aria-label="Interactive solar ecosystem map"
        >
          {/* Orbital Concentric SVG Guide Rings */}
          <svg className="cosmic-rings-svg" viewBox="0 0 1000 1000" aria-hidden="true">
            <defs>
              <radialGradient id="stageGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.05" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.02" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="500" cy="500" r="480" fill="url(#stageGlow)" />

            {/* Concentric orbital circles */}
            {TIERS.map((tier) => (
              <circle
                key={tier.id}
                cx="500"
                cy="500"
                r={tier.radiusPercent * 10}
                className={`cosmic-orbit-circle tier-${tier.id}`}
              />
            ))}
          </svg>

          {/* Central Sun Studio Core */}
          <div
            className="cosmic-center-hub"
            onClick={openSunModal}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openSunModal(e as unknown as React.MouseEvent)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Inspect Digi Tracks Product Studio Overview"
          >
            <div className="hub-core-disk">
              <img src="/logo.svg" alt="Digi Tracks" className="hub-logo" width="110" height="28" />
              <div className="hub-label-wrap">
                <span className="hub-title">Digi Tracks</span>
                <span className="hub-sub">Studio Core</span>
              </div>
            </div>
            <div className="hub-glow-ring" aria-hidden="true" />
            <div className="hub-pulse-beacon" aria-hidden="true">
              <span className="hub-beacon-dot" />
              <span className="hub-beacon-text">Studio info</span>
            </div>
          </div>

          {/* Hardware-Accelerated CSS Orbit Track Layers */}
          {ORBIT_ITEMS.map((item) => {
            const product = PRODUCTS.find((p) => p.slug === item.slug)
            if (!product) return null

            const isDimmed = activeFilter !== 'all' && item.category !== activeFilter
            const isHighlighted = activeFilter !== 'all' && item.category === activeFilter

            return (
              <div
                key={product.slug}
                className={`orbit-rotator tier-${item.tier}`}
                style={{
                  animationDuration: `${item.duration}s`,
                  animationDelay: `${item.delay}s`
                }}
              >
                <div
                  className="orbit-satellite-holder"
                  style={{ ['--orbit-r' as string]: `${TIERS[item.tier - 1].radiusPercent}%` }}
                >
                  <Link
                    to={product.route}
                    className={`cosmic-node ${item.isMajor ? 'major' : ''} ${isHighlighted ? 'active-filter' : ''}`}
                    style={{
                      ['--accent-color' as string]: product.accent,
                      opacity: isDimmed ? 0.22 : 1
                    }}
                    aria-label={`${product.name} - ${product.tagline}`}
                  >
                    <div className="node-avatar">
                      <img src={product.logo} alt="" className="node-icon" width="28" height="28" />
                    </div>

                    {item.isMajor && (
                      <span className="node-halo" aria-hidden="true" />
                    )}

                    {/* Rich Hover Inspector Card */}
                    <div className="node-card-tooltip">
                      <div className="tip-header">
                        <span className="tip-name">{product.name}</span>
                        <span className="tip-category">{product.category}</span>
                      </div>
                      <p className="tip-tagline">{product.tagline}</p>
                      <div className="tip-footer">
                        <span className="tip-status">{product.status}</span>
                        <span className="tip-cta">Explore &rarr;</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}

          {/* Stage Controls & Legend */}
          <div className="cosmic-stage-bar">
            <div className="cosmic-legend-group">
              <span className="c-leg-item">
                <span className="c-leg-dot" style={{ background: '#6366f1' }} />
                Tier 1-2: Industry Apps (6)
              </span>
              <span className="c-leg-item">
                <span className="c-leg-dot" style={{ background: '#d97706' }} />
                Tier 3: Modular Platforms (2)
              </span>
              <span className="c-leg-item">
                <span className="c-leg-dot" style={{ background: '#0ea5e9' }} />
                Tier 4: Dev & Security (2)
              </span>
            </div>
            <button
              type="button"
              className="cosmic-pause-btn"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume planetary orbits' : 'Pause planetary orbits'}
            >
              {isPaused ? '▶ Resume Motion' : '⏸ Pause Motion'}
            </button>
          </div>
        </div>
      </div>

      {/* Studio Overview Modal Dialog */}
      {sunExpanded && (
        <div
          ref={overlayRef}
          className={`sun-expanded-overlay ${animationDirection}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSunModal()
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sun-expanded-title"
        >
          <div className="sun-expanded-panel">
            <button
              className="sun-expanded-close"
              onClick={closeSunModal}
              aria-label="Close studio overview"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="sun-expanded-content">
              <img src="/logo.svg" alt="Digi Tracks" className="sun-expanded-logo" width="160" height="42" style={{ margin: '0 auto 16px' }} />
              <h2 id="sun-expanded-title">Digi Tracks</h2>
              <p className="sun-expanded-tagline">Software for businesses beyond Excel</p>
              <p className="sun-expanded-description">
                An independent software product studio building practical applications,
                business platforms and developer technology. Designed for organizations outgrowing
                registers, spreadsheets and fragmented single-purpose tools.
              </p>
              <div className="sun-expanded-stats">
                <div className="stat">
                  <span className="stat-value">10</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat">
                  <span className="stat-value">6</span>
                  <span className="stat-label">Industries</span>
                </div>
                <div className="stat">
                  <span className="stat-value">1</span>
                  <span className="stat-label">Studio</span>
                </div>
                <div className="stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Independent</span>
                </div>
              </div>
              <div className="sun-expanded-links">
                <Link to="/products" className="btn btn-primary" onClick={closeSunModal}>
                  Explore All 10 Products &rarr;
                </Link>
                <Link to="/about" className="btn btn-ghost" onClick={closeSunModal}>
                  About the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}