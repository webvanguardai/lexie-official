"use client";

const socials = [
  { label: "Instagram", href: "https://instagram.com/lexieofficial" },
  { label: "Spotify", href: "https://open.spotify.com/artist/lexie" },
  { label: "Apple Music", href: "https://music.apple.com/ae/album/1880918233" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <p className="font-serif italic text-2xl text-white mb-1">LEXIE</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-sans">
              Pop · Soul · Country · Dubai
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.15em] font-sans text-white/25 hover:text-white/60 transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[10px] text-white/15 font-sans tracking-wide">
            © 2025 LEXIE. All Rights Reserved.
          </p>
          <a
            href="https://truelovecreative.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white/15 font-sans tracking-wide hover:text-white/30 transition-colors"
          >
            Website by True Love Creative
          </a>
        </div>
      </div>
    </footer>
  );
}
