import React, { useState } from 'react';
import Layout from '../components/Layout';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Copy, Check, Heart, Wheat, HeartPulse, Building, User } from 'lucide-react';

const Donate = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState(500);
  const [selectedSeva, setSelectedSeva] = useState(null);
  const [copied, setCopied] = useState(false);

  const impactLevels = t.donatePage.impacts;

  // Helper to get icon for seva type
  const getIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes('grass') || l.includes('meal') || l.includes('food')) return <Wheat size={24} />;
    if (l.includes('medical') || l.includes('kit')) return <HeartPulse size={24} />;
    if (l.includes('adopt')) return <Heart size={24} />;
    if (l.includes('sadhu') || l.includes('human')) return <User size={24} />;
    return <Building size={24} />;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectSeva = (level) => {
    setAmount(level.value);
    setSelectedSeva(level.label);
  };

  return (
    <Layout>
      <div className="bg-stone-50 min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">{t.donatePage.title}</h1>
              <p className="text-xl text-stone-600">{t.donatePage.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Choose Seva Grid */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                  <span className="bg-orange-500 w-2 h-8 rounded-full"></span>
                  {t.donatePage.chooseImpact}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {impactLevels.map((level, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelectSeva(level)}
                      className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col gap-3 h-full ${
                        amount === level.value
                          ? 'border-orange-500 bg-orange-50 shadow-md ring-2 ring-orange-200'
                          : 'border-stone-200 bg-white hover:border-orange-200 hover:bg-orange-50/30'
                      }`}
                    >
                      <div className={`p-3 rounded-full w-fit ${amount === level.value ? 'bg-orange-200 text-orange-700' : 'bg-stone-100 text-stone-500'}`}>
                        {getIcon(level.label)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-stone-800">{level.label}</h3>
                        <p className="text-xs text-stone-500 mt-1">{level.desc}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-stone-100/50">
                        <span className="font-bold text-xl text-orange-600">₹{level.value.toLocaleString()}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <label className="block text-sm font-medium text-stone-500 mb-2 uppercase tracking-wider">{t.donatePage.customAmount}</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-stone-400">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full p-4 pl-10 rounded-xl border border-stone-300 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:outline-none text-2xl font-bold text-stone-800 transition-all"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Payment Methods (Sticky) */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <Reveal delay={0.3}>
                  {/* UPI Section */}
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-6">{t.donatePage.upiTitle}</h3>
                      <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-inner mx-auto">
                        <QrCode size={180} className="text-stone-900" />
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 mb-4 inline-flex items-center gap-3 border border-white/30">
                        <span className="font-mono font-bold tracking-wide">upi@divyagoshala</span>
                        <button onClick={() => handleCopy("upi@divyagoshala")} className="hover:text-orange-200 transition-colors">
                           {copied ? <Check size={18}/> : <Copy size={18}/>}
                        </button>
                      </div>
                      <p className="text-sm opacity-80 font-medium">{t.donatePage.upiSubtitle}</p>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 mt-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-stone-200"></div>
                    <h3 className="text-lg font-bold text-stone-800 mb-6 flex items-center gap-2">
                      <Building size={20} className="text-orange-500" />
                      {t.donatePage.bankTitle}
                    </h3>
                    <div className="space-y-4 text-sm text-stone-600">
                      <div className="flex justify-between items-center pb-3 border-b border-stone-50">
                        <span className="text-stone-400">{t.donatePage.accName}</span>
                        <span className="font-bold text-stone-800 text-right">Divya Goshala Trust</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-stone-50">
                        <span className="text-stone-400">{t.donatePage.accNo}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-stone-800 select-all">123456789012</span>
                          <button onClick={() => handleCopy("123456789012")} className="text-orange-500 hover:bg-orange-50 p-1 rounded">
                            <Copy size={14}/>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400">{t.donatePage.ifsc}</span>
                        <div className="flex items-center gap-2">
                           <span className="font-mono font-bold text-stone-800 select-all">SBIN0001234</span>
                           <button onClick={() => handleCopy("SBIN0001234")} className="text-orange-500 hover:bg-orange-50 p-1 rounded">
                             <Copy size={14}/>
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
