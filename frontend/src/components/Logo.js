import React from 'react';

const Logo = ({ className = "h-8 w-auto", showText = true, isDark = false }) => {
  const logoColor = isDark ? "#000000" : "#ffffff";
  const textColor = isDark ? "text-black" : "text-white";
  const taglineColor = isDark ? "text-gray-600" : "text-white/80";
  
  return (
    <div className="flex items-center space-x-3">
      {/* Logo SVG */}
      <div className="h-8 w-24 flex items-center">
        <svg viewBox="0 0 100 40" className={className} xmlns="http://www.w3.org/2000/svg">
          <g id="arikekpar-logo">
            {/* Letter A stylized as forward arrow */}
            <path d="M10 30 L20 10 L30 30 M15 22 L25 22" 
                  stroke={logoColor}
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            
            {/* Ampersand symbol */}
            <path d="M40 15 C45 10, 50 10, 50 15 C50 20, 45 22, 42 25 L50 30 M35 25 C35 20, 37 15, 42 15" 
                  stroke={logoColor}
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            
            {/* Letter C with opening representing "voice" */}
            <path d="M70 15 C65 10, 58 15, 58 20 C58 25, 65 30, 70 25" 
                  stroke={logoColor}
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            
            {/* Connection dots representing execution */}
            <circle cx="78" cy="20" r="1.5" fill={logoColor}/>
            <circle cx="85" cy="20" r="1.5" fill={logoColor}/>
            <circle cx="92" cy="20" r="1.5" fill={logoColor}/>
          </g>
        </svg>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-playfair text-lg font-semibold leading-tight ${textColor}`}>
            Arikekpar & Company
          </span>
          <span className={`text-xs italic -mt-1 ${taglineColor}`}>
            Your Dream, Our Voice
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;