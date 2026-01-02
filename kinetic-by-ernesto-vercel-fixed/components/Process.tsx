import React from 'react';

const STEPS = [
  { num: '01', title: 'Briefing', desc: 'Entiendo tus objetivos, audiencia y estilo.' },
  { num: '02', title: 'Conceptos', desc: 'Desarrollo propuestas creativas basadas en la estrategia.' },
  { num: '03', title: 'Revisión', desc: 'Pulimos los detalles contigo hasta que esté perfecto.' },
  { num: '04', title: 'Entrega', desc: 'Recibes todos los archivos finales listos para usar.' },
];

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-carbon-800 border-y border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-12 text-center">
          Proceso de <span className="text-neon-lime">Trabajo</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent z-0"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-carbon-900 border-2 border-neon-lime/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-neon-lime transition-colors duration-300">
                <span className="text-3xl font-display font-bold text-neon-lime">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};