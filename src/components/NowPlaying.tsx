"use client";

import { motion } from "framer-motion";

export default function NowPlaying() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/[0.08] bg-white/[0.03]">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="label-tiny text-white/40 mb-6"
            >
              — Now Playing
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif italic leading-[0.95] mb-6 text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Everything Happens
              <br />
              For A Reason
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/30 mb-8"
            >
              Latest single · Available everywhere · 2024
            </motion.p>

            {/* Streaming links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
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
                YouTube Music
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Artwork square */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[320px] xl:w-[380px] flex-shrink-0"
          >
            <div
              className="relative w-full aspect-square overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #FF2D78 0%, #6B0F2E 40%, #0A0008 100%)",
              }}
            >
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
