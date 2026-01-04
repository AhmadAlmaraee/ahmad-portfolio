import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[20vw] font-black whitespace-nowrap">
          DEVELOPER
        </h1>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Ahmad</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft beautiful, functional, and user-friendly web applications using modern technologies. 
              Passionate about clean code, great design, and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-12 justify-center lg:justify-start">
              
                <a href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
                <a href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
                <a href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[var(--primary)]/30 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)]">
                <div className="w-full h-full flex items-center justify-center text-8xl gradient-text">
                  A
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
<<<<<<< Updated upstream
}

const navItems = ["Work", "Services", "Process", "Contact"];

export function SecondaryHomePage() {
  return (
    <div className="min-h-screen bg-[#0b0f1f] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-semibold">
              AP
            </span>
            <div>
              <p className="text-lg font-semibold">Ahmad Studio</p>
              <p className="text-xs text-white/60">Portfolio 2024</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white"
          >
            Let&apos;s Talk
          </button>
        </header>

        <main className="flex flex-1 flex-col justify-center gap-12 pb-16 pt-10">
          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Freelance Product Designer
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Crafting digital
                <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text">
                  experiences with impact.
                </span>
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                I design landing pages and product experiences that blend bold visuals with
                crisp UX. Partner with me to launch experiences that feel modern, human,
                and unforgettable.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  View Case Studies
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white"
                >
                  Schedule a Call
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <div>
                  <p className="text-2xl font-semibold text-white">32+</p>
                  <p>Global clients</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">7yr</p>
                  <p>Design experience</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">98%</p>
                  <p>Repeat projects</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-6 top-6 h-52 w-52 rounded-full bg-indigo-500/30 blur-3xl" />
              <div className="absolute bottom-10 left-2 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Featured</p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Nova Fintech
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Reimagining onboarding flows with a human-first dashboard.
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full border border-white/20 px-3 py-1">UX Audit</span>
                    <span className="rounded-full border border-white/20 px-3 py-1">UI Kit</span>
                    <span className="rounded-full border border-white/20 px-3 py-1">Dev Handoff</span>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Brand Sprint",
                      detail: "1 week",
                    },
                    {
                      title: "Prototype",
                      detail: "Figma + Motion",
                    },
                    {
                      title: "Conversion",
                      detail: "+38% avg",
                    },
                    {
                      title: "Clients",
                      detail: "SaaS & Fintech",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        {item.title}
                      </p>
                      <p className="mt-2 text-lg font-semibold">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-6 text-sm text-white/50">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2024 Ahmad Studio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="transition hover:text-white">LinkedIn</span>
              <span className="transition hover:text-white">Behance</span>
              <span className="transition hover:text-white">Dribbble</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
=======
>>>>>>> Stashed changes
}