"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { siteConfig } from "@/config/site"

export function HeroButtons() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const resumeUrl = '/Sunny_Shah_Resume.pdf'; // Assuming the PDF is in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sunny_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <Button onClick={downloadResume} size="lg" variant="outline" className="w-full sm:w-auto">
        Resume <Download className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
