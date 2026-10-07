export const profile = {
  name: "Sonu Kumar",
  location: "Delhi, India",
  role: "Full-Stack Developer",
  positioning: "Full-Stack Developer → AI Developer",
  summary:
    "Full-Stack Developer with 5+ years of experience building scalable, high-performance web and mobile applications using React.js, React Native, Next.js and Node.js. Strong expertise in modern JavaScript ecosystems, REST API integration, state management, and performance optimization. Proven track record of delivering production-ready applications with clean, maintainable, and modular architecture. Experienced in Firebase services and Google Maps integration.",
  subline:
    "I build production-ready digital products with clean architecture, thoughtful UX and strong performance.",
  email: "sonugupta6746@gmail.com",
  phone: "+91 9709834056",
  social: {
    github: "SonuBuilds",
    linkedin: "sonu-kumar-3b7072237"
  }
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "C#", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  frontend: ["React.js", "React Native", "Next.js", "Angular", "Redux Toolkit"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Third-party API Integration"],
  gameAnd3d: ["Unity 3D / 2D", "C# Scripting", "Game Physics & Collisions", "Cinemachine & URP", "Interactive 3D / WebGL"],
  databases: ["MongoDB", "MySQL", "Supabase (PostgreSQL)"],
  other: ["Firebase Auth", "Firebase Realtime DB", "Firebase Cloud Messaging", "Cloudflare R2", "Google Maps API", "Git/GitHub", "VS Code", "Postman", "Swagger"],
  toolsAndConcepts: ["Responsive Design", "Performance Optimization", "Role-Based Authentication", "State Management", "Agile Methodologies"]
};

export type ProjectTag = "commerce" | "platform" | "enterprise";

export const projectCategories: { id: ProjectTag | "all"; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "commerce", label: "Marketplace & Commerce" },
  { id: "platform", label: "Platforms & SaaS" },
  { id: "enterprise", label: "Enterprise, Fintech & Web3" }
];

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  tags: ProjectTag[];
  platforms: string[];
  logo?: string;
  images?: { desktop: string; mobile?: string };
  resumeDesc: string;
  description: string;
  bullets: string[];
  stack: string[];
  result: string;
  accent: string;
  url: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "pick-a-pro",
    title: "Pick A Pro",
    category: "On-Demand Marketplace Ecosystem",
    tags: ["commerce", "platform"],
    platforms: ["Web", "iOS", "Android", "Partner App", "Admin"],
    logo: "/logos/projects/pickapro.png",
    images: { desktop: "/projects/pick-a-pro/desktop.webp", mobile: "/projects/pick-a-pro/mobile.webp" },
    resumeDesc: "Built comprehensive full-stack ecosystem (web, React Native apps, partner app, admin dashboard) with Firebase Auth, Google Maps API, and Redux Toolkit.",
    description: "End-to-end on-demand service marketplace connecting verified home service professionals with customers in real-time. Engineered 4 integrated production applications: Customer Web Portal, Cross-Platform Mobile Apps (iOS & Android), Partner Service App, and an Enterprise Admin Operations Dashboard.",
    bullets: [
      "Engineered cross-platform mobile apps and web frontend using React.js, Next.js, and React Native with shared modular component libraries.",
      "Implemented secure multi-tier role-based authentication (RBAC) via Firebase Auth for Customers, Service Providers, and Operations Admins.",
      "Integrated Google Maps Geolocation & Places API for automated proximity dispatch, live provider tracking, and dynamic pricing.",
      "Leveraged Redux Toolkit for centralized global state and Firebase Cloud Messaging (FCM) for real-time booking push notifications.",
      "Built comprehensive operational analytics dashboards tracking live orders, revenue settlements, and customer retention metrics."
    ],
    stack: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Node.js", "Express.js", "Firebase Auth & FCM", "Google Maps API"],
    result: "4 production apps · 99.8% crash-free",
    accent: "from-violet-500/20 via-transparent to-cyan-400/10",
    url: "https://pickapro.co.nz/"
  },
  {
    number: "02",
    slug: "propertyworks",
    title: "PropertyWorks",
    category: "Real Estate Intelligence & Advisory Platform",
    tags: ["platform"],
    platforms: ["Web", "Admin"],
    logo: "/logos/projects/propertyworks.png",
    images: { desktop: "/projects/propertyworks/desktop.webp", mobile: "/projects/propertyworks/mobile.webp" },
    resumeDesc: "Developed full-stack real estate advisory platform with dedicated Admin Panel, project directory, OTP-based admin workflows, lead capture, and dynamic blog engine using Next.js, TypeScript, and REST APIs.",
    description: "Full-stack real estate intelligence and advisory platform engineered with a dedicated Admin Panel for managing property projects, listings, leads, blogs, and platform content. Designed scalable frontend and backend architecture, integrated secure REST APIs, and built responsive user experiences.",
    bullets: [
      "Developed end-to-end real estate portal and dedicated Admin Panel for managing property projects, listings, leads, and Knowledge Center blogs.",
      "Built responsive, reusable frontend components using React.js, Next.js, Tailwind CSS, and TypeScript with mobile-first performance.",
      "Engineered backend REST APIs, database schemas, OTP-based secure admin actions, and automated lead capture pipelines.",
      "Implemented programmatic SEO optimization, fast project directory filters, and end-to-end production deployment workflows."
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Lead Management", "SEO"],
    result: "Full-Stack Advisory · OTP Admin & Lead Engine",
    accent: "from-emerald-400/15 via-transparent to-blue-500/10",
    url: "https://propertyworks.in/"
  },
  {
    number: "03",
    slug: "memory-caravan",
    title: "Memory Caravan",
    category: "QR-Based Digital Media & Keepsake Platform",
    tags: ["platform", "commerce"],
    platforms: ["Web", "QR"],
    images: { desktop: "/projects/memory-caravan/desktop.webp", mobile: "/projects/memory-caravan/mobile.webp" },
    resumeDesc: "Architected end-to-end QR keepsake platform with private video streaming via Cloudflare R2, short-lived tokens, HTTP Range requests, and Supabase using Next.js & TypeScript.",
    description: "End-to-end QR-based digital media platform allowing users to scan unique QR codes and securely access personalized photo and video keepsakes. Designed a private video storage and streaming architecture using Cloudflare R2, short-lived playback tokens, and HTTP Range-based streaming without exposing storage objects.",
    bullets: [
      "Engineered end-to-end QR-based media platform with dynamic routing, album previews, and secure media access mapping.",
      "Designed private video storage and streaming pipeline with Cloudflare R2, short-lived playback tokens, and HTTP Range-based chunk delivery.",
      "Built backend APIs, database integration, and security controls with Supabase PostgreSQL, Next.js, and TypeScript.",
      "Delivered fluid mobile-first UI with Tailwind CSS and handled complete storage management, media processing, and production deployment."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare R2", "Video Streaming", "QR Routing"],
    result: "End-to-End Platform · Secure R2 Video Streaming",
    accent: "from-pink-500/15 via-transparent to-purple-500/10",
    url: "https://memory-caravan.onrender.com/"
  },
  {
    number: "04",
    slug: "grasberg",
    title: "Grasberg International",
    category: "Forex Platform & Role-Based CRM",
    tags: ["enterprise"],
    platforms: ["Web", "CRM"],
    logo: "/logos/projects/grasberg.png",
    images: { desktop: "/projects/grasberg/desktop.webp", mobile: "/projects/grasberg/mobile.webp" },
    resumeDesc: "Built Next.js frontend combining an informational website with a role-based CRM for User, Partner, and Admin roles, integrating MetaTrader 5 (MT5) APIs.",
    description: "Enterprise forex brokerage platform combining an informational brand portal with a comprehensive role-based CRM. Engineered dedicated modules for User, Partner, Super Admin, and Sub Admin roles, integrating REST APIs and MetaTrader 5 (MT5) backend trading workflows.",
    bullets: [
      "Built frontend for a global forex platform combining an informational website with a multi-tenant role-based CRM using Next.js.",
      "Delivered SEO-friendly website pages and dedicated portal modules for User, Partner, Super Admin, and Sub Admin roles.",
      "Integrated REST APIs and worked with MetaTrader 5 (MT5) backend APIs for trading workflows and account management.",
      "Implemented responsive UI with Tailwind CSS, role authorization controls, and high-performance server-rendered pages."
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "MetaTrader 5 (MT5)", "Role-Based CRM"],
    result: "Multi-Role CRM · MT5 Trading Integration",
    accent: "from-amber-400/15 via-transparent to-emerald-500/10",
    url: "https://grasberginternational.com/"
  },
  {
    number: "05",
    slug: "upbscan",
    title: "UPBScan",
    category: "Blockchain Network Explorer",
    tags: ["enterprise"],
    platforms: ["Web", "Web3"],
    logo: "/logos/projects/upbscan.png",
    images: { desktop: "/projects/upbscan/desktop.webp", mobile: "/projects/upbscan/mobile.webp" },
    resumeDesc: "Developed real-time blockchain explorer for the UPB network to track live blocks, transactions, tokens (UPB, USDT, UPBP), and validator nodes.",
    description: "High-throughput, real-time decentralized ledger explorer for the UPB blockchain ecosystem. Empowers cryptocurrency traders, developers, and node validators to inspect live block production, verify smart contracts, track wallet balances, and monitor gas price fluctuations.",
    bullets: [
      "Integrated high-frequency REST APIs and WebSocket data streams for sub-second block ingestion and real-time transaction updates.",
      "Engineered deep multi-token tracking for native UPB, USDT (Tether), and UPBP assets with detailed smart contract transaction logs.",
      "Built address balance lookups, historical transaction charts using Chart.js, and automated contract source code verification interfaces.",
      "Optimized large-dataset rendering with table virtualization, ensuring silky-smooth navigation across 100,000+ historical transaction rows."
    ],
    stack: ["React.js", "Web3 Integration", "RESTful APIs", "Chart.js", "Tailwind CSS", "WebSocket Feeds", "TypeScript"],
    result: "Real-time network visibility · <80ms search",
    accent: "from-cyan-400/15 via-transparent to-violet-500/10",
    url: "https://upbscan.com/"
  },
  {
    number: "06",
    slug: "hem-aunty",
    title: "Hem Aunty Publications",
    category: "E-Commerce Publishing Storefront",
    tags: ["commerce"],
    platforms: ["Web"],
    logo: "/logos/projects/hemaunty.png",
    images: { desktop: "/projects/hem-aunty/desktop.webp", mobile: "/projects/hem-aunty/mobile.webp" },
    resumeDesc: "Built scalable React e-commerce bookstore with product catalog, cart, Firebase Auth, and secure payment processing via REST APIs.",
    description: "Full-featured, high-conversion online bookstore and digital publishing storefront. Built to deliver a seamless shopping experience for educational and regional literature with frictionless checkout, dynamic inventory, and real-time order tracking.",
    bullets: [
      "Engineered dynamic catalog with multi-facet search, subject filtering, author collections, and real-time stock inventory synchronization.",
      "Designed streamlined shopping cart and multi-step checkout with coupon code validation, automated tax calculation, and payment gateway APIs.",
      "Implemented secure user authentication and order management via Firebase, allowing customers to track shipments and order history.",
      "Applied advanced asset optimization, lazy loading, and code splitting, achieving a 95+ Google Lighthouse mobile performance score."
    ],
    stack: ["React.js", "Firebase Auth", "REST APIs", "Redux Toolkit", "Tailwind CSS", "Payment Gateway"],
    result: "+28% order conversion · 1.1s load time",
    accent: "from-orange-400/15 via-transparent to-pink-400/10",
    url: "https://hemaunty.org/"
  },
  {
    number: "07",
    slug: "radheadda",
    title: "SOCIETY — RADHEADDA",
    category: "Community & Matrimonial Platform",
    tags: ["platform"],
    platforms: ["Web"],
    logo: "/logos/projects/radheadda.png",
    images: { desktop: "/projects/radheadda/desktop.webp", mobile: "/projects/radheadda/mobile.webp" },
    resumeDesc: "Built full-stack matrimonial platform with verified profiles, private chat, consultations, and events using Angular, ASP.NET Core, and MySQL.",
    description: "Enterprise-grade matrimonial and social community networking portal engineered to connect diverse communities with verified identities, strict privacy safeguards, real-time private communication, and consultation booking.",
    bullets: [
      "Developed multi-criteria matchmaking algorithm filtering candidates by education, profession, location, and lifestyle preferences.",
      "Engineered real-time private messaging, video/audio consultation booking, and community announcements using Angular and ASP.NET Core.",
      "Built high-capacity community event directory, photo gallery showcase, and automated newsletter publishing modules.",
      "Implemented JWT token-based authentication and role-based data encryption in ASP.NET Core to ensure total user privacy and data security."
    ],
    stack: ["Angular", "ASP.NET Core", "C#", "MySQL", "REST APIs", "JWT Auth", "Bootstrap"],
    result: "15,000+ verified members · 99.9% uptime",
    accent: "from-emerald-400/15 via-transparent to-cyan-400/10",
    url: "https://www.radhiadda.com/login"
  },
  {
    number: "08",
    slug: "smartclass",
    title: "SmartClass — Educomp",
    category: "Enterprise Educational Software",
    tags: ["enterprise"],
    platforms: ["Desktop", "Offline-first"],
    resumeDesc: "Modernized JavaFX classroom software across 10,000+ schools; implemented NEP-2020 competency-based evaluation and interactive grading tools.",
    description: "Mission-critical interactive classroom software platform deployed across a nationwide network of 10,000+ schools, reaching over 2 million students daily. Modernized legacy desktop applications to align with India's National Education Policy (NEP-2020).",
    bullets: [
      "Engineered continuous competency-based evaluation engine adhering to official statutory NEP-2020 guidelines for nationwide schools.",
      "Enhanced JavaFX multimedia playback, interactive digital whiteboard tools, and offline-first classroom presentation engines.",
      "Developed comprehensive teacher gradebook analytics for monitoring student progress, attendance trends, and automated report card generation.",
      "Engineered robust offline data caching and synchronization protocols, ensuring uninterrupted operation in low-connectivity rural classrooms."
    ],
    stack: ["JavaFX", "Java", "Desktop Architecture", "NEP-2020 Framework", "Offline Sync", "Multimedia Engine"],
    result: "10,000+ schools · 2M+ daily students",
    accent: "from-blue-400/15 via-transparent to-violet-500/10",
    url: ""
  },
  {
    number: "09",
    slug: "nutrinest",
    title: "Nutrinest Ventures",
    category: "D2C Brand Commerce Platform",
    tags: ["commerce"],
    platforms: ["Web"],
    logo: "/logos/projects/nutrinest.png",
    images: { desktop: "/projects/nutrinest/desktop.webp", mobile: "/projects/nutrinest/mobile.webp" },
    resumeDesc: "Developed high-performance brand platform with responsive UI, ingredient transparency explorer, and sub-second page loads.",
    description: "Bespoke, high-performance brand portal and direct-to-consumer digital experience for a premium nutritional health company. Crafted with cutting-edge visual aesthetics, interactive product discovery, and flawless multi-device responsiveness.",
    bullets: [
      "Crafted luxury dark-mode visual interface with fluid micro-interactions, smooth scroll storytelling, and mobile-first responsiveness.",
      "Built interactive nutritional ingredient explorer, serving size calculators, and verified customer review carousels.",
      "Achieved 98/100 Google PageSpeed score through responsive WebP/AVIF asset pipelines, critical CSS inlining, and lazy hydration.",
      "Implemented rich structured JSON-LD schema markup, OpenGraph social meta tags, and accessibility (WCAG AA) compliance."
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Performance", "SEO & Schema"],
    result: "98/100 PageSpeed · +40% engagement",
    accent: "from-lime-300/10 via-transparent to-emerald-400/10",
    url: "https://www.nutrinestventures.com/"
  },
  {
    number: "10",
    slug: "spods",
    title: "SPODS Technologies",
    category: "Corporate Brand & Services Platform",
    tags: ["enterprise"],
    platforms: ["Web"],
    logo: "/logos/spods.png",
    images: { desktop: "/projects/spods/desktop.webp", mobile: "/projects/spods/mobile.webp" },
    resumeDesc: "Engineered the official corporate website for SPODS Technologies highlighting services, capabilities, and company portfolio.",
    description: "Official corporate website and services platform for SPODS Technologies. Built to serve as the primary digital touchpoint for clients, showcasing enterprise capabilities, core services, and contact channels.",
    bullets: [
      "Architected a responsive, modern corporate web presence with optimized performance and accessibility.",
      "Implemented streamlined navigation to highlight core services like Web/Mobile Development and AI Integration.",
      "Ensured rapid page loads and high SEO rankings through static generation and optimized media assets."
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    result: "Official Brand Portal",
    accent: "from-zinc-500/15 via-transparent to-zinc-400/10",
    url: "https://www.spodstechnologies.com/"
  }
];

export type Experience = {
  period: string;
  company: string;
  location: string;
  role: string;
  logo?: string;
  url?: string;
  tags: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    period: "08/2025 — Present",
    company: "SPODS Technologies",
    location: "Delhi, India",
    role: "Frontend Developer — React, React Native & Next.js",
    logo: "/logos/spods.png",
    url: "https://www.spodstechnologies.com/",
    tags: ["React.js", "React Native", "Next.js", "Redux Toolkit", "Google Maps API", "Firebase Auth & FCM"],
    bullets: [
      "Developing and maintaining the Pick A Pro ecosystem including web platform, mobile application, admin dashboard, and Pick A Pro Partner app.",
      "Implemented role-based login and authorization to manage access for users, partners, and admin modules securely.",
      "Building cross-platform applications using React JS, Next.js, and React Native with reusable and modular component architecture.",
      "Using Redux Toolkit (RTK) for centralized state management and seamless data flow across web and mobile.",
      "Integrating REST APIs and third-party services to deliver real-time functionality and enhanced user experience.",
      "Developing dynamic dashboards with role-specific features, analytics, and business workflows.",
      "Optimizing performance, responsiveness, and code quality for scalable multi-device applications.",
      "Collaborating with backend and product teams to deliver user-centric and maintainable solutions."
    ]
  },
  {
    period: "06/2025 — 08/2025",
    company: "NOYT INDIA",
    location: "Delhi, India",
    role: "Software Developer",
    logo: "/logos/companies/noyt.png",
    url: "https://noytindia.com/",
    tags: ["JavaScript", "REST APIs", "Third-Party Integrations", "Module Architecture"],
    bullets: [
      "Managed independent project modules, overseeing the full development cycle from initial concept to final delivery.",
      "Enhanced application functionality and user experience by integrating third-party APIs."
    ]
  },
  {
    period: "02/2025 — 06/2025",
    company: "3FITECH COMMUNICATIONS PVT LTD",
    location: "Delhi, India",
    role: "Software Developer",
    logo: "/logos/companies/3fitech.png",
    url: "https://3fitech.com/",
    tags: ["Software Engineering", "Code Reviews", "Cross-Functional Agile"],
    bullets: [
      "Collaborated with cross-functional teams to define project requirements and deliver solutions that met business needs.",
      "Developed scalable and maintainable code, ensuring long-term stability of the software."
    ]
  },
  {
    period: "11/2023 — 01/2025",
    company: "EDUMITRAM PVT LTD",
    location: "Delhi, India",
    role: "Frontend Developer (React)",
    logo: "/logos/edumitram.png",
    tags: ["React.js", "UI/UX Optimization", "Enterprise Clients", "Educomp", "EbixCash"],
    bullets: [
      "Developed user-friendly web interfaces for clients including Educomp Solutions Limited, EbixCash Pvt Ltd, and Hem Aunty Publications.",
      "Improved user satisfaction through intuitive UI/UX design and efficient API integrations."
    ]
  },
  {
    period: "04/2021 — 10/2023",
    company: "SLOG Solutions Pvt. Ltd",
    location: "Delhi, India",
    role: "Frontend Developer (React / Angular)",
    logo: "/logos/companies/slog.png",
    url: "https://slogsolutions.com/",
    tags: ["Angular", "React", "Python", "Debugging & Testing", "Performance Tuning"],
    bullets: [
      "Reduced defects by 20% through systematic debugging in Angular/React apps.",
      "Trained students in Python and web development."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Government Engineering College Ajmer",
    location: "Ajmer, Rajasthan",
    year: "2020",
    period: "2016 — 2020"
  },
  {
    degree: "Intermediate",
    institution: "T P Verma College Narkatiyaganj",
    location: "Bihar, India",
    year: "2015",
    period: "2013 — 2015"
  },
  {
    degree: "Matric",
    institution: "High School Harinagar",
    location: "Bihar, India",
    year: "2012",
    period: "2012"
  }
];

export const keyAchievements = [
  "Optimized web application load times by 30% through code splitting, lazy loading, and performance tuning.",
  "Reduced defects by 20% in frontend applications via debugging and best practices.",
  "1st Prize in Chess at GEC Ajmer (2018 & 2019).",
  "Organized COMBAT-2K18/19 tech events."
];

export const achievements = [
  ["30%", "Web load-time optimization"],
  ["20%", "Frontend defect reduction"],
  ["10k+", "Users across shipped products"],
  ["5+", "Years building real products"]
];

/** Brands & clients delivered for — shown in the logo marquee. */
export const clients: { name: string; logo?: string }[] = [
  { name: "Pick A Pro", logo: "/logos/projects/pickapro.png" },
  { name: "Educomp" },
  { name: "EbixCash", logo: "/logos/projects/ebixcash.png" },
  { name: "PropertyWorks", logo: "/logos/projects/propertyworks.png" },
  { name: "Grasberg", logo: "/logos/projects/grasberg.png" },
  { name: "Hem Aunty", logo: "/logos/projects/hemaunty.png" },
  { name: "UPBScan", logo: "/logos/projects/upbscan.png" },
  { name: "Nutrinest", logo: "/logos/projects/nutrinest.png" },
  { name: "Radheadda", logo: "/logos/projects/radheadda.png" },
  { name: "SPODS Tech", logo: "/logos/spods.png" },
  { name: "Edumitram", logo: "/logos/edumitram.png" }
];

export const services = [
  { title: "Web Applications", text: "Modern, scalable interfaces with React, Next.js and TypeScript." },
  { title: "Mobile Applications", text: "Cross-platform iOS and Android experiences with React Native." },
  { title: "Backend Systems", text: "REST APIs, authentication, integrations and product workflows." },
  { title: "Game & 3D Interactive", text: "Interactive 2D/3D games, simulations, and virtual experiences with Unity and C#." },
  { title: "AI-Powered Products", text: "A forward path into AI integrations, automation and intelligent product experiences." }
];
