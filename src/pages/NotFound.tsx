import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta({
    title: 'Page not found - Digi Tracks',
    description: 'The page you are looking for could not be found.'
  })

  return (
    <section className="notfound">
      <div className="container">
        <div className="code" aria-hidden="true">
          404
        </div>
        <h1 className="h2" style={{ margin: '12px auto 12px', maxWidth: 480 }}>
          This page has not been built yet
        </h1>
        <p className="lead" style={{ margin: '0 auto 36px', maxWidth: 440 }}>
          The address may be wrong, or the page may have moved.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" to="/products">
            Explore products
          </Link>
        </div>
      </div>
    </section>
  )
}
