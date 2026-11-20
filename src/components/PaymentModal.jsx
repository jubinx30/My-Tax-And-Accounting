import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PaymentModal({ isOpen, onClose, onPaymentSuccess }) {
  const [payMethod, setPayMethod] = useState('apple'); // 'apple' or 'card'
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
      setTimeout(() => {
        onPaymentSuccess();
        onClose();
        setIsDone(false);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-[390px] bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-[#EDE6E1]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#EDE6E1]">
          <div>
            <h3 className="text-base font-extrabold text-[#1E252D]">
              Secure Bill Pay
            </h3>
            <p className="text-[11px] text-[#6B7280]">
              Count On Us LLC • Tampa Office
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FBF9F7] text-gray-500 hover:text-gray-800 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isDone ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#EBF5F0] text-[#487A64] flex items-center justify-center mb-3 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-extrabold text-[#1E252D]">
              Payment Successful!
            </h4>
            <p className="text-xs text-[#6B7280] mt-1">
              $450.00 USD paid to Count On Us CPA Group. Receipt sent to your email.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {/* Amount Summary */}
            <div className="bg-[#FBF9F7] rounded-2xl p-4 border border-[#EDE6E1] text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                Invoice INV-2024-084
              </span>
              <div className="text-2xl font-black text-[#1E252D] tabular-nums mt-0.5">
                $450.00 USD
              </div>
              <p className="text-[10px] text-[#6B7280] mt-0.5">
                2024 Individual & Corporate Tax Prep & Filing
              </p>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPayMethod('apple')}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition ${
                  payMethod === 'apple'
                    ? 'border-[#1E252D] bg-[#1E252D] text-white shadow-sm'
                    : 'border-[#EDE6E1] bg-white text-[#1E252D]'
                }`}
              >
                <span className="text-xs font-bold">Apple Pay</span>
                <span className="text-[9px] opacity-80">Instant 1-Click</span>
              </button>

              <button
                type="button"
                onClick={() => setPayMethod('card')}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center transition ${
                  payMethod === 'card'
                    ? 'border-[#834F3A] bg-[#834F3A] text-white shadow-sm'
                    : 'border-[#EDE6E1] bg-white text-[#1E252D]'
                }`}
              >
                <span className="text-xs font-bold">Visa •••• 4284</span>
                <span className="text-[9px] opacity-80">Default Card</span>
              </button>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-2 text-[10px] text-[#487A64] bg-[#EBF5F0] p-2.5 rounded-xl border border-[#D2E8DD]">
              <Lock className="w-3.5 h-3.5 flex-shrink-0" />
              <span>TLS 1.3 End-to-End Encrypted via Stripe Client Portal</span>
            </div>

            {/* Pay Action Button */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className={`w-full h-12 font-bold rounded-xl flex items-center justify-center gap-2 transition touch-press text-white ${
                payMethod === 'apple' ? 'bg-[#1E252D] hover:bg-black' : 'bg-[#834F3A] hover:bg-[#A46B55]'
              }`}
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Pay $450.00 USD</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
