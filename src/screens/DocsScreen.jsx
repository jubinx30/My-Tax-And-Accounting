import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  FileText, 
  FileSpreadsheet, 
  Receipt, 
  Plus, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  Download,
  Eye,
  FileCheck2,
  FolderArchive
} from 'lucide-react';
import { mockDocuments } from '../data/mockData';

export default function DocsScreen({ onOpenUpload, onSelectDoc }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [docsList, setDocsList] = useState(mockDocuments);

  const categories = ['All', 'Tax', 'Payroll', 'Receipts'];

  const filteredDocs = docsList.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const getStatusBadge = (status, type) => {
    switch (type) {
      case 'sage':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF5F0] text-[#487A64] border border-[#D2E8DD]">
            <CheckCircle2 className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      case 'terracotta':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDF5F2] text-[#BA5D48] border border-[#F7DDD6]">
            <Clock className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F0F2F5] text-[#556575] border border-[#E1E4EA]">
            <FolderArchive className="w-2.5 h-2.5" />
            {status}
          </span>
        );
    }
  };

  const getFileIcon = (name) => {
    if (name.endsWith('.xlsx') || name.endsWith('.csv')) {
      return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
    }
    if (name.includes('Receipt')) {
      return <Receipt className="w-4 h-4 text-[#834F3A]" />;
    }
    return <FileText className="w-4 h-4 text-[#834F3A]" />;
  };

  return (
    <div className="flex-1 flex flex-col px-5 pt-3 pb-28 relative">
      {/* Title & Count Row */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xl font-extrabold text-[#1E252D] tracking-tight">
            Documents
          </h2>
          <p className="text-[11px] text-[#6B7280]">
            Encrypted client vault & CPA filings
          </p>
        </div>
        <span className="text-[11px] font-bold text-[#834F3A] bg-[#EDE6E1]/70 px-2.5 py-1 rounded-full">
          14 Files • 8.4 MB
        </span>
      </div>

      {/* Search Bar Input */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tax forms, receipts..."
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#EDE6E1] rounded-2xl text-xs text-[#1E252D] placeholder-[#9CA3AF] shadow-ambient focus:outline-none focus:border-[#834F3A] transition"
        />
        <button
          onClick={() => alert("Filter applied: Sorting by recent date")}
          title="Filter documents"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#834F3A] p-1 hover:bg-[#EDE6E1]/40 rounded-lg transition"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Tabs Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 touch-press ${
                isActive
                  ? 'bg-[#834F3A] text-white shadow-sm'
                  : 'bg-white border border-[#EDE6E1] text-[#6B7280] hover:text-[#1E252D]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Document List Cards */}
      <div className="mt-2 space-y-2.5">
        {filteredDocs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#EDE6E1] p-6 shadow-ambient">
            <FileCheck2 className="w-10 h-10 text-[#D9C8BE] mx-auto mb-2" />
            <p className="text-sm font-bold text-[#1E252D]">No documents found</p>
            <p className="text-xs text-[#6B7280] mt-1">Try another keyword or category filter.</p>
          </div>
        ) : (
          filteredDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => onSelectDoc(doc)}
              className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient flex items-center justify-between hover:border-[#834F3A]/40 transition cursor-pointer touch-press group"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-9 h-9 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                  {getFileIcon(doc.name)}
                </div>

                <div className="min-w-0 flex-1 pr-2">
                  <h4 className="text-xs font-bold text-[#1E252D] truncate group-hover:text-[#834F3A] transition">
                    {doc.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-[#6B7280] mt-0.5">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span className="tabular-nums">{doc.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {getStatusBadge(doc.status, doc.statusType)}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDoc(doc);
                  }}
                  className="p-1 rounded-lg text-gray-400 hover:text-[#1E252D] hover:bg-gray-100 transition"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating Action Button (FAB) at bottom right */}
      <div className="fixed bottom-24 right-5 max-w-[412px] z-30">
        <button
          onClick={onOpenUpload}
          className="flex items-center gap-2 bg-[#834F3A] hover:bg-[#A46B55] text-white px-4 py-2.5 rounded-full shadow-floating transition-all duration-200 touch-press hover:scale-105 active:scale-95"
        >
          <span className="text-xs font-bold tracking-wide">Add Files</span>
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <Plus className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </div>
  );
}
