import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Cerramos el menú móvil inmediatamente
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    // Lógica de scroll
    if (href === '#inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-carbon-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex flex-col leading-none group select-none cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <span className="text-3xl font-display font-bold tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-indigo filter drop-shadow-[0_0_10px_rgba(0,229,255,0.3)] pr-2">
              KINETIC
            </span>
          </div>
          <span className="text-[10px] font-sans tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors uppercase pl-0.5">
            by Ernesto Designer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors uppercase tracking-widest text-[11px] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 border border-neon-blue text-neon-blue text-xs font-bold uppercase tracking-widest hover:bg-neon-blue hover:text-carbon-900 transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]"
          >
            Cotizar Ahora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-carbon-800 border-b border-white/10 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-6 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-neon-blue font-display uppercase tracking-wide text-lg cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-2 text-center py-3 bg-neon-blue text-carbon-900 font-bold uppercase"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
};