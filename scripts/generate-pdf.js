const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');
const scratchDir = path.join(__dirname, '..', 'scratch');
const chromeBinary = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

function getIcons(isDark) {
  const c = isDark ? '#a78bfa' : '#2563eb';
  return {
    location: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    email: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    linkedin: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="${c}" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    github: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="${c}" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
    globe: `<svg width="10.5" height="10.5" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-right:3.5px;"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
  };
}

function getStyles(isDark) {
  const bg = isDark ? '#0d0e14' : '#ffffff';
  const text = isDark ? '#cbd5e1' : '#1e293b';
  const titleColor = isDark ? '#ffffff' : '#0f172a';
  const borderHeader = isDark ? '#8b5cf6' : '#2563eb';
  const sectionBorder = isDark ? '#334155' : '#cbd5e1';
  const accent = isDark ? '#a78bfa' : '#2563eb';
  const tagBg = isDark ? 'rgba(139, 92, 246, 0.15)' : '#eff6ff';
  const tagBorder = isDark ? 'rgba(139, 92, 246, 0.35)' : '#bfdbfe';
  const tagText = isDark ? '#c4b5fd' : '#1d4ed8';
  const subText = isDark ? '#94a3b8' : '#64748b';
  const bulletColor = isDark ? '#a78bfa' : '#2563eb';

  return `
    @page {
      size: letter portrait;
      margin: 6mm 9mm 5mm 9mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: ${text};
      background: ${bg};
      font-size: 8.85pt;
      line-height: 1.28;
      -webkit-font-smoothing: antialiased;
    }
    header {
      text-align: center;
      margin-bottom: 5px;
      padding-bottom: 4px;
      border-bottom: 2px solid ${borderHeader};
    }
    h1 {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.4px;
      text-transform: uppercase;
      color: ${titleColor};
      line-height: 1.05;
      margin-bottom: 2px;
    }
    .headline {
      font-size: 9.4pt;
      font-weight: 700;
      color: ${accent};
      margin-bottom: 3px;
      letter-spacing: 0.2px;
    }
    .contact-row {
      font-size: 8.3pt;
      color: ${subText};
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 7px;
      align-items: center;
      margin-top: 2px;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      color: ${subText};
      text-decoration: none;
    }
    .contact-item a {
      color: ${accent};
      text-decoration: none;
      font-weight: 600;
    }
    .sep { color: ${subText}; opacity: 0.4; }
    section {
      margin-bottom: 4px;
    }
    h2 {
      font-size: 9.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: ${titleColor};
      border-bottom: 1.2px solid ${sectionBorder};
      padding-bottom: 1px;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      text-align: justify;
      color: ${text};
      font-size: 8.75pt;
      line-height: 1.25;
    }
    .skills-table {
      display: flex;
      flex-direction: column;
      gap: 1.8px;
      font-size: 8.5pt;
    }
    .skill-row {
      display: flex;
      gap: 6px;
      align-items: baseline;
    }
    .skill-label {
      width: 130px;
      flex-shrink: 0;
      font-weight: 700;
      color: ${titleColor};
      font-size: 8.6pt;
    }
    .skill-tags {
      flex: 1;
    }
    .skill-pill {
      display: inline-block;
      padding: 0.5px 4.5px;
      margin: 0.5px 1.5px;
      border-radius: 2px;
      font-size: 8pt;
      background: ${tagBg};
      border: 1px solid ${tagBorder};
      color: ${tagText};
      font-weight: 500;
      white-space: nowrap;
    }
    .exp-item {
      margin-bottom: 3.5px;
      break-inside: avoid;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9.1pt;
      margin-bottom: 1px;
    }
    .exp-company {
      font-weight: 800;
      color: ${titleColor};
      font-size: 9.3pt;
    }
    .exp-role {
      font-weight: 600;
      color: ${accent};
      font-size: 8.9pt;
    }
    .exp-date {
      font-size: 8.2pt;
      font-weight: 600;
      color: ${subText};
      white-space: nowrap;
    }
    ul {
      margin-left: 12px;
      margin-top: 1px;
      list-style-type: none;
    }
    li {
      margin-bottom: 1px;
      font-size: 8.65pt;
      color: ${text};
      line-height: 1.25;
      position: relative;
      padding-left: 9px;
    }
    li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${bulletColor};
      font-weight: bold;
    }
    li strong {
      color: ${titleColor};
    }
    .project-item {
      margin-bottom: 3px;
      break-inside: avoid;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9pt;
    }
    .project-title {
      font-weight: 800;
      color: ${titleColor};
      font-size: 9.2pt;
    }
    .project-link {
      color: ${accent};
      text-decoration: none;
      font-weight: 700;
      font-size: 8.1pt;
      margin-left: 4px;
    }
    .project-outcome {
      font-size: 8.2pt;
      font-weight: 600;
      color: ${accent};
    }
    .project-stack {
      font-size: 7.9pt;
      color: ${subText};
      margin-top: 0.5px;
    }
    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.6pt;
      margin-bottom: 1px;
    }
    .edu-title {
      font-weight: 700;
      color: ${titleColor};
    }
  `;
}

// ========================================================
// 1. STRICT 1-PAGE EXECUTIVE RESUME HTML GENERATOR
// ========================================================
function buildSinglePageHtml(isDark) {
  const ico = getIcons(isDark);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sonu Kumar - Professional Resume</title>
  <style>${getStyles(isDark)}</style>
</head>
<body>
  <header>
    <h1>Sonu Kumar</h1>
    <div class="headline">Full-Stack Developer • React.js | React Native | Next.js | Node.js | TypeScript</div>
    <div class="contact-row">
      <span class="contact-item">${ico.location} Delhi, India</span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.phone} <a href="tel:+919709834056">+91 9709834056</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.email} <a href="mailto:sonugupta6746@gmail.com">sonugupta6746@gmail.com</a></span>
    </div>
    <div class="contact-row" style="margin-top: 1.5px;">
      <span class="contact-item">${ico.linkedin} <a href="https://linkedin.com/in/sonu-kumar-3b7072237" target="_blank">linkedin.com/in/sonu-kumar-3b7072237</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.github} <a href="https://github.com/SonuBuilds" target="_blank">github.com/SonuBuilds</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.globe} <a href="https://sonubuilds.github.io/" target="_blank">sonubuilds.github.io</a></span>
    </div>
  </header>

  <section>
    <h2>Profile Summary</h2>
    <p>
      <strong>Full-Stack Developer</strong> with <strong>5+ years of experience</strong> engineering scalable, high-performance web and mobile applications using <strong>React.js</strong>, <strong>React Native</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> and <strong>TypeScript</strong>. Proven track record of delivering production-ready applications with modular component architecture, robust <strong>REST API integration</strong>, state management via <strong>Redux Toolkit</strong>, and real-time cloud services. Experienced in Supabase, Cloudflare R2, Firebase Auth, FCM, Google Maps integration, and end-to-end performance optimization.
    </p>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-table">
      <div class="skill-row">
        <span class="skill-label">Frontend & Mobile:</span>
        <div class="skill-tags">
          <span class="skill-pill">React.js</span>
          <span class="skill-pill">React Native</span>
          <span class="skill-pill">Next.js</span>
          <span class="skill-pill">Angular</span>
          <span class="skill-pill">Redux Toolkit</span>
          <span class="skill-pill">JavaScript (ES6+)</span>
          <span class="skill-pill">TypeScript</span>
          <span class="skill-pill">HTML5</span>
          <span class="skill-pill">CSS3</span>
          <span class="skill-pill">Tailwind CSS</span>
        </div>
      </div>
      <div class="skill-row">
        <span class="skill-label">Backend & APIs:</span>
        <div class="skill-tags">
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">Express.js</span>
          <span class="skill-pill">RESTful APIs</span>
          <span class="skill-pill">Microservices</span>
          <span class="skill-pill">Third-Party API Integration</span>
          <span class="skill-pill">JWT Auth</span>
        </div>
      </div>
      <div class="skill-row">
        <span class="skill-label">Databases & Cloud:</span>
        <div class="skill-tags">
          <span class="skill-pill">MongoDB</span>
          <span class="skill-pill">MySQL</span>
          <span class="skill-pill">Supabase</span>
          <span class="skill-pill">Firebase Auth</span>
          <span class="skill-pill">Cloudflare R2</span>
          <span class="skill-pill">Realtime Database</span>
          <span class="skill-pill">Cloud Messaging (FCM)</span>
          <span class="skill-pill">Google Maps API</span>
          <span class="skill-pill">Git/GitHub</span>
          <span class="skill-pill">Postman</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>Work Experience</h2>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">SPODS Technologies</span> • <span class="exp-role">Front-end Developer | React Native | React | Next</span>
        </div>
        <span class="exp-date">08/2025 — Present | Delhi, India</span>
      </div>
      <ul>
        <li>Developing and maintaining the <strong>Pick A Pro</strong> ecosystem across web, React Native mobile, admin dashboard, and Partner app.</li>
        <li>Implemented secure role-based access control (RBAC) and authorization workflows managing user, partner, and admin permissions.</li>
        <li>Built cross-platform architecture with React, Next.js, and React Native with modular components and Redux Toolkit (RTK).</li>
        <li>Integrated REST APIs, Google Maps geolocation services, and Firebase push notifications for live booking dispatch.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">NOYT INDIA</span> • <span class="exp-role">Software Developer</span>
        </div>
        <span class="exp-date">06/2025 — 08/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Managed independent project modules end-to-end from architectural design to deployment ahead of business milestones.</li>
        <li>Integrated complex third-party REST APIs to extend product capabilities, elevate functionality, and streamline data exchange.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">3FITECH COMMUNICATIONS PVT LTD</span> • <span class="exp-role">Software Developer</span>
        </div>
        <span class="exp-date">02/2025 — 06/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Collaborated with cross-functional engineering teams to engineer scalable, maintainable code ensuring high software reliability.</li>
        <li>Applied clean coding standards, structured debugging, and comprehensive code reviews to maintain production stability.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">EDUMITRAM PVT LTD</span> • <span class="exp-role">Frontend Developer | React</span>
        </div>
        <span class="exp-date">11/2023 — 01/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Developed user-friendly web interfaces for enterprise clients including Educomp Solutions Limited, EbixCash, and Hem Aunty Publications.</li>
        <li>Elevated user satisfaction and retention by delivering accessible, responsive UI/UX designs and low-latency API integrations.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">SLOG Solutions Pvt. Ltd</span> • <span class="exp-role">Frontend Developer | React</span>
        </div>
        <span class="exp-date">04/2021 — 10/2023 | Delhi, India</span>
      </div>
      <ul>
        <li>Reduced defects by 20% through systematic debugging in Angular/React apps; conducted performance audits and structured testing.</li>
        <li>Mentored students and junior developers in Python programming fundamentals, modern JavaScript, and web development best practices.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Key Projects</h2>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">Pick A Pro</span>
          <a class="project-link" href="https://pickapro.co.nz/" target="_blank">[Live Site ↗]</a>
          <span>– On-Demand Marketplace Ecosystem</span>
        </div>
        <span class="project-outcome">4 apps • 99.8% crash-free</span>
      </div>
      <p style="font-size: 7.7pt;">Multi-platform marketplace spanning customer web, mobile apps, partner app, and operations dashboard with Firebase RBAC, Google Maps geolocation, and Redux Toolkit.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Next.js, React Native, Redux Toolkit, Node.js, Express, Firebase, Google Maps API</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">PropertyWorks</span>
          <a class="project-link" href="https://propertyworks.in/" target="_blank">[Live Site ↗]</a>
          <span>– Real Estate Intelligence & Advisory Platform</span>
        </div>
        <span class="project-outcome">Full-Stack Advisory • OTP Admin</span>
      </div>
      <p style="font-size: 7.7pt;">Full-stack property advisory platform with dedicated Admin Panel for managing listings, leads, OTP workflows, blogs, and SEO optimization using Next.js & REST APIs.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, Node.js, REST APIs, Lead Management, SEO</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">Grasberg International</span>
          <a class="project-link" href="https://grasberginternational.com/" target="_blank">[Live Site ↗]</a>
          <span>– Forex Platform & Role-Based CRM</span>
        </div>
        <span class="project-outcome">Multi-Role CRM • MT5 Trading</span>
      </div>
      <p style="font-size: 7.7pt;">Enterprise forex platform combining brand portal with multi-tenant role-based CRM for User, Partner, and Admin roles integrating MetaTrader 5 (MT5) APIs.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React.js, TypeScript, Tailwind CSS, REST APIs, MetaTrader 5 (MT5), Role-Based CRM</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">Memory Caravan</span>
          <a class="project-link" href="https://memory-caravan.onrender.com/" target="_blank">[Live Site ↗]</a>
          <span>– QR-Based Digital Media & Keepsake Platform</span>
        </div>
        <span class="project-outcome">End-to-End • Secure R2 Streaming</span>
      </div>
      <p style="font-size: 7.7pt;">QR-based media platform with private video streaming architecture via Cloudflare R2, short-lived tokens, HTTP Range delivery, and Supabase using Next.js & TypeScript.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, Supabase, Cloudflare R2, Video Streaming, QR Routing</div>
    </div>
  </section>

  <section>
    <h2>Education & Key Achievements</h2>
    <div class="edu-item">
      <div>
        <span class="edu-title">Government Engineering College Ajmer</span> • <strong>B.Tech in Information Technology</strong>
      </div>
      <span class="exp-date">2016 — 2020 | Ajmer, Rajasthan</span>
    </div>
    <div style="font-size: 7.8pt; color: #64748b; margin-top: 1px;">
      T P Verma College Narkatiyaganj (Intermediate, 2015) • High School Harinagar (Matric, 2012)
    </div>
    <ul style="margin-top: 1.5px;">
      <li>Optimized web application load times by 30% through code splitting, lazy loading, and asset tuning.</li>
      <li>Reduced defects by 20% in frontend apps; 1st Prize in Chess at GEC Ajmer (2018 & 2019); Organized COMBAT tech events.</li>
    </ul>
  </section>
</body>
</html>`;
}

