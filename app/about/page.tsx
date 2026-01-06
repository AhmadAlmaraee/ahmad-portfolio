import { GraduationCap, Target, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#84994F" }}>
          About Me
        </h1>
        <p className="text-xl text-gray-400 mb-16">Get to know more about my journey and passion</p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFE797" }}>
            Who I Am
          </h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm Ahmad, a Software Engineering student with a deep passion for creating meaningful digital experiences.
              My journey into software development began with a curiosity about how things work behind the scenes, and
              it has evolved into a commitment to building solutions that make a difference.
            </p>
            <p>
              As a full-stack developer, I enjoy working across the entire development stack—from designing intuitive
              user interfaces to architecting scalable backend systems. I believe great software is where technical
              excellence meets thoughtful design.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest technologies and best practices. Whether it's
              exploring a new framework, contributing to open-source projects, or solving challenging problems, I'm
              always eager to grow and improve my craft.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#FFE797" }}>
            My Journey
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-[#1a1a1a] border-[#84994F]/30">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 mt-1" style={{ color: "#84994F" }} />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#FFE797" }}>
                    Education
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Currently pursuing a Bachelor's degree in Software Engineering. My coursework includes data
                    structures, algorithms, database systems, software architecture, and web development. I'm gaining
                    hands-on experience through academic projects and personal initiatives.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#1a1a1a] border-[#84994F]/30">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 mt-1" style={{ color: "#84994F" }} />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#FFE797" }}>
                    Goals
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    My goal is to become a skilled software engineer who creates impactful products. I'm particularly
                    interested in full-stack development and building scalable web applications. I'm actively seeking
                    internship opportunities where I can apply my skills, learn from experienced professionals, and
                    contribute to meaningful projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#1a1a1a] border-[#84994F]/30">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 mt-1" style={{ color: "#84994F" }} />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#FFE797" }}>
                    Interests
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond coding, I'm passionate about UI/UX design, open-source contributions, and staying current
                    with tech trends. I enjoy problem-solving through coding challenges, reading tech blogs, and
                    experimenting with new technologies. I also value collaboration and learning from the developer
                    community.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFE797" }}>
            What I Bring
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Strong foundation in computer science fundamentals",
              "Experience with modern web development frameworks",
              "Problem-solving mindset and analytical thinking",
              "Attention to detail and code quality",
              "Effective communication and teamwork skills",
              "Eagerness to learn and adapt to new technologies",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#84994F" }} />
                </div>
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
