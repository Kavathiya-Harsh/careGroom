import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AdminNavbar from '../../admin/AdminNavbar';
import Footer from '../Footer';

const AdminLayout = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream relative">
      {/* Admin Navbar */}
      <AdminNavbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

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

export default AdminLayout;
