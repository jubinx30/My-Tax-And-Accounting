import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Users, 
  Lock, 
  Edit2, 
  Check 
} from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function PersonalInfoModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handleSaveInfo = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div 
      className="fixed md:absolute inset-0 z-50 bg-black/55 backdrop-blur-[2px] flex items-end justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full bg-white rounded-t-3xl shadow-2xl border-t border-[#EDE6E1] overflow-hidden flex flex-col max-h-[85%] animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Handle */}
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mt-2.5 mb-1 flex-shrink-0" />

        {/* Modal Header */}
        <div className="px-5 py-3 border-b border-[#EDE6E1] flex items-center justify-between bg-[#FBF9F7] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-white border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
              <User className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1E252D]">Personal Tax Info</h3>
              <p className="text-[10px] text-[#6B7280]">IRS client profile details</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 border border-[#EDE6E1] flex items-center justify-center text-gray-500 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Success Toast */}
        {savedSuccess && (
          <div className="bg-[#EBF5F0] border-b border-[#D1E7DD] px-5 py-2.5 flex items-center gap-2 text-xs font-semibold text-[#487A64] flex-shrink-0">
            <Check className="w-4 h-4 text-[#487A64]" />
            <span>Personal details updated successfully.</span>
          </div>
        )}

        {/* Modal Body: fully scrollable within container */}
        <div className="p-5 overflow-y-auto space-y-4 pb-8">
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
                  className="flex-1 py-2.5 text-xs font-bold text-[#6B7280] bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-[#834F3A] hover:bg-[#6e4130] rounded-xl transition"
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
                  className="w-full py-2.5 bg-[#834F3A] hover:bg-[#6e4130] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition touch-press shadow-sm"
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
  );
}
