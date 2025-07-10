
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Wordpress, Settings, Smartphone, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React.js and Node.js',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization']
    },
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Beautiful, responsive user interfaces that provide exceptional user experiences',
      features: ['React.js Applications', 'Responsive Design', 'UI/UX Implementation', 'Cross-browser Compatibility']
    },
    {
      icon: Wordpress,
      title: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and complete CMS solutions',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'WordPress Optimization']
    },
    {
      icon: Settings,
      title: 'API Integration',
      description: 'Seamless integration of third-party services and custom API development',
      features: ['REST APIs', 'GraphQL', 'Payment Gateways', 'Social Media APIs']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices',
      features: ['Mobile Optimization', 'Progressive Web Apps', 'Touch-friendly Interfaces', 'Fast Loading']
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to keep your website running smoothly',
      features: ['24/7 Support', 'Security Updates', 'Performance Monitoring', 'Content Updates']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
