'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-8">{error.message}</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block bg-black/30 text-white px-6 py-2 rounded-lg hover:bg-black/50 transition-colors"
          >
            Go home
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 