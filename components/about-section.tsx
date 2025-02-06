import { siteConfig } from "@/config/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <div className="space-y-8">
        <Card className="bg-secondary/50 border-white/10">
          <CardContent className="pt-6">
            <p className="text-gray-300 leading-relaxed">
              As a passionate software engineer and mathematics enthusiast, I thrive on solving complex problems and
              creating innovative solutions. Beyond my technical pursuits, I'm an avid poker player, enjoying the
              strategic elements and psychological aspects of the game. I also love staying active through running,
              which helps me maintain a clear mind and healthy lifestyle. In my free time, you can often find me
              experimenting with new recipes in the kitchen, as cooking allows me to express my creativity in a
              different medium.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50 border-white/10">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold">{siteConfig.education.university}</h3>
            <p className="text-gray-400">{siteConfig.education.degree}</p>
            <p className="text-gray-400">{siteConfig.education.graduation}</p>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 gap-2">
                {siteConfig.education.courses.map((course) => (
                  <p key={course} className="text-sm text-gray-400">
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50 border-white/10">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.languages.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-500/10 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.frameworks.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-500/10 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Developer Tools</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.tools.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-purple-500/10 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

