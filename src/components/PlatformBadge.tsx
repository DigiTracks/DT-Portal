import type { Platform } from '../data/types'

export function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  return (
    <span className="badge-row" aria-label={`Platforms: ${platforms.join(', ')}`}>
      {platforms.map((p) => (
        <span key={p} className="platform-badge">
          {p}
        </span>
      ))}
    </span>
  )
}
