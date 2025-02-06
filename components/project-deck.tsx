"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { projects } from "@/config/projects"

export function ProjectDeck() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevProject}
          className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextProject}
          className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Card className="bg-secondary/50 border-white/10 hover:border-purple-500/50 transition">
        <CardHeader>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <p className="text-sm text-gray-400">{project.date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-purple-500/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-8 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

