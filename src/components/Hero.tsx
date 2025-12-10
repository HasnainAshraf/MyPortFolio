
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleClick = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <ParticleBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-1"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mt-16">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Hasnain Ashraf</span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          A Web Developer specialized in{' '}
          <span className="text-primary font-semibold">React.js</span>,{' '}
          <span className="text-primary font-semibold">Node.js</span> &{' '}
          <span className="text-primary font-semibold">WordPress</span>
        </motion.p>

        {/* <motion.p
          variants={buttonVariants}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I create modern, responsive, and user-friendly web applications that deliver exceptional digital experiences.
        </motion.p> */}

        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#portfolio" className="group">
          <Button  size="lg" className="group px-8 py-3 text-lg">
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          </a>
        <a href="/HasnainResume.pdf" download>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
           <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
       </a>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="flex justify-center space-x-6 "
        >
          <a href="https://github.com/HasnainAshraf" target="_blank" rel="noopener noreferrer">
           <Button size="icon" variant="ghost" className="hover:text-primary transition-colors mt-8">
             <Github className="h-6 w-6" />
           </Button>
          </a>
          <a href="https://www.linkedin.com/in/hasnain-ashraf-0a7563203/" target="_blank" rel="noopener noreferrer">
           <Button size="icon" variant="ghost" className="hover:text-primary transition-colors mt-8">
            <Linkedin className="h-6 w-6" />
          </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <div 
      className="cursor-pointer hover:text-primary transition-colors"
      onClick={handleClick}
    >
      <ArrowDown className="h-6 w-6 " />
    </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
