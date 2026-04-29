import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Calendar, 
  Star, 
  ArrowLeft,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Mock data per artisan (in real app, fetch from backend)
const artisanData = {
  'ART-1024': {
    name: 'Julianne Moreau',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    specialty: 'Master Esthetician',
  },
  'ART-1031': {
    name: 'Marcus Thompson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    specialty: 'Senior Barber',
  },
  'ART-1045': {
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    specialty: 'Aromatherapist',
  },
  'ART-1052': {
    name: 'Daniel Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    specialty: 'Skincare Specialist',
  },
  'ART-1060': {
    name: 'Sofia Delgado',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    specialty: 'Hair Colorist',
  },
  'ART-1068': {
    name: 'James Okafor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    specialty: 'Massage Therapist',
  },
};

const metrics = [
  { label: 'TOTAL REVENUE', value: '$124,500', change: '+12.5% vs last month', icon: DollarSign },
  { label: 'ACTIVE ARTISANS', value: '48', change: '+3 new this week', icon: Users },
  { label: 'TOTAL BOOKINGS', value: '1,204', change: 'Stable vs last week', icon: Calendar },
  { label: 'AVG RATING', value: '4.92', change: '+0.1 vs last month', icon: Star },
];

const recentBookings = [
  { service: 'Signature Facial', artisan: 'Elena R.', status: 'completed', commission: '$45.00' },
  { service: 'Deep Tissue Massage', artisan: 'Marcus T.', status: 'progress', commission: '$60.00' },
  { service: 'Balayage & Style', artisan: 'Sarah J.', status: 'scheduled', commission: '$85.00' },
  { service: 'Luxury Manicure', artisan: 'Chloe L.', status: 'completed', commission: '$20.00' },
  { service: 'Beard Sculpting', artisan: 'James D.', status: 'cancelled', commission: '$0.00' },
];

