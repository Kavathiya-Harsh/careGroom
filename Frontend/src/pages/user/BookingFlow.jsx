import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Edit2, Shield } from 'lucide-react';

const BookingFlow = () => {
  const { artisanId } = useParams();
  const navigate = useNavigate();
  
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const times = [
    '09:00 AM', '10:30 AM', '11:00 AM', '12:30 PM',
    '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  return (
    <div className="w-full bg-[#F4EFE6] min-h-screen font-sans text-[#1A362D] pb-32">
      
      {/* Top Gradient Shadow (Optional, for depth) */}
      <div className="h-24 w-full bg-gradient-to-b from-[#1A362D]/10 to-transparent absolute top-0 left-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
        
        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-[#1A362D]/30 flex items-center justify-center text-[10px] font-bold text-[#1A362D]/50">1</div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A362D]/50">Services</span>
          </div>
          <div className="w-12 h-px bg-[#1A362D]/20"></div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#1A362D] flex items-center justify-center text-[10px] font-bold text-[#D4A56A]">2</div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A362D]">Date & Time</span>
          </div>
          <div className="w-12 h-px bg-[#1A362D]/20"></div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-[#1A362D]/30 flex items-center justify-center text-[10px] font-bold text-[#1A362D]/50">3</div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A362D]/50">Confirm</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          
          {/* Left Column: Calendar & Times */}
          <div>
            
            {/* Calendar Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FDFBF7]/60 rounded-3xl p-8 md:p-12 mb-10 shadow-sm border border-[#1A362D]/5"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="font-serif text-[32px] text-[#1A362D] font-medium">October 2024</h2>
                <div className="flex gap-4">
                  <button className="text-[#1A362D]/50 hover:text-[#1A362D] transition-colors"><ChevronLeft size={20} /></button>
                  <button className="text-[#1A362D]/50 hover:text-[#1A362D] transition-colors"><ChevronRight size={20} /></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-y-6 text-center">
                {/* Days of week */}
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-[#1A362D]/40 uppercase tracking-widest pb-4">
                    {day}
                  </div>
                ))}

                {/* Empty days for offset (assuming Oct 1 is Tue) */}
                <div className="text-[#1A362D]/20 text-[14px]">29</div>
                <div className="text-[#1A362D]/20 text-[14px]">30</div>
                
                {/* Days */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  return (
                    <div key={day} className="flex justify-center items-center">
                      <button 
                        onClick={() => setSelectedDate(day)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl text-[14px] font-medium transition-all ${
                          isSelected 
                            ? 'bg-[#E3B77B] text-[#1A362D] font-bold shadow-md' 
                            : 'text-[#1A362D] hover:bg-[#1A362D]/5'
                        }`}
                      >
                        {day}
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Available Times */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-[24px] text-[#1A362D] flex items-center gap-3 mb-6">
                <Clock size={22} className="text-[#1A362D]/60" /> Available Times
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {times.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3.5 rounded-xl text-[12px] font-bold transition-all border ${
                      selectedTime === time
                        ? 'bg-[#1A362D] border-[#1A362D] text-[#E3B77B] shadow-lg'
                        : 'bg-transparent border-[#1A362D]/10 text-[#1A362D] hover:border-[#1A362D]/30'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Service Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#EBE5D9] rounded-[24px] p-8 shadow-sm">
              <h3 className="font-serif text-[24px] text-[#1A362D] mb-6 font-medium">Service Summary</h3>
              
              <div className="rounded-xl overflow-hidden h-32 mb-6">
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80" alt="Service" className="w-full h-full object-cover" />
              </div>

              <div className="flex justify-between items-start mb-8 pb-6 border-b border-[#1A362D]/10">
                <div>
                  <h4 className="font-serif text-[18px] text-[#1A362D] font-medium mb-1">Signature Botanical Facial</h4>
                  <p className="text-[13px] text-[#1A362D]/60">60 minutes</p>
                </div>
                <button className="text-[#1A362D]/50 hover:text-[#1A362D] transition-colors"><Edit2 size={16} /></button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="font-bold uppercase tracking-[0.1em] text-[#1A362D]/50">Scheduled For</span>
                  <span className="font-bold text-[#1A362D]">Oct {selectedDate}, {selectedTime}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-[#1A362D]/10">
                <div className="flex justify-between items-center text-[14px] text-[#1A362D]/70">
                  <span>Service Subtotal</span>
                  <span>$145.00</span>
                </div>
                <div className="flex justify-between items-center text-[14px] text-[#1A362D]/70">
                  <span>Botanical Add-on</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="font-serif text-[24px] text-[#1A362D] font-bold">Total</span>
                <span className="font-serif text-[22px] text-[#1A362D] font-bold">$145.00</span>
              </div>

              <button 
                onClick={() => navigate(`/book/${artisanId}/confirm`)}
                className="w-full py-4 bg-[#E3B77B] text-[#1A362D] rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#D4A56A] transition-colors shadow-md mb-4"
              >
                Confirm Appointment
              </button>
              
              <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A362D]/40">
                Secure Checkout by CareGroom
              </p>
            </div>

            <div className="bg-[#EBE5D9]/50 rounded-xl p-5 border border-[#1A362D]/5 flex gap-4 items-start">
              <Shield size={16} className="text-[#E3B77B] shrink-0 mt-0.5" />
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A362D]/60 leading-relaxed">
                Free cancellation up to 24 hours before your appointment time.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
