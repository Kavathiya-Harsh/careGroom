import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Download,
  Filter,
  PieChart,
  Activity,
  Globe,
  Clock
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('Last 6 Months');

  const mainStats = [
    { label: 'Total Revenue', value: '$842,500', change: '+14.2%', positive: true, icon: TrendingUp },
    { label: 'New Customers', value: '1,284', change: '+8.1%', positive: true, icon: Users },
    { label: 'Avg. Order Value', value: '$128', change: '-2.4%', positive: false, icon: ShoppingBag },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', positive: true, icon: Activity },
  ];

  const topServices = [
    { name: 'Master Barbering', revenue: '$240k', growth: '+12%', color: '#1F4A3F' },
    { name: 'Massage Therapy', revenue: '$185k', growth: '+18%', color: '#D4A56A' },
    { name: 'Clinical Skincare', revenue: '$142k', growth: '+5%', color: '#4AB89A' },
    { name: 'Hair Styling', revenue: '$98k', growth: '+22%', color: '#E2E8F0' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
          >
            Platform Analytics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-[#1F4A3F]/60 max-w-lg"
          >
            In-depth performance insights, demographic data, and growth projections for the CareGroom ecosystem.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#1F4A3F]/10 rounded-lg shadow-sm cursor-pointer hover:bg-[#FDFBF7] transition-colors">
            <Calendar size={14} className="text-[#1F4A3F]/40" />
            <span className="text-[12px] font-bold text-[#1F4A3F]">{timeRange}</span>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1F4A3F] rounded-lg text-[12px] font-bold text-[#D4A56A] hover:bg-[#1F4A3F]/90 transition-colors shadow-sm">
            <Download size={14} />
            Export Data
          </button>
        </motion.div>
      </div>

      {/* ── Main Stats Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {mainStats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-[#F5F2EB] rounded-2xl p-7 border border-[#1F4A3F]/5 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1F4A3F]/60 shadow-sm group-hover:scale-110 transition-transform">
                <stat.icon size={18} />
              </div>
              <div className={`flex items-center gap-1 text-[11px] font-bold ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
                {stat.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.change}
              </div>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 mb-1">{stat.label}</p>
            <h3 className="font-serif text-[32px] text-[#1F4A3F] leading-none">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* ── Middle Row: Main Growth Chart + Top Categories ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 mb-10">
        
        {/* Revenue Growth Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-[24px] text-[#1F4A3F] font-medium mb-1">Revenue Trajectory</h2>
              <p className="text-[12px] text-[#1F4A3F]/40 font-medium italic">Performance overview vs. previous period</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1F4A3F]"></div>
                <span className="text-[11px] font-bold text-[#1F4A3F]/60">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#D4A56A] opacity-40"></div>
                <span className="text-[11px] font-bold text-[#1F4A3F]/60">Previous</span>
              </div>
            </div>
          </div>

          <div className="h-[280px] w-full relative">
             <svg viewBox="0 0 500 200" className="w-full h-full" preserveAspectRatio="none">
                {/* Horizontal Grid */}
                <line x1="0" y1="40" x2="500" y2="40" stroke="#1F4A3F" strokeOpacity="0.05" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="#1F4A3F" strokeOpacity="0.05" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="#1F4A3F" strokeOpacity="0.05" />
                
                {/* Previous Period Area (Faded) */}
                <path d="M0,160 Q50,150 100,130 T200,140 T300,110 T400,120 T500,90 L500,200 L0,200 Z" fill="#D4A56A" fillOpacity="0.05" />
                <path d="M0,160 Q50,150 100,130 T200,140 T300,110 T400,120 T500,90" fill="none" stroke="#D4A56A" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4" />

                {/* Current Period Main Area */}
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1F4A3F" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1F4A3F" stopOpacity="0.01" />
                  </linearGradient>
                </defs>
                <path d="M0,170 C50,165 80,140 120,130 C160,120 200,100 250,80 C300,60 350,70 420,40 L500,30 L500,200 L0,200 Z" fill="url(#growthGrad)" />
                <path d="M0,170 C50,165 80,140 120,130 C160,120 200,100 250,80 C300,60 350,70 420,40 L500,30" fill="none" stroke="#1F4A3F" strokeWidth="3" strokeLinecap="round" />
                
                {/* Data Points */}
                <circle cx="120" cy="130" r="4" fill="white" stroke="#1F4A3F" strokeWidth="2" />
                <circle cx="250" cy="80" r="4" fill="white" stroke="#1F4A3F" strokeWidth="2" />
                <circle cx="420" cy="40" r="4" fill="white" stroke="#1F4A3F" strokeWidth="2" />
             </svg>
             
             {/* X Axis Labels */}
             <div className="flex justify-between mt-6 px-4">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
                  <span key={month} className="text-[11px] font-bold text-[#1F4A3F]/30 uppercase tracking-widest">{month}</span>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Category Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#1F4A3F] rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
          
          <h2 className="font-serif text-[24px] font-medium mb-8 relative z-10">Top Categories</h2>
          
          <div className="space-y-8 relative z-10">
            {topServices.map((service, i) => (
              <div key={service.name} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-[14px] font-bold mb-1">{service.name}</h4>
                    <span className="text-[11px] text-white/50 font-medium">Revenue: {service.revenue}</span>
                  </div>
                  <span className="text-[11px] font-black text-[#D4A56A]">{service.growth}</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 - i * 15}%` }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: service.color === '#1F4A3F' ? '#D4A56A' : service.color }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 mt-10 bg-white/10 border border-white/10 rounded-xl text-white text-[12px] font-bold hover:bg-white/20 transition-all uppercase tracking-widest">
            Detailed Breakdown
          </button>
        </motion.div>
      </div>

      {/* ── Bottom Row: Regional Distribution & Live Traffic ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8">
        
        {/* Geographic Distribution (Simplified) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Top Regions</h2>
            <Globe size={18} className="text-[#1F4A3F]/30" />
          </div>

          <div className="space-y-6">
            {[
              { region: 'New York, NY', share: '42%', color: '#1F4A3F' },
              { region: 'Austin, TX', share: '18%', color: '#D4A56A' },
              { region: 'Miami, FL', share: '14%', color: '#4AB89A' },
              { region: 'Los Angeles, CA', share: '12%', color: '#1F4A3F' },
            ].map((reg) => (
              <div key={reg.region} className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: reg.color }}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[13px] font-bold text-[#1F4A3F]">{reg.region}</span>
                    <span className="text-[12px] font-black text-[#1F4A3F]/60">{reg.share}</span>
                  </div>
                  <div className="h-1 w-full bg-[#1F4A3F]/5 rounded-full">
                    <div className="h-full rounded-full" style={{ width: reg.share, backgroundColor: reg.color }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-4 border border-[#1F4A3F]/10 rounded-xl text-[#1F4A3F]/60 text-[11px] font-bold hover:bg-[#1F4A3F]/5 transition-all uppercase tracking-widest">
            Full Geographic Report
          </button>
        </motion.div>

        {/* Service Performance Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Service Retention</h2>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F2EB] rounded-full">
              <Clock size={12} className="text-[#D4A56A]" />
              <span className="text-[10px] font-bold text-[#1F4A3F]/60 uppercase tracking-tighter">Real-time</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1F4A3F]/5">
                  <th className="text-left py-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#1F4A3F]/30">Service Name</th>
                  <th className="text-center py-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#1F4A3F]/30">Repeat Rate</th>
                  <th className="text-center py-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#1F4A3F]/30">Avg. Spend</th>
                  <th className="text-right py-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#1F4A3F]/30">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F4A3F]/5">
                {[
                  { name: 'Signature Botanical Facial', rate: '78%', spend: '$145', trend: '+4.2%' },
                  { name: 'Artisanal Scissor Cut', rate: '92%', spend: '$95', trend: '+1.8%' },
                  { name: 'Deep Tissue Recovery', rate: '64%', spend: '$160', trend: '+12.5%' },
                  { name: 'Hot Towel Deluxe Shave', rate: '85%', spend: '$75', trend: '-2.1%' },
                  { name: 'Balayage Color Therapy', rate: '42%', spend: '$280', trend: '+6.4%' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#FDFBF7]/50 transition-colors group">
                    <td className="py-4 text-[13px] font-bold text-[#1F4A3F]">{row.name}</td>
                    <td className="py-4 text-center text-[13px] font-bold text-[#1F4A3F]/70">{row.rate}</td>
                    <td className="py-4 text-center text-[13px] font-bold text-[#1F4A3F]/70">{row.spend}</td>
                    <td className="py-4 text-right">
                       <span className={`text-[11px] font-black ${row.trend.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                         {row.trend}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Analytics;
