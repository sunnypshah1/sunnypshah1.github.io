import { Navigation } from "@/components/navigation"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container px-4 mx-auto py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>

          <Card className="bg-secondary/50 border-white/10">
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start gap-2">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

