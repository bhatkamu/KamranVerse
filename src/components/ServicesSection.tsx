import FadeIn from './FadeIn'
import ScrollFloat from './ScrollFloat'

const services = [
  {
    number: '01',
    title: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.'
  },
  {
    number: '02',
    title: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.'
  },
  {
    number: '03',
    title: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.'
  },
  {
    number: '04',
    title: 'Branding',
    description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.'
  },
  {
    number: '05',
    title: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={40}>
        <h2 className="font-black uppercase leading-none tracking-tight text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0">
              <div className="font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none flex-shrink-0">
                {service.number}
              </div>
              <div className="flex flex-col gap-2">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.08}
                  containerClassName="text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C] font-medium uppercase"
                >
                  {service.title}
                </ScrollFloat>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}