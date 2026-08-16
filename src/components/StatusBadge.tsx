import type { ProductStatus } from '../data/types'

export function StatusBadge({ status }: { status: ProductStatus }) {
  const isReady = status === 'Ready to Deploy' || status === 'Available'
  const isDev = status === 'In Development'
  return (
    <span
      className={`status-badge${isReady ? ' status-badge--available' : isDev ? ' status-badge--dev' : ''}`}
      title={`Status: ${status}`}
    >
      {status}
    </span>
  )
}
