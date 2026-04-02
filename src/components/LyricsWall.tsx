"use client";

import { motion } from "framer-motion";

const lyrics = [
  {
    text: "you kept every secret",
    size: "clamp(2.5rem, 7vw, 6rem)",
    opacity: 0.9,
  },
  {
    text: "except the one that mattered",
    size: "clamp(1.5rem, 4vw, 3.5rem)",
    opacity: 0.5,
  },
  {
    text: "i drove past your street at 3am",
    size: "clamp(2rem, 10vw, 8rem)",
    opacity: 0.85,
  },
  {
    text: "just to feel something",
    size: "clamp(1.2rem, 3vw, 2rem)",
    opacity: 0.4,
  },
  {
    text: "this is not a love song",
    size: "clamp(2.5rem, 8vw, 7rem)",
    opacity: 0.75,
  },
  {
    text: "this is a warning",
    size: "clamp(1.8rem, 5vw, 4rem)",
    opacity: 0.6,
  },
];

export default function LyricsWall() {
  return (
    <section className="relative w-full overflow-hidden bg-cream py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {lyrics.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="font-serif italic text-[#0A0008] leading-[1.1] mb-2 md:mb-3"
            style={{
              fontSize: line.size,
              opacity: line.opacity,
            }}
          >
            {line.text}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#0A0008]/40 mt-16"
        >
          From the upcoming album — 2025
        </motion.p>
      </div>
    </section>
  );
}
