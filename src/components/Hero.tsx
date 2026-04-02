"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0008]">
      {/* ── Desktop: 50/50 split ── */}
      <div className="hidden lg:grid grid-cols-2 min-h-screen">
        {/* LEFT — Text */}
        <div className="relative flex flex-col justify-center px-12 xl:px-20 py-32 z-20">
          {/* Label: rose line + location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              Dubai · UAE
            </span>
          </motion.div>

          {/* LEXIE — serif NON-italic, massive, one line */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white leading-[0.85] whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 16vw, 14rem)" }}
          >
            LEXIE
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full h-[1px] bg-white/15 origin-left my-6"
          />

          {/* Genre left + Year right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex items-center justify-between mb-10"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              Pop · Soul · Country
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              2025
            </span>
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-serif italic text-white/60 text-xl md:text-2xl mb-12 max-w-md"
          >
            &ldquo;Airing all the dirty laundry via song.&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <a
              href="https://music.apple.com/ae/album/1880918233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white font-sans text-[10px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-300"
            >
              Listen Now
              <span className="text-xs">→</span>
            </a>
            <a
              href="#story"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              The Story ↓
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <div className="relative">
          <Image
            src="/lexie-hero.jpg"
            alt="LEXIE"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
            sizes="50vw"
            quality={95}
          />
          {/* Left fade — photo emerges from bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0008] via-transparent to-transparent w-[50%]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0008] to-transparent" />
        </div>
      </div>

      {/* ── Mobile: full bleed photo + overlay ── */}
      <div className="lg:hidden relative min-h-screen">
        <Image
          src="/lexie-hero.jpg"
          alt="LEXIE"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008] via-[#0A0008]/50 to-transparent" />

        {/* Mobile content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 sm:px-12 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              Dubai · UAE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white leading-[0.85] whitespace-nowrap mb-5"
            style={{ fontSize: "clamp(5rem, 18vw, 10rem)" }}
          >
            LEXIE
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full h-[1px] bg-white/15 origin-left mb-4"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex items-center justify-between mb-8"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              Pop · Soul · Country
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
              2025
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-serif italic text-lg text-white/60 mb-8"
          >
            &ldquo;Airing all the dirty laundry via song.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://music.apple.com/ae/album/1880918233"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white font-sans text-[10px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-300"
            >
              Listen Now →
            </a>
            <a
              href="#story"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40"
            >
              The Story ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
