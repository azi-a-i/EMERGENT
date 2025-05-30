import React from 'react';

const Logo = ({ className = "w-12 h-8", variant = "white" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img
        src="/logo.png"
        alt="Arikekpar & Company Logo"
        className={`w-full h-full object-contain ${
          variant === "white" ? "filter invert" : ""
        }`}
      />
    </div>
  );
};

export default Logo;