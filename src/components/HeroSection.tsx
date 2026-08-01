import FadeIn from './FadeIn'
import StaggeredMenu from './StaggeredMenu'
import ShinyText from './ShinyText'
import TextPressure from './TextPressure'

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

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full px-4" style={{ height: 'clamp(120px, 22vw, 320px)' }}>
            <TextPressure
              text="Hi, i'm kamu"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#dfdde9"
              minFontSize={36}
            />
          </div>
        </div>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-3 sm:pb-4 md:pb-5 px-6 md:px-10 mt-auto">
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
              className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]"
            />
          </FadeIn>
      </div>
    </section>
  )
}
