import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  width = 240, 
  height = 240,
  className = '',
  isScrolled = false
}) => {
  const scrolledImage = "/assets/icons/SHPE_logo_horiz_Texas State_CMYK.jpg";
  const defaultImage = "/assets/icons/SHPE_logo_horiz_Texas State_KO.png";

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center relative">
        <img 
          src={defaultImage}
          alt="SHPE Logo"
          width={width}
          height={height}
          className={`absolute transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'} ${className}`}
        />
        <img 
          src={scrolledImage}
          alt="SHPE Logo"
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      </div>
    </div>
  );
};

export default Logo;