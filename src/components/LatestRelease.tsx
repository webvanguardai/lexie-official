"use client";

import { motion } from "framer-motion";

export default function LatestRelease() {
  return (
    <section
      id="release"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-white/[0.03]"
    >
      {/* Watermark */}
      <span className="watermark-number -top-8 right-8 hidden lg:block">01</span>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT — 60% */}
          <div className="flex-1 lg:w-[60%]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-tiny text-accent mb-6"
            >
              New Single
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif italic leading-[0.95] mb-8 text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              Everything
              <br />
              Happens For
              <br />
              A Reason
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-4 mb-10 max-w-lg"
            >
              <p className="font-sans text-[14px] leading-[1.8] text-white/45">
                A soulful anthem about trusting the journey, even when the path
                feels uncertain. Written in Dubai, recorded between London and
                the UAE.
              </p>
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/20">
                Single · 2024 · Pop / Soul
              </p>
            </motion.div>

            {/* Platform links as text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 text-[12px] font-sans"
            >
              <a
                href="https://open.spotify.com/artist/lexie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-300"
              >
                Spotify
              </a>
              <span className="text-white/15">·</span>
              <a
                href="https://music.apple.com/ae/album/1880918233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors duration-300"
              >
                Apple Music
              </a>
              <span className="text-white/15">·</span>
              <a
                href="#"
                className="text-white/40 hover:text-accent transition-colors duration-300"
              >
                YouTube
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Artwork square */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[40%] flex-shrink-0"
          >
            <div className="relative w-full aspect-square max-w-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/70 via-accent/15 to-bg" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="label-tiny text-white/50 mb-3">LEXIE · 2024</p>
                <p className="font-serif italic text-2xl leading-tight text-white">
                  Everything
                  <br />
                  Happens For
                  <br />A Reason
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
