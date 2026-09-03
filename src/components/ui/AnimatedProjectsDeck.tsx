"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import DepthCarousel from "./DepthCarousel";

export interface DeckItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  tech: string[];
  githubUrl?: string;
  caseStudy?: any;
}

export interface AnimatedProjectsDeckProps {
  items: DeckItem[];
  onSelectProject?: (item: DeckItem) => void;
  onItemClick?: (item: DeckItem) => void;
  autoplay?: boolean;
}

export function AnimatedProjectsDeck({
  items,
  onSelectProject,
  onItemClick,
  autoplay = false,
}: AnimatedProjectsDeckProps) {
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement | null>(null);


  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  const currentItem = items[active];

  return (
    <div ref={deckRef} className="w-full max-w-6xl mx-auto py-4 select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-1 sm:p-4 relative">

        {/* ── LEFT COLUMN: High-Performance 60FPS GSAP 3D Parallax Carousel ── */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[520px] md:h-[540px] w-full flex items-center justify-center">
          <DepthCarousel
            items={items}
            activeIndex={active}
            depth={160}
            spread={70}
            tilt={14}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.18}
            blur={0}
            autoplay={true}
            autoplayDelay={3500}
            loop={true}
            cardWidth={370}
            cardHeight={480}
            radius={28}
            tint="#05060a"
            duration={600}
            ease="power2.out"
            showControls={false}
            showIndicators={false}
            onChange={(index) => setActive(index)}
            onItemClick={(index, item) => {
              const handler = onItemClick || onSelectProject;
              if (handler) handler(item);
            }}
          />
        </div>

        {/* ── RIGHT COLUMN: Content & Control Panel ──────────────────── */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6 z-20">
          
          <div className="space-y-4">


            {/* Title — Smooth Blur & Upward Motion */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${currentItem.id}`}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  const handler = onItemClick || onSelectProject;
                  if (handler) handler(currentItem);
                }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight leading-[1.08] cursor-pointer hover:text-[#2457d6] transition-colors"
              >
                {currentItem.title}
              </motion.h3>
            </AnimatePresence>

            {/* Subtitle / Domain */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`cat-${currentItem.id}`}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, delay: 0.04, ease: "easeOut" }}
                className="text-xs font-mono font-bold text-[#2457d6] uppercase tracking-wider"
              >
                {currentItem.category} · CHAPTER {currentItem.number}
              </motion.p>
            </AnimatePresence>

            {/* Quote / Description — Staggered Word-by-Word Blur Reveal */}
            <div className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed font-medium min-h-[72px] pt-1">
              <AnimatePresence mode="wait">
                <motion.div key={`desc-${currentItem.id}`}>
                  {currentItem.description.split(" ").map((word, i) => (
                    <motion.span
                      key={`${currentItem.id}-word-${i}`}
                      initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.24,
                        delay: i * 0.02,
                        ease: "easeOut",
                      }}
                      className="inline-block mr-1.5"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tech Stack Pills with Pop-In Delay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tech-${currentItem.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-1.5 pt-2"
              >
                {currentItem.tech.map((t, idx) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: idx * 0.035,
                      ease: "easeOut",
                    }}
                    className="px-2.5 py-1 rounded-md bg-[#f7f7f5] border border-[#e8e8e5] text-xs font-mono font-semibold text-[#111111] shadow-2xs hover:border-[#2457d6] transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Action & Magnetic Circular Nav Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#e8e8e5]">
            <span className="text-[11px] font-mono text-[#929292]">
              Scroll mouse or click card to explore ({active + 1} / {items.length})
            </span>

            {/* Circular Navigation Buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.12, backgroundColor: "#2457d6" }}
                whileTap={{ scale: 0.88 }}
                className="w-11 h-11 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.12, backgroundColor: "#2457d6" }}
                whileTap={{ scale: 0.88 }}
                className="w-11 h-11 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
