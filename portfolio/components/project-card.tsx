import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  date: string
  image?: string
}

export function ProjectCard({ title, description, tags, date, image }: ProjectCardProps) {
  return (
    <Card className="bg-secondary/50 border-white/10 hover:border-purple-500/50 transition group">
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
        <p className="text-sm text-gray-400">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-purple-500/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

