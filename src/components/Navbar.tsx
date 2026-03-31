"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Music", href: "#music" },
  { label: "Shows", href: "#shows" },
  { label: "About", href: "#about" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Thin accent line at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#FF2D78] z-[60]" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0008]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
          {/* Logo — left aligned */}
          <a
            href="#"
            className="text-2xl font-serif italic tracking-wider text-gradient-pink-gold"
          >
            LEXIE
          </a>

          {/* Desktop Links — right aligned, no button */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-sans uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            {/* Sharp text link with arrow instead of rounded button */}
            <a
              href="https://music.apple.com/ae/album/1880918233"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.2em] text-[#FF2D78] hover:text-white transition-colors duration-300 ml-4 border-b border-[#FF2D78]/40 pb-0.5"
            >
              Stream
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — full-screen black, giant italic font */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0008] flex flex-col justify-center px-8"
          >
            {/* Grain */}
            <div className="grain-overlay" />

            {/* Pink glow */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF2D78]/10 rounded-full blur-[200px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-serif italic text-5xl sm:text-6xl text-white/90 hover:text-[#FF2D78] transition-colors duration-300 py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Stream link at bottom */}
            <motion.a
              href="https://music.apple.com/ae/album/1880918233"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 mt-12 flex items-center gap-3 text-[12px] font-sans uppercase tracking-[0.25em] text-[#FF2D78]"
            >
              <div className="w-8 h-[2px] bg-[#FF2D78]" />
              Stream Now →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
