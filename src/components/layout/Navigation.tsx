"use client";

import React, { useState, useEffect } from "react";
import { Menu, ArrowUpRight, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { SurrealToggle } from "@/components/ui/SurrealToggle";

interface NavigationProps {
  onOpenContact: () => void;
  surrealMode?: boolean;
  onToggleSurreal?: () => void;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
];

export function Navigation({
  onOpenContact,
  surrealMode = true,
  onToggleSurreal = () => {},
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-2.5 sm:px-4 py-3 sm:py-4 md:py-6 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2.5 sm:gap-6 md:gap-8 px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md border-[#d8d8d3] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "bg-white/75 backdrop-blur-sm border-[#e8e8e5] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold tracking-wider sm:tracking-[0.2em] text-[#0a0a0a] uppercase hover:text-[#2457d6] transition-colors shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#2457d6] inline-block animate-pulse shrink-0" />
            <span className="truncate max-w-[120px] xs:max-w-none">{personalInfo.displayName}</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-wide text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#2457d6] hover:after:w-full after:transition-all after:duration-250"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={personalInfo.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full border border-[#e8e8e5] text-[11px] font-semibold tracking-wider text-[#111111] hover:border-[#111111] hover:bg-[#fafafa] transition-all flex items-center gap-1.5"
              >
                <FileText size={12} className="text-[#2457d6]" />
                <span>CV</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-4 py-1.5 rounded-full bg-[#0a0a0a] text-white text-[11px] font-semibold tracking-wider hover:bg-[#2457d6] transition-all duration-250 flex items-center gap-1 shadow-sm cursor-pointer"
              >
                <span>CONTACT</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-full border border-[#e8e8e5] text-[#0a0a0a] hover:bg-[#f7f7f5] transition-colors lg:hidden cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={16} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </>
  );
}
