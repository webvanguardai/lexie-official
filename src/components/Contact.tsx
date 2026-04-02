"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FF2D78] mb-6"
        >
          Bookings &amp; Press
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-serif italic text-white/90 leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Work With<br />
              <span className="text-[#FF2D78]">LEXIE</span>
            </h2>

            <p className="text-white/40 font-sans leading-[1.8] text-[15px] mb-10 max-w-md">
              For bookings, collaborations, and press enquiries — get in touch.
              Available for live performances, brand partnerships,
              songwriting sessions, and media features.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@lexieofficial.com"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300 font-sans text-[14px]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@lexieofficial.com
              </a>
              <a
                href="https://instagram.com/lexieofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300 font-sans text-[14px]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @lexieofficial
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              action="https://formspree.io/f/xpwzgkqn"
              method="POST"
              className="space-y-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input-raw sm:border-r sm:border-white/10 sm:pr-6"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input-raw sm:pl-6"
                />
              </div>
              <select
                name="enquiry"
                className="input-raw appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Type of Enquiry</option>
                <option value="booking">Live Booking</option>
                <option value="collab">Collaboration</option>
                <option value="press">Press / Media</option>
                <option value="brand">Brand Partnership</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                className="input-raw resize-none"
              />
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#FF2D78] text-white text-[12px] font-sans uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A0008] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
