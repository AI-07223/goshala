import React from 'react';
import Layout from '../components/Layout';
import Reveal from '../components/ui/Reveal';
import Image from '../components/Image';
import { useLanguage } from '../context/LanguageContext';
import { config } from '../config';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Adopt = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleAdopt = (cowName) => {
    // Navigate to Donate page with a query parameter to pre-select "Adopt a Cow"
    navigate('/donate?category=adopt');
  };

  return (
    <Layout>
      <div className="bg-stone-50 min-h-screen py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">{t.adoptPage.title}</h1>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">{t.adoptPage.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.adoptableCows.map((cow, index) => (
              <Reveal key={cow.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group">
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={cow.img}
                      alt={cow.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold font-serif">{cow.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between mb-4 text-sm text-stone-500 border-b border-stone-100 pb-4">
                      <div className="flex flex-col">
                        <span className="uppercase tracking-wider text-xs font-bold text-orange-400">{t.adoptPage.breed}</span>
                        <span className="font-semibold text-stone-700">{cow.breed}</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="uppercase tracking-wider text-xs font-bold text-orange-400">{t.adoptPage.age}</span>
                        <span className="font-semibold text-stone-700">{cow.age}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 mb-6 text-sm leading-relaxed min-h-[3em]">
                      {cow.desc}
                    </p>

                    <button
                      onClick={() => handleAdopt(cow.name)}
                      className="w-full py-3 bg-orange-100 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <Heart size={18} className="fill-current" />
                      {t.adoptPage.adoptBtn}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Adopt;
