import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { Button } from './Button';

const CATEGORIES = ['Todos', 'Branding', 'Posters', 'Social Media', 'Motion', 'Eventos'];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portafolio" className="py-24 bg-carbon-800 relative scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-white">
            Proyectos <span className="text-neon-lime">Destacados</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-neon-lime text-carbon-900 border-neon-lime font-bold' 
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-carbon-700 border border-white/5 relative shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-neon-blue text-xs uppercase tracking-widest mb-2 font-bold">{project.category}</span>
                    <h3 className="text-2xl font-display font-bold text-white uppercase">{project.title}</h3>
                    <div className="mt-4 flex items-center text-sm font-medium text-white gap-2">
                       Ver Proyecto <ExternalLink size={14} />
                    </div>
                  </div>
                  {/* Border Glow Effect on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/50 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-carbon-800 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-carbon-900/50 p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-carbon-700">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-neon-lime text-sm uppercase tracking-[0.2em] font-bold mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-4xl font-display font-bold text-white uppercase mb-6 leading-none">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-3">Herramientas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button fullWidth href="#contact" onClick={() => setSelectedProject(null)}>
                    Quiero algo así
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};