import { Link } from 'react-router-dom'
import { Reveal } from '../Reveal'

export function ContactCtaSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="card" style={{ textAlign: 'center', padding: '56px 32px', position: 'relative', overflow: 'hidden' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 340,
              height: 340,
              borderRadius: '50%',
              background: 'var(--accent)',
              opacity: 0.08,
              filter: 'blur(70px)',
              top: -120,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          <h2 className="h2" style={{ margin: '0 auto 14px', position: 'relative' }}>
            Have a problem worth building software for?
          </h2>
          <p className="lead" style={{ margin: '0 auto 32px' }}>
            Tell us what you are trying to manage, replace or improve.
          </p>
          <Link className="btn btn-primary" to="/contact" style={{ position: 'relative' }}>
            Start a Conversation
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
