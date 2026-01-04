'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      detail: 'ahmad@example.com',
      link: 'mailto:ahmad@example.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      detail: 'Remote / Available',
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-4" />
                Send me a message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary)] transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    {info.link ? (
                      
                        <a href={info.link}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--primary)]/10 transition-colors duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                          <div className="text-white font-medium">{info.detail}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                          <div className="text-white font-medium">{info.detail}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  
                    <a key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-2">Available for Work</h3>
              <p className="text-gray-400 text-sm">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}