"use client";

import { profile } from "@/data/portfolio";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true }) + " IST");
    };
    update();
    const int = setInterval(update, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <footer className="bg-background-secondary pt-16 pb-8 border-t border-border-subtle relative z-20">
      <div className="container-x">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground-primary tracking-tight mb-2">
              {profile.name}
            </h3>
            <p className="text-foreground-secondary">
              {profile.role}
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Social</span>
              <a href={`https://github.com/${profile.social.github}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground-primary hover:text-accent-primary transition-colors">GitHub</a>
              <a href={`https://linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground-primary hover:text-accent-primary transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted">Menu</span>
              <Link href="/#work" className="text-sm font-medium text-foreground-primary hover:text-accent-primary transition-colors">Work</Link>
              <Link href="/#about" className="text-sm font-medium text-foreground-primary hover:text-accent-primary transition-colors">About</Link>
              <Link href="/resume" className="text-sm font-medium text-foreground-primary hover:text-accent-primary transition-colors">Resume</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border-subtle text-xs font-medium text-foreground-muted">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Press <kbd className="font-mono bg-background-primary border border-border-subtle rounded px-1.5 py-0.5 shadow-sm mx-1">⌘ K</kbd> to navigate</span>
            <span>Local time: {time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
