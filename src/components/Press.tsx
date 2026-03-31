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
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-sans uppercase tracking-[0.4em] text-muted mb-12 text-center"
        >
          As Seen In
        </motion.p>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12"
        >
          {pressLogos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-sm md:text-base font-sans uppercase tracking-[0.2em] text-white/30 hover:text-white/50 transition-colors duration-300"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-serif italic text-xl md:text-2xl text-white/60 mb-3">
            &ldquo;Dubai-based pop sensation&rdquo;
          </p>
          <cite className="text-xs uppercase tracking-[0.3em] text-accent font-sans not-italic">
            — DubaiNight.com
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
