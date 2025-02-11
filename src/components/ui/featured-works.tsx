'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const featuredWorks = [
  {
    id: 1,
    title: 'Wedding Stories',
    description: 'Capturing love stories in their purest form',
    image: '/images/portfolio/wedding-1.jpg',
    category: 'Wedding',
  },
  {
    id: 2,
    title: 'Portrait Collection',
    description: 'Professional portraits that tell your story',
    image: '/images/portfolio/portrait-1.jpg',
    category: 'Portrait',
  },
  {
    id: 3,
    title: 'Event Coverage',
    description: 'Documenting your special moments',
    image: '/images/portfolio/event-1.jpg',
    category: 'Event',
  },
]

export const FeaturedWorks = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our finest photography work, showcasing our passion for capturing beautiful moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                    <p className="text-gray-300 mb-4">{work.description}</p>
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                      {work.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            View All Works
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 