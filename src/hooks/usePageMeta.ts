import { useEffect } from 'react'

interface MetaInput {
  title: string
  description?: string
}

function updateMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta({ title, description }: MetaInput): void {
  useEffect(() => {
    document.title = title
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('name', 'twitter:title', title)

    if (description) {
      updateMetaTag('name', 'description', description)
      updateMetaTag('property', 'og:description', description)
      updateMetaTag('name', 'twitter:description', description)
    }
  }, [title, description])
}
