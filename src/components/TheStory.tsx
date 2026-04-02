"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TheStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#0A0008]">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT — Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-[45%] h-[60vh] lg:h-auto lg:min-h-screen flex-shrink-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80"
            alt="LEXIE portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0008]/30 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008] via-[#0A0008]/20 to-transparent lg:hidden" />

          {/* Rotated label on photo */}
          <span className="absolute top-12 left-8 font-sans text-[9px] uppercase tracking-[0.4em] text-white/50 origin-top-left hidden lg:block" style={{ transform: "rotate(-90deg) translateX(-100%)" }}>
            I · The Story
          </span>
        </motion.div>

        {/* RIGHT — Content */}
        <div className="relative flex-1 px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 flex flex-col justify-center">
          {/* Watermark */}
          <span className="absolute -top-4 right-4 font-serif text-[180px] leading-none text-white/[0.04] pointer-events-none select-none hidden lg:block">
            01
          </span>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="label-tiny text-accent mb-8"
          >
            The Artist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-white/45 font-sans leading-[1.8] text-[14px] mb-14 max-w-xl"
          >
            <p>
              LEXIE is a pop singer-songwriter with a pinch of soul and a touch
              of country, currently based in Dubai, UAE. Previously signed with
              Warner Music and Island Records in the UK, she has built an
              impressive career spanning three continents.
            </p>
            <p>
              After relocating to Dubai in 2021, LEXIE quickly established
              herself as one of the city&apos;s most in-demand live performers —
              gracing stages at the Coca Cola Arena, Dubai Opera, and EXPO City.
              She also supported The Saturdays on their UK arena tour.
            </p>
            <p>
              Now fiercely independent, LEXIE continues to write, record, and
              perform on her own terms — turning heartbreak, humor, and real life
              into unforgettable songs.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="w-full h-[1px] bg-white/10 mb-8" />
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
              20K+ Followers
              <span className="mx-3 text-white/15">·</span>
              3 Continents
              <span className="mx-3 text-white/15">·</span>
              Arena Stages
              <span className="mx-3 text-white/15">·</span>
              100% Independent
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
