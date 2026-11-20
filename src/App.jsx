import React, { useState } from 'react';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DocsScreen from './screens/DocsScreen';
import BookingScreen from './screens/BookingScreen';
import InvoicesScreen from './screens/InvoicesScreen';
import ProfileScreen from './screens/ProfileScreen';

// Modals
import UploadModal from './components/UploadModal';
import PaymentModal from './components/PaymentModal';
import MessageAdvisorModal from './components/MessageAdvisorModal';
import BookingConfirmModal from './components/BookingConfirmModal';
import DocPreviewModal from './components/DocPreviewModal';
import NotificationDrawer from './components/NotificationDrawer';

export default function App() {
  // Current screen state: 'welcome', 'home', 'docs', 'booking', 'bills', 'profile'
  const [currentTab, setCurrentTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  // View mode: 'simulator' (centered iOS device) or 'gallery' (all 6 screens side-by-side)
  const [viewMode, setViewMode] = useState('simulator');

  // Interactive Modals State
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Dynamic screen title for the persistent header
  const getScreenTitle = () => {
    switch (currentTab) {
      case 'home': return 'Home';
      case 'docs': return 'Documents';
      case 'booking': return 'Appointments';
      case 'bills': return 'Invoices';
      case 'profile': return 'Profile';
      default: return 'Count On Us';
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentTab('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentTab('welcome');
  };

  const handleTabChange = (tab) => {
    if (tab === 'welcome') {
      setIsAuthenticated(false);
      setCurrentTab('welcome');
    } else {
      setIsAuthenticated(true);
      setCurrentTab(tab);
    }
  };

  return (
    <div className="min-h-screen bg-[#101216] text-[#1B1C1B] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col items-center justify-center py-4 px-2 sm:px-6 antialiased selection:bg-[#834F3A]/30 selection:text-[#834F3A]">
     
      {/* VIEW 1: SINGLE INTERACTIVE PHONE SIMULATOR (Centered on Canvas) */}
      {viewMode === 'simulator' && (
        <div className="relative my-auto">
          {/* External Phone Chassis Ring */}
          <div className="relative w-full max-w-[412px] sm:w-[390px] h-[844px] max-h-[100dvh] sm:max-h-[844px] bg-[#FBF9F7] text-[#1B1C1B] rounded-[44px] sm:border-[8px] sm:border-[#272B33] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
            
            {/* iOS Status Bar */}
            <StatusBar dark={false} />

            {/* Persistent Top Header (Screens 2-6) */}
            {isAuthenticated && currentTab !== 'welcome' && (
              <Header
                title={getScreenTitle()}
                unreadCount={2}
                onNotificationClick={() => setIsNotificationOpen(true)}
                onProfileClick={() => setCurrentTab('profile')}
              />
            )}

            {/* Active Screen View */}
            <main className="flex-1 flex flex-col overflow-y-auto relative">
              {(!isAuthenticated || currentTab === 'welcome') && (
                <WelcomeScreen onLogin={handleLogin} />
              )}

              {isAuthenticated && currentTab === 'home' && (
                <HomeScreen
                  onNavigate={setCurrentTab}
                  onOpenUpload={() => setIsUploadOpen(true)}
                  onOpenMessage={() => setIsMessageOpen(true)}
                  onOpenDoc={(doc) => setSelectedDoc(doc)}
                />
              )}

              {isAuthenticated && currentTab === 'docs' && (
                <DocsScreen
                  onOpenUpload={() => setIsUploadOpen(true)}
                  onSelectDoc={(doc) => setSelectedDoc(doc)}
                />
              )}

              {isAuthenticated && currentTab === 'booking' && (
                <BookingScreen
                  onConfirmBooking={(details) => setConfirmedBooking(details)}
                />
              )}

              {isAuthenticated && currentTab === 'bills' && (
                <InvoicesScreen
                  onOpenPayment={() => setIsPaymentOpen(true)}
                />
              )}

              {isAuthenticated && currentTab === 'profile' && (
                <ProfileScreen
                  onLogout={handleLogout}
                />
              )}
            </main>

            {/* Persistent Bottom Dock Navigation Bar (Screens 2-6) */}
            {isAuthenticated && currentTab !== 'welcome' && (
              <BottomNav
                currentTab={currentTab}
                setTab={setCurrentTab}
              />
            )}

            {/* Home Indicator Bar (Welcome screen only) */}
            {(!isAuthenticated || currentTab === 'welcome') && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-50 pointer-events-none" />
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: FIGMA 6-SCREEN GALLERY VIEW (Side-by-Side Canvas) */}
      {viewMode === 'gallery' && (
        <div className="w-full max-w-[1900px] overflow-x-auto pb-12 pt-2">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#834F3A] bg-[#EDE6E1]/20 px-3 py-1 rounded-full border border-white/10">
              6-Screen Master Architecture Overview
            </span>
            <h2 className="text-xl font-black text-white mt-2">
              Count On Us — Tampa, FL Boutique Advisory System
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Click any screen to interact or test inputs directly!
            </p>
          </div>

          <div className="flex items-start justify-center gap-6 min-w-max px-6">
            {/* Screen 1: Welcome / Login */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">1. Welcome / Login</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <WelcomeScreen onLogin={() => {
                  setCurrentTab('home');
                  setViewMode('simulator');
                }} />
                <div className="w-28 h-1 bg-black/20 rounded-full mx-auto my-2" />
              </div>
            </div>

            {/* Screen 2: Home Dashboard */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">2. Home Dashboard</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <Header title="Home" unreadCount={2} onNotificationClick={() => setIsNotificationOpen(true)} onProfileClick={() => {}} />
                <div className="flex-1 overflow-y-auto">
                  <HomeScreen
                    onNavigate={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }}
                    onOpenUpload={() => setIsUploadOpen(true)}
                    onOpenMessage={() => setIsMessageOpen(true)}
                    onOpenDoc={(d) => setSelectedDoc(d)}
                  />
                </div>
                <BottomNav currentTab="home" setTab={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }} />
              </div>
            </div>

            {/* Screen 3: Documents */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">3. Documents</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <Header title="Documents" unreadCount={2} onNotificationClick={() => setIsNotificationOpen(true)} onProfileClick={() => {}} />
                <div className="flex-1 overflow-y-auto">
                  <DocsScreen
                    onOpenUpload={() => setIsUploadOpen(true)}
                    onSelectDoc={(d) => setSelectedDoc(d)}
                  />
                </div>
                <BottomNav currentTab="docs" setTab={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }} />
              </div>
            </div>

            {/* Screen 4: Book Appointment */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">4. Book Appointment</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <Header title="Appointments" unreadCount={2} onNotificationClick={() => setIsNotificationOpen(true)} onProfileClick={() => {}} />
                <div className="flex-1 overflow-y-auto">
                  <BookingScreen
                    onConfirmBooking={(details) => setConfirmedBooking(details)}
                  />
                </div>
                <BottomNav currentTab="booking" setTab={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }} />
              </div>
            </div>

            {/* Screen 5: Invoices & Payments */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">5. Invoices & Payments</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <Header title="Invoices" unreadCount={2} onNotificationClick={() => setIsNotificationOpen(true)} onProfileClick={() => {}} />
                <div className="flex-1 overflow-y-auto">
                  <InvoicesScreen
                    onOpenPayment={() => setIsPaymentOpen(true)}
                  />
                </div>
                <BottomNav currentTab="bills" setTab={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }} />
              </div>
            </div>

            {/* Screen 6: Profile & Settings */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-gray-400 mb-2">6. Profile & Settings</span>
              <div className="w-[360px] min-h-[780px] bg-[#FBF9F7] rounded-[36px] border border-[#EDE6E1] shadow-2xl overflow-hidden flex flex-col relative">
                <StatusBar />
                <Header title="Profile" unreadCount={2} onNotificationClick={() => setIsNotificationOpen(true)} onProfileClick={() => {}} />
                <div className="flex-1 overflow-y-auto">
                  <ProfileScreen
                    onLogout={handleLogout}
                  />
                </div>
                <BottomNav currentTab="profile" setTab={(tab) => { setCurrentTab(tab); setViewMode('simulator'); }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Modals */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploaded={(doc) => {
          setSelectedDoc(doc);
        }}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        onPaymentSuccess={() => {
          // Success triggered
        }}
      />

      <MessageAdvisorModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />

      <BookingConfirmModal
        isOpen={Boolean(confirmedBooking)}
        bookingDetails={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />

      <DocPreviewModal
        isOpen={Boolean(selectedDoc)}
        doc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        onNavigate={(tab) => setCurrentTab(tab)}
      />
    </div>
  );
}
