
import React from 'react';
import { Code, BookOpen, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-black">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I am a <span className="neon-highlight font-medium">passionate learner</span>, dedicated to exploring new technologies in the modern world. My skills include web development, backend development, Python, IoT, and more. 
            </p>
            <p className="text-lg">
              I enjoy building projects to gain expertise in specific fields and love guiding others in the tech field.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {['Web Development', 'Python', 'IoT', 'Backend Development', 'Flask', 'Django'].map((skill) => (
                <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Education & Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <BookOpen size={24} className="text-neon mr-2" />
              Education
            </h3>
            <div className="space-y-6 mb-8">
              <div className="bg-secondary rounded-lg p-5 border-l-4 border-neon">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium">BTech in Computer Science</h4>
                  <span className="text-sm text-mediumText flex items-center">
                    <Calendar size={14} className="mr-1" /> Present
                  </span>
                </div>
                <p className="text-mediumText">College of Engineering Vadakara</p>
              </div>
              
              <div className="bg-secondary rounded-lg p-5 border-l-4 border-neon">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium">High School</h4>
                  <span className="text-sm text-mediumText flex items-center">
                    <Calendar size={14} className="mr-1" /> 2010 - 2022
                  </span>
                </div>
                <p className="text-mediumText">Kendriya Vidyalaya Port Trust, Kochi</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <Code size={24} className="text-neon mr-2" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Web Development', level: 80 },
                { name: 'Python', level: 90 },
                { name: 'Backend Development', level: 75 },
                { name: 'IoT', level: 65 },
              ].map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-mediumText">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-neon h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
