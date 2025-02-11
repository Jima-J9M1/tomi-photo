'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin', admin: true },
]

export function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              Tomi Photo
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            {links.filter(link => !link.admin || pathname.startsWith('/admin')).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md relative transition-colors
                  ${isActive(href)
                    ? 'text-white bg-purple-600 dark:bg-purple-500'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                {label}
                {isActive(href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-purple-600 dark:bg-purple-500 rounded-md -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 