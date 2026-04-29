import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, ArrowUpRight, Mail, Phone } from 'lucide-react';

const clientsData = [
  {
    id: 1,
    name: 'Isabella C.',
    avatar: '/avatars/client_isabella.png',
    type: 'Repeat Client',
    totalBookings: 14,
    totalSpent: '$1,850',
    lastVisit: 'Oct 12, 2023',
    upcoming: 'Oct 26, 2023',
    email: 'isabella.c@example.com',
    phone: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    avatar: '/avatars/client_james.png',
    type: 'New Client',
    totalBookings: 1,
    totalSpent: '$150',
    lastVisit: '-',
    upcoming: 'Oct 24, 2023',
    email: 'm.sterling@example.com',
    phone: '+1 (555) 987-6543'
  },
  {
    id: 3,
    name: 'Elena Rossi',
    avatar: '/avatars/client_isabella.png',
    type: 'VIP',
    totalBookings: 32,
    totalSpent: '$4,200',
    lastVisit: 'Sep 28, 2023',
    upcoming: 'Oct 25, 2023',
    email: 'elena.rossi@example.com',
    phone: '+1 (555) 456-7890'
  }
];

const Clients = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-[1200px] w-full mx-auto pb-24 pt-16"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
        <div className="space-y-4">
          <h1 className="font-serif text-[40px] text-sage font-bold leading-tight mb-2">Client Directory</h1>
          <p className="text-sage/60 font-medium text-[15px] max-w-md">Manage your client relationships, view booking histories, and access concierge notes.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sage/40" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="pl-10 pr-4 py-3.5 border border-sage/10 rounded-xl text-[13px] text-sage placeholder:text-sage/40 bg-white focus:outline-none focus:border-gold w-64 shadow-sm transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-white border-2 border-sage/20 rounded-md text-sage font-bold text-[11px] uppercase tracking-[0.18em] hover:border-sage hover:bg-sage/5 transition-colors shadow-sm">
            <Filter size={14} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientsData.map(client => (
          <div key={client.id} className="bg-white rounded-2xl p-7 shadow-sm border border-sage/5 hover:border-sage/20 transition-all hover:shadow-xl group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cream overflow-hidden border border-sage/10 p-0.5 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-sage/10">
                     <img src={client.avatar} alt={client.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-sage font-bold leading-tight mb-1">{client.name}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${
                    client.type === 'VIP' ? 'bg-gold/10 text-gold border border-gold/20' : 
                    client.type === 'Repeat Client' ? 'bg-[#fff8e6] text-gold border border-gold/10' : 
                    'bg-sage/5 text-sage/60 border border-sage/10'
                  }`}>
                    {client.type === 'VIP' && <Star size={8} className="fill-gold" />}
                    {client.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <button className="flex-1 py-2 rounded-lg bg-[#fdf5eb] border border-white flex items-center justify-center gap-2 text-sage/60 hover:text-sage hover:border-sage/10 transition-colors shadow-sm">
                <Mail size={14} /> <span className="text-[10px] font-bold uppercase tracking-widest">Message</span>
              </button>
              <button className="flex-1 py-2 rounded-lg bg-[#fdf5eb] border border-white flex items-center justify-center gap-2 text-sage/60 hover:text-sage hover:border-sage/10 transition-colors shadow-sm">
                <Phone size={14} /> <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-sage/5">
              <div>
                <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Total Bookings</p>
                <p className="text-[20px] font-serif font-bold text-sage">{client.totalBookings}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-sage/40 uppercase tracking-widest mb-1.5">Total Spent</p>
                <p className="text-[20px] font-serif font-bold text-gold">{client.totalSpent}</p>
              </div>
            </div>

            <div className="space-y-3 mb-8 bg-[#fdf5eb] p-5 rounded-[16px] border border-white shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sage/40">
                  <Clock size={12} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Last Visit</span>
                </div>
                <span className="text-[12px] font-bold text-sage/70">{client.lastVisit}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gold">
                  <Clock size={12} className="text-gold" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Upcoming</span>
                </div>
                <span className="text-[12px] font-bold text-sage">{client.upcoming}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-transparent border-2 border-sage/20 text-sage rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:border-sage hover:bg-sage/5 transition-all flex items-center justify-center gap-2 group-hover:bg-sage group-hover:text-white group-hover:border-sage shadow-sm">
              View Profile <ArrowUpRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Clients;
