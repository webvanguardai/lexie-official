"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1600&q=80&auto=format&fit=crop"
          alt="LEXIE performing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/60" />

      {/* Pink glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Light leak left */}
      <div className="light-leak top-1/4 -left-20 w-[300px] h-[300px] bg-accent/10" />
      {/* Light leak right */}
      <div className="light-leak top-1/3 -right-20 w-[250px] h-[250px] bg-purple-500/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.4em] text-accent-soft mb-6"
        >
          Singer · Songwriter · Performer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6"
        >
          <span className="text-gradient-pink-gold">Pop. Soul. Country.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-white/70 max-w-xl mb-10 font-sans"
        >
          LEXIE — Dubai&apos;s singer-songwriter. Formerly Warner Music &amp; Island Records.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://music.apple.com/ae/album/1880918233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-accent text-white font-sans text-sm uppercase tracking-[0.15em] rounded-full hover:bg-accent/80 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,45,120,0.5)] flex items-center gap-2"
          >
            Listen Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a
            href="#music"
            className="px-8 py-3.5 border border-white/30 text-white font-sans text-sm uppercase tracking-[0.15em] rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Watch Latest Video
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
