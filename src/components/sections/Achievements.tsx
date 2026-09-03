"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Diamond,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { verifiedAchievements, Achievement, certificationsList } from "@/data/achievements";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { easeOutExpo } from "@/lib/motion";

const TABS = [
  { id: "all", label: "ALL ACHIEVEMENTS" },
  { id: "Grade S", label: "GRADE S (WINNERS)" },
  { id: "Grade A", label: "GRADE A (FINALISTS)" },
  { id: "Grade B", label: "GRADE B (HONORS)" },
];

export function Achievements() {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter achievements
  const filteredItems = verifiedAchievements.filter((item) => {
    if (activeTab === "all") return true;
    return item.grade === activeTab;
  });

  // Helper to find item by id safely
  const getItem = (id: string) => verifiedAchievements.find((item) => item.id === id);

  const marineX = getItem("marine-x");
  const sih = getItem("sih-qualifier");
  const kare10x = getItem("kare-10x-lead");
  const tedx = getItem("tedx-lead");
  const eduSdg = getItem("edu-sdg-hackathon");

  return (
    <section id="achievements" className="py-24 md:py-36 bg-[#fbfbf9] border-b border-[#e8e8e5] relative overflow-hidden select-none">
      
      {/* Background subtle technical grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#2457d6]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* =========================================================================
            TOP HEADER SECTION (Matching "HANVOS PRODUCTION" style in attachment)
           ========================================================================= */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e8e8e5] mb-12">
            <div>


              {/* Main Elegant Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight">
                Engineering &amp;{" "}
                <span className="font-serif-accent font-normal italic text-[#2457d6]">
                  Architectural Honors.
                </span>
              </h2>

              {/* Thin blue accent underline */}
              <div className="w-16 h-[2px] bg-[#2457d6] mt-3" />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#f0f0ed] p-1.5 rounded-full border border-[#e8e8e5] max-w-full overflow-x-auto no-scrollbar shrink-0">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-white text-[#0a0a0a] shadow-xs"
                        : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* =========================================================================
            ARCHITECTURAL CANVAS WITH WIREFRAME DIAMOND & BLUEPRINT CONNECTOR LINES
           ========================================================================= */}
        <div className="relative">
          
          {/* Wireframe Diamond Connector Icon (Top-Left Center accent as in attachment) */}
          <div className="absolute top-[-18px] left-[32%] z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#2457d6] shadow-md text-[#2457d6]">
            <Diamond size={20} className="animate-pulse" />
          </div>

          {/* SVG Thin Blueprint Vector Connector Lines (Connecting cards across canvas) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 stroke-[#2457d6]/30 stroke-[1.5] stroke-dasharray-[4_4]">
            {/* Top Diamond outwards lines */}
            <line x1="34%" y1="10" x2="16%" y2="80" />
            <line x1="36%" y1="10" x2="52%" y2="10" />
            <line x1="53%" y1="10" x2="88%" y2="280" />
            <line x1="16%" y1="460" x2="50%" y2="600" />
            <line x1="50%" y1="600" x2="98%" y2="680" />
          </svg>

          {/* =========================================================================
              MAIN ASYMMETRIC GRID CLUSTER (Exact arrangement matching reference image)
             ========================================================================= */}
          {activeTab === "all" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
              
              {/* -------------------------------------------------------------
                  LEFT COLUMN CLUSTER (Col Span 4):
                  - Giant "REAL ESTATE PRODUCTS" style typography at bottom
                  - Top wide image card + Bottom horizontal card
                 ------------------------------------------------------------- */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                
                {/* 1. Top Wide Card with Accent Corner Header Block */}
                {marineX && (
                  <SectionReveal delay={0.1}>
                    <div
                      className="relative rounded-2xl bg-white border border-[#e8e8e5] p-2.5 shadow-xs hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Accent Corner Header Tag */}
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#2457d6]">
                          ▷ Marine-X • 1st Place Winner
                        </span>
                        <span className="text-[9px] font-mono text-[#929292]">
                          2024
                        </span>
                      </div>

                      {/* Image Frame */}
                      <div className="relative w-full h-[190px] rounded-xl overflow-hidden bg-black">
                        <Image
                          src={marineX.image}
                          alt={marineX.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="px-2 py-0.5 rounded bg-[#2457d6] text-[9px] font-mono font-bold uppercase">
                            GRADE S
                          </span>
                          <h4 className="text-sm font-bold text-white mt-1 leading-tight">
                            {marineX.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}

                {/* 2. Middle Horizontal Card (SIH Regional Qualifier) */}
                {sih && (
                  <SectionReveal delay={0.15}>
                    <div
                      className="relative rounded-2xl bg-white border border-[#e8e8e5] p-2.5 shadow-xs hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#0a0a0a]">
                          ▷ Smart India Hackathon • Regional Qualifier
                        </span>
                        <span className="text-[9px] font-mono text-[#2457d6] font-bold">
                          SIH 2024
                        </span>
                      </div>

                      <div className="relative w-full h-[150px] rounded-xl overflow-hidden bg-black">
                        <Image
                          src={sih.image}
                          alt={sih.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h4 className="text-xs font-bold text-white leading-tight">
                            {sih.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}

                {/* 3. Bottom GIANT ARCHITECTURAL TYPOGRAPHY */}
                <SectionReveal delay={0.2}>
                  <div className="pt-4 border-t border-[#e8e8e5]">
                    <div className="font-heavy text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] tracking-tight uppercase leading-[0.88] select-none">
                      <span className="block text-[#0a0a0a]">VERIFIED</span>
                      <span className="block text-[#2457d6]">HONORS &amp;</span>
                      <span className="block text-[#a3a39f] font-serif-accent font-normal italic lowercase tracking-normal">
                        achievements
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#6b6b6b] mt-4 max-w-xs leading-relaxed">
                      Engineering competitions, hackathons, and leadership roles verified by competitive metrics.
                    </p>
                  </div>
                </SectionReveal>

              </div>

              {/* -------------------------------------------------------------
                  MIDDLE COLUMN CLUSTER 1 (Col Span 4):
                  - Top horizontal card + Bottom tall vertical focal card
                 ------------------------------------------------------------- */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                
                {/* 1. Top Horizontal Card (KARE 10X Club Lead) */}
                {kare10x && (
                  <SectionReveal delay={0.2}>
                    <div
                      className="relative rounded-2xl bg-white border border-[#e8e8e5] p-2.5 shadow-xs hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#0a0a0a]">
                          ▷ KARE 10X Club • Full Stack Lead
                        </span>
                        <span className="text-[9px] font-mono text-[#929292]">
                          347+ Mentored
                        </span>
                      </div>

                      <div className="relative w-full h-[170px] rounded-xl overflow-hidden bg-black">
                        <Image
                          src={kare10x.image}
                          alt={kare10x.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h4 className="text-sm font-bold text-white leading-tight">
                            {kare10x.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}

                {/* 2. Bottom Tall Vertical Hero Card (TEDx Lead) */}
                {tedx && (
                  <SectionReveal delay={0.25}>
                    <div
                      className="relative rounded-2xl bg-white border border-[#e8e8e5] p-2.5 shadow-xs hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#2457d6]">
                          ▷ TEDxKARE • Technical Ops Lead
                        </span>
                        <span className="text-[9px] font-mono text-[#929292]">
                          500+ Audience
                        </span>
                      </div>

                      {/* Tall Aspect Image Frame */}
                      <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-black">
                        <Image
                          src={tedx.image}
                          alt={tedx.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Top grade tag */}
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#2457d6] text-[9px] font-mono font-bold text-white uppercase">
                          GRADE A LEADERSHIP
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[10px] font-mono text-[#93c5fd] uppercase tracking-wider block">
                            Live Stage &amp; Media Engineering
                          </span>
                          <h4 className="text-base font-bold text-white mt-0.5 leading-tight">
                            {tedx.title}
                          </h4>
                          <p className="text-xs text-white/80 line-clamp-2 mt-1.5">
                            {tedx.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}

              </div>

              {/* -------------------------------------------------------------
                  RIGHT COLUMN CLUSTER 2 (Col Span 4):
                  - EDU SDG Hackathon Card
                  - Solid Accent Color Spacer Block
                 ------------------------------------------------------------- */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                
                {/* 1. EDU SDG Hackathon Card */}
                {eduSdg && (
                  <SectionReveal delay={0.25}>
                    <div
                      className="relative rounded-2xl bg-white border border-[#e8e8e5] p-2.5 shadow-xs hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#0a0a0a]">
                          ▷ EDU SDG Hackathon
                        </span>
                        <span className="text-[9px] font-mono text-[#2457d6] font-bold">
                          Finalist
                        </span>
                      </div>

                      <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-black">
                        <Image
                          src={eduSdg.image}
                          alt={eduSdg.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-[9px] font-mono text-white font-bold uppercase">
                            SDG HACKATHON
                          </span>
                          <h4 className="text-sm font-bold text-white mt-1 leading-tight">
                            {eduSdg.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}



              </div>

            </div>
          ) : (
            /* Standard Filtered View when user chooses a specific Grade tab */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05, ease: easeOutExpo }}
                    className="rounded-2xl bg-white border border-[#e8e8e5] p-3 shadow-xs hover:border-[#2457d6] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2.5 bg-[#f7f7f5] rounded-lg border border-[#e8e8e5]">
                        <span className="text-[10px] font-mono font-bold text-[#2457d6]">
                          ▷ {item.event}
                        </span>
                        <span className="text-[9px] font-mono text-[#929292]">
                          {item.date}
                        </span>
                      </div>

                      <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-black mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="400px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="px-2 py-0.5 rounded bg-[#2457d6] text-[9px] font-mono font-bold uppercase">
                            {item.badge}
                          </span>
                          <h4 className="text-base font-bold text-white mt-1 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-[#6b6b6b] leading-relaxed line-clamp-2 px-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f0f0ed] flex items-center justify-between text-[10px] font-mono text-[#2457d6] font-bold px-1">
                      <span>VERIFIED ACHIEVEMENT</span>
                      <Award size={12} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>

        {/* =========================================================================
            CERTIFICATIONS SHOWCASE SECTION
           ========================================================================= */}
        <SectionReveal delay={0.2} className="mt-20 pt-12 border-t border-[#e8e8e5]">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] tracking-tight">
              Verified Professional <span className="font-serif-accent font-normal italic text-[#2457d6]">Certificates.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {certificationsList.map((cert) => (
              <div key={cert.id} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e8e5] shadow-xs flex flex-col justify-between hover:border-[#2457d6] hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div>
                  {/* Real Certificate Image Banner */}
                  {cert.image && (
                    <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl overflow-hidden bg-black mb-4 border border-[#e8e8e5]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="400px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#eaf0ff] text-[#2457d6] text-[10px] font-mono font-bold uppercase">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#929292] font-semibold">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-[#0a0a0a] mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-[#2457d6] mb-3">
                    Issuer: {cert.issuer}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#f0f0ed]">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-[#f7f7f5] text-[10px] font-mono font-medium text-[#383838]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>



      </div>
    </section>
  );
}
