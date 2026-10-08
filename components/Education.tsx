"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { education, keyAchievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-background-secondary">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[.24em] text-violet-300 font-semibold">
            05 / Education & Achievements
          </p>
          <h2 className="mb-8 sm:mb-14 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl text-foreground-primary">
            Academic background and milestones.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="h-10 w-10 rounded-full bg-violet-500/10 flex items-center justify-center">
                  <GraduationCap className="text-violet-400" size={20} />
               </div>
               <h3 className="text-2xl font-bold text-foreground-primary tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-6 sm:pl-8 border-l-2 border-border-subtle"
                >
                  <div className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                  
                  <div className="text-xs font-semibold uppercase tracking-wider text-violet-300/80 mb-1">
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-bold text-foreground-primary mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-medium text-foreground-secondary mb-2">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground-muted/80">
                     <MapPin size={12} />
                     <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Award className="text-emerald-400" size={20} />
               </div>
               <h3 className="text-2xl font-bold text-foreground-primary tracking-tight">Key Achievements</h3>
            </div>

            <div className="grid gap-4">
               {keyAchievements.map((achievement, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-foreground-primary/[0.02] p-5 sm:p-6 hover:bg-foreground-primary/[0.04] transition-colors"
                 >
                    <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                       <Award size={14} />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground-secondary">
                       {achievement}
                    </p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
