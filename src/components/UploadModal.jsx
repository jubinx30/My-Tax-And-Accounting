import React, { useState } from 'react';
import { X, UploadCloud, File, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UploadModal({ isOpen, onClose, onUploaded }) {
  const [selectedCategory, setSelectedCategory] = useState('Tax');
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const handleSimulatedUpload = () => {
    if (!file) {
      setFile({ name: '2024_Receipts_Summary.pdf', size: '1.2 MB' });
    }
    setUploading(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 25;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          onUploaded({
            id: `doc-${Date.now()}`,
            name: file?.name || '2024_W2_Revision.pdf',
            category: selectedCategory,
            date: 'Just now',
            size: file?.size || '1.4 MB',
            status: 'Verified',
            statusType: 'sage'
          });
          onClose();
        }, 300);
      }
    }, 120);
  };

  return (
    <div className="fixed md:absolute inset-0 z-50 flex items-end justify-center p-0 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full bg-white rounded-t-3xl p-5 shadow-2xl border border-[#EDE6E1] transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EDE6E1]">
          <div>
            <h3 className="text-base font-extrabold text-[#1E252D]">
              Upload Tax Documents
            </h3>
            <p className="text-[11px] text-[#6B7280]">
              Direct to Marcus Vance, CPA
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FBF9F7] text-gray-500 hover:text-gray-800 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Selector */}
        <div className="mt-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1.5">
            Document Category
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['Tax', 'Payroll', 'Receipts'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 text-xs font-bold rounded-xl border transition ${
                  selectedCategory === cat
                    ? 'bg-[#834F3A] text-white border-[#834F3A]'
                    : 'bg-[#FBF9F7] text-[#1E252D] border-[#EDE6E1] hover:border-[#834F3A]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Upload Drop Zone */}
        <div 
          onClick={() => setFile({ name: '2024_W2_Correction.pdf', size: '1.4 MB' })}
          className={`mt-4 border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition ${
            file ? 'border-[#487A64] bg-[#EBF5F0]/30' : 'border-[#EDE6E1] hover:border-[#834F3A] bg-[#FBF9F7]'
          }`}
        >
          {file ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#EBF5F0] text-[#487A64] flex items-center justify-center mb-2">
                <File className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#1E252D]">{file.name}</span>
              <span className="text-[10px] text-[#487A64] font-semibold mt-0.5">{file.size} • Ready to upload</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#EDE6E1]/70 text-[#834F3A] flex items-center justify-center mb-2">
                <UploadCloud className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#1E252D]">
                Tap to select file or scan
              </span>
              <span className="text-[10px] text-[#6B7280] mt-1">
                PDF, JPG, PNG or XLSX up to 25MB
              </span>
            </div>
          )}
        </div>

        {/* Progress Bar if uploading */}
        {uploading && (
          <div className="mt-4">
            <div className="flex justify-between text-xs font-bold text-[#1E252D] mb-1">
              <span>Encrypting & Uploading...</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
            <div className="w-full bg-[#EDE6E1] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#834F3A] h-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Primary CTA */}
        <div className="mt-5">
          <button
            onClick={handleSimulatedUpload}
            disabled={uploading}
            className="w-full h-11 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-floating transition touch-press"
          >
            {uploading ? (
              <span className="text-xs">Processing...</span>
            ) : (
              <>
                <span className="text-xs">Submit Document</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
