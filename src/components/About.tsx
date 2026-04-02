"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "20K+", label: "Followers" },
  { value: "3", label: "Continents" },
  { value: "Arena", label: "Stages" },
  { value: "100%", label: "Independent" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0A0008]">
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
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop"
            alt="LEXIE portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0008]/30 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008] via-[#0A0008]/20 to-transparent lg:hidden" />
        </motion.div>

        {/* RIGHT — Content */}
        <div className="flex-1 px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-32 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FF2D78] mb-6"
          >
            The Story
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p
              className="font-serif italic text-white/90 leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              &ldquo;Airing all the dirty laundry via song.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-5 text-white/50 font-sans leading-[1.8] text-[15px] mb-14 max-w-xl"
          >
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
          </motion.div>

          {/* Stats */}
          <div className="w-full h-[1px] bg-white/10 mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <p className="text-3xl md:text-4xl font-serif italic text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
