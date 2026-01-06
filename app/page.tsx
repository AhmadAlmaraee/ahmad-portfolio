import Link from "next/link"
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 text-[200px] font-bold text-[#84994F]">CODE</div>
          <div className="absolute bottom-1/4 right-1/4 text-[200px] font-bold text-[#FFE797]">DEV</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance" style={{ color: "#84994F" }}>
            Hi, I'm Ahmad
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-medium" style={{ color: "#FFE797" }}>
            Software Engineering Student & Full-Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building modern web applications with clean code and exceptional user experiences.
            Currently pursuing my degree while creating innovative solutions for real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 text-black font-semibold"
              style={{ backgroundColor: "#84994F" }}
            >
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold border-2 bg-transparent"
              style={{ borderColor: "#FFE797", color: "#FFE797" }}
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT PREVIEW */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#FFE797" }}>
                About Me
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a Software Engineering student with a passion for creating elegant solutions to complex problems. My
                journey in tech started with curiosity and has evolved into a commitment to continuous learning and
                growth.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I specialize in full-stack development, combining modern frontend frameworks with robust backend systems
                to deliver seamless user experiences.
              </p>
              <Button asChild className="font-semibold" style={{ backgroundColor: "#84994F", color: "#0a0a0a" }}>
                <Link href="/about">
                  Read More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-[#84994F]/20 to-[#FFE797]/20 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="h-32 w-32 mx-auto mb-4" style={{ color: "#84994F" }} />
                <p className="text-xl font-semibold" style={{ color: "#FFE797" }}>
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS OVERVIEW */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#84994F" }}>
            Core Skills
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Technologies and tools I work with</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
              <Code2 className="h-12 w-12 mb-4" style={{ color: "#84994F" }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#FFE797" }}>
                Frontend Development
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
              </p>
            </Card>

            <Card className="p-8 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
              <Rocket className="h-12 w-12 mb-4" style={{ color: "#84994F" }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#FFE797" }}>
                Backend Development
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Creating scalable server-side applications with Node.js, Express, and database management systems.
              </p>
            </Card>

            <Card className="p-8 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
              <Palette className="h-12 w-12 mb-4" style={{ color: "#84994F" }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#FFE797" }}>
                UI/UX Design
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Crafting beautiful and intuitive designs with attention to detail and user-centered principles.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECTS */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#FFE797" }}>
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Some of my recent work</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack online shopping platform with payment integration and user authentication.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                image: "e-commerce dashboard with modern design",
              },
              {
                title: "Task Management App",
                description: "Collaborative task manager with real-time updates and team features.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "task board with cards and columns",
              },
              {
                title: "Portfolio CMS",
                description: "Content management system for creative professionals to showcase their work.",
                tech: ["Next.js", "Sanity", "Tailwind", "Vercel"],
                image: "portfolio grid with images",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#FFE797] transition-all hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-[#84994F]/30 to-[#FFE797]/30 flex items-center justify-center">
                  <img
                    src={`/.jpg?height=300&width=400&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#FFE797" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: "#84994F", color: "#0a0a0a" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 bg-transparent"
              style={{ borderColor: "#84994F", color: "#84994F" }}
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS / HOW I WORK */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#84994F" }}>
            How I Work
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">My approach to building exceptional software</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#84994F" }}
              >
                <span className="text-3xl font-bold text-black">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFE797" }}>
                Plan
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Understanding requirements, researching solutions, and creating a solid foundation before writing any
                code.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#84994F" }}
              >
                <span className="text-3xl font-bold text-black">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFE797" }}>
                Build
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Developing with best practices, clean code principles, and modern technologies to create robust
                solutions.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#84994F" }}
              >
                <span className="text-3xl font-bold text-black">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFE797" }}>
                Improve
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Testing, optimizing, and iterating based on feedback to deliver the best possible user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance" style={{ color: "#FFE797" }}>
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-12 py-6 text-black font-semibold"
            style={{ backgroundColor: "#FFE797" }}
          >
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
