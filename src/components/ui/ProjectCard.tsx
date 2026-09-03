"use client";

import React from "react";
import { ArrowUpRight, Code, Cpu, Globe, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isLarge?: boolean;
}

export function ProjectCard({ project, onSelect, isLarge = false }: ProjectCardProps) {
  // Visual schematic icons according to project category
  const renderVisualSchematic = () => {
    switch (project.id) {
      case "welfare-path":
        return (
          <div className="h-full w-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#fafafa] to-[#f0f4ff] border-b sm:border-b-0 sm:border-r border-[#e8e8e5] relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b6b6b]">
              <span className="flex items-center gap-1.5 font-bold text-[#2457d6]">
                <Globe size={13} />
                <span>AI SCHEME ENGINE</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8e8e5] text-[10px]">
                TA / EN
              </span>
            </div>

            {/* Mock Bilingual Search Interface */}
            <div className="my-6 space-y-2.5">
              <div className="p-3 bg-white rounded-lg border border-[#e8e8e5] shadow-xs">
                <div className="text-[10px] font-mono text-[#929292] uppercase">
                  Input Query / வினவல்
                </div>
                <div className="text-xs font-semibold text-[#0a0a0a] mt-0.5">
                  &quot;Farmer solar subsidy criteria in Tamil Nadu&quot;
                </div>
              </div>
              <div className="p-2.5 bg-[#2457d6]/10 rounded-lg border border-[#2457d6]/20 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#2457d6]">
                  Matched Schemes: 3 Verified
                </span>
                <span className="text-[10px] font-mono text-[#2457d6]">100% Eligible</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#929292]">
              <span>Next.js • Supabase • AI</span>
              <span>Bilingual NLP</span>
            </div>
          </div>
        );

      case "internship-portal":
        return (
          <div className="h-full w-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#f8f9fa] to-[#eef2f6] border-b sm:border-b-0 sm:border-r border-[#e8e8e5] relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b6b6b]">
              <span className="flex items-center gap-1.5 font-bold text-[#0a0a0a]">
                <MapPin size={13} className="text-[#2457d6]" />
                <span>MAP-FIRST CRM</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8e8e5] text-[10px]">
                GIS + Prisma
              </span>
            </div>

            {/* Map-style visual mockup */}
            <div className="my-5 p-3.5 bg-white rounded-lg border border-[#e8e8e5] shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0a0a0a]">
                  Engineering Colleges (TN Zone)
                </span>
                <span className="text-[10px] font-mono text-[#198754]">● Active Map</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="p-1.5 bg-[#f7f7f5] rounded text-center">
                  <div className="text-[9px] font-mono text-[#929292]">Visited</div>
                  <div className="text-xs font-bold text-[#0a0a0a]">28</div>
                </div>
                <div className="p-1.5 bg-[#eaf0ff] rounded text-center">
                  <div className="text-[9px] font-mono text-[#2457d6]">Pipeline</div>
                  <div className="text-xs font-bold text-[#2457d6]">42</div>
                </div>
                <div className="p-1.5 bg-[#f7f7f5] rounded text-center">
                  <div className="text-[9px] font-mono text-[#929292]">Closed</div>
                  <div className="text-xs font-bold text-[#0a0a0a]">16</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#929292]">
              <span>Leaflet • PostgreSQL</span>
              <span>TARCIN Robotics</span>
            </div>
          </div>
        );

      case "smart-water-purifier":
        return (
          <div className="h-full w-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#fafafa] to-[#f0fbf8] border-b sm:border-b-0 sm:border-r border-[#e8e8e5] relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b6b6b]">
              <span className="flex items-center gap-1.5 font-bold text-[#198754]">
                <Cpu size={13} />
                <span>ESP32 TELEMETRY</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8e8e5] text-[10px]">
                Auto Relay
              </span>
            </div>

            <div className="my-5 p-3.5 bg-white rounded-lg border border-[#e8e8e5] shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#6b6b6b]">Water Purity Index</span>
                <span className="text-[11px] font-bold text-[#198754]">PURE (TDS: 42 ppm)</span>
              </div>
              <div className="w-full bg-[#f0f0ed] h-2 rounded-full overflow-hidden">
                <div className="bg-[#198754] h-full w-[82%]" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#929292] pt-1">
                <span>Tank Volume: 92%</span>
                <span>Turbidity: Normal</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#929292]">
              <span>TDS • Ultrasonic • DHT11</span>
              <span>Embedded C++</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full w-full p-6 flex flex-col justify-between bg-[#fafafa] border-b sm:border-b-0 sm:border-r border-[#e8e8e5]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#6b6b6b]">
              <span className="flex items-center gap-1.5 font-bold text-[#0a0a0a]">
                <Code size={13} className="text-[#2457d6]" />
                <span>SYSTEM ARCHITECTURE</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8e8e5] text-[10px]">
                IoT / AI
              </span>
            </div>

            <div className="my-6 p-4 bg-white rounded-lg border border-[#e8e8e5] text-center">
              <div className="text-xs font-bold text-[#0a0a0a]">{project.title}</div>
              <div className="text-[11px] text-[#6b6b6b] mt-1">{project.highlight}</div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#929292]">
              <span>Hardware + Software</span>
              <span>Working Prototype</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`group rounded-2xl border border-[#e8e8e5] bg-white overflow-hidden hover:border-[#d8d8d3] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col ${isLarge ? "lg:col-span-12" : "lg:col-span-6"}`}>
      <div className={`grid grid-cols-1 ${isLarge ? "lg:grid-cols-12" : "lg:grid-cols-1"} h-full`}>
        {/* Left / Top Schematic Visual */}
        <div className={isLarge ? "lg:col-span-5 min-h-[220px]" : "min-h-[190px]"}>
          {renderVisualSchematic()}
        </div>

        {/* Right / Content Details */}
        <div className={`p-6 sm:p-8 flex flex-col justify-between ${isLarge ? "lg:col-span-7" : ""}`}>
          <div>
            {/* Top metadata */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#2457d6]">
                {project.number}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#929292]">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] tracking-tight group-hover:text-[#2457d6] transition-colors">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed mt-2.5">
              {project.shortDescription}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#f7f7f5] border border-[#e8e8e5] text-[11px] font-mono text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-[#e8e8e5] flex items-center justify-between">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0a0a0a] group-hover:text-[#2457d6] transition-colors cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                  aria-label="View on GitHub"
                >
                  <GithubIcon size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
