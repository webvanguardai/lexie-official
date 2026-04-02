"use client";

import { motion } from "framer-motion";

const shows = [
  { date: "Jun 14", year: "2025", venue: "Dubai Opera", city: "Dubai, UAE" },
  { date: "Jul 5", year: "2025", venue: "Coca Cola Arena", city: "Dubai, UAE" },
  { date: "Aug 22", year: "2025", venue: "O2 Academy Brixton", city: "London, UK" },
  { date: "Sep 10", year: "2025", venue: "Manchester Academy", city: "Manchester, UK" },
];

export default function Shows() {
  return (
    <section id="shows" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FF2D78] mb-6"
        >
          Live
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-14 text-white"
        >
          Shows
        </motion.h2>

        <div className="flex flex-col">
          {shows.map((show, i) => (
            <motion.div
              key={`${show.venue}-${show.date}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 py-7 border-b border-white/5 hover:border-white/15 transition-colors duration-300"
            >
              {/* Date */}
              <div className="min-w-[100px]">
                <p className="text-lg font-serif italic text-white">{show.date}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-sans">
                  {show.year}
                </p>
              </div>

              {/* Venue + City */}
              <div className="flex-1">
                <h3 className="font-serif italic text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300">
                  {show.venue}
                </h3>
                <p className="text-[12px] text-white/30 font-sans tracking-wide mt-0.5">
                  {show.city}
                </p>
              </div>

              {/* Tickets button */}
              <a
                href="#contact"
                className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] uppercase tracking-[0.15em] font-sans hover:bg-[#FF2D78] hover:border-[#FF2D78] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Tickets
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[12px] text-white/25 font-sans tracking-wide mt-10"
        >
          Follow{" "}
          <a
            href="https://instagram.com/lexieofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF2D78]/70 hover:text-[#FF2D78] transition-colors"
          >
            @lexieofficial
          </a>{" "}
          for announcements
        </motion.p>
      </div>
    </section>
  );
}
