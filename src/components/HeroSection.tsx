import FadeIn from './FadeIn'
import StaggeredMenu from './StaggeredMenu'
import ShinyText from './ShinyText'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Certificates', ariaLabel: 'View certificates', link: '#certificates' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://x.com/BHATKAMU_' },
  { label: 'GitHub', link: 'https://github.com/bhatkamu' },
  { label: 'Instagram', link: 'https://www.instagram.com/bhatkamu_09/?hl=en#' }
];

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-x-clip">
      {/* Menu Button - Top Right */}
      <div className="absolute top-0 right-0 h-full w-full z-50">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#020202', '#000000']}
          accentColor="#030303"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Hero Heading + Scroll Hint */}
      <FadeIn delay={0.15} y={40}>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-white font-black uppercase text-center text-[clamp(3rem,10vw,8rem)] leading-tight tracking-tight px-4">
            Hi, i'm kamu
          </h1>
          <FadeIn delay={0.35} y={20}>
            <ShinyText
              text="SCROLL TO EXPLORE"
              speed={1.1}
              delay={0.3}
              color="#3d3d3d"
              shineColor="#f0dda2"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]"
            />
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  )
}
