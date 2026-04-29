import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F4A3F] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block font-serif text-[28px] font-bold text-white tracking-tight mb-4 hover:opacity-90 transition-opacity">
              CareGroom<span className="text-[#D4A56A]">.</span>
            </Link>
            <p className="text-[#FDFBF7]/60 text-[15px] max-w-sm leading-relaxed">
              Artisanal wellness, delivered to your door.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#D4A56A] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Facial Treatments</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Grooming</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Spa Rituals</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Hair Care</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[#D4A56A] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Press</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-[#D4A56A] text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-[#FDFBF7]/70 text-[14px] hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FDFBF7]/10 flex items-center justify-center">
          <p className="text-[#FDFBF7]/50 text-[13px] font-medium tracking-wide">
            © 2026 CareGroom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
