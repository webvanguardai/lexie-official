"use client";

import { motion } from "framer-motion";

const shows = [
  { date: "APR 15", venue: "Dubai Opera", city: "Dubai, UAE" },
  { date: "MAY 22", venue: "Under the Bridge", city: "London, UK" },
  { date: "JUN 08", venue: "Manchester Academy", city: "Manchester, UK" },
  { date: "JUL 12", venue: "Expo City Festival", city: "Dubai, UAE" },
];

export default function Shows() {
  return (
    <section id="shows" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header — bleeds right */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-white leading-[0.85] mb-16 -mr-[15vw] text-right"
          style={{ fontSize: "clamp(5rem, 12vw, 12rem)" }}
        >
          Live
        </motion.h2>

        {/* Show list — setlist style */}
        <div className="flex flex-col">
          {shows.map((show, i) => (
            <motion.div
              key={show.venue}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 py-6 border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
            >
              {/* Left: date + venue + city */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 flex-1">
                <span className="font-mono text-[13px] text-white/50 min-w-[70px] tracking-wide">
                  {show.date}
                </span>
                <span className="font-serif italic text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300">
                  {show.venue}
                </span>
                <span className="font-sans text-[12px] text-white/30 tracking-wide">
                  {show.city}
                </span>
              </div>

              {/* Right: tickets */}
              <a
                href="#contact"
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/15 px-5 py-2 hover:border-accent hover:text-accent transition-all duration-300 whitespace-nowrap"
              >
                Tickets →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
