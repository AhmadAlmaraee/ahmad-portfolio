'use client'

import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management application with real-time updates, team workspaces, and productivity analytics.',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts.',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      category: 'web',
      description: 'Headless CMS for portfolio websites with drag-and-drop builder and dynamic content management.',
      image: 'bg-gradient-to-br from-purple-500 to-pink-600',
      tech: ['Next.js', 'Sanity.io', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'AI Chat Application',
      category: 'ai',
      description: 'Intelligent chat application powered by AI with natural language processing and context awareness.',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Mobile-first fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'bg-gradient-to-br from-red-500 to-orange-600',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my recent work and side projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                  : 'bg-[var(--card-bg)] border border-[var(--border)] text-gray-400 hover:text-white hover:border-[var(--primary)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden card-hover hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Project Image/Gradient */}
              <div className={`relative h-48 ${project.image} flex items-center justify-center overflow-hidden`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="relative text-6xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  
                    <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] text-center text-gray-300 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                  
                    <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-center hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Like what you see?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and exploring new technologies. 
            Check out my GitHub for more or get in touch to discuss potential collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-105"
            >
              View GitHub Profile
            </a>
            
              <a href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}