import { Link } from 'react-router-dom'
import { Reveal } from '../Reveal'

export function PreviewSection({
  kicker,
  title,
  text,
  to,
  cta
}: {
  kicker: string
  title: string
  text: string
  to: string
  cta: string
}) {
  return (
    <Reveal className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'space-between' }}>
      <div>
        <p className="kicker">{kicker}</p>
        <h3 className="h3" style={{ marginBottom: 10 }}>
          {title}
        </h3>
        <p className="sub">{text}</p>
      </div>
      <Link className="p-arrow" to={to}>
        {cta}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </Reveal>
  )
}

export function LabAboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="split-2" style={{ gap: 20 }}>
          <PreviewSection
            kicker="Lab"
            title="Still being built."
            text="Concepts, prototypes and products in research. Everything in the lab is shown for what it is - not what it might one day claim to be."
            to="/lab"
            cta="Visit the Lab"
          />
          <PreviewSection
            kicker="About"
            title="Built independently. One product at a time."
            text="An independent software product initiative building focused products across multiple industries and technology areas."
            to="/about"
            cta="Read the story"
          />
        </div>
      </div>
    </section>
  )
}
