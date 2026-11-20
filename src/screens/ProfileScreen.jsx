import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Bell, 
  Phone, 
  Lock, 
  ChevronRight, 
  LogOut, 
  CheckCircle2, 
  Building2, 
  FileText,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { mockUser, mockAdvisor } from '../data/mockData';

export default function ProfileScreen({ onLogout }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  return (
    <div className="flex-1 flex flex-col px-5 pt-3 pb-28 space-y-4">
      {/* Title */}
      <div>
        <h2 className="text-xl font-extrabold text-[#1E252D] tracking-tight">
          Profile & Settings
        </h2>
        <p className="text-[11px] text-[#6B7280]">
          Client portal security & advisor settings
        </p>
      </div>

      {/* Member Card */}
      <div className="bg-white border border-[#EDE6E1] rounded-2xl p-4 shadow-ambient flex items-center gap-3.5">
        <div className="relative">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-[#EDE6E1]"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-[#1E252D] truncate">
            {mockUser.name}
          </h3>
          <p className="text-xs text-[#6B7280] truncate mt-0.5">
            {mockUser.email}
          </p>
          <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-[#834F3A] bg-[#EDE6E1]/60 px-2 py-0.5 rounded-full">
            <span>{mockUser.badge}</span>
          </div>
        </div>
      </div>

      {/* Assigned CPA Spotlight Card */}
      <div className="bg-[#FBF9F7] border border-[#EDE6E1] rounded-2xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={mockAdvisor.avatar}
            alt={mockAdvisor.name}
            className="w-9 h-9 rounded-full object-cover ring-1 ring-[#834F3A]"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#1E252D]">{mockAdvisor.name}</span>
              <span className="text-[9px] font-semibold text-[#487A64] bg-[#EBF5F0] px-1.5 py-0.2 rounded">
                Active CPA
              </span>
            </div>
            <span className="text-[10px] text-[#6B7280]">{mockAdvisor.license}</span>
          </div>
        </div>

        <span className="text-[11px] font-semibold text-[#834F3A]">
          Assigned
        </span>
      </div>

      {/* Settings Rows with Chevrons */}
      <div className="bg-white border border-[#EDE6E1] rounded-2xl divide-y divide-[#EDE6E1] shadow-ambient overflow-hidden">
        {/* Personal Info */}
        <div 
          onClick={() => alert(`Personal Info: SSN Masked ${mockUser.ssnMasked}, Filing Status: ${mockUser.filingStatus}, Dependents: ${mockUser.dependents}`)}
          className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E252D]">Personal Info</h4>
              <p className="text-[10px] text-[#6B7280]">SSN, Filing Status, Dependents</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        {/* Notifications */}
        <div 
          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E252D]">Notifications</h4>
              <p className="text-[10px] text-[#6B7280]">Push, SMS, Email updates</p>
            </div>
          </div>
          <div className={`w-8 h-4 rounded-full transition-colors flex items-center p-0.5 ${
            notificationsEnabled ? 'bg-[#834F3A]' : 'bg-gray-300'
          }`}>
            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
              notificationsEnabled ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </div>
        </div>

        {/* Security */}
        <div 
          onClick={() => alert("Security: Face ID & 2-Factor Authentication are ACTIVE.")}
          className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E252D]">Security</h4>
              <p className="text-[10px] text-[#6B7280]">Face ID, 2-Factor Auth</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#487A64] bg-[#EBF5F0] px-2 py-0.5 rounded-full">
            Protected
          </span>
        </div>

        {/* Contact Us */}
        <div 
          onClick={() => window.open('tel:8135550199')}
          className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1E252D]">Contact Us</h4>
              <p className="text-[10px] text-[#6B7280]">Tampa Office: (813) 555-0199</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Danger Action: Soft red outlined Log Out button */}
      <div className="pt-2">
        <button
          onClick={onLogout}
          className="w-full h-11 border border-[#BA5D48]/30 bg-[#FDF5F2] hover:bg-[#BA5D48]/10 text-[#BA5D48] font-bold rounded-xl flex items-center justify-center gap-2 transition duration-150 touch-press"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Regulatory Footer */}
      <div className="text-center pt-2 pb-4">
        <div className="text-[10px] font-bold tracking-wider uppercase text-[#834F3A]">
          • DIRECT CERTIFIED CPA PRACTICE •
        </div>
        <div className="text-[10px] text-[#9CA3AF] mt-0.5">
          Count On Us LLC • Tampa, Florida • v2.4.0
        </div>
      </div>
    </div>
  );
}
