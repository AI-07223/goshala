import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1545634024-34537759a29e?q=80&w=2940", category: "Calves", title: "Baby Krishna" },
  { id: 2, src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940", category: "Feeding", title: "Morning Feast" },
  { id: 3, src: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?q=80&w=2940", category: "Rescued", title: "Gauri's Recovery" },
  { id: 4, src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2821", category: "Calves", title: "Playing in Field" },
  { id: 5, src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2940", category: "Rescued", title: "Safe Haven" },
  { id: 6, src: "https://images.unsplash.com/photo-1523480717984-24cba3ebae92?q=80&w=2940", category: "Feeding", title: "Fresh Grass" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Calves', 'Rescued', 'Feeding'];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <Layout>
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-6">Life at Goshala</h1>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ZoomIn size={32} className="mx-auto mb-2" />
                      <p className="font-bold text-lg">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
