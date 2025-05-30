import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo 
              className="w-10 h-6 lg:w-12 lg:h-8" 
              variant={isScrolled ? "primary" : "white"} 
            />
            <div className="flex flex-col">
              <span className={`font-playfair font-bold text-lg lg:text-xl ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                Arikekpar & Company
              </span>
              <span className={`text-xs lg:text-sm ${
                isScrolled ? 'text-primary/70' : 'text-white/80'
              }`}>
                Your Dream, Our Voice
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-inter font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-accent'
                    : isScrolled
                    ? 'text-neutral-dark hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-primary' : 'bg-accent'
                    }`}
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-inter font-semibold transition-colors duration-200 shadow-lg"
            >
              Book Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-neutral-dark hover:bg-primary/10'
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
            className="lg:hidden bg-white border-t border-primary/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-inter font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-neutral-dark hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-full font-inter font-semibold transition-colors duration-200 mt-4">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;