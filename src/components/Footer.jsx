import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { config } from '../config';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-orange-500 mb-6">{config.goshalaName}</h3>
            <p className="text-sm leading-relaxed mb-8 opacity-80">
              {t.mission.description}
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors transform hover:scale-110"><Facebook size={22} /></a>
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors transform hover:scale-110"><Instagram size={22} /></a>
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors transform hover:scale-110"><Twitter size={22} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm">{t.footer.quickLinks}</h4>
            <ul className="space-y-4 text-sm">
              {[
                { path: "/about", label: t.nav.about },
                { path: "/gallery", label: t.nav.gallery },
                { path: "/donate", label: t.nav.donate },
                { path: "/contact", label: t.nav.contact }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="flex items-center group hover:text-orange-400 transition-colors">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
             <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm">{t.nav.contact}</h4>
             <div className="space-y-6 text-sm">
               <div className="flex items-start space-x-4 group">
                 <div className="bg-stone-800 p-2 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                   <MapPin size={18} />
                 </div>
                 <span className="opacity-80 leading-relaxed">123 Divine Path, Vrindavan Road, <br/>Mathura, UP, India - 281121</span>
               </div>
               <div className="flex items-center space-x-4 group">
                 <div className="bg-stone-800 p-2 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                   <Phone size={18} />
                 </div>
                 <span className="opacity-80">{config.contactPhone}</span>
               </div>
               <div className="flex items-center space-x-4 group">
                 <div className="bg-stone-800 p-2 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                   <Mail size={18} />
                 </div>
                 <span className="opacity-80">{config.contactEmail}</span>
               </div>
             </div>
          </div>

          {/* Newsletter (Mock) */}
          {config.features.showNewsletter && (
             <div className="col-span-1">
              <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm">{t.footer.newsletterTitle}</h4>
              <p className="text-xs text-stone-500 mb-4">{t.footer.newsletterDesc}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-stone-800 text-white text-sm px-4 py-3 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 w-full"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-r-lg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 md:mt-0 italic text-orange-900/40 font-serif text-lg opacity-50">{t.footer.quote}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
