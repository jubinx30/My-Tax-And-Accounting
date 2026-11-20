import React, { useState } from 'react';
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

  return (
    <div className="w-full min-h-screen bg-[#FBF9F7] text-[#1B1C1B] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col antialiased selection:bg-[#834F3A]/30 selection:text-[#834F3A]">
      {/* Top Header: edge-to-edge full width */}
      {isAuthenticated && currentTab !== 'welcome' && (
        <Header
          title={getScreenTitle()}
          unreadCount={2}
          onNotificationClick={() => setIsNotificationOpen(true)}
          onProfileClick={() => setCurrentTab('profile')}
        />
      )}

      {/* Main Content: full width, naturally scrollable across all screen sizes */}
      <main className="flex-1 w-full max-w-lg mx-auto flex flex-col relative overscroll-contain">
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

      {/* Bottom Navigation: pinned edge-to-edge at bottom across mobile */}
      {isAuthenticated && currentTab !== 'welcome' && (
        <BottomNav
          currentTab={currentTab}
          setTab={setCurrentTab}
        />
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
