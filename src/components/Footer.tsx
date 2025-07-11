import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/HasnainAshraf'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hasnain-ashraf-0a7563203/'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:hasnainonlinework@gmail.com'
    }
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            {/* <h3 className="text-xl font-bold gradient-text mb-4">Hasnain Ashraf</h3> */}
            {/* 🔥 Logo */}
          <div className="flex-shrink-0 ">
            <a href="#home">
              <img
                src="/navlog.png"
                alt="Hasnain Ashraf Logo"
                className="h-12 w-auto mb-5"
              />
            </a>
          </div>
            <p className="text-muted-foreground mb-6">
              Web Developer specialized in React.js, Node.js & WordPress.
              Creating digital experiences that matter.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button variant="outline" size="sm" className="p-2">
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='mt-3'>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='mt-3'>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hasnainonlinework@gmail.com</p>
              <p>+92 317350440</p>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Hasnain Ashraf. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
