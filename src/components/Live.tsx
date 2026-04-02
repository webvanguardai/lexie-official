"use client";

import { motion } from "framer-motion";

const shows = [
  { date: "APR 15", venue: "White Dubai", city: "Dubai, UAE" },
  { date: "MAY 02", venue: "Scala", city: "London, UK" },
  { date: "MAY 08", venue: "Albert Hall Manchester", city: "Manchester, UK" },
  { date: "JUN 20", venue: "Music on The Beach", city: "Dubai, UAE" },
];

export default function Live() {
  return (
    <section id="shows" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header — bleeds right */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-white leading-[0.85] mb-4 -mr-8 lg:-mr-12 text-right"
          style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
        >
          Live
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="label-tiny text-white/40 mb-12 text-right"
        >
          Upcoming Shows
        </motion.p>

        {/* Show list — setlist style */}
        <div className="flex flex-col border-t border-white/[0.08]">
          {shows.map((show, i) => (
            <motion.div
              key={show.venue}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 py-6 border-b border-white/[0.08]"
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
