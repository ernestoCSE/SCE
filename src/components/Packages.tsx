import React from 'react';
import { Check, Star } from 'lucide-react';
import { Package } from '../types';

const packages: Package[] = [
  {
    id: 1,
    name: 'Launch',
    label: 'Emprendedor',
    labelColor: 'gray',
    description: 'Lo esencial para iniciar tu camino digital.',
    features: ['Diseño de Logotipo', 'Tarjeta Digital', '3 Posts para Redes'],
  },
  {
    id: 2,
    name: 'Growth',
    label: 'Pyme / Growth',
    labelColor: 'gold',
    description: 'Para negocios listos para escalar.',
    features: ['Identidad Visual Completa', 'Sitio Web One-Page', 'Plantillas Editables RRSS'],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Corporate',
    label: 'Empresa',
    labelColor: 'gray',
    description: 'Solución integral para líderes de mercado.',
    features: ['Rebranding Total', 'Web Corporativa', 'Manual de Marca (Brandbook)'],
  },
];

interface PackagesProps {
  onPackageSelect: (message: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ onPackageSelect }) => {
  
  const handleQuoteClick = (e: React.MouseEvent, pkg: Package) => {
    e.preventDefault();
    
    // Create the descriptive message for the email
    const message = `Hola, estoy interesado en cotizar el paquete "${pkg.name}" (${pkg.label}).
    
Detalles del paquete:
- ${pkg.description}
- Incluye: ${pkg.features.join(', ')}.

Me gustaría recibir más información al respecto.`;

    // Update state in parent
    onPackageSelect(message);

    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 px-6 relative">
       {/* Background accent */}
       <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
            Paquetes Diseñados para Crecer
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Soluciones empaquetadas para cada etapa de tu negocio, desde el lanzamiento hasta la
            consolidación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => {
            const isFeatured = pkg.isFeatured;
            
            // Define styles for gradient border
            const standardStyle = {
              border: '1px solid transparent',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box',
              backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01)), linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
            };

            const featuredStyle = {
              border: '1px solid transparent',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box',
              backgroundImage: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.05)), linear-gradient(to bottom right, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.6))'
            };

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 transition-all duration-300 relative backdrop-blur-xl
                  ${
                    isFeatured
                      ? 'shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] md:-mt-4 md:mb-4 hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)] hover:scale-[1.02]'
                      : 'hover:bg-white/5'
                  }`}
                style={isFeatured ? featuredStyle : standardStyle}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 p-4">
                    <Star
                      className="text-secondary drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      size={20}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </div>
                )}
                <div className="mb-6">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider
                    ${
                      isFeatured
                        ? 'bg-primary/20 text-white border border-primary/30'
                        : 'bg-white/10 text-gray-300 border border-white/5'
                    }`}
                  >
                    {pkg.label}
                  </span>
                  <h3 className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-white'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mt-2 ${isFeatured ? 'text-gray-300' : 'text-text-muted'}`}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 text-sm ${
                        isFeatured ? 'text-gray-200' : 'text-text-muted'
                      }`}
                    >
                      <Check
                        className={`w-5 h-5 shrink-0 ${isFeatured ? 'text-secondary' : 'text-gray-500'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => handleQuoteClick(e, pkg)}
                  className={`flex w-full justify-center items-center py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isFeatured
                      ? 'bg-primary text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                      : 'border border-white/10 hover:bg-white/10 text-white'
                  }`}
                >
                  Cotizar {pkg.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;