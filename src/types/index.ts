export interface NavItem {
  href: string
  label: string
}

export interface Image {
  src: string
  alt: string
  title?: string
  description?: string
}

export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description?: string
}

export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  date: string
  image: string
  category: string
}

export interface Service {
  id: number
  title: string
  description: string
  image: string
  features: string[]
} 