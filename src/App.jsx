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
import PersonalInfoModal from './components/PersonalInfoModal';
import SecurityModal from './components/SecurityModal';
import TaxProgressModal from './components/TaxProgressModal';

export default function App() {
  // Current screen state: 'welcome', 'home', 'docs', 'booking', 'bills', 'profile'
  const [currentTab, setCurrentTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Interactive Modals State
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isTaxStatusOpen, setIsTaxStatusOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
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

  return (
    <div className="w-full h-screen h-[100dvh] md:h-auto md:min-h-screen bg-[#FBF9F7] md:bg-[#ECE7E1] text-[#1B1C1B] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col md:items-center md:justify-center md:py-8 md:px-4 antialiased selection:bg-[#834F3A]/30 selection:text-[#834F3A] overflow-hidden md:overflow-visible">
      
      {/* PC Client Preview Badge (Desktop only) */}
      <div className="hidden md:flex items-center gap-2 mb-3 text-xs font-semibold text-[#834F3A] bg-white/85 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#DDD5CC] shadow-sm select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Count On Us — Mobile App Client Prototype</span>
      </div>

      {/* Main Container: Full viewport on mobile phone (< md) / Realistic Phone Wrapper on PC (>= md) */}
      <div className="w-full h-full md:w-[390px] md:h-[844px] md:min-h-[844px] md:max-h-[844px] flex flex-col bg-[#FBF9F7] overflow-hidden relative md:rounded-[48px] md:border-[10px] md:border-[#22252B] md:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.06)]">
        
        {/* iOS Status Bar: Visible on PC wrapper, hidden on real mobile phones */}
        <div className="hidden md:block flex-shrink-0 bg-[#FBF9F7]">
          <StatusBar dark={false} />
        </div>

        {/* Persistent Top Header */}
        {isAuthenticated && currentTab !== 'welcome' && (
          <Header
            title={getScreenTitle()}
            unreadCount={2}
            onNotificationClick={() => setIsNotificationOpen(true)}
            onProfileClick={() => setCurrentTab('profile')}
          />
        )}

        {/* Main Content Area: Smooth scrolling */}
        <main className="flex-1 min-h-0 w-full overflow-y-auto relative overscroll-contain [-webkit-overflow-scrolling:touch]">
          {(!isAuthenticated || currentTab === 'welcome') && (
            <WelcomeScreen onLogin={handleLogin} />
          )}

          {isAuthenticated && currentTab === 'home' && (
            <HomeScreen
              onNavigate={setCurrentTab}
              onOpenUpload={() => setIsUploadOpen(true)}
              onOpenMessage={() => setIsMessageOpen(true)}
              onOpenDoc={(doc) => setSelectedDoc(doc)}
              onOpenTaxStatus={() => setIsTaxStatusOpen(true)}
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
              onOpenPersonalInfo={() => setIsPersonalInfoOpen(true)}
              onOpenSecurity={() => setIsSecurityOpen(true)}
            />
          )}
        </main>

        {/* Bottom Navigation */}
        {isAuthenticated && currentTab !== 'welcome' && (
          <BottomNav
            currentTab={currentTab}
            setTab={setCurrentTab}
          />
        )}

        {/* Home Indicator Bar on PC wrapper */}
        <div className="hidden md:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/25 rounded-full z-50 pointer-events-none" />

        {/* Modals contained inside the mobile wrapper on desktop */}
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

        <PersonalInfoModal
          isOpen={isPersonalInfoOpen}
          onClose={() => setIsPersonalInfoOpen(false)}
        />

        <SecurityModal
          isOpen={isSecurityOpen}
          onClose={() => setIsSecurityOpen(false)}
        />

        <TaxProgressModal
          isOpen={isTaxStatusOpen}
          onClose={() => setIsTaxStatusOpen(false)}
          onOpenMessage={() => setIsMessageOpen(true)}
          onOpenDoc={(doc) => setSelectedDoc(doc)}
        />
      </div>
    </div>
  );
}
