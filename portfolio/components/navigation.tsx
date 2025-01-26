"use client"

import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-xl font-bold hover:text-purple-400 transition"
          >
            {siteConfig.name}
          </button>
          <button className="sm:hidden p-2" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden sm:flex items-center gap-6 lg:gap-8">
            {["about", "experience", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={cn(
                  "text-base hover:text-purple-400 transition capitalize",
                  activeSection === section && "text-purple-400",
                )}
              >
                {section}
              </button>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                className="hover:text-purple-400 transition"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                className="hover:text-purple-400 transition"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

