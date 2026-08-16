import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

const PRINCIPLES = [
  {
    title: 'Practical first',
    text: 'Every product starts with a real problem a business is actually trying to manage, replace or improve.'
  },
  {
    title: 'Focused by design',
    text: 'Different businesses have different problems. We build focused software for each of them, not one bloated platform.'
  },
  {
    title: 'Honest about status',
    text: 'Products are built one at a time and shown for what they are - including everything still being built.'
  }
]

export function PhilosophySection() {
  return (
    <section className="section section--light">
      <div className="container">
        <Reveal>
          <SectionHead
            kicker="Brand Philosophy"
            title="Different businesses. Different problems. Different software."
            lead="Excel works until a business grows past it. Digi Tracks builds focused software for the moment a register, spreadsheet or disconnected set of tools stops being enough."
          />
        </Reveal>
        <div className="principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} className={`card${i === 0 ? '' : ''}`}>
              <h3 className="h3" style={{ marginBottom: 10 }}>
                {p.title}
              </h3>
              <p className="sub">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
