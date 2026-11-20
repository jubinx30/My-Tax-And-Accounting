import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

export default function WelcomeScreen({ onLogin }) {
  const [email, setEmail] = useState('sarah@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 450);
  };

  return (
    <div className="flex-1 flex flex-col justify-between px-6 py-6 min-h-full w-full max-w-md mx-auto">
      {/* Top spacer with subtle security indicator */}
      <div className="flex items-center justify-center pt-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5F0] text-[#487A64] text-xs font-semibold border border-[#D2E8DD]/60">
          <ShieldCheck className="w-3.5 h-3.5" />
          256-Bit Bank-Grade Client Portal
        </span>
      </div>

      {/* Brand & Wordmark */}
      <div className="flex flex-col items-center text-center my-auto py-6">
        <div className="mb-4">
          <BrandLogo size="xl" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E252D] tracking-tight">
          Count On Us
        </h1>
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#834F3A] uppercase mt-1">
          Tax & Accounting • Tampa, FL
        </p>
        <p className="text-xs text-[#6B7280] max-w-[280px] mt-2">
          Premier boutique advisory for personal wealth, corporate filing & proactive tax strategies.
        </p>

        {/* Form Card */}
        <div className="w-full mt-7 bg-white rounded-2xl border border-[#EDE6E1] p-5 shadow-ambient text-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Address Field */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E252D] mb-1.5">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-[#834F3A] absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl text-sm text-[#1E252D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#834F3A] focus:ring-1 focus:ring-[#834F3A] transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1E252D] mb-1.5">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-[#834F3A] absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl text-sm text-[#1E252D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#834F3A] focus:ring-1 focus:ring-[#834F3A] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 text-[#9CA3AF] hover:text-[#1E252D] transition focus:outline-none p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Forgot password link */}
            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                onClick={() => alert("Password reset instructions sent to " + email)}
                className="text-xs font-semibold text-[#834F3A] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Primary Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#834F3A] hover:bg-[#A46B55] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition duration-150 touch-press disabled:opacity-75"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Access banner */}
          <div className="mt-4 pt-3 border-t border-[#EDE6E1] flex items-center justify-between text-[11px] text-[#6B7280]">
            <span className="flex items-center gap-1 font-medium text-[#834F3A]">
              <Sparkles className="w-3.5 h-3.5" /> Demo Account
            </span>
            <span className="text-slate-500">Sarah Jenkins (Pre-filled)</span>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center pb-4 pt-2">
        <button
          onClick={onLogin}
          className="text-xs text-[#6B7280] hover:text-[#1E252D] transition"
        >
          New client? <span className="font-bold text-[#834F3A] underline">Create account</span>
        </button>
        <p className="text-[10px] text-[#9CA3AF] mt-2">
          Certified CPA Practice • Tampa Office: (813) 555-0199
        </p>
      </div>
    </div>
  );
}
