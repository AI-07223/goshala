import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { config } from '../config';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif text-orange-500 mb-4">{config.goshalaName}</h3>
            <p className="text-sm leading-relaxed mb-6">
              {t.mission.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-orange-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="/gallery" className="hover:text-orange-400 transition-colors">{t.nav.gallery}</a></li>
              <li><a href="/donate" className="hover:text-orange-400 transition-colors">{t.nav.donate}</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">{t.nav.contact}</h4>
             <div className="space-y-4 text-sm">
               <div className="flex items-start space-x-3">
                 <MapPin className="text-orange-500 mt-1" size={18} />
                 <span>123 Divine Path, Vrindavan Road, <br/>Mathura, UP, India - 281121</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Phone className="text-orange-500" size={18} />
                 <span>{config.contactPhone}</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail className="text-orange-500" size={18} />
                 <span>{config.contactEmail}</span>
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 italic text-orange-900/50">{t.footer.quote}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
