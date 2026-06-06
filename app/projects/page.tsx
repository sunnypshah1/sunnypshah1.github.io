import { ProjectCard } from "@/components/project-card"
import { Navigation } from "@/components/navigation"
import { projects } from "@/config/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container px-4 mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
