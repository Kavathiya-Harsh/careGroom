import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ArrowRight,
  Sparkles,
  Star,
  Settings,
  Heart,
  Leaf,
  Scissors
} from 'lucide-react';
import { motion } from 'framer-motion';

const UserOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user dashboard data
    const fetchUserData = async () => {
      const dummyData = {
        user: { name: 'Eleanor' },
        nextAppointment: { 
          date: 'Thursday, Oct 24', 
          time: '10:30 AM (90 Min)', 
          service: 'Signature Botanical Facial', 
          artisan: 'Julianne M. (Master Esthetician)',
          avatar: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=150&q=80'
        },
        rewards: { points: 1250, tier: 'Gold Member' },
        history: [
          { id: 1, date: 'Sep 12', duration: '60 Min', artisan: 'Marcus', service: 'Deep Tissue Restoration', type: 'massage' },
          { id: 2, date: 'Aug 05', duration: '90 Min', artisan: 'Elena', service: 'Bespoke Hair Styling', type: 'hair' }
        ]
      };

      setTimeout(() => {
        setData(dummyData);
        setLoading(false);
      }, 800);
    };

    fetchUserData();
  }, []);

  if (loading || !data) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-[3px] border-[#1F4A3F]/10"></div>
          <div className="absolute inset-0 rounded-full border-[3px] border-[#D4A56A] border-t-transparent animate-spin"></div>
          <Sparkles size={20} className="text-[#D4A56A] animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* Header Section */}
      <div className="flex flex-row items-end justify-between mb-12">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[13px] text-[#1F4A3F]/60 mb-1"
          >
            welcome back,
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-[42px] text-[#1F4A3F] font-medium leading-none"
          >
            {data.user.name}
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 px-4 py-2.5 bg-[#FDFBF7] border border-[#1F4A3F]/10 rounded-full shadow-sm"
        >
          <div className="w-6 h-6 rounded-full bg-[#1F4A3F] flex items-center justify-center">
            <Star size={12} className="text-white" fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#1F4A3F]/50 leading-tight">Loyalty Tier</span>
            <span className="text-[13px] font-bold text-[#1F4A3F] leading-tight">{data.rewards.tier}</span>
          </div>
        </motion.div>
      </div>

      {/* Top Row Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
        
        {/* Upcoming Booking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F5F2EB] rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-serif text-[22px] text-[#1F4A3F] font-bold">Upcoming Booking</h2>
              <div className="bg-[#1F4A3F] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                Confirmed
              </div>
            </div>

            <div className="bg-[#FDFBF7]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-[0_8px_30px_rgba(31,74,63,0.04)]">
              <div className="relative shrink-0">
                <img 
                  src={data.nextAppointment.avatar} 
                  alt="Artisan" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Julianne+M&background=1F4A3F&color=fff';
                  }}
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#D4A56A] rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
                  <Star size={10} fill="currentColor" />
                </div>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-serif text-[24px] text-[#1F4A3F] font-medium mb-1">{data.nextAppointment.service}</h3>
                <p className="text-[15px] text-[#1F4A3F]/70 mb-6">with {data.nextAppointment.artisan}</p>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8">
                  <div className="flex items-center gap-2 text-[14px] text-[#1F4A3F]/80 font-medium">
                    <CalendarIcon size={18} className="text-[#1F4A3F]/40" />
                    {data.nextAppointment.date}
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-[#1F4A3F]/80 font-medium">
                    <Clock size={18} className="text-[#1F4A3F]/40" />
                    {data.nextAppointment.time}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Loyalty Points Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1F4A3F] rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle bg decorations */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
            
            <div>
              <h2 className="font-serif text-[24px] font-medium mb-2">Loyalty Points</h2>
              <p className="text-white/70 text-[14px] mb-8">Earn points on every rejuvenating visit.</p>
              
              <h3 className="font-serif text-[64px] text-[#D4A56A] leading-none mb-2">
                {data.rewards.points.toLocaleString()}
              </h3>
              <p className="text-white/60 text-[13px]">Available Points</p>
            </div>

            <button className="w-full py-4 mt-8 border border-[#D4A56A]/40 rounded-lg text-[#D4A56A] text-[13px] font-medium hover:bg-[#D4A56A]/10 transition-colors">
              Redeem for services
            </button>
          </motion.div>

        </div>

        {/* Bottom Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          
          {/* Left Column (Manage Profile & Favorites) */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#F5F2EB] rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-[#ebe6d8] transition-colors group"
              onClick={() => { window.location.href = '/user/settings'; }}
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F4A3F] shadow-sm">
                  <Settings size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-[18px] text-[#1F4A3F] font-medium mb-0.5">Manage Profile</h3>
                  <p className="text-[12px] text-[#1F4A3F]/60">Preferences & billing</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-[#1F4A3F]/40 group-hover:text-[#1F4A3F] transition-colors group-hover:translate-x-1 transform duration-300" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F5F2EB] rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-[#ebe6d8] transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6e4e20] shadow-sm">
                  <Heart size={20} fill="currentColor" className="text-[#6e4e20]" />
                </div>
                <div>
                  <h3 className="font-serif text-[18px] text-[#1F4A3F] font-medium mb-0.5">Favorite Artisans</h3>
                  <p className="text-[12px] text-[#1F4A3F]/60">Quick re-book</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-[#1F4A3F]/40 group-hover:text-[#1F4A3F] transition-colors group-hover:translate-x-1 transform duration-300" />
            </motion.div>
          </div>

          {/* Right Column (Service History) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] flex flex-col"
          >
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#1F4A3F]/5">
            <h2 className="font-serif text-[24px] text-[#1F4A3F]">Service History</h2>
            <button className="text-[13px] text-[#1F4A3F]/60 hover:text-[#1F4A3F] font-medium transition-colors">
              View All
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {data.history.map((item, index) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#F5F2EB] rounded-xl flex items-center justify-center text-[#1F4A3F]/60 shrink-0">
                    {item.type === 'massage' ? <Leaf size={20} /> : <Scissors size={20} />}
                  </div>
                  <div>
                    <h3 className="text-[16px] text-[#1F4A3F] font-bold mb-1">{item.service}</h3>
                    <p className="text-[13px] text-[#1F4A3F]/60">
                      {item.date} • {item.duration} • Artisan: {item.artisan}
                    </p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-white border border-[#1F4A3F]/20 rounded-md text-[11px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors uppercase tracking-[0.1em] shrink-0 sm:self-center self-start ml-[68px] sm:ml-0">
                  REBOOK
                </button>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default UserOverview;
