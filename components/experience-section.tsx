import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/config/experience"

export function ExperienceSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.company} className="bg-secondary/50 border-white/10">
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle>{exp.company}</CardTitle>
                    <p className="text-purple-400">{exp.title}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-gray-400">{exp.date}</p>
                  {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
