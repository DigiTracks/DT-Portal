import { PRODUCTS } from '../../data/products'
import { ProductCard } from '../ProductCard'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

export function FeaturedSection() {
  const featured = PRODUCTS.filter((p) => p.featured)
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            kicker="Featured Products"
            title="A focused set of products, each solving one kind of problem"
            lead="Applications and platforms under active development across industries and technology areas."
          />
        </Reveal>
        <div className="product-grid">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
