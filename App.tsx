
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  Menu as MenuIcon, 
  X,
  ArrowRight
} from 'lucide-react';
import { MENU_DATA, CONTACT_INFO } from './constants';
import AnimatedButton from './components/AnimatedButton';
import MenuCard from './components/MenuCard';
import ReservationModal from './components/ReservationModal';

const PIZZA_LOGO = "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=400";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResModalOpen, setIsResModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-mesh selection:bg-rose-100 selection:text-rose-900 text-zinc-800">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-zinc-100' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-sm group-hover:shadow-md transition-all duration-300 overflow-hidden border border-zinc-100">
              <img src={PIZZA_LOGO} alt="il Porcellino" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-cinzel text-lg md:text-xl font-bold tracking-tight text-zinc-900">
              il Porcellino
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-cinzel text-xs tracking-[0.2em]">
            <button 
              onClick={() => scrollToSection('menu')}
              className="hover:text-rose-600 transition-colors px-2 font-bold"
            >
              MENÚ
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="hover:text-rose-600 transition-colors px-2 font-bold"
            >
              UBICACIÓN
            </button>
            <AnimatedButton onClick={() => setIsResModalOpen(true)} className="text-[10px] px-6 py-2">
              RESERVAR
            </AnimatedButton>
          </div>

          <button className="md:hidden text-zinc-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 font-cinzel text-2xl transition-all animate-in fade-in slide-in-from-top duration-300">
          <button onClick={() => scrollToSection('menu')} className="hover:text-rose-600">MENÚ</button>
          <button onClick={() => scrollToSection('location')} className="hover:text-rose-600">UBICACIÓN</button>
          <AnimatedButton onClick={() => { setIsMobileMenuOpen(false); setIsResModalOpen(true); }}>RESERVAR</AnimatedButton>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Soft Ambient Lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-50/40 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8 relative inline-block group">
             {/* Pizza Logo Label Container */}
             <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] mx-auto mb-8 bg-white rounded-full shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] p-4 transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-2">
                {/* Double Border Frame */}
                <div className="absolute inset-4 border-2 border-zinc-100 rounded-full pointer-events-none" />
                <div className="absolute inset-6 border-4 border-double border-rose-50 rounded-full pointer-events-none" />
                
                <img 
                  src={PIZZA_LOGO} 
                  alt="il Porcellino Pizzeria Artesanal" 
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
             </div>
             
             <div className="mt-10 space-y-4 max-w-lg mx-auto">
               <div className="h-0.5 w-12 bg-rose-200 mx-auto rounded-full" />
               <h1 className="font-playfair text-zinc-600 font-bold italic text-3xl md:text-4xl leading-relaxed">
                 "El arte de la pizza artesanal"
               </h1>
               <div className="flex items-center justify-center gap-3 text-zinc-400 font-inter text-xs uppercase tracking-[0.4em]">
                 <span>Tijuana</span>
                 <span className="w-1 h-1 bg-rose-300 rounded-full" />
                 <span>Est. 2023</span>
               </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
            <AnimatedButton onClick={() => setIsResModalOpen(true)} className="px-10 py-4 text-sm">
              RESERVAR MESA
            </AnimatedButton>
            <button 
              onClick={() => scrollToSection('menu')}
              className="px-8 py-4 rounded-full font-cinzel font-bold text-zinc-400 hover:text-rose-600 transition-all flex items-center gap-2 group/btn"
            >
              EXPLORAR MENÚ <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-5 h-8 border-2 border-zinc-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white relative scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-rose-600 font-cinzel font-bold tracking-[0.4em] text-xs uppercase bg-rose-50 px-4 py-1.5 rounded-full mb-4 inline-block">Nuestra Herencia</span>
            <h2 className="font-cinzel text-4xl md:text-6xl text-zinc-900 mt-4 mb-6 tracking-tight">Le Nostre Pizza</h2>
            <p className="font-playfair text-zinc-400 text-xl max-w-2xl mx-auto italic leading-relaxed">
              Masa de larga fermentación, ingredientes de importación y el toque maestro de nuestro horno.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            {MENU_DATA.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-cinzel text-2xl text-zinc-900 tracking-widest uppercase font-bold">{section.title}</h3>
                  <div className="flex-grow h-px bg-zinc-100" />
                </div>
                <div className="grid gap-6">
                  {section.items.map((item, i) => (
                    <MenuCard key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specials Banner */}
          <div className="mt-24 p-12 md:p-20 rounded-[60px] bg-zinc-50 border border-zinc-100 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/50 blur-[100px] rounded-full -mr-20 -mt-20" />
            <h4 className="font-cinzel text-3xl mb-4 text-zinc-900 uppercase tracking-widest">¿Planeas un evento?</h4>
            <p className="font-playfair text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestro patio es el escenario perfecto para celebraciones íntimas, desde cumpleaños hasta reuniones corporativas.
            </p>
            <AnimatedButton onClick={() => setIsResModalOpen(true)} className="bg-zinc-900 shadow-xl shadow-zinc-200 hover:bg-rose-600">
              COTIZAR EVENTO
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-zinc-50/50 relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="font-cinzel text-5xl text-zinc-900 mb-6">Visítanos</h2>
                <p className="font-playfair text-xl text-zinc-500 italic leading-relaxed">
                  Un rincón de Italia en Tijuana. Te esperamos para compartir el auténtico sabor artesanal.
                </p>
              </div>
              
              <div className="grid gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 font-cinzel text-lg">Dirección</h4>
                    <p className="text-zinc-500 mt-1">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 font-cinzel text-lg">Teléfono</h4>
                    <p className="text-zinc-500 mt-1">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 font-cinzel text-lg">Horario</h4>
                    <p className="text-zinc-500 mt-1">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200 inline-block">
                <a 
                  href="https://instagram.com/ilporcellinopizzeria" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 text-zinc-400 hover:text-rose-600 transition-all font-cinzel text-sm tracking-[0.3em] font-bold"
                >
                  <Instagram size={24} /> @ILPORCELLINOPIZZERIA
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="h-[550px] bg-white rounded-[60px] overflow-hidden border border-zinc-100 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800" 
                  alt="Restaurante il Porcellino" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-rose-900/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-12 h-12 bg-rose-600 rounded-full animate-ping absolute" />
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-lg relative z-10">
                     <MapPin className="text-white" size={24} />
                  </div>
                </div>
              </div>
              {/* Decorative Background Element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-rose-100 rounded-[60px] -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 bg-white p-1 rounded-full border border-zinc-100 hover:shadow-md transition-shadow overflow-hidden">
              <img src={PIZZA_LOGO} alt="il Porcellino Logo" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
          <div className="font-cinzel text-2xl mb-3 text-zinc-900 tracking-[0.2em] font-bold uppercase">il Porcellino</div>
          <p className="text-zinc-400 text-sm uppercase tracking-[0.4em] mb-12">Pizzeria Artesanal &bull; Est. 2023</p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] text-zinc-400 tracking-[0.2em] uppercase font-bold mb-16">
            <a href="#" className="hover:text-rose-600 transition-colors">Carta Digital</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Contacto Directo</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Bolsa de Trabajo</a>
          </div>
          
          <div className="text-[10px] text-zinc-300 font-medium tracking-widest">
            &copy; {new Date().getFullYear()} IL PORCELLINO PIZZERIA. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </footer>

      {/* Reservation Modal */}
      <ReservationModal isOpen={isResModalOpen} onClose={() => setIsResModalOpen(false)} />
    </div>
  );
};

export default App;
