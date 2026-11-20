import React from 'react';
import { X, FileText, Download, Share2, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function DocPreviewModal({ isOpen, doc, onClose }) {
  if (!isOpen || !doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-[#EDE6E1]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#EDE6E1]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] text-[#834F3A] flex items-center justify-center border border-[#EDE6E1]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1E252D] truncate max-w-[200px]">
                {doc.name}
              </h3>
              <p className="text-[10px] text-[#6B7280]">
                {doc.size} • {doc.date}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#FBF9F7] text-gray-500 hover:text-gray-800 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mock Document Render */}
        <div className="mt-4 bg-[#FBF9F7] border border-[#EDE6E1] rounded-2xl p-4 text-center">
          <div className="w-12 h-16 bg-white border border-[#EDE6E1] rounded-lg shadow-sm mx-auto flex flex-col p-1.5 justify-between">
            <div className="space-y-1">
              <div className="h-1 bg-gray-300 rounded w-full" />
              <div className="h-1 bg-gray-200 rounded w-3/4" />
              <div className="h-1 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="text-[7px] font-bold text-[#834F3A] self-end">IRS 1040</div>
          </div>
          <p className="text-xs font-bold text-[#1E252D] mt-3">
            Tampa Office Certified Copy
          </p>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-[10px] text-[#487A64] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Signed & Cryptographically Verified
          </div>
        </div>

        {/* Document Metadata Details */}
        <div className="mt-3 bg-white rounded-xl border border-[#EDE6E1] p-3 text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Status:</span>
            <span className="font-bold text-[#487A64]">{doc.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Category:</span>
            <span className="font-semibold text-[#1E252D]">{doc.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Filed By:</span>
            <span className="font-semibold text-[#1E252D]">Marcus Vance, CPA</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              alert(`Downloading ${doc.name}...`);
              onClose();
            }}
            className="h-11 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition touch-press"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>

          <button
            onClick={() => {
              alert("Link copied to clipboard (Secure client portal token valid 24h)");
              onClose();
            }}
            className="h-11 bg-white border border-[#EDE6E1] text-[#1E252D] font-bold rounded-xl flex items-center justify-center gap-2 text-xs hover:bg-[#FBF9F7] transition"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
