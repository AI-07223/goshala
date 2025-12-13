import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ImpactTeaser from '../components/ImpactTeaser';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Hero />

      {/* Mission Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940&auto=format&fit=crop"
                alt="Feeding cows"
                className="relative rounded-2xl shadow-2xl z-10 hover:scale-[1.01] transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                {t.mission.title}
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                {t.mission.description}
              </p>
              <blockquote className="border-l-4 border-orange-300 pl-4 italic text-stone-500 mb-8">
                "Service to the cow is service to the universe."
              </blockquote>
              <a href="/about" className="text-orange-600 font-bold hover:text-orange-700 hover:underline decoration-2 underline-offset-4">
                Read our full story →
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <ImpactTeaser />

      {/* Stats Section (Mock) */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Cows Saved" },
              { number: "24/7", label: "Medical Care" },
              { number: "5000+", label: "Meals Served" },
              { number: "100%", label: "Volunteer Run" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
