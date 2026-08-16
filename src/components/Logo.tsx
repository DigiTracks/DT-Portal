interface LogoProps {
  className?: string
  height?: number
  showTagline?: boolean
}

export function Logo({ className = 'logo-img', height = 48, showTagline = false }: LogoProps) {
  return (
    <div className={`brand-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* High-Resolution Cropped Authentic Brand Logo */}
      <img
        src="/brand-logo.png"
        alt="DIGITRACKS"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '220px',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      {showTagline && (
        <span
          style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#64748b'
          }}
        >
          STUDIO
        </span>
      )}
    </div>
  )
}
