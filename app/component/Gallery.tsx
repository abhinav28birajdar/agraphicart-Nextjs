import { ProjectCard } from './ProjectCard'

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting application",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "OpenWeatherMap API"],
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool for teams",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Firebase", "Vuex"],
    link: "https://example.com/project3"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://example.com/project4"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["Flutter", "Firebase", "HealthKit"],
    link: "https://example.com/project5"
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Custom blogging platform with CMS",
    imageUrl: "/placeholder.svg?height=300&width=400",
    tags: ["Django", "PostgreSQL", "AWS"],
    link: "https://example.com/project6"
  }
]

export function Gallery() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

