import { Card } from "@/components/ui/card"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "Redux", level: "Intermediate" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "RESTful APIs", level: "Intermediate" },
        { name: "Authentication", level: "Intermediate" },
        { name: "WebSocket", level: "Beginner" },
        { name: "Prisma", level: "Beginner" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Vercel", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
        { name: "Figma", level: "Intermediate" },
        { name: "npm/yarn", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
        { name: "Chrome DevTools", level: "Advanced" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "#84994F"
      case "Intermediate":
        return "#FFE797"
      case "Beginner":
        return "#a8a8a8"
      default:
        return "#84994F"
    }
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#84994F" }}>
          Skills & Technologies
        </h1>
        <p className="text-xl text-gray-400 mb-16">My technical expertise and proficiency levels</p>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <section key={index}>
              <h2 className="text-3xl font-bold mb-8" style={{ color: "#FFE797" }}>
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="p-5 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "65%" : "40%",
                            backgroundColor: getLevelColor(skill.level),
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium" style={{ color: getLevelColor(skill.level) }}>
                        {skill.level}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16">
          <Card className="p-8 bg-[#1a1a1a] border-[#84994F]/30">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFE797" }}>
              Currently Learning
            </h2>
            <div className="flex flex-wrap gap-3">
              {["GraphQL", "AWS", "Kubernetes", "CI/CD", "Testing (Jest)", "Microservices"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2a2a2a] text-gray-300 border border-[#84994F]/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
