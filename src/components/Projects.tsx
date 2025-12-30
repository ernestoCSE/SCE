import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Interfaz / UX / Desarrollo',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
  },
  {
    id: 2,
    title: 'Mono Architecture',
    category: 'Branding / Web Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="pt-24 px-6 pb-24" id="work">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-2">
            <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tighter">
              Proyectos Seleccionados
            </h2>
            <p className="text-text-muted">Una colección de nuestro trabajo más reciente.</p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-white flex items-center gap-1 hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative backdrop-blur-2xl rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] ${
                index === 1 ? 'md:mt-16' : ''
              }`}
              style={{
                border: '1px solid transparent',
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'padding-box, border-box',
                backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02)), linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/50 relative">
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-muted">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white shadow-inner border border-white/5">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;