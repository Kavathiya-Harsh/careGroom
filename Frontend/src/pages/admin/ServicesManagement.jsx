import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ArrowDownUp, 
  Star, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  Users,
  DollarSign,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Scissors,
  Sparkles
} from 'lucide-react';

const serviceCategories = [
  { name: 'All Services', count: 24 },
  { name: 'Barbering', count: 5 },
  { name: 'Hair Styling', count: 4 },
  { name: 'Massage Therapy', count: 6 },
  { name: 'Skincare', count: 4 },
  { name: 'Nail Care', count: 3 },
  { name: 'Makeup', count: 2 },
];

const services = [
  {
    id: 1,
    name: 'Precision Cut & Style',
    category: 'Barbering',
    description: 'Expert cutting technique tailored to face shape and hair texture.',
    price: '$85',
    duration: '60 min',
    artisans: 12,
    bookings: 420,
    rating: 4.9,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Hot Towel Shave',
    category: 'Barbering',
    description: 'Classic hot towel shave with premium oils and aftercare.',
    price: '$65',
    duration: '45 min',
    artisans: 8,
    bookings: 310,
    rating: 4.8,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Balayage & Highlights',
    category: 'Hair Styling',
    description: 'Hand-painted color technique for natural, sun-kissed dimension.',
    price: '$180',
    duration: '150 min',
    artisans: 6,
    bookings: 245,
    rating: 5.0,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'Signature Blowout',
    category: 'Hair Styling',
    description: 'Luxurious wash, condition, and styled blowout with premium products.',
    price: '$95',
    duration: '60 min',
    artisans: 9,
    bookings: 380,
    rating: 4.7,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 5,
    name: 'Deep Tissue Massage',
    category: 'Massage Therapy',
    description: 'Intensive pressure targeting chronic muscle tension and recovery.',
    price: '$150',
    duration: '90 min',
    artisans: 14,
    bookings: 580,
    rating: 4.9,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 6,
    name: 'Aromatherapy Session',
    category: 'Massage Therapy',
    description: 'Holistic massage using essential oils for deep relaxation.',
    price: '$130',
    duration: '75 min',
    artisans: 10,
    bookings: 420,
    rating: 5.0,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 7,
    name: 'Botanical Facial',
    category: 'Skincare',
    description: 'Signature facial using organic botanical extracts and serums.',
    price: '$120',
    duration: '75 min',
    artisans: 8,
    bookings: 350,
    rating: 4.9,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 8,
    name: 'HydraFacial Treatment',
    category: 'Skincare',
    description: 'Multi-step treatment that cleanses, exfoliates, and hydrates.',
    price: '$200',
    duration: '60 min',
    artisans: 5,
    bookings: 190,
    rating: 4.8,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 9,
    name: 'Gel Manicure',
    category: 'Nail Care',
    description: 'Long-lasting gel polish with cuticle care and hand massage.',
    price: '$65',
    duration: '45 min',
    artisans: 7,
    bookings: 290,
    rating: 4.7,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 10,
    name: 'Bridal Makeup',
    category: 'Makeup',
    description: 'Full bridal look with trial session and premium cosmetics.',
    price: '$350',
    duration: '120 min',
    artisans: 4,
    bookings: 85,
    rating: 5.0,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 11,
    name: 'Sports Recovery Massage',
    category: 'Massage Therapy',
    description: 'Performance-focused therapy for athletes and active lifestyles.',
    price: '$140',
    duration: '60 min',
    artisans: 6,
    bookings: 310,
    rating: 4.8,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 12,
    name: 'Luxury Nail Art',
    category: 'Nail Care',
    description: 'Custom hand-painted designs with premium embellishments.',
    price: '$95',
    duration: '75 min',
    artisans: 4,
    bookings: 165,
    rating: 4.9,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=300&q=80'
  },
];