// ========================================================
// 2. COMPREHENSIVE 2-PAGE DETAILED CV HTML GENERATOR
// ========================================================
function buildDetailedHtml(isDark) {
  const ico = getIcons(isDark);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sonu Kumar - Detailed Curriculum Vitae</title>
  <style>
    ${getStyles(isDark)}
    @page {
      size: letter portrait;
      margin: 9mm 11mm 8mm 11mm;
    }
    body {
      font-size: 8.6pt;
      line-height: 1.34;
    }
    .page-break {
      page-break-before: always;
      break-before: page;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Sonu Kumar</h1>
    <div class="headline">Full-Stack Developer • React.js | React Native | Next.js | Node.js | TypeScript</div>
    <div class="contact-row">
      <span class="contact-item">${ico.location} Delhi, India</span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.phone} <a href="tel:+919709834056">+91 9709834056</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.email} <a href="mailto:sonugupta6746@gmail.com">sonugupta6746@gmail.com</a></span>
    </div>
    <div class="contact-row" style="margin-top: 1.5px;">
      <span class="contact-item">${ico.linkedin} <a href="https://linkedin.com/in/sonu-kumar-3b7072237" target="_blank">linkedin.com/in/sonu-kumar-3b7072237</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.github} <a href="https://github.com/SonuBuilds" target="_blank">github.com/SonuBuilds</a></span>
      <span class="sep">•</span>
      <span class="contact-item">${ico.globe} <a href="https://sonubuilds.github.io/" target="_blank">sonubuilds.github.io</a></span>
    </div>
  </header>

  <section>
    <h2>Profile Summary</h2>
    <p>
      <strong>Full-Stack Developer</strong> with <strong>5+ years of professional experience</strong> architecting and shipping scalable, high-performance web, mobile, and cloud-native applications using <strong>React.js</strong>, <strong>React Native</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> and <strong>TypeScript</strong>. Strong expertise in cross-platform modular component systems, RESTful API design, state management (Redux Toolkit), and real-time cloud services. Proven track record of optimizing application performance, delivering 99.8% crash-free mobile sessions, and leading features across multi-tier software ecosystems.
    </p>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-table">
      <div class="skill-row">
        <span class="skill-label">Frontend & Mobile:</span>
        <div class="skill-tags">
          <span class="skill-pill">React.js</span>
          <span class="skill-pill">React Native</span>
          <span class="skill-pill">Next.js</span>
          <span class="skill-pill">Angular</span>
          <span class="skill-pill">Redux Toolkit</span>
          <span class="skill-pill">JavaScript (ES6+)</span>
          <span class="skill-pill">TypeScript</span>
          <span class="skill-pill">HTML5 / CSS3</span>
          <span class="skill-pill">Tailwind CSS</span>
          <span class="skill-pill">Bootstrap</span>
        </div>
      </div>
      <div class="skill-row">
        <span class="skill-label">Backend & APIs:</span>
        <div class="skill-tags">
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">Express.js</span>
          <span class="skill-pill">RESTful APIs</span>
          <span class="skill-pill">API Architecture</span>
          <span class="skill-pill">Third-Party Integrations</span>
          <span class="skill-pill">JWT & Role-Based Auth</span>
        </div>
      </div>
      <div class="skill-row">
        <span class="skill-label">Databases & Cloud:</span>
        <div class="skill-tags">
          <span class="skill-pill">MongoDB</span>
          <span class="skill-pill">MySQL</span>
          <span class="skill-pill">Supabase</span>
          <span class="skill-pill">Firebase Auth</span>
          <span class="skill-pill">Firebase Realtime DB</span>
          <span class="skill-pill">Cloudflare R2</span>
          <span class="skill-pill">Firebase Cloud Messaging (FCM)</span>
          <span class="skill-pill">Google Maps API</span>
          <span class="skill-pill">Git / GitHub</span>
          <span class="skill-pill">Postman / Swagger</span>
        </div>
      </div>
      <div class="skill-row">
        <span class="skill-label">Engineering Practices:</span>
        <div class="skill-tags">
          <span class="skill-pill">Responsive Web Design</span>
          <span class="skill-pill">Performance Optimization</span>
          <span class="skill-pill">State Management</span>
          <span class="skill-pill">Agile / Scrum Methodologies</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>Work Experience</h2>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">SPODS Technologies</span> • <span class="exp-role">Front-end Developer | React Native | React | Next</span>
        </div>
        <span class="exp-date">08/2025 — Present | Delhi, India</span>
      </div>
      <ul>
        <li>Developing and maintaining the complete <strong>Pick A Pro</strong> marketplace ecosystem including customer web platform, mobile applications, admin operations dashboard, and Partner app.</li>
        <li>Implemented secure role-based access control (RBAC) and authorization workflows managing permissions for customers, service partners, and administrators.</li>
        <li>Architected cross-platform applications with React, Next.js, and React Native utilizing modular reusable component libraries.</li>
        <li>Integrated Redux Toolkit (RTK) for centralized state management, ensuring synchronized data flow across mobile and web platforms.</li>
        <li>Integrated REST APIs, Google Maps Geolocation services for dynamic provider dispatch, and Firebase Cloud Messaging (FCM) for real-time booking push alerts.</li>
        <li>Optimized front-end rendering performance, responsiveness, and code quality across diverse mobile viewports and browsers.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">NOYT INDIA</span> • <span class="exp-role">Software Developer</span>
        </div>
        <span class="exp-date">06/2025 — 08/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Managed independent project modules from architectural design to deployment, ensuring delivery ahead of business milestones.</li>
        <li>Integrated complex third-party REST APIs to extend product capabilities, improve responsiveness, and streamline data exchange.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">3FITECH COMMUNICATIONS PVT LTD</span> • <span class="exp-role">Software Developer</span>
        </div>
        <span class="exp-date">02/2025 — 06/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Collaborated closely with cross-functional engineering and design teams to build scalable, maintainable production features.</li>
        <li>Applied clean coding standards, code reviews, and structured debugging to ensure high software reliability and fault tolerance.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">EDUMITRAM PVT LTD</span> • <span class="exp-role">Frontend Developer | React</span>
        </div>
        <span class="exp-date">11/2023 — 01/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Developed high-quality, user-friendly web interfaces for key enterprise clients including Educomp Solutions Limited, EbixCash Pvt Ltd, and Hem Aunty Publications.</li>
        <li>Elevated user satisfaction and retention by delivering accessible, responsive UI/UX designs and low-latency API integrations.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-company">SLOG Solutions Pvt. Ltd</span> • <span class="exp-role">Frontend Developer | React</span>
        </div>
        <span class="exp-date">04/2021 — 10/2023 | Delhi, India</span>
      </div>
      <ul>
        <li>Reduced software defects by 20% through rigorous debugging, performance audits, and structured testing in Angular and React applications.</li>
        <li>Mentored students and junior developers in Python programming fundamentals, modern JavaScript, and web development best practices.</li>
      </ul>
    </div>
  </section>

  <!-- PAGE BREAK FOR CLEAN 2-PAGE LAYOUT -->
  

  <section>
    <h2>Key Projects (All Production & Live Deployments)</h2>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">01. Pick A Pro</span>
          <a class="project-link" href="https://pickapro.co.nz/" target="_blank">[Live Site ↗]</a>
          <span>– On-Demand Marketplace Ecosystem</span>
        </div>
        <span class="project-outcome">4 apps • 99.8% crash-free</span>
      </div>
      <ul>
        <li>Engineered cross-platform mobile apps and web frontend using React.js, Next.js, and React Native with shared modular component libraries.</li>
        <li>Implemented secure multi-tier role-based authentication (RBAC) via Firebase Auth for Customers, Service Providers, and Operations Admins.</li>
        <li>Integrated Google Maps Geolocation & Places API for automated proximity dispatch, live provider tracking, and dynamic pricing.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Next.js, React Native, Redux Toolkit, Node.js, Express.js, Firebase Auth & FCM, Google Maps API</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">02. PropertyWorks</span>
          <a class="project-link" href="https://propertyworks.in/" target="_blank">[Live Site ↗]</a>
          <span>– Real Estate Intelligence & Advisory Platform</span>
        </div>
        <span class="project-outcome">Full-Stack Advisory • OTP Admin</span>
      </div>
      <ul>
        <li>Developed full-stack real estate advisory platform and dedicated Admin Panel for managing property projects, listings, leads, and blogs.</li>
        <li>Built responsive frontend architecture with Next.js, React, TypeScript, and Tailwind CSS; engineered OTP-based admin actions and lead capture pipelines.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, Lead Management, SEO</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">03. Memory Caravan</span>
          <a class="project-link" href="https://memory-caravan.onrender.com/" target="_blank">[Live Site ↗]</a>
          <span>– QR-Based Digital Media & Keepsake Platform</span>
        </div>
        <span class="project-outcome">End-to-End • Secure R2 Streaming</span>
      </div>
      <ul>
        <li>Architected QR-based digital media platform enabling secure access to personalized keepsake photos and video memories via unique QR routing.</li>
        <li>Designed private video streaming pipeline with Cloudflare R2, short-lived tokens, HTTP Range streaming, and Supabase PostgreSQL.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, Supabase, Cloudflare R2, Video Streaming, QR Routing</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">04. Grasberg International</span>
          <a class="project-link" href="https://grasberginternational.com/" target="_blank">[Live Site ↗]</a>
          <span>– Forex Platform & Role-Based CRM</span>
        </div>
        <span class="project-outcome">Multi-Role CRM • MT5 Trading</span>
      </div>
      <ul>
        <li>Built frontend for a global forex platform combining an informational website with a multi-tenant role-based CRM using Next.js.</li>
        <li>Delivered dedicated portal modules for User, Partner, Super Admin, and Sub Admin roles; integrated MetaTrader 5 (MT5) APIs.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React.js, TypeScript, Tailwind CSS, REST APIs, MetaTrader 5 (MT5), Role-Based CRM</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">05. UPBScan</span>
          <a class="project-link" href="https://upbscan.com/" target="_blank">[Live Site ↗]</a>
          <span>– Blockchain Network Explorer</span>
        </div>
        <span class="project-outcome">Real-time visibility • &lt;80ms search</span>
      </div>
      <ul>
        <li>Integrated high-frequency REST APIs and WebSocket data streams for sub-second block ingestion and real-time transaction updates.</li>
        <li>Engineered deep multi-token tracking for native UPB, USDT (Tether), and UPBP assets with table virtualization across 100k+ rows.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Web3 Integration, RESTful APIs, Chart.js, Tailwind CSS, WebSocket Feeds, TypeScript</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">06. Hem Aunty Publications</span>
          <a class="project-link" href="https://hemaunty.org/" target="_blank">[Live Site ↗]</a>
          <span>– E-Commerce Publishing Platform</span>
        </div>
        <span class="project-outcome">+28% order conversion • 1.1s load</span>
      </div>
      <ul>
        <li>Engineered dynamic catalog with multi-facet search, subject filtering, author collections, and real-time stock inventory synchronization.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Firebase Auth, REST APIs, Redux Toolkit, Tailwind CSS, Payment Gateway</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">07. SOCIETY — RADHEADDA</span>
          <a class="project-link" href="https://www.radhiadda.com/login" target="_blank">[Live Site ↗]</a>
          <span>– Community & Matrimonial Platform</span>
        </div>
        <span class="project-outcome">15,000+ members • 99.9% uptime</span>
      </div>
      <ul>
        <li>Developed multi-criteria matchmaking algorithm, real-time messaging, and JWT authentication using Angular and ASP.NET Core.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> Angular, ASP.NET Core, C#, MySQL, REST APIs, JWT Auth, Bootstrap</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">08. SmartClass — Educomp</span>
          <span>– Enterprise Educational Software</span>
        </div>
        <span class="project-outcome">10,000+ schools • 2M+ daily students</span>
      </div>
      <ul>
        <li>Modernized JavaFX classroom software across 10,000+ schools; implemented NEP-2020 competency evaluation engine and offline sync.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> JavaFX, Java, Desktop Architecture, NEP-2020 Framework, Offline Sync, Multimedia Engine</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">09. Nutrinest Ventures</span>
          <a class="project-link" href="https://www.nutrinestventures.com/" target="_blank">[Live Site ↗]</a>
          <span>– D2C Brand Commerce Platform</span>
        </div>
        <span class="project-outcome">98/100 PageSpeed • +40% engagement</span>
      </div>
      <ul>
        <li>Crafted luxury dark-mode visual interface with fluid micro-interactions, achieving a 98/100 Google PageSpeed score.</li>
      </ul>
      <div class="project-stack"><strong>Tech Stack:</strong> Next.js, React, TypeScript, Tailwind CSS, Web Performance, SEO & Schema</div>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="edu-item">
      <div>
        <span class="edu-title">Government Engineering College Ajmer</span> • <strong>B.Tech in Information Technology</strong>
      </div>
      <span class="exp-date">2016 — 2020 | Ajmer, Rajasthan</span>
    </div>
    <div class="edu-item">
      <div>
        <span class="edu-title">T P Verma College Narkatiyaganj</span> • <strong>Intermediate</strong>
      </div>
      <span class="exp-date">2013 — 2015 | Bihar, India</span>
    </div>
    <div class="edu-item">
      <div>
        <span class="edu-title">High School Harinagar</span> • <strong>Matric</strong>
      </div>
      <span class="exp-date">2012 | Bihar, India</span>
    </div>
  </section>

  <section>
    <h2>Key Achievements</h2>
    <ul>
      <li>Optimized web application load times by 30% through code splitting, lazy loading, and performance tuning.</li>
      <li>Reduced defects by 20% in frontend applications via debugging and best practices.</li>
      <li>1st Prize in Chess at GEC Ajmer (2018 & 2019).</li>
      <li>Organized COMBAT-2K18/19 tech events.</li>
    </ul>
  </section>
