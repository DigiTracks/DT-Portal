import { useMemo, useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { ALL_PRODUCTS, CATEGORIES } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'

export function Products() {
  usePageMeta({
    title: 'Products | Digi Tracks',
    description:
      'Explore the Digi Tracks product ecosystem: industry applications, the UNIFY modular business platform, and ORION / ORION HUNTER developer and security technology.'
  })

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_PRODUCTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!q) return true
      const haystack = [p.name, p.tagline, p.description, p.category, p.capabilities.join(' ')].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [query, category])

  return (
    <>
      <section className="section section--tight" style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)', paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 20 }}>
              <p className="kicker">Product Ecosystem</p>
              <h1 className="h1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: 12 }}>
                The Complete <span className="grad-text">Software Suite</span>
              </h1>
              <p className="lead" style={{ maxWidth: 780 }}>
                Explore, search, and inspect the complete Digi Tracks software portfolio across industry applications,
                modular business ERP platforms, and deterministic developer tools.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="explorer-tools" role="search" aria-label="Search products" style={{ marginTop: 24, marginBottom: 0 }}>
              <input
                type="search"
                className="search-input"
                placeholder="Search products, capabilities, industries..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search products"
              />
              <div className="filter-chips" role="group" aria-label="Filter by category">
                {['All', ...CATEGORIES].map((c) => (
                  <button
                    key={c}
                    className={`filter-chip${category === c ? ' active' : ''}`}
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(2rem, 3.5vw, 3rem)' }}>
        <div className="container">
          {results.length > 0 ? (
            <div className="product-grid">
              {results.map((p) => (
                <Reveal key={p.slug}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="explorer-empty">
              <h3 className="h3" style={{ marginBottom: 8 }}>
                No products found
              </h3>
              <p>Try a different search term or clear the category filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
