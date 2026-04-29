import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, 
  Sparkles, 
  Wind, 
  Heart, 
  Search,
  Filter,
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Services', icon: Sparkles },
  { id: 'hair', label: 'Hair & Grooming', icon: Scissors },
  { id: 'skin', label: 'Skincare', icon: Wind },
  { id: 'body', label: 'Body & Wellness', icon: Heart },
];

const services = [
  {
    id: 1,
    category: 'hair',
    name: 'The Executive Cut',
    duration: '45 min',
    price: 85,
    rating: 4.9,
    reviews: 124,
    desc: 'A bespoke haircut tailored to your face shape, including a precise neck shave and signature styling.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'skin',
    name: 'Signature Botanical Facial',
    duration: '60 min',
    price: 145,
    rating: 5.0,
    reviews: 89,
    desc: 'A deep-cleansing ritual using organic botanical extracts to restore your natural radiance.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'body',
    name: 'Deep Tissue Restoration',
    duration: '90 min',
    price: 180,
    rating: 4.8,
    reviews: 210,
    desc: 'Targeted muscle therapy designed to release chronic tension and promote profound physical recovery.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d4046c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'hair',
    name: 'Royal Hot Towel Shave',
    duration: '30 min',
    price: 55,
    rating: 4.9,
    reviews: 76,
    desc: 'Traditional straight razor shave with essential oils, hot towels, and a soothing post-shave balm.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'skin',
    name: 'Oxygen Rejuvenation',
    duration: '75 min',
    price: 165,
    rating: 4.7,
    reviews: 45,
    desc: 'Advanced oxygen-infusion therapy to instantly plump, hydrate, and brighten the complexion.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'body',
    name: 'Aromatherapy Sanctuary',
    duration: '60 min',
    price: 120,
    rating: 4.9,
    reviews: 156,
    desc: 'A holistic sensory experience combining therapeutic massage with curated essential oil blends.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80'
  }
];

const UserServices = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(svc => {
    const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
    const matchesSearch = svc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         svc.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header Section ── */}
      <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4A56A] mb-3"
          >
            Curated Experiences
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-[42px] md:text-[54px] text-[#1F4A3F] font-medium leading-none mb-6"
          >
            Bespoke Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-[#1F4A3F]/60 leading-relaxed"
          >
            Discover our collection of premium grooming and wellness treatments, each delivered with unparalleled precision by our master artisans.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full lg:w-[320px]"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F4A3F]/30" size={18} />
          <input 
            type="text" 
            placeholder="Search treatments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#1F4A3F]/10 rounded-full py-4 pl-12 pr-6 text-[14px] text-[#1F4A3F] placeholder:text-[#1F4A3F]/30 focus:outline-none focus:ring-2 focus:ring-[#D4A56A]/20 transition-all shadow-sm"
          />
        </motion.div>
      </div>

      {/* ── Categories Filter ── */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold transition-all duration-300 border ${
              activeCategory === cat.id 
                ? 'bg-[#1F4A3F] text-[#D4A56A] border-[#1F4A3F] shadow-lg shadow-[#1F4A3F]/10' 
                : 'bg-white text-[#1F4A3F]/60 border-[#1F4A3F]/5 hover:border-[#1F4A3F]/20'
            }`}
          >
            <cat.icon size={16} className={activeCategory === cat.id ? 'text-[#D4A56A]' : 'text-[#1F4A3F]/30'} />
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* ── Services Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((svc, i) => (
          <motion.div
            key={svc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(31,74,63,0.03)] border border-[#1F4A3F]/5 hover:shadow-[0_20px_60px_rgba(31,74,63,0.08)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Section */}
            <div className="relative h-[240px] overflow-hidden">
              <img 
                src={svc.image} 
                alt={svc.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(svc.name)}&background=1F4A3F&color=D4A56A&size=512`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                <Star size={12} className="text-[#D4A56A]" fill="currentColor" />
                <span className="text-[11px] font-bold text-[#1F4A3F]">{svc.rating}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#D4A56A]">
                  <Clock size={12} />
                  {svc.duration}
                </div>
                <div className="h-1 w-1 rounded-full bg-[#1F4A3F]/10" />
                <div className="text-[10px] font-black uppercase tracking-[0.15em] text-[#1F4A3F]/40">
                  {svc.category}
                </div>
              </div>

              <h3 className="font-serif text-[24px] text-[#1F4A3F] font-medium mb-3 group-hover:text-[#D4A56A] transition-colors">
                {svc.name}
              </h3>
              
              <p className="text-[14px] text-[#1F4A3F]/60 leading-relaxed mb-8 line-clamp-2">
                {svc.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#1F4A3F]/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#1F4A3F]/30 uppercase tracking-widest leading-none mb-1">Starting from</span>
                  <span className="text-[20px] font-bold text-[#1F4A3F] leading-none">${svc.price}</span>
                </div>
                
                <button className="flex items-center gap-2 text-[12px] font-bold text-[#1F4A3F] uppercase tracking-widest group/btn">
                  Book <ArrowRight size={16} className="text-[#D4A56A] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="py-32 text-center"
        >
          <div className="w-20 h-20 bg-[#F5F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={32} className="text-[#1F4A3F]/20" />
          </div>
          <h3 className="font-serif text-[24px] text-[#1F4A3F] mb-2">No treatments found</h3>
          <p className="text-[#1F4A3F]/40 max-w-sm mx-auto">We couldn't find any services matching your search criteria. Please try another term.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="mt-8 text-[#D4A56A] font-bold text-[13px] uppercase tracking-[0.2em] hover:text-[#1F4A3F] transition-colors"
          >
            View all services
          </button>
        </motion.div>
      )}

    </div>
  );
};

export default UserServices;
