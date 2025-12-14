import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // With TopBar, Navbar is always white background (below hero) or sticky white
  // To match reference, we make it white and clean.

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // TopBar height approx
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/adopt', label: t.nav.adopt },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-40 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
           <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
             <Heart className="w-7 h-7 text-orange-600 fill-current" />
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-serif font-bold text-stone-800 leading-none">
               Divya Goshala
             </span>
             <span className="text-xs text-orange-600 font-medium tracking-widest uppercase">
               Gauraksha & Sewa
             </span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                px-4 py-2 font-medium transition-colors rounded-lg text-sm uppercase tracking-wide
                ${isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}
              `}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="ml-4 pl-4 border-l border-gray-200">
            <Link
              to="/donate"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Heart size={18} className="fill-white" />
              {t.nav.donate}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-lg text-base font-medium
                    ${isActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
               <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 bg-orange-600 text-white px-6 py-3 rounded-lg font-bold shadow-md"
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
