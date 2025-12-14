import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Reveal from '../components/ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1545634024-34537759a29e?q=80&w=2940", category: "Calves", title: "Baby Krishna" },
  { id: 2, src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940", category: "Feeding", title: "Morning Feast" },
  { id: 3, src: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?q=80&w=2940", category: "Rescued", title: "Gauri's Recovery" },
  { id: 4, src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2821", category: "Calves", title: "Playing in Field" },
  { id: 5, src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2940", category: "Rescued", title: "Safe Haven" },
  { id: 6, src: "https://images.unsplash.com/photo-1523480717984-24cba3ebae92?q=80&w=2940", category: "Feeding", title: "Fresh Grass" },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categoryMap = {
    all: t.galleryPage.all,
    calves: t.galleryPage.calves,
    rescued: t.galleryPage.rescued,
    feeding: t.galleryPage.feeding
  };

  const categories = Object.keys(categoryMap);

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === filter);

  return (
    <Layout>
      <div className="bg-stone-50 min-h-screen py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-8">{t.galleryPage.title}</h1>

              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((catKey) => (
                  <button
                    key={catKey}
                    onClick={() => setFilter(catKey)}
                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                      filter === catKey
                        ? 'bg-orange-500 text-white shadow-lg scale-105'
                        : 'bg-white text-stone-600 hover:bg-orange-50 border border-stone-200 hover:border-orange-200'
                    }`}
                  >
                    {categoryMap[catKey]}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Masonry-like Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn size={40} className="mx-auto mb-3 text-orange-400" />
                      <p className="font-bold text-xl font-serif tracking-wide">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <h3 className="text-2xl font-serif text-white">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
