import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Favorites = () => {
  return (
    <div className="w-full pb-24 pt-8">
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-serif text-4xl text-sage font-bold"
        >
          Your Favorites
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sage/60 mt-2"
        >
          Curated artisans and services you love.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-12 text-center border border-sage/5 shadow-[0_20px_50px_rgba(31,74,63,0.03)]"
      >
        <div className="w-20 h-20 bg-[#fdf5eb] rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
          <Heart size={32} />
        </div>
        <h3 className="font-serif text-2xl text-sage font-bold mb-3">Nothing Saved Yet</h3>
        <p className="text-sage/50 max-w-md mx-auto mb-8">
          Explore our collection of artisans and services. Click the heart icon to save them here for quick booking later.
        </p>
        <button className="px-8 py-3 bg-sage text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-gold transition-colors shadow-sm">
          Discover Artisans
        </button>
      </motion.div>
    </div>
  );
};

export default Favorites;
