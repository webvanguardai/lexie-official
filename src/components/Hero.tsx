"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg">
      {/* ── Desktop: split layout ── */}
      {/* Left text side */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 w-[45%] flex-col justify-end px-12 xl:px-20 pb-24 z-20">
        {/* Label with rose line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-10 h-[1px] bg-accent" />
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
            Dubai · UAE
          </span>
        </motion.div>

        {/* LEXIE massive */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-white leading-[0.82] -ml-1"
          style={{ fontSize: "clamp(6rem, 12vw, 11rem)" }}
        >
          LEX
          <br />
          IE
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full h-[1px] bg-white/10 origin-left my-7"
        />

        {/* Genre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 mb-5"
        >
          Pop · Soul · Country
        </motion.p>

        {/* Single title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="font-serif italic text-xl text-white/60 mb-10"
        >
          Everything Happens For A Reason
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center gap-8"
        >
          <a
            href="https://music.apple.com/ae/album/1880918233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white font-sans text-[10px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-300"
          >
            Listen Now
            <span className="text-xs">→</span>
          </a>
          <a
            href="#release"
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            Scroll
          </a>
        </motion.div>
      </div>

      {/* Right photo — desktop */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]">
        <Image
          src="/lexie-hero.jpg"
          alt="LEXIE"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="58vw"
          quality={95}
        />
        {/* Left fade gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent w-[40%]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* ── Mobile: full bleed photo + overlay ── */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src="/lexie-hero.jpg"
          alt="LEXIE"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="100vw"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      </div>

      {/* Mobile content */}
      <div className="lg:hidden relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-10 h-[1px] bg-accent" />
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40">
            Dubai · UAE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-white leading-[0.85] mb-5"
          style={{ fontSize: "clamp(5rem, 18vw, 10rem)" }}
        >
          LEXIE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4"
        >
          Pop · Soul · Country
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-serif italic text-lg text-white/60 mb-8"
        >
          Everything Happens For A Reason
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
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white font-sans text-[10px] uppercase tracking-[0.2em] hover:border-accent transition-all duration-300"
          >
            Listen Now →
          </a>
          <a
            href="#release"
            className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40"
          >
            Scroll
          </a>
        </motion.div>
      </div>
    </section>
  );
}
