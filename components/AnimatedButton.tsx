
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseStyles = "relative px-8 py-3 rounded-full font-cinzel font-bold tracking-[0.1em] transition-all duration-300 transform active:scale-95 overflow-hidden group";
  
  const variants = {
    primary: "bg-rose-600 text-white shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:-translate-y-0.5",
    outline: "border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white hover:shadow-lg hover:shadow-rose-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Soft Light Sweep */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[100%] skew-x-12" />
    </button>
  );
};

export default AnimatedButton;