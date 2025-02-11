'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Lightbox } from '@/components/ui/lightbox'

const portfolioItems = [
  {
    id: 1,
    title: 'Wedding Photography',
    category: 'Wedding',
    image: '/images/portfolio/wedding-1.jpg',
  },
  {
    id: 2,
    title: 'Portrait Session',
    category: 'Portrait',
    image: '/images/portfolio/portrait-1.jpg',
  },
  // Add more items
]

const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Portfolio</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore our collection of captured moments, each telling its own unique story.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <Lightbox
              images={filteredItems.map(item => ({
                src: item.image,
                alt: item.title,
              }))}
              initialIndex={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
} 