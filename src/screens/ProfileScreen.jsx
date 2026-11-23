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
  ExternalLink,
  X,
  Edit2,
  Mail,
  MapPin,
  Users,
  Check
} from 'lucide-react';
import { mockUser, mockAdvisor } from '../data/mockData';

export default function ProfileScreen({ onLogout }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  // Personal Info Modal & Form State
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [userData, setUserData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    address: mockUser.address,
    filingStatus: mockUser.filingStatus,
    dependents: mockUser.dependents,
    ssnMasked: mockUser.ssnMasked,
  });

  const handleSaveInfo = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

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
            alt={userData.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-[#EDE6E1]"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-[#1E252D] truncate">
            {userData.name}
          </h3>
          <p className="text-xs text-[#6B7280] truncate mt-0.5">
            {userData.email}
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
          onClick={() => setIsPersonalInfoOpen(true)}
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

      {/* Personal Info Modal / Drawer */}
      {isPersonalInfoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsPersonalInfoOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-[#EDE6E1] overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-[#EDE6E1] flex items-center justify-between bg-[#FBF9F7]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1E252D]">Personal Tax Info</h3>
                  <p className="text-[11px] text-[#6B7280]">IRS client profile details</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPersonalInfoOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 border border-[#EDE6E1] flex items-center justify-center text-gray-500 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success Toast */}
            {savedSuccess && (
              <div className="bg-[#EBF5F0] border-b border-[#D1E7DD] px-5 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#487A64]">
                <Check className="w-4 h-4 text-[#487A64]" />
                <span>Personal details updated successfully.</span>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              {isEditing ? (
                <form onSubmit={handleSaveInfo} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                      Mailing Address
                    </label>
                    <input
                      type="text"
                      value={userData.address}
                      onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                        Filing Status
                      </label>
                      <select
                        value={userData.filingStatus}
                        onChange={(e) => setUserData({ ...userData, filingStatus: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A] bg-white"
                      >
                        <option value="Single">Single</option>
                        <option value="Married Filing Jointly">Married Filing Jointly</option>
                        <option value="Married Filing Separately">Married Filing Separately</option>
                        <option value="Head of Household">Head of Household</option>
                        <option value="Qualifying Surviving Spouse">Qualifying Surviving Spouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                        Dependents
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={userData.dependents}
                        onChange={(e) => setUserData({ ...userData, dependents: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#834F3A]"
                      />
                    </div>
                  </div>

                  {/* Readonly SSN notice */}
                  <div className="p-2.5 bg-[#FBF9F7] rounded-xl border border-[#EDE6E1] text-[11px] text-[#6B7280] flex items-center justify-between">
                    <span>SSN Masked: <strong>{userData.ssnMasked}</strong></span>
                    <span className="text-[9px] text-[#BA5D48] font-bold uppercase tracking-wide">Locked by CPA</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-2 text-xs font-bold text-[#6B7280] bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 text-xs font-bold text-white bg-[#834F3A] hover:bg-[#6e4130] rounded-xl transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-2.5">
                    {/* Legal Name */}
                    <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <User className="w-4 h-4 text-[#834F3A]" />
                        <div>
                          <p className="text-[10px] text-[#6B7280]">Legal Name</p>
                          <p className="text-xs font-bold text-[#1E252D]">{userData.name}</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#834F3A]" />
                        <div>
                          <p className="text-[10px] text-[#6B7280]">Email Address</p>
                          <p className="text-xs font-bold text-[#1E252D]">{userData.email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#834F3A]" />
                        <div>
                          <p className="text-[10px] text-[#6B7280]">Phone</p>
                          <p className="text-xs font-bold text-[#1E252D]">{userData.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-[#834F3A]" />
                        <div>
                          <p className="text-[10px] text-[#6B7280]">Mailing Address</p>
                          <p className="text-xs font-bold text-[#1E252D]">{userData.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Filing Status & Dependents */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-3.5 h-3.5 text-[#834F3A]" />
                          <p className="text-[10px] text-[#6B7280]">Filing Status</p>
                        </div>
                        <p className="text-xs font-bold text-[#1E252D] leading-tight">{userData.filingStatus}</p>
                      </div>

                      <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="w-3.5 h-3.5 text-[#834F3A]" />
                          <p className="text-[10px] text-[#6B7280]">Dependents</p>
                        </div>
                        <p className="text-xs font-bold text-[#1E252D]">{userData.dependents} Claimed</p>
                      </div>
                    </div>

                    {/* SSN */}
                    <div className="p-3 bg-[#FBF9F7] border border-[#EDE6E1] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Lock className="w-4 h-4 text-[#487A64]" />
                        <div>
                          <p className="text-[10px] text-[#6B7280]">Social Security Number</p>
                          <p className="text-xs font-bold text-[#1E252D] tracking-wider">{userData.ssnMasked}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-semibold text-[#487A64] bg-[#EBF5F0] px-2 py-0.5 rounded-full">
                        Encrypted
                      </span>
                    </div>
                  </div>

                  {/* Edit Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="w-full py-2.5 bg-[#834F3A] hover:bg-[#6e4130] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition touch-press"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit Personal Info</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
