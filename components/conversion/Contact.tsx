"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowUpRight, X, Send, Check, ShieldCheck, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Full-Time Engineering Role");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setFormError("Please enter your name."); return; }
    if (!email.trim() || !email.includes("@")) { setFormError("Please enter a valid email address."); return; }
    if (!message.trim()) { setFormError("Please enter a message or project outline."); return; }

    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9d486076-991c-45ee-8d44-836942c01f16",
          name, email,
          subject: `[Portfolio Inquiry] ${category} from ${name}`,
          message: `Inquiry Type: ${category}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\n---\nSent via sonubuilds.github.io`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setName(""); setEmail(""); setPhone(""); setMessage("");
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${category} from ${name}`);
      const body = encodeURIComponent(`Hello Sonu,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nInquiry Type: ${category}\n\nMessage:\n${message}\n\n---\nSent via sonubuilds.github.io`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-background-primary scroll-mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
        
        <div className="container-x relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter text-foreground-primary mb-8 leading-none">
            Got an idea?
          </h2>
          <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-12">
            Whether you have a specific project in mind or just want to chat about architecture and design, my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div onClick={() => setIsModalOpen(true)}>
              <MagneticButton className="rounded-full bg-foreground-primary shadow-2xl hover:scale-105 px-8 py-4 flex items-center gap-2 text-base font-semibold text-background-primary">
                Start a conversation <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium text-foreground-muted">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground-primary transition-colors">
              <Mail size={16} />
              {profile.email}
            </a>
            <span className="hidden sm:block text-border-subtle">•</span>
            <a href={`tel:${profile.phone.replace(/\\s+/g, '')}`} className="flex items-center gap-2 hover:text-foreground-primary transition-colors">
              <Phone size={16} />
              {profile.phone}
            </a>
            <span className="hidden sm:block text-border-subtle">•</span>
            <a href={`https://linkedin.com/in/${profile.social.linkedin}`} className="hover:text-foreground-primary transition-colors underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background-primary/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border-subtle bg-background-secondary p-6 sm:p-8 shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 p-2 text-foreground-muted hover:text-foreground-primary transition-colors">
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold text-foreground-primary mb-2">Send a Message</h3>
              <p className="text-sm text-foreground-secondary mb-6 border-b border-border-subtle pb-6">Direct inquiry or role invitation</p>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground-primary">Message Sent Successfully!</h4>
                  <p className="mt-2 text-sm text-foreground-secondary mb-8">I will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="rounded-full bg-foreground-primary px-6 py-2.5 text-sm font-medium text-background-primary transition hover:opacity-90">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-border-subtle bg-background-primary px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-accent-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-border-subtle bg-background-primary px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-accent-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Contact Number (Optional)</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="w-full rounded-xl border border-border-subtle bg-background-primary px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-accent-primary placeholder:text-foreground-muted" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Inquiry Type</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-xl border border-border-subtle bg-background-primary px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-accent-primary">
                      <option>Full-Time Engineering Role</option>
                      <option>Contract / Freelance Project</option>
                      <option>Technical Advisory / Architecture</option>
                      <option>General Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-border-subtle bg-background-primary px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-accent-primary resize-none" />
                  </div>
                  
                  {formError && <p className="text-xs text-rose-500 font-medium">{formError}</p>}

                  <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50">
                    <Send size={16} /> <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                  <p className="text-center text-xs text-foreground-muted mt-4">
                    <ShieldCheck size={14} className="inline mr-1 text-emerald-500" /> Zero spam. Secure connection.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
