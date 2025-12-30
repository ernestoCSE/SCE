import React from 'react';
import { Fingerprint, Zap, BoxSelect } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Identidad',
    description: 'Transformamos negocios en marcas referentes y memorables.',
    iconType: 'fingerprint',
    features: ['Logotipos & Isotipos', 'Manuales de Marca', 'Rebranding Corporativo'],
  },
  {
    id: 2,
    title: 'Digital',
    description: 'Conectamos con tu audiencia en cada pixel con diseño dinámico.',
    iconType: 'zap',
    features: ['Diseño Web & Landing', 'Social Media Kits', 'Campañas Ads (CTR)'],
  },
  {
    id: 3,
    title: 'Entorno',
    description: 'Materializamos tu visión en el espacio físico y tangible.',
    iconType: 'box',
    features: ['Señalética & Wayfinding', 'Rotulación & Gran Formato', 'Papelería Corporativa'],
  },
];

const Services: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'fingerprint':
        return <Fingerprint size={24} />;
      case 'zap':
        return <Zap size={24} />;
      case 'box':
        return <BoxSelect size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-24 px-6 border-y border-white/5 relative overflow-hidden">
      {/* Background accent to enhance glass effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase mb-2 block drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            Nuestras Capacidades
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
            Soluciones Integrales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.25)] hover:-translate-y-1"
              style={{
                border: '1px solid transparent',
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box',
                backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01)), linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-violet-700 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 mb-6">
                {renderIcon(service.iconType)}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 uppercase group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
              </div>
              <ul className="space-y-3 pt-4 mt-2 border-t border-white/10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 font-medium group-hover:text-gray-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;