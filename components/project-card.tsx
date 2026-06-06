import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  date: string
  bullets?: string[]
  image?: string
}

export function ProjectCard({ title, description, tags, date, bullets, image }: ProjectCardProps) {
  return (
    <Card className="bg-secondary/50 border-border hover:border-primary/50 transition group">
      <CardHeader>
        {image && (
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {bullets && (
          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-primary/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
