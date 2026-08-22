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
  { id: 'platform', label: 'Business Platform (1)' },
  { id: 'tech', label: 'Developer & Security (2)' }
]

const FEATURED_DEMOS = [
  {
    title: 'Vedik School ERP',
    category: 'Education ERP',
    tagline: '30+ Modules for School Academics, Fees & Transport',
    url: 'https://vedik-demo.netlify.app/dashboard/',
    route: '/products/vedik/school-erp',
    logo: '/products/vedik.png',
    accent: '#6366f1'
  },
  {
    title: 'Vedik Social Community',
    category: 'Campus Social',
    tagline: 'Campus Clubs, House Points & AI Safety Filter',
    url: 'https://vediksocial.vercel.app',
    route: '/products/vedik/social-community',
    logo: '/products/vedik-community.png',
    accent: '#6366f1'
  },
  {
    title: 'Chronos Clinic Workspace',
    category: 'Healthcare',
    tagline: 'Outpatient Appointments, EHR & Clinical Billing',
    url: 'https://chronos-demo.netlify.app/',
    route: '/products/chronos',
    logo: '/products/chronos.png',
    accent: '#0d9488'
  },
  {
    title: 'Glowra Salon & Spa',
    category: 'Beauty & Wellness',
    tagline: 'Stylist Rosters, Appointment Books & Point-of-Sale',
    url: 'https://glowra-demo.netlify.app/',
    route: '/products/glowra',
    logo: '/products/glowra.png',
    accent: '#db2777'
  }
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
      {/* 1. Interactive Radial Product Spinner Hero (Core Intact Circle) */}
      <RadialProductSpinner />

      {/* 2. Featured Live Interactive Sandboxes Strip */}
      <section className="section section--tight" style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', paddingTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '999px', marginBottom: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 750, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Live Cloud Sandboxes
                  </span>
                </div>
                <h2 className="h2" style={{ margin: 0, fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)' }}>
                  Test Digi Tracks Applications Live
                </h2>
              </div>
              <p style={{ margin: 0, color: 'var(--text-2)', fontSize: '0.92rem', maxWidth: 460 }}>
                Instant one-click interactive demonstration environments with realistic data and fully working workflows.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 16 }}>
            {FEATURED_DEMOS.map((demo) => (
              <Reveal key={demo.title}>
                <div
                  className="card"
                  style={{
                    padding: '20px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `3.5px solid ${demo.accent}`,
                    boxShadow: 'var(--shadow-xs)',
                    borderRadius: 'var(--radius)',
                    height: '100%'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ padding: 4, background: '#f8fafc', borderRadius: 8, border: '1px solid var(--border)', display: 'flex' }}>
                      <img src={demo.logo} alt="" width="32" height="32" style={{ objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: demo.accent, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {demo.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.08rem', fontWeight: 800, margin: '0 0 6px' }}>{demo.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.5, margin: '0 0 18px', flexGrow: 1 }}>
                    {demo.tagline}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-demo-link"
                      style={{ fontSize: '0.72rem', padding: '4px 12px', textDecoration: 'none' }}
                    >
                      Launch Demo ↗
                    </a>
                    <Link to={demo.route} style={{ fontSize: '0.82rem', fontWeight: 650, color: demo.accent, textDecoration: 'none' }}>
                      Overview &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Product Grid Section */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
              <div>
                <p className="kicker">Explore Solutions</p>
                <h2 className="h2" style={{ margin: 0 }}>The Digi Tracks Software Suite</h2>
              </div>

              {/* Category Filter Chips */}
              <div className="filter-chips" role="group" aria-label="Filter products">
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
          <div className="lab-grid" style={{ marginTop: 28 }}>
            {filteredProducts.map((p) => (
              <Reveal key={p.slug} className="card lab-item" style={{ borderTop: `3.5px solid ${p.accent}`, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div className="p-top" style={{ marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ padding: 4, background: '#ffffff', borderRadius: 8, border: '1px solid var(--border)', display: 'flex', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                      <img
                        src={p.logo}
                        alt=""
                        width="34"
                        height="34"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <span className="p-cat" style={{ fontSize: '0.72rem' }}>{p.category}</span>
                      <h3 className="h3" style={{ margin: '2px 0 0', fontSize: '1.15rem' }}>
                        <Link to={p.route} className="p-title-link" style={{ ['--pc' as string]: p.accent }}>
                          {p.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                <p className="sub" style={{ marginBottom: 14, color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  {p.tagline}
                </p>

                <p style={{ margin: '0 0 16px', fontSize: '0.84rem', color: 'var(--text-3)', lineHeight: 1.55, flexGrow: 1 }}>
                  {p.description}
                </p>

                {/* Capabilities Badges */}
                <div className="badge-row" style={{ marginBottom: 16, gap: 6 }}>
                  {p.capabilities.slice(0, 3).map((cap) => (
                    <span key={cap} className="platform-badge" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="p-foot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-demo-link"
                        style={{ fontSize: '0.68rem', padding: '2px 8px', textDecoration: 'none' }}
                      >
                        Demo ↗
                      </a>
                    )}
                    <span className="l-status" style={{ fontSize: '0.74rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                      {p.platforms.join(' · ')}
                    </span>
                  </div>
                  <Link to={p.route} className="p-arrow" style={{ fontSize: '0.84rem', fontWeight: 650, color: p.accent }}>
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
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <p className="kicker">Engineering Principles</p>
              <h2 className="h2" style={{ margin: '0 auto', fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)' }}>
                Built for Growth, Engineered for Reliability
              </h2>
            </div>
          </Reveal>

          <div className="principles-grid" style={{ marginTop: 28 }}>
            <Reveal className="card" style={{ padding: '28px' }}>
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #0d9488, #0284c7)' }}>
                01
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px', fontSize: '1.15rem' }}>Production-Ready & Field-Tested</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.62 }}>
                Every solution is architected for immediate operational impact: zero bloat, intuitive workflows, and deterministic reliability right out of the box.
              </p>
            </Reveal>

            <Reveal className="card" style={{ padding: '28px' }}>
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                02
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px', fontSize: '1.15rem' }}>Fully Customizable to Your Workflow</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.62 }}>
                Tailored for your business realities. Deploy specialized standalone applications or compose a bespoke ERP tailored to your organizational hierarchy.
              </p>
            </Reveal>

            <Reveal className="card" style={{ padding: '28px' }}>
              <span className="p-icon" aria-hidden="true" style={{ background: 'linear-gradient(135deg, #d97706, #ea580c)' }}>
                03
              </span>
              <h3 className="h3" style={{ margin: '14px 0 8px', fontSize: '1.15rem' }}>Local Sovereignty & Data Privacy</h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.62 }}>
                Offline-first desktop binaries and air-gapped security ensure confidential candidate, financial, and client data never leaves your enterprise custody.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Contact / Studio Action Banner */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                padding: '48px 40px',
                background: 'linear-gradient(145deg, #0f172a, #1e293b)',
                borderRadius: 'var(--radius-lg)',
                color: '#ffffff',
                textAlign: 'center',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.35)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto' }}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 750, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                  Digi Tracks Product Studio
                </span>
                <h2 className="h2" style={{ marginBottom: 14, color: '#ffffff', fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)' }}>
                  Interested in Early Access or Custom Architecture?
                </h2>
                <p className="lead" style={{ margin: '0 auto 28px', color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.65 }}>
                  We are actively building, testing, and field-deploying across all product lines. Reach out directly to collaborate, demo, or license.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                  <Link to="/contact" className="btn btn-lg btn-primary" style={{ background: '#0d9488', border: 'none', fontWeight: 750 }}>
                    Get in Touch &rarr;
                  </Link>
                  <Link to="/about" className="btn btn-lg btn-ghost" style={{ color: '#cbd5e1', borderColor: 'rgba(255,255,255,0.25)' }}>
                    Read Studio Story
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
