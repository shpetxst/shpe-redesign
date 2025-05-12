import React from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#76232F' }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 2L4 7V17L12 22L20 17V7L12 2Z" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M12 6L8 8V16L12 18L16 16V8L12 6Z" 
            stroke={color} 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M12 10L16 8M12 10L8 8M12 10V14" 
            stroke={color} 
            strokeWidth="2"
          />
        </svg>
        <span 
          className="ml-2 font-extrabold text-xl tracking-tight"
          style={{ color }}
        >
          SHPE
        </span>
      </div>
      <span 
        className="text-sm font-medium border-l pl-2 hidden sm:inline-block"
        style={{ color, borderColor: color }}
      >
        Texas State
      </span>
    </div>
  );
};

export default Logo;