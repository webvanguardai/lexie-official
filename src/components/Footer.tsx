"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/lexieofficial",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/lexie",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/ae/album/1880918233",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.175a10.56 10.56 0 00-1.564-.107C17.368.028 16.6.01 15.824.002 14.327-.01 12.83 0 11.333.002c-1.196 0-2.392-.002-3.588.011-.655.007-1.3.04-1.945.139a4.94 4.94 0 00-1.913.713c-1.088.71-1.834 1.68-2.16 2.955a8.897 8.897 0 00-.254 2.071c-.04.795-.055 1.59-.059 2.386-.01 1.497 0 2.994.001 4.491 0 1.196-.002 2.393.011 3.589.007.654.039 1.299.138 1.944.16.987.558 1.847 1.193 2.584.73.846 1.663 1.37 2.768 1.575.666.124 1.339.162 2.012.176.796.02 1.592.038 2.388.04 1.496.006 2.993.001 4.49 0 1.196.002 2.393.004 3.589-.012.655-.01 1.3-.044 1.944-.143 1.078-.167 2.02-.612 2.815-1.32.766-.683 1.267-1.533 1.5-2.543.148-.637.196-1.285.209-1.936.02-.794.036-1.589.039-2.384.009-1.83.003-3.66.001-5.49z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-16">
      {/* Pink line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF2D78]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          {/* Left — Big name */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif italic text-6xl md:text-7xl lg:text-8xl text-gradient-pink-gold mb-4"
            >
              LEXIE
            </motion.p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-sans">
              Pop · Soul · Country · Dubai
            </p>
          </div>

          {/* Right — Social icons with labels */}
          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/30 hover:text-[#FF2D78] transition-colors duration-300"
              >
                {social.icon}
                <span className="text-[11px] uppercase tracking-[0.15em] font-sans hidden sm:inline">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[11px] text-white/20 font-sans tracking-wide">
            © 2025 LEXIE. All Rights Reserved. Dubai, UAE.
          </p>
          <p className="text-[10px] text-[#FF2D78]/40 font-sans tracking-wide">
            Website by True Love Creative
          </p>
        </div>
      </div>
    </footer>
  );
}
