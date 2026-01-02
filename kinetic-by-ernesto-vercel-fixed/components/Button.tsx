import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-display font-medium tracking-wide uppercase transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden cursor-pointer";
  
  const variants = {
    primary: "bg-neon-blue text-carbon-900 hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:bg-white",
    secondary: "bg-neon-lime text-carbon-900 hover:shadow-[0_0_20px_rgba(163,255,18,0.6)] hover:bg-white",
    outline: "bg-transparent border border-gray-600 text-light hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        {...props as any}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props as any}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};