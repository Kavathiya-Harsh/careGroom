import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus } from 'lucide-react';

const Bookings = () => {
  return (
    <div className="w-full pb-24 pt-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-serif text-4xl text-sage font-bold"
          >
            Your Bookings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sage/60 mt-2"
          >
            Manage your upcoming wellness appointments.
          </motion.p>
        </div>
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 px-6 py-3 bg-sage text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-gold transition-colors shadow-sm"
        >
          <Plus size={16} /> New Booking
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl p-12 text-center border border-sage/5 shadow-[0_20px_50px_rgba(31,74,63,0.03)]"
      >
        <div className="w-20 h-20 bg-sage/5 rounded-full flex items-center justify-center mx-auto mb-6 text-sage/40">
          <Calendar size={32} />
        </div>
        <h3 className="font-serif text-2xl text-sage font-bold mb-3">No Upcoming Bookings</h3>
        <p className="text-sage/50 max-w-md mx-auto mb-8">
          You don't have any appointments scheduled right now. Ready for your next retreat?
        </p>
        <button className="px-8 py-3 bg-gold text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-[#c49555] transition-colors shadow-[0_10px_20px_rgba(212,165,106,0.2)]">
          Explore Services
        </button>
      </motion.div>
    </div>
  );
};

export default Bookings;
