import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Download, 
  Wallet, 
  CalendarCheck, 
  ShoppingBag,
  TrendingUp, 
  Minus,
  ChevronDown
} from 'lucide-react';

const Earnings = () => {
  const payouts = [
    { id: 1, date: 'Oct 24, 2023', desc: 'Weekly Payout', subDesc: 'Direct Deposit ending in **** 4291', amount: 1840.50, status: 'Processing' },
    { id: 2, date: 'Oct 17, 2023', desc: 'Weekly Payout', subDesc: 'Direct Deposit ending in **** 4291', amount: 1620.00, status: 'Paid' },
    { id: 3, date: 'Oct 10, 2023', desc: 'Weekly Payout', subDesc: 'Direct Deposit ending in **** 4291', amount: 1950.25, status: 'Paid' },
    { id: 4, date: 'Nov 01, 2023', desc: 'Projected Payout', subDesc: 'Based on current bookings', amount: 2100.00, status: 'Scheduled' },
  ];

  const chartData = [
    { day: 'Mon', height: '40%' },
    { day: 'Tue', height: '65%' },
    { day: 'Wed', height: '45%' },
    { day: 'Thu', height: '100%', active: true },
    { day: 'Fri', height: '55%' },
    { day: 'Sat', height: '80%' },
    { day: 'Sun', height: '90%' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-[1200px] w-full mx-auto pb-24 pt-16"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
        <div className="space-y-4">
          <h1 className="font-serif text-[44px] text-sage font-bold leading-tight tracking-tight">Analytics</h1>
          <p className="text-sage/60 font-medium text-[15px] max-w-xl leading-relaxed">
            Review your professional earnings, booking trends, and upcoming payouts.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button className="flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-sage/20 rounded-md text-sage font-bold text-[11px] uppercase tracking-[0.18em] hover:border-sage hover:bg-sage/5 transition-colors shadow-sm">
            <CalendarIcon size={14} className="text-sage/60" />
            This Month
            <ChevronDown size={14} className="text-sage/40" />
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-gold border border-gold/10 text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-[#c49555] transition-colors shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
            <Download size={14} className="text-white" />
            Export
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em]">Total Revenue</span>
            <div className="w-10 h-10 rounded-full bg-[#fdf5eb] flex items-center justify-center text-[#d4af37]">
              <Wallet size={18} strokeWidth={2} />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-serif text-[36px] text-sage font-bold">$14,250.00</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[#2d8a6e] text-[11px] font-bold">
              <TrendingUp size={12} strokeWidth={3} />
              +12.5%
            </div>
            <span className="text-[11px] text-sage/50 font-bold tracking-wide">vs last month</span>
          </div>
        </div>

        {/* Bookings Completed */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em]">Bookings Completed</span>
            <div className="w-10 h-10 rounded-full bg-sage/5 flex items-center justify-center text-sage">
              <CalendarCheck size={18} strokeWidth={2} />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-serif text-[36px] text-sage font-bold">128</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[#2d8a6e] text-[11px] font-bold">
              <TrendingUp size={12} strokeWidth={3} />
              +8.2%
            </div>
            <span className="text-[11px] text-sage/50 font-bold tracking-wide">vs last month</span>
          </div>
        </div>

        {/* Avg Booking Value */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em]">Avg. Booking Value</span>
            <div className="w-10 h-10 rounded-full bg-sage/5 flex items-center justify-center text-sage">
              <ShoppingBag size={18} strokeWidth={2} />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-serif text-[36px] text-sage font-bold">$111.32</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sage/40 text-[11px] font-bold">
              <Minus size={12} strokeWidth={3} />
              +0.0%
            </div>
            <span className="text-[11px] text-sage/50 font-bold tracking-wide">vs last month</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-sage/5 mb-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-serif text-[24px] text-sage font-bold">Earnings Trend</h2>
          <div className="flex p-1 bg-[#f5f2eb] rounded-md border border-sage/5">
            <button className="px-4 py-1.5 rounded-md text-[11px] font-bold text-sage bg-white shadow-sm tracking-[0.18em] uppercase">Weekly</button>
            <button className="px-4 py-1.5 rounded-md text-[11px] font-bold text-sage/50 hover:text-sage tracking-[0.18em] uppercase transition-colors">Monthly</button>
          </div>
        </div>

        {/* Mockup Chart */}
        <div className="h-[280px] w-full flex items-end justify-between px-2 gap-4 sm:gap-10 pb-6 border-b border-sage/10 relative">
           {/* Y-axis lines (decorative) */}
           <div className="absolute top-0 left-0 right-0 h-px bg-sage/5"></div>
           <div className="absolute top-1/4 left-0 right-0 h-px bg-sage/5"></div>
           <div className="absolute top-2/4 left-0 right-0 h-px bg-sage/5"></div>
           <div className="absolute top-3/4 left-0 right-0 h-px bg-sage/5"></div>

           {chartData.map((data, index) => (
             <div key={index} className="flex-1 flex flex-col items-center gap-4 group h-full justify-end z-10">
               <div className="w-full relative h-full flex items-end">
                 <div 
                   className={`w-full rounded-t-sm transition-all duration-300 ${data.active ? 'bg-[#1f4a3f] border-t-2 border-[#d4af37]' : 'bg-[#edf3f1] group-hover:bg-[#dce6e3]'}`}
                   style={{ height: data.height }}
                 ></div>
               </div>
               <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${data.active ? 'text-[#d4af37]' : 'text-sage/40'}`}>
                 {data.day}
               </span>
             </div>
           ))}
        </div>
      </div>

      {/* Payout History Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-sage/5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-[24px] text-sage font-bold">Payout History</h2>
          <button className="text-[10px] font-bold text-sage/60 uppercase tracking-[0.15em] hover:text-sage transition-colors">
            View All
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-sage/10">
                <th className="text-left pb-4 text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] w-[20%]">Date</th>
                <th className="text-left pb-4 text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] w-[40%]">Description</th>
                <th className="text-left pb-4 text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] w-[20%]">Amount</th>
                <th className="text-right pb-4 text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] w-[20%]">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr key={payout.id} className="border-b border-sage/5 last:border-0 hover:bg-[#fcfaf7] transition-colors">
                  <td className="py-5 text-[13px] text-sage/70 font-medium">
                    {payout.date}
                  </td>
                  <td className="py-5">
                    <p className="text-[14px] font-bold text-sage mb-0.5">{payout.desc}</p>
                    <p className="text-[12px] text-sage/50 font-medium">{payout.subDesc}</p>
                  </td>
                  <td className="py-5">
                    <span className={`font-serif text-[18px] font-bold ${payout.status === 'Scheduled' ? 'text-sage/60' : 'text-[#2d8a6e]'}`}>
                      ${payout.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-5 text-right">
                    {payout.status === 'Processing' && (
                      <span className="inline-flex items-center gap-1.5 bg-[#fff8e6] border border-[#d4af37]/20 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                        <span className="text-[10px] font-bold text-[#b8952a] uppercase tracking-widest">{payout.status}</span>
                      </span>
                    )}
                    {payout.status === 'Paid' && (
                      <span className="inline-flex items-center gap-1.5 bg-mint/10 border border-mint/20 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint"></span>
                        <span className="text-[10px] font-bold text-mint uppercase tracking-widest">{payout.status}</span>
                      </span>
                    )}
                    {payout.status === 'Scheduled' && (
                      <span className="inline-flex items-center gap-1.5 bg-[#e8ecea] border border-sage/10 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage/40"></span>
                        <span className="text-[10px] font-bold text-sage/60 uppercase tracking-widest">{payout.status}</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Earnings;
