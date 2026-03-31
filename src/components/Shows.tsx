"use client";

import { motion } from "framer-motion";

const shows = [
  {
    date: "TBA",
    month: "2025",
    title: "Dubai 2025",
    venue: "Venue TBA",
    location: "Dubai, UAE",
  },
  {
    date: "TBA",
    month: "2025",
    title: "UK Tour 2025",
    venue: "Multiple Venues",
    location: "United Kingdom",
  },
  {
    date: "TBA",
    month: "2025",
    title: "Upcoming Show",
    venue: "Venue TBA",
    location: "TBA",
  },
];

export default function Shows() {
  return (
    <section id="shows" className="section-padding relative overflow-hidden">
      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4">
            Tour Dates
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl">
            Live
          </h2>
        </motion.div>

        <div className="space-y-4">
          {shows.map((show, i) => (
            <motion.div
              key={show.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                {/* Date block */}
                <div className="text-center min-w-[60px]">
                  <p className="text-xl font-serif italic text-accent">{show.date}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-sans">
                    {show.month}
                  </p>
                </div>

                <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />

                {/* Info */}
                <div>
                  <h3 className="font-serif italic text-lg text-white group-hover:text-accent-soft transition-colors">
                    {show.title}
                  </h3>
                  <p className="text-sm text-muted font-sans">
                    {show.venue} · {show.location}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="px-5 py-2 border border-accent/30 text-accent text-xs uppercase tracking-[0.15em] font-sans rounded-full hover:bg-accent hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Get Tickets
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted font-sans mt-10"
        >
          Stay tuned for upcoming dates. Follow{" "}
          <a
            href="https://instagram.com/lexieofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-soft transition-colors"
          >
            @lexieofficial
          </a>{" "}
          for announcements.
        </motion.p>
      </div>
    </section>
  );
}
