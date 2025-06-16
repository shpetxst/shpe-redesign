import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const backgroundImages = [
  '/images/hero/hero1.JPG',
  '/images/hero/hero2.JPG',
  '/images/hero/hero3.JPG',
  // Add more images as needed
];

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Carousel with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-black"
        ref={parallaxRef}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 opacity-0 animate-fade-in">
            <span className="inline-block">Texas State University</span>
            <span className="block">Society of Hispanic Professional Engineers</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 opacity-0 animate-fade-in animation-delay-200 mb-8 max-w-2xl mx-auto">
            Empowering Hispanic engineers through academic excellence, professional development, and leadership opportunities.
          </p>
          <div className="space-x-4 opacity-0 animate-fade-in animation-delay-400">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Join Us
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <a href="#events" className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ChevronDown className="animate-bounce h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;