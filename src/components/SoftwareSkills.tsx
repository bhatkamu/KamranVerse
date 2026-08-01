import FadeIn from './FadeIn'

const skills = [
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'Python', level: 75, color: '#3776AB' },
  { name: 'HTML/CSS', level: 90, color: '#E34F26' },
  { name: 'Tailwind CSS', level: 85, color: '#38B2AC' },
  { name: 'Git', level: 80, color: '#F05032' },
  { name: 'Xcode', level: 96, color: '#147EFB' },
]

export default function SoftwareSkills() {
  return (
     <section id="skills" className="py-20 sm:py-24 md:py-32">
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-8 sm:mb-10 md:mb-12 px-5">
          Software Skills
        </h2>
      </FadeIn>
      <FadeIn y={20}>
        <p className="text-center text-[#D7E2EA] text-[clamp(1rem,2vw,1.2rem)] mb-12 sm:mb-16 md:mb-20 px-5 max-w-3xl mx-auto">
          I specialize in designing and developing <span className="text-white font-semibold">macOS software</span>, <span className="text-white font-semibold">iOS apps</span>, and <span className="text-white font-semibold">web applications</span>
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.1} y={20}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#0C0C0C]">{skill.name}</h3>
                  <span className="text-2xl font-bold text-[#0C0C0C]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn y={20} delay={0.2}>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#0C0C0C] mb-4">Professional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Web Development', 'Mobile Apps', 'UI/UX Design', 'API Integration',
                'Database Design', 'Cloud Computing', 'Agile Methodology', 'Problem Solving'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-[#0C0C0C]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}