import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ArrowDownUp, 
  Star, 
  MapPin, 
  Shield,
  ChevronLeft,
  ChevronRight,
  Eye,
  Ban,
  Mail,
  CheckCircle
} from 'lucide-react';

const artisans = [
  {
    id: 'ART-1024',
    name: 'Julianne Moreau',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    specialty: 'Master Esthetician',
    services: 'Botanical Facials, Microdermabrasion',
    location: 'Manhattan, NY',
    rating: 4.9,
    reviews: 248,
    bookings: 1420,
    joined: 'Jan 2022',
    status: 'active'
  },
  {
    id: 'ART-1031',
    name: 'Marcus Thompson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    specialty: 'Senior Barber',
    services: 'Precision Cutting, Hot Towel Shave',
    location: 'Brooklyn, NY',
    rating: 4.8,
    reviews: 186,
    bookings: 980,
    joined: 'Mar 2022',
    status: 'active'
  },
  {
    id: 'ART-1045',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    specialty: 'Aromatherapist',
    services: 'Deep Tissue, Swedish Massage',
    location: 'Austin, TX',
    rating: 5.0,
    reviews: 312,
    bookings: 1780,
    joined: 'Nov 2021',
    status: 'active'
  },
  {
    id: 'ART-1052',
    name: 'Daniel Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    specialty: 'Skincare Specialist',
    services: 'Clinical Facials, Chemical Peels',
    location: 'Seattle, WA',
    rating: 4.7,
    reviews: 94,
    bookings: 540,
    joined: 'Jun 2023',
    status: 'active'
  },
  {
    id: 'ART-1060',
    name: 'Sofia Delgado',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    specialty: 'Hair Colorist',
    services: 'Balayage, Color Correction, Highlights',
    location: 'Miami, FL',
    rating: 4.9,
    reviews: 167,
    bookings: 890,
    joined: 'Sep 2022',
    status: 'active'
  },
  {
    id: 'ART-1068',
    name: 'James Okafor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    specialty: 'Massage Therapist',
    services: 'Sports Recovery, Lymphatic Drainage',
    location: 'Chicago, IL',
    rating: 4.8,
    reviews: 203,
    bookings: 1150,
    joined: 'Feb 2022',
    status: 'active'
  },
];

const ArtisanDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const totalEntries = 342;

  const filtered = artisans.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
          >
            Verified Artisans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-[#1F4A3F]/60 max-w-lg"
          >
            Active, verified professionals currently serving on the CareGroom marketplace.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 px-4 py-2.5 bg-[#1F4A3F] rounded-lg shadow-sm"
        >
          <Shield size={16} className="text-[#D4A56A]" />
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-widest uppercase text-white/50 leading-tight">Total Active</span>
            <span className="text-[16px] font-bold text-white leading-tight">{totalEntries}</span>
          </div>
        </motion.div>
      </div>

      {/* ── Search & Filters ── */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
      >
        <div className="flex-1 flex items-center gap-3 bg-white border border-[#1F4A3F]/10 rounded-lg px-4 py-2.5 shadow-sm focus-within:border-[#D4A56A]/40 transition-colors">
          <Search size={16} className="text-[#1F4A3F]/30 shrink-0" />
          <input 
            type="text"
            placeholder="Search by name, specialty, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#1F4A3F] placeholder:text-[#1F4A3F]/30"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#1F4A3F]/15 rounded-lg text-[12px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors shadow-sm shrink-0">
          <Filter size={14} className="text-[#1F4A3F]/50" />
          Filter
        </button>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#1F4A3F]/15 rounded-lg text-[12px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors shadow-sm shrink-0">
          <ArrowDownUp size={14} className="text-[#1F4A3F]/50" />
          Sort
        </button>
      </motion.div>

      {/* ── Artisan Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {filtered.map((artisan, i) => (
          <motion.div 
            key={artisan.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
            className="bg-white rounded-2xl border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] p-7 hover:shadow-[0_15px_50px_rgba(31,74,63,0.06)] transition-shadow group"
          >
            {/* Top: Avatar + Info */}
            <div className="flex items-start gap-5 mb-6">
              <div className="relative shrink-0">
                <img 
                  src={artisan.avatar} 
                  alt={artisan.name} 
                  className="w-16 h-16 rounded-full object-cover border-[3px] border-[#F5F2EB] shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle size={10} className="text-white" fill="currentColor" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[17px] font-bold text-[#1F4A3F] truncate">{artisan.name}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-[8px] font-black uppercase tracking-wider text-green-600 shrink-0">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[14px] text-[#D4A56A] font-semibold mb-0.5">{artisan.specialty}</p>
                <p className="text-[12px] text-[#1F4A3F]/50">{artisan.services}</p>
              </div>
            </div>

            {/* Middle: Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-5 border-y border-[#1F4A3F]/5">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star size={12} className="text-[#D4A56A]" fill="currentColor" />
                  <span className="text-[16px] font-bold text-[#1F4A3F]">{artisan.rating}</span>
                </div>
                <p className="text-[10px] text-[#1F4A3F]/40 font-medium">{artisan.reviews} reviews</p>
              </div>
              <div className="text-center border-x border-[#1F4A3F]/5">
                <p className="text-[16px] font-bold text-[#1F4A3F] mb-1">{artisan.bookings.toLocaleString()}</p>
                <p className="text-[10px] text-[#1F4A3F]/40 font-medium">bookings</p>
              </div>
              <div className="text-center">
                <p className="text-[16px] font-bold text-[#1F4A3F] mb-1">{artisan.joined}</p>
                <p className="text-[10px] text-[#1F4A3F]/40 font-medium">joined</p>
              </div>
            </div>

            {/* Bottom: Location + Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#1F4A3F]/50">
                <MapPin size={13} />
                <span className="text-[12px] font-medium">{artisan.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => navigate(`/admin/users/${artisan.id}`)}
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F] hover:text-white hover:border-[#1F4A3F] transition-all"
                  title="View Profile"
                >
                  <Eye size={14} />
                </button>
                <button 
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#D4A56A] hover:text-white hover:border-[#D4A56A] transition-all"
                  title="Send Message"
                >
                  <Mail size={14} />
                </button>
                <button 
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                  title="Suspend Artisan"
                >
                  <Ban size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Pagination ── */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="flex items-center justify-between px-2"
      >
        <p className="text-[13px] text-[#1F4A3F]/50">
          Showing 1 to {filtered.length} of {totalEntries} artisans
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-lg border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F]/5 transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map(page => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg text-[13px] font-bold transition-all ${
                currentPage === page 
                  ? 'bg-[#1F4A3F] text-white shadow-sm' 
                  : 'border border-[#1F4A3F]/10 text-[#1F4A3F]/60 hover:bg-[#1F4A3F]/5'
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            disabled={currentPage === 3}
            className="w-9 h-9 rounded-lg border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F]/5 transition-colors disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtisanDirectory;
