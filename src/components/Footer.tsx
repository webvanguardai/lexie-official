"use client";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-sans tracking-wide text-white/20">
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
    </footer>
  );
}
