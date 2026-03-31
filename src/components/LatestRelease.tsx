"use client";

import { motion } from "framer-motion";

export default function LatestRelease() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4 text-center"
        >
          Latest Release
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Album Artwork — CSS Generated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            {/* Vinyl record behind */}
            <div className="absolute top-4 -right-8 w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 vinyl-spin-slow">
              <div className="absolute inset-[35%] rounded-full bg-accent/20 border border-accent/10" />
              <div className="absolute inset-[45%] rounded-full bg-bg" />
              {/* Grooves */}
              <div className="absolute inset-[15%] rounded-full border border-white/[0.03]" />
              <div className="absolute inset-[20%] rounded-full border border-white/[0.03]" />
              <div className="absolute inset-[25%] rounded-full border border-white/[0.03]" />
              <div className="absolute inset-[30%] rounded-full border border-white/[0.03]" />
            </div>

            {/* Album cover */}
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-lg overflow-hidden glow-pink-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-900 to-bg" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent-soft/70 mb-2">LEXIE</p>
                <p className="font-serif italic text-lg md:text-xl leading-tight text-white">
                  Everything Happens<br />For A Reason
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              Everything Happens<br />
              <span className="text-accent">For A Reason</span>
            </h2>
            <p className="text-muted font-sans text-sm mb-8 max-w-md">
              The latest single from LEXIE — a soulful anthem about trusting the journey,
              even when the path feels uncertain. Out now on all platforms.
            </p>

            {/* Streaming buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://open.spotify.com/artist/lexie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-sans hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                Spotify
              </a>
              <a
                href="https://music.apple.com/ae/album/1880918233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-sans hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#FC3C44]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.175a10.56 10.56 0 00-1.564-.107C17.368.028 16.6.01 15.824.002 14.327-.01 12.83 0 11.333.002c-1.196 0-2.392-.002-3.588.011-.655.007-1.3.04-1.945.139a4.94 4.94 0 00-1.913.713c-1.088.71-1.834 1.68-2.16 2.955a8.897 8.897 0 00-.254 2.071c-.04.795-.055 1.59-.059 2.386-.01 1.497 0 2.994.001 4.491 0 1.196-.002 2.393.011 3.589.007.654.039 1.299.138 1.944.16.987.558 1.847 1.193 2.584.73.846 1.663 1.37 2.768 1.575.666.124 1.339.162 2.012.176.796.02 1.592.038 2.388.04 1.496.006 2.993.001 4.49 0 1.196.002 2.393.004 3.589-.012.655-.01 1.3-.044 1.944-.143 1.078-.167 2.02-.612 2.815-1.32.766-.683 1.267-1.533 1.5-2.543.148-.637.196-1.285.209-1.936.02-.794.036-1.589.039-2.384.009-1.83.003-3.66.001-5.49zM11.727 17.958c-.084.046-.17.074-.258.074-.088 0-.178-.017-.268-.054l-.003-.001a.591.591 0 01-.253-.187.61.61 0 01-.096-.334v-6.49a.6.6 0 01.605-.612h.003a.6.6 0 01.6.612v5.282c.418-.244.854-.48 1.295-.706a12.465 12.465 0 011.315-.592c.43-.163.859-.303 1.28-.417.42-.114.834-.188 1.232-.218a.62.62 0 01.466.16c.126.12.19.283.19.49v.156a.66.66 0 01-.174.472.643.643 0 01-.46.19c-.333.028-.675.096-1.018.197a9.33 9.33 0 00-1.052.387c-.36.157-.719.335-1.076.533-.357.198-.692.386-1.003.562-.313.176-.6.33-.864.458a4.65 4.65 0 01-.66.285zm5.792-6.12a.65.65 0 01-.18.477.617.617 0 01-.458.19c-.359.026-.724.098-1.094.216-.37.118-.736.262-1.094.433-.36.17-.709.358-1.048.563-.34.206-.655.402-.946.59-.292.186-.556.352-.792.496a4.2 4.2 0 01-.605.316c-.075.032-.15.05-.225.05-.075 0-.15-.015-.225-.044-.15-.058-.225-.2-.225-.424V8.23c0-.237.063-.415.188-.532a.666.666 0 01.453-.18c.35-.021.708-.094 1.072-.218.364-.124.724-.27 1.082-.442.357-.17.7-.357 1.028-.558.328-.2.627-.39.897-.57.27-.18.506-.336.708-.468.201-.132.35-.216.445-.252a.41.41 0 01.15-.03.32.32 0 01.264.123.48.48 0 01.1.316v6.882z"/></svg>
                Apple Music
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-sans hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
