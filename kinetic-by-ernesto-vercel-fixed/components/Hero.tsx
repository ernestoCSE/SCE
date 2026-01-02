import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Scroll Parallax
  const { scrollY } = useScroll();

  // Velocidades diferenciadas para crear profundidad (Multilayer Parallax)
  
  // 1. Fondo (Grid & Textura): Se mueve lento y en dirección positiva (hacia abajo) para parecer lejano.
  const yGrid = useTransform(scrollY, [0, 1000], [0, 250]);

  // 2. Elementos Flotantes (Blobs): Movimiento medio, direcciones opuestas para dinamismo.
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, 400]); // Baja rápido
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, -150]); // Sube lento
  
  // 3. Contenido (Texto): Se mueve ligeramente para no perder legibilidad pero despegarse del fondo.
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  
  // 4. Primer Plano (Tarjeta 3D): Se mueve en dirección opuesta al scroll (negativo) o más lento para parecer flotar encima.
  // Aquí la hacemos subir ligeramente para que se sienta más cerca de la cámara que el texto.
  const yCard = useTransform(scrollY, [0, 1000], [0, -100]); 
  
  // Configuración de físicas suave para evitar 'jitter'
  const springConfig = { stiffness: 60, damping: 20, restDelta: 0.001 };
  
  const yGridSpring = useSpring(yGrid, springConfig);
  const yBlob1Spring = useSpring(yBlob1, springConfig);
  const yBlob2Spring = useSpring(yBlob2, springConfig);
  const yTextSpring = useSpring(yText, springConfig);
  const yCardSpring = useSpring(yCard, springConfig);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="inicio" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000 scroll-mt-24"
    >
      {/* Background FX with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-carbon-900" />
        
        {/* Layer 1: Grid & Texture (Deep Background) */}
        <motion.div 
            style={{ y: yGridSpring }}
            className="absolute inset-0 z-0 will-change-transform"
        >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </motion.div>
        
        {/* Layer 2: Blobs (Mid Background) */}
        <motion.div 
          style={{ y: yBlob1Spring }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-blob z-0 will-change-transform" 
        />
        
        <motion.div 
          style={{ y: yBlob2Spring }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000 z-0 will-change-transform" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Layer 3: Text Content */}
        <motion.div 
          style={{ y: yTextSpring }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-neon-blue font-bold">KINETIC STUDIO</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase italic">
            Diseño Gráfico <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-indigo drop-shadow-[0_0_20px_rgba(127,0,255,0.3)] pr-2">
              en movimiento
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Evoluciona tu marca con <strong className="text-white">KINETIC</strong>. Branding, campañas y motion design con estética futurista y resultados reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
                variant="primary" 
                href="#portafolio" 
                onClick={(e) => handleSmoothScroll(e, '#portafolio')}
            >
              Ver Portafolio <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
                variant="outline" 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Pedir Cotización
            </Button>
          </div>

          {/* Chips */}
          <div className="pt-8 flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
            {["Entrega Rápida", "Diseño Premium", "Listo para Redes", "Archivos Editables"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neon-purple" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Layer 4: Visual Element / 3D Card (Foreground) */}
        <motion.div 
           style={{ y: yCardSpring }}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:flex justify-center relative perspective-1000 will-change-transform"
        >
            <div className="relative w-full max-w-md aspect-square animate-float">
                {/* Back Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-40 rounded-2xl rotate-6 transform translate-x-4 translate-y-4 blur-xl border border-white/10 animate-pulse"></div>
                
                {/* Main Card */}
                <div className="absolute inset-0 bg-carbon-800/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(127,0,255,0.3)] overflow-hidden flex items-center justify-center group transform transition-transform duration-500 hover:rotate-2 hover:scale-105">
                    <img 
                        src="https://picsum.photos/800/800?grayscale&blur=2" 
                        alt="Abstract Art" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                    />
                    
                    {/* Content inside card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
                        <div className="w-20 h-20 mb-6 rounded-full border-2 border-neon-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                             <span className="text-4xl font-display font-bold text-neon-blue italic">K</span>
                        </div>
                        <h3 className="text-5xl font-display font-bold text-white tracking-widest italic">KINETIC</h3>
                        <p className="text-neon-purple uppercase tracking-[0.5em] text-xs mt-2 font-bold">Design System</p>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};