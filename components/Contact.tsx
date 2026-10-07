"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Full-Time Role");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setFormError("Please enter a message or project outline.");
      return;
    }

    setFormError("");
    setSubmitted(true);

    // Prepare pre-filled email client link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${category} from ${name}`);
    const body = encodeURIComponent(
      `Hello Sonu,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${category}\n\nMessage:\n${message}\n\n---\nSent via sonubuilds.github.io`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-[#0b0b0b] p-5 sm:p-10 lg:p-14 shadow-2xl">
          {/* Ambient light glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />

          <div className="relative grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* LEFT COLUMN: Overview & Quick Actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
                    07 / Contact
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Opportunities
                  </span>
                </div>
                <h2 className="max-w-xl text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] sm:leading-[.95] tracking-tight text-white">
                  Let&apos;s build something great.
                </h2>
                <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-6 sm:leading-7 text-zinc-300">
                  Whether you are hiring for a senior engineering role, launching a venture, or need high-performance web and mobile execution, I am ready to collaborate.
                </p>
              </motion.div>

              {/* Quick Connect Actions */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                {/* 1-Click Copy Email */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-black transition hover:bg-zinc-200 hover:scale-[1.02] shadow-lg shadow-white/10 cursor-pointer text-xs sm:text-sm"
                  title="Copy Sonu's email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-emerald-600" />
                      <span>Copied: {profile.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                {/* Direct Mailto */}
                <a
                  href={`mailto:${profile.email}`}
                  className="glass flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Mail size={16} className="text-violet-300" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight size={15} />
                </a>

                {/* Phone Toggle */}
                {showPhone ? (
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="glass flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                  >
                    <Phone size={15} className="text-emerald-400" />
                    <span>{profile.phone}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPhone(true)}
                    className="glass flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <Phone size={15} className="text-emerald-400" />
                    <span>Show Phone Number</span>
                  </button>
                )}
              </div>

              {/* Social Channels */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={`https://github.com/${profile.social.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Github size={15} /> <span>GitHub / {profile.social.github}</span>
                </a>
                <a
                  href={`https://linkedin.com/in/${profile.social.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Linkedin size={15} /> <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Location & Availability Badge Card */}
              <div className="mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 text-xs text-zinc-400">
                <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5">
                    <MapPin size={15} className="text-violet-400 shrink-0" />
                    <span>Based in {profile.location} (UTC +5:30)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-emerald-400 shrink-0" />
                    <span>Avg. response under 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Message Form */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-7 lg:p-8 backdrop-blur-md">
              <div className="mb-5 sm:mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    Send a Message
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Direct inquiry or role invitation
                  </p>
                </div>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300">
                  <Sparkles size={16} />
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Opening Email Client</h4>
                  <p className="mt-2 text-xs text-zinc-400 max-w-sm mx-auto leading-5">
                    Your inquiry has been formatted. If your email app didn&apos;t open automatically, you can directly email{" "}
                    <span className="text-white font-medium">{profile.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-white/15 px-4 py-2 text-xs text-zinc-300 hover:text-white transition"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. jane@company.com"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Opportunity / Inquiry Type
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-[#121216] px-4 py-2.5 text-xs text-white outline-none transition focus:border-violet-500"
                    >
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                      <option value="Contract / Freelance Project">Contract / Freelance Project</option>
                      <option value="Technical Advisory / Architecture">Technical Advisory / Architecture</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your team, tech stack, timeline, or requirements..."
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-violet-500 focus:bg-white/[0.08] resize-none"
                    />
                  </div>

                  {formError && (
                    <p className="text-xs text-rose-400 font-medium">{formError}</p>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-violet-500 shadow-lg shadow-violet-600/30 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Message to Sonu</span>
                  </button>

                  <p className="text-center text-[11px] text-zinc-400">
                    <ShieldCheck size={12} className="inline mr-1 text-emerald-400" />
                    Zero spam. Direct communication with Sonu Kumar.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
