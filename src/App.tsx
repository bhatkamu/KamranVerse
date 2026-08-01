import { lazy, Suspense } from 'react'
import Aurora from './components/Aurora'
import HeroSection from './components/HeroSection'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingScreen from './components/LoadingScreen'

// Lazy-load below-the-fold sections to reduce initial bundle and speed up first paint
const MarqueeSection = lazy(() => import('./components/MarqueeSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const SoftwareSkills = lazy(() => import('./components/SoftwareSkills'))
const ContactSection = lazy(() => import('./components/ContactSection'))

export default function App() {
  return (
    <ErrorBoundary>
      <main className="bg-[#0C0C0C] min-h-screen relative">
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Aurora
            colorStops={['#00f8ff', '#e94033', '#3300ff']}
            blend={1}
            amplitude={1.0}
            speed={0.8}
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <Suspense fallback={<LoadingScreen />}>
            <MarqueeSection />
            <ServicesSection />
            <ProjectsSection />
            <AboutSection />
            <SoftwareSkills />
            <ContactSection />
          </Suspense>
        </div>
      </main>
    </ErrorBoundary>
  )
}