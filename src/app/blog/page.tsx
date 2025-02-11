'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Wedding Photography',
    excerpt: 'Discover the secrets behind capturing perfect wedding moments...',
    date: '2024-03-15',
    image: '/images/blog/wedding-tips.jpg',
    category: 'Tips & Tricks',
  },
  {
    id: 2,
    title: 'Essential Camera Gear for Portrait Photography',
    excerpt: 'A comprehensive guide to the equipment every portrait photographer needs...',
    date: '2024-03-10',
    image: '/images/blog/camera-gear.jpg',
    category: 'Equipment',
  },
  // Add more blog posts
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blog</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Photography tips, behind-the-scenes stories, and industry insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 rounded-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 