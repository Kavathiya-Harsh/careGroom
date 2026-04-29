import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, User, Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '#explore' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Collections', href: '#collections' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__logo">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1F4A3F] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            <Heart size={18} className="text-[#D4A56A]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[26px] font-bold text-[#1F4A3F] tracking-tight leading-none group-hover:opacity-90 transition-opacity">
              CareGroom<span className="text-[#D4A56A]">.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4A56A]/70 mt-0.5">
              The Art of Care
            </span>
          </div>
        </div>
      </div>

      <ul className="navbar__links">
        {navLinks.map((link, i) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          >
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </ul>

      <div className="navbar__actions">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="hidden md:block"
        >
          <Link to="/auth" className="flex items-center gap-2 text-[13px] font-bold text-[#1F4A3F]/70 hover:text-[#1F4A3F] transition-colors uppercase tracking-[0.1em]">
            <User size={16} />
            Sign In
          </Link>
        </motion.div>
        
        <div className="h-6 w-px bg-[#1F4A3F]/10 hidden md:block"></div>

        <MagneticButton>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <Link to="/auth" className="px-7 py-3 bg-gradient-to-r from-[#D4A56A] to-[#c49555] text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-md transition-all shadow-[0_8px_20px_rgba(212,165,106,0.25)] hover:shadow-[0_12px_25px_rgba(212,165,106,0.4)] hover:-translate-y-0.5">
              Reserve
            </Link>
          </motion.div>
        </MagneticButton>

        <button 
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[88px] left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#1F4A3F]/10 z-40 md:hidden overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 space-y-2">
              {/* Brand Badge */}
              <div className="flex items-center gap-4 mb-8 p-4 rounded-xl shadow-sm border bg-white border-[#1F4A3F]/5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1F4A3F]/5 border border-[#1F4A3F]/10">
                  <Heart size={24} className="text-[#D4A56A]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#1F4A3F]">CareGroom Portal</h3>
                  <p className="text-[12px] text-[#1F4A3F]/60 font-medium">The Art of Living</p>
                </div>
              </div>

              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#1F4A3F]/80 hover:bg-[#1F4A3F]/5 hover:text-[#1F4A3F] transition-all font-semibold"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-px w-full bg-[#1F4A3F]/10 my-6"></div>
              
              <Link 
                to="/auth" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-[#1F4A3F] text-[#D4A56A] rounded-xl font-bold uppercase tracking-[0.1em] text-[13px] shadow-sm hover:opacity-90 transition-opacity"
              >
                Sign In / Reserve
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
