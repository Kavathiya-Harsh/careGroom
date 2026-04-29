import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Filter, 
  ArrowDownUp, 
  Check, 
  X, 
  Eye, 
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const applicants = [
  {
    id: 'APP-8492-JV',
    name: 'Julian Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    category: 'Master Barber',
    specialty: 'Precision Cutting, Hot Towel',
    applicationDate: 'Oct 12, 2023',
    relativeDate: '2 days ago',
    status: 'pending'
  },
  {
    id: 'APP-8493-ES',
    name: 'Eleanor Sterling',
    avatar: '',
    initials: 'ES',
    category: 'Aesthetician',
    specialty: 'Holistic Facials, Aromatherapy',
    applicationDate: 'Oct 13, 2023',
    relativeDate: '1 day ago',
    status: 'in_review'
  },
  {
    id: 'APP-8488-MC',
    name: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    category: 'Massage Therapist',
    specialty: 'Deep Tissue, Sports Recovery',
    applicationDate: 'Oct 10, 2023',
    relativeDate: '4 days ago',
    status: 'pending'
  },
  {
    id: 'APP-8501-LR',
    name: 'Luna Rossi',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    category: 'Hair Stylist',
    specialty: 'Color Correction, Balayage',
    applicationDate: 'Oct 14, 2023',
    relativeDate: '12 hours ago',
    status: 'pending'
  },
  {
    id: 'APP-8499-DK',
    name: 'Daniel Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    category: 'Skincare Specialist',
    specialty: 'Clinical Facials, Peels',
    applicationDate: 'Oct 11, 2023',
    relativeDate: '3 days ago',
    status: 'in_review'
  },
];

const statusConfig = {
  pending: { label: 'PENDING', bg: 'bg-[#D4A56A]/10', text: 'text-[#D4A56A]', border: 'border-[#D4A56A]/20' },
  in_review: { label: 'IN REVIEW', bg: 'bg-[#1F4A3F]/10', text: 'text-[#1F4A3F]', border: 'border-[#1F4A3F]/20' },
  approved: { label: 'APPROVED', bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  rejected: { label: 'REJECTED', bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20' },
};

const VerificationQueue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = 24;
  const entriesPerPage = 5;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="w-full max-w-6xl mx-auto pb-24 pt-16 font-sans">
      
      {/* ── Header Section ── */}
      <div className="mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-serif text-[36px] md:text-[42px] text-[#1F4A3F] font-medium leading-tight mb-3"
        >
          Verification Queue
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[14px] text-[#1F4A3F]/60 max-w-xl leading-relaxed"
        >
          Review and manage applications for master artisans seeking to join the CareGroom luxury marketplace. Ensure all credentials meet our highest standards.
        </motion.p>
      </div>

      {/* ── Filter Bar ── */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-end gap-3 mb-8"
      >
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#1F4A3F]/15 rounded-lg text-[12px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors shadow-sm">
          <Filter size={14} className="text-[#1F4A3F]/50" />
          Filter
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#1F4A3F]/15 rounded-lg text-[12px] font-bold text-[#1F4A3F] hover:bg-[#1F4A3F]/5 transition-colors shadow-sm">
          <ArrowDownUp size={14} className="text-[#1F4A3F]/50" />
          Sort
        </button>
      </motion.div>

      {/* ── Table ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl border border-[#1F4A3F]/5 shadow-[0_10px_40px_rgba(31,74,63,0.03)] overflow-hidden"
      >
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[2fr_2fr_1.4fr_1fr_1fr] gap-4 px-8 py-5 border-b border-[#1F4A3F]/5 bg-[#FDFBF7]">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Artisan Applicant</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Category & Specialty</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Application Date</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40">Status</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1F4A3F]/40 text-right">Actions</span>
        </div>

        {/* Table Rows */}
        {applicants.map((applicant, i) => {
          const status = statusConfig[applicant.status];
          return (
            <motion.div 
              key={applicant.id}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1.4fr_1fr_1fr] gap-4 md:gap-4 px-8 py-6 border-b border-[#1F4A3F]/5 last:border-b-0 hover:bg-[#FDFBF7]/60 transition-colors items-center"
            >
              {/* Applicant Info */}
              <div className="flex items-center gap-4">
                {applicant.avatar ? (
                  <img 
                    src={applicant.avatar} 
                    alt={applicant.name} 
                    className="w-12 h-12 rounded-full object-cover border-[3px] border-[#F5F2EB] shadow-sm shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#F5F2EB] border-[3px] border-[#F5F2EB] shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-[14px] font-bold text-[#1F4A3F]/60">{applicant.initials}</span>
                  </div>
                )}
                <div>
                  <h3 className="text-[15px] font-bold text-[#1F4A3F] leading-snug">{applicant.name}</h3>
                  <p className="text-[11px] text-[#1F4A3F]/40 font-medium">ID: {applicant.id}</p>
                </div>
              </div>

              {/* Category & Specialty */}
              <div>
                <p className="text-[14px] font-bold text-[#1F4A3F] mb-0.5">{applicant.category}</p>
                <p className="text-[12px] text-[#1F4A3F]/50">{applicant.specialty}</p>
              </div>

              {/* Application Date */}
              <div>
                <p className="text-[14px] text-[#1F4A3F] font-medium">{applicant.applicationDate}</p>
                <p className="text-[11px] text-[#1F4A3F]/40">{applicant.relativeDate}</p>
              </div>

              {/* Status Badge */}
              <div>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-[0.15em] border ${status.bg} ${status.text} ${status.border}`}>
                  {status.label}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2">
                <button 
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F] hover:text-white hover:border-[#1F4A3F] transition-all"
                  title="View Application"
                >
                  <Eye size={14} />
                </button>
                <button 
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
                  title="Approve"
                >
                  <Check size={14} />
                </button>
                <button 
                  className="w-9 h-9 bg-[#F5F2EB] border border-[#1F4A3F]/5 rounded-lg flex items-center justify-center text-[#1F4A3F]/40 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                  title="Reject"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Pagination ── */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="flex items-center justify-between mt-8 px-2"
      >
        <p className="text-[13px] text-[#1F4A3F]/50">
          Showing 1 to {applicants.length} of {totalEntries} entries
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
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded-lg border border-[#1F4A3F]/10 flex items-center justify-center text-[#1F4A3F]/40 hover:bg-[#1F4A3F]/5 transition-colors disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VerificationQueue;
