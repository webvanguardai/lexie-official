"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header: "Bookings" + "& Press" in lighter */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif italic leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          <span className="text-white">Bookings</span>
          <span className="text-white/30">{" "}& Press</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-sans text-[14px] leading-[1.8] text-white/40 mb-14 max-w-md"
        >
          For booking enquiries, press requests and collaborations.
        </motion.p>

        <motion.form
          action="https://formspree.io/f/xpwzgkqn"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-0"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input-raw"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input-raw"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="input-raw resize-none"
          />
          <div className="pt-10">
            <button
              type="submit"
              className="group relative font-sans text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-300 pb-2 bg-transparent border-none cursor-pointer"
            >
              Send Message →
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500" />
            </button>
          </div>
        </motion.form>
      </div>

      {/* Footer embedded in contact */}
      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/[0.06]">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-sans tracking-wide text-white/20">
          <span>LEXIE © 2025</span>
          <span>·</span>
          <span>Dubai, UAE</span>
          <span>·</span>
          <a
            href="https://instagram.com/lexieofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-300"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://open.spotify.com/artist/lexie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-300"
          >
            Spotify
          </a>
          <span>·</span>
          <a
            href="https://music.apple.com/ae/album/1880918233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-300"
          >
            Apple Music
          </a>
          <span>·</span>
          <a
            href="https://truelovecreative.es"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors duration-300"
          >
            Website by True Love Creative
          </a>
        </div>
      </div>
    </section>
  );
}
