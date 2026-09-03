"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  X,
  Mail,
  Phone,
  Compass,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { easeOutExpo } from "@/lib/motion";

interface AboutProps {
  onOpenContact?: () => void;
}

export function About({ onOpenContact }: AboutProps) {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  // Scroll Parallax Setup — bound to the section container
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Portrait rises up from below the arch frame as you scroll in
  const portraitY = useSpring(
    useTransform(scrollYProgress, [0, 0.55], ["18%", "0%"]),
    { stiffness: 60, damping: 22, mass: 0.8 }
  );
  const portraitScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.88, 1]),
    { stiffness: 60, damping: 22 }
  );
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);

  // Arch frame container subtle scale-in
  const archScale = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0.94, 1]),
    { stiffness: 80, damping: 25 }
  );

  // Left column slides in from the left
  const leftX = useSpring(
    useTransform(scrollYProgress, [0, 0.35], ["-60px", "0px"]),
    { stiffness: 70, damping: 22 }
  );
  const leftOpacity = useTransform(scrollYProgress, [0, 0.28], [0, 1]);

  // Right stats slide in from the right
  const rightX = useSpring(
    useTransform(scrollYProgress, [0, 0.4], ["60px", "0px"]),
    { stiffness: 70, damping: 22 }
  );
  const rightOpacity = useTransform(scrollYProgress, [0, 0.32], [0, 1]);

  // Bottom feature grid rises up
  const featureY = useSpring(
    useTransform(scrollYProgress, [0.3, 0.7], ["50px", "0px"]),
    { stiffness: 60, damping: 20 }
  );
  const featureOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Lock page scroll when credentials modal is open
  useEffect(() => {
    if (detailsModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [detailsModalOpen]);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="py-20 md:py-28 bg-[#dedcd6] text-[#0a0a0a] border-b border-[#c8c6be] relative overflow-hidden select-none"
      >
        {/* Subtle Background Texture & Grid */}
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Top Eyebrow Section Tag */}
          <SectionReveal>
            <div className="flex items-center justify-between border-b border-[#c8c6be] pb-4 mb-8 sm:mb-14">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#2457d6]">
                <span className="w-2 h-2 rounded-full bg-[#2457d6] animate-pulse" />
                <span>01 // ABOUT ME &amp; IDENTITY</span>
              </div>
              <span className="text-[11px] font-mono text-[#6b6b6b] uppercase tracking-wider hidden sm:block">
                JEGATHEESAN • FULL-STACK &amp; AI
              </span>
            </div>
          </SectionReveal>

          {/* ========================================================
              TOP HERO GRID: 3-COLUMN SPLIT (MATCHING REFERENCE IMAGE)
             ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 lg:mb-20">
            
            {/* ----------------------------------------------------
                LEFT COLUMN: Greeting, Mixed Typography, Subtitle & Pill CTA
               ---------------------------------------------------- */}
            {/* LEFT COL — slides in from left on scroll */}
            <motion.div
              style={{ x: leftX, opacity: leftOpacity }}
              className="lg:col-span-5 flex flex-col justify-center space-y-6"
            >
                {/* Greeting Line */}
                <p className="font-serif-accent italic text-xl sm:text-2xl text-[#4a4a4a] mb-2 font-normal">
                  Hey. I&apos;m Jegatheesan,
                </p>

                {/* Mixed Bold Condensed Sans + Script/Italic Headline */}
                <h2 className="font-heavy text-3xl sm:text-6xl lg:text-7xl font-black text-[#0a0a0a] tracking-tight uppercase leading-[0.96] mb-6">
                  <span className="block">A FULL-STACK</span>
                  <span className="font-serif-accent font-normal italic lowercase tracking-normal text-[#2457d6] block my-1">
                    &amp; AI Developer
                  </span>
                  <span className="block">FOUNDER</span>
                </h2>

                {/* Paragraph Description */}
                <p className="text-sm sm:text-base text-[#383838] leading-relaxed font-medium max-w-md mb-8">
                  Transforming ideas into high-performance digital products — Full-Stack web platforms, AI algorithms, and IoT hardware systems that solve real-world problems.
                </p>

                {/* Direct Action Pill Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Contact Pill with Circular Arrow Icon */}
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-3 sm:gap-4 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-[#0a0a0a] text-white hover:bg-[#2457d6] transition-all duration-300 shadow-md group cursor-pointer"
                  >
                    <span className="text-xs font-mono font-bold tracking-wider uppercase">
                      CONTACT ME
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#0a0a0a] group-hover:bg-white group-hover:text-[#2457d6] flex items-center justify-center transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </button>

                  {/* Secondary Profile & Resume Drawer Trigger */}
                  <button
                    onClick={() => setDetailsModalOpen(true)}
                    className="px-4 sm:px-5 py-2.5 rounded-full border border-[#b5b3aa] text-xs font-mono font-bold text-[#111111] hover:border-[#0a0a0a] hover:bg-[#d2d0c7] transition-all cursor-pointer"
                  >
                    EXPLORE CREDENTIALS ➔
                  </button>
                </div>
            </motion.div>

            {/* ----------------------------------------------------
                CENTER COLUMN: Signature Capsule / Arch Photo Frame
                Portrait parallax — rises up from below as you scroll in
               ---------------------------------------------------- */}
            <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
              {/* Arch frame scales up slightly on scroll */}
              <motion.div
                style={{ scale: archScale }}
                className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[420px] aspect-[4/5] rounded-t-[120px] sm:rounded-t-[180px] lg:rounded-t-[220px] bg-[#d2d0c7] border-2 border-[#c2c0b6] shadow-xl overflow-hidden group"
              >
                {/* Subtle inner gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d2d0c7]/30 to-[#c5c3b9] z-0" />

                {/* Floating Micro Badge — fades in with arch */}
                <motion.div
                  style={{ opacity: portraitOpacity }}
                  className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm whitespace-nowrap"
                >
                  HYBIX FOUNDER &amp; B.TECH IT
                </motion.div>

                {/* Cutout Portrait Image — THE MAIN PARALLAX ELEMENT
                    translateY goes from +18% (below) → 0% as you scroll
                    scale goes from 0.88 → 1 creating the rising-in effect */}
                <motion.div
                  style={{
                    y: portraitY,
                    scale: portraitScale,
                    opacity: portraitOpacity,
                  }}
                  className="relative w-full h-full z-10 flex items-end justify-center pt-8 origin-bottom"
                >
                  <Image
                    src="/hero-portrait.png"
                    alt="Jegatheesan Profile Cutout"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 420px"
                    className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>

                {/* Iridescent shimmer overlay that appears as portrait rises */}
                <motion.div
                  style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0.6, 0]) }}
                  className="absolute inset-0 bg-gradient-to-t from-[#d2d0c7] via-[#d2d0c7]/60 to-transparent z-10 pointer-events-none"
                />
              </motion.div>
            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN: Vertical Stat Counter Column
                Slides in from right on scroll
               ---------------------------------------------------- */}
            <motion.div
              style={{ x: rightX, opacity: rightOpacity }}
              className="lg:col-span-3 flex flex-col justify-center lg:pl-6 border-t pt-6 lg:pt-0 lg:border-t-0 border-[#c8c6be] lg:border-l lg:border-[#c8c6be]"
            >
              <div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  
                  {/* Stat 1 */}
                  <div className="border-b border-[#c8c6be] pb-4">
                    <div className="font-heavy text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight">
                      03<span className="text-[#2457d6]">+</span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-[#555555] uppercase tracking-wider mt-1">
                      Years Coding &amp; Engineering
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="border-b border-[#c8c6be] pb-4">
                    <div className="font-heavy text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight">
                      15<span className="text-[#2457d6]">+</span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-[#555555] uppercase tracking-wider mt-1">
                      Projects &amp; Products Built
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="border-b border-[#c8c6be] pb-4">
                    <div className="font-heavy text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight">
                      04<span className="text-[#2457d6]">+</span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-[#555555] uppercase tracking-wider mt-1">
                      Core Domains (Full-Stack, AI, IoT, ROS)
                    </p>
                  </div>

                  {/* Stat 4 */}
                  <div>
                    <div className="font-heavy text-3xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight">
                      7.82
                    </div>
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-[#555555] uppercase tracking-wider mt-1">
                      CGPA • B.Tech IT at KARE
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

          {/* ========================================================
              BOTTOM ROW: 4-COLUMN FEATURE DIVIDER GRID
              Rises up from below with parallax on scroll
             ======================================================== */}
          <motion.div style={{ y: featureY, opacity: featureOpacity }}>
            <div className="pt-10 border-t border-[#c8c6be] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Feature 1 */}
              <div className="lg:border-r border-[#c8c6be] lg:pr-6 space-y-2">
                <h3 className="font-heavy text-base font-black text-[#0a0a0a] tracking-tight uppercase">
                  FULL-STACK DEVELOPMENT
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  Intuitive and scalable web &amp; mobile applications built with React, Next.js, Node.js, and cloud backends.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="lg:border-r border-[#c8c6be] lg:pr-6 space-y-2">
                <h3 className="font-heavy text-base font-black text-[#0a0a0a] tracking-tight uppercase">
                  ARTIFICIAL INTELLIGENCE
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  Intelligent machine learning models, automated data workflows, and smart predictive analytics.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="lg:border-r border-[#c8c6be] lg:pr-6 space-y-2">
                <h3 className="font-heavy text-base font-black text-[#0a0a0a] tracking-tight uppercase">
                  IOT &amp; EMBEDDED SYSTEMS
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  Hardware integration connecting ESP32 microcontrollers, ROS robotics, and live software dashboards.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <h3 className="font-heavy text-base font-black text-[#0a0a0a] tracking-tight uppercase">
                  PRODUCT ARCHITECTURE
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  End-to-end execution from initial concept to commercial deployment with HYBIX IT Solutions.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          AUTHENTIC CREDENTIALS & DEEP CAREER MODAL
         ======================================================== */}
      <AnimatePresence>
        {detailsModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 pb-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsModalOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="relative w-full max-w-4xl bg-[#fbfbf9] text-[#0a0a0a] border border-[#d8d8d3] rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
              style={{ maxHeight: "calc(100vh - 130px)" }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#e8e8e5] flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-3">
                  <Compass className="text-[#2457d6]" size={20} />
                  <div>
                    <h3 className="text-lg font-black text-[#0a0a0a] uppercase tracking-tight">
                      Jegatheesan Baskar — Full Profile &amp; Credentials
                    </h3>
                    <p className="text-xs font-mono text-[#6b6b6b]">
                      B.Tech IT • Co-Founder HYBIX • Developer
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setDetailsModalOpen(false)}
                  className="p-2 rounded-full border border-[#e8e8e5] hover:bg-[#f0f0ed] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div
                className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 min-h-0"
                style={{ overscrollBehavior: "contain" }}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                
                {/* 1. Education & Academic Standing */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={18} className="text-[#2457d6]" />
                    <h4 className="font-heavy text-lg font-black uppercase text-[#0a0a0a]">
                      Education
                    </h4>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-[#e8e8e5] flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div>
                      <h5 className="font-bold text-base text-[#0a0a0a]">
                        Bachelor of Technology in Information Technology
                      </h5>
                      <p className="text-xs text-[#6b6b6b] mt-1">
                        Kalasalingam Academy of Research and Education • Aug 2023 – June 2027 (Expected)
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#eaf0ff] text-[#2457d6] text-xs font-mono font-bold">
                      B.Tech IT
                    </span>
                  </div>
                </div>

                {/* 2. Experience Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={18} className="text-[#2457d6]" />
                    <h4 className="font-heavy text-lg font-black uppercase text-[#0a0a0a]">
                      Working Experience
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white border border-[#e8e8e5]">
                      <h5 className="font-bold text-sm text-[#0a0a0a]">Software Developer Intern</h5>
                      <p className="text-xs text-[#2457d6] font-medium">Tarcin Robotics LLP (May 2026 – Present)</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#e8e8e5]">
                      <h5 className="font-bold text-sm text-[#0a0a0a]">Lead Developer &amp; President</h5>
                      <p className="text-xs text-[#2457d6] font-medium">HYBIX Tech Community (Jul 2025 – Present)</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#e8e8e5]">
                      <h5 className="font-bold text-sm text-[#0a0a0a]">Data Science Intern</h5>
                      <p className="text-xs text-[#6b6b6b] font-medium">VCodez (May 2026 – Jul 2026)</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-[#e8e8e5]">
                      <h5 className="font-bold text-sm text-[#0a0a0a]">Full Stack Team Lead</h5>
                      <p className="text-xs text-[#6b6b6b] font-medium">KARE 10X Club (Jul 2024 – Present)</p>
                    </div>
                  </div>
                </div>

                {/* 3. Direct Contact Channels */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail size={18} className="text-[#2457d6]" />
                    <h4 className="font-heavy text-lg font-black uppercase text-[#0a0a0a]">
                      Direct Channels
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <a
                      href="mailto:jegatheesh8055@gmail.com"
                      className="p-3 rounded-xl bg-white border border-[#e8e8e5] hover:border-[#2457d6] transition-colors flex items-center gap-2"
                    >
                      <Mail size={14} className="text-[#2457d6]" />
                      <span>jegatheesh8055@gmail.com</span>
                    </a>
                    <a
                      href="tel:+916383721027"
                      className="p-3 rounded-xl bg-white border border-[#e8e8e5] hover:border-[#2457d6] transition-colors flex items-center gap-2"
                    >
                      <Phone size={14} className="text-[#2457d6]" />
                      <span>+91 6383721027</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-[#e8e8e5] bg-white flex items-center justify-between text-xs font-mono">
                <span>Jegatheesan Baskar Portfolio</span>
                <button
                  onClick={() => setDetailsModalOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-[#0a0a0a] text-white font-bold hover:bg-[#2457d6] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
