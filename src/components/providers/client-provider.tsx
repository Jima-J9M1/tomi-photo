'use client'

import { ThemeToggle } from '@/components/ui/theme-toggle'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export function ClientProvider() {
  return (
    <>
      <ScrollProgress />
      <ThemeToggle />
    </>
  )
} 