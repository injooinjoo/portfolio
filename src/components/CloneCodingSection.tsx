
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CloneCodingSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Musign',
      date: 'May 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Music streaming interface clone',
      image: 'Project showcase mockup'
    },
    {
      title: 'E-commerce Platform',
      date: 'April 2024', 
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Shopping website clone',
      image: 'E-commerce interface'
    },
    {
      title: 'Social Media App',
      date: 'March 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'], 
      description: 'Social platform interface',
      image: 'Social media mockup'
    }
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Clone<br />Coding
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg mb-12">
            <p>I clone-coded web pages based on my understanding of Html, Css, and JavaScript.</p>
            <p>I thoroughly followed the box structure and designed it to be neat to make and use.</p>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Cards Stack */}
          <div className="relative">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`relative bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    index === currentProject ? 'border-black shadow-lg' : 'hover:border-gray-400'
                  }`}
                  onClick={() => setCurrentProject(index)}
                  style={{
                    transform: `translateY(${index * -10}px) scale(${1 - index * 0.02})`,
                    zIndex: projects.length - index
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-500">{project.image}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Preview */}
          <div className="relative">
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{projects[currentProject].title}</h3>
              <p className="mb-6">{projects[currentProject].description}</p>
              
              <div className="bg-black rounded-lg p-8 text-center">
                <h4 className="text-xl mb-4">Discover more projects</h4>
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentProject ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloneCodingSection;
