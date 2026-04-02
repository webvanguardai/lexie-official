"use client";

import { motion } from "framer-motion";

const releases = [
  {
    title: "Everything Happens For A Reason",
    type: "Single",
    year: "2024",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    title: "Plane Jane",
    type: "Single",
    year: "2024",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    title: "Diary of a Disastrous Dating Life",
    type: "Album",
    year: "2023",
    link: "https://music.apple.com/ae/album/1880918233",
  },
];

export default function Discography() {
  return (
    <section id="music" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FF2D78] mb-6"
        >
          Discography
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-14 text-white"
        >
          Music
        </motion.h2>

        <div className="flex flex-col">
          {releases.map((release, i) => (
            <motion.a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex items-center gap-6 md:gap-10 py-7 border-b border-white/5 hover:border-white/15 transition-colors duration-300"
            >
              {/* Title */}
              <h3 className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/90 group-hover:text-[#FF2D78] transition-colors duration-300 flex-1">
                {release.title}
              </h3>

              {/* Type */}
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] font-sans text-white/30">
                {release.type}
              </span>

              {/* Year */}
              <span className="hidden sm:inline-block font-sans text-[11px] text-white/20 tracking-wide min-w-[40px]">
                {release.year}
              </span>

              {/* Arrow */}
              <svg
                className="w-5 h-5 text-white/15 group-hover:text-[#FF2D78] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
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
