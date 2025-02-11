'use client'

import { motion } from 'framer-motion'
import Video from './video'

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Video src={"hero-video.mp4"} className="hidden sm:block" />
        <Video src={"hero-mobile-view-hero.mp4"} className="block sm:hidden" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Capturing Life's
          <br />
          <span className="text-primary">Beautiful Moments</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Professional photography services for your most precious memories
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="/contact" 
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Book a Session
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
} 