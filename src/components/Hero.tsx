
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg sm:text-xl text-primary font-medium mb-4">Hi, I'm</h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Hasnian Ashraf</span>
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
            Web Developer specialized in{' '}
            <span className="text-primary font-medium">React.js</span>,{' '}
            <span className="text-primary font-medium">Node.js</span> &{' '}
            <span className="text-primary font-medium">WordPress</span>
          </h3>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I craft modern, responsive web applications that combine beautiful design 
          with powerful functionality. Let's bring your digital vision to life.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 text-lg font-medium group">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="p-3">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="p-3">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="p-3">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-primary mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