const statusConfig = {
  active: { label: 'ACTIVE', bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  paused: { label: 'PAUSED', bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' },
  inactive: { label: 'INACTIVE', bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20' },
};

const ServicesManagement = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filtered = services.filter(s => {
    const matchesCategory = activeCategory === 'All Services' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-2"
          >
            Service Catalogue
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-[#1F4A3F]/60 max-w-lg"
          >
            Manage all available services across the CareGroom marketplace. Configure pricing, artisan assignments, and service availability.
          </motion.p>
        </div>

        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 px-6 py-3 bg-[#1F4A3F] rounded-lg text-[12px] font-bold text-[#D4A56A] hover:bg-[#1F4A3F]/90 transition-colors shadow-sm shrink-0"
        >
          <Plus size={16} />
          Add New Service
        </motion.button>
      </div>

      {/* ── Category Tabs ── */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {serviceCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => { setActiveCategory(cat.name); setCurrentPage(1); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[12px] font-bold transition-all border ${
              activeCategory === cat.name 
                ? 'bg-[#1F4A3F] text-[#D4A56A] border-[#1F4A3F] shadow-sm' 
                : 'bg-white text-[#1F4A3F]/60 border-[#1F4A3F]/10 hover:border-[#D4A56A]/30 hover:text-[#1F4A3F]'
            }`}
          >
            {cat.name}
            <span className={`text-[10px] font-black ${activeCategory === cat.name ? 'text-[#D4A56A]/60' : 'text-[#1F4A3F]/30'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ── Search & Actions Bar ── */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
      >
        <div className="flex-1 flex items-center gap-3 bg-white border border-[#1F4A3F]/10 rounded-lg px-4 py-2.5 shadow-sm focus-within:border-[#D4A56A]/40 transition-colors">
          <Search size={16} className="text-[#1F4A3F]/30 shrink-0" />
          <input 
            type="text"
            placeholder="Search services..."
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

      {/* ── Services Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filtered.map((service, i) => {
          const status = statusConfig[service.status];
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="bg-white rounded-2xl border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] overflow-hidden hover:shadow-[0_15px_50px_rgba(31,74,63,0.06)] transition-shadow group"
            >
              {/* Service Image */}
              <div className="relative h-[160px] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3F]/40 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-[0.15em] border backdrop-blur-sm ${status.bg} ${status.text} ${status.border}`}>
                    <CheckCircle size={8} className="mr-1" />
                    {status.label}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[16px] font-bold text-[#1F4A3F] leading-snug flex-1">{service.name}</h3>
                  <div className="flex items-center gap-1 shrink-0 ml-3">
                    <Star size={12} className="text-[#D4A56A]" fill="currentColor" />
                    <span className="text-[13px] font-bold text-[#1F4A3F]">{service.rating}</span>
                  </div>
                </div>
                <p className="text-[12px] text-[#1F4A3F]/50 leading-relaxed mb-5">{service.description}</p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-y border-[#1F4A3F]/5">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <DollarSign size={10} className="text-[#D4A56A]" />
                      <span className="text-[14px] font-bold text-[#1F4A3F]">{service.price}</span>
                    </div>
                    <p className="text-[9px] text-[#1F4A3F]/40 font-medium uppercase tracking-wider">Price</p>
                  </div>
                  <div className="text-center border-x border-[#1F4A3F]/5">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <Clock size={10} className="text-[#1F4A3F]/40" />
                      <span className="text-[14px] font-bold text-[#1F4A3F]">{service.duration}</span>
                    </div>
                    <p className="text-[9px] text-[#1F4A3F]/40 font-medium uppercase tracking-wider">Duration</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <Users size={10} className="text-[#1F4A3F]/40" />
                      <span className="text-[14px] font-bold text-[#1F4A3F]">{service.artisans}</span>
                    </div>
                    <p className="text-[9px] text-[#1F4A3F]/40 font-medium uppercase tracking-wider">Artisans</p>
                  </div>
                </div>

                {/* Footer: Bookings + Actions */}
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-[#1F4A3F]/40 font-medium">
                    <span className="font-bold text-[#1F4A3F]">{service.bookings}</span> total bookings
                  </p>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => navigate(`/admin/services/${service.id}`)}
                      className="w-8 h-8 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F] hover:text-white hover:border-[#1F4A3F] transition-all" 
                      title="View"
                    >
                      <Eye size={13} />
                    </button>
                    <button className="w-8 h-8 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#D4A56A] hover:text-white hover:border-[#D4A56A] transition-all" title="Edit">
                      <Edit size={13} />
                    </button>
                    <button className="w-8 h-8 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all" title="Remove">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Summary Stats Bar ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="bg-[#1F4A3F] rounded-2xl p-8 mb-10 relative overflow-hidden"
      >
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Total Services</p>
            <p className="font-serif text-[32px] text-[#D4A56A] leading-none">24</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Categories</p>
            <p className="font-serif text-[32px] text-white leading-none">6</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Avg. Price</p>
            <p className="font-serif text-[32px] text-[#D4A56A] leading-none">$132</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Total Bookings</p>
            <p className="font-serif text-[32px] text-white leading-none">3,745</p>
          </div>
        </div>
      </motion.div>

      {/* ── Pagination ── */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="flex items-center justify-between px-2"
      >
        <p className="text-[13px] text-[#1F4A3F]/50">
          Showing {filtered.length} of 24 services
        </p>
        <div className="flex items-center gap-2">
          <button disabled className="w-9 h-9 rounded-lg border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/40 disabled:opacity-30">
            <ChevronLeft size={16} />
          </button>
          {[1, 2].map(page => (
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
          <button className="w-9 h-9 rounded-lg border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F]/5 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesManagement;
