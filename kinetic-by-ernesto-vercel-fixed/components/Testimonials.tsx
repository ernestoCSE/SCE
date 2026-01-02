import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-carbon-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-display font-bold uppercase mb-16">
          Lo que dicen <span className="text-neon-red">mis clientes</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-carbon-800 p-8 border-l-4 border-neon-red relative">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-neon-red fill-neon-red" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wide text-sm">{t.name}</h4>
                <span className="text-xs text-gray-500">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};