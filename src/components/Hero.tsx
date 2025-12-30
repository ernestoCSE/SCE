import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-screen flex flex-col overflow-hidden text-center px-6 relative items-center justify-center pt-16">
      {/* Background Gradient Layer 1 (Top Right) - Violet */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none will-change-transform mix-blend-screen"
        style={{ transform: `translate(${scrollY * 0.2}px, ${-scrollY * 0.2}px)` }}
      ></div>

      {/* Background Gradient Layer 2 (Bottom Left) - Cyan */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen will-change-transform"
        style={{ transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.2}px)` }}
      ></div>

      <div className="z-10 max-w-3xl mx-auto space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)] opacity-0 animate-fade-up backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            Disponible para proyectos
          </span>
        </div>

        <h1 className="md:text-7xl leading-[1.1] animate-fade-up delay-100 text-5xl font-semibold text-white tracking-tighter opacity-0 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Diseñando el futuro <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">con precisión digital.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-200">
          Creamos experiencias de marca que combinan estética neón refinada con impacto en el mundo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-up delay-300">
          <a
            href="#work"
            onClick={(e) => handleSmoothScroll(e, 'work')}
            className="group relative px-8 py-3 rounded-full bg-primary text-white font-medium text-sm transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 -skew-x-12"></div>
            <span className="relative z-10 flex items-center gap-2">
              Ver Portafolio
              <ArrowDownRight size={16} />
            </span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] hover:-translate-y-1 backdrop-blur-sm"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a 
        href="#work"
        onClick={(e) => handleSmoothScroll(e, 'work')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 animate-bounce cursor-pointer z-10"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={32} />
      </a>
    </header>
  );
};

export default Hero;