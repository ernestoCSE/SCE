import React from 'react';
import { Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon-900 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-display font-bold uppercase mb-2 italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple pr-2">
          KINETIC
        </h2>
        <p className="text-gray-500 text-sm mb-8 text-center max-w-md">
          Diseño, identidad y campañas para marcas con hambre de crecer. <br/>
          by Ernesto Designer
        </p>

        <div className="flex gap-6 mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61586043471904" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-carbon-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300"
          >
            <Facebook size={20} />
          </a>
        </div>

        <div className="text-xs text-gray-600 border-t border-white/5 w-full text-center pt-8">
          &copy; {new Date().getFullYear()} KINETIC by Ernesto Designer. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};