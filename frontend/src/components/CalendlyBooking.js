import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Calendar } from 'lucide-react';

const CalendlyBooking = ({ 
  text = "Book Consultation", 
  className = "", 
  variant = "primary" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  // Ask user for their Calendly URL
  const calendlyUrl = "https://calendly.com/arikekpar-company/consultation"; // Placeholder - will be updated

  useEffect(() => {
    // Create or find modal root element
    let modalRootElement = document.getElementById('modal-root');
    if (!modalRootElement) {
      modalRootElement = document.createElement('div');
      modalRootElement.id = 'modal-root';
      modalRootElement.style.position = 'relative';
      modalRootElement.style.zIndex = '9999';
      document.body.appendChild(modalRootElement);
    }
    setModalRoot(modalRootElement);

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openCalendly = () => {
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  const baseStyles = "inline-flex items-center gap-2 font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-lg";
  
  const variantStyles = {
    primary: "bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-full"
  };

  return (
    <>
      <button 
        onClick={openCalendly}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <Calendar size={20} />
        {text}
      </button>

      {/* Calendly Modal - Rendered via Portal for maximum z-index control */}
      {isOpen && modalRoot && createPortal(
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0 
          }}
          onClick={closeCalendly}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] relative overflow-hidden"
            style={{ zIndex: 10000 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCalendly}
              className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 text-black w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-colors"
              style={{ zIndex: 10001 }}
            >
              ×
            </button>
            
            {/* Header */}
            <div className="bg-black text-white p-6 text-center">
              <h3 className="font-playfair text-2xl font-bold">Schedule Your Consultation</h3>
              <p className="font-inter text-white/90 mt-2">
                Book a meeting with our execution-focused consulting team
              </p>
            </div>

            {/* Calendly Iframe - Placeholder for now */}
            <div className="p-8 h-full flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <Calendar size={64} className="mx-auto mb-4 text-gray-400" />
                <h4 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                  Calendly Integration Ready
                </h4>
                <p className="text-gray-600 mb-6 max-w-md">
                  To complete the booking integration, please provide your Calendly account URL. 
                  Once configured, clients will be able to book consultations directly.
                </p>
                <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="font-mono text-sm text-gray-500 mb-2">Current URL placeholder:</p>
                  <p className="font-mono text-xs bg-gray-100 p-2 rounded">
                    {calendlyUrl}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        modalRoot
      )}
    </>
  );
};

export default CalendlyBooking;