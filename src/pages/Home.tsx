import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PRODUCTS } from '../data/products'
import { Reveal } from '../components/Reveal'
import { StatusBadge } from '../components/StatusBadge'
import { RadialProductSpinner } from '../components/home/RadialProductSpinner'

const CATEGORIES = [
  { id: 'all', label: 'All Products (9)' },
  { id: 'industry', label: 'Industry Applications (6)' },
  { id: 'platform', label: 'Platform (1)' },
  { id: 'tech', label: 'Developer & Security (2)' }
]

export function Home() {
  usePageMeta({
    title: 'Digi Tracks | Software for businesses beyond Excel',
    description:
      'Digi Tracks is an independent software product studio building practical applications, business platforms and developer technology for businesses, institutions and professionals.'
  })

  const [activeCategory, setActiveCategory] = useState('all')

  // Filter products based on category
  const filteredProducts = PRODUCTS.filter((p) => {
    return (
      activeCategory === 'all' ||
      (activeCategory === 'industry' && (p.type === 'industry' || p.type === 'specialized')) ||
      (activeCategory === 'platform' && p.type === 'platform') ||
      (activeCategory === 'tech' && (p.type === 'developer' || p.type === 'security'))
    )
  })

  return (
    <>
      {/* 1. Interactive Radial Product Spinner Hero */}
      <RadialProductSpinner />

      {/* 2. Main Product Grid Section */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
              <div>
                <p className="kicker">Explore Solutions</p>
                <h2 className="h2">The Digi Tracks Software Suite</h2>
              </div>

              {/* Category Filter Chips */}
              <div className="filter-chips">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Clean Lab Card Grid */}
          <div className="lab-grid" style={{ marginTop: 24 }}>
            {filteredProducts.map((p) => (
              <Reveal key={p.slug} className="card lab-item" style={{ borderTop: `3px solid ${p.accent}` }}>
                <div className="p-top" style={{ marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img
                      src={p.logo}
                      alt=""
                      width="38"
                      height="38"
                      style={{ borderRadius: 8, border: '1px solid var(--border)', background: '#ffffff', padding: 4 }}
                    />
                    <span className="p-cat">{p.category}</span>
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                <h3 className="h3" style={{ marginBottom: 6 }}>
                  <Link to={p.route} className="p-title-link" style={{ ['--pc' as string]: p.accent }}>
                    {p.name}
                  </Link>
                </h3>

                <p className="sub" style={{ marginBottom: 16, color: 'var(--text-2)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>
                  {p.tagline}
                </p>

                {/* Capabilities Badges */}
                <div className="badge-row" style={{ marginBottom: 18, gap: 6 }}>
                  {p.capabilities.slice(0, 3).map((cap) => (
                    <span key={cap} className="platform-badge" style={{ fontSize: '0.68rem' }}>
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="p-foot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <span className="l-status" style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                    {p.platforms.join(' · ')}
                  </span>
                  <Link to={p.route} className="p-arrow" style={{ fontSize: 'var(--text-xs)', fontWeight: 600 }}>
                    Explore Solution &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-3)' }}>
              <p>No products match the selected filters.</p>
              <button
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={() => setActiveCategory('all')}
                style={{ marginTop: 12 }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Choose Digi Tracks Section */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <p className="kicker">Why Digi Tracks</p>
              <h2 className="h2" style={{ margin: '0 auto' }}>
                Built for Growth, Engineered for Reliability
              </h2>
            </div>
          </Reveal>

          <div className="principles-grid" style={{ marginTop: 24 }}>
            <Reveal className="card">
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #0d9488, #0284c7)' }}>
                01
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px' }}>Production-Ready & Field-Tested</h3>
              <p style={{ color: 'var(--text-2)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                Every solution is architected for immediate operational impact: zero bloat, intuitive workflows, and deterministic reliability right out of the box.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                02
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px' }}>Fully Customizable to Your Workflow</h3>
              <p style={{ color: 'var(--text-2)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                Tailored for your business realities. Deploy specialized standalone applications or compose a bespoke ERP tailored to your organizational hierarchy.
              </p>
            </Reveal>

            <Reveal className="card">
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #d97706, #ea580c)' }}>
                03
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px' }}>Local Sovereignty & Data Privacy</h3>
              <p style={{ color: 'var(--text-2)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                Offline-first desktop binaries and air-gapped security ensure confidential candidate, financial, and client data never leaves your enterprise custody.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Contact / Studio Action Banner */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ textAlign: 'center', padding: 'clamp(2.5rem, 5vw, 4rem)', background: 'radial-gradient(circle at 50% 0%, rgba(13, 148, 136, 0.08) 0%, #ffffff 70%)' }}>
              <span className="hero-eyebrow" style={{ marginBottom: 16 }}>Digi Tracks Product Studio</span>
              <h2 className="h2" style={{ marginBottom: 12 }}>
                Interested in early access or partnership?
              </h2>
              <p className="lead" style={{ maxWidth: 640, margin: '0 auto 28px' }}>
                We are actively building and testing across all product lines. Reach out directly to collaborate or learn more.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
                <Link to="/contact" className="btn btn-lg btn-primary">
                  Get in Touch &rarr;
                </Link>
                <Link to="/about" className="btn btn-lg btn-ghost">
                  Read Studio Story
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
