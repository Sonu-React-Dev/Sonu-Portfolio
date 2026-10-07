"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Printer, Copy, Check, FileText, Files, ShieldCheck, Sparkles } from "lucide-react";
import ResumeDocument from "@/components/ResumeDocument";
import { profile, skills, experience, projects, education, keyAchievements } from "@/data/portfolio";

export default function ResumePage() {
  const [layout, setLayout] = useState<"single" | "detailed">(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("layout");
      if (p === "detailed") return "detailed";
    }
    return "single";
  });
  const [mode, setMode] = useState<"ats" | "modern">(() => {
    if (typeof window !== "undefined") {
      const m = new URLSearchParams(window.location.search).get("mode");
      if (m === "modern") return "modern";
    }
    return "ats";
  });
  const [font, setFont] = useState("Inter");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("layout");
    if (l === "detailed" || l === "single") {
      setLayout(l);
    }
    const m = params.get("mode");
    if (m === "modern" || m === "ats") {
      setMode(m);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    const isDark = mode === "modern";
    const targetFileName = layout === "single"
      ? (isDark ? "Sonu_Kumar_Resume_1Page_Dark.pdf" : "Sonu_Kumar_Resume_1Page.pdf")
      : (isDark ? "Sonu_Kumar_Resume_Dark.pdf" : "Sonu_Kumar_Resume.pdf");

    const pdfUrl = `/${targetFileName}`;

    try {
      setDownloading(true);
      const res = await fetch(pdfUrl);
      if (!res.ok) throw new Error("Download request failed");
      const buffer = await res.arrayBuffer();
      const blob = new Blob([buffer], { type: "application/pdf" });
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = targetFileName;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      }, 500);
    } catch {
      window.open(pdfUrl, "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const copyPlainTextResume = () => {
    const isSingle = layout === "single";

    const text = isSingle
      ? `
${profile.name.toUpperCase()}
${profile.role} • ${profile.location}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: https://linkedin.com/in/${profile.social.linkedin}
GitHub: https://github.com/${profile.social.github}

==================================================
PROFILE SUMMARY
==================================================
${profile.summary}

==================================================
TECHNICAL SKILLS
==================================================
- Languages: ${skills.languages.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Backend: ${skills.backend.join(", ")}
- Databases: ${skills.databases.join(", ")}
- Other: ${skills.other.join(", ")}
- Tools & Concepts: ${skills.toolsAndConcepts.join(", ")}

==================================================
WORK EXPERIENCE
==================================================
FRONT-END DEVELOPER | REACT NATIVE | REACT | NEXT
SPODS Technologies • Delhi, India (08/2025 — Present)
• Developing and maintaining the Pick A Pro marketplace ecosystem across web, React Native mobile, admin dashboard, and Partner app.
• Implemented secure role-based access control (RBAC) and authorization workflows across users, partners, and admin modules.
• Built cross-platform architecture with React, Next.js, and React Native with modular components and Redux Toolkit (RTK).
• Integrated REST APIs, Google Maps geolocation services, and Firebase push notifications.
• Optimized web and mobile performance, cutting re-renders and improving responsiveness.

SOFTWARE DEVELOPER
NOYT INDIA • Delhi, India (06/2025 — 08/2025)
• Managed independent project modules end-to-end; integrated third-party APIs to significantly elevate functionality and user experience.

SOFTWARE DEVELOPER
3FITECH COMMUNICATIONS PVT LTD • Delhi, India (02/2025 — 06/2025)
• Collaborated with cross-functional teams to engineer scalable, maintainable code ensuring high software reliability.

FRONTEND DEVELOPER | REACT
EDUMITRAM PVT LTD • Delhi, India (11/2023 — 01/2025)
• Developed user-friendly web interfaces for enterprise clients including Educomp Solutions Limited, EbixCash, and Hem Aunty Publications.

FRONTEND DEVELOPER | REACT
SLOG Solutions Pvt. Ltd • Delhi, India (04/2021 — 10/2023)
• Reduced defects by 20% through systematic debugging in Angular/React apps; trained students in Python and modern web development.

==================================================
KEY PROJECTS
==================================================
• Pick A Pro (On-Demand Marketplace Ecosystem) - 4 production apps · 99.8% crash-free
  Stack: React.js, Next.js, React Native, Redux Toolkit, Node.js, Express, Firebase, Google Maps API
  Summary: Comprehensive service marketplace spanning customer web, mobile apps, admin dashboard, and partner app with real-time updates.

• PropertyWorks (Real Estate Intelligence & Advisory Platform) - Full-Stack Advisory · OTP Admin & Lead Engine
  Stack: React.js, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, Lead Management, SEO
  Summary: Full-stack real estate advisory platform with dedicated Admin Panel, project directory, OTP-based admin actions, and lead capture.

• Memory Caravan (QR-Based Digital Media & Keepsake Platform) - End-to-End Platform · Secure R2 Video Streaming
  Stack: Next.js, React, TypeScript, Tailwind CSS, Supabase, Cloudflare R2, Video Streaming, QR Routing
  Summary: End-to-end QR keepsake platform with private video streaming via Cloudflare R2, short-lived tokens, and Supabase.

• Grasberg International (Forex Platform & Role-Based CRM) - Multi-Role CRM · MT5 Trading Integration
  Stack: Next.js, React.js, TypeScript, Tailwind CSS, REST APIs, MetaTrader 5 (MT5), Role-Based CRM
  Summary: Enterprise forex platform with informational portal and multi-tenant CRM for User, Partner, and Admin roles integrating MT5 trading APIs.

==================================================
EDUCATION & ACHIEVEMENTS
==================================================
• B.Tech in Information Technology - Government Engineering College Ajmer, Rajasthan (2020)
• Intermediate (T P Verma College, 2015) • Matric (High School Harinagar, 2012)
Key Highlights:
${keyAchievements.map((k) => `• ${k}`).join("\n")}
      `.trim()
      : `
${profile.name.toUpperCase()}
${profile.role} • ${profile.location}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: https://linkedin.com/in/${profile.social.linkedin}
GitHub: https://github.com/${profile.social.github}

==================================================
PROFILE
==================================================
${profile.summary}

==================================================
SKILLS
==================================================
- Languages: ${skills.languages.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Backend: ${skills.backend.join(", ")}
- Databases: ${skills.databases.join(", ")}
- Other: ${skills.other.join(", ")}
- Tools & Concepts: ${skills.toolsAndConcepts.join(", ")}

==================================================
WORK EXPERIENCE
==================================================
${experience
  .map(
    (exp) => `
${exp.role.toUpperCase()}
${exp.company} • ${exp.location} (${exp.period})
${exp.bullets.map((b) => `• ${b}`).join("\n")}
`
  )
  .join("\n")}

==================================================
PROJECTS
==================================================
${projects
  .map(
    (p) => `
• ${p.title} (${p.category}) - ${p.result}
  Stack: ${p.stack.join(", ")}
  Summary: ${p.description}
`
  )
  .join("\n")}

==================================================
EDUCATION
==================================================
${education.map((e) => `• ${e.degree} - ${e.institution}, ${e.location} (${e.year})`).join("\n")}

==================================================
KEY ACHIEVEMENTS
==================================================
${keyAchievements.map((k) => `• ${k}`).join("\n")}
      `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const isDark = mode === "modern";
  const pdfUrl = layout === "single"
    ? (isDark ? "/Sonu_Kumar_Resume_1Page_Dark.pdf" : "/Sonu_Kumar_Resume_1Page.pdf")
    : (isDark ? "/Sonu_Kumar_Resume_Dark.pdf" : "/Sonu_Kumar_Resume.pdf");
  const pdfFileName = layout === "single"
    ? (isDark ? "Sonu_Kumar_Resume_1Page_Dark.pdf" : "Sonu_Kumar_Resume_1Page.pdf")
    : (isDark ? "Sonu_Kumar_Resume_Dark.pdf" : "Sonu_Kumar_Resume.pdf");

  return (
    <div className="resume-page-wrapper min-h-screen bg-[#070708] py-6 sm:py-10 text-white selection:bg-violet-500/30 selection:text-white print:bg-white print:py-0 print:m-0 print:p-0 print:min-h-0 print:text-black">
      {/* CONTROL TOOLBAR (HIDDEN IN PRINT) */}
      <div className="no-print container-x max-w-[900px] mb-8">
        <div className="glass rounded-3xl p-4 sm:p-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5">
            {/* Back button */}
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>

            {/* ATS Badge */}
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <ShieldCheck size={14} />
              <span>Verified Professional Format</span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex rounded-full border border-white/10 bg-black/40 p-1 text-xs">
              <button
                type="button"
                onClick={() => setMode("ats")}
                className={`rounded-full px-3 py-1 transition ${
                  mode === "ats" ? "bg-white text-black font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Classic White
              </button>
              <button
                type="button"
                onClick={() => setMode("modern")}
                className={`rounded-full px-3 py-1 transition ${
                  mode === "modern" ? "bg-violet-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Dark Modern
              </button>
            </div>
          </div>

          {/* SECOND BAR: LAYOUT SELECTOR & ACTIONS */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* 1-PAGE vs DETAILED TOGGLE */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-medium hidden sm:inline">Format:</span>
              <div className="flex rounded-full border border-white/15 bg-black/50 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setLayout("single")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition ${
                    layout === "single"
                      ? "bg-violet-600 text-white font-bold shadow-sm shadow-violet-600/50"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <FileText size={14} />
                  <span>Single Page</span>
                  <span className="ml-1 rounded bg-white/20 px-1.5 py-0.2 text-[10px] text-white">Recommended</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("detailed")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition ${
                    layout === "detailed"
                      ? "bg-violet-600 text-white font-bold shadow-sm shadow-violet-600/50"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Files size={14} />
                  <span>Detailed CV</span>
                </button>
              </div>
            </div>

            {/* FONT SELECTOR */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-medium hidden sm:inline">Font:</span>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="bg-black/50 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white outline-none cursor-pointer hover:border-white/30 transition appearance-none"
                style={{ paddingRight: "1.5rem", backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right .5rem top 50%", backgroundSize: ".65rem auto" }}
              >
                <option value="Inter">Inter (Standard)</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lato">Lato</option>
                <option value="Merriweather">Merriweather (Serif)</option>
                <option value="Playfair Display">Playfair (Serif)</option>
                <option value="Fira Code">Fira Code (Mono)</option>
              </select>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Copy Plain Text */}
              <button
                type="button"
                onClick={copyPlainTextResume}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white"
                title="Copy plain text formatted for job application forms"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied Text!" : "Copy Text"}</span>
              </button>

              {/* Direct Download PDF File */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-zinc-200 shadow-lg shadow-white/10 disabled:opacity-70 cursor-pointer"
                title="Directly download high-resolution PDF"
              >
                {downloading ? (
                  <>
                    <span className="inline-block w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              {/* Print / Save to PDF via Browser */}
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white"
                title="Save as PDF via browser print"
              >
                <Printer size={14} />
                <span>Print / Browser PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Informative helper note */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-zinc-500">
          <p>
            {layout === "single"
              ? "⚡ Single Page: Executive summary format engineered for quick executive reviews & high impact."
              : "📋 Detailed CV: Comprehensive multi-page format highlighting complete project experience & technical skills."}
          </p>
          <p className="hidden md:block">
            Press <kbd className="rounded border border-white/10 bg-black/40 px-1 py-0.5 text-[10px] text-zinc-300">⌘ + P</kbd> anytime to save as PDF.
          </p>
        </div>
      </div>

      {/* THE ACTUAL RESUME DOCUMENT */}
      <main className="container-x max-w-[900px] print:max-w-none print:w-full print:m-0 print:p-0">
        <ResumeDocument mode={mode} layout={layout} fontFamily={font} />
      </main>

      {/* FOOTER CALLOUT (HIDDEN IN PRINT) */}
      <div className="no-print container-x max-w-[900px] mt-12 text-center text-xs text-zinc-600">
        <p>Sonu Kumar — Full-Stack Developer • Professional Curriculum Vitae</p>
      </div>
    </div>
  );
}
