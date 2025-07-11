
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Video Monitoring Website',
      description: 'Modern website built with Wordpress',
      longDescription: 'A full-featured video monitoring website built with WordPress, featuring real-time video streaming, user authentication, and a responsive design. It integrates with various video sources and provides a seamless user experience.',
      image: 'public\videomonitoringwebsite.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: 'Website',
      liveUrl: 'https://videomonitoring247.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern animations',
      longDescription: 'A stunning portfolio website featuring smooth animations, responsive design, and optimized performance. Built with React.js and Framer Motion for engaging user interactions.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      category: 'Website',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'WordPress Blog',
      description: 'Custom WordPress theme with advanced features',
      longDescription: 'A custom WordPress theme designed for bloggers and content creators. Features include custom post types, advanced customizer options, SEO optimization, and responsive design.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'SCSS', 'MySQL'],
      category: 'WordPress',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      longDescription: 'A comprehensive task management application with real-time collaboration, project management features, and team communication tools. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'Socket.io', 'Express.js', 'PostgreSQL'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering',
      longDescription: 'A beautiful restaurant website featuring menu display, online ordering system, reservation booking, and customer reviews. Optimized for mobile devices and local SEO.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'Node.js', 'Stripe', 'Google Maps API'],
      category: 'Website',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Educational platform with course management',
      longDescription: 'A comprehensive learning management system with course creation, student enrollment, progress tracking, and interactive quizzes. Features video streaming and discussion forums.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'AWS S3'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Web App', 'Website', 'WordPress'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and technical expertise
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-6"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card 
                className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
