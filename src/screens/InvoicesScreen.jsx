import React, { useState } from 'react';
import { 
  CreditCard, 
  Receipt, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Clock, 
  ExternalLink,
  Lock,
  ChevronRight
} from 'lucide-react';
import { mockInvoices } from '../data/mockData';

export default function InvoicesScreen({ onOpenPayment }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' or 'pending'
  const [invoices, setInvoices] = useState(mockInvoices);

  const pendingCount = invoices.filter(i => i.isPending).length;

  const filteredInvoices = invoices.filter(inv => {
    if (activeFilter === 'pending') return inv.isPending;
    return true;
  });

  return (
    <div className="flex-1 flex flex-col px-5 pt-3 pb-28 space-y-4">
      {/* Subheader with Action Required Pill */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#834F3A]">
            Account Billing
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FDF5F2] text-[#BA5D48] border border-[#F7DDD6]">
            ● {pendingCount} Action Required
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-[#1E252D] tracking-tight mt-0.5">
          Invoices & Payments
        </h2>
      </div>

      {/* High-Contrast Balance Card */}
      <div
        className="rounded-2xl p-5 text-white relative overflow-hidden shadow-card"
        style={{
          background: 'linear-gradient(135deg, #1E252D 0%, #252D37 60%, #342823 100%)',
          boxShadow: '0 8px 24px -4px rgba(30, 37, 45, 0.25)'
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-wider uppercase text-gray-300">
            TOTAL BALANCE DUE
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#BA5D48]/30 text-[#FFB4A2] border border-[#BA5D48]/50">
            <Clock className="w-3 h-3" /> Due Mar 25
          </span>
        </div>

        <div className="mt-2">
          <div className="text-3xl font-black text-white tabular-nums tracking-tight">
            $450.00 <span className="text-sm font-semibold text-gray-400">USD</span>
          </div>
          <p className="text-[11px] text-gray-300 mt-1">
            Includes 2024 individual & corporate filing fees
          </p>
        </div>

        {/* Primary Pay Now Button */}
        <div className="mt-4">
          <button
            onClick={onOpenPayment}
            className="w-full h-11 bg-[#834F3A] hover:bg-[#A46B55] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition touch-press"
          >
            <span>Pay Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Badges */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-300">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#A7D7C5]" /> 256-Bit Bank Encryption
          </span>
          <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-[9px] text-gray-400">
            <span>Apple Pay</span>
            <span>•</span>
            <span>Visa</span>
          </div>
        </div>
      </div>

      {/* Saved Payment Method Card */}
      <div className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                Payment Method
              </span>
              <span className="text-[9px] font-semibold text-[#487A64] bg-[#EBF5F0] px-1.5 py-0.2 rounded">
                Default
              </span>
            </div>
            <p className="text-xs font-bold text-[#1E252D] mt-0.5">
              Visa ending in 4284
            </p>
          </div>
        </div>

        <button
          onClick={() => alert("Edit payment method: Enter card or bank details.")}
          className="text-xs font-bold text-[#834F3A] hover:underline px-2 py-1 rounded-lg hover:bg-[#EDE6E1]/40 transition"
        >
          Edit
        </button>
      </div>

      {/* Invoice History List */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
            Invoice History
          </h3>
          <div className="flex items-center gap-1 bg-[#EDE6E1]/60 p-0.5 rounded-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full transition ${
                activeFilter === 'all'
                  ? 'bg-white text-[#1E252D] shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveFilter('pending')}
              className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full transition ${
                activeFilter === 'pending'
                  ? 'bg-[#834F3A] text-white shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {filteredInvoices.map((inv) => (
            <div
              key={inv.id}
              className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 shadow-ambient"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A] mt-0.5">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E252D]">
                      {inv.title}
                    </h4>
                    <span className="text-[10px] text-[#6B7280]">
                      {inv.code} • {inv.dueDate}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-black text-[#1E252D] tabular-nums">
                    ${inv.amount.toFixed(2)}
                  </div>
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      inv.isPending
                        ? 'bg-[#FDF5F2] text-[#BA5D48] border border-[#F7DDD6]'
                        : 'bg-[#EBF5F0] text-[#487A64] border border-[#D2E8DD]'
                    }`}
                  >
                    {inv.status}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EDE6E1] flex items-center justify-between text-[10px] text-[#6B7280]">
                <span>{inv.issuedBy}</span>
                <button
                  onClick={() => alert(`Downloading ${inv.title} (${inv.code}).pdf`)}
                  className="font-bold text-[#834F3A] hover:underline flex items-center gap-1"
                >
                  {inv.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tip Card */}
      <div className="bg-[#FDF5F2] border border-[#F7DDD6] rounded-2xl p-3.5 flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#834F3A]/10 text-[#834F3A] flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#1E252D]">
            Automatic Tax Deductibility
          </h4>
          <p className="text-[11px] text-[#6B7280] mt-0.5 leading-relaxed">
            CPA fees may be eligible as an itemized business deduction on Schedule C. Keep your receipts filed here for next year's deductions.
          </p>
        </div>
      </div>
    </div>
  );
}
