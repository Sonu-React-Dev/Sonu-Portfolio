"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Code2, Server, Database, Box, Cpu } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiReact, 
  SiNextdotjs, SiAngular, SiRedux, SiNodedotjs, SiExpress, 
  SiUnity, SiMongodb, SiMysql, SiSupabase, SiFirebase, 
  SiCloudflare, SiGooglemaps, SiGithub, SiPostman, SiSwagger, 
  SiBootstrap 
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode, TbApi } from "react-icons/tb";
import { MdOutlineSpeed, MdOutlineSecurity, MdSync } from "react-icons/md";
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const categoryMeta: Record<
  string,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string }> }
> = {
  all: { label: "All Skills", icon: Cpu },
  frontend: { label: "Frontend & Mobile", icon: Code2 },
  backend: { label: "Backend & APIs", icon: Server },
  databases: { label: "Databases & Cloud", icon: Database },
  gameAnd3d: { label: "Game & 3D Interactive", icon: Box },
};

const topCoreSkills = new Set([
  "React.js",
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Redux Toolkit",
  "Supabase (PostgreSQL)",
  "Unity 3D / 2D",
  "Google Maps API",
  "Cloudflare R2"
]);

// Map skill names to icons
const getIconForSkill = (skill: string) => {
  const iconProps = { className: "text-lg shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" };
  
  switch(skill) {
    case "JavaScript": return <SiJavascript {...iconProps} className={`${iconProps.className} group-hover:text-[#F7DF1E]`} />;
    case "TypeScript": return <SiTypescript {...iconProps} className={`${iconProps.className} group-hover:text-[#3178C6]`} />;
    case "Java": return <FaJava {...iconProps} className={`${iconProps.className} group-hover:text-[#007396]`} />;
    case "C#": return <TbBrandCSharp {...iconProps} className={`${iconProps.className} group-hover:text-[#239120]`} />;
    case "HTML5": return <SiHtml5 {...iconProps} className={`${iconProps.className} group-hover:text-[#E34F26]`} />;
    case "CSS3": return <FaCss3Alt {...iconProps} className={`${iconProps.className} group-hover:text-[#1572B6]`} />;
    case "Bootstrap": return <SiBootstrap {...iconProps} className={`${iconProps.className} group-hover:text-[#7952B3]`} />;
    case "Tailwind CSS": return <SiTailwindcss {...iconProps} className={`${iconProps.className} group-hover:text-[#06B6D4]`} />;
    
    case "React.js":
    case "React Native": return <SiReact {...iconProps} className={`${iconProps.className} group-hover:text-[#61DAFB]`} />;
    case "Next.js": return <SiNextdotjs {...iconProps} className={`${iconProps.className} group-hover:text-foreground-primary`} />;
    case "Angular": return <SiAngular {...iconProps} className={`${iconProps.className} group-hover:text-[#DD0031]`} />;
    case "Redux Toolkit": return <SiRedux {...iconProps} className={`${iconProps.className} group-hover:text-[#764ABC]`} />;
    
    case "Node.js": return <SiNodedotjs {...iconProps} className={`${iconProps.className} group-hover:text-[#339933]`} />;
    case "Express.js": return <SiExpress {...iconProps} className={`${iconProps.className} group-hover:text-foreground-primary`} />;
    case "RESTful APIs": return <TbApi {...iconProps} className={`${iconProps.className} group-hover:text-[#009688]`} />;
    case "Third-party API Integration": return <BiGitBranch {...iconProps} className={`${iconProps.className} group-hover:text-violet-400`} />;
    
    case "Unity 3D / 2D": return <SiUnity {...iconProps} className={`${iconProps.className} group-hover:text-foreground-primary`} />;
    case "C# Scripting": return <TbBrandCSharp {...iconProps} className={`${iconProps.className} group-hover:text-[#239120]`} />;
    case "Game Physics & Collisions": return <Box {...iconProps} className={`${iconProps.className} group-hover:text-orange-400`} />;
    case "Cinemachine & URP": return <SiUnity {...iconProps} className={`${iconProps.className} group-hover:text-foreground-primary`} />;
    case "Interactive 3D / WebGL": return <Box {...iconProps} className={`${iconProps.className} group-hover:text-blue-400`} />;
    
    case "MongoDB": return <SiMongodb {...iconProps} className={`${iconProps.className} group-hover:text-[#47A248]`} />;
    case "MySQL": return <SiMysql {...iconProps} className={`${iconProps.className} group-hover:text-[#4479A1]`} />;
    case "Supabase (PostgreSQL)": return <SiSupabase {...iconProps} className={`${iconProps.className} group-hover:text-[#3ECF8E]`} />;
    
    case "Firebase Auth":
    case "Firebase Realtime DB":
    case "Firebase Cloud Messaging": return <SiFirebase {...iconProps} className={`${iconProps.className} group-hover:text-[#FFCA28]`} />;
    case "Cloudflare R2": return <SiCloudflare {...iconProps} className={`${iconProps.className} group-hover:text-[#F38020]`} />;
    case "Google Maps API": return <SiGooglemaps {...iconProps} className={`${iconProps.className} group-hover:text-[#4285F4]`} />;
    case "Git/GitHub": return <SiGithub {...iconProps} className={`${iconProps.className} group-hover:text-foreground-primary`} />;
    case "VS Code": return <TbBrandVscode {...iconProps} className={`${iconProps.className} group-hover:text-[#007ACC]`} />;
    case "Postman": return <SiPostman {...iconProps} className={`${iconProps.className} group-hover:text-[#FF6C37]`} />;
    case "Swagger": return <SiSwagger {...iconProps} className={`${iconProps.className} group-hover:text-[#85EA2D]`} />;
    
    case "Responsive Design": return <HiOutlineDevicePhoneMobile {...iconProps} className={`${iconProps.className} group-hover:text-violet-400`} />;
    case "Performance Optimization": return <MdOutlineSpeed {...iconProps} className={`${iconProps.className} group-hover:text-emerald-400`} />;
    case "Role-Based Authentication": return <MdOutlineSecurity {...iconProps} className={`${iconProps.className} group-hover:text-blue-400`} />;
    case "State Management": return <MdSync {...iconProps} className={`${iconProps.className} group-hover:text-amber-400`} />;
    case "Agile Methodologies": return <BiGitBranch {...iconProps} className={`${iconProps.className} group-hover:text-rose-400`} />;
    
    default: return null;
  }
};

