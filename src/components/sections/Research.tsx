"use client";

import React from "react";
import { BookOpen, Sparkles, ArrowUpRight } from "lucide-react";
import { researchItems } from "@/data/achievements";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Research() {
  return (
    <section id="research" className="py-20 md:py-28 bg-[#fafafa] border-b border-[#e8e8e5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionReveal>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#2457d6] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2457d6]" />
            <span>06 // RESEARCH & IDEAS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
              Investigating{" "}
              <span className="font-serif-accent font-normal text-[#2457d6]">
                accessibility.
              </span>
            </h2>
            <span className="text-xs font-mono text-[#6b6b6b]">
              Bridging academic investigation with working code
            </span>
          </div>
        </SectionReveal>

        {researchItems.map((item) => (
          <SectionReveal key={item.id} delay={0.1}>
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e8e8e5] shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#eaf0ff] text-[#2457d6] text-xs font-mono font-bold">
                  {item.status}
                </span>
                <span className="text-xs font-mono text-[#929292]">
                  {item.topic}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-4xl">
                {item.abstract}
              </p>

              <div className="mt-6 pt-5 border-t border-[#e8e8e5] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6b6b6b]">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-[#2457d6]" />
                  <span>Topic: Bilingual Natural Language Processing for Public Sector Inclusivity</span>
                </div>
                <span className="text-[#2457d6] font-semibold">
                  Project Welfare Path Case Study →
                </span>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
