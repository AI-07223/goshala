import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const Image = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Fallback placeholder logic
  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className={`bg-stone-200 flex flex-col items-center justify-center text-stone-400 ${className}`}>
        <ImageIcon size={48} className="mb-2" />
        <span className="text-xs font-medium">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={handleError}
      />
    </div>
  );
};

export default Image;
