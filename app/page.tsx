import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import JourneySection from './components/JourneySection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
