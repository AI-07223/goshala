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
import { Heart, CreditCard, Users, Quote, Leaf, Droplet, Sun, Shield, Award, FileCheck, BadgeCheck, ArrowRight, Calendar, Star, Utensils, HeartPulse, Hash } from 'lucide-react';
import { config } from '../config';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const getIcon = (name) => {
    switch(name) {
      case 'Shield': return <Shield size={32} />;
      case 'Award': return <Award size={32} />;
      case 'FileCheck': return <FileCheck size={32} />;
      case 'BadgeCheck': return <BadgeCheck size={32} />;
      case 'Droplet': return <Droplet size={32} />;
      case 'Wheat': return <Leaf size={32} />; // Using Leaf for Wheat/Fodder metaphor
      case 'HeartPulse': return <HeartPulse size={32} />;
      case 'Utensils': return <Utensils size={32} />;
      case 'Star': return <Star size={24} />;
      case 'Heart': return <Heart size={24} />;
      case 'Sun': return <Sun size={24} />;
      case 'Calendar': return <Calendar size={24} />;
      case 'Hash': return <Hash size={24} />;
      case 'User': return <Users size={24} />;
      default: return <Award size={32} />;
    }
  };

  return (
    <Layout>
      <Hero />

      {/* 1. Quick Actions Strip (New) */}
      <section className="relative z-20 -mt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.quickActions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-xl border-b-4 border-orange-500 hover:-translate-y-1 transition-transform flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="text-orange-500 mb-3 group-hover:scale-110 transition-transform">
                {getIcon(action.icon)}
              </div>
              <h3 className="font-bold text-stone-800">{t.quickActions[action.titleKey]}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Know Us (Replaced old Mission) */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940&auto=format&fit=crop"
                    alt="Feeding cows"
                    className="aspect-[4/3]"
                  />
                  {/* Video Play Button Mock */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-orange-600 border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                {t.mission.title}
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 mb-8 rounded-full"></div>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                {t.mission.description}
              </p>
              <blockquote className="border-l-4 border-orange-300 pl-6 italic text-stone-500 mb-10 text-lg">
                "{t.mission.quote}"
              </blockquote>
              <a href="/about" className="inline-flex items-center gap-2 text-white bg-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200 uppercase tracking-wider text-sm">
                {t.mission.readMore} <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. What We Do (Expanded Grid) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">{t.initiatives.title}</h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mb-4"></div>
              <p className="text-stone-500 text-xl">{t.initiatives.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.initiatives.items.map((item, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="mb-4 p-3 bg-white rounded-full text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {/* Reuse icons cyclically for mock purpose */}
                    {[<Shield size={24}/>, <Leaf size={24}/>, <HeartPulse size={24}/>, <Droplet size={24}/>][index % 4]}
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed opacity-80">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <SectionDivider type="wave" color="fill-orange-50" />
      </section>

      {/* 4. Our Achievements */}
      <section className="py-24 bg-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">{t.homeExtras.achievementsTitle}</h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">{t.homeExtras.achievementsDesc}</p>
                <div className="grid grid-cols-2 gap-6">
                  {config.accreditations.slice(0,2).map(acc => (
                    <div key={acc.id} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-orange-500">{getIcon(acc.icon)}</div>
                      <span className="font-bold text-stone-700">{acc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 bg-stone-200 rounded-2xl overflow-hidden shadow-xl">
                 <Image src="https://images.unsplash.com/photo-1545634024-34537759a29e?q=80&w=2940" alt="Achievement" className="object-cover" />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl border-4 border-white px-6 py-2 uppercase tracking-widest">Since 2011</span>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Stats */}
      <section className="py-24 bg-orange-600 text-white relative">
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
        <SectionDivider type="curve" color="fill-white" />
      </section>

      {/* 6. Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-10">{t.homeExtras.accreditationsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {config.accreditations.map((acc) => (
              <div key={acc.id} className="flex flex-col items-center gap-3 group">
                <div className="p-4 bg-stone-50 rounded-full text-stone-600 group-hover:text-orange-500 group-hover:bg-orange-50 transition-colors border border-stone-100">
                  {getIcon(acc.icon)}
                </div>
                <span className="text-xs font-bold text-stone-500">{acc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Book Your Sewa (Donate Preview) */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">{t.donatePage.title}</h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto"></div>
            </div>
          </Reveal>
          {/* Show first 4 impacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.donatePage.impacts.slice(0, 4).map((impact, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <h3 className="font-bold text-lg text-stone-800 mb-2">{impact.label}</h3>
                  <p className="text-sm text-stone-500 mb-4">{impact.desc}</p>
                  <Link to="/donate" className="text-orange-600 text-sm font-bold uppercase tracking-wide hover:underline">
                    {t.donatePage.addBtn} &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/donate" className="inline-block border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
              View All Sewa Options
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Adopt Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2">{t.homeExtras.adoptPreviewTitle}</h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <Link to="/adopt" className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                View All <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.adoptableCows.slice(0,4).map((cow, i) => (
              <Reveal key={cow.id} delay={i * 0.1}>
                <div className="bg-stone-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                  <div className="h-48 overflow-hidden">
                    <Image src={cow.img} alt={cow.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold font-serif mb-1">{cow.name}</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mb-3">{cow.breed} • {cow.age}</p>
                    <Link to="/donate?category=adopt" className="block text-center bg-orange-100 text-orange-700 py-2 rounded-lg font-bold text-sm hover:bg-orange-500 hover:text-white transition-colors">
                      {t.adoptPage.adoptBtn}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Astrology */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold mb-4 text-orange-400">{t.homeExtras.astrologyTitle}</h2>
            <p className="text-stone-400 mb-12 max-w-2xl mx-auto">{t.homeExtras.astrologySubtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {config.astrologyServices.map((service, i) => (
                <div key={service.id} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full border border-stone-700 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-sm font-medium text-stone-300 group-hover:text-white transition-colors">{service.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Blogs */}
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

      {/* 11. Testimonials */}
      {config.features.showStories && (
        <section className="py-32 bg-white text-stone-800 border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-10 text-stone-800">{t.homeExtras.testimonialsTitle}</h2>
            <Quote className="mx-auto text-orange-500 mb-10 opacity-30" size={64} />
            <Reveal>
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10 text-stone-600">
                "{t.homeExtras.testimonial1}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-orange-500 rounded-full mb-4"></div>
                <p className="font-bold text-orange-600 tracking-widest uppercase text-sm">{t.homeExtras.testimonial1Author}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

    </Layout>
  );
};

export default Home;
