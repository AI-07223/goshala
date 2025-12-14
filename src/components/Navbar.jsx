import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  // The navbar is "active" (solid background, dark text) if:
  // 1. We have scrolled down
  // 2. OR we are NOT on the home page (inner pages need solid navbar)
  const isNavbarActive = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/adopt', label: t.nav.adopt }, // Added Adopt link
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNavbarActive
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
           <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
             {/* Simple Cow Icon Placeholder using Lucide for now */}
             <Heart className={`w-6 h-6 ${isNavbarActive ? 'text-orange-600' : 'text-orange-500'} fill-current`} />
           </div>
           <span className={`text-xl font-serif font-bold ${
             isNavbarActive ? 'text-gray-800' : 'text-white'
           } transition-colors`}>
             Divya Goshala
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                font-medium transition-colors hover:text-orange-500
                ${isActive ? 'text-orange-500' : (isNavbarActive ? 'text-gray-700' : 'text-white')}
              `}
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={toggleLanguage}
            className={`px-3 py-1 rounded-full border transition-all ${
              isNavbarActive
                ? 'border-orange-500 text-orange-500 hover:bg-orange-50'
                : 'border-white text-white hover:bg-white/20'
            }`}
          >
            {language === 'en' ? 'HI' : 'EN'}
          </button>

          <Link
            to="/donate"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all"
          >
            {t.nav.donate}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleLanguage}
            className={`px-2 py-1 rounded border text-sm ${
              isNavbarActive
                ? 'border-orange-500 text-orange-500'
                : 'border-white text-white'
            }`}
          >
            {language === 'en' ? 'HI' : 'EN'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className={isNavbarActive ? 'text-gray-800' : 'text-white'}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block px-3 py-2 rounded-md text-base font-medium
                    ${isActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
               <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold shadow-md"
              >
                {t.nav.donate}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
