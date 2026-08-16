import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PRODUCTS } from '../data/products'
import { Reveal } from '../components/Reveal'
import { StatusBadge } from '../components/StatusBadge'

export function Lab() {
  usePageMeta({
    title: 'R&D Lab | Digi Tracks',
    description:
      'The Digi Tracks engineering laboratory: architecture benchmarks, prototype validation, and active software platforms under development.'
  })

  return (
    <>
      <section className="section section--tight" style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)', paddingTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="kicker">Engineering & Research</p>
              <h1 className="h1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: 12 }}>
                The <span className="grad-text">Active Workbench</span>
              </h1>
              <p className="lead" style={{ maxWidth: 800 }}>
                Transparent view into the Digi Tracks engineering pipeline. Every platform here is engineered with deterministic logic, zero-cloud dependency, and air-gapped security models.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lab-enterprise-grid">
            {PRODUCTS.map((p) => (
              <Reveal key={p.slug} className="lab-card-panel">
                <div className="lab-card-header">
                  <div className="lab-logo-wrap">
                    <img src={p.logo} alt="" className="lab-product-img" />
                    <div>
                      <span className="lab-cat-tag">{p.category}</span>
                      <h3 className="lab-card-title">
                        <Link to={p.route} className="lab-title-link">
                          {p.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                <p className="lab-card-tagline">{p.tagline}</p>
                <p className="lab-card-desc">{p.description}</p>

                <div className="lab-card-footer">
                  <div className="lab-platforms">
                    {p.platforms.map((plat) => (
                      <span key={plat} className="lab-platform-chip">
                        {plat}
                      </span>
                    ))}
                  </div>
                  <Link to={p.route} className="lab-inspect-btn">
                    Inspect Architecture &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
