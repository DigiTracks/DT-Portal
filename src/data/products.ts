import type { Product } from './types'

export const ACCENT = {
  vedik: '#6366f1',           // Indigo
  chronos: '#0d9488',         // Teal
  garix: '#ea580c',           // Orange
  glowra: '#db2777',          // Rose / Pink
  hireez: '#8b5cf6',          // Violet
  vertex: '#0284c7',          // Sky blue
  unify: '#d97706',           // Amber
  orion: '#0ea5e9',           // Cyan
  orionHunter: '#e11d48'      // Crimson
}

export const PRODUCTS: Product[] = [
  {
    id: 'vedik',
    slug: 'vedik',
    name: 'Vedik',
    category: 'Education',
    type: 'industry',
    tagline: 'Single Unified Platform for Schools, Colleges & Universities',
    description:
      'A single unified education platform that scales effortlessly from K-12 schools to collegiate institutions and multi-campus universities. Built on a single codebase and unified data model, configured per institution type.',
    problem:
      'Educational institutions struggle with fragmented software stacks: schools use basic portals, colleges purchase disconnected CBCS systems, and universities manage unwieldy custom software with separate databases.',
    capabilities: [
      'K-12 School Lifecycle & CBSE/ICSE Compliance',
      'CBCS Credit & Semester Examination Engine',
      'Multi-Campus Governance & Central Dashboard',
      'Admissions, Merit Lists & Dynamic Enrollment',
      'Tuition, Fee Structures & Digital Ledgers',
      'Parent, Student & Faculty Portals',
      'Learning Management System (LMS)',
      'NAAC, NBA & State Accreditation Readiness',
      'Research & PhD Dissertation Tracking',
      'Distance & Online Education Governance'
    ],
    platforms: ['Web', 'Mobile', 'Desktop'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/vedik',
    accent: ACCENT.vedik,
    logo: '/products/vedik.png',
    demoUrl: 'https://vedik-demo.netlify.app/dashboard/',
    deployment: 'docker',
    metrics: {
      loc: 33000,
      endpoints: 78,
      modules: 21,
      tests: 136
    },
    educationTiers: [
      {
        tier: 'Schools (K-12)',
        target: 'Primary & Secondary Schools',
        status: 'Ready to Deploy',
        capabilities: [
          'Admissions & Enrollment',
          'Attendance & Daily Gradebooks',
          'Parent Portal & Notifications',
          'Fee Collection & Digital Invoices',
          'Timetables & Staff Scheduling',
          'Report Cards & Performance',
          'Transport & Bus Routing',
          'Library Management System',
          'CBSE, ICSE & State Board Compliance'
        ],
        activates: ['Attendance', 'Gradebooks', 'Parent Portal', 'Transport', 'CBSE/ICSE']
      },
      {
        tier: 'Colleges',
        target: 'Undergraduate & Graduate Colleges',
        status: 'Ready to Deploy',
        capabilities: [
          'Admissions & Merit Lists',
          'Choice-Based Credit System (CBCS)',
          'Semester Examination Engine',
          'CBCS Cumulative GPA Grading',
          'Faculty Workload Allocation',
          'NAAC & NBA Accreditation Readiness',
          'Campus Placement Cell & Drives',
          'Alumni Network & Community'
        ],
        activates: ['CBCS / Credits', 'Semester Exams', 'Placement Cell', 'NAAC / NBA']
      },
      {
        tier: 'Universities',
        target: 'Multi-Campus Universities & Affiliated Systems',
        status: 'In Development',
        capabilities: [
          'Multi-Campus Central Governance & Affiliation',
          'PhD & Research Lifecycle Management',
          'Distance & Online Education (LMS)',
          'Inter-Campus Student Mobility & Transfers',
          'NIRF, UGC & State Regulatory Compliance'
        ],
        activates: ['Multi-Campus', 'PhD / Research', 'Distance Ed', 'NIRF', 'Affiliation Mgmt']
      }
    ],
    educationMatrix: [
      { module: 'Admissions & Enrollment', schools: true, colleges: true, universities: true },
      { module: 'Academics & Curriculum', schools: 'CBSE / ICSE', colleges: 'CBCS / Credits', universities: 'Curriculum Framework' },
      { module: 'Timetabling & Scheduling', schools: true, colleges: true, universities: true },
      { module: 'Examinations & Assessment', schools: 'Term Exams', colleges: 'Semester / CBCS', universities: 'Controller of Exams' },
      { module: 'Student Lifecycle & Records', schools: true, colleges: true, universities: true },
      { module: 'Fee & Tuition Management', schools: true, colleges: true, universities: true },
      { module: 'Learning Management (LMS)', schools: true, colleges: true, universities: true },
      { module: 'Accreditation & Compliance', schools: 'Board / State', colleges: 'NAAC / NBA', universities: 'NIRF / UGC / NAAC' },
      { module: 'Multi-Campus Governance', schools: false, colleges: false, universities: true },
      { module: 'Research / PhD Management', schools: false, colleges: false, universities: true },
      { module: 'Distance / Online Education', schools: false, colleges: true, universities: true }
    ],
    roadmap: [
      'Multi-campus central governance dashboard (Universities Tier)',
      'PhD dissertation and research publication tracking module',
      'Affiliation management portal for university exam controllers'
    ],
    narrative: {
      purpose: 'One unified education platform: Schools · Colleges · Universities - same data model, configured per institution type',
      enhances: [
        'Single verified codebase and shared schema scaling from 500 students to 100,000+ across campuses',
        'Schools activate: Attendance, Gradebooks, Parent Portal, Transport, and CBSE/ICSE compliance',
        'Colleges activate: CBCS credit engines, semester exam ledgers, placement cell, and NAAC accreditation',
        'Universities activate: Multi-campus governance, PhD research workflows, and centralized affiliation control'
      ],
      removes: [
        'Purchasing three incompatible education software suites across school networks and collegiate trusts',
        'Manual student record migrations between secondary schools and affiliated degree colleges',
        'Costly bespoke IT infrastructure and custom server setups for each institution type',
        'Disjointed data silos between campus administration, finance, faculty, and examination branches'
      ],
      unique: [
        'Shared polymorphic architecture: same core database entities adapt from grades to CBCS credits',
        'Modern performant tech stack: Next.js 16 + React 19 web frontend, Flutter native mobile, Docker deployment',
        'Unified role-based access control protecting student privacy across multi-tier campus networks',
        'Configurable modular activation: enable only the capabilities required for your campus classification'
      ],
      reducedFriction: [
        'Zero data schema drift when expanding from single campus to multi-college trust',
        'Instant multi-platform access via responsive web and native iOS/Android mobile apps',
        'Automated accreditation exports for state boards, NAAC, NBA, and NIRF audits',
        'Single vendor relationship for K-12, undergraduate, postgraduate, and research administration'
      ]
    }
  },
  {
    id: 'chronos',
    slug: 'chronos',
    name: 'Chronos',
    category: 'Healthcare',
    type: 'industry',
    tagline: 'Single Unified Platform for Clinics & Specialty Practices',
    description:
      'A unified clinical operations platform for outpatient clinics, specialty practices, and multi-location clinic chains. One platform scaling effortlessly from solo practitioner to multi-doctor clinic and regional healthcare chain.',
    problem:
      'Outpatient clinics and healthcare practices lose valuable consultation time to physical paper charts, disjointed appointment books, manual prescription writing, and separate billing registers.',
    capabilities: [
      'Electronic Health Records (EHR)',
      'Multi-Provider Appointment Scheduling',
      'Structured Consultation Notes & Templates',
      'Diagnostic, Service & Split Billing',
      'Digital Prescriptions with Drug Database',
      'Longitudinal Patient Treatment History',
      'Clinical Revenue & Practice Analytics',
      'Automated Follow-Up Reminders',
      'Multi-Location Clinic Governance',
      'Offline-First Local Data Sovereignty'
    ],
    platforms: ['Desktop', 'Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/chronos',
    accent: ACCENT.chronos,
    logo: '/products/chronos.png',
    demoUrl: 'https://chronusdemo.vercel.app',
    deployment: 'installer',
    metrics: {
      loc: 25000,
      endpoints: 40,
      modules: 15
    },
    practiceTiers: [
      {
        tier: 'Solo / Small Practice',
        target: 'Solo Practitioners & Single-Doctor Clinics',
        status: 'Ready to Deploy',
        capabilities: [
          'Electronic Health Records (EHR)',
          'Patient Appointments & Calendar',
          'Digital Prescriptions (Drug DB)',
          'Consultation Billing & Invoicing',
          'Offline-First Desktop Operation',
          'Zero Server Setup (Single EXE)'
        ],
        activates: ['Offline EHR', 'Prescriptions', 'Billing', 'Offline-First']
      },
      {
        tier: 'Multi-Doctor Clinic',
        target: 'Specialty Practices & Polyclinics',
        status: 'Ready to Deploy',
        capabilities: [
          'Multi-Provider Schedule Coordination',
          'Shared Longitudinal Patient Records',
          'Granular Role-Based Access Control',
          'Internal & External Referral Management',
          'Clinical Practice Revenue Analytics',
          'Split Billing & Service Categorization'
        ],
        activates: ['Multi-Provider Schedules', 'Shared Records', 'Referrals', 'Analytics']
      },
      {
        tier: 'Clinic Chain',
        target: 'Multi-Location Chains & Healthcare Networks',
        status: 'Ready to Deploy',
        capabilities: [
          'Multi-Location Central Governance',
          'Centralized Patient Directory & Identity',
          'Cross-Location Doctor Referrals',
          'Consolidated Executive Reporting',
          'Centralized Group Billing & Tariffs'
        ],
        activates: ['Multi-Location', 'Centralized Reporting', 'Cross-Location Referrals']
      }
    ],
    practiceMatrix: [
      { module: 'Electronic Health Records (EHR)', solo: true, clinic: true, chain: true },
      { module: 'Appointment Scheduling', solo: true, clinic: 'Multi-Provider', chain: 'Cross-Location' },
      { module: 'Consultation Notes', solo: true, clinic: 'Templates', chain: 'Specialty Templates' },
      { module: 'Diagnostic & Service Billing', solo: true, clinic: 'Split Billing', chain: 'Centralized Billing' },
      { module: 'Digital Prescriptions', solo: 'Drug DB', clinic: 'Drug DB', chain: 'Formulary Control' },
      { module: 'Patient Treatment History', solo: true, clinic: true, chain: 'Unified History' },
      { module: 'Clinical Revenue Analytics', solo: true, clinic: true, chain: 'Consolidated KPI' },
      { module: 'Follow-Up Reminders', solo: true, clinic: true, chain: true },
      { module: 'Multi-Location Governance', solo: false, clinic: false, chain: true },
      { module: 'Telemedicine Integration', solo: 'Roadmap', clinic: 'Roadmap', chain: 'Roadmap' },
      { module: 'Insurance Claims Assistant', solo: 'Roadmap', clinic: 'Roadmap', chain: 'Roadmap' }
    ],
    differentiators: [
      { feature: 'Offline-First Architecture', detail: 'Works continuously without internet connectivity; syncs automatically when online.' },
      { feature: 'Zero Server Setup', detail: 'Single lightweight Windows installer (NSIS) with embedded high-performance SQLite engine.' },
      { feature: 'Local Data Sovereignty', detail: 'Hardware-locked cryptographic license with automated encrypted local disk backups.' },
      { feature: 'Flexible Deployment', detail: 'Runs seamlessly as a native desktop application or local intranet browser service.' },
      { feature: 'Zero Cloud Dependency for PHI', detail: 'Patient health information remains 100% on-premises under your direct physical custody.' }
    ],
    roadmap: [
      'Telemedicine consultation integration',
      'Insurance pre-authorization & claim submission assistant',
      'Patient history access portal with secure record downloads'
    ],
    narrative: {
      purpose: 'One unified clinical operations platform: Solo Practice · Multi-Doctor Clinic · Clinic Chain - same data model, configured per need',
      enhances: [
        'Offline-first desktop architecture ensuring clinical continuity during connectivity drops',
        'Solo practices activate: Offline EHR, Digital Prescriptions, Billing, and Zero Server Setup',
        'Multi-doctor clinics activate: Multi-Provider Schedules, Shared Patient Records, and Revenue Analytics',
        'Clinic chains activate: Multi-Location Governance, Centralized Reporting, and Cross-Location Referrals'
      ],
      removes: [
        'Paper physical file folders and lost previous visit notes',
        'Separate desktop calendar programs and manual billing registers',
        'Handwritten illegible prescriptions and pharmacy coordination delays',
        'End-of-day billing reconciliations across disconnected registers'
      ],
      unique: [
        'Single self-contained desktop package with zero server setup required',
        'Embedded transactional database with automated local encrypted backups',
        'Hardware-locked cryptographic license validation for local data sovereignty',
        'Flexible deployment as either a native desktop application or local browser service'
      ],
      reducedFriction: [
        'Zero complex database server administration for clinic receptionists',
        'No mandatory continuous internet connection for routine consultations',
        'No external cloud dependency for confidential patient health information',
        'Standardized clinical workflows across solo practitioners and expanding clinics'
      ]
    }
  },
  {
    id: 'glowra',
    slug: 'glowra',
    name: 'Glowra',
    category: 'Beauty & Wellness',
    type: 'industry',
    tagline: 'Single Unified Platform for Salons, Spas & Wellness Studios',
    description:
      'A unified studio management platform for salons, spas, and wellness studios. One platform scaling effortlessly from single-chair booth suites to multi-staff studios and regional franchise chains.',
    problem:
      'Wellness studios lose revenue to scheduling double-bookings, manual end-of-month commission calculations, unmonitored retail inventory shrinkage, and disjointed client notes.',
    capabilities: [
      'Multi-Staff Calendar & Room Scheduling',
      'Studio Point of Sale (POS) & Fast Checkout',
      'Staff Commission Engine (Automated Tiering)',
      'Client Preferences & Formula CRM',
      'Retail & Backbar Inventory Management',
      'Public Online Booking Widget & Portal',
      'Service Packages & Recurring Memberships',
      'Automated Client Re-engagement Alerts',
      'Multi-Location Franchise Synchronization',
      'Dual Online/Offline Local-First Architecture'
    ],
    platforms: ['Desktop', 'Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/glowra',
    accent: ACCENT.glowra,
    logo: '/products/glowra.png',
    demoUrl: 'https://glowrademo.vercel.app',
    deployment: 'electron',
    metrics: {
      loc: 30000,
      endpoints: 50,
      modules: 18
    },
    studioTiers: [
      {
        tier: 'Solo / Booth Renter',
        target: 'Single-Chair Stylists & Booth Renters',
        status: 'Ready to Deploy',
        capabilities: [
          'Personal Appointment Calendar',
          'Fast Point of Sale (POS)',
          'Client Formula Notes & History',
          'Retail Inventory Tracking',
          'Offline-First Local Operation'
        ],
        activates: ['Calendar', 'POS', 'Client CRM', 'Inventory', 'Offline-First']
      },
      {
        tier: 'Multi-Staff Studio',
        target: 'Salons, Spas & Wellness Studios',
        status: 'Ready to Deploy',
        capabilities: [
          'Multi-Staff Shared Calendar',
          'Shared Client CRM & Treatment History',
          'Automated Tiered Commission Engine',
          'Studio POS with Split Payments',
          'Retail & Backbar Usage Inventory',
          'Service Packages & Memberships'
        ],
        activates: ['Multi-Staff Calendar', 'Commission Engine', 'Packages', 'Shared CRM']
      },
      {
        tier: 'Studio Chain / Franchise',
        target: 'Multi-Location Chains & Franchises',
        status: 'Ready to Deploy',
        capabilities: [
          'Multi-Location Real-Time Sync',
          'Centralized Consolidated Reporting',
          'Franchise Owner Executive Dashboard',
          'Cross-Location Client Booking & Profiles',
          'Centralized Inventory & Formulary Distribution'
        ],
        activates: ['Multi-Location Sync', 'Franchise Dashboard', 'Centralized Reporting']
      }
    ],
    studioMatrix: [
      { module: 'Multi-Staff Calendar', solo: true, studio: 'Shared Calendar', chain: 'Cross-Location' },
      { module: 'Studio Point of Sale (POS)', solo: true, studio: 'Split Payments', chain: 'Centralized POS' },
      { module: 'Staff Commission Engine', solo: false, studio: 'Automated Tiering', chain: 'Franchise Rules' },
      { module: 'Client Preferences & CRM', solo: true, studio: 'Shared CRM', chain: 'Global Client ID' },
      { module: 'Retail & Backbar Inventory', solo: 'Retail', studio: 'Retail + Backbar', chain: 'Central Warehouse' },
      { module: 'Public Online Booking', solo: 'Personal Widget', studio: 'Studio Widget', chain: 'Brand Booking Portal' },
      { module: 'Service Packages & Memberships', solo: 'Packages', studio: 'Packages + Memberships', chain: 'Network-wide' },
      { module: 'Client Re-engagement Alerts', solo: true, studio: true, chain: true },
      { module: 'Multi-Location Sync', solo: false, studio: false, chain: true },
      { module: 'Franchise Dashboard', solo: false, studio: false, chain: true },
      { module: 'Loyalty Points & Gift Cards', solo: 'Roadmap', studio: 'Roadmap', chain: 'Roadmap' },
      { module: 'Automated Shift Scheduling', solo: 'Roadmap', studio: 'Roadmap', chain: 'Roadmap' }
    ],
    differentiators: [
      { feature: 'Dual Online/Offline Capability', detail: 'Runs local-first with continuous operation and automated background cloud synchronization.' },
      { feature: 'Cryptographic License System', detail: 'Cryptographically signed studio licenses verified locally without continuous ping requirements.' },
      { feature: 'Service-Product Mapping', detail: 'Accurate backbar chemical and product usage automatically deducted per service performed.' },
      { feature: 'Unified Architecture', detail: 'Single unified app supporting desktop reception checkout and tablet technician stations.' },
      { feature: 'Dual-Mode POS', detail: 'Accept payments and complete checkouts seamlessly whether online or temporarily offline.' }
    ],
    frictionPoints: [
      { area: 'Software Subscriptions', detail: 'No multi-tool monthly fees across separate POS, calendar, and marketing apps.' },
      { area: 'Inventory Tracking', detail: 'Zero manual stock counting at close of business with automated backbar depletion.' },
      { area: 'Commission Calculations', detail: 'Zero manual commission spreadsheets or payroll disputes at month end.' },
      { area: 'Client History Continuity', detail: 'Formula history and preferences accessible consistently from any chair in the studio.' }
    ],
    roadmap: [
      'Multi-location studio franchise synchronization',
      'Customer loyalty points and gift card engine',
      'Automated shift scheduling with technician availability rules'
    ],
    narrative: {
      purpose: 'One unified studio management platform: Solo Booth · Multi-Staff Studio · Franchise Chain - same data model, configured per need',
      enhances: [
        'Real-time chair and treatment room occupancy visibility across all technicians',
        'Solo booth renters activate: Calendar, POS, Client CRM, Inventory, and Offline-First',
        'Multi-staff studios activate: Multi-Staff Calendar, Commission Engine, Packages, and Shared CRM',
        'Franchise chains activate: Multi-Location Sync, Franchise Dashboard, and Centralized Reporting'
      ],
      removes: [
        'Overlapping paper appointment diaries and customer double-bookings',
        'Hours spent on manual commission math and staff payroll disputes',
        'Separate disconnected tools for POS, inventory, and appointment logging',
        'Unrecorded walk-in customer interactions and forgotten follow-ups'
      ],
      unique: [
        'Dual online/offline capability with automatic background cloud synchronization',
        'Cryptographically signed studio licenses with straightforward local verification',
        'Comprehensive service-to-product mapping for accurate backbar usage tracking',
        'Unified application architecture spanning desktop checkout stations and tablet stations'
      ],
      reducedFriction: [
        'No multi-tool monthly software subscriptions across POS and booking',
        'No manual inventory stock counting at close of business',
        'Zero manual commission spreadsheets at month end',
        'Consistent client history accessible from any chair in the studio'
      ]
    }
  },
  {
    id: 'garix',
    slug: 'garix',
    name: 'Garix',
    category: 'Automotive',
    type: 'industry',
    tagline: 'Single Unified Platform for Automotive Repair Centers & Service Networks',
    description:
      'A unified workshop management platform for automotive repair centers, body shops, and service stations. One platform scaling effortlessly from single-bay garages to multi-bay service workshops and multi-location repair networks.',
    problem:
      'Vehicle service centers frequently experience parts inventory discrepancies, lost technician billing hours, complex split payment reconciliations, and manual job card tracking across service bays.',
    capabilities: [
      'Digital Job Card Workflow & Line Authorization',
      'FIFO Parts Inventory & Valuation Engine',
      'Service Bay Allocation & Scheduling',
      'GST Invoicing with Auto HSN Codes',
      'Multi-Mode Split Payments (Cash, UPI, Card, Credit)',
      'Vehicle Service History by Registration & VIN',
      'Automated Parts Reorder Triggers',
      'Technician Labor & Productivity Tracking',
      'Multi-Location Workshop Governance',
      'Configurable Tax Compliance (GST, VAT, Sales Tax)'
    ],
    platforms: ['Desktop', 'Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/garix',
    accent: ACCENT.garix,
    logo: '/products/garix.png',
    deployment: 'docker',
    metrics: {
      loc: 15000
    },
    workshopTiers: [
      {
        tier: 'Single-Bay Garage',
        target: 'Independent Garages & Single-Bay Mechanics',
        status: 'Ready to Deploy',
        capabilities: [
          'Digital Job Card Workflow',
          'FIFO Parts Inventory Tracking',
          'GST Invoicing & Auto HSN Lookup',
          'Split Payments (Cash, UPI, Card)',
          'Offline-First Local Operation'
        ],
        activates: ['Job Cards', 'FIFO Inventory', 'GST Invoicing', 'Split Payments', 'Offline-First']
      },
      {
        tier: 'Multi-Bay Workshop',
        target: 'Multi-Bay Repair Centers & Body Shops',
        status: 'Ready to Deploy',
        capabilities: [
          'Dynamic Service Bay Allocation',
          'Technician Labor & Skill Tracking',
          'Multi-Bay FIFO Parts Requisition',
          'Split Payments & Credit Accounts',
          'Vehicle History by Registration + VIN'
        ],
        activates: ['Bay Allocation', 'Technician Tracking', 'FIFO Inventory', 'Split Payments', 'GST Compliance']
      },
      {
        tier: 'Multi-Location Network',
        target: 'Service Chains & Fleet Maintenance Networks',
        status: 'Ready to Deploy',
        capabilities: [
          'Centralized Inventory & Warehouse Sync',
          'Technician Resource Pooling',
          'Consolidated Executive Reporting',
          'Unified Fleet Billing & Group Accounts',
          'Network-wide Vehicle History Lookup'
        ],
        activates: ['Centralized Inventory', 'Technician Pooling', 'Consolidated Reporting', 'Unified Billing']
      }
    ],
    workshopMatrix: [
      { module: 'Digital Job Card Workflow', garage: true, workshop: true, network: true },
      { module: 'FIFO Parts Inventory', garage: true, workshop: 'Multi-Bay Requisition', network: 'Central Warehouse' },
      { module: 'Service Bay Allocation', garage: false, workshop: 'Multi-Bay Tracking', network: 'Network Bay Matrix' },
      { module: 'GST Invoicing & HSN Codes', garage: true, workshop: true, network: 'Multi-State GST / VAT' },
      { module: 'Multi-Mode Split Payments', garage: true, workshop: true, network: 'Corporate / Fleet Terms' },
      { module: 'Vehicle Service History', garage: 'Local Registry', workshop: 'Reg + VIN Registry', network: 'Global Vehicle Passport' },
      { module: 'Parts Reorder Triggers', garage: true, workshop: true, network: 'Automated Purchase Orders' },
      { module: 'Technician Labor Tracking', garage: false, workshop: 'Skill Matrix', network: 'Resource Pooling' },
      { module: 'Multi-Location Governance', garage: false, workshop: false, network: true },
      { module: 'Insurance Claim Workflow', garage: 'Roadmap', workshop: 'Roadmap', network: 'Roadmap' },
      { module: 'Digital Vehicle Health Reports', garage: 'Roadmap', workshop: 'Roadmap', network: 'Roadmap' }
    ],
    differentiators: [
      { feature: 'FIFO Inventory Valuation Engine', detail: 'Built-in First-In-First-Out accounting for exact parts cost calculation and true job profitability.' },
      { feature: 'Multi-Tender Payments', detail: 'Accept Cash, UPI, Card, and Credit terms on a single unified invoice without separate ledger adjustments.' },
      { feature: 'Automated Tax Compliance', detail: 'Auto HSN lookup and dynamic GST/VAT calculation tailored to automotive spare parts and labor codes.' },
      { feature: 'Vehicle History Passport', detail: 'Longitudinal service history indexed permanently by vehicle registration number and chassis VIN.' }
    ],
    customizationRequirements: [
      { area: 'Workshop Types', requirements: 'General Repair, Body Shop, Tire/Alignment, EV Service, Fleet Maintenance' },
      { area: 'Tax Compliance', requirements: 'GST (India), VAT (GCC), Sales Tax (US), configurable per region' },
      { area: 'Invoice Formats', requirements: 'GST Invoice, Job Card, Estimate, Delivery Challan, Proforma (customizable templates)' },
      { area: 'Parts Catalog', requirements: 'ACMA, OEM catalogs, CSV/Excel import, distributor API integration' },
      { area: 'Technician Skills', requirements: 'Engine, Transmission, Electrical, Body, Paint, EV (per technician matrix)' },
      { area: 'Bay Types', requirements: 'Lift, Alignment, Wash, Diagnostic, EV Charging, Inspection' },
      { area: 'Labor Rates', requirements: 'Per-skill, per-technician, per-job-type, flat-rate vs hourly' },
      { area: 'Parts Pricing', requirements: 'Cost-plus, margin-based, list-price, customer-specific tiers' },
      { area: 'Payment Terms', requirements: 'Cash, UPI, Card, Credit (30/60/90 days), Insurance direct-bill, Fleet accounts' },
      { area: 'Language Support', requirements: 'English, Hindi, Regional languages (configurable per workshop)' },
      { area: 'Branding & Templates', requirements: 'Logo, colors, invoice header/footer, SMS/WhatsApp notification templates' },
      { area: 'Integrations', requirements: 'Tally / Busy / Zoho Books, Insurance portals, FASTag, e-Way Bill' }
    ],
    frictionPoints: [
      { area: 'Accounting Middleware', detail: 'No third-party accounting software required for tax invoices and split settlements.' },
      { area: 'Parts Costing', detail: 'No manual batch cost averaging or spreadsheet formulas for replacement parts.' },
      { area: 'Shop Floor Visibility', detail: 'Instant real-time bay status and technician stage tracking across the workshop.' },
      { area: 'Estimates & Approvals', detail: 'Direct printable customer estimates with line-item authorization and digital sign-off.' }
    ],
    roadmap: [
      'Customer digital vehicle health inspection report cards',
      'Insurance claim estimation and surveyor review workflow',
      'Automated parts catalog lookup with preferred distributor ordering'
    ],
    narrative: {
      purpose: 'One unified workshop management platform: Single-Bay Garage · Multi-Bay Workshop · Service Network - same data model, configured per need',
      enhances: [
        'True FIFO inventory accounting accurately reflecting replacement part procurement costs',
        'Single-bay garages activate: Job Cards, FIFO Inventory, GST Invoicing, Split Payments, and Offline-First',
        'Multi-bay workshops activate: Bay Allocation, Technician Tracking, FIFO Inventory, and Split Payments',
        'Multi-location networks activate: Centralized Inventory, Technician Pooling, Consolidated Reporting, and Unified Billing'
      ],
      removes: [
        'Grease-stained paper job cards lost or illegible in service bays',
        'Profit margin erosion caused by unmonitored parts price fluctuations',
        'Manual evening cash drawer reconciliations against partial payments',
        'Time-consuming manual calculation of labor and tax components'
      ],
      unique: [
        'Built-in FIFO inventory valuation engine ensuring precise job profitability calculations',
        'Multi-tender payment settlement on single repair orders',
        'Technician-wise productivity and repair velocity analytics',
        'Historical vehicle service logs keyed by registration number and chassis VIN'
      ],
      reducedFriction: [
        'No requirement for third-party accounting software for tax invoices',
        'No manual calculations for parts batch cost averaging',
        'Instant bay status visibility across the entire workshop floor',
        'Direct printable customer estimates with line-item authorizations'
      ]
    }
  },
  {
    id: 'hireez',
    slug: 'hireez',
    name: 'Hireez',
    category: 'HR',
    type: 'industry',
    tagline: 'Offline Desktop Recruiting, Resume Intelligence & Candidate Pipeline Platform',
    description:
      'A deterministic recruiting and resume-bank platform engineered for talent acquisition teams: featuring automatic JD generation, local resume parsing, rule-based candidate matching, requisition pipelines, and token-gated questionnaires - running 100% offline with zero external cloud dependencies.',
    problem:
      'Hiring teams face disjointed recruiting tools, costly per-seat SaaS subscriptions, complex server dependencies, and confidential candidate data exposure on third-party cloud platforms.',
    capabilities: [
      'One-Click Deterministic JD Builder & Role Library',
      'Local Resume Parsing & OCR (PDF, DOCX, Scanned Images)',
      'Department-Aware Rule-Based Skill Matching',
      'Four-Tier Candidate Fit Scoring (Fit, Shortlist, Consider, Reject)',
      'Requisition Stage Pipeline & Ranked Candidate Recommendations',
      'Automated Skill-Gap Candidate Questionnaires (Email / WhatsApp)',
      'Token-Gated Public Candidate Response Portal',
      'Server-Enforced 4-Tier Role-Based Access (RBAC)',
      '100% Offline Local Operation & Data Sovereignty',
      'Single Windows Installer (Zero Docker or External Daemons)'
    ],
    platforms: ['Desktop', 'Web'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/hireez',
    accent: ACCENT.hireez,
    logo: '/products/hireez.png',
    deployment: 'installer',
    metrics: {
      loc: 10000
    },
    differentiators: [
      { feature: 'Zero Cloud Dependency & Local Privacy', detail: 'Runs completely offline on local desktops - zero candidate data leaves your organizational custody.' },
      { feature: 'Deterministic Rule-Based Matching', detail: 'Consistent, explainable skill and experience scoring without unpredictable AI hallucinations or costly token fees.' },
      { feature: 'Single-Click Windows Installer', detail: 'Zero Docker or server configuration required; single-file setup for non-technical HR teams.' },
      { feature: 'Server-Enforced Granular RBAC', detail: 'Strict 4-tier permission enforcement (Associate, Recruiter, Operations, Admin) on every internal action.' }
    ],
    frictionPoints: [
      { area: 'Recruitment SaaS Costs', detail: 'Eliminate expensive per-seat subscriptions and recurring cloud resume parsing fees.' },
      { area: 'Data Privacy & Compliance', detail: 'Full GDPR and confidential candidate sovereignty with zero external data processing.' },
      { area: 'Pipeline Friction', detail: 'Automated skill-gap candidate questionnaires with ranked match recommendations on requisition intake.' },
      { area: 'IT Setup Overhead', detail: 'One-click desktop deployment without database servers, containers, or daemon orchestration.' }
    ],
    roadmap: [
      'Competency-driven interview scorecard generation',
      'Self-service employee document and payslip portal',
      'Automated statutory compliance calendar with reminder triggers'
    ],
    narrative: {
      purpose: 'End-to-end recruitment lifecycle: JD creation → local resume ingestion → rule matching → requisition pipeline → candidate portal',
      enhances: [
        'Deterministic skill extraction and department-aware candidate ranking',
        'Offline desktop simplicity designed specifically for non-technical HR teams',
        'Instant multi-format resume parsing across PDF, Word, and scanned images',
        'Token-gated candidate response portal with automated skill-gap questionnaires'
      ],
      removes: [
        'Per-resume cloud parsing fees and monthly ATS software seat licenses',
        'Candidate data privacy exposure and risk of confidential resume leaks',
        'Complex server maintenance, Docker containers, and database administration',
        'Manual resume screening and subjective recruiter scoring discrepancies'
      ],
      unique: [
        'Self-contained local desktop application with zero background internet dependencies',
        'Fast deterministic matching algorithms providing explainable scoring breakdowns',
        'Server-side verified role-based access control protecting candidate ownership',
        'Built-in candidate deduplication and file-hash integrity checking'
      ],
      reducedFriction: [
        'Zero IT configuration or server overhead for hiring teams',
        'No external API dependencies or cloud service downtime risks',
        'Instant candidate search and requisition stage management',
        'Single executable desktop application with automated local storage'
      ]
    }
  },
  {
    id: 'vertex',
    slug: 'vertex',
    name: 'VERTEX',
    category: 'Procurement',
    type: 'industry',
    tagline: 'Self-Contained Project & Procurement Management Platform',
    description:
      'A self-contained Project & Procurement Management platform: uniting projects, WBS budget control, two-envelope RFQs, contract-gated POs, goods receipt (GRN), and 3-way matching with full commercial finance gates - running locally as a single executable with zero external cloud dependencies.',
    problem:
      'Enterprise capital projects and supply chains suffer from budget overruns, unapproved purchase commitments, manual invoice matching errors, and fragmented vendor documentation across spreadsheets.',
    capabilities: [
      'End-to-End Procurement (PR → RFQ → PO → GRN → Invoice)',
      'Two-Envelope Technical & Commercial RFQ Evaluation',
      'Contract-Gated PO Finance Gates & Approval Controls',
      'PR-to-PO Split Allocation Across Multiple Suppliers',
      'WBS Budget Tracking & 8-Stage Build Journey Progress',
      'Automated 3-Way Match Verification & Receiving Gates',
      'Commercial Contracts, Claims & Advance Ledgers',
      'Technical Management, Site Inspections & Risk Register',
      'Exact-Money Integer Minor Unit Financial Engine',
      'Single Windows Desktop Binary (Zero Cloud Dependency)'
    ],
    platforms: ['Desktop', 'Web'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/vertex',
    accent: ACCENT.vertex,
    logo: '/products/vertex.png',
    deployment: 'installer',
    metrics: {
      loc: 50000,
      endpoints: 100
    },
    vertexTiers: [
      {
        tier: 'Starter Edition',
        target: 'Single Project & Core Requisition Teams',
        status: 'Ready to Deploy',
        capabilities: [
          'Purchase Requisitions (PR) & Line Approvals',
          'Standard Purchase Orders (PO) & Receiving (GRN)',
          'Vendor Directory & Contact Management',
          '3-Way Invoice Matching & Split Settlements',
          'Offline-First Local Storage & Audit Logging'
        ],
        activates: ['Requisitions', 'Purchase Orders', 'Receiving', '3-Way Match', 'Local Storage']
      },
      {
        tier: 'Professional Edition',
        target: 'Commercial & Multi-Project Operations',
        status: 'Ready to Deploy',
        capabilities: [
          'Two-Envelope RFQ Technical & Commercial Evaluation',
          'Contract-Gated PO Finance Gates (409 Rejection)',
          'PR-to-PO Partial Quantity Conversion Across Suppliers',
          'Contracts Ledger, Advance Ledgers & Credit Notes',
          'Real-time Project Lineage & Revision Audit Trails'
        ],
        activates: ['Two-Envelope RFQ', 'Contract Gates', 'PR Splitting', 'Commercial Ledger', 'Lineage']
      },
      {
        tier: 'Enterprise & Global',
        target: 'Capital Megaprojects & Global Infrastructure',
        status: 'Ready to Deploy',
        capabilities: [
          '8-Stage Build Journey Lifecycle Visualization',
          'WBS Execution Schedule with Pass/Fail Inspection Gates',
          'Site Visits, Infrastructure Gap Assessments & Risk Register',
          'Multi-Tenant Organization Isolation & Server-Side RBAC',
          'License Entitlement Module Switching (Zero Code Drift)'
        ],
        activates: ['Build Journey', 'WBS Inspections', 'Technical Mgmt', 'Risk Register', 'Multi-Tenant']
      }
    ],
    differentiators: [
      { feature: 'Strict Contract-to-PO Finance Gates', detail: 'Automated policy enforcement rejects unauthorized purchase commitments outside approved contracts.' },
      { feature: 'Exact-Money Financial Engine', detail: 'All currency arithmetic stored as integer minor units, eliminating floating-point rounding errors.' },
      { feature: 'PR-to-PO Partial Conversion', detail: 'Split a single requisition across multiple specialized vendors with automated fulfillment tracking.' },
      { feature: 'Single-Executable Deployment', detail: 'Runs locally on a single machine with zero database, cache, or external message queue installations.' }
    ],
    frictionPoints: [
      { area: 'Procurement Blind Spots', detail: 'Instant end-to-end lineage from initial requisition down to final three-way invoice approval.' },
      { area: 'Unauthorized Commitments', detail: 'Strict server-side finance gates prevent issuing purchase orders without active contractual approval.' },
      { area: 'Multi-Tool Complexity', detail: 'Unifies requisitions, RFQs, POs, WBS budgets, and commercial contract claims into one single desktop app.' },
      { area: 'Cloud Dependency & Data Risk', detail: '100% on-premises data sovereignty with zero external service dependencies or data leaks.' }
    ],
    roadmap: [
      'Multi-currency exchange rate synchronization for global procurement packages',
      'Automated vendor scorecard benchmarks and quality rating index',
      'Predictive delivery milestone estimation based on transit history'
    ],
    narrative: {
      purpose: 'Self-contained project & procurement management: PR → two-envelope RFQ → contract gate → PO → GRN → 3-way match',
      enhances: [
        'Deterministic commercial control with contract-to-PO finance gates',
        'Single self-contained Windows executable with embedded transactional storage',
        'Two-envelope technical and commercial supplier evaluation workflows',
        '8-stage build journey progress and WBS inspection milestones'
      ],
      removes: [
        'Fragmented procurement spreadsheets and lost vendor quote evaluations',
        'Unauthorized purchase commitments issued outside contractual agreements',
        'Manual side-by-side comparison of POs, receiving slips, and vendor invoices',
        'Costly external cloud database and message queue infrastructure'
      ],
      unique: [
        'Integer minor unit arithmetic preventing floating-point financial discrepancy errors',
        'Full immutable lineage recording every contract amendment and approval gate',
        'License entitlement architecture activating features with zero code changes',
        'Server-side verified role-based access control protecting commercial terms'
      ],
      reducedFriction: [
        'Eliminates the need for multiple standalone procurement and spreadsheet tools',
        'Automated historical audit trail maintenance for internal and external auditors',
        'Elimination of manual PO gate checks through automated policy enforcement',
        'Instant financial reconciliation between received goods and billed line items'
      ]
    }
  },
  {
    id: 'unify',
    slug: 'unify',
    name: 'UNIFY',
    category: 'Business',
    type: 'platform',
    tagline: 'Modular Enterprise Resource Planning Platform (Standalone Apps · Unified Custom ERP)',
    description:
      'A flexible, modular ERP architecture designed for growing and multi-division enterprises: deploy each module as a standalone operational app or unite them into a custom, centralized ERP ecosystem sharing a unified data layer with row-level security.',
    problem:
      'Growing enterprises outgrow spreadsheet workarounds but face rigid, multi-year monolithic ERP implementations that create operational friction, separate data silos, and vendor lock-in.',
    capabilities: [
      'Dual Deployment Model (Standalone App or Unified ERP)',
      'Nexora - Operations Governance & Approvals',
      'Arventa - Sales Pipeline, Quotes & Marketing',
      'Monexa - Multi-Currency Finance & 3-Way Matching',
      'Planora - Gantt Projects & Resource Scheduling',
      'Logistra - Supply Chain & Drop-Ship Procurement',
      'Procura - 360° Client CRM & Deal Tracking',
      'Orbitra - Service Desk & SLA Incident Management',
      'Workzen - Statutory Payroll & Workforce Management',
      'Division-Level Data Isolation & Strict Row-Level Security'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/unify',
    accent: ACCENT.unify,
    logo: '/products/unify.png',
    deployment: 'docker',
    metrics: {
      loc: 200000,
      endpoints: 4014,
      modules: 8,
      tests: 840
    },
    differentiators: [
      { feature: 'Standalone or Unified Adoption', detail: 'Purchase and deploy individual modules as focused standalone apps, or connect them into a custom unified ERP suite.' },
      { feature: 'Multi-Division Row-Level Security', detail: 'Strict division-level access control: departmental teams see only their records while headquarters receives consolidated analytics.' },
      { feature: 'Zero-Code Entitlement Activation', detail: 'Activate new business domains seamlessly through cryptographic license entitlements without separate binary deployments.' },
      { feature: 'Unified Data & Audit Layer', detail: 'Single transactional database model linking sales quotes directly to project delivery, inventory fulfillment, and accounting ledgers.' }
    ],
    frictionPoints: [
      { area: 'Monolithic ERP Lock-In', detail: 'No multi-year implementation cycles; start with 1 module today and expand on your own timeline.' },
      { area: 'Inter-Department Handoffs', detail: 'Closed CRM deals flow automatically into project task boards and automated invoice schedules.' },
      { area: 'Separate Vendor Subscriptions', detail: 'Replace disjointed contracts for CRM, helpdesk, project management, and accounting tools.' },
      { area: 'Custom Integration Overhead', detail: 'Native event bus eliminates costly custom API middleware and synchronization latency.' }
    ],
    roadmap: [
      'Custom visual workflow orchestration builder',
      'Cross-module executive analytics dashboard with unified KPI tracking',
      'Modular extension marketplace for industry-specific operational extensions'
    ],
    narrative: {
      purpose: 'Connecting business operations: Standalone Applications · Fully Customized ERP - deploy one, several, or all eight modules',
      enhances: [
        '8 specialized domain modules sharing a unified, secure database architecture',
        'Incremental adoption model: adopt as standalone departmental tools or an enterprise suite',
        'Full multi-division governance with consolidated reporting for executive leadership',
        'Unified role-based permissions and immutable audit logging across every screen'
      ],
      removes: [
        'Fragmented toolchains with separate vendors for CRM, HRIS, project tools, and billing',
        'Manual data re-entry between sales pipelines, project delivery, and accounting',
        'Costly custom integration middleware between independent SaaS vendors',
        'Years-long monolithic ERP configuration and expensive rollout cycles'
      ],
      unique: [
        'Polymorphic modular architecture: modules run standalone or as a connected suite',
        'Entitlement-gated modules that activate instantly without reinstalling binaries',
        'Single source of truth for organizational identities, permissions, and audit trails',
        'Modern performant web architecture designed for low-latency operational workflows'
      ],
      reducedFriction: [
        'One platform vendor for all core business operations',
        'Zero synchronization delays or API drift between sales and accounting',
        'Uniform user experience across every department and administrative screen',
        'Centralized authentication, user management, and compliance controls'
      ]
    }
  },
  {
    id: 'orion',
    slug: 'orion',
    name: 'ORION',
    category: 'Developer Tools',
    type: 'developer',
    tagline: 'High-Precision Codebase Auditing, Deep SAST & Dependency Reachability',
    description:
      'An advanced developer security and code intelligence CLI that conducts comprehensive static code analysis, AST taint tracking, secret detection, container auditing, and reachable vulnerability triage directly within developer environments and CI/CD pipelines.',
    problem:
      'Engineering teams face alert fatigue from hundreds of false-positive vulnerabilities in unused dependencies, disjointed multi-tool scanner configurations, and security tools that send proprietary code offsite.',
    capabilities: [
      'DeepSAST Static Code Analysis',
      'SecretShield Credential Detection',
      'TaintStream Cross-File Dataflow',
      'AuthMatrix Permission Tracing',
      'CloudPulse & CloudConfig Auditing',
      'DockerAudit Container Scanner',
      'SupplyGuard Reachability (VEX)',
      'PolicyForge CI/CD Quality Gates',
      'PromptArmor & AgentShield Security',
      'Interactive HTML & SARIF 2.1.0 Reports'
    ],
    platforms: ['CLI', 'Web'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/orion',
    accent: ACCENT.orion,
    logo: '/products/orion.png',
    cli: true,
    installCommand: 'npm install -g @orionscanner/cli',
    deployment: 'npm',
    metrics: {
      engines: 20
    },
    roadmap: [
      'Native GitHub Actions and GitLab CI security scanning integration',
      'VS Code and JetBrains IDE in-editor diagnostic plugins',
      'Automated SARIF upload pipeline to GitHub Code Scanning'
    ],
    narrative: {
      purpose: 'Auditing codebases in a single command: security, code quality, dependency reachability, container configs, and CI/CD policies',
      enhances: [
        '20+ in-house analysis engines operating with zero external scanner dependencies',
        'Cross-file AST taint tracking identifying authentic source-to-sink data leaks',
        'Dependency reachability analysis separating truly reachable CVEs from unused library code',
        'Clean interactive HTML reports with letter-grade assurance and one-click remediation guidance'
      ],
      removes: [
        'Orchestrating multiple disjoint scanners for SAST, secrets, dependencies, and containers',
        'Triage time wasted investigating vulnerabilities in unused functions (VEX filtering)',
        'Security compliance risks caused by transmitting private source code to external clouds',
        'Inconsistent security policies across local development and automated CI pipelines'
      ],
      unique: [
        'Open-source MIT core distribution published to npm and PyPI ecosystems',
        'Runs completely local and air-gapped by default without mandatory external keys',
        'Full SARIF 2.1.0, JSON, and CycloneDX SBOM export formats for compliance',
        'Built-in benchmark engine measuring diagnostic precision, recall, and F1 scores'
      ],
      reducedFriction: [
        'Single lightweight CLI installation with zero prerequisite configuration',
        'Instant security scans without mandatory cloud account registration',
        'Self-hosted local dashboard: orion serve → http://127.0.0.1:8765',
        'Clear, actionable finding explanations paired with exact file line contexts'
      ]
    }
  },
  {
    id: 'orion-hunter',
    slug: 'orion-hunter',
    name: 'ORION HUNTER',
    category: 'Cybersecurity',
    type: 'security',
    tagline: 'Proprietary Security Graph Intelligence, Authorization Tracing & Attack Paths',
    description:
      'A dedicated enterprise cybersecurity platform that maps complex software topologies into an immutable security graph: tracing multi-hop attack paths, identifying business logic flaws, validating authorization boundaries, and generating evidence-backed remediation plans without external cloud exposure.',
    problem:
      'Enterprise security teams lack unified visibility into how code vulnerabilities, infrastructure configurations, database transactions, and authorization rules combine to create exploitable attack paths.',
    capabilities: [
      '15-Relationship Knowledge Graph',
      'Multi-Hop Attack Path Solver',
      'Deep Authorization Boundary Tracing',
      'Business Logic & Concurrency Flaws',
      'Financial & DB Integrity Audits',
      'Air-Gapped Zero-Telemetry Core',
      'Automated .patch Diff Generation',
      'Compliance Mapping (SOC2, PCI, ISO)',
      'Cross-Component Blast Radius',
      'Evidence-Linked Finding Ledgers'
    ],
    platforms: ['Web', 'Desktop'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/orion-hunter',
    accent: ACCENT.orionHunter,
    logo: '/products/orion-hunter.png',
    cli: true,
    installCommand: 'python -m hunter.cli.main scan /path',
    deployment: 'installer',
    metrics: {
      engines: 60
    },
    roadmap: [
      'SOC 2 Type II attestation report alignment',
      'FedRAMP security baseline control mappings',
      'Multi-organization enterprise tenant isolation'
    ],
    narrative: {
      purpose: 'Enterprise cybersecurity intelligence: 60 in-house engines across 5 pillars, air-gapped, multi-hop attack path traversal, evidence-driven findings',
      enhances: [
        '5 core analysis pillars: Code/AST (15), Infra/IaC (13), Logic/DB (14), Crypto (6), AI/Graph (12)',
        '15 formal relationship types mapping code, calls, dependencies, permissions, and data stores',
        'Multi-hop exploit path solver determining exact attacker traversal routes to critical assets',
        'Compliance control evidence mapping for PCI-DSS v4.0, SOC 2 Type II, HIPAA, and ISO 27001'
      ],
      removes: [
        'Alert fatigue from thousands of isolated, uncorrelated scanner notifications',
        'Manual multi-day construction of potential exploit paths across complex architectures',
        'Transmission of proprietary enterprise codebases to third-party SaaS security providers',
        'Manual evidence gathering for periodic regulatory and security compliance audits'
      ],
      unique: [
        '60 specialized analysis engines engineered 100% in-house with zero external API calls',
        'Strict evidence-linked confidence scoring rejecting speculative false positives',
        'Automated patch diff generation providing verifiable code-level remediations',
        'Baseline regression gates preventing PR merges that introduce new attack paths'
      ],
      reducedFriction: [
        'Single unified enterprise security CLI with zero remote telemetry',
        'No external scanner orchestration or credential management complexity',
        'Operates in strictly air-gapped on-premises or private cloud environments',
        'Commercial enterprise licensing with dedicated technical onboarding'
      ]
    }
  }
]

export const UNIFY_MODULES: Product[] = [
  {
    id: 'nexora',
    slug: 'nexora',
    name: 'Nexora',
    category: 'Business',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Central Operations & Core Services',
    description:
      'The foundational operations module of UNIFY: coordinating unified authentication, role-based access control, organizational entities, versioned system configurations, and cross-cutting audit logging.',
    problem:
      'Core administrative workflows, user permissions, and audit logs are scattered across incompatible departmental databases and ad-hoc scripts.',
    capabilities: [
      'Role-Based Access Control',
      'Organizational Hierarchy',
      'Immutable Audit Logging',
      'System Configuration Management',
      'Health & Diagnostic Checks',
      'Unified Identity Directory'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/nexora',
    accent: ACCENT.unify,
    logo: '/products/nexora.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Core operational backbone: centralized auth, permissions, organizational structure, system config, and audit trail',
      enhances: [
        'Centralized authentication and fine-grained role-based access control',
        'Comprehensive immutable audit logging for every administrative mutation',
        'Version-controlled system configuration management preventing configuration drift',
        'Real-time service health checks and operational observability hooks'
      ],
      removes: [
        'Duplicated user authentication across separate department systems',
        'Missing administrative audit logs during security compliance reviews',
        'Hardcoded environment configurations across multiple tools',
        'Operational blind spots in core system health and performance'
      ],
      unique: [
        'Foundation module establishing the shared data schema for all UNIFY modules',
        'Universal role and permission hierarchy inherited across every operational screen',
        'Entitlement-gated access providing immediate activation without software reinstallations'
      ],
      reducedFriction: [
        'Zero standalone identity servers to configure and maintain',
        'No custom audit log infrastructure development needed',
        'Unified administrative control from a single secure console'
      ]
    }
  },
  {
    id: 'arventa',
    slug: 'arventa',
    name: 'Arventa',
    category: 'Business',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Sales Pipeline, Deals & Marketing Campaigns',
    description:
      'The revenue and pipeline module of UNIFY: managing lead capture, opportunity stages, marketing campaign attribution, and deal velocity tracking in one unified commercial pipeline.',
    problem:
      'Sales representatives and marketing teams track customer prospects in personal notes and disjointed spreadsheets, resulting in lost deals and poor pipeline visibility.',
    capabilities: [
      'Lead & Prospect Management',
      'Opportunity Deal Stages',
      'Campaign ROI Attribution',
      'Pipeline Forecasting',
      'Commercial Activity Logs',
      'Shared Customer Context'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/arventa',
    accent: ACCENT.unify,
    logo: '/products/arventa.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Driving commercial growth: lead capture → deal stages → pipeline forecast → closed revenue',
      enhances: [
        'Unified lead-to-opportunity progression with clear stage gate requirements',
        'Direct marketing campaign attribution linking spend to closed deal revenue',
        'Shared commercial customer context visible to operations and finance teams',
        'Accurate revenue forecasting based on real-time stage probabilities'
      ],
      removes: [
        'Sales leads buried in personal spreadsheets and email inboxes',
        'Marketing campaigns managed in isolated third-party tools without revenue attribution',
        'Lack of pipeline visibility for executive decision making',
        'Disconnection between sales agreements and downstream billing terms'
      ],
      unique: [
        'Direct native linkage to Monexa finance for instant quote-to-invoice transitions',
        'Unified customer record shared across CRM, sales, and operations',
        'Entitlement-gated commercial features tailored to team size'
      ],
      reducedFriction: [
        'No manual handoff of signed deals to administrative billing staff',
        'No data synchronization gaps between marketing lead lists and sales accounts',
        'One consistent deal workspace accessible from desktop and mobile'
      ]
    }
  },
  {
    id: 'monexa',
    slug: 'monexa',
    name: 'Monexa',
    category: 'Finance',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Double-Entry Accounting, Invoicing & Budget Control',
    description:
      'The comprehensive financial module of UNIFY: powering multi-ledger double-entry accounting, automated customer invoicing, expense approvals, bank reconciliations, and budget variance monitoring.',
    problem:
      'Financial records and accounting ledgers are fragmented across disparate spreadsheets, leading to reconciliation errors, delayed invoicing, and lack of real-time cash flow visibility.',
    capabilities: [
      'Double-Entry General Ledger',
      'Automated Invoicing & Receipts',
      'Accounts Receivable & Payable',
      'Budget vs Actual Tracking',
      'Bank Reconciliation Engine',
      'Multi-Currency & Tax Rules'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/monexa',
    accent: ACCENT.unify,
    logo: '/products/monexa.png',
    deployment: 'docker',
    metrics: { entities: 40 },
    narrative: {
      purpose: 'Controlling business financials: general ledger → invoicing → accounts payable → reconciliation → reporting',
      enhances: [
        'Rigorous double-entry general ledger with full immutable transaction audit trails',
        'Automated customer invoicing directly populated from operational milestones',
        'Live budget vs actual monitoring with automated expenditure variance alerts',
        'Exact integer minor unit arithmetic eliminating floating point rounding discrepancies'
      ],
      removes: [
        'General accounting ledgers maintained in vulnerable Excel sheets',
        'Manual delayed creation of invoices from completed project job sheets',
        'Missing receipts and untracked expense reimbursement requests',
        'Weeks of manual reconciliation at monthly financial close'
      ],
      unique: [
        'Integer precision financial calculation engine guaranteeing exact balance sheets',
        'Direct automated three-way matching against Logistra procurement records',
        'Multi-entity and multi-currency consolidation with configurable exchange rates'
      ],
      reducedFriction: [
        'No manual journal re-entry from separate sales or HR payroll software',
        'Eliminates standalone accounting software integration headaches',
        'Instant financial health statements accessible to executive leadership'
      ]
    }
  },
  {
    id: 'planora',
    slug: 'planora',
    name: 'Planora',
    category: 'Projects',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Work Breakdown Structure, Gantt Milestones & Resource Planning',
    description:
      'The project delivery and resource management module of UNIFY: coordinating Work Breakdown Structures (WBS), interactive Gantt timelines, critical path calculations, team workload allocation, and milestone tracking.',
    problem:
      'Project managers coordinate schedules in standalone planning tools while financial budgets, team allocation, and deliverables remain disconnected in separate documents.',
    capabilities: [
      'Work Breakdown Structure (WBS)',
      'Interactive Gantt Timelines',
      'Critical Path Analysis',
      'Resource Leveling & Capacity',
      'Milestone Gate Approvals',
      'Project Budget Allocation'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/planora',
    accent: ACCENT.unify,
    logo: '/products/planora.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Delivering projects on time and budget: work breakdown → scheduling → resource leveling → delivery gates',
      enhances: [
        'Structured Work Breakdown Structure linking tasks directly to project budgets',
        'Dynamic Gantt charting with automated critical path recalculations',
        'Cross-project resource capacity leveling preventing team member burnout',
        'Milestone phase-gate reviews ensuring quality approvals before progression'
      ],
      removes: [
        'Static project schedules locked in desktop planning software files',
        'Resource allocation managed via memory and disconnected task boards',
        'Project budget overruns discovered only after task completion',
        'Unclear project delivery dependencies across cross-functional teams'
      ],
      unique: [
        'Direct architectural integration with Monexa for live budget burn tracking',
        'Shared resource calendars aware of employee leave schedules from Workzen',
        'Granular milestone progress verification tied to real operational deliverables'
      ],
      reducedFriction: [
        'No standalone project management subscription fees per user',
        'Zero manual updating of project financials across separate accounting tools',
        'Unified project status reports generated instantly for stakeholders'
      ]
    }
  },
  {
    id: 'logistra',
    slug: 'logistra',
    name: 'Logistra',
    category: 'Supply Chain',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Procurement Workflows, FIFO Inventory & Vendor Management',
    description:
      'The supply chain and materials management module of UNIFY: handling purchase requisitions, supplier RFQ bidding, FIFO inventory valuation, stock movements, and vendor performance governance.',
    problem:
      'Procurement orders are placed through unrecorded email exchanges, leading to inventory valuation mismatches, stockouts, and lack of supplier accountability.',
    capabilities: [
      'Requisition & RFQ Bidding',
      'FIFO Inventory Valuation',
      'Stock Movement Ledger',
      'Vendor Scorecards',
      'Goods Receipt (GRN) Logging',
      'Automated Reorder Levels'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Prototype',
    visibility: true,
    route: '/products/unify/logistra',
    accent: ACCENT.unify,
    logo: '/products/logistra.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Optimizing the supply chain: requisition → supplier bidding → PO → receiving → stock control',
      enhances: [
        'Strict PR → RFQ → PO → GRN procurement lifecycle validation',
        'Accurate FIFO inventory valuation preventing material cost distortions',
        'Objective vendor performance scorecards tracking delivery accuracy and quality',
        'Real-time multi-warehouse stock movement ledger with complete auditability'
      ],
      removes: [
        'Informal procurement requests handled through unrecorded email threads',
        'Inventory stock count surprises and unexpected material shortages',
        'Unapproved purchase commitments exceeding designated department budgets',
        'Subjective vendor selection without historical delivery and cost metrics'
      ],
      unique: [
        'Strict FIFO accounting ensuring current replacement values reflect on balance sheets',
        'Direct automated feed into Monexa accounts payable upon verified goods receipt',
        'Configurable automated reorder thresholds linked to lead times'
      ],
      reducedFriction: [
        'No separate standalone inventory and procurement software systems',
        'Eliminates manual warehouse receiving count entry errors',
        'Unified supplier portal for quotation submissions and order tracking'
      ]
    }
  },
  {
    id: 'procura',
    slug: 'procura',
    name: 'Procura',
    category: 'Business',
    type: 'module',
    parentProduct: 'unify',
    tagline: '360-Degree Customer Context, Deal Tracking & Relationship CRM',
    description:
      'The relationship and client management module of UNIFY: consolidating contact records, communication history, service contracts, meeting notes, and customer touchpoints into a shared 360-degree profile.',
    problem:
      'Customer relationship history is scattered across personal email accounts, phone contact lists, and desktop sticky notes, leaving teams without unified client context.',
    capabilities: [
      '360° Customer Profile View',
      'Contact & Account Directory',
      'Interaction History Timeline',
      'Follow-Up Task Automation',
      'Contract & Service History',
      'Customer Segment Filters'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/procura',
    accent: ACCENT.unify,
    logo: '/products/procura.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Nurturing client relationships: contact context → interaction timeline → deal tracking → customer retention',
      enhances: [
        'Comprehensive 360-degree client record uniting sales, projects, and billing history',
        'Unified interaction timeline capturing emails, meeting notes, and support tickets',
        'Automated follow-up reminders preventing client relationships from lapsing',
        'Granular customer segmentation for targeted operational communications'
      ],
      removes: [
        'Customer relationship context locked away in individual staff inboxes',
        'Embarrassing team overlaps where multiple reps contact the same client blindly',
        'Forgotten follow-ups and missed renewal dates for key service accounts',
        'Fragmented customer records duplicated across sales and operations tools'
      ],
      unique: [
        'Direct native linkage across Arventa sales, Orbitra support, and Monexa billing',
        'Universal client profile updated automatically by actions in any UNIFY module',
        'Privacy-compliant role-based visibility controls on sensitive customer notes'
      ],
      reducedFriction: [
        'No manual duplicate data entry from email contacts into external CRMs',
        'Instant full customer context accessible to support and service staff',
        'Seamless handoff of closed deals into ongoing project delivery'
      ]
    }
  },
  {
    id: 'orbitra',
    slug: 'orbitra',
    name: 'Orbitra',
    category: 'Business',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Service Desk, SLA Incident Management & Knowledge Base',
    description:
      'The support and service desk module of UNIFY: coordinating customer request intake, ticket routing, SLA resolution tracking, internal escalation paths, and self-service knowledge base articles.',
    problem:
      'Customer and internal support requests get lost in email chains, causing missed resolution SLAs, duplicated troubleshooting, and customer dissatisfaction.',
    capabilities: [
      'Multi-Channel Ticket Intake',
      'SLA Priority & Routing Rules',
      'Incident Resolution Workflow',
      'Knowledge Base Repository',
      'Customer Self-Service Portal',
      'Support Team Performance KPIs'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Prototype',
    visibility: true,
    route: '/products/unify/orbitra',
    accent: ACCENT.unify,
    logo: '/products/orbitra.png',
    deployment: 'docker',
    metrics: {},
    narrative: {
      purpose: 'Resolving service requests: ticket intake → SLA routing → diagnostic resolution → knowledge capture',
      enhances: [
        'Automated ticket categorization and routing based on urgency and SLA terms',
        'Strict SLA milestone tracking with proactive escalation warnings for team leads',
        'Searchable central knowledge base converting resolved tickets into self-service guides',
        'Transparent customer portal displaying real-time ticket progress and updates'
      ],
      removes: [
        'Support inquiries buried in unassigned shared mailbox queues',
        'Missed response commitments due to lack of SLA visibility and notifications',
        'Duplicated troubleshooting effort for known and previously resolved issues',
        'Customer frustration caused by lack of visibility into resolution progress'
      ],
      unique: [
        'Direct link to Procura customer profiles: support reps see full client account history',
        'Integrated diagnostic knowledge base accessible during live ticket resolution',
        'Built-in satisfaction survey triggers upon verified incident resolution'
      ],
      reducedFriction: [
        'No separate third-party helpdesk subscription per support agent',
        'Eliminates manual forwarding of emails to technical specialists',
        'Unified customer support history available across the entire enterprise'
      ]
    }
  },
  {
    id: 'workzen',
    slug: 'workzen',
    name: 'Workzen',
    category: 'HR',
    type: 'module',
    parentProduct: 'unify',
    tagline: 'Employee Lifecycle, Statutory Payroll & Leave Governance',
    description:
      'The comprehensive human resources and payroll module of UNIFY: governing employee records, leave approval hierarchies, statutory payroll calculations, performance appraisals, and workforce compliance within the platform.',
    problem:
      'Employee records, leave balances, and payroll calculations are maintained separately from the operational project and financial systems they directly influence.',
    capabilities: [
      'Employee Record Directory',
      'Leave Balance & Approvals',
      'Statutory Payroll Calculations',
      '360° Performance Appraisals',
      'Employee Document Archive',
      'Workforce Compliance Alerts'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    visibility: true,
    route: '/products/unify/workzen',
    accent: ACCENT.unify,
    logo: '/products/workzen.png',
    deployment: 'docker',
    metrics: { entities: 30 },
    narrative: {
      purpose: 'Governing human resources: employee profile → leave management → statutory payroll → performance review',
      enhances: [
        'Central employee directory with digital document vaults and expiration tracking',
        'Multi-level leave approval hierarchies with automated balance calculations',
        'Statutory-compliant payroll generation with automatic deductions and tax rules',
        'Structured performance appraisal cycles linked to objective departmental KPIs'
      ],
      removes: [
        'Employee personal records scattered across paper files and local spreadsheets',
        'Leave requests negotiated via chat messages without balance validation',
        'Manual payroll calculations in Excel prone to formula errors and delays',
        'Disconnection between employee project allocations and payroll cost centers'
      ],
      unique: [
        'Direct native linkage to Monexa: approved payroll batches generate general ledger entries automatically',
        'Shared leave calendar visible to Planora for accurate project resource availability',
        'Secure self-service portal for payslip downloads and leave applications'
      ],
      reducedFriction: [
        'Eliminates third-party HRIS and payroll software integration complexity',
        'No manual payroll data transcription into corporate accounting ledgers',
        'Streamlined employee onboarding with standardized document collection'
      ]
    }
  }
]

export const VEDIK_MODULES: Product[] = [
  {
    id: 'vedik-school-erp',
    slug: 'school-erp',
    name: 'Vedik School Management ERP',
    category: 'Education',
    type: 'module',
    parentProduct: 'vedik',
    tagline: 'Comprehensive School ERP, Academics, Fee Collection & Administration',
    description:
      'A complete, all-in-one management system designed to streamline every aspect of school administration — from student admissions and fee collection to teacher workloads, daily attendance, examination gradebooks, transport, and academic reporting.',
    problem:
      'Schools juggle disjointed software tools for fees, attendance, student records, and timetables, leading to administrative overhead, error-prone spreadsheets, and delayed reporting to parents and boards.',
    capabilities: [
      'Admissions, Student Profiles & Digital Enrollment',
      'Tuition Fee Invoices, Online Collections & Receipts',
      'Daily Attendance, Teacher Workloads & Staff Rosters',
      'Timetable Scheduling & Automated Class Allocations',
      'Examination Engine, Gradebooks & Report Cards',
      'Transport Fleet & Bus Route Optimization',
      'Library Management System & Asset Tracking',
      'Parent & Student Self-Service Portals',
      'CBSE, ICSE & State Board Compliance Ready'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/vedik/school-erp',
    accent: ACCENT.vedik,
    logo: '/products/vedik.png',
    demoUrl: 'https://vedik-demo.netlify.app/dashboard/',
    deployment: 'vercel',
    metrics: {
      loc: 33000,
      endpoints: 78,
      modules: 21,
      tests: 136
    },
    narrative: {
      purpose:
        'Single unified operational ERP backbone for K-12 primary and secondary educational institutions.',
      enhances: [
        'Streamlined fee collection with automated digital receipts and payment reconciliation',
        'Real-time gradebook entry and instant report card generation',
        'Unified parent communication with instant SMS and email notifications',
        'End-to-end transport and bus fleet visibility'
      ],
      removes: [
        'Paper-based registers and manual daily attendance calculation',
        'Unreconciled fee dues and delayed cash-flow tracking',
        'Fragmented third-party library, timetable, and transport plugins',
        'Complicated manual compliance reporting for CBSE and ICSE boards'
      ],
      unique: [
        '30+ fully functional administrative and academic workflows in a single glassmorphic interface',
        'Zero-setup role switcher for rapid administrative walkthrough',
        'Print-ready fee receipts, payslips, student ID cards, and official certificates'
      ],
      reducedFriction: [
        'Direct browser dashboard access with zero installation required',
        'Pre-configured academic master data templates for immediate onboarding',
        'Integrated with Vedik Social Community for unified campus engagement'
      ]
    }
  },
  {
    id: 'vedik-social',
    slug: 'social-community',
    name: 'Vedik Social Community',
    category: 'Education',
    type: 'module',
    parentProduct: 'vedik',
    tagline: 'Institutional Social Network, Campus Clubs & Safe Student Community',
    description:
      'A secure, AI-moderated campus social network and student community platform designed for educational institutions. Integrates campus feeds, club societies, house points championship, verified student portfolios, safe messaging, and multi-persona portals.',
    problem:
      'Students and faculties rely on unmonitored external social networks, creating cyberbullying risks, zero institutional oversight, fragmented club activities, and lack of verified student extracurricular achievement tracking.',
    capabilities: [
      'Interactive Campus Feed & Faculty Announcements',
      '8+ Campus Clubs & Student Societies Management',
      'Student Honors & Tamper-Proof Portfolio',
      'House Points Championship & Gamified Leaderboards',
      'Live Campus Events Calendar & 1-Click RSVP',
      'Admin AI Safety Engine & Automated Toxicity Moderation',
      'Multi-Persona Portals (Student, Faculty, Admin, Parent)',
      'Safe Peer-to-Mentor Messaging Channels',
      'Custom Institutional Branding & Theme Customizer'
    ],
    platforms: ['Web', 'Mobile'],
    status: 'Ready to Deploy',
    featured: true,
    visibility: true,
    route: '/products/vedik/social-community',
    accent: ACCENT.vedik,
    logo: '/products/vedik-community.png',
    demoUrl: 'https://vediksocial.vercel.app',
    deployment: 'vercel',
    metrics: {
      loc: 18500,
      endpoints: 42,
      modules: 12,
      tests: 64
    },
    narrative: {
      purpose:
        'Campus engagement and safe social community ecosystem with real-time AI moderation, club governance, and verified extracurricular portfolios.',
      enhances: [
        'Institutional community engagement across students, teachers, parents, and administrators',
        'Extracurricular recognition with verified house points and digital student portfolios',
        'Campus safety with automated real-time toxicity and cyberbullying filtering',
        'Event coordination and club participation tracking'
      ],
      removes: [
        'Unmonitored third-party social media channels for campus communication',
        'Manual club management, attendance tracking, and event signups',
        'Lost records of student honors, extracurricular leadership, and achievements',
        'Slow administrative reaction to toxic or unsafe online student interactions'
      ],
      unique: [
        'Built-in AI Safety Engine sandbox for immediate toxicity moderation',
        'Integrated multi-persona role switching (Student, Faculty, Admin, Parent)',
        '100% institutionally branded and controlled environment with zero third-party ads'
      ],
      reducedFriction: [
        'Instant zero-configuration web access on any device',
        'One-click persona preview for rapid institutional evaluation',
        'Direct integration into the Vedik Unified Education database'
      ]
    }
  }
]

export const ALL_PRODUCTS: Product[] = [...PRODUCTS, ...UNIFY_MODULES, ...VEDIK_MODULES]

export const PRODUCT_GROUPS: Record<string, { title: string; type: string[] }> = {
  industry: { title: 'Industry Applications', type: ['industry'] },
  platform: { title: 'Business Platform', type: ['platform'] },
  specialized: { title: 'Specialized Platform', type: ['specialized'] },
  developer: { title: 'Developer & Security Technology', type: ['developer', 'security'] }
}

export const CATEGORIES: string[] = [
  'Education',
  'Healthcare',
  'Automotive',
  'Beauty & Wellness',
  'Business',
  'Finance',
  'HR',
  'Logistics',
  'Supply Chain',
  'Projects',
  'Developer Tools',
  'Cybersecurity'
]

export const getProductBySlug = (slug: string): Product | undefined =>
  ALL_PRODUCTS.find((p) => p.slug === slug || p.id === slug)

export const getChildren = (slug: string): Product[] =>
  ALL_PRODUCTS.filter((p) => p.parentProduct === slug)

export const getGroup = (p: Product): 'industry' | 'platform' | 'specialized' | 'developer' | 'security' => {
  if (p.type === 'platform') return 'platform'
  if (p.type === 'specialized') return 'specialized'
  if (p.type === 'developer') return 'developer'
  if (p.type === 'security') return 'security'
  return 'industry'
}


