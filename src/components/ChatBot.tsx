import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Kinetic Style. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initChat = () => {
    if (!chatSessionRef.current) {
      const apiKey = (process.env.API_KEY || process.env.GEMINI_API_KEY || '').toString();
      if (!apiKey) {
        setMessages((prev) => [...prev, { role: 'model', text: 'Para activar el chat con IA necesito configurar la API Key en Vercel. Mientras tanto, puedes escribirnos a ernesto1984.esc@gmail.com.' }]);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `Eres el asistente de IA oficial de "Kinetic Style", una agencia de diseño premium y futurista. 
          Tu tono debe ser profesional, tecnológico, conciso y servicial.
          
          Tienes conocimiento sobre:
          - Servicios: Identidad (Branding), Digital (Web/Apps), Entorno (Señalética).
          - Paquetes: Launch (Emprendedor), Growth (Pymes), Corporate (Empresas grandes).
          
          REGLA IMPORTANTE:
          Si el usuario pregunta por precios específicos, cotizaciones, presupuestos o desea contratar servicios formalmente, DEBES indicarles que envíen su solicitud al correo: ernesto1984.esc@gmail.com.
          No inventes precios numéricos.
          `,
        },
      });
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    initChat();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) initChat();

      if (!chatSessionRef.current) {
        setMessages((prev) => [...prev, { role: "model", text: "El chat IA aún no está configurado. Escríbenos a ernesto1984.esc@gmail.com." }]);
        setIsLoading(false);
        return;
      }

      const response = await chatSessionRef.current.sendMessage({ 
        message: userMsg 
      });

      const text = response.text || "Lo siento, no pude procesar esa respuesta.";

      setMessages((prev) => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { role: 'model', text: "Hubo un error al conectar con el servidor. Por favor intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button - Neon Pulse Style */}
      <button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen 
            ? 'bg-surface text-white rotate-90 border border-white/20' 
            : 'bg-primary text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] animate-pulse-glow'
        }`}
        aria-label="Chat con IA"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window - Dark Glassmorphism with Gradient Border */}
      <div
        className={`fixed bottom-24 right-6 w-[350px] md:w-[400px] z-50 flex flex-col backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{
          maxHeight: 'calc(100vh - 120px)',
          border: '1px solid transparent',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
          backgroundImage: 'linear-gradient(to bottom right, rgba(20,20,20,0.8), rgba(10,10,10,0.9)), linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
        }}
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        
        {/* Header */}
        <div className="flex items-center gap-3 p-5 border-b border-white/5 bg-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-violet-900 flex items-center justify-center text-white shadow-inner">
            <Sparkles size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base tracking-tight">Kinetic AI</h3>
            <span className="text-xs text-secondary flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_#06b6d4] animate-pulse"></span>
              En línea
            </span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 min-h-[350px] max-h-[500px] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-none shadow-[0_5px_20px_-5px_rgba(139,92,246,0.3)]'
                    : 'bg-[#222] text-gray-200 border border-white/5 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#222] border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-0"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-black/20">
          <div className="relative flex items-center group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;