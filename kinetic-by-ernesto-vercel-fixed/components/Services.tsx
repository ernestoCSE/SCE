import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-carbon-900 scroll-mt-24">
       {/* Background Noise/Grain is inherited from body, but we add a subtle gradient here */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neon-blue/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">
            Mis <span className="text-neon-blue">Servicios</span>
          </h2>
          <p className="text-gray-400">
            Soluciones visuales completas adaptadas a las necesidades de tu marca. 
            Desde la identidad hasta la promoción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={service.id}
              className="p-8 bg-carbon-800 border border-white/5 hover:border-neon-blue/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-6 p-4 bg-carbon-900 inline-block rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-blue/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold uppercase mb-3 group-hover:text-neon-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b border-neon-blue/50 pb-1 hover:text-neon-blue transition-colors">
                Cotizar este servicio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};