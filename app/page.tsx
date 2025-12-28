import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h2 className="text-[20rem] font-black tracking-tighter">AHMAD</h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl border border-slate-700/50 flex items-center justify-center">
                <span className="text-slate-500 text-sm font-medium">Profile Image</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full">
              <span className="text-sm font-medium text-slate-300">Available for work</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ahmad</span>
            </h1>

            <p className="text-2xl font-semibold text-slate-300 mb-6">Software Engineer & Web Developer</p>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Building modern, scalable websites and applications with cutting-edge technologies. Transforming ideas
              into exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300 font-semibold"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
