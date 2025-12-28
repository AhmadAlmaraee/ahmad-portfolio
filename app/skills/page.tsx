export default function SkillsPage() {
  const skills = [
    { name: "JavaScript / TypeScript", category: "Languages" },
    { name: "React / Next.js", category: "Frameworks" },
    { name: "HTML / CSS / Tailwind", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Git & GitHub", category: "Tools" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-24 mt-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{skill.category}</span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-150 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 leading-tight group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
