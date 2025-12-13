import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { QrCode, Copy, Check } from 'lucide-react';

const Donate = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState(500);
  const [copied, setCopied] = useState(false);

  const impactLevels = t.donatePage.impacts;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">{t.donatePage.title}</h1>
            <p className="text-xl text-stone-600">{t.donatePage.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left: Interactive Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100"
            >
              <h2 className="text-2xl font-bold text-stone-800 mb-6">{t.donatePage.chooseImpact}</h2>

              <div className="space-y-4 mb-8">
                {impactLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setAmount(level.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      amount === level.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md'
                        : 'border-stone-200 hover:border-orange-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">₹{level.value}</span>
                      <span className="text-sm font-medium opacity-80">{level.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <label className="block text-sm font-medium text-stone-500 mb-2">{t.donatePage.customAmount}</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-2xl font-bold text-stone-800"
                />
              </div>
            </motion.div>

            {/* Right: Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* UPI Section */}
              <div className="bg-orange-600 text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                <h3 className="text-xl font-bold mb-6">{t.donatePage.upiTitle}</h3>
                <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-inner">
                  {/* Placeholder QR Code */}
                  <QrCode size={160} className="text-stone-900" />
                </div>
                <p className="font-mono text-orange-100 mb-2">upi@divyagoshala</p>
                <p className="text-sm opacity-80">{t.donatePage.upiSubtitle}</p>
              </div>

              {/* Bank Details */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
                <h3 className="text-lg font-bold text-stone-800 mb-4">{t.donatePage.bankTitle}</h3>
                <div className="space-y-3 text-sm text-stone-600">
                  <div className="flex justify-between">
                    <span>{t.donatePage.accName}:</span>
                    <span className="font-bold text-stone-800">Divya Goshala Trust</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.donatePage.accNo}:</span>
                    <span className="font-mono font-bold text-stone-800 select-all">123456789012</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.donatePage.ifsc}:</span>
                    <div className="flex items-center gap-2">
                       <span className="font-mono font-bold text-stone-800 select-all">SBIN0001234</span>
                       <button onClick={() => handleCopy("SBIN0001234")} className="text-orange-500 hover:text-orange-600">
                         {copied ? <Check size={14}/> : <Copy size={14}/>}
                       </button>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
