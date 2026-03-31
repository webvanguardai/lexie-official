"use client";

import { motion } from "framer-motion";

const pressLogos = [
  "Dubai Media",
  "Motivate Talent",
  "Dubai Night",
  "Time Out Dubai",
];

export default function Press() {
  return (
    <section id="press" className="relative section-padding overflow-hidden">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2D78]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Top accent rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FF2D78]/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section counter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-counter"
        >
          <div className="section-counter-line" />
          <span className="section-counter-text">006 / Press</span>
        </motion.div>

        {/* Press logos — much bigger, bold, spaced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-8 md:gap-16 mb-20"
        >
          {pressLogos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg md:text-2xl font-sans uppercase tracking-[0.25em] text-white/20 hover:text-white/40 transition-colors duration-300"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>

        {/* Accent rule */}
        <div className="w-full h-[1px] bg-[#FF2D78]/15 mb-16" />

        {/* Quote — HUGE, full width, italic serif */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-8"
        >
          <p
            className="font-serif italic text-white/70 leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
          >
            &ldquo;Dubai-based pop sensation&rdquo;
          </p>
        </motion.blockquote>

        {/* Attribution — accent pink, all caps */}
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="block text-center text-[12px] uppercase tracking-[0.35em] text-[#FF2D78] font-sans not-italic"
        >
          — DubaiNight.com
        </motion.cite>
      </div>

      {/* Bottom accent rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#FF2D78]/20" />
    </section>
  );
}
