import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { Reveal } from '../Reveal'

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0)
  const currentProduct = PRODUCTS[activeTab]

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
      </div>

      <div className="container-fluid hero-container-fluid">
        <div className="hero-widescreen-grid">
          {/* Left Column: Studio Headline, Lead, CTAs & Live Metrics */}
          <div className="hero-left-pane">
            <Reveal>
              <div className="hero-eyebrow-wrap">
                <span className="hero-eyebrow">
                  <span className="hero-status-dot" aria-hidden="true" />
                  Independent Software Product Studio
                  <span className="hero-eyebrow-tag">v2026</span>
                </span>
              </div>

              <h1 className="hero-title">
                Software for businesses <br />
                <span className="grad-text">beyond Excel.</span>
              </h1>

              <p className="lead hero-lead">
                Digi Tracks is an independent software product studio building practical applications,
                business platforms and developer technology for businesses, institutions and professionals.
              </p>

              <div className="hero-actions">
                <Link className="btn btn-lg btn-primary" to="/products">
                  Explore All Products
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a className="btn btn-lg btn-ghost" href="#ecosystem">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <ellipse cx="12" cy="12" rx="9" ry="4" />
                  </svg>
                  Explore Ecosystem
                </a>
              </div>

              <div className="hero-stats-strip" aria-label="Studio highlights">
                <div className="hero-stat-item">
                  <span className="h-stat-num">10</span>
                  <span className="h-stat-lbl">Software Products</span>
                </div>
                <div className="hero-stat-sep" aria-hidden="true">/</div>
                <div className="hero-stat-item">
                  <span className="h-stat-num">6</span>
                  <span className="h-stat-lbl">Industry Sectors</span>
                </div>
                <div className="hero-stat-sep" aria-hidden="true">/</div>
                <div className="hero-stat-item">
                  <span className="h-stat-num">1</span>
                  <span className="h-stat-lbl">Connected Platform</span>
                </div>
                <div className="hero-stat-sep" aria-hidden="true">/</div>
                <div className="hero-stat-item">
                  <span className="h-stat-num">100%</span>
                  <span className="h-stat-lbl">Independent Engineering</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Live Product Visualizer & Showcase Deck */}
          <div className="hero-right-pane">
            <Reveal>
              <div className="hero-product-preview-box">
                <div className="hero-preview-header">
                  <span className="hero-preview-label">Live Product Deck (10 Products)</span>
                  <span className="hero-preview-sub">Click any product to inspect</span>
                </div>
                <div className="hero-preview-tabs" role="tablist" aria-label="Product switcher">
                  {PRODUCTS.map((p, idx) => (
                    <button
                      key={p.slug}
                      role="tab"
                      aria-selected={activeTab === idx}
                      className={`hero-preview-tab ${activeTab === idx ? 'active' : ''}`}
                      onClick={() => setActiveTab(idx)}
                      style={{ ['--tab-accent' as string]: p.accent }}
                    >
                      <img src={p.logo} alt="" className="h-tab-icon" width="18" height="18" />
                      <span>{p.name}</span>
                    </button>
                  ))}
                </div>

                {currentProduct && (
                  <div className="hero-preview-card" style={{ ['--pc' as string]: currentProduct.accent }}>
                    <div className="h-p-left">
                      <img src={currentProduct.logo} alt="" className="h-p-logo" width="56" height="56" />
                      <div className="h-p-meta">
                        <span className="h-p-cat">{currentProduct.category}</span>
                        <h3 className="h-p-title">{currentProduct.name}</h3>
                        <p className="h-p-tagline">{currentProduct.tagline}</p>
                      </div>
                    </div>
                    <div className="h-p-right">
                      <p className="h-p-desc">{currentProduct.description}</p>
                      <div className="h-p-actions">
                        <div className="badge-row">
                          {currentProduct.capabilities.slice(0, 3).map((c) => (
                            <span key={c} className="platform-badge">{c}</span>
                          ))}
                        </div>
                        <Link to={currentProduct.route} className="btn btn-sm btn-primary">
                          View {currentProduct.name}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}