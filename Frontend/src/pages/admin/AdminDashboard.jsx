import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Calendar,
  Download,
  Activity,
  Briefcase,
  Settings,
  Check,
  TrendingUp,
  Star,
  CreditCard,
  Server,
  UserPlus,
  Tag,
  FileText
} from 'lucide-react';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      const dummyData = {
        metrics: [
          { label: 'TOTAL REVENUE', value: '$142,500', change: '+12.4% vs last month', icon: DollarSign },
          { label: 'ACTIVE USERS', value: '8,240', change: '+5.2% vs last month', icon: Users },
          { label: 'VERIFIED ARTISANS', value: '342', change: '14 pending verification', icon: Shield },
          { label: 'BOOKING GROWTH', value: '18.5%', change: '+3.1% vs last month', icon: TrendingUp },
        ],
        activities: [
          {
            id: 1,
            type: 'booking',
            title: 'New Booking: 90min Deep Tissue',
            details: 'Provider: Sarah Jenkins',
            sub: 'Client: M. Davis',
            time: 'Just now',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
          },
          {
            id: 2,
            type: 'registration',
            title: 'New Registration: Artisan Profile',
            details: 'Elena Rostova (Aesthetician) joined.',
            sub: '',
            time: '12 mins ago',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80'
          },
          {
            id: 3,
            type: 'verification',
            title: 'Verification Request',
            details: 'Marcus Chen submitted documents.',
            sub: '',
            time: '34 mins ago',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80'
          },
        ],
        systemHealth: [
          { label: 'MAIN SERVER', desc: 'All systems operational', value: '99.99%', valueLabel: 'Uptime', icon: Server, ok: true },
          { label: 'PAYMENT GATEWAY', desc: 'Stripe connection active', status: 'Online', icon: CreditCard, ok: true },
        ]
      };

      setTimeout(() => {
        setData(dummyData);
        setLoading(false);
      }, 800);
    };

    fetchAdminData();
  }, []);

  if (loading || !data) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-[3px] border-[#1F4A3F]/10"></div>
          <div className="absolute inset-0 rounded-full border-[3px] border-[#D4A56A] border-t-transparent animate-spin"></div>
          <Shield size={20} className="text-[#D4A56A] animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header Section ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-none mb-2"
          >
            Executive Summary
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-[#1F4A3F]/60"
          >
            Platform performance overview for the last 30 days.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#1F4A3F]/15 rounded-lg text-[12px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors shadow-sm">
            <Calendar size={14} className="text-[#1F4A3F]/50" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1F4A3F] rounded-lg text-[12px] font-bold text-[#D4A56A] hover:bg-[#1F4A3F]/90 transition-colors shadow-sm">
            <Download size={14} />
            Export Report
          </button>
        </motion.div>
      </div>

      {/* ── Metrics Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {data.metrics.map((metric, i) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
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

      {/* ── Middle Row: Chart + Live Activity ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">
        
        {/* Growth & Revenue Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Growth & Revenue</h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1F4A3F]"></div>
                <span className="text-[11px] text-[#1F4A3F]/60 font-medium">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4A56A]"></div>
                <span className="text-[11px] text-[#1F4A3F]/60 font-medium">Bookings</span>
              </div>
            </div>
          </div>

          {/* SVG Chart Area */}
          <div className="w-full h-[200px] relative">
            <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
              {/* Grid Lines */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="#1F4A3F" strokeOpacity="0.05" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#1F4A3F" strokeOpacity="0.05" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#1F4A3F" strokeOpacity="0.05" />

              {/* Revenue Area */}
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F4A3F" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1F4A3F" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="bookingsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A56A" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#D4A56A" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Revenue filled area */}
              <path 
                d="M0,130 C50,120 80,100 120,90 C160,80 200,70 240,55 C280,40 320,45 360,35 L400,30 L400,160 L0,160 Z" 
                fill="url(#revenueGrad)" 
              />
              <path 
                d="M0,130 C50,120 80,100 120,90 C160,80 200,70 240,55 C280,40 320,45 360,35 L400,30" 
                fill="none" stroke="#1F4A3F" strokeWidth="2.5" strokeLinecap="round"
              />

              {/* Bookings filled area */}
              <path 
                d="M0,140 C50,135 80,125 120,115 C160,105 200,100 240,85 C280,70 320,75 360,60 L400,55 L400,160 L0,160 Z" 
                fill="url(#bookingsGrad)" 
              />
              <path 
                d="M0,140 C50,135 80,125 120,115 C160,105 200,100 240,85 C280,70 320,75 360,60 L400,55" 
                fill="none" stroke="#D4A56A" strokeWidth="2" strokeLinecap="round" strokeDasharray="6,4"
              />
            </svg>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
              {['W1', 'W2', 'W3', 'W4'].map(w => (
                <span key={w} className="text-[10px] font-medium text-[#1F4A3F]/40">{w}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Live Activity Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Live Activity</h2>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>

          <div className="flex flex-col gap-6">
            {data.activities.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative shrink-0">
                  <img 
                    src={item.avatar} 
                    alt="" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-[#1F4A3F] font-bold leading-snug mb-0.5">{item.title}</p>
                  <p className="text-[12px] text-[#1F4A3F]/60 leading-snug">{item.details}</p>
                  {item.sub && <p className="text-[12px] text-[#1F4A3F]/60 leading-snug">{item.sub}</p>}
                  <p className="text-[10px] text-[#1F4A3F]/40 mt-1 italic">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 pt-5 border-t border-[#1F4A3F]/5 text-[13px] text-[#1F4A3F]/60 hover:text-[#1F4A3F] font-medium transition-colors text-center">
            View All Activity
          </button>
        </motion.div>
      </div>

      {/* ── Bottom Row: Quick Actions + System Health ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#F5F2EB] rounded-2xl p-8 border border-[#1F4A3F]/5"
        >
          <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#1F4A3F]/5 hover:border-[#D4A56A]/40 hover:shadow-sm transition-all group">
              <div className="w-11 h-11 bg-[#1F4A3F] rounded-xl flex items-center justify-center text-[#D4A56A] group-hover:scale-105 transition-transform">
                <UserPlus size={18} />
              </div>
              <span className="text-[11px] font-bold text-[#1F4A3F]/70 text-center">Verify Pending Pros</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#1F4A3F]/5 hover:border-[#D4A56A]/40 hover:shadow-sm transition-all group">
              <div className="w-11 h-11 bg-[#1F4A3F] rounded-xl flex items-center justify-center text-[#D4A56A] group-hover:scale-105 transition-transform">
                <Tag size={18} />
              </div>
              <span className="text-[11px] font-bold text-[#1F4A3F]/70 text-center">Manage Promotions</span>
            </button>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#1F4A3F] rounded-xl text-[#D4A56A] text-[12px] font-bold hover:bg-[#1F4A3F]/90 transition-colors shadow-sm">
            <FileText size={14} />
            Generate Financial Report
          </button>
        </motion.div>

        {/* System Health */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-6">System Health</h2>

          <div className="flex flex-col gap-6">
            {/* Main Server */}
            <div className="flex items-center gap-5 p-5 bg-[#F5F2EB] rounded-xl border border-[#1F4A3F]/5">
              <div className="w-11 h-11 bg-[#1F4A3F] rounded-xl flex items-center justify-center text-[#D4A56A] shrink-0">
                <Server size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1F4A3F]/50 mb-0.5">MAIN SERVER</p>
                <p className="text-[13px] text-[#1F4A3F]/70">All systems operational</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-[28px] text-[#1F4A3F] leading-none font-medium">99.99%</p>
                <p className="text-[10px] text-[#1F4A3F]/50 font-medium">Uptime</p>
              </div>
            </div>

            {/* Payment Gateway */}
            <div className="flex items-center gap-5 p-5 bg-[#F5F2EB] rounded-xl border border-[#1F4A3F]/5">
              <div className="w-11 h-11 bg-[#1F4A3F] rounded-xl flex items-center justify-center text-[#D4A56A] shrink-0">
                <CreditCard size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1F4A3F]/50 mb-0.5">PAYMENT GATEWAY</p>
                <p className="text-[13px] text-[#1F4A3F]/70">Stripe connection active</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[12px] font-bold text-green-600">Online</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AdminDashboard;
