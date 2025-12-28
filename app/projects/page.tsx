export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features",
      tags: ["React", "Node.js", "WebSocket"],
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support and SEO optimization",
      tags: ["Next.js", "MDX", "PostgreSQL"],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with forecasts and alerts",
      tags: ["React", "API Integration", "Charts"],
    },
    {
      title: "Social Media App",
      description: "Social networking platform with posts, likes, and user profiles",
      tags: ["Next.js", "Supabase", "Auth"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 mt-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A collection of projects I've worked on, showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:from-slate-600 group-hover:to-slate-700 transition-all duration-300">
                  <span className="text-slate-500 text-sm font-medium">Project Preview</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
