import React, { useState, useEffect } from 'react';
import { 
  Banknote, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Scissors, 
  Leaf, 
  SlidersHorizontal,
  ArrowRight,
  Check,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Overview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const fallbackData = {
        revenue: { total: 4250, trend: 12.5, lastMonth: 3777 },
        retention: { rate: 84, new: 12, returning: 63 },
        insight: { title: "Smart Insight", message: '"Deep Tissue" bookings are up 30% on Fridays. Consider adding a "Friday Wind Down" package to maximize revenue.' },
        schedule: [
          { id: 1, time: '09:00 AM - 10:30 AM', status: 'Confirmed', service: 'Signature Wellness Bath', client: { name: 'Eleanor V.', visits: 3, avatar: '/avatars/client_eleanor.png' } },
          { id: 2, time: '11:00 AM - 12:00 PM', status: 'Upcoming', service: 'Aromatherapy Grooming', client: { name: 'Marcus T.', avatar: null } },
          { id: 3, time: '02:00 PM - 04:00 PM', status: 'Upcoming', service: 'Full Spa Day Package', client: { name: 'Sophia R.', avatar: null } }
        ],
        requests: [
          { id: 1, client: { name: 'Isabella C.', isNew: true, avatar: '/avatars/client_isabella.png' }, time: 'Tomorrow, 10:00 AM', service: 'Deep Tissue' },
          { id: 2, client: { name: 'James W.', isNew: false, avatar: '/avatars/client_james.png' }, time: 'Nov 28, 3:00 PM', service: 'Quick Trim' }
        ]
      };

      try {
        const response = await fetch('/api/dashboard/overview');
        if (!response.ok) throw new Error('Backend not running');
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        } else {
          setData(fallbackData);
        }
      } catch (error) {
        console.error("Error fetching dashboard data, falling back to dummy data:", error);
        setData(fallbackData);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading || !data) {
    return (
      <div className="max-w-[1200px] w-full mx-auto pb-12 h-[70vh] flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-[3px] border-sage/10"></div>
          <div className="absolute inset-0 rounded-full border-[3px] border-gold border-t-transparent animate-spin"></div>
          <Sparkles size={20} className="text-gold animate-pulse" />
        </div>
        <p className="font-serif text-sage/60 text-[16px] tracking-wide animate-pulse">Curating your workspace...</p>
      </div>
    );
  }

  const formatCurrency = (val) => new Intl.NumberFormat('en-US').format(val);

  return (
    <div className="max-w-[1200px] w-full mx-auto pb-24 pt-16 relative">
      {/* Decorative ambient background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-[200px] right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 text-gold rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-gold/20 backdrop-blur-sm"
          >
            <Sparkles size={12} /> Professional Workspace
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-[56px] text-sage font-bold leading-tight tracking-tight"
          >
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#a88820] italic pr-2">Artisan.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sage/60 max-w-2xl text-[17px] leading-relaxed"
          >
            Your boutique is thriving. Here is a curated overview of your upcoming appointments and premium business insights.
          </motion.p>
        </div>
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-sage/20 rounded-md text-sage font-bold text-[11px] uppercase tracking-[0.18em] hover:border-sage hover:bg-sage/5 transition-all duration-300 whitespace-nowrap shadow-sm group"
        >
          <SlidersHorizontal size={16} className="text-sage/60 group-hover:text-sage transition-colors duration-300" />
          Manage Availability
        </motion.button>
      </div>

      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* Monthly Revenue Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-sage/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(31,74,63,0.1)] transition-shadow duration-500"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>
          
          <div className="flex justify-between items-start mb-8 relative">
            <span className="text-[12px] font-bold tracking-widest uppercase text-sage/40">Monthly Revenue</span>
            <div className="w-12 h-12 rounded-[14px] bg-sage/5 flex items-center justify-center text-sage group-hover:scale-110 transition-transform duration-500">
              <Banknote size={22} strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-8 relative">
            <h2 className="font-serif text-[48px] text-sage font-bold flex items-baseline tracking-tight">
              ${formatCurrency(data.revenue.total)}<span className="text-[24px] text-sage/30 ml-1">.00</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 relative">
            <div className="flex items-center gap-1.5 bg-mint/10 border border-mint/20 text-mint px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider">
              <TrendingUp size={14} strokeWidth={2.5} />
              +{data.revenue.trend}%
            </div>
            <span className="text-[13px] text-sage/40 font-medium tracking-wide">vs last month</span>
          </div>
        </motion.div>

        {/* Client Retention Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-sage/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(31,74,63,0.1)] transition-shadow duration-500"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-sage/5 rounded-full blur-2xl group-hover:bg-sage/10 transition-colors duration-500"></div>

          <div className="flex justify-between items-start mb-8 relative">
            <span className="text-[12px] font-bold tracking-widest uppercase text-sage/40">Client Retention</span>
            <div className="w-12 h-12 rounded-[14px] bg-[#fdf5eb] border border-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
              <Heart size={22} fill="currentColor" strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-8 relative flex items-baseline gap-4">
            <h2 className="font-serif text-[48px] text-sage font-bold tracking-tight">{data.retention.rate}<span className="text-[24px] text-sage/30 ml-1">%</span></h2>
            <span className="text-[13px] font-medium text-sage/40 bg-sage/5 px-3 py-1.5 rounded-lg border border-sage/5">Exceptional</span>
          </div>
          <div className="space-y-4 relative">
            <div className="w-full h-2.5 bg-sage/10 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gold rounded-full relative" style={{ width: `${data.retention.rate}%` }}>
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
              </div>
            </div>
            <div className="flex justify-between text-[12px] font-bold uppercase tracking-widest text-sage/40">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-sage/20"></div> New: {data.retention.new}</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div> Returning: {data.retention.returning}</span>
            </div>
          </div>
        </motion.div>

        {/* Smart Insight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#1F4A3F] to-[#122c25] rounded-2xl p-8 shadow-[0_15px_40px_-10px_rgba(31,74,63,0.5)] text-white flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Subtle bg decorations */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-10 h-10 rounded-[12px] bg-gold/20 flex items-center justify-center backdrop-blur-md border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Lightbulb size={18} className="text-gold" />
            </div>
            <span className="text-[11px] font-bold text-gold tracking-[0.2em] uppercase">{data.insight.title}</span>
          </div>
          <p className="text-white/90 leading-relaxed font-serif text-[18px] mb-8 relative z-10">
            {data.insight.message}
          </p>
          <button className="flex items-center gap-2 text-[11px] font-bold text-gold hover:text-white transition-colors uppercase tracking-widest w-fit group/btn">
            Create Package <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* Bottom Layout - 2 Columns */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
        
        {/* Today's Schedule (Left Col) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}
          className="xl:col-span-2 bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-sage/5 flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-[28px] text-sage font-bold">Today's Schedule</h2>
            <div className="w-12 h-12 rounded-full bg-sage/5 flex items-center justify-center">
              <CalendarIcon size={20} className="text-sage/40" />
            </div>
          </div>

          <div className="relative flex-1 px-2">
            {/* Elegant Vertical Line */}
            <div className="absolute left-[9px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-sage/20 via-sage/10 to-transparent rounded-full"></div>

            {data.schedule.map((apt, index) => {
              const isFirst = index === 0;
              return (
                <div key={apt.id} className={`relative pl-10 group ${isFirst ? 'mb-10' : 'mb-10'}`}>
                  {/* Timeline Dot */}
                  {isFirst ? (
                    <div className="absolute left-[-1px] top-2 w-[22px] h-[22px] rounded-full bg-white border-[4px] border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10"></div>
                  ) : (
                    <div className="absolute left-[3.5px] top-2.5 w-[13px] h-[13px] rounded-full bg-white border-[3px] border-sage/20 group-hover:border-sage/40 transition-colors z-10"></div>
                  )}
                  
                  <div className={`transition-all duration-300 ${isFirst ? "bg-[#fcfaf7] border border-gold/20 rounded-[20px] p-6 shadow-md" : "p-3 rounded-[16px] hover:bg-sage/5 border border-transparent"}`}>
                    <div className={`flex items-center ${isFirst ? 'justify-between mb-3' : 'gap-2 text-sage/50 mb-1'} text-[12px] font-bold text-sage/60 uppercase tracking-wider`}>
                      {!isFirst && <Clock size={14} className="opacity-70" />}
                      {isFirst ? (
                         <div className="flex items-center gap-2">
                          <Clock size={14} className="text-gold" />
                          <span className="text-gold">{apt.time}</span>
                        </div>
                      ) : (
                        apt.time
                      )}
                      
                      {isFirst && <span className="bg-sage text-white text-[9px] font-bold px-2.5 py-1 rounded uppercase tracking-widest shadow-sm">{apt.status}</span>}
                    </div>
                    <h4 className={`font-serif text-[20px] font-bold mb-3 ${isFirst ? 'text-sage' : 'text-sage/80'}`}>{apt.service}</h4>
                    <div className="flex items-center gap-4">
                      {apt.client.avatar ? (
                        <div className="w-10 h-10 rounded-full bg-sage/10 p-0.5 border border-sage/10 shadow-sm">
                           <img src={apt.client.avatar} alt="Client" className="w-full h-full rounded-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-sage/5 border border-sage/10 flex items-center justify-center">
                          <User size={16} className="text-sage/40" />
                        </div>
                      )}
                      <span className={`text-[14px] font-medium ${isFirst ? 'text-sage' : 'text-sage/70'}`}>
                        {apt.client.name} {apt.client.visits && <span className="text-sage/40 font-normal ml-2 text-[13px]">• {apt.client.visits}rd Visit</span>}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="w-full mt-4 py-4 border-2 border-sage/20 rounded-md text-[11px] font-bold text-sage hover:border-sage hover:bg-sage/5 hover:shadow-md transition-all uppercase tracking-[0.18em] flex items-center justify-center gap-2 group">
            View Full Calendar <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Action Needed (Right Col) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.2 }}
          className="xl:col-span-3 flex flex-col h-full bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-sage/5"
        >
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-4">
              <h2 className="font-serif text-[28px] text-sage font-bold">Action Needed</h2>
              <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold flex items-center justify-center text-[12px] font-bold tracking-widest uppercase">
                {data.requests.length} Pending
              </div>
            </div>
            <span className="text-[11px] font-bold text-sage/40 uppercase tracking-widest hidden sm:block">Incoming Requests</span>
          </div>

          <div className="space-y-5">
            {data.requests.map((req, index) => (
              <div key={req.id} className={`bg-white rounded-[24px] p-6 shadow-sm border flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative group transition-all duration-300 hover:shadow-md ${index === 0 ? 'border-gold/30 bg-[#fffdfa]' : 'border-sage/10 hover:border-sage/20'}`}>
                {index === 0 && <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-gold rounded-r-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>}
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img src={req.client.avatar} alt={req.client.name} className={`w-16 h-16 rounded-full object-cover ${index === 0 ? 'border-2 border-white shadow-md' : 'shadow-sm border border-sage/5'}`} />
                    {req.client.isNew && (
                      <div className="absolute -bottom-2 -right-2 bg-mint text-white text-[8px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm uppercase tracking-widest">New</div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-[22px] text-sage font-bold mb-1">{req.client.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                       <Clock size={12} className={index === 0 ? 'text-gold' : 'text-sage/40'} />
                       <span className={`${index === 0 ? 'text-gold' : 'text-sage/60'} font-bold text-[13px] tracking-wide`}>{req.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sage/50 text-[13px] font-medium bg-sage/5 w-fit px-2.5 py-1 rounded-md border border-sage/5">
                      {req.service === 'Deep Tissue' ? <Leaf size={12} className="text-sage/60" /> : <Scissors size={12} className="text-sage/60" />}
                      {req.service}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:ml-auto">
                  <button className="px-6 py-3.5 rounded-md border-2 border-sage/20 text-[11px] font-bold text-sage hover:text-sage hover:border-sage hover:bg-sage/5 transition-all uppercase tracking-[0.18em]">
                    Decline
                  </button>
                  <button className="px-6 py-3.5 rounded-md bg-gold text-white text-[11px] font-bold hover:bg-[#c49555] transition-all uppercase tracking-[0.18em] flex items-center gap-2 shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
                    <Check size={16} strokeWidth={3} /> Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-4 border-2 border-sage/20 rounded-md text-[11px] font-bold text-sage hover:border-sage hover:bg-sage/5 transition-all uppercase tracking-[0.18em] flex items-center justify-center gap-2 group">
            View All Requests <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
