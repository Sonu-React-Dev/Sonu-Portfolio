const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');
const scratchDir = path.join(__dirname, '..', 'scratch');
const chromeBinary = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

// ==========================================
// 1. GENERATE STRICT 1-PAGE RESUME HTML & PDF
// ==========================================
const singlePageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sonu Kumar - 1-Page ATS Resume</title>
  <style>
    @page {
      size: letter portrait;
      margin: 8mm 11mm 6mm 11mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      font-size: 8.3pt;
      line-height: 1.28;
    }
    header {
      text-align: center;
      margin-bottom: 7px;
      padding-bottom: 5px;
      border-bottom: 1.5px solid #111827;
    }
    h1 {
      font-size: 18pt;
      font-weight: 900;
      letter-spacing: -0.4px;
      text-transform: uppercase;
      color: #000000;
      line-height: 1;
      margin-bottom: 2px;
    }
    .headline {
      font-size: 8.8pt;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 3px;
    }
    .contact-row {
      font-size: 8pt;
      color: #4b5563;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }
    .contact-row a {
      color: #1d4ed8;
      text-decoration: none;
      font-weight: 600;
    }
    .sep { color: #9ca3af; }
    section {
      margin-bottom: 6px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    h2 {
      font-size: 8.7pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #000000;
      border-bottom: 1px solid #1f2937;
      padding-bottom: 1px;
      margin-bottom: 3px;
    }
    p {
      text-align: justify;
    }
    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 1.8px;
      font-size: 8.1pt;
    }
    .skill-line strong {
      color: #000000;
    }
    .exp-item {
      margin-bottom: 4.5px;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.3pt;
    }
    .exp-title {
      font-weight: 700;
      color: #000000;
    }
    .exp-company {
      font-weight: 600;
      color: #374151;
    }
    .exp-date {
      font-size: 7.8pt;
      font-weight: 600;
      color: #4b5563;
      white-space: nowrap;
    }
    ul {
      margin-left: 13px;
      margin-top: 1px;
    }
    li {
      margin-bottom: 1px;
      font-size: 8pt;
      color: #1f2937;
      line-height: 1.24;
    }
    .project-item {
      margin-bottom: 3.5px;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.2pt;
    }
    .project-title {
      font-weight: 700;
      color: #000000;
    }
    .project-outcome {
      font-size: 7.8pt;
      font-weight: 600;
      color: #047857;
    }
    .project-stack {
      font-size: 7.8pt;
      color: #4b5563;
    }
    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8pt;
    }
  </style>
</head>
<body>

  <header>
    <h1>SONU KUMAR</h1>
    <div class="headline">Full-Stack Developer • React.js | React Native | Next.js | Node.js Specialist</div>
    <div class="contact-row">
      <span>Delhi, India</span>
      <span class="sep">•</span>
      <span>+91 9709834056</span>
      <span class="sep">•</span>
      <a href="mailto:sonugupta6746@gmail.com">sonugupta6746@gmail.com</a>
      <span class="sep">•</span>
      <a href="https://linkedin.com/in/sonu-kumar-3b7072237">linkedin.com/in/sonu-kumar-3b7072237</a>
      <span class="sep">•</span>
      <a href="https://github.com/Sonu-React-Dev">github.com/Sonu-React-Dev</a>
    </div>
  </header>

  <section>
    <h2>Profile Summary</h2>
    <p style="font-size: 8pt;">
      Full-Stack Developer with 4+ years of experience engineering scalable, high-performance web and mobile applications using React.js, React Native, Next.js, and Node.js. Strong expertise in modern JavaScript ecosystems, REST API integration, state management (Redux Toolkit), and performance optimization. Proven track record delivering production-ready multi-surface platforms with clean modular architecture, Firebase services, and Google Maps API.
    </p>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-line"><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS</div>
      <div class="skill-line"><strong>Frontend:</strong> React.js, React Native (iOS/Android), Next.js, Angular, Redux Toolkit (RTK)</div>
      <div class="skill-line"><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, Third-party API Integration</div>
      <div class="skill-line"><strong>Databases & Cloud:</strong> MongoDB, MySQL, Firebase (Authentication, Realtime Database, Cloud Messaging)</div>
      <div class="skill-line"><strong>Tools & Concepts:</strong> Google Maps API, Git/GitHub, Postman, Swagger, Responsive Design, Role-Based Access Control, Agile</div>
    </div>
  </section>

  <section>
    <h2>Work Experience</h2>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Front-end Developer | React Native | React | Next</span> — <span class="exp-company">SPODS Technologies</span>
        </div>
        <span class="exp-date">08/2025 — Present | Delhi, India</span>
      </div>
      <ul>
        <li>Developing and maintaining the Pick A Pro marketplace ecosystem (web platform, mobile app, admin dashboard, and Partner app).</li>
        <li>Implemented secure role-based access control (RBAC) and authorization to manage user, partner, and admin modules.</li>
        <li>Building cross-platform apps using React, Next.js, and React Native with modular components and Redux Toolkit for unified state.</li>
        <li>Integrating REST APIs, Google Maps geolocation services, and Firebase push notifications for live tracking and booking.</li>
        <li>Optimized responsiveness, code quality, and performance for scalable multi-device production apps.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Software Developer</span> — <span class="exp-company">NOYT INDIA</span>
        </div>
        <span class="exp-date">06/2025 — 08/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Managed independent project modules from concept to delivery; integrated third-party APIs to boost application capabilities.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Software Developer</span> — <span class="exp-company">3FITECH COMMUNICATIONS PVT LTD</span>
        </div>
        <span class="exp-date">02/2025 — 06/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Collaborated with cross-functional teams to translate business requirements into scalable, fault-tolerant production code.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Frontend Developer | React</span> — <span class="exp-company">EDUMITRAM PVT LTD</span>
        </div>
        <span class="exp-date">11/2023 — 01/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Constructed user-friendly web interfaces for Educomp Solutions Limited, EbixCash Pvt Ltd, and Hem Aunty Publications.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Frontend Developer | React</span> — <span class="exp-company">SLOG Solutions Pvt. Ltd</span>
        </div>
        <span class="exp-date">04/2021 — 10/2023 | Delhi, India</span>
      </div>
      <ul>
        <li>Reduced defects by 20% through systematic debugging in Angular/React apps; trained students in Python and web development.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Key Selected Projects</h2>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">Pick A Pro (Service Marketplace Ecosystem)</span>
        <span class="project-outcome">Multi-Surface Ecosystem</span>
      </div>
      <p style="font-size: 7.8pt;">Comprehensive marketplace spanning customer web, React Native mobile, admin dashboard, and partner app with Firebase Auth, Google Maps, RTK, and live push notifications.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Next.js, React Native, Redux Toolkit, Node.js, Express, Firebase, Google Maps API</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">UPBScan (Blockchain Explorer)</span>
        <span class="project-outcome">Real-Time Visibility</span>
      </div>
      <p style="font-size: 7.8pt;">Real-time explorer for UPB blockchain network tracking transactions, wallets, tokens (UPB, USDT, UPBP), and smart contracts.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React, REST APIs, Web3 Charts, Blockchain</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">Hem Aunty Publications (E-commerce Platform)</span>
        <span class="project-outcome">Complete Storefront</span>
      </div>
      <p style="font-size: 7.8pt;">React-based bookstore platform with product discovery, cart, Firebase authentication, and REST API order processing.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React, Firebase Auth, REST APIs, Tailwind CSS</div>
    </div>
  </section>

  <section>
    <h2>Education & Key Achievements</h2>
    <div class="edu-item">
      <div>
        <strong>B.Tech in Information Technology</strong> — Govt. Engineering College Ajmer
      </div>
      <span class="exp-date">2020</span>
    </div>
    <div style="font-size: 7.8pt; color: #4b5563; margin-top: 1px;">
      Intermediate (T P Verma College, 2015) • Matric (High School Harinagar, 2012)
    </div>
    <ul style="margin-top: 2px;">
      <li>Optimized web application load times by 30% through code splitting and lazy loading.</li>
      <li>Reduced frontend defects by 20% via structured testing; 1st Prize in Chess at GEC Ajmer (2018 & 2019); Organized COMBAT tech events.</li>
    </ul>
  </section>

</body>
</html>`;

// ==========================================
// 2. GENERATE DETAILED 2-PAGE RESUME HTML & PDF
// ==========================================
const detailedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sonu Kumar - Full-Stack Developer ATS Resume</title>
  <style>
    @page {
      size: letter portrait;
      margin: 9mm 12mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      font-size: 9pt;
      line-height: 1.35;
      padding: 0;
    }
    header {
      text-align: center;
      margin-bottom: 10px;
      padding-bottom: 7px;
      border-bottom: 1.5px solid #111827;
    }
    h1 {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 2px;
    }
    .headline {
      font-size: 10pt;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 4px;
    }
    .contact-row {
      font-size: 8.5pt;
      color: #4b5563;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }
    .contact-row a {
      color: #1d4ed8;
      text-decoration: none;
      font-weight: 500;
    }
    .sep { color: #9ca3af; }
    section {
      margin-bottom: 9px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    h2 {
      font-size: 9.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #000000;
      border-bottom: 1px solid #1f2937;
      padding-bottom: 2px;
      margin-bottom: 4px;
    }
    p {
      margin-bottom: 3px;
      text-align: justify;
    }
    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 2.5px;
      font-size: 8.8pt;
    }
    .skill-line strong {
      color: #000000;
    }
    .exp-item {
      margin-bottom: 7px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9pt;
    }
    .exp-title {
      font-weight: 700;
      color: #000000;
    }
    .exp-company {
      font-weight: 600;
      color: #374151;
    }
    .exp-date {
      font-size: 8.5pt;
      font-weight: 600;
      color: #4b5563;
      white-space: nowrap;
    }
    ul {
      margin-left: 15px;
      margin-top: 1px;
      margin-bottom: 3px;
    }
    li {
      margin-bottom: 1.5px;
      font-size: 8.8pt;
      color: #1f2937;
    }
    .project-item {
      margin-bottom: 6px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9pt;
    }
    .project-title {
      font-weight: 700;
      color: #000000;
    }
    .project-outcome {
      font-size: 8.5pt;
      font-weight: 600;
      color: #047857;
    }
    .project-stack {
      font-size: 8.5pt;
      color: #4b5563;
    }
    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.8pt;
      margin-bottom: 2px;
    }
  </style>
</head>
<body>

  <header>
    <h1>SONU KUMAR</h1>
    <div class="headline">Full-Stack Developer • React.js | React Native | Next.js | Node.js Specialist</div>
    <div class="contact-row">
      <span>Delhi, India</span>
      <span class="sep">•</span>
      <span>+91 9709834056</span>
      <span class="sep">•</span>
      <a href="mailto:sonugupta6746@gmail.com">sonugupta6746@gmail.com</a>
      <span class="sep">•</span>
      <a href="https://linkedin.com/in/sonu-kumar-3b7072237">linkedin.com/in/sonu-kumar-3b7072237</a>
      <span class="sep">•</span>
      <a href="https://github.com/Sonu-React-Dev">github.com/Sonu-React-Dev</a>
    </div>
  </header>

  <section>
    <h2>Profile</h2>
    <p>
      Full-Stack Developer with 4+ years of experience building scalable, high-performance web and mobile applications using React.js, React Native, Next.js and Node.js. Strong expertise in modern JavaScript ecosystems, REST API integration, state management, and performance optimization. Proven track record of delivering production-ready applications with clean, maintainable, and modular architecture. Experienced in Firebase services and Google Maps integration.
    </p>
  </section>

  <section>
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-line"><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS</div>
      <div class="skill-line"><strong>Frontend:</strong> React.js, React Native, Next.js, Angular, Redux Toolkit</div>
      <div class="skill-line"><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, Third-party API Integration</div>
      <div class="skill-line"><strong>Databases:</strong> MongoDB, MySQL</div>
      <div class="skill-line"><strong>Other:</strong> Firebase (Authentication, Realtime Database, Cloud Messaging), Google Maps API, Git/GitHub, VS Code, Postman, Swagger</div>
      <div class="skill-line"><strong>Tools & Concepts:</strong> Responsive Design, Performance Optimization, Role-Based Authentication, State Management, Agile Methodologies</div>
    </div>
  </section>

  <section>
    <h2>Work Experience</h2>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Front-end Developer | React Native | React | Next</span> — <span class="exp-company">SPODS Technologies</span>
        </div>
        <span class="exp-date">08/2025 — Present | Delhi, India</span>
      </div>
      <ul>
        <li>Developing and maintaining the Pick A Pro ecosystem including web platform, mobile application, admin dashboard, and Pick A Pro Partner app.</li>
        <li>Implemented role-based login and authorization to manage access for users, partners, and admin modules securely.</li>
        <li>Building cross-platform applications using React JS, Next.js, and React Native with reusable and modular component architecture.</li>
        <li>Using Redux Toolkit (RTK) for centralized state management and seamless data flow across web and mobile.</li>
        <li>Integrating REST APIs and third-party services to deliver real-time functionality and enhanced user experience.</li>
        <li>Developing dynamic dashboards with role-specific features, analytics, and business workflows.</li>
        <li>Optimizing performance, responsiveness, and code quality for scalable multi-device applications.</li>
        <li>Collaborating with backend and product teams to deliver user-centric and maintainable solutions.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Software Developer</span> — <span class="exp-company">NOYT INDIA</span>
        </div>
        <span class="exp-date">06/2025 — 08/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Managed independent project modules, overseeing the full development cycle from initial concept to final delivery.</li>
        <li>Enhanced application functionality and user experience by integrating third-party APIs.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Software Developer</span> — <span class="exp-company">3FITECH COMMUNICATIONS PVT LTD</span>
        </div>
        <span class="exp-date">02/2025 — 06/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Collaborated with cross-functional teams to define project requirements and deliver solutions that met business needs.</li>
        <li>Developed scalable and maintainable code, ensuring long-term stability of the software.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Frontend Developer | React | User-Friendly Applications</span> — <span class="exp-company">EDUMITRAM PVT LTD</span>
        </div>
        <span class="exp-date">11/2023 — 01/2025 | Delhi, India</span>
      </div>
      <ul>
        <li>Developed user-friendly web interfaces for clients including Educomp Solutions Limited, EbixCash Pvt Ltd, and Hem Aunty Publications.</li>
        <li>Improved user satisfaction through intuitive UI/UX design and efficient API integrations.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-title">Frontend Developer | React | User-Friendly Applications</span> — <span class="exp-company">SLOG Solutions Pvt. Ltd</span>
        </div>
        <span class="exp-date">04/2021 — 10/2023 | Delhi, India</span>
      </div>
      <ul>
        <li>Reduced defects by 20% through systematic debugging in Angular/React apps.</li>
        <li>Trained students in Python and web development.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Projects</h2>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">Pick A Pro (Service Marketplace Ecosystem)</span>
        <span class="project-outcome">Multi-Surface Product Ecosystem</span>
      </div>
      <p>Built comprehensive platform (web, React Native mobile, admin dashboard, partner app) using React.js, Next.js, React Native, Redux Toolkit, Node.js/Express backend integration. Implemented Firebase Authentication for secure role-based access and Google Maps API for location services. Added real-time updates, push notifications (Firebase), form validations, lazy loading, and analytics dashboards.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React.js, Next.js, React Native, Redux Toolkit, Node.js, Express, Firebase, Google Maps API</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">UPBScan (Blockchain Explorer)</span>
        <span class="project-outcome">Real-Time Network Visibility</span>
      </div>
      <p>Developed real-time blockchain explorer for UPB network to track transactions, wallets, tokens (UPB, USDT, UPBP), smart contracts, and validators.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React, REST APIs, Web3 Charts, Blockchain</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">Hem Aunty Publications (E-commerce Platform)</span>
        <span class="project-outcome">Complete Digital Storefront</span>
      </div>
      <p>Created React-based bookstore platform with product listings, shopping cart, secure authentication (Firebase), and order processing via REST APIs.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> React, Firebase Auth & Firestore, REST APIs, Tailwind CSS</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">SOCIETY - RADHEADDA (Matrimony Platform)</span>
        <span class="project-outcome">End-to-End Social Platform</span>
      </div>
      <p>Built feature-rich web app with chat, consultations, profiles, events, gallery, and news using Angular frontend, ASP.NET Core API, and MySQL.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> Angular, ASP.NET Core, MySQL</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">SmartClass - Educomp</span>
        <span class="project-outcome">10,000+ Schools Network</span>
      </div>
      <p>Revamped and expanded features within an established JavaFX educational software solution used by 10,000+ schools, featuring a grade system aligned with NEP-2020 guidelines.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> JavaFX, Educational Software, NEP-2020</div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span class="project-title">Nutrinest Ventures</span>
        <span class="project-outcome">Optimized Global Experience</span>
      </div>
      <p>Developed and maintained premium brand website delivering an optimized and globally accessible user experience.</p>
      <div class="project-stack"><strong>Tech Stack:</strong> Web Development, Performance, Responsive UI</div>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="edu-item">
      <div>
        <strong>B.Tech in Information Technology</strong> — Government Engineering College Ajmer, Rajasthan
      </div>
      <span class="exp-date">2020</span>
    </div>
    <div class="edu-item">
      <div>
        <strong>Intermediate</strong> — T P Verma College Narkatiyaganj
      </div>
      <span class="exp-date">2015</span>
    </div>
    <div class="edu-item">
      <div>
        <strong>Matric</strong> — High School Harinagar
      </div>
      <span class="exp-date">2012</span>
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

function generatePdfFromUrl(url, outputPdfName) {
  const outputPdfPath = path.join(publicDir, outputPdfName);

  if (fs.existsSync(chromeBinary)) {
    try {
      const cmd = `"${chromeBinary}" --headless --disable-gpu --virtual-time-budget=2000 --run-all-compositor-stages-before-draw --print-to-pdf="${outputPdfPath}" "${url}"`;
      console.log('Generating from URL:', url, '->', outputPdfName);
      execSync(cmd, { stdio: 'inherit' });
      const stats = fs.statSync(outputPdfPath);
      console.log('SUCCESS:', outputPdfName, 'Size:', stats.size, 'bytes');
    } catch (err) {
      console.error('Failed generating:', outputPdfName, err);
    }
  } else {
    console.error('Chrome binary missing:', chromeBinary);
  }
}

console.log('=== Compiling 1-Page Colorful ATS Resume PDF ===');
generatePdfFromUrl('http://localhost:3000/resume?layout=single&mode=ats', 'Sonu_Kumar_Resume_1Page.pdf');

console.log('=== Compiling Detailed 2-Page Colorful ATS Resume PDF ===');
generatePdfFromUrl('http://localhost:3000/resume?layout=detailed&mode=ats', 'Sonu_Kumar_Resume.pdf');

console.log('=== Compiling 1-Page Dark Modern Resume PDF ===');
generatePdfFromUrl('http://localhost:3000/resume?layout=single&mode=modern', 'Sonu_Kumar_Resume_1Page_Dark.pdf');

console.log('=== Compiling Detailed 2-Page Dark Modern Resume PDF ===');
generatePdfFromUrl('http://localhost:3000/resume?layout=detailed&mode=modern', 'Sonu_Kumar_Resume_Dark.pdf');
