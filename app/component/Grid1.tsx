import React from "react";
import { Smartphone, Globe, Palette, Code, Layout, Users } from 'lucide-react';

const DevelopmentGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-100 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl lg:text-5xl font-bold text-purple mb-8 text-center">
        Crafting Digital Experiences
      </h1>
      <p className="text-lg lg:text-xl text-gray-300 mb-12 text-center max-w-2xl">
        Explore our expertise in Android development, web development, and UI/UX design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {developmentAreas.map((area, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-purple shadow-lg hover:shadow-blue-300/20 transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {area.icon}
              <h2 className="text-2xl font-bold text-blue-300 ml-3">
                {area.title}
              </h2>
            </div>
            <p className="text-gray-400">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const developmentAreas = [
  {
    title: "Android Development",
    description: "Creating robust and user-friendly mobile applications for Android devices using Kotlin and Java.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern frameworks like React, Angular, and Vue.js.",
    icon: <Globe className="w-8 h-8 text-blue-400" />
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces to enhance the overall user experience.",
    icon: <Palette className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Full-Stack Development",
    description: "Developing end-to-end solutions, combining frontend and backend technologies for comprehensive web applications.",
    icon: <Code className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Responsive Design",
    description: "Ensuring seamless user experiences across various devices and screen sizes through adaptive layouts.",
    icon: <Layout className="w-8 h-8 text-blue-400" />
  },
  {
    title: "User-Centered Design",
    description: "Focusing on user needs and preferences to create designs that are both functional and enjoyable to use.",
    icon: <Users className="w-8 h-8 text-blue-400" />
  }
];

export default DevelopmentGrid;

