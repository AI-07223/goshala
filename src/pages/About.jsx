import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  // Use timeline from config (t object) instead of hardcoded
  const timeline = t.aboutPage.timeline;

  return (
    <Layout>
      <div className="bg-stone-50 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">{t.aboutPage.title}</h1>
            <p className="text-xl text-stone-600">{t.aboutPage.subtitle}</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-5/12"></div>

                  <div className="z-10 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-4 border-white">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                    <span className="text-orange-500 font-bold text-sm">{item.year}</span>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;
