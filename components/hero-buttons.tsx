"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroButtons() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Button onClick={() => scrollTo("contact")} size="lg" className="group w-full sm:w-auto">
        Contact me
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
      </Button>
      <Button onClick={() => scrollTo("projects")} size="lg" variant="outline" className="w-full sm:w-auto">
        View Projects
      </Button>
      <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
        <a href="/Sunny_Shah_Resume.pdf" download>
          Resume <Download className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  )
}

