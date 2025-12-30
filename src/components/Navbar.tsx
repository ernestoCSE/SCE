import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 w-full top-0 border-b border-white/5 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#050505]/80 backdrop-blur-xl' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="flex h-16 max-w-[1100px] mx-auto px-6 items-center justify-between">
        <a href="#" className="group flex items-center gap-1 hover:animate-bounce-subtle transition-colors duration-300">
          <span className="text-lg font-semibold text-white tracking-tighter">KINETIC</span>
          <span className="text-lg font-semibold tracking-tighter text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')} className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Proyectos
          </a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300">
            Soluciones
          </a>
          <a href="#packages" onClick={(e) => handleSmoothScroll(e, 'packages')} className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300">
            Planes
          </a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-300">
            Nosotros
          </a>
        </div>

        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-primary hover:text-white group transition-all duration-300 hover:shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)]"
          aria-label="Ir a contacto"
        >
          <ArrowRight size={16} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#050505] border-b border-white/10 shadow-lg animate-fade-up">
          <div className="flex flex-col p-6 space-y-4">
            <a
              href="#work"
              onClick={(e) => handleSmoothScroll(e, 'work')}
              className="text-lg font-medium text-white hover:text-primary"
            >
              Proyectos
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="text-lg font-medium text-white hover:text-primary"
            >
              Soluciones
            </a>
            <a
              href="#packages"
              onClick={(e) => handleSmoothScroll(e, 'packages')}
              className="text-lg font-medium text-white hover:text-primary"
            >
              Planes
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-lg font-medium text-white hover:text-primary"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 font-semibold text-primary"
            >
              Contactar <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;