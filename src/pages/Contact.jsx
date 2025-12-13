import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { config } from '../config';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">Get in Touch</h1>
            <p className="text-stone-600 text-lg">We'd love to hear from you. Visit us or send a message.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="bg-stone-50 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-stone-800 mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Address</h4>
                    <p className="text-stone-600">123 Divine Path, Vrindavan Road,<br/>Mathura, UP, India - 281121</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Phone</h4>
                    <p className="text-stone-600">{config.contactPhone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Email</h4>
                    <p className="text-stone-600">{config.contactEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" placeholder="How can we help?" />
              </div>

              <button type="button" className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
