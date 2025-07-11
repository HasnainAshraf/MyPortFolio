
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
      description: 'Professional security service site built with WordPress & Elementor',
      longDescription: 'This website showcases 24/7 live video monitoring solutions offered by iLink Professionals. It includes service overviews, package pricing, contact integration, and a responsive design for all devices. Developed in WordPress with Elementor, the site emphasizes trust, clarity, and user experience for potential B2B clients in the security space.',
      image: '/videomonitoringwebsite.png',
      technologies: ['WordPress CMS',
  'Elementor (or WPBakery, if used)',
  'PHP',
  'HTML5 & CSS3',
  'JavaScript',
  'MySQL Database',
  'Responsive Design',
  'Custom Post Types & Plugins'],
      category: 'WordPress',
      liveUrl: 'https://videomonitoring247.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Point of Sale System',
      description: 'Advanced POS solution for retail & restaurants',
      longDescription: 'iPOS is an advanced Point of Sale system developed by iLink Professionals, designed for retail stores and restaurants. It offers smart inventory management, billing, sales reports, customer tracking, and multi-device compatibility. Built for speed and efficiency, it works seamlessly across POS terminals, tablets, and desktops.',
      image: '/poswebsite.png',
      technologies: ['WordPress CMS',
  'Elementor (or WPBakery, if used)',
  'PHP',
  'HTML5 & CSS3',
  'JavaScript',
  'MySQL Database',
  'Responsive Design',
  'Custom Post Types & Plugins'],
      category: 'WordPress',
      liveUrl: 'https://www.ilinkpro.com/ipos/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Audio/Visual & LED Wall Solutions',
      description: 'Modern AV service website built with WordPress',
      longDescription: 'DSPAV is a professionally designed WordPress website developed for a company specializing in Audio/Visual systems, LED walls, lighting, and staging solutions. The site features a clean, responsive design with sections for services, industries served, contact forms, and portfolio visuals. Built using Elementor with SEO optimization, it provides an informative and user-friendly experience for potential commercial clients.',
      image: '/dspavwebsite.png',
      technologies: ['WordPress CMS',
    'Elementor Page Builder',
    'PHP',
    'JavaScript',
    'HTML5 & CSS3',
    'MySQL Database',
    'Responsive Web Design',
    'Contact Form 7',
    'Yoast SEO Plugin'],
      category: 'WordPress',
      liveUrl: 'https://dspav.com/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Event DJ & Lighting Services',
      description: 'Professional event DJ website built with WordPress',
      longDescription: 'DJ Sonny Productions is a sleek and modern WordPress website built for a professional DJ offering event entertainment, lighting, and sound services. The site features event highlights, service details, booking forms, and a mobile-optimized design. Built using Elementor, it delivers an energetic user experience that reflects the vibe and professionalism of the brand.',
      image: '/djsonnywebsite.png',
      technologies: ['WordPress CMS',
  'Elementor (or WPBakery, if used)',
  'PHP',
  'HTML5 & CSS3',
  'JavaScript',
  'MySQL Database',
  'Responsive Design',
  'Custom Post Types & Plugins'],
      category: 'WordPress',
      liveUrl: 'https://djsonnyproductions.com/home/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'The Dashtakh – Sunglasses & Eyewear E-Commerce Site',
      description: 'Custom-built online store for sunglasses and eyewear',
      longDescription: 'The Dashtakh is a sleek e-commerce site dedicated to high-quality sunglasses and eyewear. The project features a user-friendly storefront with product galleries, filtering options, shopping cart, secure checkout, and contact info. Built on a custom PHP‑based platform (not WordPress), it integrates MySQL for product data, responsive design, and third-party payment gateway support for seamless transactions.',
      image:'/dastakhwebsite.png',
      technologies: ['Custom PHP E-Commerce Platform',
    'MySQL Database',
    'HTML5 & CSS3',
    'JavaScript (ES6)',
    'Responsive Web Design',
    'Product Gallery & Filters',
    'Shopping Cart & Checkout',
    'Payment Gateway Integration'],
      category: 'Website',
      liveUrl: 'https://thedashtakh.com/',
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
                    {/* <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button> */}
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
