export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Redux', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'WebSockets', level: 85 },
        { name: 'Microservices', level: 75 },
      ],
    },
    {
      title: 'Database & Storage',
      icon: '💾',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 85 },
        { name: 'Supabase', level: 80 },
        { name: 'Prisma', level: 85 },
        { name: 'SQL', level: 90 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Nginx', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Vercel', level: 90 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'Native APIs', level: 75 },
        { name: 'App Store Deploy', level: 80 },
      ],
    },
    {
      title: 'Design & UI/UX',
      icon: '✨',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Principles', level: 90 },
        { name: 'Accessibility', level: 85 },
        { name: 'Animation', level: 80 },
      ],
    },
  ]

  const tools = [
    'VS Code',
    'Git',
    'GitHub',
    'Postman',
    'Figma',
    'Docker',
    'Jira',
    'Slack',
    'Linear',
    'Notion',
    'Chrome DevTools',
    'AWS Console',
  ]

  const methodologies = [
    { name: 'Agile/Scrum', description: 'Experienced in sprint planning and agile workflows' },
    { name: 'Test-Driven Development', description: 'Writing tests first for robust applications' },
    { name: 'CI/CD', description: 'Automated testing and deployment pipelines' },
    { name: 'Code Review', description: 'Peer review and maintaining code quality' },
    { name: 'Documentation', description: 'Clear technical documentation and API specs' },
    { name: 'Pair Programming', description: 'Collaborative coding and knowledge sharing' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8 hover:border-[var(--primary)] transition-all duration-300 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tools & <span className="gradient-text">Software</span>
            </h2>
            <p className="text-gray-400">
              Everyday tools I use for development and collaboration
            </p>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300 cursor-default"
                >
                  <span className="text-gray-300 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodologies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Methodologies & <span className="gradient-text">Best Practices</span>
            </h2>
            <p className="text-gray-400">
              Development approaches and principles I follow
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)] transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications/Learning Section */}
        <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Always <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and best practices to stay at the forefront of web development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-6 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-2xl font-bold gradient-text">100+</div>
              <div className="text-sm text-gray-400">Hours of Learning</div>
            </div>
            <div className="px-6 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-2xl font-bold gradient-text">20+</div>
              <div className="text-sm text-gray-400">Online Courses</div>
            </div>
            <div className="px-6 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-400">Tech Articles Read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}