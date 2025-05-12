
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-heading font-bold text-xl">
              Jomin<span className="neon-highlight">Binny</span>
            </h2>
            <p className="text-mediumText mt-1">Web Developer & Python Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-mediumText">© {new Date().getFullYear()} Jomin Binny. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
