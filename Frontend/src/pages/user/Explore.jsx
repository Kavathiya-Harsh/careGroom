import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState(['Barbering']);
  const [selectedDuration, setSelectedDuration] = useState('Any');

  const trending = [
    { id: 1, tag: 'WELLNESS', title: 'Holistic Massage', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80' },
    { id: 2, tag: 'GROOMING', title: 'Artisanal Barbering', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' },
    { id: 3, tag: 'AESTHETICS', title: 'Clinical Skincare', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
  ];

  const artisans = [
    {
      id: 1, name: 'Elias Vance', price: '$85+', role: 'Master Barber - 120 Bookings',
      rating: 4.9, category: 'BARBERING', tags: ['Precision Cut', 'Hot Towel'],
      img: 'https://images.unsplash.com/photo-1520024146169-3240400354ae?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2, name: 'Clara Rossi', price: '$120+', role: 'Senior Stylist - 85 Bookings',
      rating: 4.8, category: 'HAIR STYLING', tags: ['Balayage', 'Blowout'],
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3, name: 'Marcus Thorne', price: '$150+', role: 'Therapeutic Massage - 200+ Bookings',
      rating: 5.0, category: 'MASSAGE', tags: ['Deep Tissue', 'Aromatherapy'],
      img: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4, name: 'Sophia Lin', price: '$130+', role: 'Lead Esthetician - 150 Bookings',
      rating: 4.9, category: 'SKINCARE', tags: ['Hydrafacial', 'Dermaplaning'],
      img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5, name: 'Amara Patel', price: '$65+', role: 'Nail Artist - 90 Bookings',
      rating: 4.7, category: 'NAIL CARE', tags: ['Gel Manicure', 'Nail Art'],
      img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6, name: 'Elena Rodriguez', price: '$180+', role: 'Celebrity MUA - 45 Bookings',
      rating: 5.0, category: 'MAKEUP', tags: ['Bridal', 'Editorial'],
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const categories = ['Barbering', 'Hair Styling', 'Massage Therapy', 'Skincare'];
  const availability = ['Anytime', 'Today', 'This Week', 'Next Week'];
  const durations = ['Any', '< 1 hr', '1-2 hrs', '2+ hrs'];

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  return (
    <div className="w-full pb-24 font-sans text-[#1F4A3F] pt-12">
      
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="w-full bg-[#1F4A3F] rounded-2xl p-8 md:p-14 text-white relative overflow-hidden mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8"
      >
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-[#D4A56A]/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-2xl relative z-10">
          <p className="text-[#D4A56A] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">The CareGroom Standard</p>
          <h1 className="font-serif text-[36px] md:text-[48px] font-medium leading-[1.1] mb-6">
            Meticulously Vetted.<br/>Uncompromisingly Elite.
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-xl">
            Every artisan on our platform undergoes a rigorous 5-point verification process, ensuring only the master class of grooming and wellness professionals cater to your needs.
          </p>
        </div>

        <div className="relative z-10 flex items-center">
           <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Artisan" className="w-14 h-14 rounded-full border-2 border-[#1F4A3F] object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Artisan" className="w-14 h-14 rounded-full border-2 border-[#1F4A3F] object-cover" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Artisan" className="w-14 h-14 rounded-full border-2 border-[#1F4A3F] object-cover" />
              <div className="w-14 h-14 rounded-full border-2 border-[#1F4A3F] bg-[#D4A56A] flex items-center justify-center text-white text-[12px] font-bold shadow-sm">
                +500
              </div>
           </div>
        </div>
      </motion.div>

      {/* Trending Experiences */}
      <div className="mb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-serif text-[28px] text-[#1F4A3F]">Trending Experiences</h2>
          <button 
            onClick={() => {
              document.getElementById('all-services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#D4A56A] text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#1F4A3F] transition-colors"
          >
            View All Curations
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trending.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative h-[240px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3F]/90 via-[#1F4A3F]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-[#D4A56A] text-[10px] font-bold uppercase tracking-[0.2em]">{item.tag}</span>
                <h3 className="font-serif text-[22px] text-white mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Filter & Grid Layout */}
      <div id="all-services" className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 pt-8">
        
        {/* Bespoke Sidebar Filters */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-[#1F4A3F]/5 pb-6">
            <h3 className="font-serif text-[24px] text-[#1F4A3F]">Refine Selection</h3>
            <SlidersHorizontal size={18} className="text-[#D4A56A]" />
          </div>
          
          {/* Category Selection */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1F4A3F]/40 flex items-center gap-3">
              Specialization <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
            </h4>
            <div className="space-y-4">
              {categories.map(cat => (
                <label key={cat} className="flex items-center justify-between cursor-pointer group">
                  <span className={`text-[14px] font-medium transition-colors ${selectedCategories.includes(cat) ? 'text-[#D4A56A]' : 'text-[#1F4A3F]/70 group-hover:text-[#1F4A3F]'}`}>
                    {cat}
                  </span>
                  <div 
                    onClick={() => toggleCategory(cat)}
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      selectedCategories.includes(cat) 
                        ? 'bg-[#1F4A3F] scale-110 shadow-md' 
                        : 'bg-[#1F4A3F]/5 group-hover:bg-[#D4A56A]/20'
                    }`}
                  >
                    {selectedCategories.includes(cat) && <Check size={12} className="text-[#D4A56A]" />}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range - Luxury Slider */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1F4A3F]/40 flex items-center gap-3">
              Price Range <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
            </h4>
            <div className="px-2">
              <div className="h-1 bg-[#1F4A3F]/5 rounded-full relative mb-6">
                <div className="absolute left-0 right-[30%] h-full bg-[#D4A56A] rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#D4A56A] rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#D4A56A] rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-[11px] font-bold text-[#1F4A3F]/40 block uppercase tracking-tighter">Min</span>
                  <span className="text-[14px] font-bold text-[#1F4A3F]">$50</span>
                </div>
                <div className="h-px w-4 bg-[#1F4A3F]/10"></div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-right">
                  <span className="text-[11px] font-bold text-[#1F4A3F]/40 block uppercase tracking-tighter">Max</span>
                  <span className="text-[14px] font-bold text-[#1F4A3F]">$450+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Radios */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1F4A3F]/40 flex items-center gap-3">
              Availability <div className="h-px flex-1 bg-[#1F4A3F]/5"></div>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {availability.map((av, i) => (
                <button 
                  key={av}
                  className={`px-4 py-3 rounded-xl text-[12px] font-bold border transition-all ${
                    i === 0 ? 'bg-[#1F4A3F] text-[#D4A56A] border-[#1F4A3F]' : 'bg-white text-[#1F4A3F]/60 border-[#1F4A3F]/5 hover:border-[#D4A56A]/30 hover:text-[#1F4A3F]'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <button className="w-full py-5 bg-gradient-to-r from-[#1F4A3F] to-[#2d6355] text-[#D4A56A] rounded-2xl text-[12px] font-black uppercase tracking-[0.25em] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Apply Filters
            </button>
            <button className="w-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/30 hover:text-[#1F4A3F] transition-colors">
              Reset Selection
            </button>
          </div>
        </div>

        {/* Artisans Grid Area */}
        <div className="flex-1">
          {/* Grid Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#1F4A3F]/5 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <div className="h-px w-8 bg-[#D4A56A]"></div>
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D4A56A]">Curated Selection</span>
              </div>
              <h2 className="font-serif text-[36px] text-[#1F4A3F] leading-tight">Featured Artisans</h2>
            </div>
            <div className="flex items-center gap-8 text-[13px] text-[#1F4A3F]/50">
              <span className="font-medium">18 Master Professionals</span>
              <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all group">
                <span className="text-[#1F4A3F]/70 group-hover:text-[#1F4A3F]">Sort: <strong>Featured</strong></span>
                <ChevronDown size={14} className="text-[#D4A56A]" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
            {artisans.map((artisan, index) => (
              <motion.div 
                key={artisan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className="group cursor-pointer"
                onClick={() => navigate(`/user/artisan/${artisan.id}`)}
              >
                <div className="relative h-[360px] rounded-2xl overflow-hidden mb-6 shadow-[0_15px_35px_rgba(31,74,63,0.08)]">
                  <img src={artisan.img} alt={artisan.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                    <Star size={14} fill="#D4A56A" className="text-[#D4A56A]" />
                    <span className="text-[13px] font-black text-[#1F4A3F]">{artisan.rating}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#1F4A3F]/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-lg">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4A56A]">{artisan.category}</span>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/user/artisan/${artisan.id}`);
                      }}
                      className="px-5 py-2 bg-white text-[#1F4A3F] rounded-md text-[9px] font-black uppercase tracking-[0.15em] shadow-2xl hover:bg-[#D4A56A] hover:text-white transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-[22px] text-[#1F4A3F] font-medium tracking-tight group-hover:text-[#D4A56A] transition-colors">{artisan.name}</h3>
                    <div className="text-right">
                      <span className="text-[15px] font-black text-[#1F4A3F]">{artisan.price}</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#1F4A3F]/50 font-medium mb-5">{artisan.role}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {artisan.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-[#FDFBF7] rounded-full text-[11px] font-bold text-[#1F4A3F]/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center flex flex-col items-center">
            <p className="font-serif italic text-[16px] text-[#1F4A3F]/60 mb-6">
              Explore the full collection of master artisans
            </p>
            <button className="px-8 py-4 bg-[#1F4A3F] text-white rounded-lg text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#D4A56A] transition-colors shadow-md">
              Discover More Talent
            </button>
            <div className="w-12 h-1 bg-[#D4A56A] mt-10 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Explore;
