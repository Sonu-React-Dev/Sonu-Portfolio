"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { profile } from "@/data/portfolio";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-background-primary/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-x flex h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <a href="/#top" onClick={onClose} className="font-bold text-foreground-primary tracking-wide text-lg">
                SONU
              </a>
              <button onClick={onClose} aria-label="Close menu" className="p-2 -mr-2 text-foreground-primary">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-4xl font-semibold text-foreground-primary"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume"

                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.05 }}
                className="mt-4 text-2xl font-medium text-accent-primary"
              >
                Resume
              </motion.a>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6 pb-8 text-foreground-secondary"
            >
              <a href={`https://github.com/${profile.social.github}`}>GitHub</a>
              <a href={`https://linkedin.com/in/${profile.social.linkedin}`}>LinkedIn</a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
