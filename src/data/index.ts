export interface Photo {
  id: string
  title: string
  category: string
  image: string
  description?: string
  date: string
  featured?: boolean
}

export interface Gallery {
  id: string
  title: string
  description: string
  date: string
  photos: Photo[]
  password: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  coverImage: string
  date: string
  category: string
}

// Initial data storage
export const photos: Photo[] = []
export const galleries: Gallery[] = []
export const blogPosts: BlogPost[] = []

// Save data to localStorage
export const saveData = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('photos', JSON.stringify(photos))
    localStorage.setItem('galleries', JSON.stringify(galleries))
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
  }
}

// Load data from localStorage
export const loadData = () => {
  if (typeof window !== 'undefined') {
    const savedPhotos = localStorage.getItem('photos')
    const savedGalleries = localStorage.getItem('galleries')
    const savedBlogPosts = localStorage.getItem('blogPosts')

    if (savedPhotos) photos.push(...JSON.parse(savedPhotos))
    if (savedGalleries) galleries.push(...JSON.parse(savedGalleries))
    if (savedBlogPosts) blogPosts.push(...JSON.parse(savedBlogPosts))
  }
} 