export default function About() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of scalable web applications using Next.js, React, and Node.js. Mentoring junior developers and architecting cloud-native solutions.',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      description: 'Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40% through optimization.',
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      description: 'Built responsive and accessible web interfaces. Collaborated with designers to bring creative visions to life with pixel-perfect implementations.',
    },
  ]

  const education = [
    {
      year: '2015 - 2019',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development.',
    },
  ]

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Code Commits', value: '10K+' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 text-center hover:border-[var(--primary)] transition-all duration-300 card-hover"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Left Column - Bio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-4" />
                My Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Ahmad, a passionate full stack developer with over 5 years of experience 
                  building modern web applications. My journey in software development started during 
                  my university years, where I discovered my love for creating solutions that make a 
                  real difference.
                </p>
                <p>
                  I specialize in building scalable, performant, and user-friendly applications using 
                  cutting-edge technologies. My expertise spans both frontend and backend development, 
                  with a strong focus on React, Next.js, TypeScript, Node.js, and cloud technologies.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with diverse teams and clients, 
                  delivering projects ranging from startups to enterprise-level applications. I'm constantly 
                  learning and staying up-to-date with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing 
                  technical blog posts, or exploring new technologies. I believe in the power of 
                  continuous learning and sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-4" />
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-[var(--border)] last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-[var(--primary)] border-4 border-[var(--background)]" />
                    <div className="text-sm text-[var(--primary)] font-semibold mb-1">
                      {exp.year}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-gray-400 mb-3">{exp.company}</div>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full mr-4" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-[var(--border)]"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-[var(--primary)] border-4 border-[var(--background)]" />
                    <div className="text-sm text-[var(--primary)] font-semibold mb-1">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <div className="text-gray-400 mb-3">{edu.institution}</div>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Quick Info</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <div className="text-white font-semibold">Remote / Available</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-white font-semibold">ahmad@example.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Availability</div>
                  <div className="text-white font-semibold">Open to opportunities</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Languages</div>
                  <div className="text-white font-semibold">English, Arabic</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <h3 className="text-lg font-bold mb-4">Core Values</h3>
                <div className="space-y-3">
                  {['Clean Code', 'User-Centric Design', 'Continuous Learning', 'Team Collaboration'].map((value, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[var(--primary)] mr-3" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                
                  <a href="/resume.pdf"
                  download
                  className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold text-center hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300 hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}