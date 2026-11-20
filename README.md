# Count On Us — Tax & Accounting Advisory Mobile App

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-834F3A)](#)

A luxury mobile client portal and advisory interface designed for **Count On Us CPA Group LLC**, a boutique tax, bookkeeping, and wealth advisory practice based in **Tampa, Florida**.

The application delivers an executive, frictionless client experience—enabling high-net-worth individuals and business owners to track tax return progress, upload and review financial documents, book consultations with their assigned CPA, and manage invoices and payments securely.

---

## 📑 Table of Contents

- [Overview & Value Proposition](#overview--value-proposition)
- [Key Features & User Journey](#key-features--user-journey)
  - [1. Welcome & Onboarding](#1-welcome--onboarding)
  - [2. Executive Dashboard (Home)](#2-executive-dashboard-home)
  - [3. Secure Document Vault](#3-secure-document-vault)
  - [4. Appointment & Strategy Booking](#4-appointment--strategy-booking)
  - [5. Invoices & Secure Billing](#5-invoices--secure-billing)
  - [6. Client Profile & Firm Security](#6-client-profile--firm-security)
- [Interactive Modals & Drawers](#interactive-modals--drawers)
- [Design System & Aesthetics](#design-system--aesthetics)
- [Dual Presentation Modes](#dual-presentation-modes)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Mock Data & Customization](#mock-data--customization)

---

## 🌟 Overview & Value Proposition

Traditional accounting portals are often clunky, sterile, and confusing. **Count On Us** reimagines the client-CPA relationship with a mobile-first, warm editorial design inspired by luxury hospitality and modern fintech.

Clients enjoy full transparency into their tax preparation milestones, direct line communication with their dedicated CPA (e.g., *Marcus Vance, FL CPA #58921*), and instant document verification.

---

## 🚀 Key Features & User Journey

### 1. Welcome & Onboarding
- **Branded Welcome**: Elegant Tampa, FL firm branding with gold-standard credentials.
- **Biometric & Secure Login**: One-tap simulated sign-in for seamless authentication and demo access.
- **Client Security Assurance**: Visual badges highlighting encrypted document storage and professional CPA licensure.

### 2. Executive Dashboard (Home)
- **Live Tax Return Tracker**: 4-stage visual progress pipeline (`Intake` → `Preparation` → `Deduction Optimization` → `E-Filing & Finalization`).
- **Refund & Liability Estimator**: High-contrast summary cards showing estimated federal/state refund amounts and year-over-year comparisons.
- **Next Upcoming Advisory**: Fast access card for upcoming Zoom consultations or in-person office meetings.
- **Quick Action Bar**: One-touch shortcuts to upload documents, direct-message the advisor, or pay outstanding invoices.
- **Assigned Advisor Card**: Persistent presence of the client's assigned CPA with active online status indicator.
- **Recent Activity Stream**: Chronological feed of recent document approvals, invoice deliveries, and audit checkpoints.

### 3. Secure Document Vault
- **Categorized Document Management**: Filter documents by **Tax Returns**, **W-2 & 1099 Forms**, **Receipts & Deductions**, and **Financial Statements**.
- **Instant Search & Filter**: Real-time filtering by document title and tax year.
- **Status Badges**: Color-coded badges indicating verification state (`Verified` in sage green, `In Review` in terracotta, or `Needs Attention`).
- **Interactive Document Preview**: Modal sheet with document metadata, simulated file view, and options to share or download.
- **Quick Upload Launcher**: Floating action trigger to easily submit tax slips, receipts, and identity documents.

### 4. Appointment & Strategy Booking
- **Advisory Service Selection**: Select between *Tax Prep & Strategy*, *QBO Bookkeeping Review*, *Year-End Tax Planning*, or *General Advisory*.
- **Meeting Format Toggle**: Seamlessly choose between **Zoom HD Consultation** and **In-Person Meeting (Tampa, FL Office on Bayshore Blvd)**.
- **Date & Slot Picker**: Interactive multi-day calendar rail and dynamic morning/afternoon time slot selector.
- **Booking Confirmation**: Summary modal confirming meeting details with one-click calendar sync.

### 5. Invoices & Secure Billing
- **Account Balance Overview**: Prominent card detailing current outstanding balance, upcoming due dates, and paid totals.
- **Detailed Invoice History**: Itemized breakdown of past and active statements (e.g., Q4 Bookkeeping, 1040 Preparation, Corporate Planning).
- **Interactive Checkout Modal**: Simulated checkout supporting **Apple Pay**, **Credit / Debit Cards**, and **ACH Bank Transfer**.
- **Confetti Celebration**: Integrated visual celebration upon successful payment completion.

### 6. Client Profile & Firm Security
- **Client Identity**: Verified profile of Sarah Jenkins (masked SSN, filing status: Married Filing Jointly, 2 dependents, Tampa residence).
- **Dedicated CPA Contact Card**: Fast phone, email, and direct chat links to Marcus Vance, CPA.
- **Security & Privacy Controls**: Biometric Face ID / Touch ID toggles, 2-Factor Authentication state, and session management.
- **Notification Preferences**: Granular switches for email summaries, SMS tax alerts, and filing deadlines.

---

## 🪟 Interactive Modals & Drawers

The application includes fully functional, state-driven overlays:

| Modal / Drawer | Description |
| :--- | :--- |
| **UploadModal** | Drag-and-drop document upload interface with category selection and progress feedback. |
| **PaymentModal** | Multi-method payment sheet with instant feedback and celebratory confetti animation. |
| **MessageAdvisorModal** | Direct secure messaging thread with assigned CPA Marcus Vance, featuring quick question templates. |
| **BookingConfirmModal** | Success dialog with complete appointment details, meeting link, and calendar sync. |
| **DocPreviewModal** | High-fidelity document preview sheet with file metadata, download, and share actions. |
| **NotificationDrawer** | Slide-out notification drawer tracking unread tax alerts, document receipts, and deadlines. |

---

## 🎨 Design System & Aesthetics

The UI follows a bespoke, warm editorial theme tailored for high-end advisory services:

- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for contemporary geometric elegance and clarity.
- **Color Palette**:
  - `Warm Alabaster Cream` (`#FBF9F7`, `#EDE6E1`): Soft, premium surfaces avoiding stark clinical whites.
  - `Earthen Rose Bronze` (`#834F3A`, `#BA7A60`, `#673D2C`): Distinctive warm metallic accent signifying trust and craftsmanship.
  - `Deep Slate Navy` (`#1E252D`, `#101216`): High-contrast typography and chassis presentation.
  - `Sage Green` (`#EBF5F0`, `#487A64`): Muted positive states for approved documents and refunds.
  - `Terracotta Rose` (`#FDF5F2`, `#BA5D48`): Urgent items, payment alerts, and pending reviews.
- **Layout**: Native iOS ergonomic design with a curved bottom dock, elevated action button, top navigation header with notification bell, and device status bar.

---

## 📱 Dual Presentation Modes

The application supports two viewing paradigms within `App.jsx`:

1. **Interactive Phone Simulator** (`viewMode: 'simulator'`):
   - Centered iOS frame with authentic bezel, status bar, and smooth navigation gestures.
   - Ideal for client testing, mobile previews, and single-user walkthroughs.
2. **6-Screen Architecture Gallery** (`viewMode: 'gallery'`):
   - Panoramic canvas laying out all 6 core screens side-by-side in real time.
   - Ideal for design reviews, stakeholder presentations, and full design system audits.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom extended theme
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 📁 Project Structure

```text
mytaxandaccounting/
├── index.html                   # Entry HTML with Plus Jakarta Sans and viewport config
├── package.json                 # Dependencies and build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom design tokens, colors, fonts, and shadows
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Root container, simulator/gallery state, global modals
    ├── index.css                # Global styles, Tailwind directives, custom scrollbars
    ├── components/
    │   ├── BookingConfirmModal.jsx # Appointment confirmation modal
    │   ├── BottomNav.jsx           # Ergonomic bottom navigation dock
    │   ├── BrandLogo.jsx           # Geometric interlocking "CO" brandmark
    │   ├── DocPreviewModal.jsx     # Document viewer overlay
    │   ├── Header.jsx              # Sticky top header with brand and notification pill
    │   ├── MessageAdvisorModal.jsx # Direct CPA messaging thread
    │   ├── NotificationDrawer.jsx  # Slide-over notification center
    │   ├── PaymentModal.jsx        # Multi-option checkout modal
    │   ├── StatusBar.jsx           # Simulated mobile device status bar
    │   └── UploadModal.jsx         # Document upload dialog
    ├── data/
    │   └── mockData.js             # Realistic mock data for user, CPA, returns, invoices & docs
    └── screens/
        ├── WelcomeScreen.jsx       # Screen 1: Welcome & biometric login
        ├── HomeScreen.jsx          # Screen 2: Executive overview & tax return progress
        ├── DocsScreen.jsx          # Screen 3: Categorized document vault
        ├── BookingScreen.jsx       # Screen 4: Appointment & consultation scheduler
        ├── InvoicesScreen.jsx      # Screen 5: Billing history & invoice payment
        └── ProfileScreen.jsx       # Screen 6: Client details, advisor card & preferences
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or higher recommended).

### Installation

Clone or navigate to the repository directory and install the dependencies:

```bash
# Navigate to the project root
cd mytaxandaccounting

# Install dependencies
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open your browser at the URL provided in the terminal (typically [http://localhost:5173](http://localhost:5173)).

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📊 Mock Data & Customization

All primary data entities are cleanly decoupled into [`src/data/mockData.js`](file:///c:/Users/user/Documents/mytaxandaccounting/src/data/mockData.js):

- `mockUser`: Client name, contact details, address, masked SSN, filing status.
- `mockAdvisor`: Assigned CPA details, license number, firm name, avatar.
- `mockReturnStatus`: Active tax year, return stage (1–4), refund estimate, next consultation.
- `mockActivities`: Timeline events for recent uploads, bookkeeping updates, and invoice receipts.
- `mockDocuments`: Vault files categorized into Tax, Statements, Receipts, and Forms.
- `serviceCategories`, `availableDates`, `timeSlots`: Appointment booking matrix.
- `mockInvoices`: Unpaid and historical client billings.
- `mockNotifications`: Actionable client alerts.

Easily adjust these structures to simulate different client profiles, corporate tax scenarios, or firm branding.

---

## 📄 License

Private & Confidential — Created for **Count On Us CPA Group LLC**, Tampa, FL.
