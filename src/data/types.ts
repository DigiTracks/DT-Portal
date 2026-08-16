export type Category =
  | 'Education'
  | 'Healthcare'
  | 'Automotive'
  | 'Beauty & Wellness'
  | 'Business'
  | 'Finance'
  | 'HR'
  | 'Logistics'
  | 'Supply Chain'
  | 'Projects'
  | 'Procurement'
  | 'Developer Tools'
  | 'Cybersecurity'

export type ProductStatus =
  | 'Concept'
  | 'Prototype'
  | 'Research'
  | 'In Development'
  | 'Beta'
  | 'Available'
  | 'Ready to Deploy'
  | 'Planned'

export type Platform = 'Web' | 'Mobile' | 'Desktop' | 'CLI'

export type ProductType =
  | 'industry'
  | 'platform'
  | 'module'
  | 'specialized'
  | 'developer'
  | 'security'

export interface Product {
  id: string
  slug: string
  name: string
  category: Category
  type: ProductType
  parentProduct?: string
  tagline: string
  description: string
  problem: string
  capabilities: string[]
  platforms: Platform[]
  status: ProductStatus
  featured?: boolean
  visibility?: boolean
  route: string
  accent: string
  roadmap?: string[]
  logo: string
  demoUrl?: string
  cli?: boolean
  installCommand?: string
  deployment?: 'docker' | 'installer' | 'npm' | 'electron' | 'static' | 'vercel' | 'tauri'
  metrics?: {
    loc?: number
    endpoints?: number
    modules?: number
    tests?: number
    engines?: number
    entities?: number
  }
  narrative?: {
    purpose: string
    enhances: string[]
    removes: string[]
    unique: string[]
    reducedFriction: string[]
  }
  vertexTiers?: {
    tier: string
    target: string
    status: string
    capabilities: string[]
    activates: string[]
  }[]
  workshopTiers?: {
    tier: string
    target: string
    status: string
    capabilities: string[]
    activates: string[]
  }[]
  workshopMatrix?: {
    module: string
    garage: string | boolean
    workshop: string | boolean
    network: string | boolean
  }[]
  customizationRequirements?: {
    area: string
    requirements: string
  }[]
  studioTiers?: {
    tier: string
    target: string
    status: string
    capabilities: string[]
    activates: string[]
  }[]
  studioMatrix?: {
    module: string
    solo: string | boolean
    studio: string | boolean
    chain: string | boolean
  }[]
  frictionPoints?: {
    area: string
    detail: string
  }[]
  practiceTiers?: {
    tier: string
    target: string
    status: string
    capabilities: string[]
    activates: string[]
  }[]
  practiceMatrix?: {
    module: string
    solo: string | boolean
    clinic: string | boolean
    chain: string | boolean
  }[]
  differentiators?: {
    feature: string
    detail: string
  }[]
  educationTiers?: {
    tier: string
    target: string
    status: string
    capabilities: string[]
    activates: string[]
  }[]
  educationMatrix?: {
    module: string
    schools: string | boolean
    colleges: string | boolean
    universities: string | boolean
  }[]
}

export type ProductGroup = 'industry' | 'platform' | 'specialized' | 'developer' | 'security'
