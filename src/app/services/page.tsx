'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and style. Our wedding photography packages include pre-wedding shoots, full-day coverage, and beautifully crafted albums.',
    image: '/images/services/wedding.jpg',
    features: [
      'Engagement Session',
      'Full Day Coverage',
      'Second Photographer',
      'High-Resolution Images',
      'Custom Wedding Album',
    ],
  },
  {
    id: 2,
    title: 'Portrait Photography',
    description: 'Professional portraits for individuals, families, and corporate clients. We create stunning images that capture your personality and brand.',
    image: '/images/services/portrait.jpg',
    features: [
      'Individual Portraits',
      'Family Sessions',
      'Corporate Headshots',
      'Location Shoots',
      'Digital Delivery',
    ],
  },
  // Add more services
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Professional photography services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 