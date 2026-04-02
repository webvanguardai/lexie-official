"use client";

import { motion } from "framer-motion";

const releases = [
  {
    title: "Everything Happens For A Reason",
    type: "Single",
    year: "2024",
    gradient: "from-accent/60 via-accent/15 to-bg",
    large: true,
  },
  {
    title: "Plane Jane",
    type: "Single",
    year: "2024",
    gradient: "from-purple-800/50 via-purple-900/20 to-bg",
    large: false,
  },
  {
    title: "Diary of a Disastrous Dating Life",
    type: "Album",
    year: "2023",
    gradient: "from-amber-700/40 via-amber-900/15 to-bg",
    large: false,
  },
];

export default function Discography() {
  return (
    <section id="music" className="relative section-padding overflow-hidden">
      {/* Watermark */}
      <span className="watermark-number top-0 left-8 hidden lg:block">03</span>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-tiny text-accent mb-6"
        >
          Discography
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-16 text-white"
        >
          Music
        </motion.h2>

        {/* Asymmetric grid: 1 large (3 cols) + 2 small (1 col each) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {releases.map((release, i) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative aspect-square overflow-hidden cursor-pointer ${
                release.large ? "md:col-span-3" : "md:col-span-1"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${release.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p className="label-tiny text-white/40 mb-2">
                  {release.type} · {release.year}
                </p>
                <h3
                  className={`font-serif italic text-white leading-tight group-hover:text-accent transition-colors duration-300 ${
                    release.large
                      ? "text-2xl md:text-3xl lg:text-4xl"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {release.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
