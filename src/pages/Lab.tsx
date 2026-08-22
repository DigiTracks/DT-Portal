import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PRODUCTS } from '../data/products'
import { Reveal } from '../components/Reveal'

const STATUS_META: Record<string, { dot: string; label: string }> = {
  'Ready to Deploy':  { dot: '#10b981', label: 'Ready to Deploy' },
  'In Development':   { dot: '#f59e0b', label: 'In Development' },
  'Beta':             { dot: '#6366f1', label: 'Beta' },
  'Alpha':            { dot: '#0ea5e9', label: 'Alpha' },
  'Planned':          { dot: '#64748b', label: 'Planned' },
}

const STACKS: Record<string, string[]> = {
  vedik:            ['Next.js', 'React', 'Flutter', 'PostgreSQL'],
  chronos:          ['Electron', 'React', 'SQLite'],
  glowra:           ['React', 'Node.js', 'PostgreSQL'],
  garix:            ['React', 'FastAPI', 'Python'],
  hireez:           ['Next.js', 'TypeScript', 'AI/ML'],
  vertex:           ['React', 'Node.js'],
  unify:            ['React', 'Node.js', 'PostgreSQL'],
  orion:            ['Go', 'OSINT Engine'],
  'orion-hunter':   ['Go', 'Redis'],
}

export function Lab() {
  usePageMeta({
    title: 'Lab | Digi Tracks',
    description:
      'A transparent look at what we are building: active products, their build status, and what is still in the pipeline.'
  })

  return (
    <>
      {/* Simple header */}
      <section className="section section--tight" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <Reveal>
            <p className="kicker">What we are building</p>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: 12 }}>
              The Workbench
            </h1>
            <p className="lead" style={{ maxWidth: 620 }}>
              A transparent look at every product we are actively building, testing, or shipping. No fluff — just what exists, what works, and what is still being figured out.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product build list */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {PRODUCTS.map((p) => {
              const sm = STATUS_META[p.status] || STATUS_META['Planned']
              const stack = STACKS[p.slug] || []
              return (
                <Reveal key={p.slug}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: 0,
                      padding: '22px 0',
                      borderBottom: '1px solid var(--border)',
                      alignItems: 'start'
                    }}
                  >
                    {/* Left: Product info */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 10,
                          background: '#ffffff',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 5,
                          flexShrink: 0,
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <img src={p.logo} alt="" width="34" height="34" style={{ objectFit: 'contain' }} />
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
                          <Link
                            to={p.route}
                            style={{
                              fontWeight: 800,
                              fontSize: '1.05rem',
                              color: 'var(--text)',
                              textDecoration: 'none',
                              letterSpacing: '-0.02em'
                            }}
                          >
                            {p.name}
                          </Link>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.68rem',
                              color: 'var(--text-3)',
                              padding: '1px 8px',
                              background: 'var(--bg-soft)',
                              borderRadius: 4,
                              border: '1px solid var(--border)'
                            }}
                          >
                            {p.category}
                          </span>
                        </div>

                        <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                          {p.tagline}
                        </p>

                        {/* Tech stack + status in one line */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                          {/* Status dot + label */}
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 5,
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: sm.dot,
                              fontWeight: 700
                            }}
                          >
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: sm.dot, flexShrink: 0 }} />
                            {sm.label}
                          </span>

                          <span style={{ color: 'var(--border)', fontSize: '0.8rem' }}>·</span>

                          {stack.map(tech => (
                            <span
                              key={tech}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--text-3)',
                                padding: '1px 7px',
                                background: 'var(--bg-soft)',
                                borderRadius: 4,
                                border: '1px solid var(--border)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 4, flexShrink: 0 }}>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: '#059669',
                            textDecoration: 'none'
                          }}
                        >
                          Demo ↗
                        </a>
                      )}
                      <Link
                        to={p.route}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--text-3)',
                          textDecoration: 'none'
                        }}
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Honest closing note */}
          <Reveal>
            <div
              style={{
                marginTop: 48,
                padding: '24px 28px',
                background: 'var(--bg-soft)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--text)' }}>We're a small studio.</strong>{' '}
                Everything listed here is built by a tight team. If something looks useful, we'd rather talk to you directly than run you through a sales funnel.{' '}
                <Link to="/contact" style={{ color: 'var(--text)', fontWeight: 700 }}>
                  Get in touch →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