const marqueeIcons = [
  { icon: SiReact, color: "text-[#61DAFB]" },
  { icon: SiNextdotjs, color: "text-foreground-primary" },
  { icon: SiTypescript, color: "text-[#3178C6]" },
  { icon: SiNodedotjs, color: "text-[#339933]" },
  { icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { icon: SiFirebase, color: "text-[#FFCA28]" },
  { icon: SiSupabase, color: "text-[#3ECF8E]" },
  { icon: SiUnity, color: "text-foreground-primary" },
  { icon: SiMongodb, color: "text-[#47A248]" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterGroups = () => {
    if (activeTab === "all") {
      return [
        { key: "frontend", title: "Frontend & Mobile", items: [...skills.frontend, ...skills.languages] },
        { key: "backend", title: "Backend Systems & APIs", items: skills.backend },
        { key: "databases", title: "Databases, Cloud & Services", items: [...skills.databases, ...skills.other] },
        { key: "gameAnd3d", title: "Game Development & 3D (Unity)", items: skills.gameAnd3d },
        { key: "practices", title: "Engineering Practices & Concepts", items: skills.toolsAndConcepts },
      ];
    }
    if (activeTab === "frontend") {
      return [
        { key: "frontend", title: "Frontend & Mobile Frameworks", items: skills.frontend },
        { key: "languages", title: "Languages & Styling", items: skills.languages },
      ];
    }
    if (activeTab === "backend") {
      return [
        { key: "backend", title: "Backend Architecture & APIs", items: skills.backend },
        { key: "services", title: "Cloud Services & Integration", items: skills.other.filter(s => !s.includes("VS Code")) },
      ];
    }
    if (activeTab === "databases") {
      return [
        { key: "databases", title: "Databases & Storage", items: skills.databases },
        { key: "cloud", title: "Cloud Infrastructure & Auth", items: skills.other },
      ];
    }
    if (activeTab === "gameAnd3d") {
      return [
        { key: "gameAnd3d", title: "Unity, 3D Engine & Interactive Simulations", items: skills.gameAnd3d },
      ];
    }
    return [];
  };

  const groups = filterGroups();

  return (
    <section id="skills" className="relative section-pad border-y border-border-subtle bg-[#070707] overflow-hidden">
      
      {/* Infinite Tech Marquee Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none py-4 border-b border-border-subtle">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((item, idx) => {
            const Icon = item.icon;
            return (
               <div key={idx} className={`shrink-0 ${item.color}`}>
                  <Icon size={48} />
               </div>
            );
          })}
        </motion.div>
      </div>

      <div className="container-x relative z-10 pt-8 sm:pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
              02 / Technology Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground-primary">
              Tools I use to turn ideas into products.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-5 sm:leading-6 text-foreground-muted">
            A battle-tested stack centered on modern JavaScript ecosystems, high-performance UI frameworks, type safety, and production APIs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-7 sm:mb-10 pb-4 border-b border-border-subtle">
          {Object.entries(categoryMeta).map(([catKey, meta]) => {
            const Icon = meta.icon;
            const isActive = activeTab === catKey;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setActiveTab(catKey)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? "bg-foreground-primary text-background-primary font-semibold shadow-md shadow-white/10"
                    : "glass text-foreground-muted hover:text-foreground-primary hover:bg-foreground-primary/10"
                }`}
              >
                <Icon size={14} className={isActive ? "text-violet-600" : "text-foreground-muted"} />
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {groups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border-subtle bg-background-secondary/70 p-4 sm:p-6 lg:p-7">
                <div className="mb-4 sm:mb-5 flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-[.2em] text-foreground-muted font-semibold">
                    {group.title}
                  </h3>
                  <span className="text-[11px] text-foreground-muted font-medium">
                    {group.items.length} technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {group.items.map((skill) => {
                    const isCore = topCoreSkills.has(skill);
                    const icon = getIconForSkill(skill);
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3 }}
                        className={`group rounded-full px-3.5 py-2 text-xs font-medium transition flex items-center gap-2 cursor-default ${
                          isCore
                            ? "border border-violet-400/40 bg-violet-500/15 text-violet-200 shadow-sm shadow-violet-500/10 hover:border-violet-400/80 hover:bg-violet-500/25 hover:text-foreground-primary"
                            : "border border-border-subtle bg-foreground-primary/[0.04] text-foreground-secondary hover:border-border-subtle hover:bg-foreground-primary/[0.08] hover:text-foreground-primary"
                        }`}
                      >
                        {icon && icon}
                        {!icon && isCore && <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />}
                        <span>{skill}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
