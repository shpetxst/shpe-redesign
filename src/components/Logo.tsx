import React from 'react';

interface LogoProps {
  imagePath: string;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  imagePath = "/assets/icons/SHPE_logo_horiz_Texas State_KO.png", 
  width = 240, 
  height = 240,
  className = ''
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <img 
          src={imagePath}
          alt="SHPE Logo"
          width={width}
          height={height}
          className={className}
        />
      </div>
    </div>
  );
};

export default Logo;