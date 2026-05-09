import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'africasoft-web',
    name: 'AfricaSoft Web Office',
    description: 'Custom web portal for corporate office management and communication.',
    fullDescription: 'A comprehensive web portal designed for AfricaSoft to streamline corporate communications, document management, and office operations. It features secure user authentication, role-based access control, and real-time notifications.',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    image: 'assets/images/africasoft.png',
    requirements: [
      'Centralized document management system.',
      'Internal communication tools (messaging/announcements).',
      'Task tracking and employee directory.',
      'Scalable architecture for high-concurrency.'
    ],
    structure: 'Monorepo architecture with an Angular frontend and a NestJS backend. Uses Prisma as an ORM for PostgreSQL. Implements JWT for secure authentication.'
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker Pro',
    description: 'A professional financial tracking application with interactive charts.',
    fullDescription: 'A robust personal finance management tool that allows users to track income, expenses, and savings. It provides visual insights through interactive charts and helps users stay within their budgets.',
    tech: ['Angular', 'Node.js', 'Firebase', 'Chart.js'],
    image: 'assets/images/expense-tracker.png',
    requirements: [
      'Real-time data synchronization with Firebase.',
      'Interactive data visualization for spending patterns.',
      'Secure login and multi-device support.',
      'Exportable financial reports (PDF/CSV).'
    ],
    structure: 'Angular application using Firebase Firestore for the database and Firebase Auth for security. Chart.js is integrated for dynamic reporting.'
  },
  {
    id: 'hydronet',
    name: 'Hydronet Borehole Report',
    description: 'Automated reporting and analysis system for geological surveys.',
    fullDescription: 'A specialized application for geologists and engineers to record borehole data and generate standardized reports. It automates complex calculations and ensures data consistency across surveys.',
    tech: ['Angular', '.NET Core', 'PostgreSQL', 'D3.js'],
    image: 'assets/images/hydronet.png',
    requirements: [
      'Dynamic form generation for varied survey types.',
      'Automated PDF report generation.',
      'Geospatial data integration.',
      'Offline-first capabilities for remote field work.'
    ],
    structure: 'Angular SPA with a .NET Core Web API backend. Uses PostgreSQL with PostGIS for spatial data. D3.js is used for borehole log visualization.'
  },
  {
    id: 'vorvex',
    name: 'Vorvex Connect Trade',
    description: 'High-performance trading and exchange platform.',
    fullDescription: 'A cutting-edge trading platform designed for high-frequency trading and market analysis. It provides real-time market data, advanced charting tools, and a seamless order execution interface.',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'WebSockets', 'Redis'],
    image: null,
    requirements: [
      'Ultra-low latency market data updates.',
      'Complex order type support (Stop-loss, Limit, etc.).',
      'Advanced technical analysis charting.',
      'Highly secure transaction processing.'
    ],
    structure: 'Distributed system with Node.js microservices. WebSockets are used for real-time data streaming. Redis acts as a high-speed cache for order books.'
  },
  {
    id: 'dairy-farm',
    name: 'Dairy Farm Management',
    description: 'Comprehensive farm management system for livestock and production.',
    fullDescription: 'An end-to-end solution for dairy farmers to manage livestock health, milk production, and supply chain logistics. Includes automated alerts for vaccination and production anomalies.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Docker'],
    image: null,
    requirements: [
      'Livestock tracking and health records.',
      'Milk production monitoring and analytics.',
      'Inventory management for feed and supplies.',
      'Mobile-friendly interface for field use.'
    ],
    structure: 'MEAN stack (MongoDB, Express, Angular, Node) containerized with Docker for easy deployment and scaling.'
  },
  {
    id: 'property-mgmt',
    name: 'Property Management System',
    description: 'Enterprise-grade real estate and property management platform.',
    fullDescription: 'A multi-tenant property management platform that handles everything from tenant onboarding to rent collection and maintenance requests. Features a sophisticated RBAC system for landlords and staff.',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'TypeScript'],
    image: null,
    requirements: [
      'Multi-tenant isolation for different companies.',
      'Sophisticated RBAC and permission system.',
      'Automated rent invoicing and tracking.',
      'Maintenance request workflow.'
    ],
    structure: 'NestJS backend following Clean Architecture principles. Uses Prisma 7 for database access with a custom driver adapter pattern for PostgreSQL.'
  },
  {
    id: 'oohtech',
    name: 'OOHTECH Advertising',
    description: 'Out-of-home advertising management and billboard tracking.',
    fullDescription: 'A platform for managing digital and physical billboard inventory. It allows advertisers to book spots and provides real-time analytics on ad impressions and audience reach.',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Mapbox'],
    image: null,
    requirements: [
      'Interactive map for billboard location tracking.',
      'Dynamic booking and scheduling engine.',
      'Real-time ad impression analytics.',
      'Secure payment gateway integration.'
    ],
    structure: 'Angular frontend with Mapbox integration. NestJS backend managing high-concurrency booking requests and analytics data aggregation.'
  },
  {
    id: 'sponspay',
    name: 'Sponspay Platform',
    description: 'Sponsorship and payment management for creators and events.',
    fullDescription: 'A fintech platform bridging creators with sponsors. It streamlines the contract negotiation process and ensures secure, transparent payment cycles.',
    tech: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe API'],
    image: null,
    requirements: [
      'End-to-end sponsorship workflow management.',
      'Secure escrow-based payment system.',
      'Automated contract generation.',
      'Stripe integration for international payments.'
    ],
    structure: 'Angular frontend with a Node.js/Express backend. Uses PostgreSQL for transactional data and Stripe for financial operations.'
  },
  {
    id: 'uniflow',
    name: 'UNI FLOW',
    description: 'Advanced workflow and university management system.',
    fullDescription: 'A comprehensive system for educational institutions to manage student flows, administrative workflows, and departmental coordination.',
    tech: ['Angular', 'TypeScript', 'SCSS'],
    image: null,
    requirements: [
      'Customizable workflow engine.',
      'Student enrollment and tracking system.',
      'Departmental resource management.',
      'Integration with existing academic databases.'
    ],
    structure: 'Highly modular Angular 16 application with reusable components and services for different university departments.'
  },
  {
    id: 'lerms',
    name: 'LERMS (Law Enforcement RMS)',
    description: 'Law Enforcement Records Management System for secure data handling.',
    fullDescription: 'A highly secure records management system for law enforcement agencies. It manages incident reports, criminal records, and case files with strict audit logging.',
    tech: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
    image: null,
    requirements: [
      'Strict compliance with law enforcement security standards.',
      'Comprehensive audit logging for all data access.',
      'Complex search and indexing of case files.',
      'Secure document uploading and encryption.'
    ],
    structure: 'Angular frontend with a .NET Core backend. Uses SQL Server for structured data and Azure Blob Storage for encrypted document storage.'
  }
];
