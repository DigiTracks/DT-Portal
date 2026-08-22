import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'

// 10 Products positioned evenly in a perfect 360-degree circle (36 degrees apart)
// Angle 0°: Top (Vedik) → 40° (Chronos) → 80° (Glowra) → 120° (Garix) → 160° (Hireez)
// → 180° (Shipment) → 216° (UNIFY) → 252° (Top 10) → 288° (ORION) → 324° (ORION HUNTER)

export function RadialProductSpinner() {
  const [spinnerState, setSpinnerState] = useState<'idle' | 'spinning' | 'opened' | 'closing'>('idle')
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null)
  const spinTimerRef = useRef<number | null>(null)

  const handleToggleSpinner = () => {
    if (spinnerState === 'spinning') return

    if (spinnerState === 'idle' || spinnerState === 'closing') {
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current)
      setSpinnerState('spinning')
      setSelectedProductSlug(null)

      // Spin and zoom out into circle
      spinTimerRef.current = window.setTimeout(() => {
        setSpinnerState('opened')
      }, 1200)
    } else {
      // One-click close and zoom back in
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current)
      setSpinnerState('closing')
      setSelectedProductSlug(null)

      spinTimerRef.current = window.setTimeout(() => {
        setSpinnerState('idle')
      }, 600)
    }
  }

  useEffect(() => {
    return () => {
      if (spinTimerRef.current) clearTimeout(spinTimerRef.current)
    }
  }, [])

  const selectedProduct = PRODUCTS.find((p) => p.slug === selectedProductSlug)

  return (
    <section className={`radial-spinner-hero state-${spinnerState}`}>

      {/* Main Radial Circle Viewport Canvas */}
      <div className="radial-stage-canvas">

        {/* Central DigiTracks Product Button */}
        <div
          className={`radial-central-btn ${spinnerState}`}
          onClick={handleToggleSpinner}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleToggleSpinner()
            }
          }}
          aria-label="Click to toggle product universe zoom"
        >
          <div className="central-btn-card">
            <div className="central-logo-box">
              <img src="/brand-logo.png" alt="DIGITRACKS" style={{ width: '160px', height: 'auto', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* Circular Product Rays */}
        <div className={`radial-spokes-container ${spinnerState}`}>
          {PRODUCTS.map((product, index) => {
            const step = 360 / PRODUCTS.length // 40 degrees apart for 9 products
            const angle = index * step
            const isSelected = selectedProductSlug === product.slug

            return (
              <div
                key={product.slug}
                className="radial-spoke-arm"
                style={{
                  ['--spoke-angle' as string]: `${angle}deg`,
                  ['--p-color' as string]: product.accent
                }}
              >
                <div
                  className={`radial-product-node ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedProductSlug(isSelected ? null : product.slug)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${product.name}`}
                >
                  <div className="node-avatar-disk" style={{ ['--p-accent' as string]: product.accent }}>
                    <img src={product.logo} alt={product.name} className="node-logo-img" width="34" height="34" />
                  </div>

                  {/* Clean Product Name Tag Below Node */}
                  <div className="node-label-pill">
                    <span className="node-name-text">{product.name}</span>
                    <span className="node-category-text">{product.category}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Selected Product Inspector Modal Drawer */}
      {selectedProduct && (
        <div className="radial-product-drawer" role="dialog" aria-modal="true" aria-labelledby="radial-drawer-title">
          <div className="drawer-card-box" style={{ borderTop: `4px solid ${selectedProduct.accent}` }}>
            <button
              type="button"
              className="drawer-close-cross"
              onClick={() => setSelectedProductSlug(null)}
              aria-label="Close product inspector"
            >
              &times;
            </button>

            <div className="drawer-layout-grid">
              <div className="drawer-left-col">
                <div className="drawer-logo-title-row">
                  <img src={selectedProduct.logo} alt="" className="drawer-logo-img" width="56" height="56" />
                  <div>
                    <span className="drawer-cat-label">{selectedProduct.category}</span>
                    <h2 id="radial-drawer-title" className="drawer-title">{selectedProduct.name}</h2>
                    <span className="status-badge">{selectedProduct.status}</span>
                  </div>
                </div>
                <p className="drawer-tagline-text">{selectedProduct.tagline}</p>
                <p className="drawer-desc-text">{selectedProduct.description}</p>
              </div>

              <div className="drawer-right-col">
                <div className="drawer-problem-box">
                  <strong>The Operational Challenge:</strong>
                  <p>{selectedProduct.problem}</p>
                </div>

                <div className="drawer-capabilities-block">
                  <strong>Core Capabilities:</strong>
                  <div className="drawer-caps-tags">
                    {selectedProduct.capabilities.map((c) => (
                      <span key={c} className="platform-badge">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="drawer-buttons-row">
                  {selectedProduct.demoUrl && (
                    <a
                      href={selectedProduct.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        background: 'linear-gradient(135deg, #059669, #0d9488)',
                        border: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontWeight: 700,
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                      Launch Live Demo ↗
                    </a>
                  )}
                  <Link to={selectedProduct.route} className="btn btn-primary" style={{ background: selectedProduct.accent, border: 'none' }}>
                    Open Full {selectedProduct.name} Page &rarr;
                  </Link>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedProductSlug(null)}
                  >
                    Close
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
