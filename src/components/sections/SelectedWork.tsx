"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowDown,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { InfoCard } from "@/components/ui/info-card";
import { AnimatedProjectsDeck } from "@/components/ui/AnimatedProjectsDeck";
import { softwareProjects, hardwareProjects, allProjects, Project } from "@/data/projects";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";
import { easeOutExpo } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";

// ── Per-project InfoCard theming ──────────────────────────────────────────────
const PROJECT_CARD_THEME: Record<
  string,
  {
    borderColor: string;
    hoverTextColor: string;
    image: string;
  }
> = {
  "tarcin-workspace": {
    borderColor: "var(--ic-border-color-1)",   // blue
    hoverTextColor: "#ffffff",
    image: "/projects/tarcin_workspace.png",
  },
  "spaceman-academy": {
    borderColor: "var(--ic-border-color-6)",   // cyan
    hoverTextColor: "#ffffff",
    image: "/projects/spaceman_academy.png",
  },
  "hybix-website": {
    borderColor: "var(--ic-border-color-2)",   // violet
    hoverTextColor: "#ffffff",
    image: "/projects/hybix_website.png",
  },
  "craftconnect": {
    borderColor: "var(--ic-border-color-3)",   // orange
    hoverTextColor: "#ffffff",
    image: "/projects/craftconnect.png",
  },
  "renomate-dialysis": {
    borderColor: "var(--ic-border-color-4)",   // emerald
    hoverTextColor: "#ffffff",
    image: "/projects/renomate_dialysis.png",
  },
  "ramakrishna-hospitals": {
    borderColor: "var(--ic-border-color-1)",   // blue
    hoverTextColor: "#ffffff",
    image: "/projects/ramakrishna_hospitals.png",
  },
  "busapp": {
    borderColor: "var(--ic-border-color-6)",   // cyan
    hoverTextColor: "#ffffff",
    image: "/projects/busapp_software.png",
  },
  "reya-makeover": {
    borderColor: "var(--ic-border-color-5)",   // rose
    hoverTextColor: "#ffffff",
    image: "/projects/reya_makeover.png",
  },
  "reyatato-shop": {
    borderColor: "var(--ic-border-color-4)",   // emerald
    hoverTextColor: "#ffffff",
    image: "/projects/reyatato_shop.png",
  },
  "crop-disease-rover": {
    borderColor: "var(--ic-border-color-3)",   // orange
    hoverTextColor: "#ffffff",
    image: "/projects/crop_disease_rover.jpeg",
  },
  "hybix-smart-shoe": {
    borderColor: "var(--ic-border-color-6)",   // cyan
    hoverTextColor: "#ffffff",
    image: "/projects/smartshoe_simulation.png",
  },
  "solar-water-filter": {
    borderColor: "var(--ic-border-color-4)",   // emerald
    hoverTextColor: "#ffffff",
    image: "/waterpurifier_hardware.jpeg",
  },
  "rfid-safety-band": {
    borderColor: "var(--ic-border-color-1)",   // blue
    hoverTextColor: "#ffffff",
    image: "/rfid2.jpeg",
  },
  "smart-gps-bus-tracker": {
    borderColor: "var(--ic-border-color-2)",   // violet
    hoverTextColor: "#ffffff",
    image: "/bus_tracker_hardware.jpeg",
  },
  "pathol-detection-cycle": {
    borderColor: "var(--ic-border-color-3)",   // orange
    hoverTextColor: "#ffffff",
    image: "/projects/pathol_detection_cycle.jpeg",
  },
  "smart-health-show": {
    borderColor: "var(--ic-border-color-5)",   // rose
    hoverTextColor: "#ffffff",
    image: "/projects/smart_health_show.jpeg",
  },
  "smart-gps-bus-tracker-web": {
    borderColor: "var(--ic-border-color-6)",   // cyan
    hoverTextColor: "#ffffff",
    image: "/projects/smart_gps_bus_tracker_web.png",
  },
};

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | any | null>(
    null
  );
  const [filter, setFilter] = useState<"all" | "fullstack" | "healthcare" | "ecommerce">("all");
  const [showAll, setShowAll] = useState(false);

  // Filter software projects based on active sub-category tab
  const filteredProjects = softwareProjects.filter((p) => {
    if (filter === "fullstack")
      return p.category.includes("FULL STACK") || p.category.includes("EDTECH") || p.category.includes("AI");
    if (filter === "healthcare")
      return p.category.includes("HEALTHCARE") || p.category.includes("WEB DEVELOPMENT");
    if (filter === "ecommerce")
      return p.category.includes("E-COMMERCE") || p.category.includes("MARKETPLACE") || p.category.includes("TRANSPORTATION");
    return true;
  });

  // Limit main grid to 2 rows (6 cards on desktop 3-column grid) when collapsed
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const handleFilterChange = (newFilter: "all" | "fullstack" | "healthcare" | "ecommerce") => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section
      id="work"
      className="py-24 md:py-36 bg-[#ffffff] border-b border-[#e8e8e5] relative overflow-hidden select-none"
    >
      {/* Background subtle technical grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#2457d6]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Section Header: Software & Web Apps ──────────────────── */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#e8e8e5] pb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight">
                Software I&apos;ve{" "}
                <span className="font-serif-accent font-normal text-[#2457d6]">
                  architected.
                </span>
              </h2>
            </div>

            {/* Software Filter Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#f7f7f5] p-1.5 rounded-full border border-[#e8e8e5] self-start md:self-auto max-w-full overflow-x-auto no-scrollbar shrink-0">
              <button
                onClick={() => handleFilterChange("all")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === "all"
                    ? "bg-white text-[#0a0a0a] shadow-xs"
                    : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                }`}
              >
                ALL SOFTWARE ({softwareProjects.length})
              </button>
              <button
                onClick={() => handleFilterChange("fullstack")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === "fullstack"
                    ? "bg-white text-[#0a0a0a] shadow-xs"
                    : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                }`}
              >
                FULL-STACK &amp; EDTECH
              </button>
              <button
                onClick={() => handleFilterChange("healthcare")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === "healthcare"
                    ? "bg-white text-[#0a0a0a] shadow-xs"
                    : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                }`}
              >
                HEALTHCARE &amp; WEB
              </button>
              <button
                onClick={() => handleFilterChange("ecommerce")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === "ecommerce"
                    ? "bg-white text-[#0a0a0a] shadow-xs"
                    : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                }`}
              >
                E-COMMERCE &amp; APPS
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* ── InfoCard Grid: Software Projects ──────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${showAll}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 justify-items-center"
          >
            {visibleProjects.map((project, idx) => {
              const theme = PROJECT_CARD_THEME[project.id] ?? {
                borderColor: "var(--ic-border-color-1)",
                hoverTextColor: "#ffffff",
                image:
                  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 6) * 0.07,
                    ease: easeOutExpo,
                  }}
                  className="group relative w-full flex justify-center"
                >
                  {/* InfoCard */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="w-full"
                  >
                    <InfoCard
                      image={theme.image}
                      title={project.title}
                      description={project.shortDescription}
                      number={project.number}
                      category={project.category}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      technologies={project.technologies}
                      onViewCaseStudy={() => setSelectedProject(project)}
                      height={430}
                      borderColor={theme.borderColor}
                      borderBgColor="var(--ic-border-bg-color)"
                      cardBgColor="var(--ic-card-bg-color)"
                      shadowColor="var(--ic-shadow-color)"
                      textColor="var(--ic-text-color)"
                      hoverTextColor={theme.hoverTextColor}
                      fontFamily="var(--ic-font-family)"
                      rtlFontFamily="var(--ic-rtl-font-family)"
                      effectBgColor={theme.borderColor}
                      patternColor1="var(--ic-pattern-color1)"
                      patternColor2="var(--ic-pattern-color2)"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Expand / Collapse Button for 2-Row Software Grid */}
        {filteredProjects.length > 6 && (
          <div className="mt-14 flex flex-col items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-full bg-[#0a0a0a] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#2457d6] transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>
                {showAll
                  ? "SHOW LESS SOFTWARE PROJECTS ▲"
                  : `VIEW MORE SOFTWARE PROJECTS (${filteredProjects.length - 6} MORE) ▼`}
              </span>
            </motion.button>
          </div>
        )}

        {/* ── Empty state ────────────────────────────────────────────── */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#929292] font-mono text-sm">
            No projects in this category yet.
          </div>
        )}

        {/* =========================================================================
            HARDWARE & IOT LAB BUILDS SECTION (DEDICATED 3D ANIMATED DECK)
           ========================================================================= */}
        <SectionReveal delay={0.2} className="mt-28 pt-20 border-t border-[#e8e8e5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a0a0a] tracking-tight">
                Robotics, Sensors &amp;{" "}
                <span className="font-serif-accent font-normal text-[#2457d6]">
                  Embedded Firmware.
                </span>
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#6b6b6b] bg-[#f7f7f5] px-3 py-1.5 rounded-full border border-[#e8e8e5]">
              {hardwareProjects.length} HARDWARE BUILDS
            </span>
          </div>

          <AnimatedProjectsDeck
            items={hardwareProjects.map((p) => ({
              id: p.id,
              number: p.number,
              title: p.title,
              category: p.category,
              description: p.shortDescription,
              image: p.image,
              tech: p.technologies,
              githubUrl: p.githubUrl,
              caseStudy: p.caseStudy,
            }))}
            onItemClick={(item) => {
              const proj = allProjects.find((p) => p.id === item.id);
              if (proj) setSelectedProject(proj);
            }}
            autoplay={true}
          />
        </SectionReveal>

      </div>

      {/* Full Case Study Modal Lightbox */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

