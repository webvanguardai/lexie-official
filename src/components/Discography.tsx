"use client";

import { motion } from "framer-motion";

const releases = [
  {
    title: "Diary of a Disastrous Dating Life",
    type: "Album",
    year: "2023",
    gradient: "from-accent via-purple-800 to-bg",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    title: "Plane Jane",
    type: "Single",
    year: "2024",
    gradient: "from-pink-600 via-rose-800 to-bg",
    link: "https://music.apple.com/ae/album/1880918233",
  },
  {
    title: "Everything Happens For A Reason",
    type: "Single",
    year: "2024",
    gradient: "from-gold via-amber-800 to-bg",
    link: "https://music.apple.com/ae/album/1880918233",
  },
];

export default function Discography() {
  return (
    <section id="music" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4">
            Discography
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl">
            Music
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {releases.map((release, i) => (
            <motion.a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative aspect-square rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(255,45,120,0.25)]">
                {/* Gradient artwork */}
                <div className={`absolute inset-0 bg-gradient-to-br ${release.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent-soft/60 font-sans mb-1">
                    LEXIE
                  </span>
                  <h3 className="font-serif italic text-xl md:text-2xl leading-tight text-white mb-3">
                    {release.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-accent font-sans">
                      {release.type}
                    </span>
                    <span className="text-xs text-muted font-sans">{release.year}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
