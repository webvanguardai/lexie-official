"use client";

import { motion } from "framer-motion";

const releases = [
  {
    title: "Everything Happens For A Reason",
    type: "Single",
    year: "2024",
    gradient: "linear-gradient(135deg, #FF2D78 0%, #6B0F2E 40%, #0A0008 100%)",
    large: true,
  },
  {
    title: "Still Here",
    type: "Single",
    year: "2023",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #0A0008 100%)",
    large: false,
  },
  {
    title: "Used To Be Mine",
    type: "Single",
    year: "2022",
    gradient: "linear-gradient(135deg, #0a1a1a 0%, #0A0008 100%)",
    large: false,
  },
];

export default function Music() {
  return (
    <section id="music" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40">
            Music
          </p>
          <span className="flex-1 h-[1px] bg-accent/40" />
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
          {releases.map((release, i) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative aspect-square overflow-hidden cursor-pointer border border-transparent hover:border-accent/30 transition-colors duration-300"
              style={{ background: release.gradient }}
            >
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
