import { ProjectCard } from "@/components/project-card"
import { Navigation } from "@/components/navigation"

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Modern personal portfolio using React showcasing projects, education, and experience. Features engaging animations and dynamic content using react-spring.",
    tags: ["React", "JavaScript", "HTML/CSS", "Git"],
    date: "June 2023 - Present",
  },
  {
    title: "Graph Optimization and Routing",
    description:
      "Developed MST and TSP solutions with dynamic edge weight calculations and multiple solving approaches. Implemented memory optimization and thorough testing.",
    tags: ["C++", "Algorithms", "Git"],
    date: "November 2024",
  },
  {
    title: "Option Backtesting",
    description:
      "Implemented option pricing using binomial tree model, integrated with Tradier API for real-time data. Documented in Jupyter Notebook for transparency.",
    tags: ["Python", "NumPy", "APIs", "Git"],
    date: "May 2024 - July 2024",
  },
]

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

