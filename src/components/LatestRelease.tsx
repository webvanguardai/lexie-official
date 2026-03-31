"use client";

import { motion } from "framer-motion";

export default function LatestRelease() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0008] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Aggressive pink glow from bottom-left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF2D78]/10 rounded-full blur-[250px] pointer-events-none" />

      {/* Top accent rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FF2D78]/20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section counter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-counter"
        >
          <div className="section-counter-line" />
          <span className="section-counter-text">002 / New Music</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT — Giant track title + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 lg:max-w-[60%]"
          >
            <h2
              className="font-serif italic leading-[0.9] mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              <span className="text-white">Everything</span>
              <br />
              <span className="text-white">Happens</span>
              <br />
              <span className="text-[#FF2D78]">For A Reason</span>
            </h2>

            {/* Accent rule */}
            <div className="w-full h-[1px] bg-[#FF2D78]/20 mb-8" />

            {/* Big bold quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-serif italic text-xl md:text-2xl text-white/50 mb-8 leading-relaxed max-w-lg"
            >
              &ldquo;A soulful anthem about trusting the journey, even when the path feels uncertain.&rdquo;
            </motion.blockquote>

            <p className="text-[12px] font-sans uppercase tracking-[0.25em] text-white/30 mb-10">
              Latest Single · 2024 · Pop / Soul
            </p>

            {/* Streaming platform buttons — sharp edges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://open.spotify.com/artist/lexie"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-[12px] font-sans uppercase tracking-[0.15em] text-white/70 hover:border-[#FF2D78]/50 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Spotify
              </a>
              <a
                href="https://music.apple.com/ae/album/1880918233"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-[12px] font-sans uppercase tracking-[0.15em] text-white/70 hover:border-[#FF2D78]/50 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#FC3C44]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.175a10.56 10.56 0 00-1.564-.107C17.368.028 16.6.01 15.824.002 14.327-.01 12.83 0 11.333.002c-1.196 0-2.392-.002-3.588.011-.655.007-1.3.04-1.945.139a4.94 4.94 0 00-1.913.713c-1.088.71-1.834 1.68-2.16 2.955a8.897 8.897 0 00-.254 2.071c-.04.795-.055 1.59-.059 2.386-.01 1.497 0 2.994.001 4.491 0 1.196-.002 2.393.011 3.589.007.654.039 1.299.138 1.944.16.987.558 1.847 1.193 2.584.73.846 1.663 1.37 2.768 1.575.666.124 1.339.162 2.012.176.796.02 1.592.038 2.388.04 1.496.006 2.993.001 4.49 0 1.196.002 2.393.004 3.589-.012.655-.01 1.3-.044 1.944-.143 1.078-.167 2.02-.612 2.815-1.32.766-.683 1.267-1.533 1.5-2.543.148-.637.196-1.285.209-1.936.02-.794.036-1.589.039-2.384.009-1.83.003-3.66.001-5.49z"/></svg>
                Apple Music
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-[12px] font-sans uppercase tracking-[0.15em] text-white/70 hover:border-[#FF2D78]/50 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Album art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0 w-full lg:w-[340px]"
          >
            {/* Vinyl record behind */}
            <div className="absolute top-8 -left-10 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 vinyl-spin-slow hidden lg:block">
              <div className="absolute inset-[35%] rounded-full bg-[#FF2D78]/20 border border-[#FF2D78]/10" />
              <div className="absolute inset-[45%] rounded-full bg-[#0A0008]" />
              <div className="absolute inset-[15%] rounded-full border border-white/[0.03]" />
              <div className="absolute inset-[20%] rounded-full border border-white/[0.03]" />
              <div className="absolute inset-[25%] rounded-full border border-white/[0.03]" />
            </div>

            {/* Album cover — sharp, no rounded corners */}
            <div className="relative w-full aspect-square lg:w-[340px] lg:h-[340px] overflow-hidden glow-pink-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D78] via-purple-900 to-[#0A0008]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#FF2D78]/70 mb-2 font-sans">LEXIE</p>
                <p className="font-serif italic text-lg md:text-xl leading-tight text-white">
                  Everything Happens<br />For A Reason
                </p>
              </div>
            </div>

            {/* Section number — vertical */}
            <div className="absolute -right-6 top-0 hidden lg:flex flex-col items-center gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/15 [writing-mode:vertical-rl]">
                002 / New Music
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/15 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#FF2D78]/20" />
    </section>
  );
}
