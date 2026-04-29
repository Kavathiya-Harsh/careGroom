import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Professionals = () => {
  const navigate = useNavigate();
  const [selectedCrafts, setSelectedCrafts] = useState(['ALL DISCIPLINES']);
  const [selectedAesthetic, setSelectedAesthetic] = useState(null);

  const trending = [
    { id: 1, tag: 'WELLNESS', title: 'Holistic Massage', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80' },
    { id: 2, tag: 'GROOMING', title: 'Artisanal Barbering', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' },
    { id: 3, tag: 'AESTHETICS', title: 'Clinical Skincare', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
  ];

  const artisans = [
    {
      id: 1, name: 'Elias Vance', price: '$120', role: 'MASTER BARBER • HERITAGE GROOMING',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1520024146169-3240400354ae?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2, name: 'Clara Rossi', price: '$150', role: 'CREATIVE DIRECTOR • HAUTE STYLING',
      rating: 5.0,
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3, name: 'Marcus Thorne', price: '$180', role: 'THERAPIST • DEEP TISSUE SPECIALIST',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4, name: 'Julian Saint', price: '$300', role: 'COLORIST • EDITORIAL STYLING',
      rating: 5.0,
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const crafts = ['ALL DISCIPLINES', 'BARBERING', 'HAIR STYLING', 'MASSAGE THERAPY'];
  const aesthetics = ['MINIMALIST', 'CLASSIC', 'AVANT-GARDE'];

  const toggleCraft = (craft) => {
    if (craft === 'ALL DISCIPLINES') {
      setSelectedCrafts(['ALL DISCIPLINES']);
    } else {
      let newSelection = selectedCrafts.filter(c => c !== 'ALL DISCIPLINES');
      if (newSelection.includes(craft)) {
        newSelection = newSelection.filter(c => c !== craft);
      } else {
        newSelection.push(craft);
      }
      if (newSelection.length === 0) newSelection = ['ALL DISCIPLINES'];
      setSelectedCrafts(newSelection);
    }
  };

  return (
    <div className="w-full font-sans pb-0">
      {/* Hero Banner - Edge to Edge */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#1A362D] overflow-hidden flex items-center min-h-[360px] md:min-h-[400px]">
        {/* Subtle Mandala Pattern */}
        <div className="absolute top-[-50%] right-[-10%] w-[1000px] h-[1000px] pointer-events-none opacity-20 hidden md:block">
          <div className="absolute inset-0 rounded-full border-[1px] border-[#D4A56A] scale-[0.3]"></div>
          <div className="absolute inset-0 rounded-full border-[2px] border-[#D4A56A] scale-[0.4] border-dashed"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-[#D4A56A] scale-[0.5]"></div>
          <div className="absolute inset-0 rounded-full border-[2px] border-[#D4A56A] scale-[0.6] opacity-50"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-[#D4A56A] scale-[0.7] border-dotted"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-[#D4A56A] scale-[0.8]"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-[#D4A56A] scale-[0.9] opacity-30"></div>
          
          <div className="absolute inset-0 flex items-center justify-center text-[#D4A56A]">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-[50%] h-[1px] bg-[#D4A56A] origin-right opacity-30" style={{ transform: `rotate(${i * 30}deg)` }}></div>
            ))}
          </div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-16">
          <div className="max-w-[600px] border-l-[3px] border-[#D4A56A] pl-6 md:pl-8 py-2">
            <p className="text-[#D4A56A] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">The Elite Standard</p>
            <h1 className="font-serif text-[42px] md:text-[54px] text-white font-medium leading-[1.1] mb-6 tracking-tight">
              Featured Artisans
            </h1>
            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-lg italic font-serif">
              A curated collection of the world's most distinguished grooming masters. Every artisan undergoes a rigorous 5-point verification process to ensure unparalleled skill, technique, and artistry.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto pt-16 pb-20 px-6 md:px-8 lg:px-12">
        
        {/* Trending Experiences */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-[28px] md:text-[32px] text-[#1A362D]">Featured Services</h2>
            <button 
              onClick={() => {
                document.getElementById('all-artisans')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#D4A56A] text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#1A362D] transition-colors"
            >
              View All Curations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trending.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative h-[240px] lg:h-[280px] rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D]/90 via-[#1A362D]/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[#D4A56A] text-[10px] font-bold uppercase tracking-[0.2em]">{item.tag}</span>
                  <h3 className="font-serif text-[22px] lg:text-[24px] text-white mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="all-artisans" className="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] gap-12 xl:gap-16 pt-8 border-t border-[#1A362D]/10">
          
          {/* Sidebar */}
          <div className="space-y-12">
            
            {/* Craft Filter */}
            <div className="space-y-6">
              <h3 className="font-serif text-[22px] text-[#1A362D] font-medium">Craft</h3>
              <div className="space-y-4">
                {crafts.map(craft => (
                  <label key={craft} className="flex items-center gap-3 cursor-pointer group">
                    <div 
                      className={`w-3.5 h-3.5 flex items-center justify-center transition-colors border ${
                        selectedCrafts.includes(craft) 
                          ? 'bg-[#1A362D] border-[#1A362D]' 
                          : 'border-[#1A362D]/30 group-hover:border-[#1A362D]/60 bg-transparent'
                      }`}
                    >
                    </div>
                    <span className={`text-[11px] font-bold tracking-[0.15em] uppercase mt-0.5 ${selectedCrafts.includes(craft) ? 'text-[#1A362D]' : 'text-[#1A362D]/60'}`}>
                      {craft}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Slider */}
            <div className="space-y-6">
              <h3 className="font-serif text-[22px] text-[#1A362D] font-medium">Experience</h3>
              <div className="pt-2">
                <div className="h-[3px] bg-[#E2D8C7] rounded-full relative mb-4">
                  <div className="absolute left-[0%] right-[30%] h-full bg-[#D4A56A] rounded-full"></div>
                  <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E2D8C7] border-[3px] border-[#D4A56A] rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E2D8C7] border-[3px] border-[#D4A56A] rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-[#1A362D]/60">$50</span>
                  <span className="text-[12px] font-medium text-[#1A362D]/60">$500+</span>
                </div>
              </div>
            </div>

            {/* Aesthetic Filter */}
            <div className="space-y-6">
              <h3 className="font-serif text-[22px] text-[#1A362D] font-medium">Aesthetic</h3>
              <div className="flex flex-wrap gap-2">
                {aesthetics.map(aes => (
                  <button 
                    key={aes}
                    onClick={() => setSelectedAesthetic(aes === selectedAesthetic ? null : aes)}
                    className={`px-4 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-all rounded-sm ${
                      selectedAesthetic === aes 
                        ? 'bg-[#1A362D] text-white border border-[#1A362D]' 
                        : 'bg-transparent text-[#1A362D] border border-[#1A362D]/20 hover:border-[#1A362D]/50'
                    }`}
                  >
                    {aes}
                  </button>
                ))}
              </div>
            </div>
            
          </div>

          {/* Grid Area */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 xl:gap-x-10 xl:gap-y-16 mb-20">
              {artisans.map((artisan, index) => (
                <motion.div 
                  key={artisan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => navigate(`/artisan/${artisan.id}`)}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden mb-5">
                    <img src={artisan.img} alt={artisan.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                    
                    {/* Verified Badge */}
                    <div className="absolute top-4 right-4 bg-[#1A362D] px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A56A]">
                        Verified Master
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 px-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-[24px] xl:text-[28px] text-[#1A362D] font-medium tracking-tight">{artisan.name}</h3>
                      <div className="flex items-center gap-1.5">
                        <Star size={12} fill="#D4A56A" className="text-[#D4A56A]" />
                        <span className="text-[13px] font-medium text-[#1A362D]/70">{artisan.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <p className="text-[9px] xl:text-[10px] text-[#1A362D]/50 font-bold uppercase tracking-[0.2em] mb-6 line-clamp-1">
                      {artisan.role}
                    </p>
                    
                    <div className="mt-auto border-t border-[#1A362D]/10 pt-5 flex justify-between items-center">
                      <span className="text-[16px] xl:text-[18px] text-[#1A362D] italic font-serif font-bold tracking-wide">From {artisan.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/book/${artisan.id}`);
                        }}
                        className="px-5 py-2.5 bg-[#1A362D] text-[#D4A56A] text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#D4A56A] hover:text-white transition-colors shadow-sm"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-6 xl:gap-8 pb-10">
              <button className="text-[11px] xl:text-[12px] text-[#1A362D]/40 font-bold hover:text-[#1A362D] transition-colors uppercase tracking-widest">Previous</button>
              <div className="flex items-center gap-4 xl:gap-6">
                <button className="text-[11px] xl:text-[12px] font-bold text-[#D4A56A] border-b-[1.5px] border-[#D4A56A] pb-1">01</button>
                <button className="text-[11px] xl:text-[12px] font-bold text-[#1A362D]/40 hover:text-[#1A362D] transition-colors pb-1 border-b-[1.5px] border-transparent">02</button>
                <button className="text-[11px] xl:text-[12px] font-bold text-[#1A362D]/40 hover:text-[#1A362D] transition-colors pb-1 border-b-[1.5px] border-transparent">03</button>
              </div>
              <button className="text-[11px] xl:text-[12px] text-[#1A362D] font-bold hover:text-[#1A362D]/70 transition-colors uppercase tracking-widest">Next</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Professionals;
