import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

const REASONS = [
  {
    title: 'Independent',
    text: 'No office claims, no invented teams, no borrowed credibility. Just software that is actually being built.'
  },
  {
    title: 'Practical',
    text: 'Products are aimed at problems businesses manage every day - registers, spreadsheets and disconnected tools that stop scaling.'
  },
  {
    title: 'Honest',
    text: 'Every product is shown for what it actually is - no claims ahead of the work, no borrowed credibility.'
  },
  {
    title: 'Gradual',
    text: 'Platforms like Unify are designed to be adopted module by module, not through a monolithic overnight replacement.'
  }
]

export function WhySection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHead
            center
            kicker="Why Digi Tracks"
            title="Built to be taken seriously, one product at a time"
          />
        </Reveal>
        <div className="principles-grid">
          {REASONS.map((r) => (
            <Reveal key={r.title} className="card">
              <h3 className="h3" style={{ marginBottom: 10 }}>
                {r.title}
              </h3>
              <p className="sub">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
