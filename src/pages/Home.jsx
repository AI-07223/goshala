import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ImpactTeaser from '../components/ImpactTeaser';
import Image from '../components/Image';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Users, Quote } from 'lucide-react';
import { config } from '../config';

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
              <Image
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940&auto=format&fit=crop"
                alt="Feeding cows"
                className="relative rounded-2xl shadow-2xl z-10 hover:scale-[1.01] transition-transform duration-500 aspect-[4/3]"
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
                "{t.mission.quote}"
              </blockquote>
              <a href="/about" className="text-orange-600 font-bold hover:text-orange-700 hover:underline decoration-2 underline-offset-4">
                {t.mission.readMore}
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {config.features.showImpactCards && <ImpactTeaser />}

      {/* How It Works Section */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">{t.homeExtras.howItWorksTitle}</h2>
            <p className="text-stone-500 text-lg">{t.homeExtras.howItWorksSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-orange-200 z-0"></div>

             {[
                { icon: <Heart size={32}/>, title: t.homeExtras.step1Title, desc: t.homeExtras.step1Desc },
                { icon: <CreditCard size={32}/>, title: t.homeExtras.step2Title, desc: t.homeExtras.step2Desc },
                { icon: <Users size={32}/>, title: t.homeExtras.step3Title, desc: t.homeExtras.step3Desc },
             ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-orange-100 text-orange-500 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{step.title}</h3>
                  <p className="text-stone-600">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: t.stats.saved },
              { number: "24/7", label: t.stats.care },
              { number: "5000+", label: t.stats.meals },
              { number: "100%", label: t.stats.volunteer }
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

      {/* Testimonials */}
      {config.features.showStories && (
        <section className="py-24 bg-stone-900 text-stone-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="mx-auto text-orange-500 mb-8" size={48} />
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-white">
                "{t.homeExtras.testimonial1}"
              </p>
              <p className="font-bold text-orange-400 tracking-wider uppercase">{t.homeExtras.testimonial1Author}</p>
            </motion.div>
          </div>
        </section>
      )}

    </Layout>
  );
};

export default Home;
