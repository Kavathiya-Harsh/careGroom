import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Bell, 
  Key, 
  LogOut, 
  Camera,
  CheckCircle,
  Globe,
  Smartphone,
  Lock
} from 'lucide-react';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('Personal Info');

  const tabs = ['Personal Info', 'Security', 'Notifications', 'Audit Log'];

  return (
    <div className="w-full max-w-5xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header Section ── */}
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
        >
          Account Settings
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[14px] text-[#1F4A3F]/60"
        >
          Manage your administrative profile, security preferences, and system access.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
        
        {/* ── Sidebar: Profile Overview ── */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] text-center"
          >
            <div className="relative w-28 h-28 mx-auto mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" 
                alt="Admin" 
                className="w-full h-full rounded-full object-cover border-[4px] border-[#F5F2EB] shadow-md"
              />
              <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#1F4A3F] text-[#D4A56A] rounded-full flex items-center justify-center border-2 border-white shadow-lg hover:scale-110 transition-transform">
                <Camera size={14} />
              </button>
            </div>
            <h3 className="text-[18px] font-bold text-[#1F4A3F]">Alexander Sterling</h3>
            <p className="text-[12px] text-[#D4A56A] font-black uppercase tracking-widest mt-1">Super Admin</p>
            
            <div className="mt-8 pt-8 border-t border-[#1F4A3F]/5 space-y-4">
              <div className="flex items-center gap-3 text-[13px] text-[#1F4A3F]/70">
                <Globe size={16} className="text-[#1F4A3F]/30" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#1F4A3F]/70">
                <Smartphone size={16} className="text-[#1F4A3F]/30" />
                <span>+1 (555) 012-3456</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F5F2EB] rounded-2xl p-4 space-y-1 border border-[#1F4A3F]/5"
          >
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-[13px] font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-[#1F4A3F] shadow-sm' 
                    : 'text-[#1F4A3F]/40 hover:text-[#1F4A3F] hover:bg-white/50'
                }`}
              >
                {tab}
                {activeTab === tab && <CheckCircle size={14} className="text-[#D4A56A]" />}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Main Content Area ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-10 border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)]"
        >
          {activeTab === 'Personal Info' && (
            <div className="space-y-10">
              <section>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A56A] mb-8 flex items-center gap-4">
                  Profile Details <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#1F4A3F]/40 uppercase tracking-wider ml-1">Full Name</label>
                    <div className="flex items-center gap-3 bg-[#FDFBF7] border border-[#1F4A3F]/5 rounded-xl px-5 py-3.5">
                      <User size={16} className="text-[#1F4A3F]/30" />
                      <input type="text" defaultValue="Alexander Sterling" className="bg-transparent border-none outline-none text-[14px] font-medium text-[#1F4A3F] w-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#1F4A3F]/40 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="flex items-center gap-3 bg-[#FDFBF7] border border-[#1F4A3F]/5 rounded-xl px-5 py-3.5">
                      <Mail size={16} className="text-[#1F4A3F]/30" />
                      <input type="email" defaultValue="alex.sterling@caregroom.com" className="bg-transparent border-none outline-none text-[14px] font-medium text-[#1F4A3F] w-full" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A56A] mb-8 flex items-center gap-4">
                  System Role <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
                </h4>
                <div className="bg-[#1F4A3F] rounded-2xl p-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <ShieldCheck size={24} className="text-[#D4A56A]" />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold">Super Admin Access</p>
                      <p className="text-[12px] text-white/50 font-medium italic">Highest clearance level with full system control.</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-black bg-[#D4A56A]/20 text-[#D4A56A] px-3 py-1 rounded border border-[#D4A56A]/30 uppercase tracking-widest">
                    ACTIVE
                  </div>
                </div>
              </section>

              <div className="pt-6 flex justify-end gap-4">
                 <button className="px-8 py-3.5 text-[12px] font-bold text-[#1F4A3F]/60 hover:text-[#1F4A3F] transition-colors uppercase tracking-widest">
                   Reset
                 </button>
                 <button className="px-10 py-3.5 bg-[#1F4A3F] text-[#D4A56A] rounded-xl text-[12px] font-black uppercase tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all">
                   Save Changes
                 </button>
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="space-y-8">
               <div className="flex items-center justify-between p-6 bg-[#F5F2EB] rounded-2xl border border-[#1F4A3F]/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1F4A3F]">
                      <Lock size={18} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#1F4A3F]">Password Settings</p>
                      <p className="text-[12px] text-[#1F4A3F]/40">Last changed 4 months ago</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-white border border-[#1F4A3F]/10 rounded-lg text-[11px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors uppercase tracking-widest">
                    Update
                  </button>
               </div>

               <div className="flex items-center justify-between p-6 bg-[#F5F2EB] rounded-2xl border border-[#1F4A3F]/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1F4A3F]">
                      <Key size={18} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#1F4A3F]">Two-Factor Authentication</p>
                      <p className="text-[12px] text-green-600 font-medium italic">Recommended for maximum security</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md"></div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
             <div className="space-y-6">
                {[
                  { title: 'System Alerts', desc: 'Critical errors, security warnings, and server health updates.', active: true },
                  { title: 'Booking Confirmations', desc: 'Receive real-time notifications for every successful appointment.', active: true },
                  { title: 'New Artisan Applications', desc: 'Alerts for professionals seeking verification on the platform.', active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between p-6 bg-[#FDFBF7] rounded-2xl border border-[#1F4A3F]/5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-[#1F4A3F]/5 rounded-xl flex items-center justify-center text-[#1F4A3F]/40 mt-1">
                        <Bell size={18} />
                      </div>
                      <div className="max-w-md">
                        <p className="text-[14px] font-bold text-[#1F4A3F] mb-1">{item.title}</p>
                        <p className="text-[12px] text-[#1F4A3F]/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-green-500' : 'bg-gray-200'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                  </div>
                ))}
             </div>
          )}

          {activeTab === 'Audit Log' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A56A] flex items-center gap-4 flex-1">
                  Recent Activity <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
                </h4>
              </div>

              <div className="space-y-4">
                {[
                  { action: 'Admin Login', detail: 'Successful login from recognized device', time: '12 mins ago', status: 'success', ip: '192.168.1.1' },
                  { action: 'Artisan Approved', detail: 'Julianne Moreau (ID: ART-1024) verification complete', time: '2 hours ago', status: 'success', ip: '192.168.1.1' },
                  { action: 'Security Policy Update', detail: 'Changed password rotation period to 90 days', time: 'Yesterday, 4:20 PM', status: 'success', ip: '192.168.1.42' },
                  { action: 'Failed Login Attempt', detail: 'Unauthorized access attempt from unknown IP', time: 'Oct 24, 11:15 AM', status: 'alert', ip: '45.12.8.192' },
                  { action: 'Service Metadata Edit', detail: 'Updated "Hot Towel Shave" duration to 45 mins', time: 'Oct 22, 09:30 AM', status: 'success', ip: '192.168.1.1' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-[#FDFBF7] rounded-2xl border border-[#1F4A3F]/5 hover:bg-white hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        log.status === 'success' ? 'bg-green-500/5 text-green-600' : 'bg-red-500/5 text-red-500'
                      }`}>
                        {log.status === 'success' ? <CheckCircle size={18} /> : <Lock size={18} />}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-[#1F4A3F]">{log.action}</p>
                        <p className="text-[12px] text-[#1F4A3F]/50">{log.detail}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] font-bold text-[#1F4A3F]">{log.time}</p>
                      <p className="text-[10px] text-[#1F4A3F]/30 uppercase tracking-tighter">IP: {log.ip}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 border border-dashed border-[#1F4A3F]/20 rounded-2xl text-[#1F4A3F]/40 text-[11px] font-bold hover:bg-[#F5F2EB] hover:text-[#1F4A3F] transition-all uppercase tracking-widest mt-4">
                View Full Logs
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminProfile;
