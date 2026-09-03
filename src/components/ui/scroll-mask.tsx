"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollMaskProps {
  children: React.ReactNode;
  bgImageSrc: string;
  bgImageAlt?: string;
}

export function ScrollMask({
  children,
  bgImageSrc,
  bgImageAlt = "Scroll Mask Background",
}: ScrollMaskProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth mask expansion from focal center circle outwards to 120% full viewport
  const maskRadius = useTransform(scrollYProgress, [0.15, 0.65], ["18%", "135%"]);
  // Background image parallax scale
  const imageScale = useTransform(scrollYProgress, [0.1, 0.85], [1.2, 1.0]);
  // Foreground content smooth fade and scale
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.55], [0.2, 1]);
  const contentScale = useTransform(scrollYProgress, [0.2, 0.6], [0.92, 1]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[140vh] bg-[#09090b] text-white select-none overflow-hidden"
    >
      {/* Sticky Fullscreen Mask Arena */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Animated Mask Viewport */}
        <motion.div
          style={{
            WebkitClipPath: useTransform(maskRadius, (r) => `circle(${r} at 50% 50%)`),
            clipPath: useTransform(maskRadius, (r) => `circle(${r} at 50% 50%)`),
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Parallax Image */}
          <motion.img
            src={bgImageSrc}
            alt={bgImageAlt}
            style={{ scale: imageScale }}
            className="w-full h-full object-cover object-center"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-black/40 to-[#09090b]/90 pointer-events-none" />
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[#2457d6]/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Foreground Content Card with Parallax Scale & Opacity */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
          }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8"
        >
          {children}
        </motion.div>

      </div>
    </div>
  );
}
