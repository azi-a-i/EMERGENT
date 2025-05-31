import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Logo = ({ className = "h-8 w-auto", showText = true, isDark = false }) => {
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  
  // Determine which logo to use based on current page
  const isHomepage = location.pathname === '/';
  const logoFile = isHomepage ? '/arikekpar_logo.png' : '/arikekpar_logo2.png';
  
  const logoColor = isDark ? "#000000" : "#ffffff";
  const textColor = isDark ? "text-black" : "text-white";
  const taglineColor = isDark ? "text-gray-600" : "text-white/80";
  
  // Fallback SVG Logo (current design) - now with proper contrast handling
  const SVGLogo = () => (
    <svg viewBox="0 0 100 40" className={`${className} object-contain`} xmlns="http://www.w3.org/2000/svg">
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
  );
  
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Image with Enhanced Contrast Handling */}
      <div className="h-8 w-24 flex items-center relative">
        {!logoError ? (
          <div className="relative w-full h-full">
            {/* Add background filter for better contrast on white backgrounds */}
            {isDark && (
              <div className="absolute inset-0 bg-white/10 rounded-md backdrop-blur-sm"></div>
            )}
            <img 
              src={logoFile} 
              alt="Arikekpar & Company Logo"
              className={`w-full h-full object-contain relative z-10 ${
                isDark 
                  ? 'drop-shadow-sm' 
                  : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              }`}
              style={{
                filter: isDark 
                  ? 'brightness(0.95) contrast(1.1)' 
                  : 'brightness(1.1) contrast(1.2) drop-shadow(0 0 4px rgba(255,255,255,0.7))',
                imageRendering: 'crisp-edges'
              }}
              onError={() => {
                console.log(`Logo file ${logoFile} not found, using SVG fallback`);
                setLogoError(true);
              }}
              onLoad={() => {
                console.log(`Logo loaded successfully: ${logoFile} for page ${location.pathname}`);
                setLogoError(false);
              }}
            />
          </div>
        ) : (
          <SVGLogo />
        )}
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-playfair text-lg font-semibold leading-tight ${textColor} transition-colors duration-300`}>
            Arikekpar & Company
          </span>
          <span className={`text-xs italic -mt-1 ${taglineColor} transition-colors duration-300`}>
            Your Dream, Our Voice
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;