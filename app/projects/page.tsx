import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects } from "@/config/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Projects</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight">Things I have built.</h1>
          <p className="mt-5 leading-7 text-muted-foreground">
            A mix of distributed systems, operating systems, machine learning, networking, web systems, algorithms, and
            product work.
          </p>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article key={project.title} className="grid gap-5 py-7 lg:grid-cols-[1fr_260px_32px]">
              <div>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                {project.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>{project.date}</p>
                <p className="mt-3">{project.tags.join(" / ")}</p>
              </div>
              <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground lg:block" />
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
