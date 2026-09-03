"use client";

import React from "react";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Big Brand Signature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2457d6]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-white uppercase">
                {personalInfo.displayName}
              </span>
            </div>

            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-md">
              Software Developer & Full-Stack Engineer.
            </p>

            <p className="text-sm text-[#929292] font-mono">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            {/* Nav */}
            <div>
              <span className="text-[#6b6b6b] uppercase block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a href="#work" className="text-[#d8d8d3] hover:text-white transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#d8d8d3] hover:text-white transition-colors">
                    About Story
                  </a>
                </li>
                <li>
                  <a href="#journey" className="text-[#d8d8d3] hover:text-white transition-colors">
                    Journey
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-[#d8d8d3] hover:text-white transition-colors">
                    Tech Stack
                  </a>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div>
              <span className="text-[#6b6b6b] uppercase block mb-4">
                Experience
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a href="#experience" className="text-[#d8d8d3] hover:text-white transition-colors">
                    HYBIX IT Solutions
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-[#d8d8d3] hover:text-white transition-colors">
                    TARCIN Robotics
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-[#d8d8d3] hover:text-white transition-colors">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-[#d8d8d3] hover:text-white transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <span className="text-[#6b6b6b] uppercase block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d8d8d3] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d8d8d3] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-[#d8d8d3] hover:text-white transition-colors"
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.contact.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2457d6] hover:underline"
                  >
                    Resume PDF ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6b6b6b]">
          <div>
            © 2026 {personalInfo.name}. All rights reserved. Designed & Engineered with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#d8d8d3] hover:text-white transition-colors group cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
