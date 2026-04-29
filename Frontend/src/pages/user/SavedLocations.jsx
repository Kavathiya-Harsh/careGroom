import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Palmtree, Plus, Edit2, Trash2, Star, MapPin } from 'lucide-react';

const SavedLocations = () => {
  const navigate = useNavigate();

  const locations = [
    {
      id: 1,
      type: 'Residence',
      icon: <Home size={18} className="text-[#1A362D]" />,
      name: 'The Astor Suite',
      address1: '1000 5th Avenue, Apt 4B',
      address2: 'New York, NY 10028',
      instructions: 'Check in with doorman. Service elevator in rear.',
      isPrimary: true,
      mapImg: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      type: 'Office',
      icon: <Building2 size={18} className="text-[#1A362D]" />,
      name: 'Vanguard Group HQ',
      address1: '30 Hudson Yards, Fl 68',
      address2: 'New York, NY 10001',
      instructions: 'Visitor pass required at lobby. Proceed to executive wing.',
      isPrimary: false,
      mapImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      type: 'Hamptons Estate',
      icon: <Palmtree size={18} className="text-[#1A362D]" />,
      name: 'Summer Retreat',
      address1: '45 Meadow Lane',
      address2: 'Southampton, NY 11968',
      instructions: 'Enter through the secondary gate. Code provided upon booking.',
      isPrimary: false,
      mapImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen font-sans text-[#1A362D] pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[36px] md:text-[42px] font-medium text-[#1A362D] mb-4">
              Saved Locations
            </h1>
            <p className="text-[14px] text-[#1A362D]/70 font-medium leading-relaxed">
              Manage the physical addresses where you receive our premium on-demand services. Ensure your primary location is up to date for seamless booking.
            </p>
          </div>
          <button className="shrink-0 px-6 py-3.5 bg-[#D4A56A] text-white rounded-md text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#1A362D] transition-colors shadow-sm flex items-center gap-2">
            <Plus size={16} /> Add New Address
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {locations.map((loc, i) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FDFBF7] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(26,54,45,0.03)] border border-[#1A362D]/5 flex flex-col"
            >
              {/* Card Header (Map Background) */}
              <div className="h-40 relative w-full overflow-hidden">
                <img src={loc.mapImg} alt="Map" className={`w-full h-full object-cover transition-all ${loc.isPrimary ? 'opacity-90 saturate-50' : 'opacity-30 mix-blend-luminosity grayscale'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/60 to-transparent"></div>
                <div className="absolute inset-0 bg-[#D4A56A]/10 mix-blend-overlay"></div>
                
                {loc.isPrimary && (
                  <div className="absolute top-5 right-5 bg-white/95 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-[#D4A56A]/20">
                    <Star size={12} className="text-[#D4A56A]" fill="#D4A56A" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A362D]">Primary</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="px-8 pb-8 flex-1 flex flex-col -mt-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  {loc.icon}
                  <h3 className="font-serif text-[24px] font-medium text-[#1A362D]">{loc.type}</h3>
                </div>

                <div className="mb-8 flex-1">
                  <h4 className="text-[14px] font-bold text-[#1A362D] mb-3">{loc.name}</h4>
                  <p className="text-[14px] text-[#1A362D]/70 mb-1">{loc.address1}</p>
                  <p className="text-[14px] text-[#1A362D]/70">{loc.address2}</p>
                  <p className="text-[13px] text-[#1A362D]/50 italic mt-5 font-serif leading-relaxed pr-4">
                    Instructions: {loc.instructions}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5 pt-6 border-t border-[#1A362D]/10">
                  <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A362D] hover:text-[#D4A56A] transition-colors">
                    <Edit2 size={14} /> Edit
                  </button>
                  <span className="text-[#1A362D]/20">|</span>
                  {loc.isPrimary ? (
                    <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A362D]/40 hover:text-red-500 transition-colors">
                      <Trash2 size={14} /> Remove
                    </button>
                  ) : (
                    <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A362D]/50 hover:text-[#D4A56A] transition-colors">
                      <Star size={14} /> Set Primary
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add New Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#FDFBF7] rounded-[24px] shadow-[0_10px_30px_rgba(26,54,45,0.02)] border border-[#1A362D]/10 flex flex-col items-center justify-center p-10 text-center cursor-pointer hover:border-[#D4A56A]/50 hover:bg-white hover:-translate-y-1 transition-all duration-300 group min-h-[380px]"
          >
            <div className="w-20 h-20 rounded-full bg-[#F4EFE6] flex items-center justify-center mb-6 group-hover:bg-[#D4A56A]/10 transition-colors">
              <Plus size={28} className="text-[#1A362D] group-hover:text-[#D4A56A] transition-colors" />
            </div>
            <h3 className="font-serif text-[24px] font-medium text-[#1A362D] mb-4 group-hover:text-[#D4A56A] transition-colors">Add New Location</h3>
            <p className="text-[13px] text-[#1A362D]/60 leading-relaxed max-w-[260px]">
              Engage our concierge to register another residence, office, or frequently visited venue for seamless service.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SavedLocations;
