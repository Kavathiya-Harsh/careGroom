import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Calendar, 
  Clock, 
  Heart, 
  Settings, 
  LogOut,
  Bell,
  Menu,
  X,
  User
} from 'lucide-react';
import Footer from '../Footer';

const navItems = [
  { label: 'Explore', path: '/user/explore' },
  { label: 'How it works', path: '/user/how-it-works' },
  { label: 'Services', path: '/user/services' },
  { label: 'Professionals', path: '/user/professionals' },
  { label: 'Dashboard', path: '/user' },
];

const UserLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream relative">
      {/* Premium Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-[88px] z-50 bg-[#FDFBF7]/85 backdrop-blur-2xl border-b border-[#1F4A3F]/5 shadow-[0_4px_40px_rgba(31,74,63,0.03)] flex items-center justify-between px-6 lg:px-12 transition-all duration-300">
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => navigate('/user')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1F4A3F] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            <Heart size={18} className="text-[#D4A56A]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[26px] font-bold text-[#1F4A3F] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
              CareGroom<span className="text-[#D4A56A]">.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4A56A]/70 mt-0.5">
              Member Portal
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = item.path === '/user' 
              ? (pathname === '/user' || pathname.startsWith('/user/bookings') || pathname.startsWith('/user/history') || pathname.startsWith('/user/favorites'))
              : pathname === item.path;
            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={`relative text-[15px] font-semibold transition-all duration-300 py-3 flex items-center justify-center ${
                  isActive ? 'text-[#D4A56A]' : 'text-[#1F4A3F]/80 hover:text-[#1F4A3F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="main-nav-underline"
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
          <NavLink 
            to="/user/settings"
            className={`p-2 rounded-full transition-colors duration-300 ${
              pathname === '/user/settings' ? 'text-[#D4A56A] bg-[#1F4A3F]/5 shadow-sm' : 'text-[#1F4A3F]/60 hover:text-[#1F4A3F] hover:bg-[#1F4A3F]/5'
            }`}
            title="Profile"
          >
            <User size={20} />
          </NavLink>

          <div className="h-6 w-px bg-[#1F4A3F]/10"></div>

          <button 
            onClick={() => navigate('/')}
            className="text-[13px] font-bold text-[#1F4A3F]/70 hover:text-[#1F4A3F] transition-colors uppercase tracking-[0.1em]"
          >
            Log Out
          </button>
          
          <button className="px-7 py-3 bg-gradient-to-r from-[#D4A56A] to-[#c49555] text-white text-[12px] font-bold uppercase tracking-[0.15em] rounded-md transition-all shadow-[0_8px_20px_rgba(212,165,106,0.25)] hover:shadow-[0_12px_25px_rgba(212,165,106,0.4)] hover:-translate-y-0.5 ml-2">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="relative p-2 text-[#1F4A3F]/60 hover:text-[#1F4A3F] transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D4A56A] rounded-full border-2 border-[#FDFBF7]"></span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#1F4A3F]/80 hover:text-[#1F4A3F] bg-[#1F4A3F]/5 rounded-full transition-colors"
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
            className="fixed top-[88px] left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#1F4A3F]/10 z-40 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {/* Member Badge */}
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl shadow-sm border bg-white border-[#1F4A3F]/5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1F4A3F]/5 border border-[#1F4A3F]/10">
                  <User size={24} className="text-[#D4A56A]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#1F4A3F]">Member Portal</h3>
                  <p className="text-[12px] text-[#1F4A3F]/60 font-medium">Standard Tier</p>
                </div>
              </div>

              {navItems.map((item) => {
                const isActive = item.path === '/user' 
                  ? (pathname === '/user' || pathname.startsWith('/user/bookings') || pathname.startsWith('/user/history') || pathname.startsWith('/user/favorites'))
                  : pathname === item.path;
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                      isActive ? 'bg-white shadow-sm border border-[#1F4A3F]/5 text-[#D4A56A]' : 'text-[#1F4A3F]/80 hover:bg-[#1F4A3F]/5 hover:text-[#1F4A3F]'
                    }`}
                  >
                    <span className="text-[15px] font-semibold">{item.label}</span>
                  </NavLink>
                );
              })}
              
              <div className="h-px w-full bg-[#1F4A3F]/10 my-4"></div>
              
              <NavLink
                to="/user/settings"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  pathname === '/user/settings' ? 'bg-white shadow-sm border border-[#1F4A3F]/5 text-[#D4A56A]' : 'text-[#1F4A3F]/60 hover:bg-[#1F4A3F]/5 hover:text-[#1F4A3F]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  pathname === '/user/settings' ? 'bg-[#D4A56A]/10 text-[#D4A56A]' : 'bg-transparent text-[#1F4A3F]/40'
                }`}>
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

      {/* Premium Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A56A08,transparent_50%)]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4A56A]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1F4A3F]/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-[#D4A56A]/3 rounded-full blur-[80px]"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative pt-[88px] z-10">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Outlet />
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default UserLayout;
