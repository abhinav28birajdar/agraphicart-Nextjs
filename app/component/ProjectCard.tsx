import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/component/ui/card"
import { Badge } from "@/app/component/ui/Badge"
import { Button } from "./ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

