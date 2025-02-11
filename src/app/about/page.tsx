'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
        
        <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/about/studio.jpg"
            alt="Our Studio"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-300 mb-6">
            With over a decade of experience in professional photography, we've had the privilege 
            of capturing countless precious moments and creating timeless memories for our clients.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-300 mb-6">
            We believe in creating natural, authentic photographs that tell your unique story. 
            Our style combines photojournalistic spontaneity with artistic composition to capture 
            genuine emotions and beautiful moments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To create timeless photographs that capture the essence of your special moments, 
                telling your story for generations to come.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted photography studio, known for our creativity, 
                professionalism, and ability to capture authentic moments.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 