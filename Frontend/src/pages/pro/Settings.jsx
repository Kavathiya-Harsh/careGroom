import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Image as ImageIcon, 
  MapPin, 
  ShieldCheck, 
  Plus,
  CheckCircle2,
  ShieldAlert,
  Upload
} from 'lucide-react';

const Settings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-[1000px] w-full mx-auto pb-24 pt-16"
    >
      {/* Header */}
      <div className="mb-16 space-y-4">
        <h1 className="font-serif text-[44px] text-sage font-bold leading-tight tracking-tight mb-3">Refine Your Presence</h1>
        <p className="text-sage/60 font-medium text-[15px] max-w-2xl leading-relaxed">
          Curate the details that define your artisan brand. Ensure your bio, portfolio, and credentials reflect the highest standard of service.
        </p>
      </div>

      <div className="space-y-8">
        {/* Bio & Philosophy */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-8">
            <FileText size={20} className="text-[#d4af37]" />
            <h2 className="font-serif text-[24px] text-sage font-bold">Bio & Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Professional Title</label>
                <input 
                  type="text" 
                  defaultValue="Master Canine Stylist" 
                  className="w-full pb-3 border-b border-sage/20 bg-transparent text-[15px] text-sage font-medium focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Years of Experience</label>
                <input 
                  type="text" 
                  defaultValue="12" 
                  className="w-full pb-3 border-b border-sage/20 bg-transparent text-[15px] text-sage font-medium focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Artisan Bio</label>
              <textarea 
                rows="4"
                className="w-full p-4 bg-[#fcfaf7] border border-sage/10 rounded-xl text-[14px] text-sage/80 font-medium leading-relaxed focus:outline-none focus:border-gold transition-colors resize-none shadow-inner"
                defaultValue="I specialize in hand-scissor finishing and low-stress handling for anxious breeds. My approach treats every session as a holistic spa experience, prioritizing the pet's comfort as much as the aesthetic outcome."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <ImageIcon size={20} className="text-[#d4af37]" />
                <h2 className="font-serif text-[24px] text-sage font-bold">Portfolio</h2>
              </div>
              <p className="text-[13px] text-sage/50 font-medium ml-8">Showcase your finest work. High-resolution images recommended.</p>
            </div>
            <button className="px-6 py-3 border-2 border-sage/20 text-sage rounded-md text-[10px] font-bold uppercase tracking-[0.18em] hover:border-sage hover:bg-sage/5 transition-colors">
              Upload New
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="aspect-square bg-[#1a1a1a] rounded-[16px] overflow-hidden relative group cursor-pointer border border-sage/10">
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-[11px] font-bold uppercase tracking-widest">Edit</span>
               </div>
            </div>
            <div className="aspect-square bg-[#0a0a0a] rounded-[16px] overflow-hidden relative group cursor-pointer border border-sage/10">
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-[11px] font-bold uppercase tracking-widest">Edit</span>
               </div>
            </div>
            <div className="aspect-square bg-[#223344] rounded-[16px] overflow-hidden relative group cursor-pointer border border-sage/10 flex items-center justify-center">
               <div className="text-white/20 font-serif italic text-2xl">Portfolio<br/>Work</div>
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-[11px] font-bold uppercase tracking-widest">Edit</span>
               </div>
            </div>
            <div className="aspect-square border-2 border-dashed border-sage/20 rounded-[16px] flex flex-col items-center justify-center gap-3 hover:border-gold/50 hover:bg-[#fcfaf7] transition-all cursor-pointer text-sage/40 hover:text-gold">
               <Plus size={24} />
               <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Add Image</span>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-8">
            <MapPin size={20} className="text-[#d4af37]" />
            <h2 className="font-serif text-[24px] text-sage font-bold">Service Area</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em] mb-2">Base Location</label>
                <input 
                  type="text" 
                  defaultValue="San Francisco, CA" 
                  className="w-full pb-3 border-b border-sage/20 bg-transparent text-[15px] text-sage font-medium focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-[10px] font-bold text-sage/50 uppercase tracking-[0.15em]">Travel Radius (Miles)</label>
                  <span className="text-[14px] font-bold text-sage">15</span>
                </div>
                <div className="w-full h-1.5 bg-sage/10 rounded-full relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#1f4a3f] rounded-full"></div>
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1f4a3f] rounded-full shadow-md cursor-grab"></div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="inHome"
                  defaultChecked
                  className="w-4 h-4 rounded border-sage/20 text-[#1f4a3f] focus:ring-[#1f4a3f] accent-[#1f4a3f] cursor-pointer" 
                />
                <label htmlFor="inHome" className="text-[14px] text-sage/80 font-medium cursor-pointer">Available for in-home services</label>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[200px] w-full bg-[#e8ecea] rounded-[16px] overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#e8ecea_100%)] z-10"></div>
               {/* Abstract map texture representation */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1f4a3f 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-[#1f4a3f]/10 border border-[#1f4a3f]/20 flex items-center justify-center animate-pulse">
                   <div className="w-3 h-3 bg-[#1f4a3f] rounded-full shadow-md"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Credentials & Verification */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage/5 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck size={20} className="text-[#d4af37]" />
            <h2 className="font-serif text-[24px] text-sage font-bold">Credentials & Verification</h2>
          </div>

          <div className="space-y-4">
            {/* Verified Credential */}
            <div className="bg-[#fcfaf7] border border-sage/5 p-5 rounded-[16px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-sage/10 flex items-center justify-center text-sage/40 shadow-sm">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-sage mb-0.5">State Grooming License</h4>
                  <p className="text-[12px] text-sage/50 font-medium">Expires: Oct 2025</p>
                </div>
              </div>
              <div className="bg-mint/10 border border-mint/20 text-mint px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mint rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>

            {/* Action Needed Credential */}
            <div className="bg-white border border-sage/10 p-5 rounded-[16px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f5f2eb] border border-sage/5 flex items-center justify-center text-sage/40 shadow-sm">
                  <ShieldAlert size={16} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-sage mb-0.5">Liability Insurance</h4>
                  <p className="text-[12px] text-sage/50 font-medium">Requires annual update</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-sage/40 uppercase tracking-[0.15em] hover:text-sage transition-colors">
                Update Doc
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Actions */}
      <div className="mt-12 flex justify-end items-center gap-6 pt-6 border-t border-sage/10">
        <button className="text-[11px] font-bold text-sage/50 uppercase tracking-[0.18em] hover:text-sage transition-colors">
          Discard Changes
        </button>
        <button className="px-8 py-4 bg-[#d4af37] text-white rounded-md font-bold text-[11px] uppercase tracking-[0.18em] hover:bg-[#c49555] transition-all shadow-[0_12px_30px_rgba(212,165,106,0.35)] hover:-translate-y-0.5">
          Save Profile
        </button>
      </div>
    </motion.div>
  );
};

export default Settings;
