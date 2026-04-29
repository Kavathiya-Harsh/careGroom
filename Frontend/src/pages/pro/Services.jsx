import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SlidersHorizontal, 
  Plus, 
  Scissors, 
  Droplets, 
  Sparkles,
  Pencil,
  Search,
  DollarSign,
  Clock,
  FileEdit,
  Check,
  ChevronDown
} from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Signature Sculpting",
      description: "Precision beard detailing and shape-up.",
      popular: true,
      price: 85.00,
      duration: 45,
      active: true,
      icon: Sparkles,
      iconBg: "bg-[#e8ecea]",
      iconColor: "text-[#1f4a3f]",
      addons: [{ name: "Hot Towel", price: 15 }, { name: "Gold Oil", price: 10 }]
    },
    {
      id: 2,
      name: "The Royal Shave",
      description: "Traditional hot lather straight razor shave.",
      popular: false,
      price: 120.00,
      duration: 60,
      active: false,
      icon: Droplets,
      iconBg: "bg-[#e8ecea]",
      iconColor: "text-[#1f4a3f]",
      addons: [{ name: "Mini Facial", price: 25 }]
    },
    {
      id: 3,
      name: "Executive Cut",
      description: "Tailored shear work with precise styling.",
      popular: true,
      price: 95.00,
      duration: 45,
      active: true,
      icon: Scissors,
      iconBg: "bg-[#e8ecea]",
      iconColor: "text-[#1f4a3f]",
      addons: []
    }
  ]);

  const toggleService = (id) => {
    setServices(services.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-[1200px] w-full mx-auto pb-24 pt-16"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
        <div className="space-y-4">
          <h1 className="font-serif text-[44px] text-sage font-bold leading-tight tracking-tight">Service Portfolio</h1>
          <p className="text-sage/60 font-medium text-[15px] max-w-xl leading-relaxed">
            Curate your artisanal offerings, manage pricing, and define the experience for your clientele.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button className="flex items-center gap-2 px-6 py-4 bg-transparent border-2 border-sage/20 rounded-md text-sage font-bold text-[11px] uppercase tracking-[0.18em] hover:border-sage hover:bg-sage/5 transition-colors shadow-sm">
            <SlidersHorizontal size={14} />
            Bulk Edit
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-[#d4af37] text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-[#c49555] transition-colors shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
            <Plus size={16} strokeWidth={3} />
            Add New Service
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
        
        {/* Left Column - Service List */}
        <div>
          {/* List Header */}
          <div className="grid grid-cols-[auto_1fr_100px_100px_80px_40px] gap-4 px-6 mb-6">
            <div className="w-5 flex justify-center">
              <input type="checkbox" className="w-4 h-4 rounded border-sage/20 text-gold focus:ring-gold accent-gold cursor-pointer" />
            </div>
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] pl-16">Service Offering</span>
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] text-right">Price</span>
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] text-right">Duration</span>
            <span className="text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] text-center ml-4">Status</span>
            <span></span>
          </div>

          {/* Service Cards */}
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border border-sage/5 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="pt-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-sage/20 text-gold focus:ring-gold accent-gold cursor-pointer" />
                </div>
                
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-[#eef1f0] text-[#1f4a3f] mt-1">
                  <service.icon size={20} strokeWidth={1.5} />
                </div>

                <div className="flex-1 grid grid-cols-[1fr_100px_100px_80px_40px] gap-4 items-center">
                  {/* Name & Desc */}
                  <div>
                    <h3 className="font-serif text-[22px] text-sage font-bold leading-tight mb-1">{service.name}</h3>
                    <div className="flex items-center gap-3 mb-2">
                      {service.popular && (
                        <span className="bg-[#fff8e6] text-[#d4af37] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border border-gold/10 flex items-center gap-1">
                           <Sparkles size={10} /> Popular
                        </span>
                      )}
                      <p className="text-[13px] text-sage/50 font-medium truncate max-w-[200px]">{service.description}</p>
                    </div>
                    {/* Add-ons */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.addons.length > 0 ? (
                        service.addons.map((addon, idx) => (
                          <div key={idx} className="bg-[#f5f2eb] px-3 py-1.5 rounded-lg border border-sage/5 flex items-center gap-1.5">
                            <span className="text-[11px] font-bold text-sage/60">+ {addon.name}</span>
                            <span className="text-[10px] font-bold text-sage/40">(+${addon.price})</span>
                          </div>
                        ))
                      ) : (
                        <span className="text-[11px] font-medium text-sage/30 italic py-1.5">No add-ons active</span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="font-serif text-[18px] font-bold text-sage">${service.price.toFixed(2)}</span>
                  </div>

                  {/* Duration */}
                  <div className="text-right text-[13px] font-bold text-sage/60">
                    {service.duration} min
                  </div>

                  {/* Status Toggle */}
                  <div className="flex justify-center ml-4">
                    <button 
                      onClick={() => toggleService(service.id)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${service.active ? 'bg-[#1f4a3f]' : 'bg-sage/10'}`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${service.active ? 'translate-x-6' : 'translate-x-0'}`}>
                         {service.active && <Check size={10} className="text-[#1f4a3f]" strokeWidth={3} />}
                      </div>
                    </button>
                  </div>

                  {/* Edit Action */}
                  <div className="flex justify-end">
                    <button className="w-8 h-8 rounded-full hover:bg-sage/5 flex items-center justify-center text-sage/40 hover:text-sage transition-colors">
                      <Pencil size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Quick Draft Sidebar */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(31,74,63,0.05)] border border-sage/5 sticky top-28">
          <div className="flex items-center gap-3 mb-8">
            <FileEdit size={20} className="text-[#d4af37]" />
            <h2 className="font-serif text-[24px] text-sage font-bold">Quick Draft</h2>
          </div>

          <div className="space-y-6">
            {/* Service Name */}
            <div>
              <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Service Name</label>
              <div className="relative">
                <SlidersHorizontal size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sage/30" />
                <input 
                  type="text" 
                  placeholder="e.g. Scalp Treatment" 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-sage/15 rounded-md text-[14px] text-sage placeholder:text-sage/30 focus:outline-none focus:border-gold transition-colors font-medium shadow-sm"
                />
              </div>
            </div>

            {/* Price & Duration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Price</label>
                <div className="relative">
                  <DollarSign size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sage/30" />
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full pl-9 pr-4 py-3 bg-white border border-sage/15 rounded-md text-[14px] text-sage placeholder:text-sage/30 focus:outline-none focus:border-gold transition-colors font-medium shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Duration</label>
                <div className="relative">
                  <Clock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sage/30" />
                  <select className="w-full pl-10 pr-8 py-3 bg-white border border-sage/15 rounded-md text-[14px] text-sage focus:outline-none focus:border-gold transition-colors font-medium shadow-sm appearance-none cursor-pointer">
                    <option>15 min</option>
                    <option>30 min</option>
                    <option>45 min</option>
                    <option>60 min</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sage/30 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Add-ons (Optional)</label>
              <div className="relative mb-3">
                <Plus size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sage/30" />
                <input 
                  type="text" 
                  placeholder="Search or type add-on..." 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-sage/15 rounded-md text-[14px] text-sage placeholder:text-sage/30 focus:outline-none focus:border-gold transition-colors font-medium shadow-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-sage/10 bg-[#fdfbf7] text-[11px] font-bold text-sage/60 hover:bg-sage/5 transition-colors">+ Hot Towel</button>
                <button className="px-3 py-1.5 rounded-lg border border-sage/10 bg-[#fdfbf7] text-[11px] font-bold text-sage/60 hover:bg-sage/5 transition-colors">+ Gold Oil</button>
                <button className="px-3 py-1.5 rounded-lg border border-sage/10 bg-[#fdfbf7] text-[11px] font-bold text-sage/60 hover:bg-sage/5 transition-colors">+ Mini Facial</button>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Description</label>
              <textarea 
                placeholder="Briefly describe the experience..." 
                rows="3"
                className="w-full px-4 py-3 bg-white border border-sage/15 rounded-md text-[14px] text-sage placeholder:text-sage/30 focus:outline-none focus:border-gold transition-colors font-medium shadow-sm resize-none"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 py-4 bg-transparent border-2 border-sage/20 text-sage rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:border-sage hover:bg-sage/5 transition-colors">
                Clear
              </button>
              <button className="flex-1 py-4 bg-gold text-white rounded-md font-bold uppercase tracking-[0.18em] text-[11px] hover:bg-[#c49555] transition-colors shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
                Save Draft
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Services;
