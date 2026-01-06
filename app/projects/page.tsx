import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive online shopping platform featuring user authentication, product management, shopping cart functionality, and secure payment processing with Stripe integration.",
      image: "modern e-commerce website with product grid",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "Full-Stack",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and instant updates using WebSocket technology.",
      image: "task management board interface",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Full-Stack",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system designed for creative professionals to showcase their work with customizable templates and easy content editing capabilities.",
      image: "portfolio website builder interface",
      tech: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      category: "Full-Stack",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application providing current conditions and forecasts with beautiful visualizations and location-based services.",
      image: "weather app with forecast cards",
      tech: ["React", "TypeScript", "Weather API", "Chart.js"],
      category: "Frontend",
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform with markdown support, tag system, search functionality, and user comments powered by a headless CMS.",
      image: "blog homepage with article cards",
      tech: ["Next.js", "MDX", "Contentful", "PostgreSQL"],
      category: "Full-Stack",
    },
    {
      title: "Recipe Finder",
      description:
        "Recipe discovery application with advanced search filters, favorites system, and step-by-step cooking instructions with nutritional information.",
      image: "recipe app with food images",
      tech: ["React", "Node.js", "Recipe API", "MongoDB"],
      category: "Full-Stack",
    },
  ]

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#84994F" }}>
          My Projects
        </h1>
        <p className="text-xl text-gray-400 mb-16">A collection of projects showcasing my skills and experience</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#FFE797] transition-all hover:scale-105"
            >
              <div className="h-56 bg-gradient-to-br from-[#84994F]/30 to-[#FFE797]/30 flex items-center justify-center overflow-hidden">
                <img
                  src={`/.jpg?height=350&width=500&query=${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#84994F", color: "#0a0a0a" }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#FFE797" }}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded text-xs font-medium bg-[#2a2a2a] text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    style={{ borderColor: "#84994F", color: "#84994F" }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1" style={{ backgroundColor: "#FFE797", color: "#0a0a0a" }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
