import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

const projects = [
  {
    number: '01',
    category: 'BY ANTHROPIC',
    title: 'MASTER IN CLAUDE AI PROGRAM',
    col2Image: `${base}images/A487080F-E6B8-4360-8A7E-1030EAC79070.PNG`
  },
  {
    number: '02',
    category: 'BY GOOGLE',
    title: 'GOOGLE AI PROGRAM OF AI AND DATA SCIENCE',
    col2Image: `${base}images/IMG_0119.PNG`
  },
  {
    number: '03',
    category: 'BEEP',
    title: 'BEEP DATA ANALYTICS',
    col2Image: `${base}images/E032F2EC-7015-45AB-BA43-853B915A1255.PNG`
  }
]

const totalCards = projects.length

interface ProjectCardProps {
  project: (typeof projects)[number]
  index: number
  scrollYProgress: MotionValue<number>
}

function ProjectCard({ project, index, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(
    scrollYProgress,
    [index / totalCards, (index + 1) / totalCards],
    [targetScale + 0.05, targetScale]
  )

  return (
    <motion.div
      style={{ scale, position: 'sticky', top: `calc(6rem + ${index * 28}px)` }}
      className="mb-6 sm:mb-8"
    >
      <div className="w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8">
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(3rem,10vw,140px)] text-[#D7E2EA] leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-wider opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] text-lg sm:text-xl md:text-2xl font-medium uppercase">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="mt-6 sm:mt-8">
          <img
            src={project.col2Image}
            alt=""
            loading="lazy"
            className="w-full aspect-[16/10] object-cover rounded-[24px] xs:rounded-[32px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] 2xl:rounded-[80px]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-10 sm:pt-12 md:pt-14">
      <FadeIn y={40}>
        <h2 id="certificates" className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16 md:mb-20 px-5">
          Certificates
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}