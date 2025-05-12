
import React from 'react';
import { Code, Globe, Database } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const services = [
  {
    icon: <Globe size={36} className="text-neon" />,
    title: "Frontend Web Design",
    description: "Design and development of modern, responsive, and engaging user interfaces. I create beautiful web experiences that work on all devices."
  },
  {
    icon: <Code size={36} className="text-neon" />,
    title: "Python Development",
    description: "Expertise in backend development using Python, Flask, Django, and related technologies. From automation scripts to full-stack applications."
  },
  {
    icon: <Database size={36} className="text-neon" />,
    title: "IoT Solutions",
    description: "Development of Internet of Things solutions connecting devices and systems. Creating smart, interconnected devices and systems."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-black">
      <div className="section-container">
        <h2 className="section-title text-center">My Services</h2>
        <p className="text-center text-mediumText mb-12 max-w-2xl mx-auto">
          I offer professional services tailored to meet your project needs with quality and dedication.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-secondary border border-muted overflow-hidden transition-all duration-300 hover:border-neon/50 hover:shadow-md hover:shadow-neon/10"
            >
              <CardHeader className="pb-2 pt-6 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-mediumText">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Looking for a custom solution?</h3>
          <p className="text-mediumText mb-6">
            I can help you turn your ideas into reality with customized solutions that fit your needs.
          </p>
          <a href="#contact" className="button-primary inline-block">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
