'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const blogPosts = {
  1: {
    title: 'The Art of Wedding Photography',
    content: `
      <p>Wedding photography is more than just taking pictures; it's about capturing emotions, moments, and memories that will last a lifetime...</p>
      <h2>Understanding Light</h2>
      <p>One of the most crucial aspects of wedding photography is understanding how to work with different lighting conditions...</p>
      <h2>Capturing Candid Moments</h2>
      <p>While posed shots are important, it's the candid moments that often become the most treasured photographs...</p>
    `,
    date: '2024-03-15',
    image: '/images/blog/wedding-tips.jpg',
    category: 'Tips & Tricks',
  },
  2: {
    title: 'Essential Camera Gear for Portrait Photography',
    content: `
      <p>Having the right equipment is crucial for creating stunning portrait photographs...</p>
      <h2>Camera Bodies</h2>
      <p>While any modern camera can take great portraits, there are certain features that can make your life easier...</p>
      <h2>Lenses</h2>
      <p>The lens choice can dramatically affect the look and feel of your portraits...</p>
    `,
    date: '2024-03-10',
    image: '/images/blog/camera-gear.jpg',
    category: 'Equipment',
  },
}

export default function BlogPost() {
  const params = useParams()
  const postId = Array.isArray(params.id) ? params.id[0] : params.id;
  const post = blogPosts[Number(postId) as keyof typeof blogPosts];

  if (!post) return <div>Post not found</div>

  return (
    <article className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          ← Back to Blog
        </Link>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </article>
  )
} 