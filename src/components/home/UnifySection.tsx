import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UNIFY_MODULES } from '../../data/products'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

export function UnifySection() {
  const [selectedModule, setSelectedModule] = useState(UNIFY_MODULES[0])

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            center
            kicker="Business Platform"
            title={
              <>
                UNIFY - <span className="grad-text">one connected platform</span>, not eight companies
              </>
            }
            lead="A unified, modular business operations platform. Its modules are not separate products from independent vendors - they share one data architecture, adoptable module-by-module as your enterprise scales."
          />
        </Reveal>

        <Reveal>
          <div className="unify-shell">
            <div className="unify-head">
              <div className="u-name">UNIFY Platform</div>
              <p className="sub" style={{ marginTop: 8, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
                Activate the operational modules your enterprise needs today; seamlessly unlock additional modules tomorrow without data migration or multi-vendor integration glue.
              </p>
            </div>

            <div className="unify-interactive-layout">
              {/* Module selection grid */}
              <div className="unify-modules-grid" role="tablist" aria-label="UNIFY modules">
                {UNIFY_MODULES.map((m) => (
                  <button
                    key={m.slug}
                    role="tab"
                    aria-selected={selectedModule.slug === m.slug}
                    className={`unify-module-card ${selectedModule.slug === m.slug ? 'active' : ''}`}
                    onClick={() => setSelectedModule(m)}
                  >
                    <div className="u-m-top">
                      <span className="u-m-tag">{m.tagline}</span>
                      <span className="u-m-badge">{m.status}</span>
                    </div>
                    <span className="u-m-name">{m.name}</span>
                    <span className="u-m-desc">{m.description}</span>
                  </button>
                ))}
              </div>

              {/* Selected Module Detail Panel */}
              {selectedModule && (
                <div className="unify-detail-panel" role="tabpanel" aria-label={`${selectedModule.name} details`}>
                  <div className="u-d-header">
                    <div className="u-d-title-wrap">
                      <span className="u-d-kicker">{selectedModule.tagline} Module</span>
                      <h3 className="u-d-title">{selectedModule.name}</h3>
                    </div>
                    <Link to={selectedModule.route} className="btn btn-sm btn-primary">
                      Module Specs &rarr;
                    </Link>
                  </div>

                  <p className="u-d-problem">
                    <strong>Problem Solved: </strong>
                    {selectedModule.problem}
                  </p>

                  <div className="u-d-section">
                    <span className="u-d-label">Core Capabilities</span>
                    <ul className="u-d-caps">
                      {selectedModule.capabilities.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedModule.narrative && (
                    <div className="u-d-section">
                      <span className="u-d-label">Key Platform Enhancements</span>
                      <ul className="u-d-enhancements">
                        {selectedModule.narrative.enhances.slice(0, 3).map((e, idx) => (
                          <li key={idx}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="u-d-footer">
                    <span className="u-d-foot-meta">
                      Shared Schema · Role-Based Permissions · Single Tenant / Multi-Tenant Ready
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="unify-note">
              <span>UNIFY Architecture: 33 integrated operational modules sharing a single relational entity schema.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
