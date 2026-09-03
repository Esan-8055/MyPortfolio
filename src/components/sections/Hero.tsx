"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
  isLoaded?: boolean;
}

// Ultra-smooth cubic-bezier for high-end digital editorial products
const smoothEase = [0.16, 1, 0.3, 1] as const;

// Background word / line animation variants
const bgWordContainer = {
  hidden: { opacity: 0 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.08 * custom,
    },
  }),
};

const bgLetterItem = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

// Left descriptor line-by-line clip reveal
const roleLineVariant = {
  hidden: { y: "120%", opacity: 0 },
  visible: (idx: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.12 + idx * 0.1,
      ease: smoothEase,
    },
  }),
};

export function Hero({ onOpenContact, isLoaded = true }: HeroProps) {
  const line1 = "ENGINEERING";
  const line2 = "IDEAS INTO REALITY";

  const heroRef = useRef<HTMLElement | null>(null);

  // Mouse 3D Parallax Tilt Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 16]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const animState = isLoaded ? "visible" : "hidden";

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-16 sm:pt-20 pb-6 flex flex-col justify-between overflow-hidden bg-white border-b border-[#e8e8e5] select-none"
    >
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      
      {/* Ambient soft HSL surreal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[1200px] h-[320px] sm:h-[580px] bg-gradient-to-r from-[#eaf0ff]/80 via-[#f3e8ff]/50 to-[#e0f2fe]/70 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-surreal" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        
        {/* Top Tier: Left Stacked Role Titles & Right Academic Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pt-1 relative z-20">
          
          {/* Top Left: Stacked Roles in Heavy Geometric Montserrat Black */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col space-y-0.5">
            {/* Rising Word lines in Heavy Geometric Sans */}
            <div className="font-heavy text-xl sm:text-2xl lg:text-3xl font-black text-[#0a0a0a] tracking-tight uppercase leading-[1.04]">
              {["SOFTWARE DEVELOPER", "AI • IOT", "PROBLEM SOLVER"].map((word, idx) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    custom={idx}
                    variants={roleLineVariant}
                    initial="hidden"
                    animate={animState}
                    className={`block ${
                      word === "PROBLEM SOLVER" ? "text-[#2457d6]" : "hover:text-[#2457d6] transition-colors"
                    }`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Right: Bio & Degree Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.8, delay: isLoaded ? 0.2 : 0, ease: smoothEase }}
            className="md:col-span-7 lg:col-span-7 flex flex-col md:items-end md:text-right justify-start"
          >
            <p className="text-xs sm:text-sm text-[#1a1a1a] leading-relaxed max-w-md font-medium">
              I’m a Software Developer passionate about building practical digital products with Full-Stack, AI, and IoT technologies.
            </p>

            <div className="mt-2.5 flex flex-wrap items-center md:justify-end gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: isLoaded ? 0.35 : 0, ease: smoothEase }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f7f5] border border-[#e8e8e5]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2457d6] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#0a0a0a] tracking-wide">
                  B.Tech Information Technology at Kalasalingam University
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Center Arena: Background Surreal Typography + 3D Parallax Standing Foreground Portrait */}
        <div className="relative flex-1 flex items-end justify-center my-4 sm:-mt-12 lg:-mt-16 min-h-[420px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] perspective-1000">
          
          {/* Floating Surreal Geometric Halos behind Portrait */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] border border-[#2457d6]/20 rounded-full animate-spin-surreal pointer-events-none z-0"
          />

          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[680px] h-[360px] sm:h-[680px] border border-[#a855f7]/15 rounded-full animate-spin-surreal pointer-events-none z-0"
          />

          {/* Background Typography: Clean Linear Gradient Reveal with Proximity Hover Effect */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none -translate-y-8 sm:-translate-y-6 px-1 sm:px-4">
            
            {/* Line 1: ENGINEERING */}
            <motion.div
              custom={1}
              variants={bgWordContainer}
              initial="hidden"
              animate={animState}
              className="font-heavy w-full max-w-full text-center flex items-center justify-center leading-[0.82]"
            >
              {Array.from(line1).map((char, index) => (
                <span key={index} className="inline-block overflow-hidden pb-1 px-[0.02em] sm:px-[0.04em] pointer-events-auto">
                  <motion.span
                    variants={bgLetterItem}
                    whileHover={{ scale: 1.15, y: -12, rotate: (index % 2 === 0 ? 4 : -4) }}
                    transition={{ duration: 0.25 }}
                    className="inline-block text-[10.5vw] sm:text-[11vw] lg:text-[9.6vw] font-black tracking-[-0.04em] uppercase bg-gradient-to-r from-[#1e40af] via-[#2457d6] to-[#0284c7] bg-clip-text text-transparent hover:text-surreal-chromatic cursor-pointer"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.div>

            {/* Line 2: IDEAS INTO REALITY */}
            <motion.div
              custom={2}
              variants={bgWordContainer}
              initial="hidden"
              animate={animState}
              className="font-heavy w-full max-w-full text-center flex items-center justify-center leading-[0.82] mt-1 sm:mt-2"
            >
              {Array.from(line2).map((char, index) => (
                <span
                  key={index}
                  className={`inline-block overflow-hidden pb-1 px-[0.02em] sm:px-[0.03em] pointer-events-auto ${
                    char === " " ? "w-[1.8vw] sm:w-[2.2vw]" : ""
                  }`}
                >
                  <motion.span
                    variants={bgLetterItem}
                    whileHover={{ scale: 1.15, y: -12, rotate: (index % 2 === 0 ? -5 : 5) }}
                    transition={{ duration: 0.25 }}
                    className="inline-block text-[6.8vw] sm:text-[6.6vw] lg:text-[5.7vw] font-black tracking-[-0.035em] uppercase bg-gradient-to-r from-[#2457d6] via-[#4338ca] to-[#1e40af] bg-clip-text text-transparent hover:text-surreal-chromatic cursor-pointer"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </motion.div>

          </div>

          {/* Foreground Portrait Cutout: 3D Interactive Parallax Tilt with Hero Entry Animation */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: parallaxX,
              y: parallaxY,
            }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.95, delay: isLoaded ? 0.25 : 0, ease: smoothEase }}
            className="relative z-10 h-[58vh] sm:h-[80vh] md:h-[86vh] lg:h-[90vh] max-h-[820px] w-full max-w-[340px] sm:max-w-[560px] md:max-w-[660px] lg:max-w-[740px] flex items-end justify-center pointer-events-auto translate-y-0 sm:-translate-y-8 lg:-translate-y-10"
          >
            <div className="relative w-full h-full">
              <Image
                src="/hero-portrait.png"
                alt="Jegatheesan - Software Developer"
                fill
                priority
                sizes="(max-width: 768px) 340px, (max-width: 1200px) 660px, 740px"
                className="object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:drop-shadow-[0_30px_60px_rgba(36,87,214,0.35)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Tier: Left "Scroll to Enter" & Right Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 pb-2 border-t border-[#e8e8e5] relative z-20">
          
          {/* Bottom Left: Scroll to Enter with Expanding Indicator Line */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.7, delay: isLoaded ? 0.35 : 0, ease: smoothEase }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isLoaded ? { width: 32 } : { width: 0 }}
              transition={{ duration: 0.7, delay: isLoaded ? 0.45 : 0, ease: smoothEase }}
              className="h-[2px] bg-[#2457d6]"
            />
            <a
              href="#about"
              className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#0a0a0a] uppercase hover:text-[#2457d6] transition-colors flex items-center gap-2"
            >
              <span>SCROLL TO ENTER</span>
            </a>
          </motion.div>

          {/* Bottom Right: Direct Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: isLoaded ? 0.4 : 0, ease: smoothEase }}
            className="flex items-center gap-3"
          >
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-xs font-bold tracking-wider hover:bg-[#2457d6] transition-all duration-300 flex items-center gap-1.5 shadow-xs"
            >
              <span>VIEW WORK</span>
              <ArrowDownRight size={13} />
            </a>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-[#eaf0ff] text-[#2457d6] text-xs font-bold tracking-wider hover:bg-[#2457d6] hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>LET&apos;S TALK</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
