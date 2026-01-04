const navItems = ["Work", "Services", "Process", "Contact"];

export default function HomePage() {
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
}
