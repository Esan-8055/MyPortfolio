"use client";

import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ContactProps {
  onOpenContact: () => void;
}

export function Contact({ onOpenContact }: ContactProps) {
  return (
    <section id="contact" className="bg-white relative overflow-hidden select-none">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center">

            <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tight leading-[1.02] max-w-5xl mx-auto">
              Have an idea?{" "}
              <span className="font-serif-accent font-normal italic text-[#2457d6] block sm:inline">
                Let&apos;s build it.
              </span>
            </h2>
          </div>
        }
      >
        <div className="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-between">
          <div>
            <p className="text-xs sm:text-lg md:text-xl text-[#6b6b6b] leading-relaxed mb-4 sm:mb-6 text-center sm:text-left font-medium">
              Open to software development engineering roles, full-stack internships, AI &amp; IoT collaborations, and high-impact technical projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <button
                onClick={onOpenContact}
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#2457d6] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#1a44ab] transition-all duration-300 flex items-center gap-2 group shadow-md cursor-pointer active:scale-95"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>

              <a
                href={personalInfo.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white border border-[#d8d8d3] text-[#0a0a0a] text-xs font-mono font-bold tracking-wider hover:border-[#0a0a0a] transition-all duration-300 flex items-center gap-2 shadow-xs"
              >
                <FileText size={15} className="text-[#2457d6]" />
                <span>VIEW CV / RESUME</span>
              </a>
            </div>

            {/* Handshake Lottie Animation (Inside the red box) */}
            <div className="w-full flex items-center justify-center my-1 sm:my-2 pointer-events-none">
              <div className="w-full max-w-[220px] sm:max-w-[320px] h-[120px] sm:h-[200px]">
                <DotLottieReact
                  src="/Handshake.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>

          {/* Direct Info Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#e8e8e5]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#929292] block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-xs sm:text-sm font-bold text-[#0a0a0a] hover:text-[#2457d6] transition-colors break-all font-mono"
              >
                {personalInfo.contact.email}
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-[#929292] block mb-1">
                Phone Contact
              </span>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="text-xs sm:text-sm font-bold text-[#0a0a0a] hover:text-[#2457d6] transition-colors font-mono"
              >
                {personalInfo.contact.phone}
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-[#929292] block mb-1">
                Professional Networks
              </span>
              <div className="flex items-center gap-4 mt-0.5 font-mono">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0a0a0a] hover:text-[#2457d6] transition-colors"
                >
                  GitHub
                </a>
                <span className="text-[#d8d8d3]">/</span>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0a0a0a] hover:text-[#2457d6] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
