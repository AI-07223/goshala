import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-[110vh] w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-stone-900/90 z-10" /> {/* Enhanced Gradient */}
        <img
          src="https://images.unsplash.com/photo-1605001011156-cbf0b0f6f05c?q=80&w=2940&auto=format&fit=crop"
          alt="Cows at sunset"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-[-5vh]"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-6 rounded-full backdrop-blur-md border border-white/20 shadow-2xl">
              <Heart className="w-16 h-16 text-orange-400 fill-current animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 drop-shadow-2xl leading-none tracking-tight">
            {t.hero.title}
          </h1>

          <p className="text-2xl md:text-3xl text-orange-100 mb-12 font-light drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/donate"
              className="group relative px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white text-xl font-bold rounded-full shadow-[0_20px_50px_rgba(234,88,12,0.5)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.7)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta} <Heart size={20} className="fill-white" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/about"
              className="px-12 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xl font-medium rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
            >
              {t.hero.learnMore || "Learn More"} <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-sm uppercase tracking-widest font-light">Scroll to Explore</span>
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
