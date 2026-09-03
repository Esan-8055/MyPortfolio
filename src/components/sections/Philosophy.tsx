"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Compass } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { easeOutExpo } from "@/lib/motion";
import { ScrollMask } from "@/components/ui/scroll-mask";

export function Philosophy() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#09090b] text-white border-b border-[#222226] select-none">
        <ScrollMask bgImageSrc="/vision-board.jpeg" bgImageAlt="Jegatheesan Vision Board">
          {/* Center Liquid Glass Card (Clear Water-Refractive Glass) */}
          <div className="relative p-5 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-white/[0.04] backdrop-blur-[4px] backdrop-saturate-125 border border-white/40 shadow-[inset_0_1px_3px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(0,0,0,0.3),0_20px_60px_rgba(0,0,0,0.6)] text-center overflow-hidden">

            {/* Glossy Liquid Specular Sheen & Caustics */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-white/25 via-white/5 to-transparent rounded-full blur-xl pointer-events-none -rotate-12" />
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-[#3b82f6]/25 to-transparent rounded-full blur-xl pointer-events-none" />

            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.10] backdrop-blur-md border border-white/35 text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#93c5fd] uppercase mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
              <span>DEVELOPMENT MANIFESTO &amp; VISION</span>
            </div>

            {/* Giant Manifesto Headline */}
            <h2 className="font-heavy text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04] max-w-4xl mx-auto mb-4 sm:mb-6 uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,1)]">
              <span>BUILD. </span>
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                SOLVE.{" "}
              </span>
              <span className="font-serif-accent font-normal italic text-white lowercase tracking-normal drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                learn.{" "}
              </span>
              <span className="bg-gradient-to-r from-[#ffffff] via-[#93c5fd] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                REPEAT.
              </span>
            </h2>

            {/* Philosophy Body */}
            <p className="text-xs sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-semibold mb-6 sm:mb-8 drop-shadow-[0_3px_15px_rgba(0,0,0,1)]">
              {personalInfo.philosophySub}
            </p>

            {/* Action Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.10] backdrop-blur-md border border-white/35 text-xs font-mono font-bold tracking-wider text-white uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                <span>{personalInfo.tagline}</span>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2457d6]/90 hover:bg-[#2457d6] text-white text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-xl active:scale-95 border border-white/40 backdrop-blur-md"
              >
                <Maximize2 size={13} />
                <span>VIEW FULL VISION BOARD</span>
              </button>
            </div>

          </div>
        </ScrollMask>
      </section>

      {/* Vision Board Fullscreen Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-[#111114] border border-white/20 rounded-2xl shadow-2xl z-10 flex flex-col overflow-hidden my-auto text-white"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#111114]/90 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <Compass size={16} className="text-[#3b82f6]" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Jegatheesan — Vision Board &amp; Purpose
                    </h3>
                    <p className="text-[11px] font-mono text-[#9ca3af]">
                      To build. To impact. To inspire. (HYBIX IT Solutions)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* High-Resolution Vision Board Image */}
              <div className="relative w-full h-[65vh] sm:h-[72vh] bg-black">
                <Image
                  src="/vision-board.jpeg"
                  alt="Jegatheesan Authentic Vision Board"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </div>

              {/* Footer info strip */}
              <div className="p-3.5 px-6 border-t border-white/10 bg-[#0c0c0e] flex items-center justify-between text-xs font-mono text-[#9ca3af]">
                <span>Authentic Engineering Goals &amp; Projects Blueprint</span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-white hover:text-[#3b82f6] font-bold cursor-pointer"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
