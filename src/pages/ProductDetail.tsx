import { Link, useParams } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { getProductBySlug, getChildren } from '../data/products'
import { PlatformBadges } from '../components/PlatformBadge'
import { NotFound } from './NotFound'
import { StatusBadge } from '../components/StatusBadge'

const TYPE_LABEL: Record<string, string> = {
  industry: 'Industry Application',
  platform: 'Business Platform',
  module: 'Integrated Module',
  specialized: 'Specialized Platform',
  developer: 'Developer Technology',
  security: 'Security Technology'
}

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  usePageMeta({
    title: product ? `${product.name} | Digi Tracks` : 'Product | Digi Tracks',
    description: product?.description
  })

  if (!product) return <NotFound />

  const parent = product.parentProduct ? getProductBySlug(product.parentProduct) : undefined
  const children = getChildren(product.slug)
  const accent = product.accent

  // Select the appropriate multi-tier breakdown if present
  const tiers = product.educationTiers || product.practiceTiers || product.studioTiers || product.workshopTiers || product.vertexTiers

  const isParentSuite = children.length > 0

  return (
    <>
      {/* 1. Designer-Grade Luxury Hero Section */}
      <section
        className="detail-hero-luxury"
        style={{
          ['--pc' as string]: accent,
          ['--pc-alpha' as string]: `${accent}20`
        }}
      >
        <div className="container">
          {/* Breadcrumb Navigation Pill */}
          <nav className="detail-crumb-pill" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="detail-crumb-sep">/</span>
            <Link to="/products">Products</Link>
            {parent && (
              <>
                <span className="detail-crumb-sep">/</span>
                <Link to={parent.route}>{parent.name}</Link>
              </>
            )}
            <span className="detail-crumb-sep">/</span>
            <span style={{ color: 'var(--text)', fontWeight: 700 }}>{product.name}</span>
          </nav>

          <div className="hero-luxury-grid">
            {/* Left Column: Core Identity */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: `${accent}15`, border: `1px solid ${accent}33`, borderRadius: '999px', marginBottom: 16 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 750, color: accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {product.category} &middot; {isParentSuite ? 'Unified Suite' : TYPE_LABEL[product.type]}
                </span>
              </div>

              <h1 className="h1" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.08, margin: '0 0 10px', color: 'var(--text)' }}>
                {product.name}
              </h1>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 650, color: accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
                {product.tagline}
              </p>

              <p style={{ fontSize: 'clamp(1.04rem, 2vw, 1.15rem)', color: 'var(--text-2)', lineHeight: 1.68, maxWidth: 640, marginBottom: 28 }}>
                {product.description}
              </p>

              {/* Action Buttons for Single Product */}
              {!isParentSuite && product.demoUrl && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{
                      background: 'linear-gradient(135deg, #059669, #0d9488)',
                      border: 'none',
                      boxShadow: '0 8px 24px -4px rgba(16, 185, 129, 0.45)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      fontWeight: 750
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #fff' }} />
                    Launch Live Demo &rarr;
                  </a>
                  <Link
                    className="btn btn-ghost btn-lg"
                    to="/contact"
                    style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)' }}
                  >
                    Discuss Deployment &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Right Architectural Glass Spec Card */}
            <div className="hero-luxury-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ padding: 10, background: '#ffffff', borderRadius: 14, border: '1px solid var(--border)', boxShadow: '0 6px 18px rgba(0,0,0,0.05)', display: 'flex' }}>
                  <img src={product.logo} alt="" width="52" height="52" style={{ objectFit: 'contain' }} />
                </div>
                <StatusBadge status={product.status} />
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, margin: '0 0 6px' }}>{product.name} Architecture</h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
                {isParentSuite
                  ? 'Unified multi-tier educational architecture combining institutional ERP administration with student community life.'
                  : 'Enterprise-grade deployment architecture with dedicated data isolation and role-based permissions.'}
              </p>

              <div className="hero-spec-grid">
                <div className="hero-spec-item">
                  <span className="hero-spec-label">Domain</span>
                  <span className="hero-spec-val">{product.category}</span>
                </div>
                <div className="hero-spec-item">
                  <span className="hero-spec-label">Deployment</span>
                  <span className="hero-spec-val" style={{ textTransform: 'capitalize' }}>
                    {product.deployment || 'Docker / Cloud'}
                  </span>
                </div>
                <div className="hero-spec-item">
                  <span className="hero-spec-label">Applications</span>
                  <span className="hero-spec-val">
                    {children.length > 0 ? `${children.length} Distinct Applications` : 'Core Module'}
                  </span>
                </div>
                <div className="hero-spec-item">
                  <span className="hero-spec-label">Supported Platforms</span>
                  <PlatformBadges platforms={product.platforms} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROMINENT SUITE APPLICATIONS SHOWCASE (FRONT & CENTER FOR SUITES LIKE VEDIK) */}
      {isParentSuite && (
        <section className="section" style={{ background: '#ffffff', borderBottom: '1px solid var(--border)', paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 36px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '999px', marginBottom: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 750, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  2 Independent Live Demos Available
                </span>
              </div>
              <h2 className="h2" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)', margin: '0 0 14px' }}>
                The Two Core Pillars of {product.name}
              </h2>
              <p className="lead" style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-2)' }}>
                Test each live cloud application independently. One platform covers complete institutional administration while the other powers vibrant student and campus community life.
              </p>
            </div>

            <div className="ecosystem-showcase-grid">
              {children.map((m) => (
                <div key={m.slug} className="showcase-app-card" style={{ ['--pc' as string]: m.accent || accent }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div className="showcase-logo-badge">
                        <img src={m.logo} alt="" width="38" height="38" style={{ objectFit: 'contain' }} />
                      </div>
                      <div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 750, color: m.accent || accent, textTransform: 'uppercase' }}>
                          Application Pillar
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text)' }}>
                          {m.name}
                        </h3>
                      </div>
                    </div>
                    {m.demoUrl && (
                      <span className="p-demo-link" style={{ fontSize: '0.72rem', padding: '4px 12px' }}>
                        Live Demo Active
                      </span>
                    )}
                  </div>

                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 650, color: 'var(--text-3)', margin: '0 0 12px' }}>
                    {m.tagline}
                  </p>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.62, margin: 0, flexGrow: 1 }}>
                    {m.description}
                  </p>

                  {/* Feature Highlights Checklist */}
                  <div className="showcase-feature-list">
                    {m.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="showcase-feature-item">
                        <span className="showcase-feature-icon">&#10003;</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* High-Impact Action Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: 'auto', flexWrap: 'wrap' }}>
                    {m.demoUrl && (
                      <a
                        href={m.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                          background: 'linear-gradient(135deg, #059669, #0d9488)',
                          border: 'none',
                          padding: '10px 18px',
                          fontSize: '0.88rem',
                          fontWeight: 750,
                          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        Launch Live Demo ↗
                      </a>
                    )}
                    <Link
                      to={m.route}
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 750,
                        color: m.accent || accent,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6
                      }}
                    >
                      Specifications & Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Narrative & Strategic Value (Equal Height Structured Split Grid) */}
      <section className="section section--tight" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="detail-value-split">
            <div className="detail-card-panel">
              <p className="kicker">Problem & Context</p>
              <div className="detail-panel-body problem-panel" style={{ ['--pc' as string]: accent }}>
                <h3 className="h4" style={{ marginBottom: 10, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#ef4444' }}>&#9888;</span> The Operational Challenge
                </h3>
                <p>{product.problem}</p>
              </div>
            </div>
            <div className="detail-card-panel">
              <p className="kicker">Core Value Proposition</p>
              <div className="detail-panel-body solution-panel" style={{ ['--pc' as string]: accent }}>
                <h3 className="h4" style={{ marginBottom: 10, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: accent }}>&#9889;</span> Built for Enterprise Scale
                </h3>
                <p>{product.narrative?.purpose || product.description}</p>
              </div>
            </div>
          </div>

          {/* 4. Scalable Tier Architecture (Clean 3-Card Grid) */}
          {tiers && (
            <div style={{ marginTop: 64 }}>
              <p className="kicker">Institutional Scale</p>
              <h2 className="h3" style={{ marginBottom: 12 }}>
                Scalable Editions for Every Institution
              </h2>
              <p className="sub" style={{ marginBottom: 28, maxWidth: 640 }}>
                Single unified data architecture that scales seamlessly from K-12 primary schools to multi-campus collegiate universities.
              </p>

              <div className="principles-grid">
                {tiers.map((t) => (
                  <div key={t.tier} className="card" style={{ borderTop: `3.5px solid ${accent}`, padding: '26px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="p-cat">{t.tier}</span>
                      <StatusBadge status={t.status as never} />
                    </div>
                    <h3 className="h3" style={{ fontSize: '1.1rem', marginBottom: 14 }}>{t.target}</h3>
                    
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {t.capabilities.slice(0, 5).map((cap, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span> {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Capabilities Feature Grid */}
          <div style={{ marginTop: 64 }}>
            <p className="kicker">Architecture Highlights</p>
            <h2 className="h3" style={{ marginBottom: 24 }}>
              What {product.name} Delivers
            </h2>
            <ul className="cap-grid">
              {product.capabilities.map((c) => (
                <li key={c} className="cap-item" style={{ ['--pc' as string]: accent }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Key Differentiators / Reduced Friction */}
          {(product.differentiators || product.frictionPoints) && (
            <div style={{ marginTop: 64 }}>
              <p className="kicker">Strategic Advantages</p>
              <h2 className="h3" style={{ marginBottom: 24 }}>
                Why Organizations Choose {product.name}
              </h2>
              <div className="cap-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {product.differentiators?.slice(0, 4).map((diff, i) => (
                  <div key={i} className="card" style={{ padding: '20px 24px', borderLeft: `3.5px solid ${accent}` }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: '1rem', fontWeight: 750 }}>{diff.feature}</h4>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-2)', lineHeight: 1.6 }}>
                      {diff.detail}
                    </p>
                  </div>
                ))}
                {product.frictionPoints?.slice(0, 4).map((fp, i) => (
                  <div key={i} className="card" style={{ padding: '20px 24px', borderLeft: `3.5px solid ${accent}` }}>
                    <h4 style={{ margin: '0 0 8px', fontSize: '1rem', fontWeight: 750 }}>{fp.area}</h4>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-2)', lineHeight: 1.6 }}>
                      {fp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Grand Luxury Enterprise CTA Banner */}
          <div
            style={{
              marginTop: 72,
              padding: '48px 44px',
              background: 'linear-gradient(145deg, #0f172a, #1e293b)',
              borderRadius: 'var(--radius-lg)',
              color: '#ffffff',
              boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.45)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient background light circle */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: 380,
                height: 380,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${accent}44 0%, rgba(0,0,0,0) 70%)`,
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 32, position: 'relative', zIndex: 2 }}>
              <div style={{ maxWidth: 620 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', marginBottom: 14 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: '#e2e8f0', textTransform: 'uppercase' }}>
                    Enterprise Production Ready
                  </span>
                </div>
                <h3 className="h2" style={{ margin: '0 0 12px', fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', color: '#ffffff', letterSpacing: '-0.03em' }}>
                  Deploy {product.name} in Your Organization
                </h3>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.65 }}>
                  Experience the live demo environment or schedule an architectural walkthrough with our engineering leads for dedicated institutional customization.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                <Link
                  className="btn btn-primary btn-lg"
                  to="/contact"
                  style={{ background: accent, border: 'none', fontWeight: 750 }}
                >
                  Schedule Consultation &rarr;
                </Link>
                <Link
                  className="btn btn-ghost btn-lg"
                  to="/products"
                  style={{ color: '#cbd5e1', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  &larr; All Products
                </Link>
              </div>
            </div>

            <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', gap: 24, fontSize: '0.82rem', color: '#94a3b8' }}>
              <span>✓ Air-gapped on-premise capable</span>
              <span>✓ 100% data ownership</span>
              <span>✓ Custom role permissions</span>
              <span>✓ Commercial enterprise SLA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
