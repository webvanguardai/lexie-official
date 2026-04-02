"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0008]">
      {/* Photo */}
      <div className="absolute inset-0">
        <Image
          src="/lexie-hero.jpg"
          alt="LEXIE"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="100vw"
          quality={95}
        />
      </div>

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008] via-[#0A0008]/50 to-transparent" />

      {/* Very subtle pink glow — only here */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF2D78]/8 rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-20 sm:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 mb-5"
        >
          Pop · Soul · Country
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-white leading-[0.85] mb-6"
          style={{ fontSize: "clamp(5rem, 16vw, 14rem)" }}
        >
          LEXIE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white/70 leading-snug max-w-lg mb-10"
        >
          &ldquo;Airing all the dirty laundry via song.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://music.apple.com/ae/album/1880918233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF2D78] text-white font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A0008] transition-all duration-300"
          >
            Stream Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white/70 font-sans text-[12px] uppercase tracking-[0.2em] hover:border-white/50 hover:text-white transition-all duration-300"
          >
            The Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