const statusConfig = {
  completed: { label: 'Completed', bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  progress: { label: 'Progress', bg: 'bg-[#D4A56A]/10', text: 'text-[#D4A56A]', border: 'border-[#D4A56A]/20' },
  scheduled: { label: 'Scheduled', bg: 'bg-[#1F4A3F]/10', text: 'text-[#1F4A3F]', border: 'border-[#1F4A3F]/20' },
  cancelled: { label: 'Cancelled', bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20' },
};

const categoryData = [
  { label: 'Haircare', pct: 45, color: '#1F4A3F' },
  { label: 'Spa & Massage', pct: 30, color: '#D4A56A' },
  { label: 'Skincare', pct: 25, color: '#4AB89A' },
];

const priorityVerifications = [
  { name: 'Julia S.', detail: 'License pending', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
  { name: 'David M.', detail: 'Portfolio review', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80' },
];

const ArtisanPerformance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = artisanData[id];

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Back + Header ── */}
      <div className="mb-10">
        <motion.button 
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/admin/users')}
          className="flex items-center gap-2 text-[13px] font-bold text-[#1F4A3F]/50 hover:text-[#1F4A3F] transition-colors mb-6 uppercase tracking-[0.1em]"
        >
          <ArrowLeft size={16} /> Back to Artisans
        </motion.button>

        {artisan && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="flex items-center gap-5 mb-6"
          >
            <img src={artisan.avatar} alt={artisan.name} className="w-14 h-14 rounded-full object-cover border-[3px] border-[#F5F2EB] shadow-sm" />
            <div>
              <h2 className="text-[18px] font-bold text-[#1F4A3F]">{artisan.name}</h2>
              <p className="text-[13px] text-[#D4A56A] font-semibold">{artisan.specialty}</p>
            </div>
          </motion.div>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
        >
          Executive Overview
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[14px] text-[#1F4A3F]/60"
        >
          Performance metrics and critical alerts for the current period.
        </motion.p>
      </div>

      {/* ── Metrics Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {metrics.map((metric, i) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className="bg-[#F5F2EB] rounded-2xl p-6 border border-[#1F4A3F]/5"
          >
            <div className="flex justify-between items-start mb-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1F4A3F]/50">{metric.label}</span>
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#1F4A3F]/60 shadow-sm border border-[#1F4A3F]/5">
                <metric.icon size={16} />
              </div>
            </div>
            <h3 className="font-serif text-[32px] text-[#1F4A3F] leading-none mb-2">{metric.value}</h3>
            <p className="text-[11px] text-green-600 font-medium flex items-center gap-1">
              <TrendingUp size={10} />
              {metric.change}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── Middle Row: Chart + Category Breakdown ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-8">
        
        {/* Revenue vs Volume Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Revenue vs. Volume</h2>
            <span className="text-[11px] text-[#1F4A3F]/40 font-medium">Last 6 Months</span>
          </div>

          <div className="w-full h-[200px] relative">
            <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
              <line x1="0" y1="40" x2="400" y2="40" stroke="#1F4A3F" strokeOpacity="0.05" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#1F4A3F" strokeOpacity="0.05" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#1F4A3F" strokeOpacity="0.05" />

              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F4A3F" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1F4A3F" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              <path d="M0,140 C40,135 70,120 120,100 C170,80 220,60 270,45 C320,30 370,25 400,20 L400,160 L0,160 Z" fill="url(#revGrad)" />
              <path d="M0,140 C40,135 70,120 120,100 C170,80 220,60 270,45 C320,30 370,25 400,20" fill="none" stroke="#1F4A3F" strokeWidth="2.5" strokeLinecap="round" />

              <path d="M0,145 C40,140 80,130 140,115 C200,100 240,90 280,75 C320,65 370,55 400,45" fill="none" stroke="#D4A56A" strokeWidth="2" strokeLinecap="round" strokeDasharray="6,4" />
            </svg>
          </div>
        </motion.div>

        {/* Revenue by Category */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-8">Revenue by Category</h2>
          
          {/* Donut Chart */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-[140px] h-[140px]">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {/* Haircare - 45% */}
                <circle cx="18" cy="18" r="14" fill="none" stroke="#1F4A3F" strokeWidth="4"
                  strokeDasharray="62.83 37.17" strokeDashoffset="0" strokeLinecap="round" />
                {/* Spa & Massage - 30% */}
                <circle cx="18" cy="18" r="14" fill="none" stroke="#D4A56A" strokeWidth="4"
                  strokeDasharray="26.39 73.61" strokeDashoffset="-62.83" strokeLinecap="round" />
                {/* Skincare - 25% */}
                <circle cx="18" cy="18" r="14" fill="none" stroke="#4AB89A" strokeWidth="4"
                  strokeDasharray="21.99 78.01" strokeDashoffset="-89.22" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-[24px] font-bold text-[#1F4A3F]">100%</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {categoryData.map((cat) => (
              <div key={cat.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-[13px] text-[#1F4A3F]/70 font-medium">{cat.label}</span>
                </div>
                <span className="text-[13px] font-bold text-[#1F4A3F]">{cat.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Row: Recent Bookings + Action Center ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
        
        {/* Recent Bookings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Recent Bookings</h2>
            <button className="text-[13px] text-[#1F4A3F]/60 hover:text-[#1F4A3F] font-medium transition-colors">View All</button>
          </div>

          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-3 pb-4 border-b border-[#1F4A3F]/5 mb-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Service</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Artisan</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Status</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 text-right">Commission</span>
          </div>

          {recentBookings.map((booking, i) => {
            const status = statusConfig[booking.status];
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr_1fr] gap-3 py-4 border-b border-[#1F4A3F]/5 last:border-0 items-center">
                <span className="text-[14px] font-medium text-[#1F4A3F]">{booking.service}</span>
                <span className="text-[13px] text-[#1F4A3F]/60">{booking.artisan}</span>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-[0.15em] border ${status.bg} ${status.text} ${status.border}`}>
                    {status.label}
                  </span>
                </div>
                <span className="text-[14px] font-bold text-[#1F4A3F] text-right">{booking.commission}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Action Center */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5 flex flex-col"
        >
          <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-6 flex items-center gap-2">
            <AlertCircle size={18} className="text-[#D4A56A]" />
            Action Center
          </h2>

          {/* Priority Verifications */}
          <div className="mb-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 mb-4">PRIORITY VERIFICATIONS</p>
            <div className="space-y-3">
              {priorityVerifications.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-xl p-4 border border-[#1F4A3F]/5">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-full object-cover border-2 border-[#F5F2EB]" />
                    <div>
                      <p className="text-[13px] font-bold text-[#1F4A3F]">{item.name}</p>
                      <p className="text-[11px] text-[#1F4A3F]/40">{item.detail}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-white border border-[#1F4A3F]/15 rounded-md text-[10px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors uppercase tracking-wider">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 mb-4">SYSTEM ALERTS</p>
            <div className="bg-white rounded-xl p-5 border border-red-500/10">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5 shrink-0 animate-pulse"></div>
                <div>
                  <p className="text-[13px] font-bold text-[#1F4A3F] mb-1">Payment Gateway Sync</p>
                  <p className="text-[12px] text-[#1F4A3F]/50 leading-relaxed">
                    Delayed response detected from Stripe API in the last 15 mins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtisanPerformance;
