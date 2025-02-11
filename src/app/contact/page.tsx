'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ui/contact-form'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Ready to capture your special moments? Get in touch with us today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📍</span> 22 አክሱም ሆቴል አጠገብ ትጋት ህንፃ 1ኛ ፎቅ M22
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📞</span> 0926455964
              </p>
              <p className="flex items-center text-gray-300 cursor-pointer hover:text-blue-400 underline">
                <span className="mr-2 ">📸</span> <a href='https://www.instagram.com/tomiphotoandvelo/' target='_blank'>@tomi_tade_ i</a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Business Hours</h2>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  )
} 