import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const History = () => {
  return (
    <div className="w-full pb-24 pt-8">
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-serif text-4xl text-sage font-bold"
        >
          Appointment History
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sage/60 mt-2"
        >
          Review your past wellness journeys.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-12 text-center border border-sage/5 shadow-[0_20px_50px_rgba(31,74,63,0.03)]"
      >
        <div className="w-20 h-20 bg-sage/5 rounded-full flex items-center justify-center mx-auto mb-6 text-sage/40">
          <Clock size={32} />
        </div>
        <h3 className="font-serif text-2xl text-sage font-bold mb-3">No Past Appointments</h3>
        <p className="text-sage/50 max-w-md mx-auto">
          Once you complete an appointment, it will appear here along with receipt details and artisan feedback options.
        </p>
      </motion.div>
    </div>
  );
};

export default History;
