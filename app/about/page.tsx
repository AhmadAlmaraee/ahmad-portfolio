export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6 py-24 mt-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Who I Am</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate software engineer and web developer with a focus on creating beautiful, functional, and
              user-friendly digital experiences. I specialize in modern web technologies and enjoy turning complex
              problems into simple, elegant solutions.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">What I Do</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I build responsive web applications using the latest technologies like React, Next.js, and TypeScript. My
              work focuses on performance, accessibility, and creating seamless user experiences that make a difference.
            </p>
            <ul className="space-y-3">
              {[
                "Full-stack web development",
                "Modern UI/UX design implementation",
                "API development and integration",
                "Performance optimization",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">My Approach</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. Every project is an
              opportunity to learn something new and push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
