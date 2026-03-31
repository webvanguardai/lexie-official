"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  "Warner Music",
  "Island Records",
  "Coca Cola Arena",
  "Dubai Opera",
];

const stats = [
  { value: "20K+", label: "Followers" },
  { value: "3", label: "Continents" },
  { value: "Arena", label: "Stages" },
  { value: "100%", label: "Independent" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4 text-center"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-center mb-16"
        >
          The Story
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden glow-pink-sm">
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop"
                alt="LEXIE portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Pull quote */}
            <blockquote className="font-serif italic text-2xl md:text-3xl text-accent-soft mb-8 leading-relaxed">
              &ldquo;Airing all the dirty laundry via song.&rdquo;
            </blockquote>

            <div className="space-y-4 text-white/70 font-sans leading-relaxed mb-8">
              <p>
                LEXIE is a pop singer-songwriter with a pinch of soul and a touch of country,
                currently based in Dubai, UAE. Previously signed with Warner Music and Island Records
                in the UK, she has built an impressive career spanning three continents.
              </p>
              <p>
                After relocating to Dubai in 2021, LEXIE quickly established herself as one of the
                city&apos;s most in-demand live performers — gracing stages at the Coca Cola Arena,
                Dubai Opera, and EXPO City. She also supported The Saturdays on their UK arena tour.
              </p>
              <p>
                Now fiercely independent, LEXIE continues to write, record, and perform on her own
                terms — turning heartbreak, humor, and real life into unforgettable songs.
              </p>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-[0.15em] font-sans text-white/60"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-serif italic text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-sans">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
