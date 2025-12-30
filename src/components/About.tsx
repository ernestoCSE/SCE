import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left Column: Headline */}
          <div className="md:sticky md:top-32 transition-all duration-700">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase mb-4 block drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
              Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
              Diseñamos para un mundo en movimiento.
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mt-2 shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-12">
            <div className="group hover:translate-x-2 transition-transform duration-500">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary transition-all duration-300 group-hover:w-12 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                 Quiénes Somos
               </h3>
               <p className="text-text-muted leading-relaxed text-lg font-light">
                 Somos Kinetic, una agencia creativa multidisciplinaria donde la estrategia visual se encuentra con la tecnología. No creemos en el diseño estático; creemos en crear ecosistemas visuales que respiren, evolucionen y generen impacto real. Desde la identidad de una marca hasta su presencia digital y física, borramos la línea entre lo funcional y lo estético.
               </p>
            </div>

            <div className="group hover:translate-x-2 transition-transform duration-500 delay-100">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary transition-all duration-300 group-hover:w-12 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                 Nuestra Visión
               </h3>
               <p className="text-text-muted leading-relaxed text-lg font-light">
                 Transformar negocios ordinarios en marcas extraordinarias a través de un diseño inteligente, atemporal y disruptivo. Queremos ser el motor visual que impulse a nuestros clientes a liderar sus mercados.
               </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;