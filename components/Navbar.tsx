"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Work", "About", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.toLowerCase());
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35, rootMargin: "-80px 0px 0px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="container-x mt-4">
        <div className="glass flex h-14 items-center justify-between rounded-full px-4 md:px-5">
          <a href="#top" className="font-semibold tracking-tight">SONU<span className="text-violet-300">.</span></a>
          <div className="hidden items-center gap-7 text-sm md:flex">
            {links.map((x) => (
              <a
                key={x}
                className={`transition ${active === x.toLowerCase() ? "text-white" : "text-zinc-400 hover:text-white"}`}
                href={`#${x.toLowerCase()}`}
              >
                {x}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/resume" className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-zinc-300 transition hover:border-white/30 hover:text-white">
              View Resume
            </Link>
            <a href="#contact" className="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </div>
          <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-3xl p-5 md:hidden">
            {links.map((x) => (
              <a onClick={() => setOpen(false)} key={x} href={`#${x.toLowerCase()}`} className="block border-b border-white/10 py-4 text-lg last:border-0">{x}</a>
            ))}
            <Link onClick={() => setOpen(false)} href="/resume" className="block border-b border-white/10 py-4 text-lg text-violet-300 font-medium">
              View Resume
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
