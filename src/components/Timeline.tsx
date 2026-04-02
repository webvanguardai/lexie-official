"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "Warner Music / Island Records",
    desc: "Signed to Warner Music / Island Records, London",
  },
  {
    year: "2019",
    title: "UK Arena Tour",
    desc: "Supporting The Saturdays — UK Arena Tour",
  },
  {
    year: "2021",
    title: "Dubai Chapter",
    desc: "Relocated to Dubai · Built a new stage",
  },
  {
    year: "2024",
    title: "Gone Independent",
    desc: "Everything on her own terms",
  },
];

export default function Timeline() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="label-tiny text-accent mb-16"
        >
          The Journey
        </motion.p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-[42px] left-0 right-0 h-[1px] bg-white/15" />

          <div className="grid grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="relative pt-0"
              >
                {/* Year */}
                <p
                  className="font-serif text-accent leading-none mb-4"
                  style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                >
                  {m.year}
                </p>

                {/* Dot on line */}
                <div className="relative mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Title + desc */}
                <p className="font-sans text-[13px] font-semibold text-white mb-2">
                  {m.title}
                </p>
                <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-10">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                {i < milestones.length - 1 && (
                  <div className="w-[1px] flex-1 bg-white/15 mt-2" />
                )}
              </div>
              <div className="pb-2">
                <p className="font-serif text-accent text-2xl leading-none mb-2">
                  {m.year}
                </p>
                <p className="font-sans text-[13px] font-semibold text-white mb-1">
                  {m.title}
                </p>
                <p className="font-sans text-[12px] text-white/50">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
