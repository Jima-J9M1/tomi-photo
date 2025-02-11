'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const galleries = [
  {
    id: 1,
    title: 'Sarah & John Wedding',
    date: '2024-03-15',
    coverImage: '/images/portfolio/wedding-1.jpg',
    imageCount: 245,
  },
  {
    id: 2,
    title: 'Corporate Event 2024',
    date: '2024-02-28',
    coverImage: '/images/portfolio/event-1.jpg',
    imageCount: 180,
  },
  // Add more galleries
]

export default function Galleries() {
  const [password, setPassword] = useState('')
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null)

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password verification here
    console.log('Accessing gallery:', selectedGallery, 'with password:', password)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Client Galleries</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Access your private photo collection with the password provided.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={gallery.coverImage}
                  alt={gallery.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{gallery.title}</h3>
                <p className="text-gray-400 mb-4">
                  Date: {new Date(gallery.date).toLocaleDateString()}
                </p>
                <p className="text-gray-400 mb-4">{gallery.imageCount} Photos</p>
                <button
                  onClick={() => setSelectedGallery(gallery.id)}
                  className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Access Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Password Modal */}
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 p-8 rounded-lg max-w-md w-full"
            >
              <h3 className="text-2xl font-semibold mb-4">Enter Gallery Password</h3>
              <form onSubmit={handleAccess} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg"
                  placeholder="Enter password"
                  required
                />
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Access
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGallery(null)
                      setPassword('')
                    }}
                    className="flex-1 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
} 