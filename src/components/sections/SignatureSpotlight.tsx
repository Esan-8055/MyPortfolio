"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

interface SpotlightSlide {
  id: string;
  badgeNumber: string;
  badgeTitle: string;
  badgeDescription: string;
  circleMetric: string;
  circleLabel: string;
  headlineLeftGhost: string;
  headlineLeftSolid: string;
  headlineRightGhost: string;
  headlineRightGhost2: string;
  cardImage: string;
  cardTitle: string;
  cardRole: string;
  cardTag: string;
}

const spotlightSlides: SpotlightSlide[] = [
  {
    id: "tarcin",
    badgeNumber: "#01",
    badgeTitle: "TARCIN Intern's Workspace Platform",
    badgeDescription:
      "Engineered an end-to-end internship management platform for 500+ interns and 10+ mentors, integrating AI Career Coach and automated PDF certification, cutting admin overhead by 30-40%.",
    circleMetric: "94%",
    circleLabel: "Program Completion Rate",
    headlineLeftGhost: "FULL STACK",
    headlineLeftSolid: "PLATFORM",
    headlineRightGhost: "AI-COACH",
    headlineRightGhost2: "INTEGRATION",
    cardImage: "/projects/tarcin_workspace.png",
    cardTitle: "TARCIN Workspace",
    cardRole: "React • Node.js • PostgreSQL • TS",
    cardTag: "500+ Interns",
  },
  {
    id: "rover",
    badgeNumber: "#02",
    badgeTitle: "Crop Disease Detection Rover",
    badgeDescription:
      "Engineered an autonomous AI/ML agricultural rover combining OpenCV computer vision, PyTorch, and ESP32 embedded control for real-time disease detection and targeted spraying.",
    circleMetric: "+30%",
    circleLabel: "Automation Efficiency",
    headlineLeftGhost: "AUTONOMOUS",
    headlineLeftSolid: "ROBOTICS",
    headlineRightGhost: "COMPUTER",
    headlineRightGhost2: "VISION",
    cardImage: "/projects/crop_disease_rover.jpeg",
    cardTitle: "Agri-Rover AI/ML",
    cardRole: "OpenCV • PyTorch • ESP32",
    cardTag: "AI & IoT Rover",
  },
  {
    id: "spaceman",
    badgeNumber: "#03",
    badgeTitle: "SpaceMan Academy EdTech",
    badgeDescription:
      "Developed a responsive EdTech web platform for Life Sciences & Biotech exam preparation with 6 examination tracks and bilingual Tamil-English PYQ problem-solving tools.",
    circleMetric: "-30%",
    circleLabel: "Discovery Friction",
    headlineLeftGhost: "BILINGUAL",
    headlineLeftSolid: "EDTECH",
    headlineRightGhost: "FULL STACK",
    headlineRightGhost2: "ACADEMY",
    cardImage: "/projects/spaceman_academy.png",
    cardTitle: "SpaceMan Academy",
    cardRole: "React • Node.js • Tailwind",
    cardTag: "Biotech Exam Prep",
  },
];

export function SignatureSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = spotlightSlides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? spotlightSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === spotlightSlides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-white border-b border-[#e8e8e5] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        
        {/* Top Badges Row */}
        <div className="relative min-h-[100px] mb-6 md:mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-top"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full"
            >
              {/* Top-Left Circular Metric Badge */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#f7f7f5] border border-[#e8e8e5] p-3 flex flex-col items-center justify-center text-center shadow-xs flex-shrink-0">
                <span className="text-base sm:text-lg font-black text-[#0a0a0a] tracking-tight leading-none">
                  {current.circleMetric}
                </span>
                <span className="text-[9px] font-mono text-[#6b6b6b] mt-1 leading-tight uppercase max-w-[80px]">
                  {current.circleLabel}
                </span>
              </div>

              {/* Top-Right Editorial Info Pill Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f7f7f5] border border-[#e8e8e5] max-w-md shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#d8d8d3] text-xs font-mono font-bold text-[#0a0a0a]">
                    {current.badgeNumber}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a]">
                    {current.badgeTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  {current.badgeDescription}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Arena: Giant Ghost Typography & Center Tilted Card */}
        <div className="relative min-h-[360px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center my-4 sm:my-8">
          
          {/* Left Ghost / Prominent Typography */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none max-w-[45%] hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-left-text"}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="flex flex-col"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e8e8e5] tracking-tight uppercase leading-[0.9]">
                  {current.headlineLeftGhost}
                </span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tight uppercase leading-[0.9] mt-1">
                  {current.headlineLeftSolid}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Ghost Typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none max-w-[45%] text-right hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-right-text"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="flex flex-col items-end"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e8e8e5] tracking-tight uppercase leading-[0.9]">
                  {current.headlineRightGhost}
                </span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e8e8e5] tracking-tight uppercase leading-[0.9] mt-1">
                  {current.headlineRightGhost2}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Tilted Signature Card */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-card"}
                initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -3.5 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)] border-4 border-white bg-[#111111] group cursor-pointer"
              >
                <Image
                  src={current.cardImage}
                  alt={current.cardTitle}
                  fill
                  sizes="(max-width: 768px) 280px, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Overlaid Bottom Card Label */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold tracking-tight text-white">
                        {current.cardTitle}
                      </h4>
                      <p className="text-[11px] text-white/80 font-mono mt-0.5">
                        {current.cardRole}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#2457d6] text-[10px] font-mono text-white font-semibold flex-shrink-0">
                      {current.cardTag}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Ghost Typography (Stacked) */}
        <div className="sm:hidden text-center my-6">
          <p className="text-3xl font-black text-[#0a0a0a] uppercase tracking-tight">
            {current.headlineLeftSolid} {current.headlineRightGhost}
          </p>
        </div>

        {/* Bottom Pagination & Navigation Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-[#e8e8e5] mt-6">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-[#d8d8d3] bg-white text-[#0a0a0a] flex items-center justify-center hover:bg-[#f7f7f5] hover:border-[#0a0a0a] transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Center Pagination Indicators */}
          <div className="flex items-center gap-2">
            {spotlightSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-7 h-2 bg-[#0a0a0a]"
                    : "w-2 h-2 bg-[#d8d8d3] hover:bg-[#929292]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow Button (Solid Black with White Arrow) */}
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center hover:bg-[#2457d6] transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