</body>
</html>`;
}

function compilePdf(htmlContent, outputFileName) {
  const tempHtmlPath = path.join(scratchDir, `temp_${outputFileName.replace('.pdf', '')}.html`);
  const outputPdfPath = path.join(publicDir, outputFileName);

  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

  if (fs.existsSync(chromeBinary)) {
    try {
      const cmd = `"${chromeBinary}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfPath}" "file://${tempHtmlPath}"`;
      console.log(`Compiling: ${outputFileName}...`);
      execSync(cmd, { stdio: 'pipe' });
      const stats = fs.statSync(outputPdfPath);
      console.log(`SUCCESS: ${outputFileName} (${stats.size} bytes)`);
    } catch (err) {
      console.error(`Failed to compile ${outputFileName}:`, err);
    }
  } else {
    console.error('Chrome binary missing:', chromeBinary);
  }
}

console.log('=== Compiling High-Fidelity Executive PDFs ===');

// 1. Strict 1-Page Classic White Resume (Professional Default Resume)
compilePdf(buildSinglePageHtml(false), 'Sonu_Kumar_Resume.pdf');
fs.copyFileSync(path.join(publicDir, 'Sonu_Kumar_Resume.pdf'), path.join(publicDir, 'Sonu_Kumar_Resume_1Page.pdf'));

// 2. Comprehensive 2-Page Detailed Classic White CV
compilePdf(buildDetailedHtml(false), 'Sonu_Kumar_Detailed_CV.pdf');

// 3. Strict 1-Page Dark Modern Executive Resume
compilePdf(buildSinglePageHtml(true), 'Sonu_Kumar_Resume_Dark.pdf');
fs.copyFileSync(path.join(publicDir, 'Sonu_Kumar_Resume_Dark.pdf'), path.join(publicDir, 'Sonu_Kumar_Resume_1Page_Dark.pdf'));

// 4. Comprehensive 2-Page Detailed Dark Modern CV
compilePdf(buildDetailedHtml(true), 'Sonu_Kumar_Detailed_CV_Dark.pdf');

console.log('=== All PDFs Successfully Compiled! ===');
