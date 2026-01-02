import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    // Access key for Web3Forms
    formData.append("access_key", "b278e058-0d47-4905-a837-0d51319ac127");
    formData.append("subject", "Nueva cotización - KINETIC Web");
    formData.append("from_name", "KINETIC Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-carbon-800 border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4 leading-none">
            ¿Listo para darle <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">movimiento a tu marca?</span>
          </h2>
          <p className="text-gray-400 text-lg">Completa el formulario y recibe una propuesta KINETIC.</p>
        </div>

        <div className="bg-carbon-900 p-8 md:p-12 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-xl">
          {/* Decorative neon line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red"></div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="w-20 h-20 text-neon-purple mx-auto mb-6" />
              <h3 className="text-3xl font-display font-bold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-400">Gracias por contactar a KINETIC. Revisaré tu proyecto y te responderé en menos de 24 horas.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-neon-blue underline hover:text-white"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Nombre Completo *</label>
                  <input 
                    name="name" 
                    required 
                    type="text" 
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Empresa / Marca</label>
                  <input 
                    name="company" 
                    type="text" 
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="Ej. StartUp Inc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">WhatsApp *</label>
                  <input 
                    name="whatsapp" 
                    required 
                    type="tel" 
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="+52 ..."
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Correo Electrónico *</label>
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="hola@tuempresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Servicio de Interés *</label>
                  <select 
                    name="service" 
                    required
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none appearance-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Branding">Branding / Identidad</option>
                    <option value="Redes">Diseño para Redes</option>
                    <option value="Poster">Posters / Flyers</option>
                    <option value="Motion">Motion Graphics / Reels</option>
                    <option value="Evento">Diseño para Eventos</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Presupuesto Estimado</label>
                  <select 
                    name="budget" 
                    className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none appearance-none"
                  >
                    <option value="A definir">A definir</option>
                    <option value="Básico">$ (Básico)</option>
                    <option value="Medio">$$ (Medio)</option>
                    <option value="Alto">$$$ (Premium)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Detalles del Proyecto *</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-carbon-800 border border-gray-700 text-white p-4 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="Cuéntame sobre tu proyecto, objetivos y tiempos..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center text-neon-red text-sm gap-2 bg-neon-red/10 p-3 border border-neon-red/20">
                  <AlertCircle size={16} />
                  Hubo un error al enviar. Por favor intenta de nuevo o contáctame por redes.
                </div>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                disabled={status === 'submitting'}
                className="mt-4"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} /> Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Enviar Cotización <Send size={18} />
                  </span>
                )}
              </Button>
              
              <p className="text-center text-xs text-gray-600 mt-4">
                Tus datos están seguros. No enviamos spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};