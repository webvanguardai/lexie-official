"use client";

import { motion } from "framer-motion";

const shows = [
  {
    num: "01",
    date: "TBA",
    month: "2025",
    title: "Dubai 2025",
    venue: "Venue TBA",
    location: "Dubai, UAE",
  },
  {
    num: "02",
    date: "TBA",
    month: "2025",
    title: "UK Tour 2025",
    venue: "Multiple Venues",
    location: "United Kingdom",
  },
  {
    num: "03",
    date: "TBA",
    month: "2025",
    title: "Upcoming Show",
    venue: "Venue TBA",
    location: "TBA",
  },
];

export default function Shows() {
  return (
    <section id="shows" className="relative section-padding overflow-hidden">
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Big italic "LIVE" watermark in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-white/[0.02] pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: "clamp(15rem, 30vw, 40rem)" }}
      >
        LIVE
      </div>

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
          <span className="section-counter-text">005 / Live</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-16 text-white"
        >
          Shows
        </motion.h2>

        {/* Show list — editorial horizontal rows */}
        <div className="flex flex-col">
          {shows.map((show, i) => (
            <motion.div
              key={show.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-8 border-b border-white/5 hover:border-[#FF2D78]/20 transition-all duration-500"
            >
              {/* Number on far left */}
              <span className="font-sans text-[13px] text-white/15 tracking-[0.15em] min-w-[40px]">
                {show.num}
              </span>

              {/* Date block */}
              <div className="min-w-[80px]">
                <p className="text-xl font-serif italic text-[#FF2D78]">{show.date}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-sans">
                  {show.month}
                </p>
              </div>

              {/* Vertical divider */}
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-serif italic text-xl md:text-2xl text-white group-hover:text-[#FF2D78]/80 transition-colors duration-300">
                  {show.title}
                </h3>
                <p className="text-[12px] text-white/30 font-sans tracking-wide mt-1">
                  {show.venue} · {show.location}
                </p>
              </div>

              {/* Get Tickets — sharp angled button */}
              <a
                href="#contact"
                className="px-6 py-2.5 bg-transparent border border-[#FF2D78]/30 text-[#FF2D78] text-[11px] uppercase tracking-[0.15em] font-sans hover:bg-[#FF2D78] hover:text-white transition-all duration-300 cta-sharp whitespace-nowrap"
              >
                Get Tickets
              </a>
            </motion.div>
          ))}
        </div>

        {/* Follow note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 mt-12"
        >
          <div className="w-8 h-[2px] bg-white/10" />
          <p className="text-[12px] text-white/30 font-sans tracking-wide">
            Follow{" "}
            <a
              href="https://instagram.com/lexieofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2D78] hover:text-white transition-colors"
            >
              @lexieofficial
            </a>{" "}
            for announcements
          </p>
        </motion.div>
      </div>

      {/* Bottom accent rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#FF2D78]/20" />
    </section>
  );
}
