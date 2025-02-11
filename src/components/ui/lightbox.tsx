'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface LightboxProps {
  images: {
    src: string
    alt: string
  }[]
  initialIndex?: number
  onClose: () => void
}

export const Lightbox = ({ images, initialIndex = 0, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          className="absolute left-4 top-4 text-white hover:text-gray-300 z-10"
          onClick={onClose}
        >
          Close
        </button>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
          onClick={(e) => {
            e.stopPropagation()
            handlePrevious()
          }}
        >
          Previous
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
          onClick={(e) => {
            e.stopPropagation()
            handleNext()
          }}
        >
          Next
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  )
} 