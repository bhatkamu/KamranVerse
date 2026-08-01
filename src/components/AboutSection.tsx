import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'

export default function AboutSection() {
  const paragraphText = "I'm Kamran Hassan Bhat, a passionate Software Engineer and AI enthusiast dedicated to building modern, user-friendly, and high-performance applications. I thrive on turning innovative ideas into real-world solutions through cutting-edge technology.\n\nI continuously expand my skill set through hands-on projects and industry-recognized certifications. Notably, I achieved Rank #6 in the Google AI Program for Artificial Intelligence and Data Science, scored 85% in the BEEP (Shark Tank) program, and hold professional certifications across Claude AI, Data Science, and Data Engineering.\n\nMy core passion lies in software development, artificial intelligence, cloud technologies, and crafting exceptional digital experiences. I am driven by continuous learning, complex problem-solving, and building technology that creates a meaningful impact.\n\nReady to build something impactful? Let's work together to bring your ideas to life."

  return (
    <section id="about" className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center">
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} duration={0.9}>
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none"
        />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
          About me
        </h2>
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-12 sm:mt-16">
        <AnimatedText
          text={paragraphText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] whitespace-pre-line break-normal"
        />

      </div>
    </section>
  )
}