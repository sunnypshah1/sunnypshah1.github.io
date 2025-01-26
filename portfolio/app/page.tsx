import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Background } from "@/components/background"

export const metadata: Metadata = {
  title: "Sunny Shah - Portfolio",
  description: "Software Engineer and Computer Science Student",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navigation />
      <div className="container px-4 mx-auto max-w-7xl">
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center">
          <HeroSection />
        </section>
        <section id="about" className="py-16">
          <AboutSection />
        </section>
        <section id="experience" className="py-16">
          <ExperienceSection />
        </section>
        <section id="projects" className="py-16">
          <ProjectsSection />
        </section>
        <section id="contact" className="py-16">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}

