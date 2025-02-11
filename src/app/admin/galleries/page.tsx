'use client'

import { useState, useEffect } from 'react'
import { Gallery, galleries, photos, saveData, loadData } from '@/data'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function GalleriesManagement() {
  const [galleryList, setGalleryList] = useState<Gallery[]>([])
  const [newGallery, setNewGallery] = useState({
    title: '',
    description: '',
    password: '',
    selectedPhotos: [] as string[]
  })

  useEffect(() => {
    loadData()
    setGalleryList(galleries)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newGalleryItem: Gallery = {
      id: Date.now().toString(),
      title: newGallery.title,
      description: newGallery.description,
      date: new Date().toISOString(),
      password: newGallery.password,
      photos: photos.filter(photo => newGallery.selectedPhotos.includes(photo.id))
    }

    galleries.push(newGalleryItem)
    setGalleryList([...galleries])
    saveData()

    // Reset form
    setNewGallery({
      title: '',
      description: '',
      password: '',
      selectedPhotos: []
    })
  }

  const handleDelete = (id: string) => {
    const index = galleries.findIndex(gallery => gallery.id === id)
    if (index !== -1) {
      galleries.splice(index, 1)
      setGalleryList([...galleries])
      saveData()
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-8"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Gallery Management</h1>
        <p className="text-blue-100">Create and manage client galleries.</p>
      </div>

      {/* Add Gallery Form */}
      <motion.form
        variants={item}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gallery Title
            </label>
            <input
              type="text"
              required
              value={newGallery.title}
              onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 dark:bg-gray-700"
              placeholder="Enter gallery title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={newGallery.description}
              onChange={(e) => setNewGallery({ ...newGallery, description: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 dark:bg-gray-700"
              rows={4}
              placeholder="Enter gallery description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password Protection
            </label>
            <input
              type="password"
              required
              value={newGallery.password}
              onChange={(e) => setNewGallery({ ...newGallery, password: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-600 dark:bg-gray-700"
              placeholder="Enter gallery password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Photos
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`relative cursor-pointer rounded-lg overflow-hidden ${
                    newGallery.selectedPhotos.includes(photo.id)
                      ? 'ring-2 ring-blue-600'
                      : ''
                  }`}
                  onClick={() => {
                    const selected = newGallery.selectedPhotos.includes(photo.id)
                    setNewGallery({
                      ...newGallery,
                      selectedPhotos: selected
                        ? newGallery.selectedPhotos.filter(id => id !== photo.id)
                        : [...newGallery.selectedPhotos, photo.id]
                    })
                  }}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-32 object-cover"
                  />
                  {newGallery.selectedPhotos.includes(photo.id) && (
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Gallery
          </button>
        </div>
      </motion.form>

      {/* Galleries List */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {galleryList.map((gallery) => (
            <motion.div
              key={gallery.id}
              variants={item}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                {gallery.photos[0] && (
                  <img
                    src={gallery.photos[0].image}
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    {gallery.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {gallery.photos.length} photos
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {gallery.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(gallery.date).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => handleDelete(gallery.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
} 