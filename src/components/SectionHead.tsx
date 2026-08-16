import type { ReactNode } from 'react'

interface SectionHeadProps {
  kicker?: string
  title: ReactNode
  lead?: ReactNode
  center?: boolean
  id?: string
}

export function SectionHead({ kicker, title, lead, center = false, id }: SectionHeadProps) {
  return (
    <div className={`section-head${center ? ' center' : ''}`} id={id}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}
