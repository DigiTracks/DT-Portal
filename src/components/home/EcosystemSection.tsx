import { EcosystemMap } from '../EcosystemMap'
import { SectionHead } from '../SectionHead'
import { Reveal } from '../Reveal'

export function EcosystemSection() {
  return (
    <section className="section" id="ecosystem">
      <div className="container">
        <Reveal>
          <SectionHead
            center
            kicker="Product Ecosystem"
            title={
              <>
                One studio. <span className="grad-text">Ten products.</span>
              </>
            }
            lead="Practical applications, business platforms and developer technology - built independently, one product at a time."
          />
        </Reveal>
        <Reveal>
          <EcosystemMap />
        </Reveal>
      </div>
    </section>
  )
}
