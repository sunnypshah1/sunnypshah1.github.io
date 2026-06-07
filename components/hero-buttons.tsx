"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroButtons() {
  const downloadResume = () => {
    const resumeUrl = "/Sunny_Shah_Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Sunny_Shah_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Button asChild size="lg" className="group w-full sm:w-auto">
        <Link href="/projects">
          View projects
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
        <Link href="/contact">Contact me</Link>
      </Button>
      <Button onClick={downloadResume} size="lg" variant="outline" className="w-full sm:w-auto">
        Resume <Download className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
