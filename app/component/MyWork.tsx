import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A user-friendly, fully responsive online store with secure checkout, optimized for mobile and desktop devices.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "An intuitive mobile app for Android users to organize, track, and prioritize tasks with a simple and sleek UI.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive web dashboard for managing multiple social media accounts, including analytics and engagement tracking.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 4,
    title: "Fitness Tracking Website",
    description: "A responsive website that allows users to track their fitness goals, monitor progress, and connect with personal trainers.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 5,
    title: "Travel Blog",
    description: "A beautiful and interactive blog for showcasing travel experiences, photography, and tips with a seamless mobile experience.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A sleek, intuitive mobile app for weather forecasts with real-time updates and location-based alerts, built with a focus on UI/UX design.",
    imageUrl: "/placeholder.svg?height=300&width=400"
  }
];

const MyWork: React.FC = () => {
  return (
    <section className="bg-black-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-purple mb-8 text-center">Showcasing My Digital Creations</h2>
        <p className="text-center  md:text-lg text-lg text-gray-400 mb-12">Explore a selection of my recent projects that showcase my skills as a UI/UX Designer, Android Developer, and Web Developer.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={`#project-${project.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
