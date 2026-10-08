"use client";

import * as React from "react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background-primary/70 backdrop-blur-md border-b border-border-subtle py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container-x flex items-center justify-between">
          <a href="/#top" className="font-bold text-foreground-primary tracking-wide text-lg">
            SONU
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground-secondary hover:text-foreground-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume"
              className="text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors ml-2"
            >
              Resume
            </a>
            <div className="w-px h-4 bg-border-subtle mx-1" />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="text-foreground-primary"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
    </>
  );
}
