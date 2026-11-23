import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Smartphone, 
  KeyRound, 
  Lock, 
  CheckCircle2, 
  Fingerprint, 
  Laptop, 
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

export default function SecurityModal({ isOpen, onClose }) {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [autoLockDuration, setAutoLockDuration] = useState('5min');
  
  // Password change state
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [passMessage, setPassMessage] = useState(null);

  if (!isOpen) return null;

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setPassMessage({ type: 'error', text: 'Password must be at least 8 characters.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPassMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    setPassMessage({ type: 'success', text: 'Password updated successfully!' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => {
      setShowPasswordSection(false);
      setPassMessage(null);
    }, 2000);
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
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1E252D]">Security & Access</h3>
              <p className="text-[10px] text-[#6B7280]">Biometrics, 2FA & portal protection</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 border border-[#EDE6E1] flex items-center justify-center text-gray-500 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 overflow-y-auto space-y-4 pb-8">
          {/* Security Status Card */}
          <div className="p-3.5 bg-[#EBF5F0] border border-[#D1E7DD] rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#487A64] shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-[#1E252D]">Account Protected</p>
                <p className="text-[10px] text-[#487A64] font-medium">IRS 4506-C compliant 256-bit AES encryption</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-[#487A64] bg-white px-2 py-0.5 rounded-full border border-[#D1E7DD]">
              Active
            </span>
          </div>

          {/* Quick Toggles */}
          <div className="bg-white border border-[#EDE6E1] rounded-2xl divide-y divide-[#EDE6E1] overflow-hidden">
            {/* Biometric Auth */}
            <div 
              onClick={() => setFaceIdEnabled(!faceIdEnabled)}
              className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                  <Fingerprint className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E252D]">Face ID & Touch ID</h4>
                  <p className="text-[10px] text-[#6B7280]">Fast biometric login on this device</p>
                </div>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors flex items-center p-0.5 ${
                faceIdEnabled ? 'bg-[#834F3A]' : 'bg-gray-300'
              }`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
                  faceIdEnabled ? 'translate-x-4' : 'translate-x-0'
                }`} />
              </div>
            </div>

            {/* Two Factor Auth */}
            <div 
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className="p-3.5 flex items-center justify-between hover:bg-[#FBF9F7] transition cursor-pointer touch-press"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E252D]">Two-Factor Authentication</h4>
                  <p className="text-[10px] text-[#6B7280]">SMS passcode verification</p>
                </div>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors flex items-center p-0.5 ${
                twoFactorEnabled ? 'bg-[#834F3A]' : 'bg-gray-300'
              }`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
                  twoFactorEnabled ? 'translate-x-4' : 'translate-x-0'
                }`} />
              </div>
            </div>

            {/* Auto-Lock timer */}
            <div className="p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E252D]">Session Auto-Lock</h4>
                  <p className="text-[10px] text-[#6B7280]">Lock portal after inactivity</p>
                </div>
              </div>
              <select
                value={autoLockDuration}
                onChange={(e) => setAutoLockDuration(e.target.value)}
                className="text-xs font-semibold text-[#834F3A] bg-[#FBF9F7] border border-[#EDE6E1] rounded-lg px-2 py-1 outline-none"
              >
                <option value="1min">1 min</option>
                <option value="5min">5 mins</option>
                <option value="15min">15 mins</option>
                <option value="never">Never</option>
              </select>
            </div>
          </div>

          {/* Change Password Card */}
          <div className="bg-white border border-[#EDE6E1] rounded-2xl p-3.5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FBF9F7] border border-[#EDE6E1] flex items-center justify-center text-[#834F3A]">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E252D]">Client Password</h4>
                  <p className="text-[10px] text-[#6B7280]">Last changed 3 months ago</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPasswordSection(!showPasswordSection)}
                className="text-xs font-bold text-[#834F3A] hover:underline"
              >
                {showPasswordSection ? 'Cancel' : 'Change'}
              </button>
            </div>

            {showPasswordSection && (
              <form onSubmit={handlePasswordSubmit} className="pt-2 space-y-2.5 border-t border-[#EDE6E1]">
                {passMessage && (
                  <div className={`p-2 rounded-xl text-xs flex items-center gap-1.5 ${
                    passMessage.type === 'success' 
                      ? 'bg-[#EBF5F0] text-[#487A64]' 
                      : 'bg-[#FDF5F2] text-[#BA5D48]'
                  }`}>
                    {passMessage.type === 'success' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    )}
                    <span>{passMessage.text}</span>
                  </div>
                )}

                <div>
                  <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                    Current Password
                  </label>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full px-3 py-1.5 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#834F3A]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                    New Password
                  </label>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="Min 8 characters"
                    className="w-full px-3 py-1.5 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#834F3A]"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Repeat new password"
                    className="w-full px-3 py-1.5 text-xs border border-[#EDE6E1] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#834F3A]"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="text-[11px] text-[#6B7280] flex items-center gap-1 hover:text-[#1E252D]"
                  >
                    {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPass ? 'Hide' : 'Show'} passwords</span>
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#834F3A] hover:bg-[#6e4130] text-white text-xs font-bold rounded-xl transition"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Active Sessions */}
          <div className="bg-[#FBF9F7] border border-[#EDE6E1] rounded-2xl p-3.5 space-y-2.5">
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B7280]">
              Active Devices & Logins
            </h4>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-[#834F3A]" />
                <div>
                  <p className="text-xs font-bold text-[#1E252D]">iPhone 15 Pro • Tampa, FL</p>
                  <p className="text-[10px] text-[#487A64] font-medium">This device • Active now</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#EDE6E1]">
              <div className="flex items-center gap-2.5">
                <Laptop className="w-4 h-4 text-[#6B7280]" />
                <div>
                  <p className="text-xs font-bold text-[#1E252D]">MacBook Pro • Safari</p>
                  <p className="text-[10px] text-[#6B7280]">Last active yesterday at 4:15 PM</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => alert("Remote session ended.")}
                className="text-[10px] text-[#BA5D48] font-bold hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
