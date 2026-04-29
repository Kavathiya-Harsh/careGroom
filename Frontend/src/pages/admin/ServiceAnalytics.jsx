import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Star,
  Calendar,
  ChevronRight,
  Target,
  Award,
  Zap,
  BarChart3
} from 'lucide-react';

const servicesData = {
  1: { name: 'Precision Cut & Style', category: 'Barbering', price: '$85', duration: '60 min' },
  2: { name: 'Hot Towel Shave', category: 'Barbering', price: '$65', duration: '45 min' },
  3: { name: 'Balayage & Highlights', category: 'Hair Styling', price: '$180', duration: '150 min' },
  4: { name: 'Signature Blowout', category: 'Hair Styling', price: '$95', duration: '60 min' },
  5: { name: 'Deep Tissue Massage', category: 'Massage Therapy', price: '$150', duration: '90 min' },
  // ... more can be added
};

const ServiceAnalytics = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id] || { name: 'Service Performance', category: 'Catalogue', price: '--', duration: '--' };

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Back + Header ── */}
      <div className="mb-10">
        <motion.button 
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/admin/services')}
          className="flex items-center gap-2 text-[13px] font-bold text-[#1F4A3F]/50 hover:text-[#1F4A3F] transition-colors mb-6 uppercase tracking-[0.1em]"
        >
          <ArrowLeft size={16} /> Back to Services
        </motion.button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="px-3 py-1 bg-[#D4A56A]/10 text-[#D4A56A] text-[10px] font-black uppercase tracking-widest rounded-md border border-[#D4A56A]/20">
                {service.category}
              </span>
              <span className="text-[12px] text-[#1F4A3F]/40 font-medium">ID: SER-{id.padStart(4, '0')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
            >
              {service.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-[14px] text-[#1F4A3F]/60"
            >
              Comprehensive analytics and performance breakdown for this specific curation.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-4 bg-[#F5F2EB] rounded-2xl border border-[#1F4A3F]/5"
          >
            <div className="text-right">
              <p className="text-[10px] font-bold text-[#1F4A3F]/40 uppercase mb-0.5">Active Artisans</p>
              <p className="text-[18px] font-bold text-[#1F4A3F]">14 Pros</p>
            </div>
            <div className="w-10 h-10 bg-[#1F4A3F] rounded-xl flex items-center justify-center text-[#D4A56A]">
              <Award size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Key Metrics Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Revenue', value: '$24,850', change: '+18%', icon: DollarSign, color: '#1F4A3F' },
          { label: 'Booking Volume', value: '310', change: '+12%', icon: Calendar, color: '#D4A56A' },
          { label: 'Completion Rate', value: '96.4%', change: '+0.5%', icon: Target, color: '#4AB89A' },
          { label: 'Avg. Rating', value: '4.85', change: '+0.2', icon: Star, color: '#1F4A3F' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
            className="bg-white rounded-2xl p-7 border border-[#1F4A3F]/5 shadow-sm group hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
                <stat.icon size={20} />
              </div>
              <span className="text-[11px] font-bold text-green-600">{stat.change}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 mb-1">{stat.label}</p>
            <h3 className="font-serif text-[32px] text-[#1F4A3F] leading-none">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* ── Visual Insights ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 mb-10">
        
        {/* Booking Distribution Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Monthly Booking Volume</h2>
            <div className="flex gap-2">
               <div className="w-8 h-8 rounded-lg bg-white border border-[#1F4A3F]/5 flex items-center justify-center text-[#1F4A3F]/40 hover:text-[#1F4A3F] cursor-pointer shadow-sm"><BarChart3 size={14} /></div>
               <div className="w-8 h-8 rounded-lg bg-white border border-[#1F4A3F]/5 flex items-center justify-center text-[#1F4A3F]/40 hover:text-[#1F4A3F] cursor-pointer shadow-sm"><TrendingUp size={14} /></div>
            </div>
          </div>

          <div className="relative h-[220px] w-full">
            {/* Y-Axis Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-[#1F4A3F]/5 h-0"></div>
              ))}
              <div className="w-full border-t border-[#1F4A3F]/10 h-0"></div>
            </div>

            {/* SVG Bars for precision */}
            <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A56A" />
                  <stop offset="100%" stopColor="#1F4A3F" />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                </filter>
              </defs>

              {[45, 62, 58, 74, 92, 85].map((val, i) => {
                const x = 30 + i * 65;
                const h = (val / 100) * 140;
                const y = 160 - h;
                return (
                  <g key={i} className="group cursor-pointer">
                    <motion.rect
                      initial={{ height: 0, y: 160 }}
                      animate={{ height: h, y: y }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "circOut" }}
                      x={x}
                      width="24"
                      rx="6"
                      fill="url(#barGrad)"
                      className="transition-all duration-300 hover:brightness-110"
                    />
                    {/* Floating Value Tooltip on hover */}
                    <text 
                      x={x + 12} 
                      y={y - 10} 
                      textAnchor="middle" 
                      className="text-[10px] font-bold fill-[#1F4A3F] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {val}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between mt-6 px-4">
            {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'].map(month => (
              <span key={month} className="text-[10px] font-bold text-[#1F4A3F]/30 tracking-[0.2em]">{month}</span>
            ))}
          </div>
        </motion.div>

        {/* Top Performing Artisans */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-8">Top Practitioners</h2>
          <div className="space-y-6">
            {[
              { name: 'Elias Vance', bookings: 142, rating: 5.0, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
              { name: 'Julianne Moreau', bookings: 128, rating: 4.9, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
              { name: 'Marcus Thompson', bookings: 96, rating: 4.8, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80' },
              { name: 'Elena Rostova', bookings: 84, rating: 5.0, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80' },
            ].map((pro, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <img src={pro.avatar} className="w-11 h-11 rounded-full object-cover border-2 border-[#F5F2EB]" />
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1F4A3F] group-hover:text-[#D4A56A] transition-colors">{pro.name}</h4>
                    <p className="text-[11px] text-[#1F4A3F]/40">{pro.bookings} bookings • ★ {pro.rating}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#1F4A3F]/20 group-hover:text-[#1F4A3F] transition-colors" />
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 border border-[#1F4A3F]/10 rounded-xl text-[#1F4A3F]/60 text-[11px] font-bold hover:bg-[#1F4A3F]/5 transition-all uppercase tracking-widest">
            Assign New Artisans
          </button>
        </motion.div>
      </div>

      {/* ── Bottom Details ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#1F4A3F] rounded-2xl p-8 text-white relative overflow-hidden"
         >
           <div className="absolute top-[-20%] right-[-10%] w-[200px] h-[200px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#D4A56A]">
                 <Zap size={24} />
              </div>
              <h3 className="font-serif text-[22px] font-medium">Growth Insight</h3>
           </div>
           <p className="text-white/70 text-[15px] leading-relaxed mb-8">
             Demand for <strong>{service.name}</strong> has increased by 15% during weekend mornings. Consider incentivizing artisans to open more slots between 9 AM and 12 PM to capture missed revenue.
           </p>
           <div className="flex gap-4">
             <div className="bg-white/5 p-4 rounded-xl flex-1 text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-1">Peak Time</p>
                <p className="text-[16px] font-bold">Sat, 10:30 AM</p>
             </div>
             <div className="bg-white/5 p-4 rounded-xl flex-1 text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-1">Missed Opp.</p>
                <p className="text-[16px] font-bold text-amber-400">$1,450/mo</p>
             </div>
           </div>
         </motion.div>

         <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-sm"
         >
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Pricing Analysis</h3>
              <div className="text-[11px] font-bold text-green-600 px-3 py-1 bg-green-50 rounded-full">Optimized</div>
           </div>
           <div className="space-y-6">
              <div className="flex justify-between items-center text-[14px]">
                 <span className="text-[#1F4A3F]/60">Platform Average</span>
                 <span className="font-bold text-[#1F4A3F]">{service.price}</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                 <span className="text-[#1F4A3F]/60">Competitor Benchmark</span>
                 <span className="font-bold text-[#1F4A3F]">$82 - $110</span>
              </div>
              <div className="h-px bg-[#1F4A3F]/5"></div>
              <div className="flex justify-between items-center">
                 <div>
                    <p className="text-[14px] font-bold text-[#1F4A3F]">Projected Monthly Rev.</p>
                    <p className="text-[11px] text-[#1F4A3F]/40">Next 30 days based on trends</p>
                 </div>
                 <span className="text-[24px] font-serif font-bold text-[#D4A56A]">$6,240</span>
              </div>
           </div>
         </motion.div>
      </div>
    </div>
  );
};

export default ServiceAnalytics;
