import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, Clock, TrendingUp, X, Check, Calendar as CalendarIcon, MapPin, AlertTriangle, Info, CheckCircle2, Download, ArrowLeft } from 'lucide-react';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('ALL REQUESTS');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const tabs = ['ALL REQUESTS', 'NEW', 'PENDING', 'ACCEPTED'];

  const handleConfirmBooking = () => {
    setIsRequestModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] w-full mx-auto pb-24 pt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-12 space-y-4">
              <h1 className="font-serif text-[40px] text-sage font-bold leading-tight mb-2">Booking Requests</h1>
              <p className="text-sage/60 font-medium text-[15px]">Manage your upcoming appointments and client requests.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/5 flex flex-col justify-between h-36">
                <span className="text-[10px] font-bold text-sage/40 uppercase tracking-[0.18em] mb-4">New Requests</span>
                <div className="flex items-end justify-between mt-auto">
                  <span className="font-serif text-4xl text-sage font-bold">12</span>
                  <span className="text-[10px] font-bold text-sage bg-sage/10 px-2 py-1 rounded-md mb-1">+3 Today</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/5 flex flex-col justify-between h-36">
                <span className="text-[10px] font-bold text-sage/40 uppercase tracking-widest mb-4 leading-tight">Pending<br/>Response</span>
                <div className="flex items-end justify-between mt-auto">
                  <span className="font-serif text-4xl text-sage font-bold">4</span>
                  <span className="text-[10px] font-bold text-[#ff4d4f] bg-[#ff4d4f]/10 px-2 py-1 rounded-md mb-1 max-w-[60px] text-center leading-tight">Requires Action</span>
                </div>
              </div>
              <div className="bg-sage rounded-2xl p-6 shadow-[0_20px_50px_rgba(31,74,63,0.15)] flex flex-col justify-between h-36 text-white">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.18em] mb-4">Response Rate</span>
                <div className="flex items-end justify-between mt-auto">
                  <span className="font-serif text-4xl text-gold font-bold">98%</span>
                  <TrendingUp size={20} className="text-gold mb-1.5" />
                </div>
              </div>
            </div>

            {/* Tabs & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-sage/10 mb-12 gap-6">
              <div className="flex items-center gap-8 w-full sm:w-auto overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[12px] font-bold tracking-[0.1em] uppercase relative transition-colors whitespace-nowrap pb-4 ${activeTab === tab ? 'text-sage' : 'text-sage/50 hover:text-sage/80'}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="booking-tab" className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gold z-10" />
                    )}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-auto pb-4">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-[calc(50%+8px)] text-sage/40" />
                <input 
                  type="text" 
                  placeholder="Search clients..." 
                  className="w-full pl-9 pr-4 py-2 border border-sage/20 rounded-lg text-[13px] text-sage placeholder:text-sage/40 bg-white focus:outline-none focus:border-gold sm:w-56 transition-colors"
                />
              </div>
            </div>

            {/* Booking Cards List */}
            <div className="space-y-5">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-l-gold border-y border-r border-y-sage/5 border-r-sage/5 relative hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cream overflow-hidden flex items-center justify-center p-0.5 border border-sage/10">
                      <div className="w-full h-full bg-sage/10 rounded-full flex items-center justify-center overflow-hidden">
                        <img src="/avatars/client_isabella.png" alt="Marcus" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-[19px] text-sage font-bold leading-tight">Marcus Sterling</h3>
                      <p className="text-[13px] text-sage/60 font-medium mt-0.5">Signature Sculpting & Beard Trim</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sage bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-md uppercase tracking-widest">New</span>
                </div>

                <div className="flex items-center gap-16 mb-8">
                  <div>
                    <p className="text-[10px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Requested Time</p>
                    <p className="text-[14px] text-sage font-bold">Oct 24, 2:00 PM</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Total Value</p>
                    <p className="text-[14px] text-sage font-bold">$150.00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button onClick={() => setIsRequestModalOpen(true)} className="flex-1 py-4 bg-gold text-white rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:bg-[#c49555] transition-all shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
                    Review
                  </button>
                  <button className="flex-1 py-4 bg-transparent border-2 border-sage/20 text-sage rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:border-sage hover:bg-sage/5 transition-colors">
                    Decline
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center overflow-hidden border border-sage/10">
                      <img src="/avatars/client_james.png" alt="Elena" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[19px] text-sage font-bold leading-tight">Elena Rossi</h3>
                      <p className="text-[13px] text-sage/60 font-medium mt-0.5">Botanical Spa Package</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sage/60 bg-sage/5 border border-sage/10 px-3 py-1.5 rounded-md uppercase tracking-widest">Pending</span>
                </div>

                <div className="flex items-center gap-16">
                  <div>
                    <p className="text-[10px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Requested Time</p>
                    <p className="text-[14px] text-sage font-bold">Oct 25, 10:30 AM</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Total Value</p>
                    <p className="text-[14px] text-sage font-bold">$220.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Request Details) */}
          <div className="lg:border-l border-sage/10 lg:pl-10 h-full pt-8 lg:pt-0">
            <h2 className="font-serif text-[28px] text-sage font-bold mb-8">Request Details</h2>
            
            {/* Map Placeholder */}
            <div className="w-full h-[180px] bg-[#529B88] rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center shadow-inner">
              {/* Abstract Map UI */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_transparent_0,_#1f4a3f_100%)]"></div>
              <div className="relative">
                <div className="w-[84px] h-[84px] bg-[#d94841] rounded-t-full rounded-b-full rounded-bl-none transform -rotate-45 flex items-center justify-center shadow-2xl relative z-10 border-[3px] border-white/10">
                  <div className="w-8 h-8 bg-cream rounded-full transform rotate-45 shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 bg-sage rounded-full"></div>
                  </div>
                </div>
                <div className="w-14 h-3 bg-black/30 blur-[4px] rounded-[100%] absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={14} className="text-sage/40" />
                <span className="text-[10px] font-bold text-sage/40 uppercase tracking-widest">Concierge Notes</span>
              </div>
              <div className="bg-[#f5f2eb] p-6 rounded-2xl border border-sage/5">
                <p className="italic text-[13.5px] text-sage/70 leading-relaxed font-serif">
                  "Client has sensitive skin. Please use hypoallergenic products. Prefers a quiet session without much conversation."
                </p>
              </div>
            </div>

            {/* Schedule Timeline */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-8">
                <Clock size={14} className="text-sage/40" />
                <span className="text-[10px] font-bold text-sage/40 uppercase tracking-widest">Your Schedule - Oct 24</span>
              </div>
              
              <div className="relative border-l border-sage/10 ml-[68px] pl-6 space-y-5">
                {/* Timeline slots */}
                <div className="relative">
                  <span className="absolute -left-[90px] top-3 text-[10px] font-bold text-sage/40 w-14 text-right">1:00 PM</span>
                  <div className="border border-sage/10 rounded-xl p-4 bg-white text-[13px] text-sage font-medium shadow-sm">
                    Available
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[90px] top-3 text-[10px] font-bold text-sage w-14 text-right">2:00 PM</span>
                  <div className="border-l-4 border-gold border-y border-r border-y-sage/10 border-r-sage/10 rounded-xl p-4 bg-gold/5 shadow-sm">
                    <p className="text-[13px] font-bold text-sage mb-1">Requested Slot</p>
                    <p className="text-[11px] text-sage/50 font-medium">90 min</p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[90px] top-3 text-[10px] font-bold text-sage/40 w-14 text-right">3:30 PM</span>
                  <div className="border border-transparent rounded-xl p-4 bg-sage/5 text-[13px] text-sage/50 font-medium">
                    Booked: Haircut
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3">
              <button onClick={() => setIsRequestModalOpen(true)} className="w-full py-4 bg-gold text-white rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:bg-[#c49555] transition-all shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
                Accept Request
              </button>
              <button className="w-full py-4 bg-transparent border-2 border-sage/20 text-sage rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:border-sage hover:bg-sage/5 transition-colors">
                Propose New Time
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Request Modal Overlay */}
      <AnimatePresence>
        {isRequestModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#fdf5eb] flex flex-col"
          >
            {/* Modal Header (Sticky) */}
            <div className="flex items-center justify-between p-6 md:px-12 bg-[#fdf5eb] shrink-0">
              <button 
                onClick={() => setIsRequestModalOpen(false)}
                className="p-2 hover:bg-sage/10 rounded-full transition-colors text-sage/80"
              >
                <X size={26} strokeWidth={2} />
              </button>
              <h2 className="font-serif text-[17px] text-sage font-bold tracking-wide">Artisanal Grooming</h2>
              <div className="w-10"></div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-20 no-scrollbar" data-lenis-prevent>
              <div className="max-w-[1000px] mx-auto mt-8 px-6">
                <div className="mb-14">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage/10 text-sage/80 font-bold text-[10px] uppercase tracking-widest rounded-full mb-6">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Awaiting Action
                  </span>
                  <h1 className="font-serif text-[48px] text-sage font-bold leading-tight mb-4 tracking-tight">Incoming Booking Request</h1>
                  <p className="text-sage/70 font-medium text-[16px] max-w-2xl leading-relaxed">
                    Review the details below to confirm the appointment or suggest an alternative time for this client.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
                  {/* Modal Left Column */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-[28px] p-10 shadow-sm border border-sage/10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-[28px] text-sage font-bold max-w-[80%] leading-tight tracking-tight">Signature Sculpting &<br/>Hot Towel Finish</h3>
                        <span className="font-serif text-[28px] text-gold font-bold">$120</span>
                      </div>
                      <div className="flex items-center gap-2 text-sage/60 mb-12">
                        <Clock size={16} />
                        <span className="text-[15px] font-medium">90 Minutes</span>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mb-12 border-b border-sage/10 pb-12">
                        <div>
                          <p className="text-[11px] font-bold text-sage/50 uppercase tracking-widest mb-4">Client</p>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-sage/20 overflow-hidden shrink-0">
                              <img src="/avatars/client_isabella.png" alt="Isabella C." className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start">
                              <p className="text-[17px] font-bold text-sage mb-1.5">Isabella C.</p>
                              <span className="inline-flex items-center gap-1.5 bg-[#fff8e6] text-gold px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                                ★ Repeat Client
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-sage/50 uppercase tracking-widest mb-4">Requested Time</p>
                          <p className="text-[17px] font-bold text-sage mb-1.5">Thursday, Oct 26, 2023</p>
                          <p className="text-[15px] text-sage/70 font-medium">10:00 AM - 11:30 AM</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-sage/50 uppercase tracking-widest mb-4">Location</p>
                        <div className="flex gap-4 mb-6">
                          <MapPin size={20} className="text-sage/60 shrink-0 mt-0.5" />
                          <p className="text-[16px] text-sage/90 font-medium leading-relaxed">
                            1284 Willow Creek Drive, Suite 3B<br/>
                            Beverly Hills, CA 90210
                          </p>
                        </div>
                        <div className="w-full h-[180px] bg-[#2a2a2a] rounded-[24px] overflow-hidden relative border border-sage/10 shadow-inner">
                           <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a3a] to-[#222222]"></div>
                           <div className="absolute top-[45%] left-[45%] w-[120%] h-[120%] bg-white/5 blur-3xl rounded-full"></div>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                             <div className="w-8 h-10 bg-[#d4af37] rounded-t-full rounded-b-full rounded-bl-none transform -rotate-45 shadow-xl relative flex items-center justify-center border-2 border-white/20">
                               <div className="w-2.5 h-2.5 bg-white rounded-full transform rotate-45 shadow-sm"></div>
                             </div>
                             <div className="w-8 h-2 bg-black/60 blur-[3px] rounded-[100%] mt-1.5"></div>
                           </div>
                           
                           {/* Decorative map lines matching the screenshot */}
                           <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                             <path d="M 0 120 Q 150 120 200 100 T 400 60" stroke="#D4AF37" fill="none" strokeWidth="1.5" />
                             <path d="M -50 180 Q 200 180 250 100 T 450 0" stroke="#D4AF37" fill="none" strokeWidth="0.75" />
                             <path d="M 180 200 L 220 0" stroke="#ffffff" fill="none" strokeWidth="0.5" />
                             <path d="M 220 200 L 260 0" stroke="#ffffff" fill="none" strokeWidth="0.5" />
                           </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Buttons - Mobile responsive */}
                    <div className="flex gap-4">
                      <button onClick={handleConfirmBooking} className="flex-[1.5] h-[64px] bg-gold text-white rounded-[16px] font-bold uppercase tracking-widest text-[13px] hover:brightness-95 transition-colors shadow-lg shadow-gold/20 flex items-center justify-center gap-3">
                        Confirm Booking <Check size={18} strokeWidth={3} />
                      </button>
                      <button className="flex-1 h-[64px] bg-transparent border-2 border-sage/20 text-sage/80 rounded-[16px] font-bold uppercase tracking-widest text-[13px] hover:border-sage hover:text-sage transition-colors flex items-center justify-center gap-3">
                        Suggest New Time <CalendarIcon size={18} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  {/* Modal Right Column */}
                  <div className="space-y-6">
                    {/* Concierge Notes */}
                    <div className="bg-[#f5f2eb] rounded-[28px] p-8 border border-sage/10 shadow-sm">
                      <div className="flex items-center gap-2 mb-6">
                        <MessageSquare size={16} className="text-sage/50" />
                        <span className="text-[11px] font-bold text-sage/50 uppercase tracking-widest">Concierge Notes</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-5 rounded-[16px] border border-white flex items-start gap-3 shadow-sm">
                          <CheckCircle2 size={18} className="text-[#d4af37] shrink-0 mt-0.5" strokeWidth={2} />
                          <p className="text-[14px] text-sage/90 font-medium leading-relaxed">Prefers sandalwood scent for hot towels.</p>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] border border-red-100 flex items-start gap-3 shadow-sm">
                          <AlertTriangle size={18} className="text-[#ff4d4f] shrink-0 mt-0.5" strokeWidth={2} />
                          <p className="text-[14px] text-sage/90 font-medium leading-relaxed">Allergic to lavender. Ensure all products are lavender-free.</p>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] border border-white flex items-start gap-3 shadow-sm">
                          <Info size={18} className="text-sage/50 shrink-0 mt-0.5" strokeWidth={2} />
                          <p className="text-[14px] text-sage/90 font-medium leading-relaxed">Requested silent service (minimal conversation).</p>
                        </div>
                      </div>
                    </div>

                    {/* Schedule Snapshot */}
                    <div className="bg-white rounded-[28px] p-8 shadow-sm border border-sage/10">
                      <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-sage/50" />
                          <span className="text-[11px] font-bold text-sage/50 uppercase tracking-widest">Schedule Snapshot</span>
                        </div>
                        <span className="text-[11px] font-bold text-sage/50 uppercase">Full Day</span>
                      </div>

                      <p className="text-[13px] text-sage/60 font-bold mb-8">Thursday, Oct 26</p>

                      <div className="relative border-l border-sage/20 ml-3 pl-8 space-y-8">
                        {/* 8:00 AM */}
                        <div className="relative">
                          <div className="absolute -left-[37px] top-1.5 w-1.5 h-1.5 rounded-full bg-sage/30"></div>
                          <p className="text-[12px] font-bold text-sage/50 mb-3">8:00 AM - 9:00 AM</p>
                          <div className="bg-[#f8f9f8] p-5 rounded-[16px] border border-sage/10">
                            <p className="text-[14px] font-bold text-sage/80 mb-1">Standard Trim</p>
                            <p className="text-[13px] text-sage/50 font-medium">Client: Michael T.</p>
                          </div>
                        </div>

                        {/* 10:00 AM */}
                        <div className="relative">
                          <div className="absolute -left-[37px] top-1.5 w-1.5 h-1.5 rounded-full bg-gold shadow-sm"></div>
                          <div className="flex items-center gap-4 mb-3">
                            <p className="text-[12px] font-bold text-gold">10:00 AM - 11:30 AM</p>
                            <span className="text-[9px] font-bold text-gold bg-[#fff8e6] px-2 py-1 rounded uppercase tracking-widest">Requested</span>
                          </div>
                          <div className="bg-[#fff8e6]/50 p-6 rounded-[16px] border border-gold/30 shadow-[0_4px_15px_-4px_rgba(212,175,55,0.15)]">
                            <p className="text-[16px] font-bold text-sage mb-3">Signature Sculpting</p>
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-sage/20 overflow-hidden shadow-sm">
                                <img src="/avatars/client_isabella.png" alt="Isabella C." className="w-full h-full object-cover" />
                              </div>
                              <p className="text-[13px] text-sage/70 font-medium">Client: Isabella C.</p>
                            </div>
                          </div>
                        </div>

                        {/* 1:00 PM */}
                        <div className="relative">
                          <div className="absolute -left-[37px] top-1.5 w-1.5 h-1.5 rounded-full bg-sage/20"></div>
                          <p className="text-[12px] font-bold text-sage/40 mb-3">1:00 PM - 5:00 PM</p>
                          <div className="border-2 border-dashed border-sage/10 p-5 rounded-[16px] text-center">
                            <p className="text-[13px] text-sage/40 font-medium italic">Available Block</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal Overlay */}
      <AnimatePresence>
        {isConfirmationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-6 bg-[#1f4a3f]/60 backdrop-blur-md"
          >
            <div className="relative w-full max-w-[500px] flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
              >
                {/* Top Section (White) */}
                <div className="bg-white p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-[#fdf5eb] rounded-full flex items-center justify-center mb-6 border-[6px] border-[#f5f2eb]/50">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white shadow-sm">
                      <Check size={20} strokeWidth={3} />
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-[28px] text-sage font-bold mb-3">Booking Confirmed</h2>
                  <p className="text-sage/60 text-[14px] leading-relaxed max-w-[85%]">
                    Your sanctuary awaits. A detailed confirmation has been sent to your email.
                  </p>
                </div>

                {/* Middle/Bottom Section (Cream) */}
                <div className="bg-[#fcfaf7] p-10 pt-8 border-t border-sage/5">
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
                    <div>
                      <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Service</p>
                      <p className="text-[14px] font-bold text-sage">Botanical Deep Tissue</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Artisan</p>
                      <p className="text-[14px] font-bold text-sage">Elena Vance</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Date & Time</p>
                      <p className="text-[14px] font-bold text-sage">Oct 24, 2023 at 2:00 PM</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Location</p>
                      <p className="text-[14px] font-bold text-sage">AURELIUS Spa, Suite 4</p>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-sage/20 pt-6 mb-8 flex justify-between items-end">
                    <span className="font-serif text-[20px] font-bold text-sage">Total Paid</span>
                    <span className="font-serif text-[20px] font-bold text-gold">$240.00</span>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-[1.2] py-4 bg-gold text-white rounded-md font-bold uppercase tracking-[0.18em] text-[10px] hover:bg-[#c49555] transition-colors shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                      <CalendarIcon size={14} /> Add to Calendar
                    </button>
                    <button className="flex-1 py-4 bg-transparent border-2 border-sage/20 text-sage rounded-md font-bold uppercase tracking-[0.18em] text-[10px] hover:border-sage hover:bg-sage/5 transition-colors flex items-center justify-center gap-2">
                      <Download size={14} /> Download Receipt
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Return to Home Link */}
              <button 
                onClick={() => setIsConfirmationModalOpen(false)}
                className="mt-8 flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-widest hover:text-white/80 transition-colors drop-shadow-md"
              >
                <ArrowLeft size={14} /> Return to Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Bookings;
