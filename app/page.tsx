import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { projects } from "@/config/projects"
import { experiences } from "@/config/experience"
import { HeroButtons } from "@/components/hero-buttons"

export const metadata: Metadata = {
  title: "Sunny Shah - Portfolio",
  description: "Software Engineer and Computer Science Student",
}

export default function Home() {
  const featuredProjects = projects.slice(0, 4)
  const currentRole = experiences[0]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_420px]">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              CS + Math at Michigan
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              I build reliable software for distributed, data-heavy systems.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              I am Sunny Shah, a software engineer focused on distributed systems, AI tooling, machine learning, and
              practical products that are easy to use.
            </p>
            <div className="mt-8">
              <HeroButtons />
            </div>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 transition hover:text-foreground" />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 transition hover:text-foreground" />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email">
                <Mail className="h-5 w-5 transition hover:text-foreground" />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-md border border-border bg-secondary/40">
              <Image
                src="/photos/neon.png"
                alt="Sunny Shah"
                width={1053}
                height={1042}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-md border border-border">
                <Image
                  src="/photos/grand-canyon.png"
                  alt="Sunny Shah at the Grand Canyon"
                  width={1031}
                  height={1035}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-md border border-border">
                <Image
                  src="/photos/group-formal.png"
                  alt="Sunny Shah with friends"
                  width={1049}
                  height={1045}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Current</p>
              <h2 className="mt-3 text-3xl font-semibold">What I am doing now</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xl font-medium">{currentRole.title}</p>
                <p className="mt-2 text-muted-foreground">
                  {currentRole.company} - {currentRole.location}
                </p>
                <p className="mt-4 text-muted-foreground">{currentRole.bullets[0]}</p>
              </div>
              <div>
                <p className="text-xl font-medium">{siteConfig.education.university}</p>
                <p className="mt-2 text-muted-foreground">{siteConfig.education.degree}</p>
                <p className="mt-4 text-muted-foreground">{siteConfig.education.graduation}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold">Projects</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">
                All projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="grid gap-3 py-5 transition hover:bg-secondary/50 sm:grid-cols-[1fr_240px_24px]"
              >
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </div>
                <p className="text-sm text-muted-foreground">{project.tags.slice(0, 4).join(" / ")}</p>
                <ArrowRight className="h-4 w-4 self-center text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
