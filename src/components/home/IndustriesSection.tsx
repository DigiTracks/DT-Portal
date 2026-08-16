import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products'
import { ProductCard } from '../ProductCard'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

export function IndustriesSection() {
  const industries = PRODUCTS.filter((p) => p.type === 'industry')
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHead
            kicker="Industry Applications"
            title="Software built for the businesses that run on registers"
            lead="Education, healthcare, automotive, beauty and wellness, HR and logistics - each application is built around the workflows of its industry."
          />
        </Reveal>
        <div className="product-grid">
          {industries.map((p) => (
            <Reveal key={p.slug}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p style={{ marginTop: 32 }}>
            <Link className="p-arrow" to="/products">
              Browse every product
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
