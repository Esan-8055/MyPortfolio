"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";
import { easeOutExpo } from "@/lib/motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function MobileMenu({ isOpen, onClose, onOpenContact }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 md:hidden overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#e8e8e5]">
            <a
              href="#"
              onClick={onClose}
              className="text-xs font-bold tracking-[0.2em] text-[#0a0a0a] uppercase"
            >
              JEGATHEESAN
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#e8e8e5] text-[#0a0a0a] hover:bg-[#f7f7f5] transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div className="py-6 sm:py-8 flex flex-col space-y-3 sm:space-y-4 my-auto">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.04 }}
                className="text-xl sm:text-2xl font-semibold text-[#0a0a0a] hover:text-[#2457d6] transition-colors flex items-center justify-between group py-0.5"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#929292] font-mono group-hover:text-[#2457d6]">
                  0{idx + 1}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Bottom Actions & Socials */}
          <div className="pt-4 sm:pt-6 border-t border-[#e8e8e5] space-y-3.5 shrink-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={personalInfo.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full border border-[#d8d8d3] text-center text-xs font-semibold tracking-wider text-[#0a0a0a] hover:border-[#0a0a0a] transition-all flex items-center justify-center gap-2"
              >
                <FileText size={14} />
                <span>VIEW CV / RESUME</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex-1 py-2.5 px-4 rounded-full bg-[#2457d6] text-white text-center text-xs font-semibold tracking-wider hover:bg-[#1a44ab] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b6b6b] hover:text-[#2457d6] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-[#6b6b6b] hover:text-[#2457d6] transition-colors"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
