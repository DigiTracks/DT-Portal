import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

const orion = PRODUCTS.find((p) => p.slug === 'orion')!
const hunter = PRODUCTS.find((p) => p.slug === 'orion-hunter')!

export function DevTechSection() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null)

  const copyToClipboard = (cmd: string) => {
    navigator.clipboard?.writeText(cmd)
    setCopiedCmd(cmd)
    setTimeout(() => setCopiedCmd(null), 2000)
  }

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            kicker="Developer & Security Technology"
            title={
              <>
                Code intelligence and cybersecurity - <span className="grad-text">two distinct products</span>
              </>
            }
            lead="ORION and ORION HUNTER serve distinct technical domains. ORION provides high-speed developer code intelligence, AST taint tracking and dependency reachability in CI/CD; ORION HUNTER is an enterprise cybersecurity platform focused on security graph analysis, multi-hop attack path traversal, and authorization boundaries."
          />
        </Reveal>

        <div className="split-2 devtech-split">
          {/* ORION Product Panel */}
          <Reveal>
            <div className="devtech-card orion-card" style={{ ['--pc' as string]: orion.accent }}>
              <div className="dt-header">
                <div className="dt-title-row">
                  <img src={orion.logo} alt="" className="dt-logo" width="36" height="36" />
                  <div>
                    <span className="dt-category">{orion.category}</span>
                    <h3 className="dt-name">{orion.name}</h3>
                  </div>
                </div>
                <span className="status-badge status-badge--dev">In Development</span>
              </div>

              <p className="dt-desc">{orion.description}</p>

              {/* Copyable CLI Command Box */}
              <div className="dt-cmd-box">
                <div className="dt-cmd-text">
                  <span className="dt-cmd-prompt">$</span>
                  <code>{orion.installCommand || 'npm install -g @orionscanner/cli'}</code>
                </div>
                <button
                  type="button"
                  className="dt-copy-btn"
                  onClick={() => copyToClipboard(orion.installCommand || 'npm install -g @orionscanner/cli')}
                  aria-label="Copy install command"
                >
                  {copiedCmd === (orion.installCommand || 'npm install -g @orionscanner/cli') ? (
                    <span className="dt-copied">✓ Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Terminal View */}
              <div className="terminal">
                <div className="terminal-bar">
                  <span className="t-dot" style={{ background: '#ff5f57' }} />
                  <span className="t-dot" style={{ background: '#febc2e' }} />
                  <span className="t-dot" style={{ background: '#28c840' }} />
                  <span className="t-title">orion-cli / ast-sast-audit</span>
                </div>
                <div className="terminal-body">
                  <div className="t-line">
                    <span className="t-prompt">$ </span>
                    <span className="t-cmd">orion analyze ./src --reachability vex</span>
                  </div>
                  <div className="t-line">
                    <span className="t-out">indexing 14,200 AST nodes · tracing source-to-sink...</span>
                  </div>
                  <div className="t-line">
                    <span className="t-ok">[PASS]</span>
                    <span className="t-out"> 18 false-positive CVEs pruned via Reachability (VEX)</span>
                  </div>
                  <div className="t-line">
                    <span className="t-warn">[WARN]</span>
                    <span className="t-out"> 1 unescaped SQL parameter in auth_repo.ts:42</span>
                  </div>
                  <div className="t-line">
                    <span className="t-ok">[DONE]</span>
                    <span className="t-out"> HTML assurance report: http://127.0.0.1:8765</span>
                  </div>
                </div>
              </div>

              <div className="dt-capabilities">
                {orion.capabilities.slice(0, 6).map((c) => (
                  <span key={c} className="platform-badge">{c}</span>
                ))}
              </div>

              <div className="dt-footer">
                <Link to={orion.route} className="btn btn-primary">
                  Explore ORION CLI &rarr;
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ORION HUNTER Product Panel */}
          <Reveal>
            <div className="devtech-card hunter-card" style={{ ['--pc' as string]: hunter.accent }}>
              <div className="dt-header">
                <div className="dt-title-row">
                  <img src={hunter.logo} alt="" className="dt-logo" width="36" height="36" />
                  <div>
                    <span className="dt-category">{hunter.category}</span>
                    <h3 className="dt-name">{hunter.name}</h3>
                  </div>
                </div>
                <span className="status-badge status-badge--dev">In Development</span>
              </div>

              <p className="dt-desc">{hunter.description}</p>

              {/* Copyable CLI Command Box */}
              <div className="dt-cmd-box">
                <div className="dt-cmd-text">
                  <span className="dt-cmd-prompt">$</span>
                  <code>{hunter.installCommand || 'python -m hunter.cli.main scan /path'}</code>
                </div>
                <button
                  type="button"
                  className="dt-copy-btn"
                  onClick={() => copyToClipboard(hunter.installCommand || 'python -m hunter.cli.main scan /path')}
                  aria-label="Copy install command"
                >
                  {copiedCmd === (hunter.installCommand || 'python -m hunter.cli.main scan /path') ? (
                    <span className="dt-copied">✓ Copied</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Terminal View */}
              <div className="terminal">
                <div className="terminal-bar">
                  <span className="t-dot" style={{ background: '#ff5f57' }} />
                  <span className="t-dot" style={{ background: '#febc2e' }} />
                  <span className="t-dot" style={{ background: '#28c840' }} />
                  <span className="t-title">hunter / security-graph</span>
                </div>
                <div className="terminal-body">
                  <div className="t-line">
                    <span className="t-prompt">$ </span>
                    <span className="t-cmd">hunter solve --attack-path --target payments</span>
                  </div>
                  <div className="t-line">
                    <span className="t-out">traversing 15 relationship types across 60 in-house engines...</span>
                  </div>
                  <div className="t-line">
                    <span className="t-sec">[EXPLOIT PATH]</span>
                    <span className="t-out"> Public Webhook → JWT Bypass → Ledger Mutation</span>
                  </div>
                  <div className="t-line">
                    <span className="t-ok">[REMEDIATION]</span>
                    <span className="t-out"> Generated verified patch: ./patches/sec-042.patch</span>
                  </div>
                  <div className="t-line">
                    <span className="t-warn">[POLICY]</span>
                    <span className="t-out"> PCI-DSS v4.0 Compliance: 94% controls validated</span>
                  </div>
                </div>
              </div>

              <div className="dt-capabilities">
                {hunter.capabilities.slice(0, 6).map((c) => (
                  <span key={c} className="platform-badge">{c}</span>
                ))}
              </div>

              <div className="dt-footer">
                <Link to={hunter.route} className="btn btn-primary">
                  Explore ORION HUNTER &rarr;
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Request Access
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="devtech-disclaimer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              <strong>Technical Integrity Note:</strong> Neither ORION nor ORION HUNTER claims guaranteed exploit detection or certified third-party audit services. Both products operate completely offline and air-gapped without telemetry or external cloud dependencies.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
