import React from 'react';
import { Mail, Phone, User, Globe } from 'lucide-react';
import { config } from '../config';
import { useLanguage } from '../context/LanguageContext';

const TopBar = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="bg-orange-600 text-white py-2 text-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">

        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a href={`mailto:${config.contactEmail}`} className="flex items-center gap-2 hover:text-orange-100 transition-colors">
            <Mail size={14} />
            <span>{config.contactEmail}</span>
          </a>
          <a href={`tel:${config.contactPhone}`} className="flex items-center gap-2 hover:text-orange-100 transition-colors">
            <Phone size={14} />
            <span>{config.contactPhone}</span>
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:text-orange-100 transition-colors uppercase font-bold text-xs"
          >
            <Globe size={14} />
            {language === 'en' ? 'Hindi' : 'English'}
          </button>

          <div className="w-px h-4 bg-orange-400"></div>

          <button className="flex items-center gap-1 hover:text-orange-100 transition-colors font-medium">
            <User size={14} />
            {language === 'en' ? 'Login' : 'लॉग इन'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
