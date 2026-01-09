import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, ArrowRight, MousePointer2 } from 'lucide-react';
import SectionDivider from './ui/SectionDivider';

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1605001011156-cbf0b0f6f05c?q=80&w=2940&auto=format&fit=crop"
          alt="Cows at sunset"
          className="w-full h-full object-cover scale-105"
        />
        {/* Floating Particles/Texture Overlay */}
        <div className="absolute inset-0 z-10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-[-5vh]"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="bg-white/10 p-6 rounded-full backdrop-blur-md border border-white/20 shadow-2xl relative z-10">
                <Heart className="w-16 h-16 text-orange-400 fill-current animate-float" />
              </div>
            </div>
          </div>

          {/* Reduced text size on mobile: text-4xl instead of 5xl */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 drop-shadow-2xl leading-none tracking-tight">
            {t.hero.title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-orange-50 mb-12 font-light drop-shadow-lg max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              to="/donate"
              className="w-full sm:w-auto group relative px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white text-xl font-bold rounded-full shadow-[0_20px_50px_rgba(234,88,12,0.4)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.6)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta} <Heart size={20} className="fill-white group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-xl font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
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
        className="absolute bottom-16 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </motion.div>

      {/* Organic Bottom Divider */}
      <SectionDivider type="wave" color="fill-stone-50" />
    </div>
  );
};

export default Hero;
