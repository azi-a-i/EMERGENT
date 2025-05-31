import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import CalendlyBooking from './CalendlyBooking';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine if we're on homepage - this affects initial header styling
  const isHomepage = location.pathname === '/';
  
  // For non-homepage, we want the header to be visible from the start
  const shouldShowDarkHeader = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
        shouldShowDarkHeader
          ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <Logo 
              className="h-8 w-auto" 
              showText={true}
              isDark={shouldShowDarkHeader}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-inter font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? shouldShowDarkHeader
                      ? 'text-black'
                      : 'text-white'
                    : shouldShowDarkHeader
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      shouldShowDarkHeader ? 'bg-black' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <CalendlyBooking 
              text="Book Consultation"
              variant={shouldShowDarkHeader ? "outline" : "secondary"}
              className="text-sm relative z-50"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors relative z-50 ${
              shouldShowDarkHeader
                ? 'text-black hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-inter font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <CalendlyBooking 
                text="Book Consultation"
                variant="outline"
                className="w-full py-3 mt-4 relative z-50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;