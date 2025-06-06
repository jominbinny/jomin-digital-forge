
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-darkBg pt-16">
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="neon-highlight">Jomin Binny</span>
          </h1>
          <p className="text-xl md:text-2xl text-mediumText mb-8">
            A passionate learner and technology enthusiast building the digital future.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="button-primary">
              View My Work <ArrowRight className="inline ml-2" size={18} />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon shadow-lg shadow-neon/20">
              <img 
                src="https://i.postimg.cc/gJJ90CMR/Whats-App-Image-2025-05-12-at-11-02-55-c5560b62.jpg" 
                alt="Jomin Binny" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-darkBg border border-neon p-4 rounded-lg shadow-lg">
              <p className="text-neon font-semibold">Web & Python Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
