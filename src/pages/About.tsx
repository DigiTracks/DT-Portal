import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'

export function About() {
  usePageMeta({
    title: 'About | Digi Tracks',
    description:
      'About Digi Tracks: an independent software product studio building practical software for organizations outgrowing spreadsheets and generic tools.'
  })

  return (
    <>
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="kicker">About the Studio</p>
              <h1 className="h1" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginBottom: 20 }}>
                Independent software, <span className="grad-text">built with purpose</span>
              </h1>
              <p className="lead">
                Digi Tracks is an independent software product studio. We design and develop
                focused products across multiple industries and technology areas, from education and
                healthcare to automotive services, business platforms, and developer tooling.
              </p>
            </div>
          </Reveal>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 32 }}>
            <Reveal>
              <div className="card" style={{ height: '100%', padding: '32px 28px' }}>
                <h2 className="h3" style={{ marginBottom: 12 }}>
                  Philosophy
                </h2>
                <p className="sub">
                  Each product starts from a real operational problem: a register that overflows, a
                  spreadsheet that breaks, or three disconnected tools that should talk to each other
                  but don't. We build practical software that fits how businesses actually work.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="card" style={{ height: '100%', padding: '32px 28px' }}>
                <h2 className="h3" style={{ marginBottom: 12 }}>
                  Independence
                </h2>
                <p className="sub">
                  Digi Tracks is 100% independent. Every product in the portfolio is designed and
                  built by an independent developer, not a corporate team with borrowed
                  claims or VC growth pressure. We move carefully, build thoughtfully, and tell the
                  truth about what each product is.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <p className="kicker">Portfolio</p>
              <h2 className="h2" style={{ margin: '0 auto' }}>
                Applications, platforms and technology
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Six industry applications, the UNIFY modular business platform, and two developer and security technology products.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link className="btn btn-primary" to="/products">
                Explore the portfolio
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
