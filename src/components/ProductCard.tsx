import { Link } from 'react-router-dom'
import type { Product } from '../data/types'
import { PlatformBadges } from './PlatformBadge'
import { StatusBadge } from './StatusBadge'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card product-card" style={{ ['--pc' as string]: product.accent, ['--pc2' as string]: product.accent }}>
      <div className="p-top">
        <img src={product.logo} alt="" className="p-logo" width="42" height="42" />
        <span className="p-cat">{product.category}</span>
      </div>
      <div className="p-status-row">
        <StatusBadge status={product.status} />
        {product.cli && <span className="p-cli-badge">CLI</span>}
        {product.demoUrl && (
          <a
            href={product.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-demo-link"
            onClick={(e) => e.stopPropagation()}
          >
            Demo Available
          </a>
        )}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="p-foot">
        <PlatformBadges platforms={product.platforms} />
        <Link className="p-arrow" to={product.route} aria-label={`Explore ${product.name}`}>
          Explore
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}
