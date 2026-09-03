"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Layers, CheckCircle2, AlertCircle, Lightbulb, UserCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { easeOutExpo } from "@/lib/motion";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Lock background page scroll strictly when modal is active
  useEffect(() => {
    if (project) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  // Defensive prop parsing to handle both featured and secondary project shapes
  const technologies = project.technologies || (project as any).tech || [];
  const fullDescription =
    project.fullDescription ||
    (project as any).description ||
    project.shortDescription ||
    "";

  const caseStudy = project.caseStudy || {
    problem:
      (project as any).description ||
      "Architecting embedded and software systems to solve real-world problems.",
    solution:
      "Designed scalable hardware-software integration with real-time telemetry and user-centered interface.",
    myRole: "Lead Developer & Hardware Prototyper.",
    architecture: [
      "Microcontroller hub & firmware algorithms",
      "Real-time sensor telemetry & data logging",
      "Responsive web dashboard interface",
    ],
    keyFeatures: [
      "Hardware-software synchronization",
      "Low-latency data processing",
      "Automated alerts & fail-safe controls",
    ],
    challenges:
      "Optimizing wireless sensor communication and power efficiency.",
    learned:
      "Embedded sensor telemetry, FreeRTOS task scheduling, and full-stack integration.",
  };

  return (
    <AnimatePresence>
      {/* Outer shell — z-[100] sits on top of all navbars/headers, centered with top padding so it never touches top navbar */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 pb-6 overflow-hidden">
        {/* Backdrop — dark frosted blur covers full screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window — Max height capped to (100vh - 130px) so top & bottom never touch navbar/screen edges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#e8e8e5] shadow-2xl z-10 flex flex-col overflow-hidden"
          style={{ maxHeight: "calc(100vh - 130px)" }}
        >
          {/* Modal Fixed Top Header */}
          <div className="shrink-0 bg-white px-6 sm:px-8 py-4 border-b border-[#e8e8e5] flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#2457d6]">
                PROJECT {project.number}
              </span>
              <span className="text-[#d8d8d3]">/</span>
              <span className="text-xs font-mono uppercase text-[#6b6b6b] tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#e8e8e5] text-[#0a0a0a] hover:bg-[#f7f7f5] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content — ONLY THIS AREA SCROLLS */}
          <div
            className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 min-h-0"
            style={{ overscrollBehavior: "contain" }}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Hero Project Image Banner */}
            {project.image && (
              <div className="w-full h-52 sm:h-72 rounded-2xl overflow-hidden border border-[#e8e8e5] relative shadow-xs bg-[#f7f7f5] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6b6b6b] mt-2 leading-relaxed">
                {fullDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            {technologies && technologies.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase text-[#929292] tracking-wider block mb-2.5">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#f7f7f5] border border-[#e8e8e5] text-xs font-mono text-[#111111]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#fafafa] border border-[#e8e8e5]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                  <AlertCircle size={15} className="text-[#2457d6]" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#f7f7f5] border border-[#e8e8e5]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                  <CheckCircle2 size={15} className="text-[#198754]" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Role & Contribution */}
            {caseStudy.myRole && (
              <div className="p-5 rounded-xl bg-white border border-[#e8e8e5]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">
                  <UserCheck size={15} className="text-[#2457d6]" />
                  <span>My Role & Contributions</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                  {caseStudy.myRole}
                </p>
              </div>
            )}

            {/* Architecture Highlights */}
            {caseStudy.architecture && caseStudy.architecture.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-3">
                  <Layers size={15} className="text-[#2457d6]" />
                  <span>System Architecture</span>
                </div>
                <ul className="space-y-2">
                  {caseStudy.architecture.map((item: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#6b6b6b] flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2457d6] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Features */}
            {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a0a0a] block mb-3">
                  Key Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.keyFeatures.map((feat: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[#e8e8e5] bg-[#ffffff] flex items-center gap-2 text-xs text-[#111111]"
                    >
                      <span className="w-1 h-3 bg-[#2457d6] rounded-full flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Learnings */}
            {caseStudy.learned && (
              <div className="p-5 rounded-xl bg-[#eaf0ff]/50 border border-[#2457d6]/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2457d6] mb-2">
                  <Lightbulb size={15} />
                  <span>Key Engineering Takeaways</span>
                </div>
                <p className="text-xs sm:text-sm text-[#111111] leading-relaxed">
                  {caseStudy.learned}
                </p>
              </div>
            )}
          </div>

          {/* Modal Fixed Bottom Footer */}
          <div className="shrink-0 bg-white px-6 sm:px-8 py-3.5 border-t border-[#e8e8e5] flex flex-wrap items-center justify-between gap-3 z-20">
            <div className="text-[11px] font-mono text-[#929292]">
              Verified Developer Case Study
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-[#d8d8d3] text-xs font-semibold text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#2457d6] text-white text-xs font-semibold hover:bg-[#1a44ab] transition-colors flex items-center gap-1.5"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
