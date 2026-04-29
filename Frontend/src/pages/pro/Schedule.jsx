import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Plane,
  Sparkles,
  Users
} from 'lucide-react';

const Schedule = () => {
  const [hours, setHours] = useState([
    { day: 'Mon', active: true, start: '09:00 AM', end: '05:00 PM' },
    { day: 'Tue', active: true, start: '09:00 AM', end: '05:00 PM' },
    { day: 'Wed', active: false, start: '09:00 AM', end: '05:00 PM' },
    { day: 'Thu', active: true, start: '10:00 AM', end: '07:00 PM' },
    { day: 'Fri', active: true, start: '09:00 AM', end: '04:00 PM' },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-gold/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-sage/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-[1400px] w-full mx-auto pb-24 pt-16 relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sage/10 shadow-sm mb-2">
              <Sparkles size={12} className="text-[#d4af37]" />
              <span className="text-[10px] font-bold text-sage uppercase tracking-[0.2em]">Schedule Management</span>
            </div>
            <h1 className="font-serif text-[48px] text-sage font-bold leading-tight tracking-tight">Availability & Calendar</h1>
            <p className="text-sage/60 font-medium text-[16px] max-w-xl leading-relaxed">
              Curate your professional schedule. Fine-tune working hours, block time for travel, and oversee your upcoming bookings.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 pb-2">
            <button className="group flex items-center gap-3 px-6 py-4 bg-white border-2 border-sage/20 rounded-md text-sage font-bold text-[11px] uppercase tracking-[0.18em] hover:border-[#d4af37]/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-300">
              <RefreshCw size={14} className="text-sage/40 group-hover:text-[#d4af37] group-hover:rotate-180 transition-all duration-500" />
              Sync Calendar
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Premium Calendar */}
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-white">
            
            {/* Calendar Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
              <div className="flex items-center gap-6">
                <h2 className="font-serif text-[36px] text-sage font-bold leading-none">October <span className="text-sage/40">2023</span></h2>
                <div className="flex bg-[#fcfaf7] border border-sage/10 rounded-full p-1 shadow-inner">
                  <button className="p-2.5 hover:bg-white rounded-full hover:shadow-sm transition-all group"><ChevronLeft size={16} className="text-sage/60 group-hover:text-sage" /></button>
                  <button className="p-2.5 hover:bg-white rounded-full hover:shadow-sm transition-all group"><ChevronRight size={16} className="text-sage/60 group-hover:text-sage" /></button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-[11px] font-bold text-[#d4af37] bg-[#fffaf0] border border-[#d4af37]/20 px-6 py-3 rounded-md hover:bg-[#d4af37]/10 transition-colors uppercase tracking-[0.18em]">Today</button>
                <div className="flex bg-[#fcfaf7] border border-sage/10 rounded-md p-1 shadow-inner">
                  <button className="text-[11px] font-bold text-sage bg-white shadow-md px-6 py-2.5 rounded-md uppercase tracking-[0.18em]">Month</button>
                  <button className="text-[11px] font-bold text-sage/40 px-6 py-2.5 rounded-md hover:text-sage transition-colors uppercase tracking-[0.18em]">Week</button>
                </div>
              </div>
            </div>

            {/* Calendar Grid Header */}
            <div className="grid grid-cols-7 gap-4 mb-4">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <div key={day} className="text-center text-[10px] font-bold text-sage/40 tracking-[0.25em]">{day}</div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-4 gap-y-5">
              {/* Row 1 (faded previous month) */}
              {[24, 25, 26, 27, 28, 29, 30].map(d => (
                <div key={`prev-${d}`} className="h-[120px] flex flex-col p-4 text-sage/20 font-bold text-sm bg-transparent">{d}</div>
              ))}
              
              {/* Row 2 (Current Month) */}
              <div className="h-[120px] bg-[#fcfaf7] rounded-[20px] flex flex-col p-4 relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-sage/10">
                <span className="text-sage font-bold text-sm mb-1">1</span>
              </div>
              
              {/* Today Cell */}
              <div className="h-[120px] bg-gradient-to-b from-[#fffaf0] to-white rounded-[20px] flex flex-col p-3 relative border border-[#d4af37]/40 shadow-[0_8px_30px_rgba(212,175,55,0.15)] transform scale-[1.02] z-10">
                <div className="flex justify-between items-start">
                  <span className="text-sage font-bold text-sm">2</span>
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                </div>
                <div className="flex -space-x-1.5 mt-auto mb-1.5">
                  <div className="w-5 h-5 rounded-full border-2 border-white bg-sage/20 overflow-hidden"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&q=80" alt="" className="w-full h-full object-cover"/></div>
                  <div className="w-5 h-5 rounded-full border-2 border-white bg-sage/20 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" alt="" className="w-full h-full object-cover"/></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#d4af37] leading-none mb-0.5">2</span>
                  <span className="text-[7px] font-black text-[#d4af37] uppercase tracking-[0.1em] whitespace-nowrap overflow-hidden">Appointments</span>
                </div>
              </div>
              
              {/* Away Cell */}
              <div className="h-[120px] bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(31,74,63,0.03)_6px,rgba(31,74,63,0.03)_12px)] rounded-[20px] flex flex-col p-3 relative border border-sage/5 opacity-70">
                <span className="text-sage/40 font-bold text-sm">3</span>
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mt-auto mb-1 border border-sage/5">
                  <Plane size={14} className="text-sage/40" />
                </div>
                <span className="text-[7px] font-black text-sage/40 uppercase tracking-[0.2em] mt-0.5">Away</span>
              </div>
              
              {/* Partially Booked */}
              <div className="h-[120px] bg-white rounded-[20px] flex flex-col p-3 relative shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-sage/10 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="text-sage font-bold text-sm">4</span>
                <div className="flex items-center gap-1.5 mt-auto mb-1.5">
                  <Users size={12} className="text-sage/60" />
                  <span className="text-[11px] font-bold text-sage/80">3/5</span>
                </div>
                <div className="w-full h-1 bg-sage/10 rounded-full overflow-hidden"><div className="h-full bg-[#1f4a3f] w-[60%] rounded-full"></div></div>
              </div>
              
              <div className="h-[120px] bg-[#fcfaf7] rounded-[20px] flex flex-col p-3 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-sage/10">
                <span className="text-sage font-bold text-sm">5</span>
              </div>
              
              {/* Fully Booked - Solid Premium Cell */}
              <div className="h-[120px] bg-gradient-to-br from-[#1f4a3f] to-[#122e27] rounded-[20px] flex flex-col p-3 relative shadow-lg shadow-[#1f4a3f]/20 group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-3 right-3 w-3 h-3 bg-[#d4af37] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-[7px] font-bold leading-none">★</span>
                </div>
                <span className="text-white font-bold text-sm">6</span>
                <div className="mt-auto flex flex-col">
                  <div className="w-full h-1 bg-white/20 rounded-full mb-1.5 overflow-hidden"><div className="h-full bg-[#d4af37] w-full rounded-full"></div></div>
                  <span className="text-[7px] font-black text-white/90 uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden">Fully Booked</span>
                </div>
              </div>
              
              <div className="h-[120px] bg-white rounded-[20px] flex flex-col p-3 relative shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-sage/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-sage font-bold text-sm">7</span>
              </div>

              {/* Row 3 */}
              {[8, 9, 10, 11, 12, 13, 14].map(d => (
                <div key={d} className={`h-[120px] rounded-[20px] flex flex-col p-3 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-sage/10 ${d % 7 === 1 || d % 7 === 0 ? 'bg-[#fcfaf7]' : 'bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] border-sage/5'}`}>
                  <span className="text-sage font-bold text-sm">{d}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Standard Hours Configurator */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-white">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#fffaf0] to-white border border-[#d4af37]/20 flex items-center justify-center shrink-0 shadow-md">
                  <Clock size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-serif text-[26px] text-sage font-bold leading-tight">Standard Hours</h3>
                  <p className="text-[13px] text-sage/50 font-medium mt-1">Configure your weekly rhythm</p>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                {hours.map((h, i) => (
                  <div key={h.day} className="flex items-center gap-4 group">
                    {/* iOS style custom toggle */}
                    <button 
                      onClick={() => {
                        const newHours = [...hours];
                        newHours[i].active = !newHours[i].active;
                        setHours(newHours);
                      }}
                      className={`relative w-[42px] h-[24px] rounded-full transition-colors duration-300 shrink-0 shadow-inner ${h.active ? 'bg-[#1f4a3f]' : 'bg-[#e8ecea]'}`}
                    >
                      <div className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-300 ${h.active ? 'translate-x-[18px]' : 'translate-x-0'}`}></div>
                    </button>

                    <span className={`w-12 text-[12px] uppercase tracking-[0.2em] font-bold ${h.active ? 'text-sage' : 'text-sage/30'}`}>{h.day}</span>
                    
                    {h.active ? (
                      <div className="flex items-center gap-2 flex-1">
                        <div className="bg-white px-4 py-3 rounded-xl text-[13px] font-bold text-sage flex-1 text-center cursor-pointer border border-sage/10 hover:border-[#d4af37]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          {h.start}
                        </div>
                        <span className="text-sage/30 font-bold">-</span>
                        <div className="bg-white px-4 py-3 rounded-xl text-[13px] font-bold text-sage flex-1 text-center cursor-pointer border border-sage/10 hover:border-[#d4af37]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                          {h.end}
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 bg-[#fcfaf7] border border-sage/5 rounded-xl py-3 text-center text-[11px] font-bold text-sage/30 uppercase tracking-[0.2em]">Unavailable</div>
                    )}
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-[#d4af37] text-white rounded-md font-bold uppercase tracking-[0.18em] text-[12px] hover:bg-[#c49555] hover:shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2 shadow-md">
                Save Weekly Schedule
              </button>
            </motion.div>

            {/* Time Off Block */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-white">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcfaf7] border border-sage/10 flex items-center justify-center shrink-0 shadow-sm">
                    <Plane size={20} className="text-sage/60" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[24px] text-sage font-bold">Time Off</h3>
                    <p className="text-[13px] text-sage/50 font-medium mt-1">Manage scheduled absences</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white border border-[#d4af37]/30 flex items-center justify-center hover:bg-[#fffaf0] hover:scale-105 transition-all shadow-sm text-[#d4af37]">
                  <Plus size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-[20px] border border-sage/10 hover:border-[#d4af37]/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex justify-between items-center group">
                  <div>
                    <h4 className="text-[15px] font-bold text-sage mb-1.5">Oct 3, 2023</h4>
                    <p className="text-[10px] text-sage/50 font-bold uppercase tracking-[0.2em]">Personal Day</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#fcfaf7] flex items-center justify-center text-sage/30 group-hover:bg-[#fffaf0] group-hover:text-[#d4af37] transition-all duration-300">
                    <span className="text-[10px] font-bold">✕</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-[20px] border border-sage/10 hover:border-[#d4af37]/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex justify-between items-center group">
                  <div>
                    <h4 className="text-[15px] font-bold text-sage mb-1.5">Nov 23 - Nov 25, 2023</h4>
                    <p className="text-[10px] text-sage/50 font-bold uppercase tracking-[0.2em]">Thanksgiving Break</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#fcfaf7] flex items-center justify-center text-sage/30 group-hover:bg-[#fffaf0] group-hover:text-[#d4af37] transition-all duration-300">
                    <span className="text-[10px] font-bold">✕</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
