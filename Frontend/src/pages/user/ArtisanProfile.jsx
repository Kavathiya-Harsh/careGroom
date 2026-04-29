import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ShieldCheck, ChevronRight, Check } from 'lucide-react';

// Mock data (in a real app, this would be fetched based on the ID)
const artisanData = {
  id: 1,
  name: 'Elias Vance',
  role: 'Master Barber',
  rating: 4.9,
  reviews: 128,
  location: 'Downtown Studio',
  about: 'With over 12 years of experience in classical and modern barbering, Elias Vance brings an unparalleled level of precision to every cut. Trained in London and operating out of our elite downtown studio, he specializes in bespoke grooming tailored to your facial structure and personal style.',
  coverImg: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80',
  avatarImg: 'https://images.unsplash.com/photo-1520024146169-3240400354ae?auto=format&fit=crop&w=400&q=80',
  services: [
    { id: 1, name: 'The Executive Cut', duration: '45 min', price: 85, desc: 'A bespoke haircut tailored to your face shape, including a precise neck shave and styling.' },
    { id: 2, name: 'Royal Hot Towel Shave', duration: '30 min', price: 55, desc: 'Traditional straight razor shave with essential oils, hot towels, and a soothing balm.' },
    { id: 3, name: 'Beard Sculpting', duration: '30 min', price: 45, desc: 'Expert beard shaping, trimming, and conditioning to keep your facial hair looking pristine.' },
    { id: 4, name: 'The Full Experience', duration: '90 min', price: 160, desc: 'Combine the Executive Cut with our Royal Hot Towel Shave and an express facial.' }
  ],
  portfolio: [
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80'
  ],
  skills: ['Classic Barbering', 'Beard Grooming', 'Skin Fades', 'Hot Towel Treatment', 'Facial Massage', 'Precision Cutting'],
  recentReviews: [
    { id: 1, user: 'James W.', rating: 5, date: '2 days ago', comment: 'Best haircut I\'ve had in years. Elias is a true master of his craft. The attention to detail is incredible.' },
    { id: 2, user: 'Michael R.', rating: 5, date: '1 week ago', comment: 'The Royal Hot Towel Shave is a must-try. Extremely relaxing and a perfect finish.' },
    { id: 3, user: 'David L.', rating: 4, date: '2 weeks ago', comment: 'Great atmosphere and very professional service. Highly recommend for anyone looking for a premium experience.' }
  ]
};

const ArtisanProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const artisan = artisanData;

  return (
    <div className="w-full bg-transparent min-h-screen font-sans text-[#1A362D] pb-24">
      
      {/* Cover Image - Edge to Edge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[100vw] relative left-1/2 -translate-x-1/2 h-[350px] md:h-[480px] overflow-hidden shadow-2xl"
      >
        <img src={artisan.coverImg} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A362D] via-[#1A362D]/30 to-transparent"></div>
        <div className="absolute top-8 left-0 right-0 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full z-10">
           <button 
             onClick={() => navigate(-1)}
             className="px-6 py-2.5 bg-[#FDFBF7] shadow-[0_8px_30px_rgba(26,54,45,0.15)] text-[#1A362D] border border-[#1A362D]/5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:-translate-y-0.5 transition-all flex items-center gap-2 group w-max"
           >
             <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Professionals
           </button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 relative z-20 -mt-24">
        
        {/* Left Column: Details */}
        <div>
          
          {/* Profile Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#FDFBF7] rounded-[24px] p-8 md:p-12 shadow-[0_20px_50px_rgba(26,54,45,0.08)] mb-16 border border-[#1A362D]/5"
          >
            <div className="flex flex-col md:flex-row md:items-end gap-8">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[20px] border-[6px] border-[#FDFBF7] overflow-hidden shadow-2xl bg-[#FDFBF7] shrink-0 -mt-28">
                <img src={artisan.avatarImg} alt={artisan.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#1A362D] text-[#D4A56A] text-[10px] font-black uppercase tracking-[0.25em] rounded-full flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#D4A56A]" /> Verified Master
                  </span>
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full border border-[#1A362D]/5 shadow-sm">
                    <Star size={14} className="text-[#D4A56A]" fill="#D4A56A" /> 
                    <span className="text-[13px] font-bold text-[#1A362D]">{artisan.rating}</span>
                    <span className="text-[12px] text-[#1A362D]/40 font-medium">({artisan.reviews})</span>
                  </div>
                </div>
                <h1 className="font-serif text-[42px] md:text-[54px] font-medium leading-[1.1] mb-3 text-[#1A362D] tracking-tight">
                  {artisan.name}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#1A362D]/70 font-medium">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-[#D4A56A]" /> {artisan.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A56A]/40"></span>
                  <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4A56A]" /> 12+ Years Exp.</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-20">
            {/* About Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h3 className="font-serif text-[28px] mb-8 text-[#1A362D] flex items-center gap-6">
                The Artisan's Story <div className="h-px flex-1 bg-[#D4A56A]/30"></div>
              </h3>
              <p className="text-[16px] leading-relaxed text-[#1A362D]/80 font-serif italic max-w-3xl">
                {artisan.about}
              </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h3 className="font-serif text-[28px] mb-8 text-[#1A362D] flex items-center gap-6">
                Expertise <div className="h-px flex-1 bg-[#D4A56A]/30"></div>
              </h3>
              <div className="flex flex-wrap gap-3">
                {artisan.skills.map((skill) => (
                  <span key={skill} className="px-6 py-3 bg-[#FDFBF7] rounded-[14px] text-[12px] font-bold uppercase tracking-[0.1em] text-[#1A362D]/70 shadow-sm border border-[#1A362D]/5 hover:border-[#D4A56A]/30 hover:text-[#1A362D] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Portfolio Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h3 className="font-serif text-[28px] mb-8 text-[#1A362D] flex items-center gap-6">
                Portfolio Curations <div className="h-px flex-1 bg-[#D4A56A]/30"></div>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {artisan.portfolio.map((img, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className="aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                  >
                    <img src={img} alt={`Portfolio ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#1A362D]/0 group-hover:bg-[#1A362D]/20 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Service Insights (Accordion Style) */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h3 className="font-serif text-[28px] mb-8 text-[#1A362D] flex items-center gap-6">
                Service Insights <div className="h-px flex-1 bg-[#D4A56A]/30"></div>
              </h3>
              <div className="space-y-6">
                {artisan.services.map((svc) => (
                  <div key={svc.id} className="border-b border-[#1A362D]/10 pb-6 group cursor-pointer">
                    <div className="flex justify-between items-center py-2">
                      <h4 className="font-serif text-[20px] font-medium text-[#1A362D] group-hover:text-[#D4A56A] transition-colors">{svc.name}</h4>
                      <ChevronRight size={18} className="text-[#D4A56A] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-[14px] text-[#1A362D]/60 leading-relaxed max-w-2xl mt-2">
                      Our {svc.name} is a comprehensive {svc.duration} session that includes {svc.desc.toLowerCase()}. We use premium botanical products to ensure the best results for your skin and hair.
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Booking Policy Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <div className="bg-[#1A362D] rounded-[24px] p-10 md:p-12 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-full bg-[#D4A56A]/20 flex items-center justify-center text-[#D4A56A]">
                      <ShieldCheck size={24} />
                   </div>
                   <h3 className="font-serif text-[26px] text-[#FDFBF7]">The Concierge Policy</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D4A56A] mb-3">Cancellation</h4>
                    <p className="text-[14px] text-white/70 leading-relaxed">Please provide at least 24 hours notice for cancellations. Late cancellations may incur a 50% service fee.</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D4A56A] mb-3">Arrival</h4>
                    <p className="text-[14px] text-white/70 leading-relaxed">We recommend arriving 10 minutes prior to your session to enjoy our relaxation lounge and refreshments.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Reviews Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2 pb-12"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-serif text-[28px] text-[#1A362D] flex items-center gap-6 flex-1">
                  Client Reflections <div className="h-px flex-1 bg-[#D4A56A]/30"></div>
                </h3>
                <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A56A] ml-6 hover:text-[#1A362D] transition-colors border-b border-[#D4A56A] pb-1">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {artisan.recentReviews.map((review) => (
                  <div key={review.id} className="bg-[#FDFBF7] p-8 rounded-[20px] border border-[#1A362D]/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#1A362D] flex items-center justify-center text-[15px] font-serif text-[#D4A56A]">
                            {review.user[0]}
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-[#1A362D]">{review.user}</h4>
                            <span className="text-[12px] text-[#1A362D]/50 font-medium">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < review.rating ? "text-[#D4A56A]" : "text-[#1A362D]/10"} fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-[15px] text-[#1A362D]/70 leading-relaxed italic font-serif">"{review.comment}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Right Column: Booking Sidebar */}
        <div className="relative pt-2">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="sticky top-[112px] bg-[#FDFBF7] rounded-[24px] p-8 md:p-10 shadow-[0_30px_60px_rgba(26,54,45,0.08)] border border-[#1A362D]/5"
          >
            <div className="mb-10 text-center">
              <h3 className="font-serif text-[28px] mb-2 text-[#1A362D]">Reserve Session</h3>
              <p className="text-[11px] text-[#D4A56A] font-bold uppercase tracking-[0.2em]">Select a curated service</p>
            </div>
            
            <div className="space-y-4 mb-10 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {artisan.services.map((svc) => (
                <motion.div 
                  key={svc.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(svc.id)}
                  className={`p-6 rounded-[16px] border-[1.5px] cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                    selectedService === svc.id 
                      ? 'border-[#1A362D] bg-[#1A362D] text-white shadow-lg' 
                      : 'border-[#1A362D]/10 bg-white hover:border-[#1A362D]/30 text-[#1A362D]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex-1">
                      <h4 className={`font-serif text-[18px] font-medium transition-colors ${selectedService === svc.id ? 'text-[#D4A56A]' : 'text-[#1A362D]'}`}>
                        {svc.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className={`font-black text-[18px] ${selectedService === svc.id ? 'text-white' : 'text-[#1A362D]'}`}>${svc.price}</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className={`text-[12px] mb-4 leading-relaxed ${selectedService === svc.id ? 'text-white/70' : 'text-[#1A362D]/60'}`}>{svc.desc}</p>
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${selectedService === svc.id ? 'text-[#D4A56A]' : 'text-[#D4A56A]'}`}>
                        <Clock size={14} /> {svc.duration}
                      </span>
                      {selectedService === svc.id && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                          <Check size={14} /> Selected
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-5">
              <button 
                onClick={() => navigate(`/book/${artisan.id}`)}
                disabled={!selectedService}
                className={`w-full py-5 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl relative overflow-hidden group ${
                  selectedService 
                    ? 'bg-[#1A362D] text-[#D4A56A] hover:shadow-[0_20px_40px_rgba(26,54,45,0.2)] hover:-translate-y-1' 
                    : 'bg-[#1A362D]/5 text-[#1A362D]/30 cursor-not-allowed border border-[#1A362D]/5 shadow-none'
                }`}
              >
                <span className="relative z-10">{selectedService ? 'Instant Booking' : 'Select a Service'}</span>
                {selectedService && <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#1A362D]/40 uppercase tracking-[0.2em]">
                <ShieldCheck size={14} /> Secure Concierge Booking
              </div>
            </div>
          </motion.div>

          {/* Availability Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 bg-transparent border border-[#D4A56A]/30 rounded-[20px] p-6 text-[#1A362D] relative flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-full bg-[#D4A56A]/10 flex items-center justify-center text-[#D4A56A] shrink-0">
               <Clock size={20} />
            </div>
            <div className="relative z-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A56A] mb-1">Availability</h4>
              <p className="text-[13px] text-[#1A362D]/70 font-medium leading-relaxed">Usually responds within 15 mins.<br/>High demand for weekends.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ArtisanProfile;
