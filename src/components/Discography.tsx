"use client";

import { motion } from "framer-motion";

const releases = [
  {
    num: "01",
    title: "Diary of a Disastrous Dating Life",
    type: "Album",
    year: "2023",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    num: "02",
    title: "Plane Jane",
    type: "Single",
    year: "2024",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    num: "03",
    title: "Everything Happens For A Reason",
    type: "Single",
    year: "2024",
    link: "https://music.apple.com/ae/album/1880918233",
  },
];

export default function Discography() {
  return (
    <section id="music" className="relative section-padding overflow-hidden">
      {/* Grain */}
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section counter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-counter"
        >
          <div className="section-counter-line" />
          <span className="section-counter-text">003 / Discography</span>
        </motion.div>

        {/* Title — left aligned */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-16 text-white"
        >
          Music
        </motion.h2>

        {/* Editorial horizontal list */}
        <div className="flex flex-col">
          {releases.map((release, i) => (
            <motion.a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex items-center gap-6 md:gap-10 py-8 border-b border-white/5 hover:border-[#FF2D78]/30 transition-all duration-500"
            >
              {/* Hover accent line on left */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF2D78] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Number */}
              <span className="font-sans text-[13px] text-white/20 tracking-[0.15em] pl-4 md:pl-6 min-w-[40px]">
                {release.num}
              </span>

              {/* Title — big serif */}
              <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-white group-hover:text-[#FF2D78] transition-colors duration-300 flex-1">
                {release.title}
              </h3>

              {/* Type badge — sharp rectangle */}
              <span className="hidden sm:inline-block px-4 py-1.5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-sans text-white/40 group-hover:border-[#FF2D78]/40 group-hover:text-[#FF2D78]/70 transition-all duration-300">
                {release.type}
              </span>

              {/* Year */}
              <span className="hidden sm:inline-block font-sans text-[12px] text-white/25 tracking-wide min-w-[50px]">
                {release.year}
              </span>

              {/* Arrow */}
              <svg
                className="w-5 h-5 text-white/20 group-hover:text-[#FF2D78] group-hover:translate-x-1 transition-all duration-300 mr-4 md:mr-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
