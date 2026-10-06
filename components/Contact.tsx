"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0b0b] p-8 sm:p-14 lg:p-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-xs uppercase tracking-[.24em] text-violet-300">07 / Contact</p>
              <h2 className="max-w-4xl text-5xl font-semibold leading-[.95] tracking-tight sm:text-7xl">Let&apos;s build something great.</h2>
              <p className="mt-7 max-w-xl leading-7 text-zinc-500">
                Open to freelance work, full-time opportunities and meaningful product collaborations.
              </p>
            </motion.div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200">
                Email me <ArrowUpRight size={17} />
              </a>
              {showPhone ? (
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white">
                  <Phone size={16} className="text-emerald-400" /> {profile.phone}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPhone(true)}
                  className="glass flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
                >
                  <Phone size={16} className="text-emerald-400" /> Show Phone Number
                </button>
              )}
              <a href={`https://github.com/${profile.social.github}`} target="_blank" rel="noreferrer" className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm transition hover:bg-white/10">
                <Github size={17} /> GitHub
              </a>
              <a href={`https://www.linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noreferrer" className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm transition hover:bg-white/10">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5"><Mail size={15} className="text-violet-300" /> {profile.email}</span>
              <span className="text-zinc-700">•</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
