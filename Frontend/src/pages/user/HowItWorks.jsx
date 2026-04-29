import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Calendar, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans pb-0">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-16 lg:pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <p className="text-[#D4A56A] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">The Experience</p>
            <h1 className="font-serif text-[42px] md:text-[56px] text-[#1A362D] font-medium leading-[1.1] mb-6 tracking-tight">
              Luxury Grooming,<br/>Simplified
            </h1>
            <p className="text-[#1A362D]/70 text-[15px] leading-relaxed">
              A curated sanctuary of personal care, brought directly to your doorstep. Experience the pinnacle of artisanal grooming without the compromise of travel.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img 
              src="https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Shaving Brush and Razor" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* The Process */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#1A362D] mb-4">The Process</h2>
          <div className="w-12 h-[2px] bg-[#D4A56A] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* 01 Discovery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-[#FDFBF7] rounded-[24px] p-10 md:p-12 flex flex-col justify-between"
          >
            <div className="mb-10">
              <span className="text-[#D4A56A]/40 font-serif text-[48px] leading-none mb-4 block">01</span>
              <h3 className="font-serif text-[24px] text-[#1A362D] font-medium mb-4">Discovery</h3>
              <p className="text-[#1A362D]/70 text-[14px] leading-relaxed max-w-sm">
                Browse our gallery of elite artisans. Each profile is a testament to years of mastery, featuring vetted portfolios and verified client testimonials. Find the perfect match for your specific aesthetic needs.
              </p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[16/9] relative">
               <img 
                 src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" 
                 alt="Artisan Profile" 
                 className="absolute inset-0 w-full h-full object-cover object-top"
               />
            </div>
          </motion.div>

          {/* 02 Elite Booking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A362D] rounded-[24px] p-10 md:p-12 text-white flex flex-col justify-between"
          >
            <div>
              <span className="text-white/20 font-serif text-[48px] leading-none mb-4 block">02</span>
              <h3 className="font-serif text-[24px] font-medium mb-4 text-[#E2D8C7]">Elite Booking</h3>
              <p className="text-white/70 text-[14px] leading-relaxed max-w-sm">
                Seamlessly schedule your appointment through our concierge interface. Transparent pricing and secure, integrated payments ensure your focus remains on the experience ahead.
              </p>
            </div>
            
            <div className="mt-12 bg-white/5 border border-white/10 rounded-[16px] p-5 backdrop-blur-md flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-[#D4A56A]/20 flex items-center justify-center text-[#D4A56A]">
                 <Calendar size={18} />
               </div>
               <div>
                 <p className="text-[10px] text-white/50 uppercase tracking-[0.1em] font-bold">Confirmed</p>
                 <p className="text-[14px] font-medium">Tomorrow, 2:00 PM</p>
               </div>
            </div>
          </motion.div>

          {/* 03 Image Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-[24px] overflow-hidden aspect-square md:aspect-[4/3] h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" 
              alt="In-Home Sanctuary" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 03 In-Home Sanctuary Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#FDFBF7] rounded-[24px] p-10 md:p-12 flex flex-col justify-center h-full"
          >
            <span className="text-[#D4A56A]/40 font-serif text-[48px] leading-none mb-4 block">03</span>
            <h3 className="font-serif text-[24px] text-[#1A362D] font-medium mb-4">In-Home Sanctuary</h3>
            <p className="text-[#1A362D]/70 text-[14px] leading-relaxed mb-10 max-w-sm">
              Your artisan arrives with a curated mobile suite, transforming your space into a private spa. Relax as they execute a bespoke service experience designed specifically for your comfort and style.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle size={16} className="text-[#1A362D]/50" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A362D]/70">Sanitized Professional Tools</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle size={16} className="text-[#1A362D]/50" />
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1A362D]/70">Premium Apothecary Products</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 border-t border-[#1A362D]/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1A362D] font-medium leading-[1.1] mb-6">
              The Gold Standard of Trust
            </h2>
            <p className="text-[#1A362D]/70 text-[15px] leading-relaxed mb-10 max-w-md">
              Our commitment to excellence extends beyond the craft. Every CareGroom artisan undergoes a rigorous vetting process to ensure your absolute peace of mind.
            </p>
            
            <div className="space-y-4 max-w-md">
              <div className="bg-[#FDFBF7] p-6 rounded-[16px] flex gap-5">
                 <div className="mt-1">
                   <Shield className="text-[#1A362D]/40" size={24} />
                 </div>
                 <div>
                   <h4 className="font-serif text-[18px] text-[#1A362D] font-medium mb-1">50-Point Verification</h4>
                   <p className="text-[#1A362D]/60 text-[13px] leading-relaxed">Comprehensive background checks, license verification, and technical assessments.</p>
                 </div>
              </div>
              
              <div className="bg-[#FDFBF7] p-6 rounded-[16px] flex gap-5">
                 <div className="mt-1">
                   <Award className="text-[#1A362D]/40" size={24} />
                 </div>
                 <div>
                   <h4 className="font-serif text-[18px] text-[#1A362D] font-medium mb-1">Peer Review Board</h4>
                   <p className="text-[#1A362D]/60 text-[13px] leading-relaxed">Portfolios are reviewed by our senior artisan board for technical mastery.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative flex justify-end"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl relative w-[90%] lg:w-[85%] border-[12px] border-[#F4EFE6]">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80" 
                alt="Artisan at work" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-[5%] right-0 bg-[#2C1C11] text-[#D4A56A] px-5 py-3 rounded-md shadow-xl">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Certified Artisan Network</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CTA Section - Full Bleed bypassing container */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#1A362D] py-24 text-center px-6">
         <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
           className="max-w-2xl mx-auto"
         >
           <h2 className="font-serif text-[36px] md:text-[42px] text-white font-medium mb-6">
             Ready to Refine Your Routine?
           </h2>
           <p className="text-white/70 text-[15px] leading-relaxed mb-10 italic font-serif">
             Join an exclusive community of individuals who prioritize their presentation and time. Your first sanctuary experience is just a few clicks away.
           </p>
           
           <button 
             onClick={() => navigate('/professionals')}
             className="px-8 py-4 bg-[#F2DEC2] text-[#1A362D] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-white transition-all hover:scale-105"
           >
             Request An Appointment
           </button>
         </motion.div>
      </div>

    </div>
  );
};

export default HowItWorks;
