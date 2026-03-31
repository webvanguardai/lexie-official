"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#0A0008]">

      {/* FOTO REAL DE LEXIE — paralax */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/lexie-hero.jpg"
          alt="LEXIE"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Gradiente oscuro — más dramático, toca los bordes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0008] via-[#0A0008]/60 to-[#0A0008]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0008]/80 via-transparent to-[#0A0008]/80" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Línea horizontal cruda — elemento rebelde */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF2D78]" />

      {/* Glow rosa desde abajo — más agresivo */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#FF2D78]/15 to-transparent pointer-events-none" />

      {/* CONTENIDO — layout asimétrico, texto izquierda */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-16 sm:pb-20"
      >
        {/* Etiqueta cruda superior */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[2px] bg-[#FF2D78]" />
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#FF2D78]">
            Warner Music · Island Records · Dubai
          </span>
        </motion.div>

        {/* Nombre — ENORME, crudo, fuera del centro */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic leading-[0.85] mb-4"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            background: "linear-gradient(135deg, #ffffff 0%, #FFB3D1 50%, #FF2D78 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LEXIE.
        </motion.h1>

        {/* Tagline — dos líneas, tipografía mixta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 mb-10"
        >
          <p
            className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-tight max-w-md"
          >
            "Airing all the dirty laundry via song."
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/40 sm:pb-1">
            Pop · Soul · Country
          </p>
        </motion.div>

        {/* CTAs — estilo más crudo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://music.apple.com/ae/album/1880918233"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#FF2D78] text-white font-sans text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#FF2D78] transition-all duration-300"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
          >
            Stream Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-7 py-4 border border-white/20 text-white/70 font-sans text-[13px] uppercase tracking-[0.2em] hover:border-[#FF2D78]/60 hover:text-white transition-all duration-300"
          >
            The Story →
          </a>
        </motion.div>
      </motion.div>

      {/* Número de sección — esquina superior derecha */}
      <div className="absolute top-24 right-6 sm:right-12 flex flex-col items-center gap-2 z-10">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
          001 / Hero
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 sm:right-12 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF2D78]/60 to-transparent" />
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
