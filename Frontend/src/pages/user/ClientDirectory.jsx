import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Users, Search, Filter } from 'lucide-react';

const ClientDirectory = () => {
  return (
    <div className="w-full pb-24 pt-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl text-[#1F4A3F] font-bold"
          >
            Client Directory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#1F4A3F]/60 mt-2"
          >
            Manage your personal network and shared wellness profiles.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F4A3F]/30" />
            <input 
              type="text" 
              placeholder="Search directory..." 
              className="pl-12 pr-4 py-3 bg-white border border-[#1F4A3F]/10 rounded-xl text-sm focus:outline-none focus:border-[#D4A56A] transition-all w-64 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1F4A3F] text-[#D4A56A] rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-[#D4A56A] hover:text-white transition-all shadow-lg">
            <UserPlus size={16} /> Add Member
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-3xl p-16 text-center border border-[#1F4A3F]/5 shadow-[0_20px_50px_rgba(31,74,63,0.03)]"
      >
        <div className="w-24 h-24 bg-[#1F4A3F]/5 rounded-full flex items-center justify-center mx-auto mb-8 text-[#1F4A3F]/20">
          <Users size={40} />
        </div>
        <h3 className="font-serif text-3xl text-[#1F4A3F] font-bold mb-4">Your Directory is Empty</h3>
        <p className="text-[#1F4A3F]/50 max-w-md mx-auto leading-relaxed mb-10">
          Add family members or friends to your directory to easily book shared appointments or gift wellness experiences.
        </p>
        <button className="px-10 py-4 bg-transparent border-2 border-[#1F4A3F]/20 text-[#1F4A3F] rounded-xl font-black uppercase tracking-[0.2em] text-[12px] hover:border-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-all">
          Build Your Network
        </button>
      </motion.div>
    </div>
  );
};

export default ClientDirectory;
