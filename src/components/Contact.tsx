import React, { useState, useEffect } from 'react';
import { Send, Twitter, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  // Update message when initialMessage prop changes (e.g. user selected a package)
  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b278e058-0d47-4905-a837-0d51319ac127",
          subject: "Nuevo contacto desde Kinetic Portfolio",
          from_name: "Kinetic Web Form",
          ...formData,
        }),
      });

      const json = await response.json();

      if (json.success) {
        setResult({ 
          success: true, 
          message: "¡Mensaje enviado! Nos pondremos en contacto contigo pronto." 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult({ 
          success: false, 
          message: json.message || "Hubo un problema al enviar el mensaje." 
        });
      }
    } catch (error) {
      setResult({ 
        success: false, 
        message: "Error de conexión. Por favor verifica tu internet e intenta de nuevo." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-[600px] mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
          ¿Listo para colaborar?
        </h2>
        <p className="text-text-muted text-lg">
          Actualmente aceptando nuevos proyectos para el Q4. <br />
          Construyamos algo extraordinario juntos.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="group mt-12 text-left space-y-4 backdrop-blur-2xl p-8 rounded-[24px] transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] hover:-translate-y-1"
          style={{
            border: '1px solid transparent',
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
            backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02)), linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
          }}
        >
          {/* Honeypot for spam bots (handled by Web3Forms logic usually, but kept simple here) */}
          <input type="hidden" name="subject" value="Nuevo contacto desde Kinetic Portfolio" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none placeholder:text-gray-600"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none placeholder:text-gray-600"
                placeholder="nombre@empresa.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none resize-none placeholder:text-gray-600"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
          </div>

          {result && (
            <div className={`p-3 rounded-xl text-sm flex items-center gap-2 ${result.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
              {result.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              {result.message}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-primary to-violet-700 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] flex justify-center items-center gap-2 group-hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="pt-12 flex justify-center gap-6 text-gray-500">
          <a
            href="#"
            className="hover:text-primary transition-colors hover:scale-110 duration-300 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors hover:scale-110 duration-300 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
            aria-label="Github"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors hover:scale-110 duration-300 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;