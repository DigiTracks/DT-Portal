import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

interface BenchmarkEntry {
  id: string
  name: string
  execution: number
  innovation: number
  reliability: number
  badge: string
}

const INITIAL_ENTRIES: BenchmarkEntry[] = [
  { id: '1', name: 'AlphaTech Core Engine', execution: 94, innovation: 88, reliability: 96, badge: 'Enterprise' },
  { id: '2', name: 'QuantumStream Pipeline', execution: 86, innovation: 98, reliability: 89, badge: 'DeepTech' },
  { id: '3', name: 'Apex Logistics Matrix', execution: 92, innovation: 82, reliability: 94, badge: 'SupplyChain' },
  { id: '4', name: 'PulseHealth Clinical Suite', execution: 88, innovation: 90, reliability: 91, badge: 'MedTech' },
  { id: '5', name: 'Nexus Secure Identity', execution: 90, innovation: 85, reliability: 97, badge: 'Security' }
]

export function Top10Section() {
  const top10 = PRODUCTS.find((p) => p.slug === 'top-10')

  const [weightExecution, setWeightExecution] = useState(40)
  const [weightInnovation, setWeightInnovation] = useState(30)
  const [weightReliability, setWeightReliability] = useState(30)

  // Calculate live scores
  const rankedEntries = [...INITIAL_ENTRIES].map((entry) => {
    const totalScore = (
      (entry.execution * weightExecution +
        entry.innovation * weightInnovation +
        entry.reliability * weightReliability) /
      100
    ).toFixed(1)
    return { ...entry, totalScore: parseFloat(totalScore) }
  }).sort((a, b) => b.totalScore - a.totalScore)

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="split-2">
          <Reveal>
            <SectionHead
              kicker="Specialized Platform"
              title={
                <>
                  Top 10 Platform - <span className="grad-text">scoring, rankings & leaderboards</span>
                </>
              }
              lead={top10?.description}
            />
            <ul className="cap-grid" style={{ marginBottom: 28 }}>
              {top10?.capabilities.map((c) => (
                <li key={c} className="cap-item" style={{ ['--pc' as string]: top10?.accent }}>
                  {c}
                </li>
              ))}
            </ul>
            {top10 && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Link className="btn btn-primary" to={top10.route}>
                  Explore Top 10 Platform
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link className="btn btn-ghost" to="/products">
                  All Products
                </Link>
              </div>
            )}
          </Reveal>

          <Reveal>
            {/* Interactive Live Leaderboard & Scoring Engine Widget */}
            <div className="top10-interactive-widget">
              <div className="t10-widget-header">
                <div className="t10-header-left">
                  <span className="t10-live-tag">LIVE ENGINE</span>
                  <span className="t10-title">Interactive Scoring & Leaderboard Preview</span>
                </div>
                <span className="t10-status-pill">Weights Active</span>
              </div>

              {/* Weight Adjustment Sliders */}
              <div className="t10-controls">
                <div className="t10-slider-group">
                  <div className="t10-slider-lbl">
                    <span>Execution ({weightExecution}%)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={weightExecution}
                    onChange={(e) => setWeightExecution(Number(e.target.value))}
                    className="t10-range"
                    aria-label="Execution weight"
                  />
                </div>

                <div className="t10-slider-group">
                  <div className="t10-slider-lbl">
                    <span>Innovation ({weightInnovation}%)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={weightInnovation}
                    onChange={(e) => setWeightInnovation(Number(e.target.value))}
                    className="t10-range"
                    aria-label="Innovation weight"
                  />
                </div>

                <div className="t10-slider-group">
                  <div className="t10-slider-lbl">
                    <span>Reliability ({weightReliability}%)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={weightReliability}
                    onChange={(e) => setWeightReliability(Number(e.target.value))}
                    className="t10-range"
                    aria-label="Reliability weight"
                  />
                </div>
              </div>

              {/* Live Leaderboard List */}
              <div className="t10-leaderboard" role="region" aria-label="Live leaderboard results">
                {rankedEntries.map((item, index) => (
                  <div key={item.id} className={`t10-row ${index === 0 ? 'top-rank' : ''}`}>
                    <div className="t10-rank">
                      <span className={`t10-badge rank-${index + 1}`}>#{index + 1}</span>
                    </div>
                    <div className="t10-info">
                      <strong className="t10-name">{item.name}</strong>
                      <span className="t10-meta-chip">{item.badge}</span>
                    </div>
                    <div className="t10-score-wrap">
                      <span className="t10-score">{item.totalScore}</span>
                      <span className="t10-score-lbl">PTS</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="t10-widget-footer">
                <span className="t10-foot-text">
                  Multi-tenant isolation · Custom weight algorithms · Public embed codes
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
