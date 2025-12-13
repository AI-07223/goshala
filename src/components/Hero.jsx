import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
        {/* Using a direct img tag here because Image component handles div wrappers differently for background logic */}
        <img
          src="https://images.unsplash.com/photo-1545634024-34537759a29e?q=80&w=2940&auto=format&fit=crop"
          alt="Cow in field"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500/20 p-4 rounded-full backdrop-blur-sm">
              <Heart className="w-12 h-12 text-orange-400 fill-current animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-orange-50 mb-10 font-light drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <Link
            to="/donate"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 ring-4 ring-orange-600/30"
          >
            {t.hero.cta}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-20 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
