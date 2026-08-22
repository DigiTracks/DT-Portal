import { Link, useParams } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { getProductBySlug, getChildren } from '../data/products'
import { PlatformBadges } from '../components/PlatformBadge'
import { NotFound } from './NotFound'
import { StatusBadge } from '../components/StatusBadge'

const TYPE_LABEL: Record<string, string> = {
  industry: 'Industry Application',
  platform: 'Business Platform',
  module: 'Unify Module',
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

  return (
    <>
      {/* 1. Hero Overview */}
      <section
        className="detail-hero"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 75% 0%, ${accent}18 0%, rgba(255,255,255,0) 70%), var(--bg-soft)`,
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            {parent && (
              <>
                <span aria-hidden="true">/</span>
                <Link to={parent.route}>{parent.name}</Link>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="detail-hero-grid">
            <div className="detail-hero-main">
              <div className="detail-header-row" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div
                  style={{
                    padding: 8,
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src={product.logo} alt="" className="detail-logo" width="60" height="60" style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div className="detail-tagline">{product.tagline}</div>
                  <h1 className="detail-name" style={{ color: accent, margin: '2px 0 0' }}>
                    {product.name}
                  </h1>
                </div>
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-demo-link"
                    style={{
                      padding: '8px 18px',
                      fontSize: '0.8rem',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      textDecoration: 'none'
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', display: 'inline-block', boxShadow: '0 0 8px #fff' }} />
                    Launch Live Demo ↗
                  </a>
                )}
              </div>
              <p className="detail-desc" style={{ marginTop: 14 }}>{product.description}</p>
            </div>

            <div className="meta-strip">
              <div className="meta-item">
                <span className="m-label">Release Stage</span>
                <span className="m-value"><StatusBadge status={product.status} /></span>
              </div>
              <div className="meta-item">
                <span className="m-label">Industry</span>
                <span className="m-value">{product.category}</span>
              </div>
              <div className="meta-item">
                <span className="m-label">Category</span>
                <span className="m-value">{TYPE_LABEL[product.type]}</span>
              </div>
              <div className="meta-item">
                <span className="m-label">Supported Platforms</span>
                <PlatformBadges platforms={product.platforms} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative & Strategic Value (Equal Height Structured Split Grid) */}
      <section className="section section--tight">
        <div className="container">
          <div className="detail-value-split">
            <div className="detail-card-panel">
              <p className="kicker">Problem & Context</p>
              <div className="detail-panel-body problem-panel" style={{ ['--pc' as string]: accent }}>
                <h3 className="h4" style={{ marginBottom: 8, color: 'var(--text)' }}>The Operational Challenge</h3>
                <p>{product.problem}</p>
              </div>
            </div>
            <div className="detail-card-panel">
              <p className="kicker">Core Value Proposition</p>
              <div className="detail-panel-body solution-panel" style={{ ['--pc' as string]: accent }}>
                <h3 className="h4" style={{ marginBottom: 8, color: 'var(--text)' }}>Built for Enterprise Scale</h3>
                <p>{product.narrative?.purpose || product.description}</p>
              </div>
            </div>
          </div>

          {/* 3. Scalable Tier Architecture (Clean 3-Card Grid) */}
          {tiers && (
            <div style={{ marginTop: 56 }}>
              <p className="kicker">Product Editions</p>
              <h2 className="h3" style={{ marginBottom: 12 }}>
                Scalable Editions for Every Stage
              </h2>
              <p className="sub" style={{ marginBottom: 24, maxWidth: 640 }}>
                Single unified architecture that scales as your organization grows. Activate only what you need.
              </p>

              <div className="principles-grid" style={{ marginTop: 20 }}>
                {tiers.map((t) => (
                  <div key={t.tier} className="card" style={{ borderTop: `3px solid ${accent}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span className="p-cat">{t.tier}</span>
                      <StatusBadge status={t.status as never} />
                    </div>
                    <h3 className="h3" style={{ fontSize: '1.05rem', marginBottom: 12 }}>{t.target}</h3>
                    
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {t.capabilities.slice(0, 5).map((cap, i) => (
                        <li key={i} style={{ fontSize: '0.84rem', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span> {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Capabilities Feature Grid */}
          <div style={{ marginTop: 56 }}>
            <p className="kicker">Platform Highlights</p>
            <h2 className="h3" style={{ marginBottom: 20 }}>
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

          {/* 5. Key Differentiators / Reduced Friction */}
          {(product.differentiators || product.frictionPoints) && (
            <div style={{ marginTop: 56 }}>
              <p className="kicker">Strategic Advantages</p>
              <h2 className="h3" style={{ marginBottom: 20 }}>
                Why Businesses Choose {product.name}
              </h2>
              <div className="cap-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {product.differentiators?.slice(0, 4).map((diff, i) => (
                  <div key={i} className="card" style={{ padding: '18px 22px', borderLeft: `3px solid ${accent}` }}>
                    <h4 style={{ margin: '0 0 6px', fontSize: '0.98rem', fontWeight: 750 }}>{diff.feature}</h4>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-2)', lineHeight: 1.55 }}>
                      {diff.detail}
                    </p>
                  </div>
                ))}
                {product.frictionPoints?.slice(0, 4).map((fp, i) => (
                  <div key={i} className="card" style={{ padding: '18px 22px', borderLeft: `3px solid ${accent}` }}>
                    <h4 style={{ margin: '0 0 6px', fontSize: '0.98rem', fontWeight: 750 }}>{fp.area}</h4>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-2)', lineHeight: 1.55 }}>
                      {fp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Modules & Ecosystem Applications */}
          {children.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <p className="kicker">Ecosystem & Modular Extensions</p>
              <h2 className="h3" style={{ marginBottom: 20 }}>
                {product.name} Apps & Modules
              </h2>
              <div className="unify-modules">
                {children.map((m) => (
                  <div key={m.slug} className="unify-module" style={{ ['--accent' as string]: m.accent || accent }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, gap: 8, flexWrap: 'wrap' }}>
                      <Link to={m.route} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
                        {m.logo && (
                          <div style={{ padding: 4, background: '#f8fafc', borderRadius: 8, border: '1px solid var(--border)', display: 'flex' }}>
                            <img
                              src={m.logo}
                              alt=""
                              width="32"
                              height="32"
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        )}
                        <span className="u-m-name" style={{ margin: 0, fontSize: '1.1rem' }}>
                          {m.name}
                        </span>
                      </Link>
                      {m.demoUrl && (
                        <a
                          href={m.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-demo-link"
                          style={{ fontSize: '0.72rem', padding: '3px 10px', textDecoration: 'none' }}
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                    <span className="u-m-tag">{m.tagline}</span>
                    <span className="u-m-desc">{m.description}</span>
                    <div style={{ marginTop: 'auto', paddingTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                      <Link to={m.route} style={{ fontSize: '0.84rem', fontWeight: 650, color: m.accent || accent, textDecoration: 'none' }}>
                        Explore Capabilities &rarr;
                      </Link>
                      {m.demoUrl && (
                        <a
                          href={m.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-dark)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
                        >
                          Launch Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Premium Conversion CTA Banner */}
          <div
            style={{
              marginTop: 64,
              padding: '36px 40px',
              background: `linear-gradient(135deg, ${accent}12, #ffffff)`,
              border: `1px solid ${accent}33`,
              borderRadius: 'var(--radius)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, position: 'relative', zIndex: 2 }}>
              <div style={{ maxWidth: 580 }}>
                <p className="kicker" style={{ color: accent, marginBottom: 6 }}>Ready for Deployment</p>
                <h3 className="h2" style={{ margin: '0 0 10px', fontSize: '1.65rem' }}>Experience {product.name} in Action</h3>
                <p style={{ margin: 0, color: 'var(--text-2)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  Explore the live cloud demo or connect with our engineering team for dedicated deployment architecture, integration, and institutional licensing.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{ background: 'linear-gradient(135deg, #0d9488, #059669)', border: 'none', boxShadow: '0 4px 16px rgba(13, 148, 136, 0.35)' }}
                  >
                    Launch Interactive Demo &rarr;
                  </a>
                )}
                <Link className="btn btn-primary btn-lg" to="/contact" style={{ background: accent, border: 'none' }}>
                  Discuss Custom Deployment &rarr;
                </Link>
                <Link className="btn btn-ghost" to="/products">
                  &larr; View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
