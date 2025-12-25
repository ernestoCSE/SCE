
import React, { useState } from 'react';
import { X, Calendar, Users, Clock } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { CONTACT_INFO } from '../constants';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    people: '2'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-md" onClick={handleClose} />
      
      <div className="relative bg-white border border-zinc-100 w-full max-w-md p-8 rounded-[40px] shadow-2xl">
        <button onClick={handleClose} className="absolute top-6 right-6 text-zinc-400 hover:text-rose-600 transition-colors">
          <X size={24} />
        </button>

        {step === 1 ? (
          <>
            <h2 className="font-cinzel text-3xl text-center mb-2 text-zinc-900">Reserva tu Mesa</h2>
            <p className="text-zinc-400 text-center text-sm mb-8 font-playfair italic">Te esperamos con mucho gusto</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Tu Nombre</label>
                <input 
                  required
                  type="text" 
                  disabled={loading}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 focus:outline-none focus:border-rose-300 focus:bg-white transition-all disabled:opacity-50 text-zinc-800"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1 flex items-center gap-2"><Calendar size={12}/> Fecha</label>
                  <input 
                    required
                    type="date" 
                    disabled={loading}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 focus:outline-none focus:border-rose-300 focus:bg-white transition-all disabled:opacity-50 text-zinc-800"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1 flex items-center gap-2"><Clock size={12}/> Hora</label>
                  <input 
                    required
                    type="time" 
                    disabled={loading}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 focus:outline-none focus:border-rose-300 focus:bg-white transition-all disabled:opacity-50 text-zinc-800"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1 flex items-center gap-2"><Users size={12}/> Personas</label>
                <select 
                  disabled={loading}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 focus:outline-none focus:border-rose-300 focus:bg-white transition-all disabled:opacity-50 text-zinc-800 appearance-none"
                  value={formData.people}
                  onChange={e => setFormData({...formData, people: e.target.value})}
                >
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>)}
                </select>
              </div>

              <AnimatedButton className="w-full mt-4 py-4" onClick={() => {}}>
                {loading ? 'Enviando...' : 'Confirmar Reserva'}
              </AnimatedButton>
              <p className="text-[9px] text-zinc-300 text-center uppercase tracking-[0.2em] mt-2">
                Recibirás un correo de {CONTACT_INFO.email}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-sm">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="font-cinzel text-2xl mb-2 text-zinc-900">¡Todo listo!</h2>
            <p className="text-zinc-500 mb-8 font-playfair italic">
              Hemos recibido tu solicitud, {formData.name}. Nos vemos pronto en il Porcellino.
            </p>
            <AnimatedButton onClick={handleClose} variant="outline" className="w-full">Cerrar</AnimatedButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;