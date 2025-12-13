import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Wheat, Home, HeartPulse } from 'lucide-react';

const ImpactTeaser = () => {
  const { t } = useLanguage();

  const impactItems = [
    { icon: <Wheat size={32} />, title: t.impact.feed, color: "bg-green-100 text-green-700" },
    { icon: <Home size={32} />, title: t.impact.shelter, color: "bg-orange-100 text-orange-700" },
    { icon: <HeartPulse size={32} />, title: t.impact.medical, color: "bg-red-100 text-red-700" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-stone-800 mb-4"
          >
            {t.impact.title}
          </motion.h2>
          <p className="text-stone-500 text-lg">{t.impact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactTeaser;
