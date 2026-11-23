export const mockUser = {
  name: "Sarah Jenkins",
  email: "sarah.jenkins@example.com",
  phone: "(813) 555-0199",
  badge: "Client since 2022 • Personal & Business",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  address: "Bayshore Blvd, Tampa, FL 33606",
  filingStatus: "Married Filing Jointly",
  dependents: 2,
  ssnMasked: "•••-••-4892",
};

export const mockAdvisor = {
  name: "Marcus Vance",
  title: "Assigned CPA & Tax Strategist",
  firm: "Count On Us CPA Group LLC",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
  status: "Online",
  license: "FL CPA #58921",
};

export const mockReturnStatus = {
  taxYear: "2026",
  form: "Form 1040 (Individual Return)",
  filingType: "Joint Federal Return",
  filingStatus: "Married Filing Jointly",
  stateReturn: "Florida • No State Income Tax",
  status: "In Review",
  stage: 3,
  totalStages: 4,
  stageTitle: "Deduction Optimization",
  stageDescription: "Marcus is finalizing Schedule C deductions & EV clean vehicle credit.",
  progressPercent: 75,
  estCompletion: "Mar 24, 2026",
  irsDeadline: "Apr 15, 2026",
  daysRemaining: 22,
  refundEstimate: 4820,
  refundDifference: "+ $350 vs 2025",
  milestones: [
    { id: 1, label: "Intake", status: "completed" },
    { id: 2, label: "Doc Audit", status: "completed" },
    { id: 3, label: "Deductions", status: "active" },
    { id: 4, label: "E-File", status: "pending" },
  ],
  upcomingEvent: {
    date: "Mar 18, 2:30 PM",
    title: "Video Consultation",
    type: "Zoom Advisory",
    advisor: "Marcus Vance",
  },
};

export const mockActivities = [
  {
    id: "act-1",
    title: "W-2 Uploaded",
    subtitle: "Yesterday • Employer Form",
    status: "Completed",
    statusType: "sage",
    date: "Yesterday",
    icon: "file-check",
  },
  {
    id: "act-2",
    title: "Q4 Bookkeeping",
    subtitle: "Mar 10 • Vance & Co",
    status: "In Review",
    statusType: "terracotta",
    date: "Mar 10",
    icon: "calculator",
  },
  {
    id: "act-3",
    title: "Tax Prep Invoice",
    subtitle: "Mar 05 • INV-2024-86",
    status: "Pending",
    statusType: "amber",
    date: "Mar 05",
    icon: "receipt",
  },
];

export const mockDocuments = [
  {
    id: "doc-1",
    name: "2026_Form_1040_Draft.pdf",
    category: "Tax",
    date: "Mar 14, 2026",
    size: "2.4 MB",
    status: "In Review",
    statusType: "terracotta",
  },
  {
    id: "doc-2",
    name: "Q4_Payroll_Summary.xlsx",
    category: "Payroll",
    date: "Mar 08, 2025",
    size: "840 KB",
    status: "Approved",
    statusType: "sage",
  },
  {
    id: "doc-3",
    name: "Jan_Equipment_Receipts.pdf",
    category: "Receipts",
    date: "Feb 28, 2025",
    size: "1.1 MB",
    status: "Review Needed",
    statusType: "terracotta",
  },
  {
    id: "doc-4",
    name: "1099-NEC_Consulting.pdf",
    category: "Tax",
    date: "Feb 15, 2025",
    size: "520 KB",
    status: "Filed",
    statusType: "slate",
  },
  {
    id: "doc-5",
    name: "Schedule_C_Deductions.pdf",
    category: "Tax",
    date: "Feb 02, 2025",
    size: "1.8 MB",
    status: "Archived",
    statusType: "slate",
  },
];

export const serviceCategories = [
  {
    id: "tax-prep",
    title: "Tax Prep",
    desc: "Individual & Corporate",
    icon: "file-spreadsheet",
    badge: "Most Popular",
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    desc: "Monthly ledgers & logs",
    icon: "book-open",
  },
  {
    id: "payroll",
    title: "Payroll",
    desc: "W2, 1099, direct deposit",
    icon: "users",
  },
  {
    id: "quickbooks",
    title: "QuickBooks",
    desc: "Setup & reconciliation",
    icon: "layers",
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    desc: "Quarterly strategies",
    icon: "pie-chart",
  },
  {
    id: "consultation",
    title: "Consultation",
    desc: "1-on-1 advisor review",
    icon: "phone-call",
  },
];

export const availableDates = [
  { day: "Mon", date: "17", full: "Mon Oct 17" },
  { day: "Tue", date: "18", full: "Tue Oct 18" },
  { day: "Wed", date: "19", full: "Wed Oct 19" },
  { day: "Thu", date: "20", full: "Thu Oct 20" },
  { day: "Fri", date: "21", full: "Fri Oct 21" },
  { day: "Sat", date: "22", full: "Sat Oct 22" },
];

export const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "2:00 PM",
  "3:30 PM",
  "5:00 PM",
];

export const mockInvoices = [
  {
    id: "inv-2024-084",
    title: "2024 Tax Prep & Filing",
    code: "INV-2024-084",
    dueDate: "Due Mar 25, 2025",
    amount: 450.00,
    status: "Due Mar 25",
    isPending: true,
    issuedBy: "Count On Us CPA Group LLC",
    actionLabel: "Download PDF",
  },
  {
    id: "inv-2024-012",
    title: "Q4 Bookkeeping Reconciliation",
    code: "INV-2024-012",
    dueDate: "Jan 15, 2025",
    amount: 320.00,
    status: "Paid",
    isPending: false,
    issuedBy: "Paid via Visa •••• 4284",
    actionLabel: "Receipt ↗",
  },
  {
    id: "inv-2024-780",
    title: "QuickBooks Setup & Cleanup",
    code: "INV-2024-780",
    dueDate: "Nov 20, 2024",
    amount: 600.00,
    status: "Paid",
    isPending: false,
    issuedBy: "Paid via ACH Electronic Transfer",
    actionLabel: "Receipt ↗",
  },
];
