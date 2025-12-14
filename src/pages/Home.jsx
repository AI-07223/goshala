import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ImpactTeaser from '../components/ImpactTeaser';
import Image from '../components/Image';
import Reveal from '../components/ui/Reveal';
import CountUpStats from '../components/ui/CountUpStats';
import SectionDivider from '../components/ui/SectionDivider';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Users, Quote, Leaf, Droplet, Sun, Shield, Award, FileCheck, BadgeCheck, ArrowRight, Calendar } from 'lucide-react';
import { config } from '../config';

const Home = () => {
  const { t } = useLanguage();

  const getIcon = (name) => {
    switch(name) {
      case 'Shield': return <Shield size={32} />;
      case 'Award': return <Award size={32} />;
      case 'FileCheck': return <FileCheck size={32} />;
      case 'BadgeCheck': return <BadgeCheck size={32} />;
      default: return <Award size={32} />;
    }
  };

  return (
    <Layout>
      <Hero />

      {/* Mission Section */}
      <section className="relative py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <Reveal width="100%">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940&auto=format&fit=crop"
                    alt="Feeding cows"
                    className="aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                {t.mission.title}
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 mb-8 rounded-full"></div>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                {t.mission.description}
              </p>
              <blockquote className="border-l-4 border-orange-300 pl-6 italic text-stone-500 mb-10 text-lg">
                "{t.mission.quote}"
              </blockquote>
              <a href="/about" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 hover:translate-x-2 transition-all duration-300 uppercase tracking-wider text-sm">
                {t.mission.readMore} <span className="text-xl">→</span>
              </a>
            </Reveal>

          </div>
        </div>

        {/* Organic Divider */}
        <SectionDivider type="curve" color="fill-white" flip={true} />
      </section>

      {/* Initiatives Section (Ref: What We Do) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">{t.initiatives.title}</h2>
              <p className="text-stone-500 text-xl">{t.initiatives.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.initiatives.items.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white rounded-full text-orange-500 shadow-sm">
                    {index === 0 && <Heart size={32} />}
                    {index === 1 && <Leaf size={32} />}
                    {index === 2 && <Droplet size={32} />}
                    {index === 3 && <Sun size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <SectionDivider type="wave" color="fill-orange-50/30" />
      </section>

      {config.features.showImpactCards && (
        <div className="relative z-10">
           <ImpactTeaser />
        </div>
      )}

      {/* How It Works Section */}
      <section className="py-32 bg-orange-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">{t.homeExtras.howItWorksTitle}</h2>
              <p className="text-stone-500 text-xl">{t.homeExtras.howItWorksSubtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-orange-200 z-0"></div>

             {[
                { icon: <Heart size={32}/>, title: t.homeExtras.step1Title, desc: t.homeExtras.step1Desc },
                { icon: <CreditCard size={32}/>, title: t.homeExtras.step2Title, desc: t.homeExtras.step2Desc },
                { icon: <Users size={32}/>, title: t.homeExtras.step3Title, desc: t.homeExtras.step3Desc },
             ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.2}>
                  <div className="relative z-10 text-center group">
                    <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-orange-100 text-orange-500 mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:border-orange-300">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed px-4">{step.desc}</p>
                  </div>
                </Reveal>
             ))}
          </div>
        </div>

        {/* Divider to stats */}
        <SectionDivider type="wave" color="fill-orange-600" />
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-orange-600 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "150+", label: t.stats.saved },
              { number: "24/7", label: t.stats.care },
              { number: "5000+", label: t.stats.meals },
              { number: "100%", label: t.stats.volunteer }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-4 font-serif">
                    <CountUpStats end={stat.number} />
                  </div>
                  <div className="text-orange-100 font-medium text-lg uppercase tracking-wider opacity-90">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Divider to testimonials */}
        <SectionDivider type="curve" color="fill-stone-900" />
      </section>

      {/* Testimonials */}
      {config.features.showStories && (
        <section className="py-32 bg-stone-900 text-stone-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="mx-auto text-orange-500 mb-10 opacity-50" size={64} />
            <Reveal>
              <p className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-10 text-white/90">
                "{t.homeExtras.testimonial1}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-orange-500 rounded-full mb-4"></div>
                <p className="font-bold text-orange-400 tracking-widest uppercase text-sm">{t.homeExtras.testimonial1Author}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Latest Updates (Blog) */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2">{t.homeExtras.latestUpdatesTitle}</h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <button className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                {t.homeExtras.readMoreBtn} <ArrowRight size={20} />
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.blogPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-stone-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-wider mb-3">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sm font-bold text-stone-400 group-hover:text-orange-500 flex items-center gap-1 transition-colors">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-8">{t.homeExtras.accreditationsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {config.accreditations.map((acc) => (
              <div key={acc.id} className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-stone-50 rounded-full text-stone-600 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors">
                  {getIcon(acc.icon)}
                </div>
                <span className="text-xs font-bold text-stone-500">{acc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
