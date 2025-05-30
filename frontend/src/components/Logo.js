import React from 'react';

const Logo = ({ className = "w-12 h-12", variant = "white" }) => {
  const strokeColor = variant === "white" ? "#ffffff" : "#015C4B";
  const backgroundColor = variant === "white" ? "#000000" : "transparent";
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 120 60"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Black background */}
        <rect width="120" height="60" fill={backgroundColor} rx="8" />
        
        {/* Left side - Sound waves */}
        <g>
          {/* Outer ring */}
          <circle 
            cx="15" 
            cy="30" 
            r="4" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1.5"
          />
          
          {/* Three curved lines - left side */}
          <path 
            d="M 25 30 Q 35 20, 45 30 Q 35 40, 25 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1.5"
          />
          <path 
            d="M 28 30 Q 38 15, 48 30 Q 38 45, 28 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="2"
          />
          <path 
            d="M 31 30 Q 41 10, 51 30 Q 41 50, 31 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="2.5"
          />
        </g>
        
        {/* Right side - Mirrored sound waves */}
        <g>
          {/* Outer ring */}
          <circle 
            cx="105" 
            cy="30" 
            r="4" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1.5"
          />
          
          {/* Three curved lines - right side (mirrored) */}
          <path 
            d="M 95 30 Q 85 20, 75 30 Q 85 40, 95 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1.5"
          />
          <path 
            d="M 92 30 Q 82 15, 72 30 Q 82 45, 92 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="2"
          />
          <path 
            d="M 89 30 Q 79 10, 69 30 Q 79 50, 89 30" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="2.5"
          />
        </g>
        
        {/* Center connection point */}
        <circle 
          cx="60" 
          cy="30" 
          r="2" 
          fill={strokeColor}
        />
      </svg>
    </div>
  );
};

export default Logo;