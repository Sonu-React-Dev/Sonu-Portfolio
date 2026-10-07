"use client";

import { motion } from "framer-motion";
import { clients } from "@/data/portfolio";
import Image from "next/image";

export default function ClientLogos() {
  // Duplicate clients array to create a seamless infinite loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-12 sm:py-16 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[.25em] text-zinc-500 font-semibold">
            Delivered for brands & clients
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Left & Right Gradients for smooth fade-in/out */}
        <div className="absolute left-0 top-0 z-10 h-full w-[100px] sm:w-[200px] bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-[100px] sm:w-[200px] bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 sm:gap-24 pl-12 sm:pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 shrink-0 h-12"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={48}
                  className="object-contain h-8 sm:h-10 w-auto"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white/80">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
