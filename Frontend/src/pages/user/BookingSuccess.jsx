import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, CalendarPlus, Download, ArrowLeft } from 'lucide-react';

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-20 px-4 font-sans">
      
      {/* Background with blur overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80" 
          alt="Spa Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#EBE5D9]/80 backdrop-blur-md"></div>
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/40 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[500px] flex flex-col items-center">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-[#FDFBF7] rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(26,54,45,0.15)] border border-[#1A362D]/5"
        >
          
          {/* Top Section */}
          <div className="p-10 md:p-12 text-center flex flex-col items-center">
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-full bg-[#D4A56A]/10 flex items-center justify-center mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4A56A] flex items-center justify-center shadow-lg">
                <Check size={24} className="text-white" strokeWidth={3} />
              </div>
            </motion.div>

            <h1 className="font-serif text-[32px] text-[#1A362D] font-medium mb-3">Booking Confirmed</h1>
            <p className="text-[13px] text-[#1A362D]/60 leading-relaxed max-w-[280px]">
              Your sanctuary awaits. A detailed confirmation has been sent to your email.
            </p>
          </div>

          {/* Bottom Section (Details) */}
          <div className="bg-[#F4EFE6] p-10 md:p-12 border-t border-[#1A362D]/5">
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A362D]/40 mb-1.5">Service</p>
                <p className="text-[13px] font-bold text-[#1A362D]">Signature Swedish</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A362D]/40 mb-1.5">Artisan</p>
                <p className="text-[13px] font-bold text-[#1A362D]">Elena R.</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A362D]/40 mb-1.5">Date & Time</p>
                <p className="text-[13px] font-bold text-[#1A362D]">Oct 28, 2024 at 2:00 PM</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A362D]/40 mb-1.5">Location</p>
                <p className="text-[13px] font-bold text-[#1A362D]">Home (Apt 4B)</p>
              </div>
            </div>

            <div className="border-t border-dashed border-[#1A362D]/20 pt-8 mb-10 flex justify-between items-end">
              <span className="font-serif text-[20px] font-bold text-[#1A362D]">Total Paid</span>
              <span className="font-serif text-[20px] font-bold text-[#D4A56A]">$178.20</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-[#D4A56A] text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-[#c3965d] transition-colors shadow-md flex items-center justify-center gap-2">
                <CalendarPlus size={16} /> Add to Calendar
              </button>
              <button className="py-4 bg-transparent border border-[#1A362D] text-[#1A362D] rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-[#1A362D] hover:text-white transition-colors flex items-center justify-center gap-2">
                <Download size={16} /> Download Receipt
              </button>
            </div>

          </div>
        </motion.div>

        {/* Return to Home Link */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => navigate('/explore')}
          className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A362D] hover:text-[#D4A56A] transition-colors"
        >
          <ArrowLeft size={14} /> Return to Home
        </motion.button>

      </div>
    </div>
  );
};

export default BookingSuccess;
