"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import sonuPhoto from "@/public/sonu-profile.png";

const links = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const ids = links.map((l) => l.name.toLowerCase());
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25, rootMargin: "-80px 0px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="container-x mt-4">
        <div className="glass flex h-14 items-center justify-between rounded-full px-4 md:px-5 shadow-lg shadow-black/40">
          {/* Brand & Sonu Photo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-violet-400/40 bg-zinc-800 transition group-hover:ring-violet-400">
              <Image
                src={sonuPhoto}
                alt="Sonu Kumar"
                className="h-full w-full object-cover object-[center_top]"
              />
            </div>
            <span className="text-sm tracking-wider">
              SONU<span className="text-violet-400">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 text-xs lg:text-sm md:flex">
            {links.map((link) => {
              const isActive = active === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition font-medium ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-violet-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/resume"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FileText size={13} className="text-violet-300" />
              <span>Resume</span>
            </Link>
            <a
              href="#contact"
              className="flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-zinc-200 shadow-sm shadow-white/10 cursor-pointer"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            className="p-1 text-zinc-300 hover:text-white md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2.5 rounded-3xl p-6 md:hidden shadow-2xl border border-white/15"
            >
              <div className="flex flex-col space-y-3">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 py-2.5 text-base font-medium text-zinc-200 hover:text-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={15} className="text-zinc-500" />
                  </a>
                ))}

                <Link
                  href="/resume"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-semibold text-violet-300"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={16} /> View Resume / CV
                  </span>
                  <ArrowUpRight size={15} />
                </Link>

                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://github.com/${profile.social.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-white/10 hover:text-white"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${profile.social.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-white/10 hover:text-white"
                    >
                      <Linkedin size={15} />
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="p-2 rounded-full border border-white/10 hover:text-white"
                    >
                      <Mail size={15} />
                    </a>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
                  >
                    Let&apos;s talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
