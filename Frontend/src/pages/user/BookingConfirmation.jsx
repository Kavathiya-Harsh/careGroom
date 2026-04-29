import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, CreditCard, Banknote, Lock, Tag } from 'lucide-react';

const BookingConfirmation = () => {
  const { artisanId } = useParams();
  const navigate = useNavigate();

  const [selectedLocation, setSelectedLocation] = useState('home');
  const [selectedPayment, setSelectedPayment] = useState('razorpay');

  return (
    <div className="w-full bg-[#F4EFE6] min-h-screen font-sans text-[#1A362D] pb-32">
      <div className="max-w-6xl mx-auto px-6 pt-24">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-[36px] md:text-[42px] font-medium text-[#1A362D] mb-2">
            Complete Your Booking
          </h1>
          <p className="text-[14px] text-[#1A362D]/60 font-medium">
            Step 3 of 3: Review and payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
          
          {/* Left Column: Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FDFBF7] rounded-[24px] overflow-hidden shadow-sm border border-[#1A362D]/5 sticky top-24"
          >
            <div className="h-48 w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Massage" className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8">
              <h2 className="font-serif text-[24px] font-medium text-[#1A362D] mb-3">Signature Swedish Massage</h2>
              <p className="text-[13px] text-[#1A362D]/60 leading-relaxed mb-8">
                A full-body restorative treatment utilizing classic techniques to ease tension and improve circulation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <Calendar className="text-[#1A362D]/40 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[14px] font-bold text-[#1A362D] line-through opacity-50 mb-1">Thursday, October 28, 2024</p>
                    <p className="text-[15px] font-bold text-[#1A362D] bg-white p-2 rounded-md border border-[#D4A56A]/50 shadow-sm inline-block">2:00 PM - 3:30 PM</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="text-[#1A362D]/40 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[14px] font-bold text-[#1A362D]">90 Minutes</p>
                    <p className="text-[12px] text-[#1A362D]/50">Standard Duration</p>
                  </div>
                </div>
              </div>

              {/* Artisan Profile Box */}
              <div className="bg-[#F4EFE6] rounded-xl p-4 flex items-center gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80" alt="Elena" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#1A362D]/50 mb-0.5">Your Artisan</p>
                  <p className="text-[14px] font-bold text-[#1A362D]">Elena R.</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 pb-6 border-b border-[#1A362D]/10 mb-6">
                <div className="flex justify-between items-center text-[13px] font-medium text-[#1A362D]/70">
                  <span>Service Subtotal</span>
                  <span>$180.00</span>
                </div>
                <div className="flex justify-between items-center text-[13px] font-medium text-[#1A362D]/70">
                  <span>Taxes & Fees</span>
                  <span>$16.20</span>
                </div>
                <div className="flex justify-between items-center text-[13px] font-medium text-[#1A362D]/70">
                  <span>Promo Code (WELLNESS10)</span>
                  <span>-$18.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-serif text-[24px] font-bold text-[#1A362D]">Total</span>
                <span className="font-serif text-[24px] font-bold text-[#1A362D]">$178.20</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Checkout Options */}
          <div className="space-y-8">
            
            {/* Location Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#FDFBF7] rounded-[24px] p-8 shadow-sm border border-[#1A362D]/5"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-[22px] font-medium text-[#1A362D]">Location Details</h3>
                <button onClick={() => navigate('/locations')} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A362D]/60 hover:text-[#D4A56A] transition-colors">Add New</button>
              </div>
              
              <div className="space-y-4">
                <div 
                  onClick={() => setSelectedLocation('home')}
                  className={`p-5 rounded-xl border-[1.5px] cursor-pointer flex items-center justify-between transition-all ${
                    selectedLocation === 'home' ? 'border-[#D4A56A] bg-[#D4A56A]/5' : 'border-[#1A362D]/10 bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex gap-4">
                    <MapPin className="text-[#1A362D]/50 shrink-0" size={20} />
                    <div>
                      <p className="text-[14px] font-bold text-[#1A362D] mb-1">Home</p>
                      <p className="text-[13px] text-[#1A362D]/60">1428 Elm Street, Apt 4B<br/>New York, NY 10001</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedLocation === 'home' ? 'border-[#D4A56A]' : 'border-[#1A362D]/20'}`}>
                    {selectedLocation === 'home' && <div className="w-2.5 h-2.5 bg-[#D4A56A] rounded-full"></div>}
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedLocation('office')}
                  className={`p-5 rounded-xl border-[1.5px] cursor-pointer flex items-center justify-between transition-all ${
                    selectedLocation === 'office' ? 'border-[#D4A56A] bg-[#D4A56A]/5' : 'border-[#1A362D]/10 bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex gap-4">
                    <MapPin className="text-[#1A362D]/50 shrink-0" size={20} />
                    <div>
                      <p className="text-[14px] font-bold text-[#1A362D] mb-1">Office</p>
                      <p className="text-[13px] text-[#1A362D]/60">750 Lexington Ave, Floor 12<br/>New York, NY 10022</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedLocation === 'office' ? 'border-[#D4A56A]' : 'border-[#1A362D]/20'}`}>
                    {selectedLocation === 'office' && <div className="w-2.5 h-2.5 bg-[#D4A56A] rounded-full"></div>}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Promo Code */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FDFBF7] rounded-[24px] p-8 shadow-sm border border-[#1A362D]/5"
            >
              <h3 className="font-serif text-[22px] font-medium text-[#1A362D] mb-6">Promo Code</h3>
              <div className="flex gap-4">
                <div className="flex-1 bg-[#F4EFE6] rounded-xl flex items-center px-4">
                  <Tag size={16} className="text-[#1A362D]/40 mr-2" />
                  <input type="text" value="WELLNESS10" readOnly className="bg-transparent border-none outline-none text-[#1A362D] font-bold w-full" />
                </div>
                <button className="px-6 py-3 border border-[#1A362D] text-[#1A362D] text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#1A362D] hover:text-white transition-colors">
                  Applied
                </button>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#FDFBF7] rounded-[24px] p-8 shadow-sm border border-[#1A362D]/5"
            >
              <h3 className="font-serif text-[22px] font-medium text-[#1A362D] mb-6">Payment Method</h3>
              
              <div className="space-y-4">
                <div 
                  onClick={() => setSelectedPayment('razorpay')}
                  className={`p-5 rounded-xl border-[1.5px] cursor-pointer flex items-center justify-between transition-all ${
                    selectedPayment === 'razorpay' ? 'border-[#D4A56A] bg-[#D4A56A]/5' : 'border-[#1A362D]/10 bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#1A362D]/10 flex items-center justify-center shrink-0">
                      <CreditCard className="text-[#1A362D]/60" size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#1A362D]">Credit/Debit via Razorpay</p>
                      <p className="text-[12px] text-[#1A362D]/60">Secure online payment</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'razorpay' ? 'border-[#D4A56A]' : 'border-[#1A362D]/20'}`}>
                    {selectedPayment === 'razorpay' && <div className="w-2.5 h-2.5 bg-[#D4A56A] rounded-full"></div>}
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedPayment('cash')}
                  className={`p-5 rounded-xl border-[1.5px] cursor-pointer flex items-center justify-between transition-all ${
                    selectedPayment === 'cash' ? 'border-[#D4A56A] bg-[#D4A56A]/5' : 'border-[#1A362D]/10 bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#1A362D]/10 flex items-center justify-center shrink-0">
                      <Banknote className="text-[#1A362D]/60" size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#1A362D]">Cash on Service</p>
                      <p className="text-[12px] text-[#1A362D]/60">Pay directly to the artisan</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'cash' ? 'border-[#D4A56A]' : 'border-[#1A362D]/20'}`}>
                    {selectedPayment === 'cash' && <div className="w-2.5 h-2.5 bg-[#D4A56A] rounded-full"></div>}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <p className="text-center text-[12px] text-[#1A362D]/60 mb-6">
                By confirming this booking, you agree to our <span className="underline cursor-pointer hover:text-[#1A362D]">Terms of Service</span> and <span className="underline cursor-pointer hover:text-[#1A362D]">Cancellation Policy</span>.
              </p>
              
              <button 
                onClick={() => navigate(`/book/${artisanId}/success`)}
                className="w-full py-5 bg-[#D4A56A] text-white rounded-xl text-[14px] font-bold uppercase tracking-[0.15em] hover:bg-[#1A362D] transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <Lock size={16} />
                Confirm & Pay $178.20
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
