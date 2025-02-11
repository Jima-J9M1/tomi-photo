'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validatedData = contactSchema.parse(formData)
      // Here you would typically send the data to your API
      console.log('Form data:', validatedData)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof ContactForm] = err.message
          }
        })
        setErrors(formattedErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2 bg-black/30 border rounded-lg focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-2 bg-black/30 border rounded-lg focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Service
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`w-full px-4 py-2 bg-black/30 border rounded-lg focus:ring-2 focus:ring-primary ${
            errors.service ? 'border-red-500' : 'border-gray-700'
          }`}
        >
          <option value="">Select a service</option>
          <option value="wedding">Wedding Photography</option>
          <option value="portrait">Portrait Session</option>
          <option value="event">Event Coverage</option>
          <option value="commercial">Commercial Photography</option>
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2 bg-black/30 border rounded-lg focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full bg-white text-black px-8 py-3 rounded-lg text-lg font-medium transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitSuccess && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-center"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.p>
      )}
    </form>
  )
} 