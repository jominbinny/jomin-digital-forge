
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'AI Virtual Assistant',
    description: 'Built using Python libraries to listen and respond to prompts and perform system tasks.',
    tags: ['Python', 'Speech Recognition', 'AI'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1606&q=80',
    githubUrl: 'https://github.com/jominbinny',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Travel Guide App',
    description: 'Web app for locating destinations and parking spots in Kozhikode city.',
    tags: ['JavaScript', 'React', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    githubUrl: 'https://github.com/AmarnathSooraj/CalGo',
    demoUrl: 'calgo.vercel.app'
  },
  {
    id: 3,
    title: 'Inventory Management System',
    description: 'A supermarket management system developed as a school project with features like adding, updating, and deleting stock.',
    tags: ['Python', 'MySQL', 'Tkinter'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    githubUrl: 'https://github.com/jominbinny',
    demoUrl: '#'
  }
];

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <section id="portfolio" className="bg-darkBg">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="text-center text-mediumText mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my skills and expertise in different technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card border border-muted bg-secondary overflow-hidden h-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-mediumText mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-darkBg px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-neon transition-colors"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-neon transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
