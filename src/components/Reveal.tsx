import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Reveal({ children, className = '', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediately show if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '40px' }
    )

    observer.observe(el)

    // Safety fallback: ensure content is never permanently hidden if observer stalls
    const fallbackTimer = setTimeout(() => {
      setVisible(true)
    }, 2500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={['reveal', className, visible ? 'is-visible' : ''].filter(Boolean).join(' ')}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(22px)',
        transition: 'opacity 0.6s var(--ease-standard), transform 0.6s var(--ease-standard)'
      }}
    >
      {children}
    </div>
  )
}