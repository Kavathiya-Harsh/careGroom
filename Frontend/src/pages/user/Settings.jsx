import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Plus, Phone, HeadphonesIcon, CreditCard, MapPin, Check, ChevronDown } from 'lucide-react';

const Settings = () => {
  return (
    <div className="w-full pb-24 pt-8 font-sans">
      <div className="mb-10 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-serif text-[36px] text-[#1F4A3F] font-medium leading-tight mb-3"
        >
          Profile & Preferences
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#1F4A3F]/60 text-[14px] leading-relaxed"
        >
          Manage your personal sanctuary settings, tailored details, and booking fundamentals to ensure every visit is perfectly aligned with your standards.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
        
        {/* Left Column - Profile Card & Concierge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] text-center relative">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-sm bg-[#F5F2EB]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80" 
                  alt="Julian Vance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/60 hover:text-[#D4A56A] hover:border-[#D4A56A]/30 transition-colors shadow-sm">
                <Edit2 size={12} />
              </button>
            </div>
            
            <h2 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-1">Julian Vance</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A56A] mb-8">Aurelian Member</p>
            
            <div className="flex items-center justify-between pt-6 border-t border-[#1F4A3F]/5 text-left">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Member Since</p>
                <p className="text-[13px] font-medium text-[#1F4A3F]">October 2021</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Total Visits</p>
                <p className="text-[13px] font-medium text-[#1F4A3F]">14</p>
              </div>
            </div>
          </div>

          {/* Concierge Desk */}
          <div className="bg-[#1F4A3F] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
            <div className="absolute -bottom-6 -right-6 text-white/5">
              <HeadphonesIcon size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-[20px] font-medium mb-3">Concierge Desk</h3>
              <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                Need to arrange a bespoke service or update complex preferences?
              </p>
              <button className="px-5 py-2.5 border border-[#D4A56A]/40 text-[#D4A56A] text-[10px] font-black uppercase tracking-[0.2em] rounded-md hover:bg-[#D4A56A]/10 transition-colors">
                Contact Artisan
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Forms & Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Personal Details */}
          <div className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Personal Details</h3>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1F4A3F]/50 hover:text-[#D4A56A] transition-colors">
                <Edit2 size={12} /> Edit
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="border-b border-[#1F4A3F]/5 pb-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Full Name</p>
                <p className="text-[14px] text-[#1F4A3F] font-medium">Julian Vance</p>
              </div>
              <div className="border-b border-[#1F4A3F]/5 pb-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Email Address</p>
                <p className="text-[14px] text-[#1F4A3F] font-medium">j.vance@example.com</p>
              </div>
              <div className="border-b border-[#1F4A3F]/5 pb-3 md:border-none md:pb-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Phone Number</p>
                <p className="text-[14px] text-[#1F4A3F] font-medium">+1 (555) 019-2834</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-1">Date of Birth</p>
                <p className="text-[14px] text-[#1F4A3F] font-medium">Mar 14, 1985</p>
              </div>
            </div>
          </div>

          {/* Grooming Profile */}
          <div className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]">
            <div className="mb-6">
              <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium mb-2">Grooming Profile</h3>
              <p className="text-[13px] text-[#1F4A3F]/50 leading-relaxed">Tailor your service experience. These details help our artisans prepare the perfect regimen.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-2">Hair Type</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#FDFBF7] border border-[#1F4A3F]/10 rounded-lg px-4 py-3 text-[14px] text-[#1F4A3F] font-medium focus:outline-none focus:border-[#D4A56A]/50">
                    <option>Thick & Wavy</option>
                    <option>Fine & Straight</option>
                    <option>Curly</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F4A3F]/40 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-2">Scalp Sensitivity</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#FDFBF7] border border-[#1F4A3F]/10 rounded-lg px-4 py-3 text-[14px] text-[#1F4A3F] font-medium focus:outline-none focus:border-[#D4A56A]/50">
                    <option>Mildly Sensitive</option>
                    <option>Normal</option>
                    <option>Highly Sensitive</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F4A3F]/40 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/40 mb-3">Scent Preferences</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center p-4 border border-[#D4A56A]/50 bg-[#D4A56A]/5 rounded-lg cursor-pointer">
                  <div className="w-5 h-5 rounded bg-[#D4A56A] flex items-center justify-center mr-3 shrink-0 shadow-sm">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-[13px] font-medium text-[#1F4A3F]">Earthy / Woody</span>
                </label>
                <label className="flex items-center p-4 border border-[#1F4A3F]/10 hover:border-[#1F4A3F]/20 rounded-lg cursor-pointer transition-colors">
                  <div className="w-5 h-5 rounded border border-[#1F4A3F]/20 flex items-center justify-center mr-3 shrink-0"></div>
                  <span className="text-[13px] font-medium text-[#1F4A3F]/70">Citrus / Fresh</span>
                </label>
                <label className="flex items-center p-4 border border-[#D4A56A]/50 bg-[#D4A56A]/5 rounded-lg cursor-pointer">
                  <div className="w-5 h-5 rounded bg-[#D4A56A] flex items-center justify-center mr-3 shrink-0 shadow-sm">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-[13px] font-medium text-[#1F4A3F]">Scent-Free Required</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Addresses */}
            <div className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Addresses</h3>
                <button className="w-6 h-6 rounded-full bg-[#D4A56A] flex items-center justify-center text-white shadow-sm hover:bg-[#c49555] transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="p-4 border border-[#1F4A3F]/10 rounded-xl relative group">
                  <div className="flex gap-4">
                    <MapPin size={18} className="text-[#1F4A3F]/40 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/50 mb-1">Primary Residence</p>
                      <p className="text-[13px] text-[#1F4A3F] font-medium leading-relaxed">1442 Luxury Lane, Apt 4B<br/>Metropolis, NY 10012</p>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 text-[#1F4A3F]/20 group-hover:text-[#1F4A3F]/50 transition-colors">
                    <Edit2 size={14} />
                  </button>
                </div>

                <div className="p-4 border border-[#1F4A3F]/10 rounded-xl relative group">
                  <div className="flex gap-4">
                    <MapPin size={18} className="text-[#1F4A3F]/40 mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#1F4A3F]/50 mb-1">Office</p>
                      <p className="text-[13px] text-[#1F4A3F] font-medium leading-relaxed">880 Corporate Blvd, Suite 200<br/>Metropolis, NY 10022</p>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 text-[#1F4A3F]/20 group-hover:text-[#1F4A3F]/50 transition-colors">
                    <Edit2 size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Wallet */}
            <div className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium">Wallet</h3>
                <button className="w-6 h-6 rounded-full bg-[#D4A56A] flex items-center justify-center text-white shadow-sm hover:bg-[#c49555] transition-colors">
                  <Plus size={14} />
                </button>
              </div>

              <div className="flex-1 flex flex-col">
                {/* Credit Card Graphic */}
                <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-[#1F4A3F] to-[#122e27] rounded-xl p-5 sm:p-6 text-white relative shadow-xl overflow-hidden flex flex-col justify-between">
                  {/* Card Background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A56A]">Aurelian Preferred</p>
                    <CreditCard size={20} className="text-white/60" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="font-mono text-[16px] sm:text-[18px] tracking-[0.15em] mb-3 text-white/90">**** **** **** 4289</p>
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] font-medium text-white/50 tracking-wider">Expires 12/26</p>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-[#eb001b] mix-blend-multiply opacity-80"></div>
                        <div className="w-6 h-6 rounded-full bg-[#f79e1b] mix-blend-multiply opacity-80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
