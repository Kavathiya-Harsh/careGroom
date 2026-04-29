import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Bell, 
  LogOut, 
  User, 
  Settings, 
  Menu, 
  X,
  Layout,
  Users,
  Briefcase,
  List,
  BarChart
} from 'lucide-react';

const navItems = [
  { label: 'Overview', path: '/admin/dashboard' },
  { label: 'Artisan', path: '/admin/users' },
  { label: 'Verification', path: '/admin/artisans' },
  { label: 'Services', path: '/admin/services' },
  { label: 'Analytics', path: '/admin/analytics' },
];

const AdminNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[88px] z-50 bg-[#FDFBF7]/85 backdrop-blur-2xl border-b border-[#1A362D]/5 shadow-[0_4px_40px_rgba(31,74,63,0.03)] flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => navigate('/admin/dashboard')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1A362D] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            <Shield size={18} className="text-[#D4A56A]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[26px] font-bold text-[#1A362D] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
              CareGroom<span className="text-[#D4A56A]">.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4A56A]/70 mt-0.5">
              Admin Console
            </span>
          </div>
        </div>

        {/* Center Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path === '/admin/dashboard' && pathname === '/admin');
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={`relative text-[15px] font-semibold transition-all duration-300 py-3 flex items-center justify-center ${
                  isActive ? 'text-[#D4A56A]' : 'text-[#1A362D]/80 hover:text-[#1A362D]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="admin-nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A56A] rounded-full shadow-[0_0_8px_rgba(212,165,106,0.6)]"
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-full text-[#1A362D]/60 hover:text-[#1A362D] hover:bg-[#1A362D]/5 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D4A56A] rounded-full border-2 border-[#FDFBF7] animate-pulse"></span>
          </button>

          {/* Admin Profile */}
          <NavLink 
            to="/admin/profile"
            className={`p-2 rounded-full transition-colors duration-300 ${
              pathname === '/admin/profile' ? 'text-[#D4A56A] bg-[#1A362D]/5 shadow-sm' : 'text-[#1A362D]/60 hover:text-[#1A362D] hover:bg-[#1A362D]/5'
            }`}
            title="Admin Profile"
          >
            <User size={20} />
          </NavLink>

          <div className="h-6 w-px bg-[#1A362D]/10"></div>

          <button 
            onClick={() => navigate('/')}
            className="text-[13px] font-bold text-[#1A362D]/70 hover:text-[#1A362D] transition-colors uppercase tracking-[0.1em]"
          >
            Log Out
          </button>
          
          <button 
            onClick={() => navigate('/admin/profile')}
            className="px-7 py-3 bg-gradient-to-r from-[#D4A56A] to-[#c49555] text-white text-[12px] font-bold uppercase tracking-[0.15em] rounded-md transition-all shadow-[0_8px_20px_rgba(212,165,106,0.25)] hover:shadow-[0_12px_25px_rgba(212,165,106,0.4)] hover:-translate-y-0.5 ml-2"
          >
            System Log
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="relative p-2 text-[#1A362D]/60 hover:text-[#1A362D] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D4A56A] rounded-full border-2 border-[#FDFBF7]"></span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#1A362D]/80 hover:text-[#1A362D] bg-[#1A362D]/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[88px] left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#1A362D]/10 z-40 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {/* Admin Badge */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl shadow-sm border bg-white border-[#1A362D]/5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A362D]/5 border border-[#1A362D]/10">
                  <Shield size={24} className="text-[#D4A56A]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#1A362D]">Admin Console</h3>
                  <p className="text-[12px] text-[#1A362D]/60 font-medium">Super Admin</p>
                </div>
              </div>

              {navItems.map((item) => {
                const isActive = pathname === item.path || (item.path === '/admin/dashboard' && pathname === '/admin');
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive ? 'bg-white shadow-sm border border-[#1A362D]/5 text-[#D4A56A]' : 'text-[#1A362D]/80 hover:bg-[#1A362D]/5 hover:text-[#1A362D]'
                    }`}
                  >
                    <span className="text-[15px] font-semibold">{item.label}</span>
                  </NavLink>
                );
              })}
              
              <div className="h-px w-full bg-[#1A362D]/10 my-4"></div>
              
              <NavLink
                to="/admin/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-[#1A362D]/60 hover:bg-[#1A362D]/5 hover:text-[#1A362D]"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent text-[#1A362D]/40">
                  <Settings size={18} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em]">Settings</span>
              </NavLink>
              
              <div 
                className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-[#e05252]/80 hover:bg-[#e05252]/5 hover:text-[#e05252] cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/');
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent">
                  <LogOut size={18} />
                </div>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em]">Sign Out</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminNavbar;
