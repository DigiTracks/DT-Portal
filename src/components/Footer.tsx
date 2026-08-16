import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-simple-wrap">
          <div className="footer-left">
            <Link to="/" aria-label="Digi Tracks Home">
              <Logo height={32} />
            </Link>
            <span className="footer-copyright">
              &copy; {new Date().getFullYear()} Digi Tracks. All rights reserved.
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/lab">Lab</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer-right">
            <a href="mailto:digi.tracks@outlook.com" className="footer-email">
              digi.tracks@outlook.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
